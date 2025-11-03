import React from 'react';

const testimonials = [
  {
    quote: 'Hands down the best campus CTF this year!',
    by: 'Participant, NMIT',
  },
  {
    quote: 'Challenges were top-tier and realistic.',
    by: 'OffSec rep',
  },
  {
    quote: 'Organized brilliantly by Team TRIADA.',
    by: 'Faculty coordinator',
  },
];

const sponsors = [
  {
    name: 'Acme Security',
    logo:
      'https://images.unsplash.com/photo-1611162618071-b39a2ec0fbcc?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'CyberNet',
    logo:
      'https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'DevCloud',
    logo:
      'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'SecureWave',
    logo:
      'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=400&auto=format&fit=crop',
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 text-gray-900">
      {/* Testimonials */}
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Testimonials
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm"
            >
              <p className="text-gray-800">“{t.quote}”</p>
              <cite className="mt-3 block text-sm text-gray-600">— {t.by}</cite>
            </blockquote>
          ))}
        </div>
      </div>

      {/* Sponsors */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Thank You Sponsors</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sponsors.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-center rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
              title={s.name}
            >
              <img
                src={s.logo}
                alt={s.name}
                className="h-14 w-28 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Aftermovie / Highlights */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <h2 className="text-2xl font-semibold">Aftermovie / Highlights</h2>
        <p className="mt-2 text-gray-600">Relive the best moments from TRIADA CTF ’25.</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TRIADA CTF ’25 Highlights"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-600 md:flex-row">
          <div>© {new Date().getFullYear()} TRIADA. All rights reserved.</div>
          <nav className="flex flex-wrap items-center gap-4">
            <a className="hover:text-gray-900" href="#gallery">Gallery</a>
            <a className="hover:text-gray-900" href="https://example.com/writeups" target="_blank" rel="noreferrer">
              Writeups
            </a>
            <a className="hover:text-gray-900" href="https://discord.com/invite/triada" target="_blank" rel="noreferrer">
              Discord
            </a>
            <a className="hover:text-gray-900" href="https://twitter.com/" target="_blank" rel="noreferrer">
              X / Twitter
            </a>
            <a className="hover:text-gray-900" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
