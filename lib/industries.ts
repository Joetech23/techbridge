import { img } from './content';

export type Industry = {
  slug: string;
  name: string;
  short: string;
  audience: string;
  desc: string;
  tags: string[];
  image: string;
  seoTitle: string;
  metaDesc: string;
  lede: string;
  challenges: { title: string; desc: string }[];
  approach: string[];
  services: string[];
  faqs: { q: string; a: string }[];
};

export const industries: Industry[] = [
  {
    slug: 'public-sector',
    name: 'Public Sector',
    short: 'Public Sector Services',
    audience: 'councils and public bodies',
    desc: 'IT, security and cloud services for councils and public bodies, delivered to public-sector standards.',
    tags: ['Cloud migration', 'Cyber Essentials', 'Managed IT'],
    image: img.thames,
    seoTitle: 'IT & Cyber Security for the Public Sector | TechBridge',
    metaDesc: 'IT, cyber security and cloud services for councils and public bodies: legacy migration, Cyber Essentials, managed IT and digital transformation.',
    lede: 'IT, security and cloud services for councils and public bodies. Modernise legacy services without putting public services at risk.',
    challenges: [
      { title: 'Legacy systems, tight budgets', desc: 'Critical services often run on ageing platforms that are expensive to maintain and hard to change.' },
      { title: 'Security and data protection', desc: 'Residents’ data must be protected to a high standard, with clear accountability under UK GDPR.' },
      { title: 'Accountability and procurement', desc: 'Every decision needs a clear business case and must stand up to scrutiny.' },
      { title: 'Continuity of service', desc: 'Change has to happen without interrupting the services people rely on.' },
    ],
    approach: [
      'We move legacy services to the cloud one workload at a time, using the 7 Rs to decide what to migrate, modernise or retire.',
      'Security is designed in from the start, with Cyber Essentials as a baseline and governance that satisfies auditors.',
      'Business cases, roadmaps and scopes of work are written to support procurement and board approval.',
    ],
    services: ['aws-solutions-architect', 'cybersecurity', 'managed-it-services', 'digital-consulting'],
    faqs: [
      { q: 'Can you work within our procurement process?', a: 'Yes. We provide clear scopes of work, fixed-price options and documentation to support your procurement and approval process.' },
      { q: 'How do you avoid disruption to live services?', a: 'Workloads are migrated in phases with rollback plans, testing in parallel and cut-overs scheduled at low-impact times.' },
    ],
  },
  {
    slug: 'financial-services',
    name: 'Financial Services',
    short: 'Financial Sector Services',
    audience: 'finance firms',
    desc: 'Security, compliance and cloud for finance firms that answer to regulators and clients alike.',
    tags: ['Compliance', 'Penetration testing', 'Cloud'],
    image: img.towers,
    seoTitle: 'IT, Security & Cloud for Financial Services | TechBridge',
    metaDesc: 'Security, compliance and cloud services for financial services firms: penetration testing, ISO 27001 readiness, resilient cloud architecture and data governance.',
    lede: 'Security, compliance and cloud for finance firms that answer to regulators and clients alike.',
    challenges: [
      { title: 'Regulatory scrutiny', desc: 'Regulators, auditors and clients all expect evidence that systems and data are under control.' },
      { title: 'A constant threat', desc: 'Financial firms are a high-value target, and attackers only need one gap.' },
      { title: 'Operational resilience', desc: 'Important services must keep running through incidents, outages and supplier failures.' },
      { title: 'Data you can trust', desc: 'Reporting and AI depend on data that is accurate, governed and protected.' },
    ],
    approach: [
      'Regular penetration testing and security monitoring show where you stand and prove it to auditors.',
      'Cloud architecture is designed for resilience, with security and compliance controls in every layer.',
      'Data and AI governance means new tools improve decisions without creating new risk.',
    ],
    services: ['penetration-testing', 'cybersecurity', 'aws-solutions-architect', 'data-ai-ml'],
    faqs: [
      { q: 'Can you help us prepare for an audit?', a: 'Yes. We test your controls, close the gaps and help you assemble the evidence auditors and clients ask for.' },
      { q: 'Do you provide reports suitable for boards?', a: 'Every engagement includes an executive summary alongside the technical detail, so leadership can see the risk and the plan.' },
    ],
  },
  {
    slug: 'sme-enterprise',
    name: 'SME & Enterprise',
    short: 'Small, Medium & Enterprise Consulting',
    audience: 'growing businesses and enterprises',
    desc: 'IT, security and cloud consulting for growing businesses and established enterprises.',
    tags: ['Managed IT', 'Microsoft 365', 'Web & Digital'],
    image: img.smallTeam,
    seoTitle: 'IT Consulting for SMEs & Enterprises London | TechBridge',
    metaDesc: 'IT, security and cloud consulting for growing businesses and established enterprises: managed IT, Microsoft 365, cyber security, cloud and web.',
    lede: 'IT, security and cloud consulting for growing businesses and established enterprises. Grown-up IT, without the overhead.',
    challenges: [
      { title: 'Growing faster than IT', desc: 'Tools and processes that worked for ten people start to creak at fifty.' },
      { title: 'No in-house specialists', desc: 'Cloud, security and data expertise is expensive to hire and hard to keep.' },
      { title: 'Microsoft 365 sprawl', desc: 'Licences, permissions and files multiply without anyone owning them.' },
      { title: 'Security basics', desc: 'Customers and insurers increasingly ask for Cyber Essentials and clear security practices.' },
    ],
    approach: [
      'Managed IT gives you a service desk and a team that looks after Microsoft 365, devices and your network.',
      'Senior architects are available when you need them, through Architecture as a Service, without a full-time hire.',
      'We get the security basics right first, then build towards the standards your customers ask for.',
    ],
    services: ['managed-it-services', 'cybersecurity', 'cloud-hosting', 'web-digital'],
    faqs: [
      { q: 'Are you a good fit for a small business?', a: 'Yes. We work with growing businesses as well as large organisations, and scale the service to what you need.' },
      { q: 'Can you replace our current IT support?', a: 'Yes. We plan the handover, document your systems and transition support without disruption.' },
    ],
  },
];

export const industryBySlug = (slug: string) => industries.find((i) => i.slug === slug);
export const industryHref = (slug: string) => `/industries/${slug}`;
