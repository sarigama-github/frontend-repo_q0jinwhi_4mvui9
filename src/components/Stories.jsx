export default function Stories() {
  const items = [
    {
      img: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1600&auto=format&fit=crop",
      title: "Brownie found a forever home",
      text: "Rescued from the streets, healed and adopted by a lovely family.",
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
      title: "Rani the cow is safe",
      text: "Given shelter, medical care, and a peaceful life at our sanctuary.",
    },
    {
      img: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1600&auto=format&fit=crop",
      title: "Feeding drive every Sunday",
      text: "Volunteers serve nutritious meals across city hotspots.",
    },
  ];

  return (
    <section id="stories" className="py-16 bg-gradient-to-t from-white to-amber-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Stories of Hope</h2>
          <p className="mt-3 text-gray-700">A glimpse of what your generosity creates.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <article key={idx} className="overflow-hidden rounded-2xl bg-white border border-black/5 shadow-sm">
              <img className="h-48 w-full object-cover" src={it.img} alt={it.title} />
              <div className="p-5">
                <h3 className="font-semibold text-gray-900">{it.title}</h3>
                <p className="text-gray-700 mt-1 text-sm">{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
