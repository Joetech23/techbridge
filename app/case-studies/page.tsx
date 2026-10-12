import type { Metadata } from 'next';
import { CaseLibrary } from '@/components/Libraries';
import PageHero from '@/components/page/PageHero';

export const metadata: Metadata = {
  title: 'Case Studies | TechBridge IT Consultancy London',
  description: 'How TechBridge helps public bodies, finance firms and growing businesses with cloud, cyber security, managed IT and data. Filter by industry and service.',
  alternates: { canonical: '/case-studies' },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Case studies' }]}
        label="Our work"
        title="Selected work across our sectors."
        lede="Real problems, solved properly. Filter by industry or service to find work like yours."
      />
      <section className="container section-pad no-top">
        <CaseLibrary />
      </section>
    </>
  );
}
