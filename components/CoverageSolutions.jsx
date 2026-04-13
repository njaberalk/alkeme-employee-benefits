'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'Group Health Insurance', slug: 'group-health-insurance', desc: 'Employer-sponsored medical plans including PPO, HMO, EPO, and HDHP options designed to provide comprehensive healthcare coverage for your workforce.' },
  { title: 'Dental Insurance', slug: 'dental-insurance', desc: 'Preventive, basic, and major dental plans that keep your employees healthy while offering the coverage options they value most.' },
  { title: 'Vision Insurance', slug: 'vision-insurance', desc: 'Eye exam, frames, contacts, and vision correction coverage that supports employee wellness and productivity.' },
  { title: 'Life Insurance', slug: 'life-insurance', desc: 'Group term life, AD&D, and voluntary life options that provide financial security for your employees and their families.' },
  { title: 'Disability Insurance', slug: 'disability-insurance', desc: 'Short-term and long-term disability coverage that protects employee income when illness or injury prevents them from working.' },
  { title: 'Retirement Plans', slug: 'retirement-plans', desc: '401(k), 403(b), profit sharing, and defined benefit plans that help your employees build financial security for the future.' },
  { title: 'Executive Benefits', slug: 'executive-benefits', desc: 'Deferred compensation, SERP, key person insurance, and supplemental programs designed to attract and retain senior leadership.' },
  { title: 'Voluntary Benefits', slug: 'voluntary-benefits', desc: 'Accident, critical illness, hospital indemnity, pet insurance, and legal plans that enhance your package at minimal employer cost.' },
  { title: 'Wellness Programs', slug: 'wellness-programs', desc: 'EAP, mental health resources, fitness reimbursement, biometric screening, and telehealth services that promote a healthier workforce.' },
  { title: 'Compliance & Administration', slug: 'compliance-administration', desc: 'ACA reporting, ERISA compliance, COBRA administration, and Section 125 cafeteria plan management that keeps your organization compliant.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Benefit Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Benefits for Every Organization</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From health and dental to retirement and compliance, we provide the full suite of employee benefits that keep your team protected and engaged.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More &rarr;</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Benefits Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
