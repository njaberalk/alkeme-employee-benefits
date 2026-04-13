'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const featuredResources = [
  { slug: 'employee-benefits-cost', title: 'How Much Do Employee Benefits Cost?', category: 'Guide', desc: 'Average costs per employee, benchmarking by company size, and strategies to optimize your benefits spend.' },
  { slug: 'aca-compliance-guide', title: 'ACA Compliance Guide for Employers', category: 'Guide', desc: 'ALE determination, 1094/1095 reporting, affordability safe harbors, and penalty avoidance.' },
  { slug: 'open-enrollment-guide', title: 'Open Enrollment Best Practices', category: 'Guide', desc: 'Timeline planning, communication strategies, and decision support tools for a smooth enrollment.' },
  { slug: 'hsa-vs-fsa-guide', title: 'HSA vs. FSA: Which Is Right for You?', category: 'Comparison', desc: 'Eligibility, contribution limits, investment options, and rollover rules compared side by side.' },
  { slug: 'self-funding-guide', title: 'Self-Funding vs. Fully Insured Guide', category: 'Guide', desc: 'Level-funded options, stop-loss insurance, TPA selection, and when to consider self-funding.' },
  { slug: 'employee-benefits-glossary', title: 'Employee Benefits Glossary', category: 'Reference', desc: '50+ key terms every employer should know, explained clearly and concisely.' },
];

export default function ResourcesSection() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="resources" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>
            Resources
          </p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Employee Benefits Guides & Tools
          </h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            Expert resources to help you understand your benefits options, control costs, and stay compliant.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {featuredResources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}/`}
              className="block border-2 border-ash rounded-[2rem] p-7 group no-underline hover:border-blue-dark"
              style={{ transition: 'all 0.24s' }}
            >
              <span className="text-blue-dark uppercase tracking-[0.12em] font-bold mb-3 block" style={{ fontSize: '0.65rem' }}>
                {resource.category}
              </span>
              <h3 className="text-brand font-bold mb-2 group-hover:text-blue-dark" style={{ fontSize: '1.05rem', lineHeight: '1.4', transition: 'color 0.24s' }}>
                {resource.title}
              </h3>
              <p className="text-brand/60" style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
                {resource.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
