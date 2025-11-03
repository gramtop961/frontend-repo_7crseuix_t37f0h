import React, { useState, useEffect, useCallback } from 'react';

const IMAGES = [
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555949963-aa79dcee981d?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1974&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1472653431158-6364773b2a56?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1974&auto=format&fit=crop',
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <section id="gallery" className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Gallery
            </h2>
            <p className="mt-2 text-gray-600">
              Snaps from the arena — teams grinding, winners on stage, sponsor love.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {IMAGES.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelected(src)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <img
                src={src}
                alt={`Event photo ${i + 1}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected}
              alt="Selected event"
              className="h-full w-full object-contain"
            />
            <button
              onClick={close}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 shadow hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
