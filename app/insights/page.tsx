import type { Metadata } from 'next';
import Briefing from '@/components/Briefing';
import { PostLibrary } from '@/components/Libraries';
import PageHero from '@/components/page/PageHero';

export const metadata: Metadata = {
  title: 'Insights on Cloud, Security & Data | TechBridge',
  description: 'Practical guides and articles on cloud migration, cyber security, DevOps and AWS from the TechBridge team. Plus the monthly TechBridge briefing.',
  alternates: { canonical: '/insights' },
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Insights' }]}
        label="Insights"
        title="Clear thinking on cloud, security and data."
        lede="Guides, articles and checklists written for the people who make technology decisions. No jargon for the sake of it."
      />
      <section className="container section-pad no-top">
        <PostLibrary />
      </section>
      <section className="container section-pad no-top">
        <Briefing wide />
      </section>
    </>
  );
}
