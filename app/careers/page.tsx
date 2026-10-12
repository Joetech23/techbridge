import type { Metadata } from 'next';
import CareersForm from '@/components/CareersForm';
import { WhyIcon, vars } from '@/components/Icons';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import { careerPerks, opportunities } from '@/lib/company';
import { img } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Careers, Internships & Volunteering | TechBridge',
  description: 'Join TechBridge on voluntary project roles and internships across cloud, cyber security, data and digital. Work on real client projects in London.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Company', href: '/about' }, { label: 'Careers' }]}
        label="Careers"
        title="Build your career on real projects."
        lede="We offer voluntary project roles and internships for people who want hands-on experience in cloud, security, data and digital."
        image={img.meeting}
      />

      <section className="container section-pad">
        <Head label="Why join us" title="Experience that counts." />
        <div className="values-grid">
          {careerPerks.map((v, i) => (
            <div key={v.title} className="value-card" data-reveal style={vars({ '--d': i * 90 })}>
              <span className="value-card-icon">
                <WhyIcon name={v.icon} />
              </span>
              <span className="value-card-title">{v.title}</span>
              <span className="value-card-desc">{v.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tint-band section-pad">
        <div className="container">
          <Head label="Opportunities" title="Current openings." />
          <div className="openings">
            {opportunities.map((o, i) => (
              <div key={o.title} className="opening" data-reveal style={vars({ '--d': i * 100 })}>
                <div className="opening-main">
                  <span className="opening-type">{o.type}</span>
                  <span className="opening-title">{o.title}</span>
                  <span className="opening-desc">{o.desc}</span>
                </div>
                <div className="opening-areas">
                  {o.areas.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </div>
                <a href="#apply" className="btn btn-outline btn-sm">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="container section-pad apply-grid">
        <div>
          <span className="label" data-reveal>
            <span className="label-dot" /> Apply
          </span>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            Tell us about yourself.
          </h2>
          <p className="lede" data-reveal style={vars({ '--d': 140 })}>
            No formal CV required to start. Share a link to your LinkedIn or CV if you have one, and tell us what you’d like to learn.
          </p>
        </div>
        <div className="contact-card" data-reveal="right">
          <CareersForm />
        </div>
      </section>
    </>
  );
}
