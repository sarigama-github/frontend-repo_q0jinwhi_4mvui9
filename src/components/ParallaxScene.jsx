import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxScene({ children }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -40]);
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div style={{ y: y1 }} className="absolute -top-32 -left-24 w-[60rem] h-[60rem] bg-emerald-300/30 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute -bottom-40 -right-24 w-[60rem] h-[60rem] bg-amber-300/30 rounded-full blur-3xl" />
      {children}
    </div>
  );
}
