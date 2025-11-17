import { useState } from "react";
import Tilt3D from "./Tilt3D";
import { QrCode, Copy, Check } from "lucide-react";

const UPI_ID = "8726446470@ptaxis";

export default function UPICard() {
  const [flipped, setFlipped] = useState(false);
  const [copied, setCopied] = useState(false);

  const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=Paws%20%26%20Hearts%20India&cu=INR`;

  function copy() {
    navigator.clipboard.writeText(UPI_ID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  }

  return (
    <Tilt3D intensity={10} hoverZ={26}>
      <div className="[perspective:1000px]">
        <div className={`relative w-full rounded-2xl border border-black/5 shadow-xl bg-white [transform-style:preserve-3d] transition-transform duration-500 ${flipped ? '[transform:rotateY(180deg)]' : ''}`}>
          {/* Front */}
          <div className="absolute inset-0 backface-hidden p-5 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Donate via UPI</h4>
              <p className="text-sm text-gray-600 mt-1">Quick UPI transfer to support our work.</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-gray-800 font-mono text-sm">{UPI_ID}</div>
              <button onClick={copy} className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-900">
                {copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? 'Copied' : 'Copy'}
              </button>
            </div>
            <button onClick={() => setFlipped(true)} className="mt-4 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">
              <QrCode size={16}/> Show QR
            </button>
          </div>
          {/* Back */}
          <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden p-5 grid place-items-center">
            <div className="text-center">
              <img alt="UPI QR" src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUrl)}`} className="mx-auto rounded-lg border" />
              <a href={upiUrl} className="mt-4 inline-block text-sm text-emerald-700 hover:text-emerald-900">Open in UPI app</a>
              <div>
                <button onClick={() => setFlipped(false)} className="mt-3 text-sm text-gray-600 underline">Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Tilt3D>
  );
}
