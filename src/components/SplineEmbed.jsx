import { useEffect, useRef } from "react";

// Lightweight Spline iframe embed to avoid adding new deps
export default function SplineEmbed({ url, className = "w-full h-[360px] rounded-2xl overflow-hidden border border-black/5 shadow-xl" }) {
  const ref = useRef(null);
  useEffect(()=>{
    // noop; placeholder for future message API if needed
  },[]);
  return (
    <div className={className}>
      <iframe ref={ref} src={url} title="3D Scene" className="w-full h-full" allow="autoplay; xr-spatial-tracking; gyroscope; accelerometer" />
    </div>
  );
}
