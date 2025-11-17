import { Menu, IndianRupee } from "lucide-react";
import { useState } from "react";
import Tilt3D from "./Tilt3D";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <motion.div
        className="backdrop-blur bg-white/70 border-b border-black/5"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <Tilt3D intensity={10} hoverZ={12}>
            <div className="flex items-center gap-2 font-semibold text-gray-800 select-none">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" alt="India" className="w-6 h-4 rounded-sm border border-black/10"/>
              <span>Paws & Hearts India</span>
            </div>
          </Tilt3D>
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <Tilt3D><button onClick={() => scrollTo("impact")} className="hover:text-gray-900">Impact</button></Tilt3D>
            <Tilt3D><button onClick={() => scrollTo("donate")} className="hover:text-gray-900">Donate</button></Tilt3D>
            <Tilt3D><button onClick={() => scrollTo("stories")} className="hover:text-gray-900">Stories</button></Tilt3D>
            <Tilt3D>
              <a href="#donate" onClick={(e)=>{e.preventDefault();scrollTo('donate')}} className="inline-flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 shadow-lg">
                <IndianRupee size={16} /> Donate
              </a>
            </Tilt3D>
          </nav>
          <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)}><Menu /></button>
        </div>
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <Tilt3D><button onClick={() => scrollTo("impact")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Impact</button></Tilt3D>
            <Tilt3D><button onClick={() => scrollTo("donate")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Donate</button></Tilt3D>
            <Tilt3D><button onClick={() => scrollTo("stories")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Stories</button></Tilt3D>
          </div>
        )}
      </motion.div>
    </header>
  );
}
