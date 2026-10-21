import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowDisc, CheckIcon, vars } from '@/components/Icons';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import { accreditations, platformPartners, standards } from '@/lib/company';
import { showPartners } from '@/lib/nav';

export const metadata: Metadata = {
  title: 'Accreditations & Partners | TechBridge',
  description: 'The cloud platforms TechBridge works with and the security standards we help clients meet, including Cyber Essentials and ISO 27001.',
  alternates: { canonical: '/accreditations' },
};

export default function AccreditationsPage() {
  if (!showPartners) notFound();
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Company', href: '/about' }, { label: 'Accreditations & partners' }]}
        label="Accreditations & partners"
        title="Platforms we know. Standards we help you meet."
        lede="We work across the major cloud platforms and help clients reach the security standards their customers and contracts require."
      />

      <section className="container section-pad no-top">
        <Head label="Technology platforms" title="The platforms we design and run." />
        <div className="partner-grid">
          {platformPartners.map((p, i) => (
            <div key={p.name} className="partner" data-reveal style={vars({ '--d': i * 90 })}>
              <span className="partner-mark">{p.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}</span>
              <span className="partner-name">{p.name}</span>
              <span className="partner-desc">{p.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tint-band section-pad">
        <div className="container">
          <Head label="Standards" title="Standards we help clients achieve." side={<Link href="/services/cybersecurity" className="text-link">Our cybersecurity service</Link>} />
          <div className="standard-list">
            {standards.map((s, i) => (
              <div key={s.name} className="standard" data-reveal style={vars({ '--d': i * 80 })}>
                <span className="check-dot">
                  <CheckIcon size={14} />
                </span>
                <span className="standard-name">{s.name}</span>
                <span className="standard-desc">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <Head label="Our accreditations" title="TechBridge certifications." />
        {accreditations.length ? (
          <div className="partner-grid">
            {accreditations.map((a, i) => (
              <div key={a.name} className="partner" data-reveal style={vars({ '--d': i * 90 })}>
                <span className="partner-name">{a.name}</span>
                <span className="partner-desc">{a.desc}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="pending-card" data-reveal>
            <span className="pending-title">Certifications will be listed here.</span>
            <span className="pending-desc">We’re finalising this page. If you need evidence of our accreditations for a tender or due diligence, get in touch and we’ll send it over.</span>
            <Link href="/contact" className="btn btn-primary btn-sm">
              Request details <ArrowDisc />
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
