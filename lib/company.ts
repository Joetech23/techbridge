export const values = [
  { icon: 'compass', title: 'Honest advice', desc: 'We tell you what we’d do in your position, whether or not we’re the right fit for the work.' },
  { icon: 'shield', title: 'Secure by design', desc: 'Security and governance are part of every design decision, not an add-on at the end.' },
  { icon: 'scale', title: 'One accountable team', desc: 'The people who plan your systems help build and run them, so nothing falls between suppliers.' },
  { icon: 'flask', title: 'Prove it first', desc: 'Proof of concepts and phased plans mean you see results before you commit big budgets.' },
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
  /** Full profile paragraphs. Members without a bio only appear in the grid. */
  bio?: string[];
  certs: string[];
};

// Photos live in /public/team. Bios supplied by the client; certifications still to come.
export const team: Member[] = [
  {
    slug: 'chidera-dike',
    name: 'Chidera Dike',
    role: 'Senior Customer Success and Technical Account Manager',
    photo: '/team/chidera-dike.jpg',
    pos: '50% 30%',
    bio: [
      'Chidera is TechBridge’s Senior Customer Success and Technical Account Manager, working at the intersection of technology, client strategy and business outcomes. She partners with clients to understand their goals, translate complex technical requirements into clear priorities, and ensure they realise lasting value from their technology investments.',
      'With over 11 years of experience across SaaS, enterprise IT, technical account management, customer success, cloud technologies and technical enablement, Chidera has built her career supporting customers and organisations through complex technology environments. Her experience spans global organisations including Apple and SOTI, with technical expertise across cloud computing and AWS, networking, APIs, mobility and device management, data and AI. With a BSc in Biochemistry, she also brings an analytical, problem-solving mindset to the way she approaches technology and client challenges.',
      'At TechBridge, Chidera supports clients throughout the customer lifecycle, from onboarding and adoption to technical strategy, stakeholder management and ongoing success, working closely with technical teams to connect cloud, security and data solutions to meaningful business outcomes. She is passionate about building trusted client relationships, simplifying complexity and ensuring technology delivers measurable, long-term value.',
    ],
    certs: [],
  },
  {
    slug: 'jummai-afolabi',
    name: 'Jummai Afolabi',
    role: 'Business & Product Strategy Consultant',
    photo: '/team/jummai-afolabi.jpg',
    pos: '50% 22%',
    bio: [
      'Jummai Afolabi is a Business & Product Strategy Consultant with over 17 years’ experience spanning technology delivery, business transformation, operational improvement and strategic consulting across UK and international organisations. She brings a strong ability to translate complex business objectives into practical technology, product and transformation strategies, working across business and technical teams to define priorities, shape solutions and establish delivery roadmaps.',
      'Her experience includes product ownership, Agile delivery, requirements discovery, stakeholder engagement, operating-model design, governance, market expansion and continuous improvement, supported by an MBA in Business Administration, Agile Project Management training and AWS Cloud Practitioner certification.',
      'At TechBridge, Jummai provides strategic direction across business and product development, helping clients move from business challenge and opportunity identification through to technology-enabled solutions and measurable outcomes. Her background includes establishing and growing a consulting operation in Nigeria, developing market-entry and growth strategies, translating executive priorities into transformation programmes, and building governance and operating models for sustainable growth.',
      'More recently, she has led product-focused discovery, backlog prioritisation, platform enhancement and cross-functional technology delivery, balancing customer needs, commercial objectives and technical constraints. This combination of strategic thinking, commercial awareness and hands-on technology delivery enables her to help TechBridge clients define the right problems, shape the right products and build practical strategies for delivering sustainable business value.',
    ],
    certs: ['AWS Cloud Practitioner'],
  },
  {
    slug: 'melanie-ngerem',
    name: 'Melanie Ngerem',
    role: 'Partner Alliance Advisor',
    photo: '/team/melanie-ngerem.jpg',
    pos: '50% 25%',
    bio: [
      'Mel is responsible for building and growing TechBridge’s relationships with technology partners, training providers, community organisations and industry bodies.',
      'With over five years of experience in partnerships, business development and stakeholder management, Mel specialises in creating alliances that deliver shared value, from joint initiatives and referral partnerships to programmes that open doors for clients and learners. Mel is known for a collaborative, relationship-first approach and for turning initial conversations into lasting, productive partnerships.',
      'At TechBridge, Mel’s advisory role helps the sales and client teams align partnerships with client needs, extending the company’s reach and delivering greater impact.',
    ],
    certs: [],
  },
  {
    slug: 'calvin-agu',
    name: 'Calvin Agu',
    role: 'Lead Delivery Manager, Agile Transformation',
    photo: '/team/calvin-agu.jpg',
    pos: '40% 30%',
    bio: [
      'Calvin Agu is an Agile Delivery Lead specialising in AWS data platforms and other complex technology programmes. He brings together technical teams, research, delivery partners and business stakeholders to coordinate delivery, manage dependencies and strengthen operational readiness.',
      'His experience includes supporting cloud and data-platform delivery, with a focus on clear governance, risk management, research and integration testing. Calvin combines practical delivery leadership with Agile coaching to improve collaboration, build team capability and keep delivery aligned with business priorities.',
    ],
    certs: [],
  },
  {
    slug: 'kaustuv-prajapati',
    name: 'Kaustuv Prajapati',
    role: 'Technical Lead Consultant',
    photo: '/team/kaustuv-prajapati.jpeg',
    pos: '50% 30%',
    bio: [
      'Kaustuv Prajapati is a London-based AWS DevOps and Platform Engineer with over six years of experience in cloud infrastructure, CI/CD, Kubernetes platforms and infrastructure automation.',
      'He specialises in AWS, Terraform, GitHub Actions, GitLab CI, Linux operations and platform security, with experience supporting regulated and customer-facing environments.',
    ],
    certs: [],
  },
  {
    slug: 'john-mulligan',
    name: 'John Mulligan',
    role: 'Client Engagement, Sales and Marketing Advisor',
    photo: '/team/john-mulligan.png',
    pos: '50% 18%',
    bio: [
      'John is TechBridge’s Client Engagement, Sales and Marketing Advisor. He works closely with clients to understand their needs and make sure every engagement delivers real value.',
      'With over ten years of experience in sales, business development and client relationship management, John specialises in building lasting client relationships, identifying growth opportunities and developing marketing strategies that connect businesses with the right audiences. He is known for his approachable, client-focused style and his commitment to clear communication at every stage of a project.',
      'At TechBridge, John leads client engagement and supports the growth of the company’s sales and marketing activity, helping organisations get the most from their technology and consulting partnerships.',
      'Outside work, John enjoys playing hockey.',
    ],
    certs: [],
  },
  {
    slug: 'ud-eke',
    name: 'UD Eke',
    role: 'Head of Women in Tech',
    photo: '/team/ud-eke.jpg',
    pos: '50% 56%',
    bio: [
      'UD Eke leads the Women in Tech programme at TechBridge, championing greater representation, opportunity and progression for women across the technology sector.',
      'With over six years of experience in technology consulting, mentoring and community engagement, UD is passionate about breaking down barriers to entry and helping women build confident, successful careers in tech. UD’s work focuses on mentoring, career development, networking initiatives and partnerships with organisations committed to diversity and inclusion.',
      'At TechBridge, UD leads programmes that support women at every stage, from those taking their first steps into technology to experienced professionals moving into leadership roles. UD believes a more diverse tech industry is a stronger, more innovative one.',
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

// Career and training tracks from Paschal (WhatsApp, 15 Oct 2026). Used by the job board and application form.
export const careerTracks = [
  'AWS Solutions Architect',
  'AWS DevOps Engineering',
  'Cybersecurity & Ethical Hacking',
  'Healthcare Data Analysis',
  'AI & Machine Learning',
  'Data Governance',
  'Business Analyst',
  'Project Management',
];

export type JobType = 'Freelance' | 'Full Time' | 'Internship' | 'Part Time' | 'Temporary';
export const jobTypes: JobType[] = ['Freelance', 'Full Time', 'Internship', 'Part Time', 'Temporary'];

// Openings shown on /careers. 'Voluntary' was renamed to graduate scheme and internship (demo session, 13 Oct 2026).
// Confirm job type, location and remote status with DGCL; add new roles here and the job board picks them up.
export const opportunities: {
  slug: string;
  title: string;
  type: JobType;
  location: string;
  remote: boolean;
  desc: string;
  areas: string[];
}[] = [
  {
    slug: 'graduate-scheme',
    title: 'Graduate Scheme',
    type: 'Full Time',
    location: 'London',
    remote: false,
    desc: 'A structured programme for recent graduates. Rotate across live client projects, learn from experienced consultants and build a career in technology consulting.',
    areas: ['AWS Solutions Architect', 'AWS DevOps Engineering', 'Cybersecurity & Ethical Hacking', 'Healthcare Data Analysis', 'AI & Machine Learning', 'Data Governance', 'Business Analyst', 'Project Management'],
  },
  {
    slug: 'internship',
    title: 'Internship',
    type: 'Internship',
    location: 'London',
    remote: false,
    desc: 'A fixed-term placement working across our services, with a clear plan for what you will learn and hands-on experience on client work.',
    areas: ['AWS Solutions Architect', 'AWS DevOps Engineering', 'Cybersecurity & Ethical Hacking', 'Healthcare Data Analysis', 'AI & Machine Learning', 'Data Governance', 'Business Analyst', 'Project Management'],
  },
];

// Recruitment and placement section on /careers (structure modelled on castleendconsulting.co.uk,
// wording TechBridge's own; requested by Paschal, 15 Oct 2026).
export const recruitmentServices = [
  {
    title: 'Professional Employment Consulting',
    desc: 'We help technology and financial services teams find people with the right skills, from graduates to experienced specialists.',
  },
  {
    title: 'Explore our Candidate Database',
    desc: 'Graduates, interns and professionals trained across cloud, security, data and delivery. Tell us what you need and we’ll introduce the right people.',
  },
  {
    title: 'For employers across the UK',
    desc: 'Contract, short-term and permanent placements, matched to your team, your budget and your timelines.',
  },
  {
    title: 'Employment Recruiting',
    desc: 'End-to-end recruiting: role scoping, sourcing, screening and interviews, so you only meet candidates who fit.',
  },
];

export const recruitmentProcess = [
  { title: 'Share your CV or role', desc: 'Candidates upload a CV; employers tell us about the role, skills and timelines.' },
  { title: 'We match', desc: 'We review skills and goals on both sides and shortlist the strongest fits.' },
  { title: 'Interview', desc: 'We arrange interviews and support candidates and employers through every stage.' },
  { title: 'Placement and support', desc: 'We confirm the placement and stay in touch to make sure it works for everyone.' },
];

// Real TechBridge figures only. Leave empty until supplied and the counters stay hidden.
// e.g. { value: 120, suffix: '+', label: 'CVs received' }
export const recruitmentStats: { value: number; suffix?: string; label: string }[] = [];

// Real, attributed testimonials only. Leave empty until supplied and the section stays hidden.
export const testimonials: { quote: string; name: string; role: string }[] = [];
