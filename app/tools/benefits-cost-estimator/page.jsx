import FMCSACheckerContent from './FMCSACheckerContent';

export const metadata = {
  title: 'Benefits Cost Estimator',
  description: 'Estimate employee benefits costs for your organization. Select your company size to see per-employee costs, recommended benefit lines, and compliance requirements.',
  alternates: {
    canonical: 'https://alkemeins.com/employee-benefits/tools/benefits-cost-estimator/',
  },
  openGraph: {
    title: 'Benefits Cost Estimator | ALKEME Insurance Services',
    description: 'Interactive tool to estimate employee benefits costs based on company size and industry.',
    url: 'https://alkemeins.com/employee-benefits/tools/benefits-cost-estimator/',
    type: 'website',
  },
};

export default function BenefitsCostEstimatorPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Benefits Cost Estimator',
      url: 'https://alkemeins.com/employee-benefits/tools/benefits-cost-estimator/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to estimate employee benefits costs by company size and recommended benefit lines.',
    },
  ];

  return (
    <>
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <FMCSACheckerContent />
    </>
  );
}
