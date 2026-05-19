export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'code'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'takeaway'; text: string };

export type Article = {
  slug: string;
  title: string;
  category: 'ERP & Odoo' | 'SaaS Finance' | 'International Structuring' | 'Finance Transformation' | 'Operational Finance' | 'CFO Notes';
  excerpt: string;
  readingTime: string;
  body: Block[];
};

export const articles: Article[] = [
  {
    slug: 'migrating-accounting-to-odoo',
    title: 'Migrating Accounting to Odoo',
    category: 'ERP & Odoo',
    readingTime: '7–8 min read',
    excerpt:
      'Odoo can be a powerful and cost-efficient accounting platform for complex organisations, but it is not a simple out-of-the-box solution. A practical CFO reflection on a two-year migration from spreadsheets and fragmented tools to scalable ERP-driven finance.',
    body: [
      { type: 'h2', text: 'Quick summary' },
      { type: 'p', text: 'I would like to share a few practical insights from our migration to Odoo Accounting.' },
      {
        type: 'p',
        text:
          'My conclusion is simple: Odoo can be a powerful and cost-efficient accounting platform for complex organisations — but its implementation requires serious planning, realistic expectations and a deep understanding of your processes.',
      },
      {
        type: 'p',
        text:
          'When I joined my current organisation as CFO, one of my main challenges was migrating the accounting function from Google Sheets and an accounting tool called PlanFact to a scalable and efficient accounting system.',
      },
      { type: 'p', text: 'To understand the level of complexity:' },
      {
        type: 'ul',
        items: [
          'the organisation consists of 15 legal entities across several jurisdictions;',
          'internally, we have around 500 employees;',
          'operations are divided across 4 major business units, each with its own business processes, IT systems, HR, AP and AR structures;',
          'the company manages around 20 different products/projects;',
          'the relationship between business units and legal entities is not clearly aligned. A single business unit can operate across several legal entities, while one legal entity may support multiple business units simultaneously.',
        ],
      },
      { type: 'p', text: 'With that level of complexity, my beloved Xero simply was not enough.' },
      {
        type: 'p',
        text:
          'NetSuite or Microsoft Dynamics 365 Finance probably could have handled it — but the price tag would likely have had another zero attached to it.',
      },
      { type: 'p', text: 'So Odoo became the chosen one.' },
      {
        type: 'p',
        text:
          'The migration took two years and cost approximately €70K, including a three-year Odoo Enterprise subscription for 20 users.',
      },
      { type: 'p', text: 'I acted as both project owner and project manager, working with only one Odoo developer.' },
      {
        type: 'p',
        text:
          'Could it have been done faster? Certainly. With a larger implementation team and significantly more pressure on the finance department, the timeline could have been shorter — but the costs would probably have grown exponentially.',
      },
      { type: 'p', text: 'Could it have been done cheaper? Honestly, unlikely.' },
      { type: 'h2', text: 'Some takeaways' },
      { type: 'h3', text: '1. Odoo is flexible — but it is definitely not “out of the box”' },
      { type: 'p', text: 'Odoo is incredibly flexible. With the right developer, you can customise almost anything.' },
      {
        type: 'p',
        text:
          'But if someone tells you that Odoo Accounting works perfectly out of the box for a complex organisation, be careful.',
      },
      {
        type: 'p',
        text:
          'If your accounting requirements are relatively straightforward, I would honestly suggest going with Xero or — may God bless your soul — Intuit QuickBooks instead.',
      },
      { type: 'p', text: 'Some Odoo modules feel like they were designed by aliens for aliens.' },
      {
        type: 'p',
        text:
          'The Budgeting module, for example, completely defeated me. I genuinely tried to understand the logic behind it and eventually gave up.',
      },
      { type: 'p', text: 'And I still do not personally know a single company using Odoo Payroll exactly as delivered.' },
      { type: 'h3', text: '2. Bank reconciliation in Odoo can become a special circle of hell' },
      { type: 'p', text: 'Bank reconciliation in Odoo remains surprisingly painful.' },
      {
        type: 'p',
        text:
          'In 2026, parts of it still feel worse than Xero or QuickBooks did ten years ago — especially when reconciling transfers between your own accounts. Anyone working with Stripe, PayPal or similar platforms will feel the pain.',
      },
      {
        type: 'p',
        text:
          'Using temporary liquidity accounts to balance both sides feels clumsy, inaccurate and, in some cases, arguably conflicts with proper GAAP logic, particularly around cash transfers and ASC 860 considerations.',
      },
      {
        type: 'p',
        text:
          'After adding transfers between different currencies and situations where neither currency matches the entity’s functional currency, you may start questioning your life choices. I certainly did.',
      },
      { type: 'h3', text: '3. Want to save money? Find a Ukrainian Odoo developer' },
      { type: 'p', text: 'A practical recommendation: hire a Ukrainian Odoo developer.' },
      {
        type: 'p',
        text:
          'I will not mention exact rates in case they read this and adjust their pricing accordingly — but trust me, the value-for-money ratio is exceptional.',
      },
      { type: 'p', text: 'In my experience, you can achieve outstanding results without compromising quality.' },
      { type: 'h3', text: '4. The hardest part of migration is usually not technical' },
      { type: 'p', text: 'The most difficult part of migration is often people, not software.' },
      {
        type: 'p',
        text:
          'Ironically, the employees most resistant to change are often the same people who built and maintained the existing system — especially if that system lives in Google Sheets or Excel.',
      },
      {
        type: 'p',
        text:
          'At the same time, those people are incredibly valuable because they understand the processes better than anyone else.',
      },
      {
        type: 'p',
        text:
          'What worked for us was identifying “champions” inside the organisation — people who genuinely wanted improvement — and involving them early in the development process.',
      },
      { type: 'p', text: 'Gradual adoption works far better than forcing a full revolution overnight.' },
      { type: 'h2', text: 'What is next?' },
      { type: 'h3', text: 'AI integration with Odoo' },
      {
        type: 'p',
        text:
          'We experimented with connecting Anthropic Claude to Odoo, but the results were mixed. At the moment, it is honestly still easier to export data into Excel, work with it there, and upload it back into Odoo.',
      },
      {
        type: 'p',
        text:
          'That said, the potential is clearly there, especially with Odoo introducing more integrated AI functionality in the latest versions.',
      },
      { type: 'h3', text: 'Further automation' },
      { type: 'p', text: 'The next major step is deeper automation through integrations between Odoo and:' },
      {
        type: 'ul',
        items: [
          'external/internal systems;',
          'service providers;',
          'banks;',
          'payment gateways.',
        ],
      },
      { type: 'p', text: 'That is where the real long-term efficiency gains begin.' },
      { type: 'h2', text: 'Was it worth it?' },
      { type: 'p', text: 'Absolutely.' },
      {
        type: 'p',
        text:
          'The migration allowed our finance team to move away from manual spreadsheet-driven processes and focus more on analytics, strategic planning, profitability, liquidity management and decision support.',
      },
      {
        type: 'p',
        text:
          'Despite all the implementation challenges, Odoo gave us something we lacked before: a scalable financial infrastructure capable of supporting a complex multi-entity organisation.',
      },
      {
        type: 'p',
        text:
          'Even some of the colleagues who were initially sceptical about the migration now acknowledge that many processes have become faster, more transparent and easier to manage.',
      },
      {
        type: 'p',
        text:
          'Odoo is not a perfect system, and it requires significant effort to implement properly. But for organisations with complex structures and limited ERP budgets, it can be an extremely powerful solution when combined with strong internal ownership and the right technical expertise.',
      },
      {
        type: 'takeaway',
        text:
          'Odoo is not a shortcut. It is a flexible platform that can become a powerful finance infrastructure — but only if the business is ready to define its processes, own the implementation and accept that ERP migration is a transformation project, not just a software installation.',
      },
    ],
  },
  {
    slug: 'how-to-value-a-loss-making-saas-company',
    title: 'How to Value a Loss-Making SaaS Company',
    category: 'SaaS Finance',
    readingTime: '6–7 min read',
    excerpt:
      'When valuing a SaaS company, the first question is not mathematical but commercial: are we buying or selling? A comparison of seller-friendly revenue multiples with a more cautious investor approach to valuing a loss-making SaaS business.',
    body: [
      {
        type: 'p',
        text:
          'When a good CFO is asked how to value a SaaS company, the first question is usually: “Are we buying or selling?”',
      },
      {
        type: 'p',
        text:
          'There are many ways to value a SaaS company, and the results can differ several times over depending on the method used. Let us take the example below and look at valuation from both perspectives: the seller’s perspective and the buyer’s, or investor’s, perspective.',
      },
      {
        type: 'p',
        text:
          'Assume a company has monthly recurring revenue, or MRR, of 600,000 and a gross profit margin of 50%. ARR is growing by 100% per year, while organic growth is 20% per year. The monthly churn rate is 4%.',
      },
      {
        type: 'p',
        text:
          'At the same time, the company spends 500,000 per month on advertising, 60,000 per month on development of new product functionality, and 40,000 per month on supporting the current version of the product.',
      },
      {
        type: 'p',
        text:
          'It is easy to see that the company is loss-making, so classic profit-based valuation methods are not suitable.',
      },
      { type: 'h2', text: 'We are selling' },
      {
        type: 'p',
        text:
          'When selling a company, it is natural to prefer valuation methods that produce the highest possible value. These are usually methods based on gross revenue.',
      },
      { type: 'p', text: 'Let us consider the most common approaches.' },
      { type: 'h2', text: 'Valuation based on an annual revenue multiple' },
      { type: 'p', text: 'The formula is:' },
      { type: 'code', text: 'Annual Revenue × Multiple = Company Valuation' },
      { type: 'p', text: 'To calculate the multiple, a reference table can be used.' },
      { type: 'p', text: 'In our example, the multiple is affected by the following factors:' },
      {
        type: 'ul',
        items: [
          'private company: 7.7x;',
          'growth rate above 75% per year: +2x;',
          'annual net retention rate below 80%: -1x;',
          'gross margin below 75%: -1x;',
          'customer payback period above one year: -0.5x.',
        ],
      },
      { type: 'p', text: 'Total multiple: 7.2x.' },
      { type: 'p', text: 'Using this approach, the company valuation is:' },
      { type: 'code', text: '600,000 × 12 × 7.2 = 51,840,000' },
      { type: 'h2', text: 'Valuation using a growth-rate multiple' },
      { type: 'p', text: 'Another approach is to include the growth-rate multiplier:' },
      { type: 'code', text: 'Valuation = ARR × (3 + GRM × GR)' },
      { type: 'p', text: 'Where:' },
      {
        type: 'ul',
        items: [
          'ARR = Annual Recurring Revenue;',
          'GRM = Growth Rate Multiplier, assumed here to be 2.5;',
          'GR = Growth Rate.',
        ],
      },
      { type: 'p', text: 'In our case, the company valuation would be:' },
      { type: 'code', text: '600,000 × 12 × (3 + 2.5 × 1) = 39,600,000' },
      {
        type: 'p',
        text:
          'The advantages of these valuation methods are obvious: they are relatively simple to use and they produce a high valuation. It is also fair to say that revenue-based approaches are widely used in the SaaS world.',
      },
      { type: 'h2', text: 'We are buying' },
      { type: 'p', text: 'Should an investor automatically agree with the valuations above?' },
      { type: 'p', text: 'Probably not.' },
      {
        type: 'p',
        text:
          'Revenue-based methods do not pay enough attention to product margin. The growth-rate multiple approach also usually assumes a gross margin of around 75% and profitability of roughly 33%.',
      },
      {
        type: 'p',
        text:
          'It is also important to remember that customer acquisition cost decreases mainly through organic growth. In any paid acquisition channel, the cost of each additional customer usually increases. Of course, there may be a possibility of finding a cheaper acquisition channel in the future, but that possibility should not be priced into the current valuation too aggressively.',
      },
      { type: 'p', text: 'So, what formula is more useful for an investor when valuing a SaaS company?' },
      {
        type: 'p',
        text:
          'If we describe the current value of a SaaS company as the profit expected over the company’s assumed life, without additional spending on further promotion and development, the formula can be presented as follows:',
      },
      { type: 'code', text: 'EV = 5 × (ARRn × GPM - EX) - ARRn-1 × (ACR - OGR)' },
      { type: 'p', text: 'Where:' },
      {
        type: 'ul',
        items: [
          'EV = Enterprise Value;',
          'ARRn = Annual Recurring Revenue;',
          'GPM = Gross Profit Margin;',
          'EX = Expenses required to maintain the product;',
          'ACR = Annual Churn Rate;',
          'OGR = Annual Organic Growth.',
        ],
      },
      {
        type: 'p',
        text:
          'In our example, the company valuation under this formula would be approximately 11,300,000, or 11,305,568.26 if calculated more precisely.',
      },
      {
        type: 'takeaway',
        text:
          'SaaS valuation depends heavily on perspective. A seller will usually focus on revenue multiples, growth and market potential. An investor should look deeper: margin, churn, organic growth, customer acquisition cost, product maintenance costs and the real economic quality of revenue. A loss-making SaaS company can still be valuable — but the valuation should reflect not only how quickly revenue is growing, but how much value that revenue actually creates.',
      },
    ],
  },
  {
    slug: 'opening-a-foreign-company-is-not-difficult-but-banking-is',
    title: 'Opening a Foreign Company Is Not Difficult — But Banking Is',
    category: 'International Structuring',
    readingTime: '5–6 min read',
    excerpt:
      'Registering a company abroad can be relatively simple in the United States, the United Kingdom, Ireland or Georgia. The real challenge usually begins afterwards: banking, substance, directors, residency and practical compliance.',
    body: [
      { type: 'p', text: 'Opening a foreign company is not just possible — in many cases, it is surprisingly simple.' },
      {
        type: 'p',
        text:
          'Below is a brief overview of several popular jurisdictions for start-ups: the United States, the United Kingdom, Ireland and Georgia.',
      },
      {
        type: 'quote',
        text:
          'The prices and conditions in this article should be checked and updated before the website goes live. Company registration costs, banking requirements, tax rules and compliance expectations can change quickly.',
      },
      { type: 'h2', text: 'United States' },
      {
        type: 'p',
        text:
          'A comfortable way to open a company in the United States costs around $500. One option is to use Stripe Atlas, a service offered by the well-known payment provider Stripe.',
      },
      {
        type: 'p',
        text:
          'In addition to standard company registration services, such as incorporation in Delaware and obtaining a tax number, Stripe provides additional benefits such as AWS credits, payment acquiring, a set of documentation and guides, and access to a large partner network of investment funds and accelerators.',
      },
      {
        type: 'p',
        text:
          'Registered agent support, which is mandatory for companies registered in Delaware, costs an additional annual fee.',
      },
      {
        type: 'p',
        text:
          'If you simply need to register a company without additional bonuses, it may be possible to do this more cheaply through a Delaware registered agent service.',
      },
      { type: 'p', text: 'The real problem is usually not company formation — it is opening a bank account.' },
      {
        type: 'p',
        text:
          'At present, opening an account for a company with a Ukrainian citizen as founder may be difficult, depending on the bank, the founder’s residency, the company’s business model and compliance risk profile.',
      },
      { type: 'h2', text: 'United Kingdom' },
      {
        type: 'p',
        text:
          'A company in the United Kingdom can be registered independently online, quickly and cheaply. This is one of the reasons why the UK remains one of the most attractive countries for doing business.',
      },
      {
        type: 'p',
        text:
          'However, if you do not live in the UK, you will need an address. For company registration purposes, a virtual office can often be sufficient.',
      },
      { type: 'p', text: 'The main questions begin with the bank account.' },
      {
        type: 'p',
        text:
          'Unlike in the United States, the citizenship of the company’s owners is usually not the main issue in the UK. What matters more is the director’s place of residence, the company’s actual connection to the UK and whether there is genuine business substance.',
      },
      {
        type: 'p',
        text:
          'If you do not have at least one UK-based director and a practical presence in the UK, opening an account with a traditional UK bank may be very difficult.',
      },
      {
        type: 'p',
        text:
          'In that case, one option may be to try opening a bank account for the UK company in another country, or to work with suitable EMI/fintech providers, depending on the structure and risk profile.',
      },
      { type: 'h2', text: 'Ireland' },
      {
        type: 'p',
        text:
          'In Ireland, the process is generally similar to the United Kingdom. A company can be registered online relatively easily.',
      },
      {
        type: 'p',
        text:
          'However, banking may again be the limiting factor. In practice, the availability of a local or EU-based director, business substance and a clear operational connection can be important for opening and maintaining a bank account.',
      },
      { type: 'h2', text: 'Georgia' },
      {
        type: 'p',
        text:
          'Georgia can be attractive for IT companies because of its relatively low tax burden and business-friendly environment.',
      },
      {
        type: 'p',
        text:
          'The cost of opening a company may include local legal support, document preparation, travel and accommodation. In practical terms, it may be possible to register a company and open a local bank account within a short period, provided the documents are prepared correctly.',
      },
      {
        type: 'p',
        text:
          'There are generally no strict citizenship requirements for owners or directors, which makes Georgia flexible for international founders.',
      },
      { type: 'h2', text: 'The real conclusion' },
      { type: 'p', text: 'Opening a foreign company is often the easy part.' },
      {
        type: 'p',
        text:
          'The difficult part is creating a structure that actually works: banking, tax logic, substance, director residency, payment providers, compliance documentation, contracts, accounting and long-term maintainability.',
      },
      { type: 'p', text: 'A company can be registered in a day. A reliable international structure takes much longer to design.' },
      {
        type: 'takeaway',
        text:
          'Do not choose a jurisdiction only because company registration is cheap or fast. Choose it because the full structure works: bank account, tax position, payment flows, client geography, investor expectations, founder residency and future growth plans.',
      },
    ],
  },
];

export const categories: { name: Article['category']; description: string }[] = [
  { name: 'Finance Transformation', description: 'Building scalable finance functions inside complex, fast-growing organisations.' },
  { name: 'ERP & Odoo', description: 'Practical reflections on ERP implementation, integration and ownership.' },
  { name: 'SaaS Finance', description: 'Valuation logic, unit economics and the financial reality of SaaS businesses.' },
  { name: 'International Structuring', description: 'Cross-border company design, banking and operational substance.' },
];
