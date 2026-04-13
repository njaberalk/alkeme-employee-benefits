'use client';
import { useState, useRef, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  { q: 'What types of employee benefits does ALKEME offer?', a: 'We provide a full spectrum of employee benefits solutions including group health insurance, dental, vision, life and disability coverage, retirement plans, executive benefits, voluntary benefits, wellness programs, and compliance administration. Our team designs customized benefits packages tailored to your workforce size, budget, and strategic goals.' },
  { q: 'How much do employee benefits cost per employee?', a: 'The cost varies based on your company size, industry, location, plan design, and employee demographics. On average, employers spend between $12,000 and $23,000 per employee annually on total benefits. We benchmark your costs against industry standards and help you design a competitive package within your budget.' },
  { q: 'Do you help with ACA compliance and reporting?', a: 'Absolutely. We provide full ACA compliance support including Applicable Large Employer determination, affordability testing, 1094-C and 1095-C preparation and filing, and ongoing monitoring of regulatory changes. Our compliance team ensures you meet all federal and state reporting obligations.' },
  { q: 'Can you manage our open enrollment process?', a: 'Yes. We handle every aspect of open enrollment from timeline planning and employee communication materials to benefits fairs, enrollment platform setup, and post-enrollment reconciliation. Our goal is to make enrollment seamless for both HR teams and employees.' },
  { q: "What's the difference between fully insured and self-funded?", a: 'With fully insured plans, you pay a fixed premium to a carrier who assumes all claims risk. Self-funded plans mean your company pays claims directly, typically with stop-loss insurance to cap catastrophic exposure. We also offer level-funded arrangements that combine the predictability of fully insured with the cost savings potential of self-funding.' },
  { q: 'Do you offer benefits for small businesses under 50 employees?', a: 'Yes. We specialize in helping small businesses access competitive benefits packages that rival larger employers. Through our carrier relationships and group purchasing strategies, we help small employers offer attractive medical, dental, vision, and ancillary benefits that support recruitment and retention.' },
];

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-2 border-ash rounded-[2rem] overflow-hidden" style={{ background: isOpen ? 'rgba(255,255,255,0.5)' : 'transparent', transition: 'background 0.5s ease' }}>
      <button onClick={onClick} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
        <span className="text-brand font-bold pr-8 group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.2s' }}>{faq.q}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
          style={{
            backgroundColor: isOpen ? '#ffbf3b' : '#25475e',
            transition: 'all 0.5s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
          }}
        >
          <svg className="w-4 h-4" style={{ color: isOpen ? '#25475e' : '#f4f4ec' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        ref={contentRef}
        style={{
          height: isOpen ? height + 'px' : '0px',
          overflow: 'hidden',
          transition: 'height 0.5s ease',
        }}
      >
        <p className="text-brand/70 px-6 pb-6" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>{faq.a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerRef = useScrollAnimation();
  const listRef = useScrollAnimation(0.05);

  return (
    <section id="faq" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[900px] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center mb-14 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Frequently Asked Questions</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>
            Common Questions About Employee Benefits
          </h2>
        </div>

        <div ref={listRef} className="space-y-4 stagger-children">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
