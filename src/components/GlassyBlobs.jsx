import { motion, useReducedMotion } from "framer-motion";

export default function GlassyBlobs() {
  const prefersReduced = useReducedMotion();
  const commonStyle = {
    filter: "blur(36px)",
    WebkitBackdropFilter: "saturate(120%) blur(6px)",
    mixBlendMode: "screen",
  };

  if (prefersReduced) {
    return (
      <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
        <div
          className="absolute top-[-15%] left-[-10%] w-[50rem] h-[50rem] rounded-[40%]"
          style={{
            ...commonStyle,
            background:
              "radial-gradient(closest-side, rgba(16,185,129,0.25), rgba(16,185,129,0.12) 60%, transparent), radial-gradient(closest-side, rgba(251,191,36,0.18), transparent)",
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[54rem] h-[54rem] rounded-[45%]"
          style={{
            ...commonStyle,
            background:
              "radial-gradient(closest-side, rgba(251,191,36,0.25), rgba(251,191,36,0.12) 60%, transparent), radial-gradient(closest-side, rgba(16,185,129,0.18), transparent)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
      {/* Soft glassy gradient blobs with subtle morph/float; dimmed to reduce overdraw */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[50rem] h-[50rem] rounded-[40%]"
        style={{
          ...commonStyle,
          background:
            "radial-gradient(closest-side, rgba(16,185,129,0.25), rgba(16,185,129,0.12) 60%, transparent), radial-gradient(closest-side, rgba(251,191,36,0.18), transparent)",
        }}
        animate={{
          borderTopLeftRadius: ["40% 60%", "60% 40%", "45% 55%", "40% 60%"],
          borderTopRightRadius: ["60% 40%", "40% 60%", "50% 50%", "60% 40%"],
          x: [0, 16, -8, 0],
          y: [0, -8, 8, 0],
          rotate: [0, 4, -2, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[54rem] h-[54rem] rounded-[45%]"
        style={{
          ...commonStyle,
          background:
            "radial-gradient(closest-side, rgba(251,191,36,0.25), rgba(251,191,36,0.12) 60%, transparent), radial-gradient(closest-side, rgba(16,185,129,0.18), transparent)",
        }}
        animate={{
          borderBottomLeftRadius: ["55% 45%", "40% 60%", "50% 50%", "55% 45%"],
          x: [0, -12, 8, 0],
          y: [0, 8, -6, 0],
          rotate: [0, -3, 2, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
