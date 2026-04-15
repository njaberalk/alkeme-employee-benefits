export const verticalConfig = {
  id: 'employee-benefits', label: 'Employee Benefits',
  heading: 'Get an Employee Benefits Consultation',
  subtext: 'Answer a few quick questions and our benefits specialists will design a program for your workforce.',
  businessTypes: [
    { value: 'small-business', label: 'Small Business (2-50)' },
    { value: 'mid-market', label: 'Mid-Market (51-250)' },
    { value: 'large-employer', label: 'Large Employer (250+)' },
    { value: 'nonprofit', label: 'Nonprofit' },
    { value: 'startup', label: 'Startup' },
    { value: 'government', label: 'Government / Public Sector' },
  ],
  customQuestions: [
    { id: 'employee_count', label: 'How many employees?', type: 'select', options: ['2-10', '11-50', '51-250', '251-1000', '1000+'] },
    { id: 'current_benefits', label: 'Currently have benefits?', type: 'select', options: ['Yes - renewing', 'Yes - switching', 'No - first time'] },
    { id: 'primary_concern', label: 'Primary concern?', type: 'select', options: ['Cost', 'Coverage quality', 'Compliance', 'Employee satisfaction'] },
  ],
  coverageOptions: ['Group Health Insurance', 'Dental Insurance', 'Vision Insurance', 'Life Insurance', 'Disability Insurance', 'Retirement Plans', 'Executive Benefits', 'Voluntary Benefits', 'Wellness Programs', 'Compliance & Administration'],
};
