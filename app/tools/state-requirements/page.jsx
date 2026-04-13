import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Employee Benefits Requirements Lookup',
  description: 'Look up employee benefits requirements by state. See paid leave mandates, disability requirements, small group rules, and state-specific regulations for all 50 states.',
  alternates: {
    canonical: 'https://alkemeins.com/employee-benefits/tools/state-requirements/',
  },
  openGraph: {
    title: 'State Employee Benefits Requirements Lookup | ALKEME Insurance Services',
    description: 'Interactive tool to look up employee benefits requirements for any US state.',
    url: 'https://alkemeins.com/employee-benefits/tools/state-requirements/',
    type: 'website',
  },
};

export default function StateRequirementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'State Employee Benefits Requirements Lookup',
    url: 'https://alkemeins.com/employee-benefits/tools/state-requirements/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Look up employee benefits requirements for any US state including paid leave, disability, and ACA mandates.',
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StateRequirementsContent />
    </>
  );
}
