'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Basic coverage metadata for cross-linking
const allCoverages = {
  'group-health-insurance': { title: 'Group Health Insurance', desc: 'Employer-sponsored medical coverage' },
  'dental-insurance': { title: 'Dental Insurance', desc: 'Preventive, basic, and major dental plans' },
  'vision-insurance': { title: 'Vision Insurance', desc: 'Eye exams, frames, and contacts coverage' },
  'life-insurance': { title: 'Life Insurance', desc: 'Group term life and AD&D benefits' },
  'disability-insurance': { title: 'Disability Insurance', desc: 'Short-term and long-term disability coverage' },
  'retirement-plans': { title: 'Retirement Plans', desc: '401(k), 403(b), and profit sharing plans' },
  'executive-benefits': { title: 'Executive Benefits', desc: 'Deferred compensation and SERP programs' },
  'voluntary-benefits': { title: 'Voluntary Benefits', desc: 'Accident, critical illness, and supplemental plans' },
  'wellness-programs': { title: 'Wellness Programs', desc: 'EAP, mental health, and telehealth services' },
  'compliance-administration': { title: 'Compliance & Admin', desc: 'ACA, ERISA, COBRA, and Section 125 management' },
};

export default function RelatedCoverages({ slugs, title = 'Related Benefits' }) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-8" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {slugs.map((slug) => {
            const cov = allCoverages[slug];
            if (!cov) return null;
            return (
              <Link key={slug} href={`/coverage/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-6 group no-underline hover:border-blue-dark" style={{ transition: 'all 0.24s' }}>
                <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.1rem', transition: 'color 0.24s' }}>{cov.title}</h3>
                <p className="text-brand/60" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>{cov.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
