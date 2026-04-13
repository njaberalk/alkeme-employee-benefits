'use client';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const points = [
  { title: 'Benefits Strategy Expertise', desc: 'Our consultants design benefits programs that align with your business goals, workforce demographics, and budget constraints to maximize employee satisfaction and retention.' },
  { title: 'Carrier Market Access', desc: 'We leverage relationships with major medical, ancillary, and voluntary carriers to secure multiple competitive quotes and negotiate the best rates for your organization.' },
  { title: 'Compliance & Administration Support', desc: 'From ACA reporting and ERISA compliance to COBRA administration and Section 125 plan management, we handle the regulatory complexity so you can focus on your business.' },
  { title: 'Employee Engagement & Communication', desc: 'We create clear, engaging benefits communications and enrollment materials that help employees understand and appreciate their benefits package.' },
];

export default function WhyChooseUs() {
  const leftRef = useScrollAnimation();
  const rightRef = useScrollAnimation();

  return (
    <section id="why-us" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div ref={leftRef} className="fade-in-view-left">
            <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Why Choose Us</p>
            <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-6" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
              Your Workforce Deserves a Benefits Partner Who Gets It
            </h2>
            <p className="text-cream font-light mb-10" style={{ lineHeight: '22px', maxWidth: '500px' }}>
              Employee benefits require more than a policy renewal — they demand a strategic advisor who understands your people, your industry, and how to build a program that attracts and retains top talent.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand"
              style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}
            >
              Get Started Today
            </a>
          </div>

          {/* Right - stat cards */}
          <div ref={rightRef} className="grid grid-cols-2 gap-5 stagger-children">
            {points.map((point) => (
              <div key={point.title} className="border-2 border-ash/30 rounded-[2rem] p-6 text-left">
                <h4 className="text-stone font-bold mb-2" style={{ fontSize: '18px', lineHeight: '24px' }}>{point.title}</h4>
                <p className="text-cream font-light" style={{ fontSize: '0.8rem', lineHeight: '20px' }}>{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
