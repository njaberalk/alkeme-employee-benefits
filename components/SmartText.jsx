'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// All linkable terms → their page URLs
// Order matters: longer phrases first to avoid partial matches
const LINK_MAP = [
  // Benefit Lines
  ['group health insurance', '/coverage/group-health-insurance/'],
  ['health insurance', '/coverage/group-health-insurance/'],
  ['medical insurance', '/coverage/group-health-insurance/'],
  ['dental insurance', '/coverage/dental-insurance/'],
  ['dental plans', '/coverage/dental-insurance/'],
  ['vision insurance', '/coverage/vision-insurance/'],
  ['vision coverage', '/coverage/vision-insurance/'],
  ['life insurance', '/coverage/life-insurance/'],
  ['group term life', '/coverage/life-insurance/'],
  ['AD&D', '/coverage/life-insurance/'],
  ['short-term disability', '/coverage/disability-insurance/'],
  ['long-term disability', '/coverage/disability-insurance/'],
  ['disability insurance', '/coverage/disability-insurance/'],
  ['disability coverage', '/coverage/disability-insurance/'],
  ['retirement plans', '/coverage/retirement-plans/'],
  ['401(k)', '/coverage/retirement-plans/'],
  ['403(b)', '/coverage/retirement-plans/'],
  ['profit sharing', '/coverage/retirement-plans/'],
  ['executive benefits', '/coverage/executive-benefits/'],
  ['deferred compensation', '/coverage/executive-benefits/'],
  ['key person insurance', '/coverage/executive-benefits/'],
  ['voluntary benefits', '/coverage/voluntary-benefits/'],
  ['critical illness', '/coverage/voluntary-benefits/'],
  ['hospital indemnity', '/coverage/voluntary-benefits/'],
  ['wellness programs', '/coverage/wellness-programs/'],
  ['employee assistance program', '/coverage/wellness-programs/'],
  ['EAP', '/coverage/wellness-programs/'],
  ['telehealth', '/coverage/wellness-programs/'],
  ['ACA compliance', '/coverage/compliance-administration/'],
  ['ERISA compliance', '/coverage/compliance-administration/'],
  ['COBRA administration', '/coverage/compliance-administration/'],
  ['COBRA', '/coverage/compliance-administration/'],
  ['Section 125', '/coverage/compliance-administration/'],
  ['cafeteria plan', '/coverage/compliance-administration/'],

  // Industries
  ['small business', '/industries/small-business/'],
  ['mid-market', '/industries/mid-market/'],
  ['large employers', '/industries/large-employers/'],
  ['nonprofits', '/industries/nonprofits/'],
  ['professional services', '/industries/professional-services/'],
  ['healthcare employers', '/industries/healthcare-employers/'],
  ['technology companies', '/industries/technology-companies/'],
  ['manufacturing', '/industries/manufacturing/'],
  ['retail and hospitality', '/industries/retail-hospitality/'],
  ['construction and trades', '/industries/construction-trades/'],

  // States
  ['Alabama', '/states/alabama/'], ['Alaska', '/states/alaska/'], ['Arizona', '/states/arizona/'],
  ['Arkansas', '/states/arkansas/'], ['California', '/states/california/'], ['Colorado', '/states/colorado/'],
  ['Connecticut', '/states/connecticut/'], ['Delaware', '/states/delaware/'], ['Florida', '/states/florida/'],
  ['Georgia', '/states/georgia/'], ['Idaho', '/states/idaho/'], ['Illinois', '/states/illinois/'],
  ['Indiana', '/states/indiana/'], ['Iowa', '/states/iowa/'], ['Kansas', '/states/kansas/'],
  ['Kentucky', '/states/kentucky/'], ['Louisiana', '/states/louisiana/'], ['Maine', '/states/maine/'],
  ['Maryland', '/states/maryland/'], ['Massachusetts', '/states/massachusetts/'], ['Michigan', '/states/michigan/'],
  ['Minnesota', '/states/minnesota/'], ['Mississippi', '/states/mississippi/'], ['Missouri', '/states/missouri/'],
  ['Montana', '/states/montana/'], ['Nebraska', '/states/nebraska/'], ['Nevada', '/states/nevada/'],
  ['New Hampshire', '/states/new-hampshire/'], ['New Jersey', '/states/new-jersey/'],
  ['New Mexico', '/states/new-mexico/'], ['New York', '/states/new-york/'],
  ['North Carolina', '/states/north-carolina/'], ['North Dakota', '/states/north-dakota/'],
  ['Ohio', '/states/ohio/'], ['Oklahoma', '/states/oklahoma/'], ['Oregon', '/states/oregon/'],
  ['Pennsylvania', '/states/pennsylvania/'], ['Rhode Island', '/states/rhode-island/'],
  ['South Carolina', '/states/south-carolina/'], ['South Dakota', '/states/south-dakota/'],
  ['Tennessee', '/states/tennessee/'], ['Texas', '/states/texas/'], ['Utah', '/states/utah/'],
  ['Vermont', '/states/vermont/'], ['Virginia', '/states/virginia/'], ['Washington', '/states/washington/'],
  ['West Virginia', '/states/west-virginia/'], ['Wisconsin', '/states/wisconsin/'], ['Wyoming', '/states/wyoming/'],

  // Resources
  ['open enrollment', '/resources/open-enrollment-guide/'],
  ['HSA', '/resources/hsa-vs-fsa-guide/'],
  ['FSA', '/resources/hsa-vs-fsa-guide/'],
  ['self-funding', '/resources/self-funding-guide/'],
  ['benefits benchmarking', '/resources/benefits-benchmarking/'],

  // Tools
  ['cost estimator', '/tools/benefits-cost-estimator/'],
  ['state requirements', '/tools/state-requirements/'],
];

