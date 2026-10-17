// All homepage copy lives here so it can later move to the CMS (proposal §01 "Easy updates").

export const site = {
  name: 'TechBridge',
  legalName: 'TechBridge Consultancy Ltd',
  url: 'https://www.techbridgedigital.co.uk',
  // General enquiries (contact page, footer). Careers applications go to `onboardingEmail`.
  email: 'hello@techbridgedigital.co.uk',
  onboardingEmail: 'onboarding@techbridgedigital.co.uk',
  address: { street: '27 Kingston Road', city: 'London', postcode: 'SW19 1JX', country: 'GB' },
  // Day-1 content from the client (proposal §06). Leave empty until supplied; the UI falls back gracefully.
  phone: '',
  // WhatsApp and live chat are switched off by decision (demo session, 13 Oct 2026). Contact form only.
  linkedin: '', // DGCL to supply once the LinkedIn page is live
  clientPortal: '#',
  knowledgeBase: '#',
  teamPhoto: '', // e.g. '/assets/team.jpg'
  clientLogos: [] as { name: string; src: string }[],
};

/**
 * Placeholder photography from Unsplash (free for commercial use).
 * Replace with TechBridge's own photos when supplied.
 */
export const img = {
  heroWide: 'photo-1573497019329-8c73173b95fb',
  // Careers hero: the woman coding with a colleague (previously the homepage hero).
  careersHero: 'photo-1531482615713-2afd69097998',
  bandDark: 'photo-1680459575585-390ed5cfcae0',
  mosaicA: 'photo-1613186941372-f19da23e373b',
  mosaicB: 'photo-1758691737138-7b9b1884b1db',
  mosaicC: 'photo-1576267423445-b2e0074d68a4',
  heroMain: 'photo-1758518731706-be5d5230e5a5',
  heroSmall: 'photo-1611095790444-1dfa35e37b52',
  process: 'photo-1573164574511-73c773193279',
  office: 'photo-1652049133878-fefb2a6a2130',
  datacentre: 'photo-1564457461758-8ff96e439e83',
  rack: 'photo-1695668548342-c0c1ad479aee',
  stickies: 'photo-1590402494587-44b71d7772f6',
  whiteboard: 'photo-1532622785990-d2c36a76f5a6',
  secDesk: 'photo-1510915228340-29c85a43dcfe',
  padlock: 'photo-1614064641938-3bbee52942c7',
  monitors: 'photo-1662638600476-d563fffbb072',
  review: 'photo-1551135049-8a33b5883817',
  code: 'photo-1498050108023-c5249f4df085',
  analytics: 'photo-1551288049-bebda4e38f71',
  support: 'photo-1579389083395-4507e98b5e67',
  cables: 'photo-1558494949-ef010cbdcc31',
  laptop: 'photo-1460925895917-afdab827c52f',
  thames: 'photo-1506501139174-099022df5260',
  towers: 'photo-1594648144731-a3b350b89a94',
  smallTeam: 'photo-1610387853988-7a1623efb207',
  glass: 'photo-1576594458263-af0210b383eb',
  teamHuddle: 'photo-1690383922983-90d7a4658ef3',
  monitoring: 'photo-1526628953301-3e589a6a8b74',
  towerBridge: 'photo-1513026705753-bc3fffca8bf4',
  meeting: 'photo-1573879404555-3f82d0582798',
};

