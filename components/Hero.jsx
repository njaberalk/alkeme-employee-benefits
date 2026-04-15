'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand" style={{ paddingTop: '16rem', paddingBottom: '8rem' }}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
          alt="Professional team collaborating in a modern office for employee benefits consulting"
          width={1920}
          height={1080}
          loading="eager"
          fetchpriority="high"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.5, objectPosition: '50% 30%', filter: 'grayscale(100%)' }}
        />
        <div className="absolute inset-0 bg-brand" style={{ opacity: 0.45 }} />
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.08,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '128px 128px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
          <h1
            className="font-extrabold tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5.5rem)',
              lineHeight: '1',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
            }}
          >
            <span className="text-stone">Invest in</span>
            <br />
            <span className="text-gold">Your People.</span>
          </h1>

          <p
            className="text-cream font-medium mb-12"
            style={{
              fontSize: '1.25rem',
              lineHeight: '1.65',
              maxWidth: '550px',
              textShadow: '0 1px 8px rgba(0,0,0,0.2)',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
            }}
          >
            We help employers build better benefits programs. Our team handles group health, dental, vision, and retirement plans. We serve businesses of all sizes in all 50 states.
          </p>

          <p
            className="text-cream/80 mb-8"
            style={{
              fontSize: '0.95rem',
              lineHeight: '1.6',
              maxWidth: '550px',
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.38s, transform 0.6s ease 0.38s',
            }}
          >
            ALKEME is a licensed insurance broker. We offer employee benefits such as group health, dental, vision, and retirement plans. We serve employers in every state.
          </p>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease 0.45s, transform 0.6s ease 0.45s',
            }}
          >
            <button
              onClick={() => window.dispatchEvent(new Event('open-quote-modal'))}
              className="inline-flex items-center justify-center border-2 border-brand bg-brand text-stone text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand cursor-pointer"
              style={{ padding: '0.8rem 2.5rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}
            >
              Get a Benefits Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
