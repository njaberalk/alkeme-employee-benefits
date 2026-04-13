import HomeContent from './HomeContent';

export const metadata = {
  title: 'Comprehensive Employee Benefits Solutions',
  description: 'ALKEME Insurance Services provides comprehensive employee benefits consulting, plan design, and administration for employers of all sizes. Group health, dental, vision, retirement, and more.',
  openGraph: {
    title: 'Employee Benefits | ALKEME Insurance Services',
    description: 'Comprehensive employee benefits consulting for employers of all sizes across all 50 states.',
    url: 'https://alkemeins.com/employee-benefits/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides comprehensive employee benefits consulting, plan design, and administration for employers of all sizes across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            foundingDate: '2003',
            numberOfEmployees: {
              '@type': 'QuantitativeValue',
              value: 100,
            },
            knowsAbout: [
              'Employee Benefits',
              'Group Health Insurance',
              'Retirement Plans',
              'ACA Compliance',
            ],
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              credentialCategory: 'Professional License',
              name: 'Licensed Insurance Brokerage',
            },
            serviceType: [
              'Employee Benefits Consulting',
              'Group Health Insurance',
              'Dental Insurance',
              'Vision Insurance',
              'Life Insurance',
              'Disability Insurance',
              'Retirement Plans',
              'Benefits Administration',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Employee Benefits' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What types of employee benefits does ALKEME offer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We provide a full spectrum of employee benefits solutions including group health insurance, dental, vision, life and disability coverage, retirement plans, executive benefits, voluntary benefits, wellness programs, and compliance administration. Our team designs customized benefits packages tailored to your workforce size, budget, and strategic goals.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much do employee benefits cost per employee?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The cost varies based on your company size, industry, location, plan design, and employee demographics. On average, employers spend between $12,000 and $23,000 per employee annually on total benefits. We benchmark your costs against industry standards and help you design a competitive package within your budget.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you help with ACA compliance and reporting?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We provide full ACA compliance support including Applicable Large Employer determination, affordability testing, 1094-C and 1095-C preparation and filing, and ongoing monitoring of regulatory changes. Our compliance team ensures you meet all federal and state reporting obligations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you manage our open enrollment process?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We handle every aspect of open enrollment from timeline planning and employee communication materials to benefits fairs, enrollment platform setup, and post-enrollment reconciliation. Our goal is to make enrollment seamless for both HR teams and employees.',
                },
              },
              {
                '@type': 'Question',
                name: "What's the difference between fully insured and self-funded?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'With fully insured plans, you pay a fixed premium to a carrier who assumes all claims risk. Self-funded plans mean your company pays claims directly, typically with stop-loss insurance to cap catastrophic exposure. We also offer level-funded arrangements that combine the predictability of fully insured with the cost savings potential of self-funding.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer benefits for small businesses under 50 employees?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We specialize in helping small businesses access competitive benefits packages that rival larger employers. Through our carrier relationships and group purchasing strategies, we help small employers offer attractive medical, dental, vision, and ancillary benefits that support recruitment and retention.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Employee Benefits Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
