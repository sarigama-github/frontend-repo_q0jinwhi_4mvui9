import { useEffect } from "react";

export default function DepthCursor() {
  useEffect(() => {
    const spot = document.createElement("div");
    spot.style.position = "fixed";
    spot.style.inset = "0";
    spot.style.pointerEvents = "none";
    spot.style.zIndex = "-5";
    spot.style.background =
      "radial-gradient(520px circle at var(--mx) var(--my), rgba(255,255,255,0.12), transparent 40%), radial-gradient(1000px circle at var(--mx) var(--my), rgba(16,185,129,0.06), transparent 45%)";
    spot.style.filter = "blur(0.5px)";

    const glow = document.createElement("div");
    glow.style.position = "fixed";
    glow.style.inset = "0";
    glow.style.pointerEvents = "none";
    glow.style.mixBlendMode = "screen";
    glow.style.zIndex = "-6";
    glow.style.background =
      "radial-gradient(120px circle at var(--mx) var(--my), rgba(251,191,36,0.28), transparent 55%)";
    glow.style.filter = "blur(18px) saturate(115%)";

    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
    const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)");

    if (!prefersReduced?.matches) {
      document.body.appendChild(spot);
      document.body.appendChild(glow);
    }

    const onMove = (e) => {
      const x = e.clientX + "px";
      const y = e.clientY + "px";
      spot.style.setProperty("--mx", x);
      spot.style.setProperty("--my", y);
      glow.style.setProperty("--mx", x);
      glow.style.setProperty("--my", y);
    };

    // On coarse pointer or reduced motion, disable heavy effect
    const enable = !(prefersReduced?.matches || isCoarse?.matches);
    if (enable) window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
      spot.remove();
      glow.remove();
    };
  }, []);

  return null;
}
