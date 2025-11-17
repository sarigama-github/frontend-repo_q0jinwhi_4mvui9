import { useMemo } from "react";

// Spline iframe embed with sensible defaults and easy override
export default function SplineEmbed({ url, className = "w-full h-[360px] rounded-2xl overflow-hidden border border-black/5 shadow-xl" }) {
  const fallback = "https://prod.spline.design/yQYzS1k1s7wJqkzD/scene.splinecode"; // cleaner, high-contrast scene
  const safeUrl = useMemo(() => (typeof url === "string" && url.length > 0 ? url : fallback), [url]);
  return (
    <div className={className}>
      <iframe
        src={safeUrl}
        title="3D Scene"
        className="w-full h-full"
        allow="autoplay; xr-spatial-tracking; gyroscope; accelerometer"
        loading="lazy"
      />
    </div>
  );
}
