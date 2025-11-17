import { PawPrint, Bone, Heart, Star } from "lucide-react";

function Stat({ label, value, icon: Icon, color }) {
  return (
    <div className="p-6 rounded-2xl bg-white border border-black/5 shadow-sm">
      <div className={`w-10 h-10 rounded-xl grid place-items-center ${color} text-white mb-3`}>
        <Icon size={18} />
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="py-16 bg-gradient-to-br from-white to-rose-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Real Impact, Every Day</h2>
          <p className="mt-3 text-gray-700">Transparent, tangible outcomes driven by your kindness.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          <Stat label="Animals Fed" value="12,540+" icon={PawPrint} color="bg-amber-500" />
          <Stat label="Rescues" value="890+" icon={Heart} color="bg-rose-500" />
          <Stat label="Shelter Capacity" value="310+" icon={Star} color="bg-emerald-500" />
          <Stat label="Meals per $15" value="7" icon={Bone} color="bg-indigo-500" />
        </div>
      </div>
    </section>
  );
}
