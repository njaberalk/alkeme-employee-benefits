import Link from 'next/link';

const moreInsuranceLinks = [
  { label: 'Business Insurance', href: 'https://alkemeins.com/business-insurance' },
  { label: 'Construction Insurance', href: 'https://alkemeins.com/construction' },
  { label: 'Hospitality Insurance', href: 'https://alkemeins.com/hospitality' },
  { label: 'Trucking Insurance', href: 'https://alkemeins.com/trucking' },
  { label: 'Education Insurance', href: 'https://alkemeins.com/education' },
  { label: 'Senior Living Insurance', href: 'https://alkemeins.com/senior-living' },
  { label: 'Entertainment Insurance', href: 'https://alkemeins.com/entertainment' },
];

const coverageLinks = [
  { label: 'Group Health Insurance', href: '/coverage/group-health-insurance/' },
  { label: 'Dental Insurance', href: '/coverage/dental-insurance/' },
  { label: 'Vision Insurance', href: '/coverage/vision-insurance/' },
  { label: 'Life Insurance', href: '/coverage/life-insurance/' },
  { label: 'Disability Insurance', href: '/coverage/disability-insurance/' },
  { label: 'Retirement Plans', href: '/coverage/retirement-plans/' },
];

const industryLinks = [
  { label: 'Small Business', href: '/industries/small-business/' },
  { label: 'Mid-Market', href: '/industries/mid-market/' },
  { label: 'Large Employers', href: '/industries/large-employers/' },
  { label: 'Technology Companies', href: '/industries/technology-companies/' },
  { label: 'Healthcare Employers', href: '/industries/healthcare-employers/' },
  { label: 'Nonprofits', href: '/industries/nonprofits/' },
];

const benefitsLinks = [
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Our Process', href: '/#process' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Get a Consultation', href: 'https://alkemeins.com/form', external: true },
];

export default function Footer() {
  return (
    <footer className="bg-stone">
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4" style={{ paddingTop: '6rem', paddingBottom: '3rem' }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="https://alkemeins.com" className="flex items-center gap-2 mb-5 no-underline">
              <img
                src="https://cdn.prod.website-files.com/686d7240ee8f0fdd31648b80/68ae3aa829e8b536f770d83d_ALKEME_Logo_Color.png"
                alt="ALKEME Insurance Services"
                className="h-auto"
                style={{ width: '8rem' }}
              />
            </a>
            <p className="text-brand/60 mb-6" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
              ALKEME Insurance Services is a nationally recognized brokerage providing comprehensive employee benefits consulting, plan design, and administration support for employers across all 50 states.
            </p>
            <div className="space-y-2">
              <a href="tel:+18559255363" className="block text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.95rem', lineHeight: '1.5', transition: 'all 0.2s' }}>
                (855) 925-5363
              </a>
              <a href="mailto:info@alkemeins.com" className="block text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.95rem', lineHeight: '1.5', transition: 'all 0.2s' }}>
                info@alkemeins.com
              </a>
            </div>
          </div>

          {/* More Insurance - cross-vertical links */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>More Insurance</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {moreInsuranceLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <a href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Benefits</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {coverageLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Industries</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {industryLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Hub */}
          <div>
            <h4 className="text-brand font-bold mb-5 text-right max-lg:text-left" style={{ fontSize: '1rem' }}>Benefits</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {benefitsLinks.map((link) => (
                <li key={link.label} className="text-right max-lg:text-left">
                  <Link href={link.href} className="text-brand hover:text-blue-dark no-underline" style={{ fontSize: '0.9rem', lineHeight: '1.5', transition: 'all 0.2s' }}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ash">
        <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4 py-6 pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-brand/50 text-center" style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              &copy; {new Date().getFullYear()} ALKEME Insurance Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://alkemeins.com/terms" className="text-brand/50 hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.2s' }}>Terms</a>
              <a href="https://alkemeins.com/privacy" className="text-brand/50 hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.2s' }}>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
