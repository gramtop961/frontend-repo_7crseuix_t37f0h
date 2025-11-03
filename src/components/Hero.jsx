import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* Background event image with dark overlay */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }}
      />

      {/* Spline 3D scene as the main object */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay to ensure text contrast (does not block Spline interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
          TRIADA CTF ’25
        </span>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Thank you for making TRIADA CTF ’25 a huge success!
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 md:text-base">
          From intense challenges to electrifying finishes — your energy made it unforgettable. See highlights, winners, and moments below.
        </p>
      </div>
    </section>
  );
};

export default Hero;
