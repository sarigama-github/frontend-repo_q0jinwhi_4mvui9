import { ShieldCheck, Leaf, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import Tilt3D from "./Tilt3D";
import MagneticButton from "./MagneticButton";
import SplineEmbed from "./SplineEmbed";

export default function Hero({ onDonateClick }) {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      {/* 3D Spline embed alongside hero to add floating paw/heart */}
      <div className="absolute inset-x-0 top-24 -z-10 opacity-80">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div />
          <SplineEmbed url="https://prod.spline.design/yQYzS1k1s7wJqkzD/scene.splinecode" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Tilt3D intensity={10}>
            <motion.p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-medium"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              🇮🇳 Serving animals across India • 80G eligible
            </motion.p>
          </Tilt3D>

          <Tilt3D intensity={8}>
            <motion.h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Feed. Heal. Love. For India’s voiceless.
            </motion.h1>
          </Tilt3D>

          <Tilt3D intensity={6}>
            <motion.p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Join a community of animal lovers saving dogs, cows and every precious life across our cities and villages. Your support today brings a full stomach and a safer tomorrow.
            </motion.p>
          </Tilt3D>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <MagneticButton onClick={onDonateClick} className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl hover:bg-emerald-700">
              <IndianRupee size={18} /> Donate Now
            </MagneticButton>
            <Tilt3D hoverZ={20}>
              <a href="#impact" className="px-6 py-3 rounded-xl bg-white/70 border border-black/10 hover:bg-white shadow">
                See Our Impact
              </a>
            </Tilt3D>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-gray-700">
            <Tilt3D intensity={4}><div className="flex items-center gap-2"><ShieldCheck className="text-emerald-600" size={18}/>100% Secure</div></Tilt3D>
            <Tilt3D intensity={4}><div className="flex items-center gap-2"><Leaf className="text-amber-600" size={18}/>80G receipts</div></Tilt3D>
          </div>
        </div>

        <Tilt3D intensity={12} hoverZ={28}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5">
              <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop" alt="Happy rescued dog" className="w-full h-[420px] object-cover" />
            </div>
            <motion.div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-black/5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm text-gray-700">Every ₹300 feeds a street dog for a week.</p>
            </motion.div>
          </motion.div>
        </Tilt3D>
      </div>
    </section>
  );
}
