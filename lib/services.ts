import { img } from './content';

export type Service = {
  slug: string;
  name: string;
  cat: string;
  desc: string;
  image: string;
  flagship?: boolean;
  seoTitle: string;
  metaDesc: string;
  lede: string;
  overview: string[];
  outcomes: string[];
  included: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'aws-solutions-architect',
    name: 'AWS Solutions Architect Services',
    cat: 'Cloud',
    flagship: true,
    desc: 'AWS cloud architecture, integration, proof of concepts, roadmaps and Well-Architected Reviews.',
    image: img.datacentre,
    seoTitle: 'AWS Solutions Architect & Cloud Consulting UK | TechBridge',
    metaDesc: 'AWS solutions architects for cloud architecture, system integration, proof of concepts, AWS Well-Architected Reviews and migration strategy.',
    lede: 'Cloud architecture, system integration, proof of concepts and technology roadmaps on AWS. Designed to scale, built to stay resilient, secured from the start.',
    overview: [
      'Good cloud platforms start with good decisions. Our architects help you choose the right services, design for scale and security, and prove the approach before you commit budget.',
      'Whether you’re moving your first workload or reviewing an estate that has grown without a plan, you get a clear design, a phased roadmap and a team that can help deliver it.',
    ],
    outcomes: ['A target architecture you can build against', 'Risks found in week one, not month six', 'Infrastructure sized to what you actually need', 'Security and governance in every layer'],
    included: [
      { title: 'Cloud Architecture', desc: 'Design and migrate workloads on AWS, with a focus on scalability, resilience and security.' },
      { title: 'System Integration', desc: 'Build frameworks so hardware, software and data repositories communicate smoothly.' },
      { title: 'Proof of Concepts (PoC)', desc: 'Test and validate technology choices early, to mitigate major risks before full rollout.' },
      { title: 'Technology Roadmaps', desc: 'Plan phased transitions, modernisation and legacy system refactoring.' },
      { title: 'Security & Compliance', desc: 'Embed data protection, threat safeguarding and governance standards into every layer of the design.' },
      { title: 'Architecture as a Service', desc: 'Flexible, on-demand senior guidance without the cost of full-time senior hires.' },
    ],
    faqs: [
      { q: 'What does a Well-Architected Review involve?', a: 'We review your workloads against the six pillars of the AWS Well-Architected Framework: operational excellence, security, reliability, performance efficiency, cost optimisation and sustainability. You receive a report with prioritised improvements.' },
      { q: 'Can AWS help fund a review?', a: 'AWS sometimes offers credits towards Well-Architected Reviews and the remediation work that follows. Ask us and we’ll check whether your workloads are eligible before you commit any budget.' },
      { q: 'Why set up security tooling early?', a: 'Services such as AWS Security Hub give you one view of security findings across your accounts from day one. Getting this right early saves painful restructuring later.' },
      { q: 'What is Architecture as a Service?', a: 'Experienced architecture guidance on a flexible basis. You get an architect for design reviews, decisions and governance when you need one, without hiring full time.' },
    ],
    related: ['cloud-hosting', 'devops-maturity-assessment', 'cybersecurity'],
  },
  {
    slug: 'product-strategy-management',
    name: 'Product Strategy & Management',
    cat: 'Delivery',
    desc: 'Product strategy, product management and product ownership that turn business goals into the right roadmap.',
    image: img.stickies,
    seoTitle: 'Product Strategy & Product Management Consulting | TechBridge',
    metaDesc: 'Product strategy, product management and product ownership: discovery, roadmaps and backlog prioritisation that translate business needs into deliverables.',
    lede: 'Product strategy, product management and product ownership. We translate what your business needs into the right product, roadmap and backlog.',
    overview: [
      'Leadership usually knows the outcome it wants. The hard part is turning that into operational deliverables your teams can build. We bridge that gap.',
      'Our product consultants run discovery, shape the roadmap and own the backlog, balancing customer needs, commercial goals and technical constraints so every release moves you closer to the outcome.',
    ],
    outcomes: ['Business goals translated into clear deliverables', 'A roadmap and backlog everyone agrees on', 'Decisions grounded in customer and commercial evidence', 'Products that keep delivering value after launch'],
    included: [
      { title: 'Product strategy', desc: 'Vision, positioning and the measurable outcomes your product needs to deliver.' },
      { title: 'Discovery and requirements', desc: 'Workshops and research that define the right problem before anything is built.' },
      { title: 'Product management', desc: 'Roadmaps, prioritisation and stakeholder alignment across business and technical teams.' },
      { title: 'Product ownership', desc: 'An experienced product owner who manages the backlog and works day to day with your delivery team.' },
      { title: 'Operating model and governance', desc: 'Clear roles, decision rights and ways of working for sustainable product delivery.' },
    ],
    faqs: [
      { q: 'Can you provide a product owner for our team?', a: 'Yes. We can embed a product owner who manages the backlog, works with your stakeholders and keeps delivery focused on business value.' },
      { q: 'Do you only work on software products?', a: 'No. We apply product thinking to internal platforms, cloud migrations and service changes as well as customer-facing software.' },
    ],
    related: ['project-delivery-management', 'digital-consulting', 'aws-solutions-architect'],
  },
  {
    slug: 'project-delivery-management',
    name: 'Project & Delivery Management',
    cat: 'Delivery',
    desc: 'Project and programme management using Agile, Scrum or Waterfall, whichever fits the work.',
    image: img.whiteboard,
    seoTitle: 'Project Management: Agile, Scrum & Waterfall | TechBridge',
    metaDesc: 'Project and programme management, Agile transformation, Scrum and Waterfall delivery, giving you confidence that cloud and technology projects land on time.',
    lede: 'Project and programme management with the right delivery framework: Agile, Scrum, Waterfall or a hybrid. Confidence that your project lands.',
    overview: [
      'Moving legacy systems to the cloud is as much a delivery challenge as a technical one. You need confidence that the plan is realistic, risks are managed and progress is visible.',
      'Our delivery managers lead projects and programmes end to end, choosing the framework that suits your organisation, whether that is Agile and Scrum, a structured Waterfall plan, or a hybrid while you transition.',
    ],
    outcomes: ['Projects delivered on time and on budget', 'Risks identified and managed early', 'Clear reporting for boards and sponsors', 'Teams that keep improving how they deliver'],
    included: [
      { title: 'Project and programme management', desc: 'Planning, governance, budgets, risks and dependencies, managed end to end.' },
      { title: 'Agile and Scrum delivery', desc: 'Scrum ceremonies, sprint planning and coaching that help teams deliver in small, valuable increments.' },
      { title: 'Waterfall delivery', desc: 'Structured, stage-gated plans where scope, compliance or contracts call for them.' },
      { title: 'Agile transformation', desc: 'Moving teams from Waterfall to Agile ways of working, at a pace your organisation can absorb.' },
      { title: 'PMO and reporting', desc: 'Delivery reporting, RAID logs and dashboards that give leadership a clear picture.' },
    ],
    faqs: [
      { q: 'Agile or Waterfall: which should we use?', a: 'It depends on the work. Agile suits evolving requirements; Waterfall suits fixed scope and heavy compliance. Many cloud migrations use a hybrid, and we’ll recommend what fits.' },
      { q: 'Can you help our teams move to Agile?', a: 'Yes. We lead Agile transformation, from coaching Scrum teams to changing governance so it supports incremental delivery.' },
    ],
    related: ['product-strategy-management', 'devops-maturity-assessment', 'digital-consulting'],
  },
  {
    slug: 'cybersecurity',
    name: 'Cybersecurity',
    cat: 'Security',
    desc: 'Monitoring, Cyber Essentials and ISO 27001 readiness, and incident response.',
    image: img.padlock,
    seoTitle: 'Cyber Security Services & Consulting London | TechBridge',
    metaDesc: 'Cyber security services for UK organisations: security monitoring, Cyber Essentials and ISO 27001 readiness, risk assessment and incident response.',
    lede: 'Security monitoring, Cyber Essentials and ISO 27001 readiness, and incident response. Threats spotted early and handled properly.',
    overview: [
      'Most security incidents start with something basic: an unpatched system, a reused password, a misconfigured account. We help you get the fundamentals right, then build towards the standards your customers and contracts ask for.',
      'We review where you are today, close the gaps in a sensible order, and put monitoring and a response plan in place so you know what happens when something goes wrong.',
    ],
    outcomes: ['A clear picture of your security posture', 'Evidence ready for customers and auditors', 'A tested plan for when things go wrong', 'Fewer blind spots across devices, cloud and users'],
    included: [
      { title: 'Security monitoring', desc: 'Visibility across endpoints, cloud services and user accounts, with alerts that reach the right people.' },
      { title: 'Cyber Essentials readiness', desc: 'Get the five technical controls in place and prepare for Cyber Essentials or Cyber Essentials Plus.' },
      { title: 'ISO 27001 readiness', desc: 'Gap analysis, risk assessment, policies and evidence to prepare for certification.' },
      { title: 'Incident response', desc: 'A response plan, clear roles and hands-on help to contain, investigate and recover.' },
      { title: 'Risk assessment', desc: 'Identify and prioritise the threats that matter most to your organisation.' },
      { title: 'Policies and awareness', desc: 'Practical security policies and staff awareness that people actually follow.' },
    ],
    faqs: [
      { q: 'Do you issue the certificate?', a: 'No. Certificates are issued by an accredited certification body. We prepare you, close the gaps and help you gather the evidence so the assessment goes smoothly.' },
      { q: 'What’s the difference between Cyber Essentials and Cyber Essentials Plus?', a: 'Both cover the same five technical controls. Cyber Essentials is a verified self-assessment; Cyber Essentials Plus adds hands-on technical testing by an assessor.' },
      { q: 'Can you provide ongoing monitoring?', a: 'Yes. Monitoring can run alongside our managed IT service, so alerts are picked up by people who already know your systems.' },
    ],
    related: ['penetration-testing', 'managed-it-services', 'data-ai-ml'],
  },
  {
    slug: 'penetration-testing',
    name: 'Penetration Testing (VAPT)',
    cat: 'Security',
    desc: 'VAPT as a Service across web, network, cloud and APIs.',
    image: img.monitors,
    seoTitle: 'Penetration Testing (VAPT) Services UK | TechBridge',
    metaDesc: 'Vulnerability assessment and penetration testing (VAPT) for web applications, networks, cloud environments and APIs, with clear reports and retesting.',
    lede: 'Vulnerability assessment and penetration testing across web applications, networks, cloud and APIs. Find the weaknesses before someone else does.',
    overview: [
      'A penetration test shows how an attacker could actually get in, not just which patches are missing. We agree a scope and rules of engagement with you, test safely, and explain the findings in plain language.',
      'With VAPT as a Service, testing becomes a regular habit rather than a once-a-year scramble before an audit.',
    ],
    outcomes: ['Real attack paths, not just scanner output', 'Findings ranked by business risk', 'Fixes verified by retesting', 'Evidence for audits and customer questionnaires'],
    included: [
      { title: 'Web application testing', desc: 'Authentication, session handling, injection, access control and business logic flaws.' },
      { title: 'Network and infrastructure', desc: 'External and internal testing of servers, firewalls and network services.' },
      { title: 'Cloud configuration review', desc: 'Identity, storage, networking and logging settings across your cloud accounts.' },
      { title: 'API testing', desc: 'Authorisation, data exposure and rate-limiting weaknesses in your APIs.' },
      { title: 'VAPT as a Service', desc: 'Scheduled assessments throughout the year, so new risks are caught as your systems change.' },
      { title: 'Reporting and retesting', desc: 'An executive summary, technical detail for your team, and a retest once fixes are in.' },
    ],
    faqs: [
      { q: 'What’s the difference between a vulnerability assessment and a penetration test?', a: 'A vulnerability assessment identifies known weaknesses, usually with automated tools. A penetration test goes further, with a tester trying to exploit those weaknesses to show the real impact.' },
      { q: 'Will testing disrupt our systems?', a: 'We agree the scope, testing windows and rules of engagement before we start, and avoid destructive techniques unless you ask for them.' },
      { q: 'How often should we test?', a: 'At least annually, and after any significant change such as a new application, major release or infrastructure move. VAPT as a Service makes that routine.' },
    ],
    related: ['cybersecurity', 'aws-solutions-architect', 'devops-maturity-assessment'],
  },
  {
    slug: 'digital-consulting',
    name: 'Digital Consulting',
    cat: 'Advisory',
    desc: 'Transformation strategy, client-side advisory and project delivery.',
    image: img.review,
    seoTitle: 'Digital Transformation Consulting London | TechBridge',
    metaDesc: 'Digital transformation strategy, client-side advisory and project delivery for public bodies, finance firms and growing businesses.',
    lede: 'Transformation strategy, client-side advisory and project delivery. Independent advice on your side of the table.',
    overview: [
      'Technology change is rarely just about technology. We help you decide what to change and why, build the business case, and keep suppliers and projects on track.',
      'As your client-side adviser, we represent your interests with vendors and delivery partners, so decisions are made on evidence rather than sales pitches.',
    ],
    outcomes: ['A strategy tied to business goals', 'Confident supplier and technology choices', 'Projects delivered with clear governance', 'Less risk of expensive false starts'],
    included: [
      { title: 'Transformation strategy', desc: 'Where you are, where you need to be and a realistic route between the two.' },
      { title: 'Client-side advisory', desc: 'Independent expertise working for you with suppliers, vendors and delivery partners.' },
      { title: 'Project and programme delivery', desc: 'Planning, governance and hands-on delivery management.' },
      { title: 'Business cases and roadmaps', desc: 'Costed options and phased plans that boards and budget holders can approve.' },
      { title: 'Technology selection', desc: 'Requirements, market review and procurement support for new platforms.' },
    ],
    faqs: [
      { q: 'What does client-side advisory mean?', a: 'We work for you, not a vendor. We help write requirements, assess proposals, challenge estimates and oversee delivery so your interests come first.' },
      { q: 'Can you deliver the projects you recommend?', a: 'Yes. Many clients use us for strategy and delivery, but you’re never obliged to. Our advice stays independent either way.' },
    ],
    related: ['aws-solutions-architect', 'devops-maturity-assessment', 'data-ai-ml'],
  },
  {
    slug: 'devops-maturity-assessment',
    name: 'DevOps Maturity Assessment',
    cat: 'Advisory',
    desc: 'A review of how you build, test and release, with a clear plan to improve.',
    image: img.code,
    seoTitle: 'DevOps Maturity Assessment & Consulting UK | TechBridge',
    metaDesc: 'DevOps maturity assessment and consultation: review how your teams build, test, release and operate software, and get a practical improvement roadmap.',
    lede: 'A review of how your teams build, test, release and operate software, with a clear, practical plan to improve.',
    overview: [
      'Slow releases, fragile deployments and late-night firefighting usually have the same few causes. We look at your pipelines, environments, testing and operations to find them.',
      'You get an honest maturity score, a prioritised roadmap and, if you want it, hands-on help to put the improvements in place.',
    ],
    outcomes: ['Faster, safer releases', 'Fewer failed deployments', 'Environments you can rebuild with confidence', 'A roadmap your teams agree with'],
    included: [
      { title: 'Maturity assessment', desc: 'Interviews and evidence review across build, test, release and operate.' },
      { title: 'CI/CD pipeline review', desc: 'Automation, quality gates and deployment strategies.' },
      { title: 'Infrastructure as code', desc: 'How environments are defined, versioned and rebuilt.' },
      { title: 'Monitoring and incident practice', desc: 'Observability, alerting and how incidents are learned from.' },
      { title: 'Improvement roadmap', desc: 'Prioritised changes with clear owners and quick wins first.' },
      { title: 'Implementation support', desc: 'Engineers who help your team make the changes, not just recommend them.' },
    ],
    faqs: [
      { q: 'What do we get at the end?', a: 'A maturity report with scores for each area, the evidence behind them, and a prioritised roadmap. We walk your team through it in a working session.' },
      { q: 'Can we try a quick self-assessment first?', a: 'Yes. Our DevOps maturity self-assessment in Insights takes a few minutes and gives you a starting score.' },
    ],
    related: ['aws-solutions-architect', 'digital-consulting', 'penetration-testing'],
  },
  {
    slug: 'data-ai-ml',
    name: 'Data, AI & ML Solutions',
    cat: 'Data & AI',
    desc: 'AI governance, chatbots, knowledge bases, CRM automation and dashboards.',
    image: img.analytics,
    seoTitle: 'Data, AI & Machine Learning Consulting UK | TechBridge',
    metaDesc: 'Data and AI governance, chatbots, AI knowledge bases, CRM automation and dashboards that turn your data into decisions.',
    lede: 'Data and AI governance, chatbots and knowledge bases, CRM automation and dashboards. Practical AI, used responsibly.',
    overview: [
      'AI is only as useful as the data and controls behind it. We start with governance: what data you hold, who can use it and how. Then we build tools that save real time.',
      'From an internal knowledge base that answers staff questions to dashboards your leadership actually uses, we focus on outcomes you can measure.',
    ],
    outcomes: ['Clear rules for how AI and data are used', 'Less time lost searching for information', 'Automated, reliable CRM workflows', 'Decisions based on live data'],
    included: [
      { title: 'Data and AI governance', desc: 'Policies, data classification and controls for responsible AI use.' },
      { title: 'Chatbots and knowledge bases', desc: 'Assistants grounded in your own documents and systems.' },
      { title: 'CRM automation', desc: 'Workflows that remove manual data entry and follow-up.' },
      { title: 'Dashboards and reporting', desc: 'Clear, trustworthy reporting from the data you already have.' },
      { title: 'Data platforms and pipelines', desc: 'Bring data together reliably so it’s ready for analysis.' },
    ],
    faqs: [
      { q: 'Where should we start with AI?', a: 'Usually with one well-defined problem, like answering internal questions or automating a manual process, plus the governance to do it safely. We help you choose and prove it first.' },
      { q: 'Will our data be used to train public models?', a: 'We design solutions so your data stays under your control, and choose platforms and settings that meet your data protection requirements.' },
    ],
    related: ['digital-consulting', 'cybersecurity', 'aws-solutions-architect'],
  },
  {
    slug: 'managed-it-services',
    name: 'Managed IT Services',
    cat: 'Managed',
    desc: 'Service desk, Microsoft 365 and network management.',
    image: img.support,
    seoTitle: 'Managed IT Services & IT Support London | TechBridge',
    metaDesc: 'Managed IT services and IT support in London: service desk, Microsoft 365 management, network management, monitoring and patching.',
    lede: 'IT support and service desk, Microsoft 365 and network management. The team that builds your systems keeps them running.',
    overview: [
      'Day-to-day IT should just work. We look after your users, devices, Microsoft 365 and network, so your team can get on with their jobs.',
      'Because we also design and secure systems, support isn’t a separate silo. Problems get fixed at the root, and improvements happen without a new project every time.',
    ],
    outcomes: ['A single point of contact for IT', 'Secure, well-managed Microsoft 365', 'Patched, monitored devices and network', 'Predictable monthly costs'],
    included: [
      { title: 'IT support and service desk', desc: 'Help for your users when they need it, tracked through to resolution.' },
      { title: 'Microsoft 365 management', desc: 'Licences, users, security settings, Teams, SharePoint and Exchange.' },
      { title: 'Network management', desc: 'Firewalls, Wi-Fi, switches and remote access, kept secure and up to date.' },
      { title: 'Device management', desc: 'Set-up, security policies and lifecycle for laptops and phones.' },
      { title: 'Monitoring and patching', desc: 'Issues spotted early and updates applied on a schedule.' },
      { title: 'Backup oversight', desc: 'Backups checked and restores tested, not just assumed.' },
    ],
    faqs: [
      { q: 'Can you take over from our current IT provider?', a: 'Yes. We plan the handover with you, document what you have, and transition support without disruption to your users.' },
      { q: 'Do you support Microsoft 365 only?', a: 'Microsoft 365 is a core part of the service, but we support the wider environment too: devices, network, line-of-business apps and cloud services.' },
    ],
    related: ['cybersecurity', 'cloud-hosting', 'web-digital'],
  },
  {
    slug: 'cloud-hosting',
    name: 'Cloud & Hosting',
    cat: 'Cloud',
    desc: 'Migration to AWS and Azure, hosting, domains, SSL and backups.',
    image: img.cables,
    seoTitle: 'Cloud Migration & Hosting Services UK | TechBridge',
    metaDesc: 'Cloud migration to AWS and Azure, web hosting, domains, SSL certificates and backups, managed by one accountable team.',
    lede: 'Cloud migration to AWS and Azure, web hosting, domains, SSL and backups. Moved carefully, run reliably.',
    overview: [
      'Moving to the cloud is a chance to simplify, not just relocate. We assess each workload, choose the right migration approach and move it with minimal disruption.',
      'For websites and smaller workloads, we provide hosting with the essentials handled: domains, SSL, backups and updates.',
    ],
    outcomes: ['Workloads migrated with a clear plan', 'Hosting that stays secure and up to date', 'Backups you can actually restore', 'One provider for cloud, domains and SSL'],
    included: [
      { title: 'Cloud migration', desc: 'Assessment and migration to AWS or Azure, workload by workload.' },
      { title: 'Web hosting', desc: 'Managed hosting for websites and web applications.' },
      { title: 'Domains and DNS', desc: 'Registration, renewals and DNS management.' },
      { title: 'SSL certificates', desc: 'Certificates installed and renewed before they expire.' },
      { title: 'Backups and recovery', desc: 'Scheduled backups with tested restores.' },
    ],
    faqs: [
      { q: 'How do you decide how to migrate each system?', a: 'We use the 7 Rs of migration: retire, retain, rehost, replatform, repurchase, refactor or relocate. Each workload gets the approach that fits its value and risk.' },
      { q: 'Can you host a site you didn’t build?', a: 'Yes. We review the site first, then migrate it to our hosting with minimal downtime.' },
    ],
    related: ['hosting-packages', 'aws-solutions-architect', 'managed-it-services'],
  },
  {
    slug: 'hosting-packages',
    name: 'Hosting Packages',
    cat: 'Cloud',
    desc: 'Hosting plans compared side by side, ready to order online.',
    image: img.rack,
    seoTitle: 'Web Hosting Packages UK | TechBridge',
    metaDesc: 'Compare TechBridge hosting packages side by side, with SSL, backups and support included, and order the plan that fits.',
    lede: 'Hosting plans compared side by side, with SSL, backups and support included. Choose a plan and order online.',
    overview: [
      'Every plan includes the essentials: SSL, regular backups and security updates. Pick the level of management and support that suits your site.',
      'Not sure which plan you need? Tell us about your site and we’ll recommend one.',
    ],
    outcomes: ['SSL and backups on every plan', 'Clear, comparable features', 'Upgrade as you grow', 'Support from people who know your site'],
    included: [],
    faqs: [
      { q: 'Can I move between plans?', a: 'Yes. You can upgrade as your site grows, and we handle the move for you.' },
      { q: 'Do you migrate my existing site?', a: 'Yes. We review your current hosting and move your site across with minimal downtime.' },
    ],
    related: ['cloud-hosting', 'web-digital', 'managed-it-services'],
  },
  {
    slug: 'web-digital',
    name: 'Web & Digital',
    cat: 'Digital',
    desc: 'Websites and e-commerce, SEO, social, ads and branding.',
    image: img.laptop,
    seoTitle: 'Web Design, SEO & Digital Marketing London | TechBridge',
    metaDesc: 'Website and e-commerce builds, SEO, social media, paid ads and branding for organisations that want to grow online.',
    lede: 'Website and e-commerce builds, SEO, social media, ads and branding. Built properly, found easily.',
    overview: [
      'Your website is often the first conversation a customer has with you. We build fast, secure, accessible sites and help the right people find them.',
      'Because we also run infrastructure and security, your site is hosted, maintained and protected by the same team.',
    ],
    outcomes: ['Fast, secure, accessible websites', 'Better visibility in search', 'Consistent brand across channels', 'Campaigns measured against real goals'],
    included: [
      { title: 'Websites and e-commerce', desc: 'Design and build of fast, accessible websites and online shops.' },
      { title: 'Search engine optimisation', desc: 'Technical SEO, content structure and local search.' },
      { title: 'Social media', desc: 'Planning and content that fits your audience.' },
      { title: 'Paid advertising', desc: 'Search and social campaigns with clear tracking.' },
      { title: 'Branding', desc: 'Identity, messaging and guidelines that hold together.' },
    ],
    faqs: [
      { q: 'Do you look after the site after launch?', a: 'Yes. We can host, update and secure your site, and keep improving it based on results.' },
      { q: 'Can you improve our existing site rather than rebuild it?', a: 'Often, yes. We start with a review and recommend the most cost-effective option.' },
    ],
    related: ['hosting-packages', 'cloud-hosting', 'data-ai-ml'],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
export const serviceHref = (slug: string) => `/services/${slug}`;

// Proposal §03: cloud strategy services, shown on the AWS page.
export const cloudStrategyDetail = [
  { title: 'Cloud Readiness Assessment & CAF', desc: 'We assess readiness across the six perspectives of the AWS Cloud Adoption Framework: business, people, governance, platform, security and operations.' },
  { title: 'Pricing and engagement models', desc: 'Fixed price for defined scopes such as assessments, or time and materials for evolving programmes and advisory.' },
  { title: 'Sample scope of work', desc: 'A clear SoW before we start: objectives, deliverables, milestones, assumptions and responsibilities.' },
  { title: 'AWS Well-Architected Review', desc: 'A structured review against the six pillars, with a prioritised improvement plan.' },
  { title: 'Cloud Migration Assessment (the 7 Rs)', desc: 'Every workload mapped to the right migration strategy, from retire to refactor.' },
];

export const sevenRs: [string, string][] = [
  ['Retire', 'Switch off what no one needs any more.'],
  ['Retain', 'Keep it where it is, for now, for good reason.'],
  ['Rehost', 'Lift and shift to the cloud, unchanged.'],
  ['Replatform', 'Small tweaks to gain cloud benefits fast.'],
  ['Repurchase', 'Move to a SaaS product instead.'],
  ['Refactor', 'Re-architect for cloud-native scale.'],
  ['Relocate', 'Move whole platforms with minimal change.'],
];

// Placeholder plan structure. Confirm features and prices with TechBridge before launch.
export const hostingPlans = [
  {
    name: 'Starter',
    for: 'Brochure sites and small business websites',
    features: ['SSL certificate', 'Daily backups', 'Security updates', 'Email support'],
    featured: false,
  },
  {
    name: 'Business',
    for: 'Busy sites, WordPress and small online shops',
    features: ['Everything in Starter', 'Staging environment', 'Performance monitoring', 'Priority support', 'Monthly update report'],
    featured: true,
  },
  {
    name: 'Managed',
    for: 'Web applications and business-critical sites',
    features: ['Everything in Business', 'Dedicated cloud resources', 'Uptime monitoring and alerting', 'Quarterly security review', 'Named technical contact'],
    featured: false,
  },
];

// The six pillars of the AWS Well-Architected Framework (AWS page, feature band).
export const wellArchitectedPillars = [
  { title: 'Operational excellence', desc: 'Run and monitor systems well, and keep improving processes and procedures.' },
  { title: 'Security', desc: 'Protect data, systems and assets, with tools such as AWS Security Hub giving one view of findings.' },
  { title: 'Reliability', desc: 'Recover from failure quickly and meet demand, so your services stay resilient.' },
  { title: 'Performance efficiency', desc: 'Use the right resources for the job and keep them right as needs change.' },
  { title: 'Cost optimisation', desc: 'Avoid unnecessary spend, from oversized instances to forgotten resources.' },
  { title: 'Sustainability', desc: 'Reduce the environmental impact of your workloads through efficient design.' },
];
