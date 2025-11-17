import { Heart, ShieldCheck, Leaf } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero({ onDonateClick }) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 w-[50rem] h-[50rem] bg-rose-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-24 w-[50rem] h-[50rem] bg-amber-300/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Feed. Heal. Love.
          </h1>
          <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            Join a community of animal lovers saving dogs, cows, and every precious life. Your kindness today means a full stomach and a safer tomorrow.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={onDonateClick} className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800">
              <Heart size={18} /> Donate Now
            </button>
            <a href="#impact" className="px-6 py-3 rounded-xl bg-white/70 border border-black/10 hover:bg-white">See Our Impact</a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-sm text-gray-700">
            <div className="flex items-center gap-2"><ShieldCheck className="text-emerald-600" size={18}/>100% Secure</div>
            <div className="flex items-center gap-2"><Leaf className="text-amber-600" size={18}/>Tax-deductible</div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1600&auto=format&fit=crop" alt="Happy rescued dog" className="w-full h-[420px] object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-black/5">
            <p className="text-sm text-gray-700">Every $15 feeds a street dog for a week.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
