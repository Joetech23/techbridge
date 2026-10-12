import { img } from './content';

// Sample stories from the design handoff. Replace with real client case studies (proposal §06, Day 1).
export const cases = [
  { sector: 'Public Sector', service: 'Cloud', serviceLabel: 'AWS · Cloud migration', title: 'Moving a council’s legacy services to AWS, one workload at a time', image: img.thames },
  { sector: 'Financial Services', service: 'Security', serviceLabel: 'VAPT · Cybersecurity', title: 'Penetration testing ahead of a regulatory audit', image: img.glass },
  { sector: 'SME & Enterprise', service: 'Managed IT', serviceLabel: 'Managed IT', title: 'A service desk and Microsoft 365 rollout for a growing firm', image: img.teamHuddle },
  { sector: 'SME & Enterprise', service: 'Data & AI', serviceLabel: 'Data, AI & ML', title: 'An AI knowledge base for internal support teams', image: img.monitoring },
];

export const caseSectors = ['All', 'Public Sector', 'Financial Services', 'SME & Enterprise'] as const;
export const caseServices = ['All services', 'Cloud', 'Security', 'Managed IT', 'Data & AI'] as const;
export type CaseItem = (typeof cases)[number];
