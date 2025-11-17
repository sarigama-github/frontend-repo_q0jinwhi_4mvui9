import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Tilt3D from "./Tilt3D";

export default function MagneticButton({ children, className = "", onClick, as = "button" }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const [ripple, setRipple] = useState(null);

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x * 0.3);
    my.set(y * 0.3);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }
  function onDown(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y, key: Math.random() });
    setTimeout(() => setRipple(null), 500);
  }

  const Comp = as;
  return (
    <Tilt3D hoverZ={24} intensity={8}>
      <motion.div style={{ x: sx, y: sy }}>
        <Comp
          ref={ref}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          onMouseDown={onDown}
          onClick={onClick}
          className={`relative overflow-hidden ${className}`}
        >
          {children}
          {ripple && (
            <span
              key={ripple.key}
              className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30"
              style={{ left: ripple.x, top: ripple.y, width: 10, height: 10, animation: "ripple 0.6s ease-out" }}
            />
          )}
        </Comp>
      </motion.div>
    </Tilt3D>
  );
}
