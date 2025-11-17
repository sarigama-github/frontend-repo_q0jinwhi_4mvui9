import { useEffect, useMemo, useState } from "react";
import { Loader2, IndianRupee } from "lucide-react";
import Tilt3D from "./Tilt3D";
import UPICard from "./UPICard";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function DonateForm() {
  const [form, setForm] = useState({ name: "", email: "", amount: 300, animal: "all", message: "", recurring: false });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [recent, setRecent] = useState([]);

  const canSubmit = useMemo(()=>{
    return form.name.length >= 2 && form.email.includes("@") && form.amount > 0;
  }, [form]);

  async function fetchRecent() {
    try {
      const res = await fetch(`${BACKEND_URL}/api/donations?limit=6`);
      if (res.ok) {
        const data = await res.json();
        setRecent(data);
      }
    } catch {}
  }

  useEffect(()=>{ fetchRecent(); }, []);

  async function submit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setSuccess(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/donations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess("Dhanyavaad! Your kindness makes a real difference. 💛");
      setForm({ name: "", email: "", amount: 300, animal: "all", message: "", recurring: false });
      fetchRecent();
    } catch (e) {
      setSuccess("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="donate" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <Tilt3D intensity={8}>
            <h3 className="text-3xl font-bold text-gray-900">Your kindness feeds lives</h3>
          </Tilt3D>
          <Tilt3D intensity={6}>
            <p className="mt-3 text-gray-700">Choose an amount and a cause. Contributions are processed in INR and eligible for 80G.</p>
          </Tilt3D>
          <Tilt3D hoverZ={26}>
            <form onSubmit={submit} className="mt-6 p-6 bg-white rounded-2xl border border-black/5 shadow-sm space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <input className="px-4 py-3 rounded-xl border border-black/10" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                <input className="px-4 py-3 rounded-xl border border-black/10" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[300,700,1500].map(v=> (
                  <button type="button" key={v} onClick={()=>setForm({...form,amount:v})} className={`px-4 py-3 rounded-xl border text-sm ${form.amount===v? 'bg-emerald-600 text-white border-emerald-600':'border-black/10 bg-white'}`}>₹{v}</button>
                ))}
                <input type="number" min={1} value={form.amount} onChange={e=>setForm({...form,amount:parseFloat(e.target.value)})} className="col-span-3 px-4 py-3 rounded-xl border border-black/10" placeholder="Custom amount (₹)" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select value={form.animal} onChange={e=>setForm({...form,animal:e.target.value})} className="px-4 py-3 rounded-xl border border-black/10">
                  <option value="all">All animals</option>
                  <option value="dogs">Dogs</option>
                  <option value="cows">Cows</option>
                </select>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" checked={form.recurring} onChange={e=>setForm({...form,recurring:e.target.checked})} />
                  Make it monthly
                </label>
              </div>
              <textarea rows="3" className="w-full px-4 py-3 rounded-xl border border-black/10" placeholder="Message (optional)" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
              <button disabled={!canSubmit || loading} className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-xl hover:bg-emerald-700 disabled:opacity-60">
                {loading ? <Loader2 className="animate-spin" size={18}/> : <IndianRupee size={18} />} Donate {form.amount ? `₹${form.amount}` : ""}
              </button>
              {success && <p className="text-sm text-gray-700">{success}</p>}
            </form>
          </Tilt3D>
        </div>
        <div className="space-y-4">
          <Tilt3D intensity={8}><h4 className="text-xl font-semibold text-gray-900">Recent supporters</h4></Tilt3D>
          <div className="grid sm:grid-cols-2 gap-4">
            {recent.map((r)=> (
              <Tilt3D key={r.id} hoverZ={16}>
                <div className="p-4 rounded-xl bg-white border border-black/5 shadow-sm">
                  <div className="font-medium text-gray-900">{r.name}</div>
                  <div className="text-sm text-gray-600">{r.animal} • ₹{r.amount}</div>
                  {r.message && <p className="mt-2 text-sm text-gray-700">“{r.message}”</p>}
                </div>
              </Tilt3D>
            ))}
            {recent.length===0 && <div className="text-gray-600">Be the first to donate today.</div>}
          </div>
          {/* UPI quick pay card with 3D flip */}
          <UPICard />
        </div>
      </div>
    </section>
  );
}
