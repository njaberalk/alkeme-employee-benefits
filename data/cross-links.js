// Cross-linking maps for dense internal linking
// Benefit line → which industries commonly need this benefit
export const coverageToIndustries = {
  'group-health-insurance': ['small-business', 'mid-market', 'large-employers', 'technology-companies'],
  'dental-insurance': ['small-business', 'mid-market', 'professional-services', 'manufacturing'],
  'vision-insurance': ['technology-companies', 'professional-services', 'manufacturing', 'healthcare-employers'],
  'life-insurance': ['large-employers', 'manufacturing', 'construction-trades', 'nonprofits'],
  'disability-insurance': ['manufacturing', 'construction-trades', 'healthcare-employers', 'retail-hospitality'],
  'retirement-plans': ['professional-services', 'technology-companies', 'mid-market', 'large-employers'],
  'executive-benefits': ['large-employers', 'professional-services', 'technology-companies', 'healthcare-employers'],
  'voluntary-benefits': ['retail-hospitality', 'manufacturing', 'small-business', 'construction-trades'],
  'wellness-programs': ['technology-companies', 'healthcare-employers', 'large-employers', 'professional-services'],
  'compliance-administration': ['large-employers', 'mid-market', 'healthcare-employers', 'manufacturing'],
};

// Benefit line → which resources are most relevant
export const coverageToResources = {
  'group-health-insurance': ['employee-benefits-cost', 'self-funding-guide', 'aca-compliance-guide'],
  'dental-insurance': ['employee-benefits-cost', 'open-enrollment-guide', 'benefits-benchmarking'],
  'vision-insurance': ['employee-benefits-cost', 'open-enrollment-guide', 'benefits-benchmarking'],
  'life-insurance': ['employee-benefits-cost', 'employee-benefits-glossary'],
  'disability-insurance': ['employee-benefits-cost', 'employee-benefits-glossary'],
  'retirement-plans': ['employee-benefits-cost', 'section-125-cafeteria-plans', 'hsa-vs-fsa-guide'],
  'executive-benefits': ['employee-benefits-cost', 'benefits-benchmarking'],
  'voluntary-benefits': ['employee-benefits-cost', 'open-enrollment-guide', 'benefits-benchmarking'],
  'wellness-programs': ['benefits-benchmarking', 'employee-benefits-cost'],
  'compliance-administration': ['aca-compliance-guide', 'cobra-guide', 'section-125-cafeteria-plans'],
};

// Industry → top states for that industry
export const industryToStates = {
  'small-business': ['california', 'texas', 'florida', 'new-york', 'illinois'],
  'mid-market': ['california', 'texas', 'new-york', 'pennsylvania', 'ohio'],
  'large-employers': ['california', 'new-york', 'texas', 'illinois', 'massachusetts'],
  'nonprofits': ['new-york', 'california', 'massachusetts', 'illinois', 'washington'],
  'professional-services': ['new-york', 'california', 'illinois', 'texas', 'massachusetts'],
  'healthcare-employers': ['california', 'texas', 'florida', 'new-york', 'pennsylvania'],
  'technology-companies': ['california', 'washington', 'new-york', 'texas', 'massachusetts'],
  'manufacturing': ['texas', 'ohio', 'michigan', 'indiana', 'illinois'],
  'retail-hospitality': ['california', 'texas', 'florida', 'new-york', 'nevada'],
  'construction-trades': ['texas', 'california', 'florida', 'new-york', 'ohio'],
};

// Industry → relevant resources
export const industryToResources = {
  'small-business': ['employee-benefits-cost', 'open-enrollment-guide', 'aca-compliance-guide'],
  'mid-market': ['self-funding-guide', 'benefits-benchmarking', 'aca-compliance-guide'],
  'large-employers': ['self-funding-guide', 'benefits-benchmarking', 'aca-compliance-guide'],
  'nonprofits': ['employee-benefits-cost', 'section-125-cafeteria-plans', 'open-enrollment-guide'],
  'professional-services': ['benefits-benchmarking', 'hsa-vs-fsa-guide', 'employee-benefits-cost'],
  'healthcare-employers': ['aca-compliance-guide', 'self-funding-guide', 'benefits-benchmarking'],
  'technology-companies': ['benefits-benchmarking', 'hsa-vs-fsa-guide', 'employee-benefits-cost'],
  'manufacturing': ['aca-compliance-guide', 'cobra-guide', 'employee-benefits-cost'],
  'retail-hospitality': ['aca-compliance-guide', 'employee-benefits-cost', 'open-enrollment-guide'],
  'construction-trades': ['employee-benefits-cost', 'aca-compliance-guide', 'cobra-guide'],
};
