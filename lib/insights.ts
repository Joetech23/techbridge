import { img } from './content';

export type Block = { h?: string; p?: string[]; list?: { t: string; d: string }[] };
export type Post = {
  slug: string;
  type: 'Guide' | 'Article' | 'Download';
  meta: string;
  title: string;
  excerpt: string;
  image: string;
  seoTitle: string;
  related: string;
  body: Block[];
  interactive?: 'devops';
};

export const posts: Post[] = [
  {
    slug: '7-rs-of-cloud-migration',
    type: 'Guide',
    meta: '6 min read',
    title: 'The 7 Rs of cloud migration, explained for decision-makers',
    excerpt: 'Not every system should move to the cloud the same way. Here’s how to choose the right path for each workload.',
    image: img.towerBridge,
    seoTitle: 'The 7 Rs of Cloud Migration Explained | TechBridge',
    related: 'aws-solutions-architect',
    body: [
      {
        p: [
          'A cloud migration is really dozens of smaller decisions, one for each application or workload. The 7 Rs give you a shared vocabulary for those decisions, so technical teams and budget holders can agree on what happens to each system and why.',
        ],
      },
      {
        h: 'The seven strategies',
        list: [
          { t: 'Retire', d: 'Switch off applications nobody needs. Most estates have more of these than people expect, and retiring them is the cheapest migration there is.' },
          { t: 'Retain', d: 'Keep a system where it is for now. Common for applications nearing end of life, or with dependencies that make moving them risky today.' },
          { t: 'Rehost', d: 'Lift and shift to the cloud without changes. Fast and low risk, but you won’t see many cloud-native benefits until later.' },
          { t: 'Replatform', d: 'Make a few targeted changes during the move, such as switching to a managed database, to gain benefits quickly.' },
          { t: 'Repurchase', d: 'Replace the application with a SaaS product. Often the right answer for email, CRM and HR systems.' },
          { t: 'Refactor', d: 'Re-architect for cloud-native services. The most effort, but the biggest gains in scalability and cost for systems that matter.' },
          { t: 'Relocate', d: 'Move an entire platform, such as a VMware estate, to the cloud with minimal change.' },
        ],
      },
      {
        h: 'How to choose',
        p: [
          'Start with business value and risk, not technology. A system that differentiates your organisation and is costly to run is a candidate for refactoring. A stable commodity system is usually better rehosted or repurchased.',
          'Check dependencies early. Applications that share databases or integrations often need to move together, which shapes your migration waves.',
          'Be honest about skills and timelines. Refactoring everything at once is rarely realistic. Most successful migrations rehost or replatform first, then modernise the systems that justify it.',
        ],
      },
      {
        h: 'Where to begin',
        p: [
          'A migration assessment maps every workload to one of the 7 Rs, groups them into waves and estimates the effort and cost of each. It turns “move to the cloud” into a plan you can fund and track.',
        ],
      },
    ],
  },
  {
    slug: 'cyber-essentials-or-iso-27001',
    type: 'Article',
    meta: '5 min read',
    title: 'Cyber Essentials or ISO 27001: which should you tackle first?',
    excerpt: 'Two very different standards, often asked for in the same tender. Here’s how they compare and where to start.',
    image: img.padlock,
    seoTitle: 'Cyber Essentials vs ISO 27001: Where to Start | TechBridge',
    related: 'cybersecurity',
    body: [
      {
        p: [
          'Both standards show customers you take security seriously, but they work in very different ways. Understanding the difference helps you spend effort in the right order.',
        ],
      },
      {
        h: 'Cyber Essentials',
        p: [
          'Cyber Essentials is a UK government-backed scheme focused on five technical controls: firewalls, secure configuration, user access control, malware protection and security update management.',
          'Cyber Essentials is a verified self-assessment. Cyber Essentials Plus covers the same controls but adds hands-on technical testing by an assessor. Certification is renewed every year, and it’s a requirement for many public-sector contracts.',
        ],
      },
      {
        h: 'ISO 27001',
        p: [
          'ISO/IEC 27001 is an international standard for an information security management system (ISMS). Rather than a fixed checklist, it asks you to assess your own risks, choose appropriate controls and show that you manage and improve security continuously.',
          'Certification is issued by an accredited certification body after an external audit, with surveillance audits in the following years. It takes more time and commitment than Cyber Essentials, and it’s often requested by larger enterprise and financial-services customers.',
        ],
      },
      {
        h: 'Which comes first?',
        p: [
          'For most organisations, Cyber Essentials first. It fixes the technical basics that stop the majority of common attacks, it’s quicker to achieve, and much of the work carries straight into ISO 27001 later.',
          'Go straight to ISO 27001 if a key customer or contract requires it, or if you handle sensitive data at scale and need a formal management system now. Even then, the Cyber Essentials controls are a sensible early milestone.',
        ],
      },
      {
        h: 'Getting started',
        p: ['A short gap analysis against both standards shows where you are today and what it would take to reach each one. From there, you can plan the work in the order that suits your contracts and budget.'],
      },
    ],
  },
  {
    slug: 'devops-maturity-self-assessment',
    type: 'Download',
    meta: 'Interactive checklist',
    title: 'DevOps maturity self-assessment: where does your team stand?',
    excerpt: 'Eight questions, two minutes. Get a quick read on how your team builds, tests and releases software.',
    image: img.meeting,
    seoTitle: 'DevOps Maturity Self-Assessment Checklist | TechBridge',
    related: 'devops-maturity-assessment',
    interactive: 'devops',
    body: [
      {
        p: [
          'This checklist gives you a quick, honest snapshot of your delivery practices. Tick the statements that are true for your team today, not what you plan to do. Your score updates as you go.',
          'It isn’t a substitute for a full assessment, but it’s a good way to start a conversation with your team about where to improve first.',
        ],
      },
    ],
  },
  {
    slug: 'aws-well-architected-review',
    type: 'Article',
    meta: '4 min read',
    title: 'What an AWS Well-Architected Review actually covers',
    excerpt: 'Six pillars, one report. What happens during a review and what you get at the end.',
    image: img.monitoring,
    seoTitle: 'What an AWS Well-Architected Review Covers | TechBridge',
    related: 'aws-solutions-architect',
    body: [
      {
        p: [
          'The AWS Well-Architected Framework is a set of best practices for building secure, reliable and efficient systems in the cloud. A Well-Architected Review checks one or more of your workloads against it and turns the gaps into a prioritised plan.',
        ],
      },
      {
        h: 'The six pillars',
        list: [
          { t: 'Operational excellence', d: 'How you run, monitor and improve your systems, including deployments and incident response.' },
          { t: 'Security', d: 'Identity and access, data protection, detection and how you respond to security events.' },
          { t: 'Reliability', d: 'How your workload recovers from failure and copes with changes in demand.' },
          { t: 'Performance efficiency', d: 'Whether you’re using the right resources for the job, and keep them right as needs change.' },
          { t: 'Cost optimisation', d: 'Avoiding unnecessary spend, from oversized instances to forgotten resources.' },
          { t: 'Sustainability', d: 'Reducing the environmental impact of your workloads through efficient design.' },
        ],
      },
      {
        h: 'What happens during a review',
        p: [
          'We agree which workloads to review, then run structured sessions with the people who build and operate them. We look at the architecture and configuration as well as how the team works.',
          'Each question in the framework is answered honestly, and risks are rated high or medium. The aim is a clear picture, not a pass or fail.',
        ],
      },
      {
        h: 'What you get',
        p: [
          'A report summarising risks by pillar, with recommended improvements ranked by impact and effort. Quick wins are separated from larger pieces of work, so you can start improving straight away and plan the rest.',
        ],
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
export const postHref = (slug: string) => `/insights/${slug}`;

export const devopsQuestions = [
  'Every code change goes through version control and peer review.',
  'Builds and tests run automatically on every change.',
  'We can deploy to production on demand, during working hours, without drama.',
  'Environments are defined as code and can be rebuilt from scratch.',
  'Automated tests catch most regressions before release.',
  'We monitor production and get alerted before users report problems.',
  'Failed releases can be rolled back quickly and safely.',
  'After incidents, we hold blameless reviews and act on what we learn.',
];
