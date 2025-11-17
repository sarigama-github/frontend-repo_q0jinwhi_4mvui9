import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import Tilt3D from "./Tilt3D";

export default function MagneticButton({ children, className = "", onClick, as = "button" }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const [isCoarse, setIsCoarse] = useState(false);
  const prefersReduced = useReducedMotion();
  const strength = isCoarse ? 0.15 : 0.3; // softer on touch
  const stiffness = isCoarse ? 160 : 200;
  const damping = isCoarse ? 22 : 20;
  const sx = useSpring(mx, { stiffness, damping });
  const sy = useSpring(my, { stiffness, damping });
  const [ripple, setRipple] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(pointer: coarse)");
    const handler = () => setIsCoarse(!!mq.matches);
    if (mq && "addEventListener" in mq) mq.addEventListener("change", handler);
    handler();
    return () => {
      if (mq && "removeEventListener" in mq) mq.removeEventListener("change", handler);
    };
  }, []);

  function onMove(e) {
    if (prefersReduced) return; // no magnetic if reduced motion
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x * strength);
    my.set(y * strength);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }
  function onDown(e) {
    if (prefersReduced) return;
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
    <Tilt3D hoverZ={isCoarse ? 14 : 24} intensity={isCoarse ? 6 : 8}>
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
          {ripple && !prefersReduced && (
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