/** Unsplash id → URL. Local paths (e.g. '/photos/team.jpg' in /public) pass straight through. */
export const unsplash = (id: string, w = 1600) => (id.startsWith('/') ? id : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`);

export const facts = [
  { n: 20, s: '+', label: 'Specialist services' },
  { n: 3, s: '', label: 'Core sectors served' },
  { n: 1, s: '', label: 'Accountable team, end to end' },
];

export const platforms = ['AWS', 'Microsoft Azure', 'Google Cloud', 'Microsoft 365', 'Cyber Essentials', 'ISO 27001'];

// Proposal §03: AWS Solutions Architect Services, in full.
export const awsDeliver = [
  { title: 'Cloud Architecture', desc: 'Design and migrate workloads on AWS, with a focus on scalability, resilience and security.', image: img.datacentre },
  { title: 'System Integration', desc: 'Build frameworks so hardware, software and data repositories communicate smoothly.', image: img.rack },
  { title: 'Proof of Concepts', desc: 'Test and validate technology choices early, to mitigate major risks before full rollout.', image: img.stickies },
  { title: 'Technology Roadmaps', desc: 'Plan phased transitions, modernisation and legacy system refactoring.', image: img.whiteboard },
  { title: 'Security & Compliance', desc: 'Embed data protection, threat safeguarding and governance standards into every layer of the design.', image: img.secDesk },
];

export const awsValue = [
  { title: 'Mitigating project risk', desc: 'Avoid costly failures caused by poor initial planning or a mismatched tech stack.' },
  { title: 'Cost optimisation', desc: 'The right infrastructure sizes and licence models for the best technical return.' },
  { title: 'Architecture as a Service', desc: 'Flexible, on-demand expert guidance without full-time senior hires.' },
];

export const cloudStrategy = ['Cloud Readiness & CAF', 'Well-Architected Review', 'The 7 Rs of migration', 'Sample scope of work', 'Fixed price or T&M'];

export const steps = [
  { no: '01', title: 'Assess', desc: 'Cloud readiness, security posture and delivery maturity, mapped honestly.', out: 'Readiness report and risk register' },
  { no: '02', title: 'Architect', desc: 'A phased roadmap, validated early with a proof of concept.', out: 'Roadmap, PoC and scope of work' },
  { no: '03', title: 'Deliver', desc: 'Secure build, integration and migration, with governance in every layer.', out: 'Live, secure, documented systems' },
  { no: '04', title: 'Run', desc: 'Managed IT, monitoring and continuous improvement after go-live.', out: 'Service desk and ongoing support' },
];

export const whys = [
  { icon: 'flask', title: 'Mitigate risk early', desc: 'Proof of concepts test technology choices early, so costly surprises surface in week one, not month six.' },
  { icon: 'compass', title: 'Business needs, translated', desc: 'We turn what your leadership wants to achieve into clear, operational deliverables your teams can build.' },
  { icon: 'scale', title: 'Future-proof and resilient', desc: 'Right-sized infrastructure and licence models that scale with you and keep running when it matters.' },
  { icon: 'shield', title: 'Secure by design', desc: 'Data protection, threat safeguarding and governance built into every layer, not added at the end.' },
] as const;

export const faqs = [
  { q: 'What happens after I get in touch?', a: 'A consultant reads your message and replies to arrange a conversation. You tell us what you’re trying to fix or build, we ask questions, and you get honest next steps, whether or not we end up working together.' },
  { q: 'Can you manage delivery as well as advise?', a: 'Yes. We provide product strategy, product management and project management, and run delivery using Agile, Scrum or Waterfall, whichever suits your organisation and the work.' },
  { q: 'Do you work on a fixed price or time and materials?', a: 'Both. Assessments and well-defined projects are usually fixed price, with a scope of work agreed up front. Evolving programmes and ongoing advisory suit time and materials.' },
  { q: 'What does an AWS Well-Architected Review cover?', a: 'We assess your workloads against the six AWS pillars: operational excellence, security, reliability, performance efficiency, cost optimisation and sustainability. You get a report with prioritised fixes.' },
  { q: 'Can you get us ready for Cyber Essentials or ISO 27001?', a: 'Yes. We review where you are today, close the gaps and help you prepare the evidence you need. Monitoring and incident response are available alongside.' },
  { q: 'Will you support us after go-live?', a: 'Yes. Our managed IT service covers the service desk, Microsoft 365, network management and monitoring, so the team that built your system can keep it running.' },
  { q: 'Which cloud platforms do you work with?', a: 'AWS, Microsoft Azure and Google Cloud. We recommend the right fit for each workload rather than pushing a single provider.' },
];

export const quoteServices = [
  'AWS Solutions Architect Services',
  'Product Strategy & Management',
  'Project & Delivery Management',
  'Cybersecurity',
  'Penetration Testing (VAPT)',
  'Digital Consulting',
  'DevOps Maturity Assessment',
  'Data, AI & ML Solutions',
  'Managed IT Services',
  'Cloud & Hosting',
  'Hosting Packages',
  'Web & Digital',
  'Not sure yet',
];
