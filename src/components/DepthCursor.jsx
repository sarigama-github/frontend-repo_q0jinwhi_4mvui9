import { useEffect, useRef } from "react";

export default function DepthCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const spot = document.createElement("div");
    spot.style.position = "fixed";
    spot.style.inset = "0";
    spot.style.pointerEvents = "none";
    spot.style.zIndex = "-5";
    spot.style.background =
      "radial-gradient(600px circle at var(--mx) var(--my), rgba(255,255,255,0.15), transparent 40%), radial-gradient(1200px circle at var(--mx) var(--my), rgba(16,185,129,0.08), transparent 45%)";
    spot.style.filter = "blur(0.5px)";
    document.body.appendChild(spot);

    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.inset = "0";
    glow.style.pointerEvents = "none";
    glow.style.mixBlendMode = "screen";
    glow.style.zIndex = "-6";
    glow.style.background =
      "radial-gradient(140px circle at var(--mx) var(--my), rgba(251,191,36,0.35), transparent 50%)";
    glow.style.filter = "blur(20px) saturate(120%)";
    document.body.appendChild(glow);

    function onMove(e) {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      spot.style.setProperty("--mx", x);
      spot.style.setProperty("--my", y);
      glow.style.setProperty("--mx", x);
      glow.style.setProperty("--my", y);
    }
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      spot.remove();
      glow.remove();
    };
  }, []);

  return <div ref={ref} />;
}
