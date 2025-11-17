import GlassyBlobs from "./GlassyBlobs";
import Particles from "./Particles";
import ParallaxScene from "./ParallaxScene";

export default function EnhancedParallax() {
  return (
    <div className="absolute inset-0 -z-20">
      <GlassyBlobs />
      <ParallaxScene />
      <Particles />
    </div>
  );
}
