import type { Metadata } from 'next';
import Contact from '@/components/Contact';
import Faq from '@/components/Faq';
import PageHero from '@/components/page/PageHero';

export const metadata: Metadata = {
  title: 'Contact & Book a Consultation | TechBridge',
  description: 'Book a free 30-minute consultation, request a quote or send a message to TechBridge, 27 Kingston Road, London SW19 1JX.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        label="Contact"
        title="Start a conversation with our team."
        lede="Book a free consultation, ask for a quote or just send us a question. You’ll hear from a consultant, not a sales team."
      />
      <Contact heading={false} />
      <Faq />
    </>
  );
}
