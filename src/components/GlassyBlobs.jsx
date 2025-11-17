import { motion } from "framer-motion";

export default function GlassyBlobs() {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Soft glassy gradient blobs with subtle morph/float */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[55rem] h-[55rem] rounded-[40%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.35), rgba(16,185,129,0.18) 60%, transparent), radial-gradient(closest-side, rgba(251,191,36,0.28), transparent)",
          filter: "blur(40px)",
          WebkitBackdropFilter: "saturate(120%) blur(6px)",
          mixBlendMode: "screen",
        }}
        animate={{
          borderTopLeftRadius: ["40% 60%", "60% 40%", "45% 55%", "40% 60%"],
          borderTopRightRadius: ["60% 40%", "40% 60%", "50% 50%", "60% 40%"],
          x: [0, 20, -10, 0],
          y: [0, -10, 10, 0],
          rotate: [0, 5, -3, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60rem] h-[60rem] rounded-[45%]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(251,191,36,0.35), rgba(251,191,36,0.18) 60%, transparent), radial-gradient(closest-side, rgba(16,185,129,0.25), transparent)",
          filter: "blur(42px)",
          WebkitBackdropFilter: "saturate(120%) blur(6px)",
          mixBlendMode: "screen",
        }}
        animate={{
          borderBottomLeftRadius: ["55% 45%", "40% 60%", "50% 50%", "55% 45%"],
          x: [0, -15, 10, 0],
          y: [0, 10, -8, 0],
          rotate: [0, -4, 3, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
