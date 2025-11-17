import { PawPrint, Heart, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-gray-800">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-amber-400 grid place-items-center text-white shadow">
            <PawPrint size={20} />
          </div>
          <span>Paws & Hearts</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-gray-700">
          <button onClick={() => scrollTo("impact")} className="hover:text-gray-900">Impact</button>
          <button onClick={() => scrollTo("donate")} className="hover:text-gray-900">Donate</button>
          <button onClick={() => scrollTo("stories")} className="hover:text-gray-900">Stories</button>
          <a href="#donate" onClick={(e)=>{e.preventDefault();scrollTo('donate')}} className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            <Heart size={16} /> Donate
          </a>
        </nav>
        <button className="md:hidden p-2" onClick={()=>setOpen(v=>!v)}><Menu /></button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <button onClick={() => scrollTo("impact")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Impact</button>
          <button onClick={() => scrollTo("donate")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Donate</button>
          <button onClick={() => scrollTo("stories")} className="block w-full text-left px-3 py-2 rounded-lg hover:bg-black/5">Stories</button>
        </div>
      )}
    </header>
  );
}
