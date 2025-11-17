import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Tilt3D
 * Wrap any element to give it interactive 3D tilt + hover lift and subtle float.
 * Props:
 * - intensity: number (default 12) controls max rotation
 * - hoverZ: number (default 18) controls lift on hover (px)
 * - float: boolean (default true) enables idle floating animation
 */
export default function Tilt3D({ children, intensity = 12, hoverZ = 18, float = true, className = "", style }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rX = useSpring(useTransform(y, [0, 1], [intensity, -intensity]), { stiffness: 200, damping: 20 });
  const rY = useSpring(useTransform(x, [0, 1], [-intensity, intensity]), { stiffness: 200, damping: 20 });
  const z = useSpring(0, { stiffness: 200, damping: 20 });

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    x.set(px);
    y.set(py);
  }
  function onLeave() {
    x.set(0.5);
    y.set(0.5);
    z.set(0);
  }
  function onEnter() {
    z.set(hoverZ);
  }

  const floatAnim = float ? {
    y: [0, -6, 0, 4, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
  } : {};

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onMouseEnter={onEnter}
      style={{
        transformStyle: "preserve-3d",
        rotateX: rX,
        rotateY: rY,
        translateZ: z,
        ...style,
      }}
      className={`[perspective:1000px] will-change-transform ${className}`}
      animate={floatAnim}
      initial={float ? { y: 0 } : undefined}
    >
      {/* inner wrapper to lift content into 3D */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
