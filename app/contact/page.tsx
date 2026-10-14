import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import PageHero from '@/components/page/PageHero';

export const metadata: Metadata = {
  title: 'Contact TechBridge | IT Consultancy London',
  description: 'Contact TechBridge, the London IT consultancy for cloud, cyber security, data and delivery. 27 Kingston Road, London SW19 1JX.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        label="Contact"
        title="Start a conversation with our team."
        lede="Send us a message about your project or question. You’ll hear back from a consultant, not a sales team."
      />
      <Contact heading={false} />
      <Faq />
    </>
  );
}