// Convert plain text to text with auto-linked terms
export default function SmartText({ text, className, style }) {
  const pathname = usePathname();
  if (!text) return null;

  const currentPath = pathname?.replace(/\/employee-benefits/, '') || '';
  const parts = autoLink(text, currentPath);

  return (
    <span className={className} style={style}>
      {parts.map((part, i) =>
        typeof part === 'string' ? (
          part
        ) : (
          <Link
            key={i}
            href={part.href}
            className="text-blue-dark font-semibold hover:text-brand underline decoration-blue-dark/30 underline-offset-2 hover:decoration-brand/50"
            style={{ transition: 'color 0.2s' }}
          >
            {part.text}
          </Link>
        )
      )}
    </span>
  );
}

function autoLink(text, currentPath = '') {
  const parts = [];
  let remaining = text;
  const linked = new Set();

  while (remaining.length > 0) {
    let earliestMatch = null;
    let earliestIndex = remaining.length;
    let matchedTerm = null;

    for (const [term, href] of LINK_MAP) {
      if (linked.has(term)) continue;
      if (currentPath && href === currentPath) continue;
      if (currentPath && currentPath.endsWith('/') && href === currentPath) continue;
      if (currentPath && href.replace(/\/$/, '') === currentPath.replace(/\/$/, '')) continue;

      const lowerRemaining = remaining.toLowerCase();
      const index = lowerRemaining.indexOf(term.toLowerCase());

      if (index !== -1 && index < earliestIndex) {
        earliestMatch = { href, length: term.length };
        earliestIndex = index;
        matchedTerm = term;
      }
    }

    if (earliestMatch) {
      if (earliestIndex > 0) {
        parts.push(remaining.substring(0, earliestIndex));
      }
      const matchedText = remaining.substring(earliestIndex, earliestIndex + earliestMatch.length);
      parts.push({ text: matchedText, href: earliestMatch.href });
      linked.add(matchedTerm);
      remaining = remaining.substring(earliestIndex + earliestMatch.length);
    } else {
      parts.push(remaining);
      remaining = '';
    }
  }

  return parts;
}
