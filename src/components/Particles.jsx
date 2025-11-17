import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function Particles({ baseCount = 80 }) {
  const prefersReduced = useReducedMotion();
  const [isCoarse, setIsCoarse] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(pointer: coarse)");
    const handler = () => setIsCoarse(!!mq.matches);
    if (mq && "addEventListener" in mq) mq.addEventListener("change", handler);
    handler();
    return () => {
      if (mq && "removeEventListener" in mq) mq.removeEventListener("change", handler);
    };
  }, []);

  if (prefersReduced) return null; // Respect reduced motion

  const count = Math.max(0, Math.round(baseCount * (isCoarse ? 0.35 : 1)));

  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.8,
        delay: Math.random() * 6,
        dur: 8 + Math.random() * 8,
        amp: 4 + Math.random() * 10,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-emerald-500/20 shadow-[0_0_8px_rgba(16,185,129,0.25)]"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -p.amp, 0, p.amp / 2, 0], opacity: [0.3, 0.6, 0.4, 0.55, 0.3] }}
          transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
