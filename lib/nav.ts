import { site } from './content';
import { industries, industryHref } from './industries';
import { posts, postHref } from './insights';
import { serviceHref, services } from './services';

export const companyLinks = [
  { name: 'About us', desc: 'Our story, mission, values and how we work.', href: '/about' },
  { name: 'Our team', desc: 'The consultants and architects behind the work.', href: '/team' },
  { name: 'Accreditations & partners', desc: 'Platforms, standards and certifications.', href: '/accreditations' },
  { name: 'Careers', desc: 'Graduate scheme and internship opportunities.', href: '/careers' },
];

export const serviceCats = [
  { label: 'Strategy & Advisory', slugs: ['digital-consulting', 'devops-maturity-assessment'] },
  { label: 'Product & Delivery', slugs: ['product-strategy-management', 'project-delivery-management'] },
  { label: 'Cloud', slugs: ['aws-solutions-architect', 'cloud-hosting', 'hosting-packages'] },
  { label: 'Cyber Security', slugs: ['cybersecurity', 'penetration-testing'] },
  { label: 'Data, AI & ML', slugs: ['data-ai-ml'] },
  { label: 'Managed & Digital', slugs: ['managed-it-services', 'web-digital'] },
].map((c) => ({ label: c.label, items: c.slugs.map((s) => services.find((x) => x.slug === s)!) }));

export const mobileLinks = [
  { label: 'Industries', href: '/industries/public-sector' },
  { label: 'Services', href: '/#services' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'About us', href: '/about' },
  { label: 'Careers', href: '/careers' },
];

export const footerCols = [
  { title: 'Industries', links: industries.map((i) => ({ label: i.name, href: industryHref(i.slug) })) },
  {
    title: 'Services',
    links: [
      { label: 'AWS Solutions', href: serviceHref('aws-solutions-architect') },
      { label: 'Product & Delivery', href: serviceHref('project-delivery-management') },
      { label: 'Cybersecurity', href: serviceHref('cybersecurity') },
      { label: 'Penetration Testing', href: serviceHref('penetration-testing') },
      { label: 'Data, AI & ML', href: serviceHref('data-ai-ml') },
      { label: 'Managed IT', href: serviceHref('managed-it-services') },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Our team', href: '/team' },
      { label: 'Accreditations', href: '/accreditations' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Clients',
    links: [
      { label: 'Client Portal', href: site.clientPortal },
      { label: 'Knowledge Base', href: site.knowledgeBase },
      { label: 'Hosting Packages', href: serviceHref('hosting-packages') },
      { label: 'Insights', href: '/insights' },
    ],
  },
];

export const searchIndex = [
  ...industries.map((i) => ({ group: 'Industries', title: i.short, desc: i.desc, href: industryHref(i.slug) })),
  ...services.map((s) => ({ group: 'Services', title: s.name, desc: s.desc, href: serviceHref(s.slug) })),
  { group: 'Work & Insights', title: 'Case Studies', desc: 'Client success stories, filtered by service and industry', href: '/case-studies' },
  { group: 'Work & Insights', title: 'Insights', desc: 'Guides, articles and the TechBridge briefing', href: '/insights' },
  ...posts.map((p) => ({ group: 'Work & Insights', title: p.title, desc: p.excerpt, href: postHref(p.slug) })),
  ...companyLinks.map((c) => ({ group: 'Company', title: c.name, desc: c.desc, href: c.href })),
  { group: 'Contact', title: 'Contact us', desc: 'Send us a message and a consultant will be in touch', href: '/contact' },
];
