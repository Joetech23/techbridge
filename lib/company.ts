export const values = [
  { icon: 'compass', title: 'Honest advice', desc: 'We tell you what we’d do in your position, whether or not we’re the right fit for the work.' },
  { icon: 'shield', title: 'Secure by design', desc: 'Security and governance are part of every design decision, not an add-on at the end.' },
  { icon: 'scale', title: 'One accountable team', desc: 'The people who plan your systems help build and run them, so nothing falls between suppliers.' },
  { icon: 'flask', title: 'Prove it first', desc: 'Proofs of concept and phased plans mean you see results before you commit big budgets.' },
] as const;

export const disciplines = [
  { title: 'Cloud architecture', desc: 'Solutions architects who design, migrate and review platforms on AWS, Azure and Google Cloud.' },
  { title: 'Cyber security', desc: 'Specialists in security monitoring, standards readiness, penetration testing and incident response.' },
  { title: 'Data and AI', desc: 'Engineers who build governed data platforms, dashboards, automation and AI assistants.' },
  { title: 'Managed IT', desc: 'The service desk and engineers who look after users, devices, Microsoft 365 and networks.' },
  { title: 'Digital and web', desc: 'Designers and developers who build websites, e-commerce and digital campaigns.' },
  { title: 'Advisory and delivery', desc: 'Consultants who shape strategy, write business cases and keep programmes on track.' },
];

export type Member = {
  slug: string;
  name: string;
  role: string;
  photo: string;
  /** CSS object-position, to keep the face framed in the 4:5 card. */
  pos: string;
  /** Short line shown on the card. */
  focus?: string;
  /** Full profile paragraphs. Members without a bio only appear in the grid. */
  bio?: string[];
  certs: string[];
};

// Photos live in /public/team. Bios supplied by the client; certifications still to come.
export const team: Member[] = [
  {
    slug: 'calvin-agu',
    name: 'Calvin Agu',
    role: 'Lead Delivery Manager, Agile Transformation',
    photo: '/team/calvin-agu.jpg',
    pos: '40% 30%',
    certs: [],
  },
  {
    slug: 'kaustuv-prajapati',
    name: 'Kaustuv Prajapati',
    role: 'Technical Lead Consultant',
    photo: '/team/kaustuv-prajapati.jpeg',
    pos: '50% 30%',
    certs: [],
  },
  {
    slug: 'melanie-ngerem',
    name: 'Melanie Ngerem',
    role: 'Partner Alliance Advisor',
    photo: '/team/melanie-ngerem.jpg',
    pos: '50% 25%',
    certs: [],
  },
  {
    slug: 'ud-eke',
    name: 'UD Eke',
    role: 'Head of Women in Tech',
    photo: '/team/ud-eke.jpg',
    pos: '50% 56%',
    focus: 'Leads our Women in Tech programme.',
    bio: [
      'UD Eke leads the Women in Tech programme at TechBridge, championing greater representation, opportunity and progression for women across the technology sector.',
      'With over six years of experience in technology consulting, mentoring and community engagement, UD is passionate about breaking down barriers to entry and helping women build confident, successful careers in tech. UD’s work focuses on mentoring, career development, networking initiatives and partnerships with organisations committed to diversity and inclusion.',
      'At TechBridge, UD leads programmes that support women at every stage, from those taking their first steps into technology to experienced professionals moving into leadership roles. UD believes a more diverse tech industry is a stronger, more innovative one.',
    ],
    certs: [],
  },
  {
    slug: 'john-mulligan',
    name: 'John Mulligan',
    role: 'Client Engagement, Sales and Marketing Advisor',
    photo: '/team/john-mulligan.png',
    pos: '50% 18%',
    focus: 'Leads client engagement, sales and marketing.',
    bio: [
      'John is TechBridge’s Client Engagement, Sales and Marketing Advisor. He works closely with clients to understand their needs and make sure every engagement delivers real value.',
      'With over ten years of experience in sales, business development and client relationship management, John specialises in building lasting client relationships, identifying growth opportunities and developing marketing strategies that connect businesses with the right audiences. He is known for his approachable, client-focused style and his commitment to clear communication at every stage of a project.',
      'At TechBridge, John leads client engagement and supports the growth of the company’s sales and marketing activity, helping organisations get the most from their technology and consulting partnerships.',
      'Outside work, John enjoys playing hockey.',
    ],
    certs: [],
  },
];

export const platformPartners = [
  { name: 'Amazon Web Services', desc: 'Cloud architecture, migration and Well-Architected Reviews. Our flagship practice.' },
  { name: 'Microsoft Azure', desc: 'Workload design and migration for organisations invested in the Microsoft ecosystem.' },
  { name: 'Google Cloud', desc: 'Architecture and data workloads where Google Cloud is the right fit.' },
  { name: 'Microsoft 365', desc: 'Deployment, security configuration and day-to-day management.' },
];

export const standards = [
  { name: 'Cyber Essentials', desc: 'The UK government-backed baseline of five technical security controls.' },
  { name: 'Cyber Essentials Plus', desc: 'The same controls, independently tested by an assessor.' },
  { name: 'ISO/IEC 27001', desc: 'The international standard for information security management systems.' },
  { name: 'UK GDPR', desc: 'Data protection obligations designed into systems and processes.' },
];

// TechBridge's own certifications. Add once confirmed by the client.
export const accreditations: { name: string; desc: string }[] = [];

export const careerPerks = [
  { icon: 'flask', title: 'Real client projects', desc: 'Work on live cloud, security, data and web projects, not practice exercises.' },
  { icon: 'compass', title: 'Learn from consultants', desc: 'Work alongside experienced architects and engineers, and see how good projects are run.' },
  { icon: 'scale', title: 'Flexible commitment', desc: 'Project-based roles that fit around study or other work.' },
  { icon: 'shield', title: 'Build your portfolio', desc: 'Leave with work you can talk about and references from the people you worked with.' },
] as const;

export const opportunities = [
  {
    title: 'Voluntary project roles',
    type: 'Project-based · Flexible',
    desc: 'Join a project team for a defined piece of work. Ideal if you’re building experience or changing careers into IT.',
    areas: ['Cloud', 'Cyber security', 'Data & AI', 'Web & digital'],
  },
  {
    title: 'Internships',
    type: 'Fixed term · Structured',
    desc: 'A structured placement working across our services, with a clear plan for what you’ll learn.',
    areas: ['Cloud', 'Managed IT', 'Cyber security', 'Digital consulting'],
  },
];
