import { useMemo } from "react";
import { motion } from "framer-motion";

export default function Particles({ count = 80 }) {
  const particles = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 6,
      dur: 6 + Math.random() * 8,
      amp: 6 + Math.random() * 12,
    })), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {particles.map(p => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.35)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -p.amp, 0, p.amp/2, 0], opacity: [0.4, 0.8, 0.5, 0.7, 0.4] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
