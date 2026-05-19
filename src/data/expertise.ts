export const financeStages = [
  {
    number: 1,
    title: 'Manual Stage',
    short: 'Manual work',
    description:
      'The founder controls payments, planning and analysis personally. Reporting is situational and there is no delegation.',
    highlight: false,
  },
  {
    number: 2,
    title: 'Tools Stage',
    short: 'Tools',
    description:
      'The company starts using systems that collect data. Accounting is delegated, but finance costs grow together with the team.',
    highlight: false,
  },
  {
    number: 3,
    title: 'Automation and Digitalisation',
    short: 'Automation',
    description:
      'Accounting systems exist, but policies and processes are not yet fully documented. Automation releases resources but can also absorb them.',
    highlight: true,
  },
  {
    number: 4,
    title: 'Analytics / Big Data',
    short: 'Analytics',
    description:
      'A mature finance function with quality accounting, automation, budgeting and data analysis. The company can prepare for international audit.',
    highlight: false,
  },
  {
    number: 5,
    title: 'Predictive Finance & Financial AI',
    short: 'Predictive',
    description:
      'The business works with forecasts, scenarios and long-term financial models. Finance becomes agile and forward-looking.',
    highlight: false,
  },
] as const;

export const sevenStages = [
  {
    number: 1,
    title: 'Manual',
    body:
      'The founder controls finance directly. Personal money and company money may not yet be clearly separated.',
    note: '',
    transformation: false,
  },
  {
    number: 2,
    title: 'Tools',
    body:
      'A more formal approach to money movement between founder and company appears. Accounting records flows clearly.',
    note: '',
    transformation: false,
  },
  {
    number: 3,
    title: 'Automation',
    body:
      'Founder money is separated from company money. Risks are separated. A CFO appears. The financial code of the company must be documented.',
    note: 'The financial code of the company must be documented.',
    transformation: true,
  },
  {
    number: 4,
    title: 'Analytics',
    body:
      'Accumulated data becomes real indicators for timely decisions. The business starts to speak the language of numbers.',
    note: 'Entry to the “big circle”.',
    transformation: false,
  },
  {
    number: 5,
    title: 'Predictive Finance',
    body:
      'Long-term strategy and risks are built into the model. Scenarios are calculated and risks managed or hedged.',
    note: '',
    transformation: false,
  },
  {
    number: 6,
    title: 'External Investment',
    body:
      'The company generates cash flow through financial and investment instruments, independently from core operations.',
    note: '',
    transformation: false,
  },
  {
    number: 7,
    title: 'Cultural Expansion',
    body:
      'The company chooses strategies and projects based on long-term social value: philanthropy, patronage and legacy.',
    note: '',
    transformation: false,
  },
] as const;

export const upgradeAreas = [
  {
    title: 'Accounting & reporting systems',
    description:
      'Suitable accounting or ERP software depending on the complexity of the organisation, from cloud accounting to full ERP platforms such as Odoo.',
  },
  {
    title: 'Metrics & OKRs',
    description:
      'The numbers that answer critical management questions: is growth proportionate to costs, is the project burning cash, what is its real value.',
  },
  {
    title: 'Company valuation logic',
    description:
      'A consistent approach to understanding what the business is worth — for management decisions, investors and structured growth.',
  },
  {
    title: 'Cash-flow architecture',
    description:
      'A clear scheme for how money moves through the business, with treasury, banking and reconciliation logic that scales with growth.',
  },
  {
    title: 'Payroll',
    description:
      'Financial, legal and structural design for distributed teams, contractors and international compensation arrangements.',
  },
  {
    title: 'International presence',
    description:
      'Practical guidance on where to register, how to structure cross-border flows and how to align with customer, investor and banking realities.',
  },
] as const;

export const upgradeLevels = [
  {
    number: 1,
    title: 'Delegation',
    body:
      'The founder hires an assistant and gives access to financial information and payment processes. Control is no longer fully centralised, and the founder gets back the most valuable resource: time.',
    highlight: false,
  },
  {
    number: 2,
    title: 'Accounting system',
    body:
      'An accounting system, such as 1C or an equivalent platform, becomes the data core. The company has an informal policy for collecting financial information.',
    highlight: false,
  },
  {
    number: 3,
    title: 'Automation',
    body:
      'Endless process automation begins. This is where most companies stop. Without documented financial logic, automation becomes permanent automation.',
    highlight: true,
  },
  {
    number: 4,
    title: 'Analytics',
    body:
      'Analytical systems and BI tools appear. Only companies that have done the internal homework on processes and data quality reach this point.',
    highlight: false,
  },
  {
    number: 5,
    title: 'Predictive systems',
    body:
      'Predictive finance is the technology of working with what has not happened yet. By this stage, the company has strong software and strong operational financial thinking.',
    highlight: false,
  },
] as const;

export const services = [
  {
    title: 'Accounting',
    description:
      'The result of a well-built accounting system is transparency and convenience. We help implement cloud accounting for simpler structures and ERP platforms such as Odoo for complex international organisations.',
    points: ['Transparency', 'Scalable reporting', 'Audit readiness'],
  },
  {
    title: 'Payroll',
    description:
      'IT is a people-intensive business. We help address the financial, legal and structural questions that arise when working with distributed teams, contractors and international arrangements.',
    points: ['Distributed teams', 'Tax efficiency', 'Operational clarity'],
  },
  {
    title: 'Metrics',
    description:
      'Metrics give investors and managers answers to critical questions: is growth proportionate to cost, is a cash-burning project actually growing, what is the real value of the project.',
    points: ['Growth quality', 'Cash-burn quality', 'Project valuation'],
  },
  {
    title: 'International presence',
    description:
      'IT businesses often choose international jurisdictions for security, customer proximity and investment. We help decide where the company should be based, taking into account team plans, customer traffic, investor expectations and banking realities.',
    points: ['USA', 'United Kingdom', 'Ireland', 'Cyprus', 'Georgia', 'China'],
  },
] as const;
