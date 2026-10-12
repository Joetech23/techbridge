import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDisc, WhyIcon, vars } from '@/components/Icons';
import Intro from '@/components/Intro';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import Photo from '@/components/Photo';
import Process from '@/components/Process';
import TeamGrid from '@/components/TeamGrid';
import { values } from '@/lib/company';
import { img } from '@/lib/content';
import { industries, industryHref } from '@/lib/industries';

export const metadata: Metadata = {
  title: 'About TechBridge | IT Consultancy in London',
  description: 'TechBridge is a London IT consultancy helping public bodies, finance firms and growing businesses with cloud, cyber security, data and managed IT.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Company' }, { label: 'About us' }]}
        label="About us"
        title="Planned properly. Delivered securely."
        lede="TechBridge is an IT consultancy based in London. We help organisations move to the cloud, protect their systems and use their data well, then stay on to run what we build."
        image={img.teamHuddle}
      />

      <Intro />

      <section className="tint-band section-pad">
        <div className="container mission">
          <span className="label" data-reveal>
            <span className="label-dot" /> Our mission
          </span>
          <p className="mission-text" data-reveal style={vars({ '--d': 80 })}>
            To help organisations adopt cloud, security and data with confidence, through honest advice, sound architecture and a team that stays accountable from the first conversation to day-to-day support.
          </p>
        </div>
      </section>

      <section className="container section-pad">
        <Head label="Our values" title="How we work with every client." />
        <div className="values-grid">
          {values.map((v, i) => (
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

      <Process />

      <section className="container section-pad">
        <Head label="Who we work with" title="Three sectors, one standard of care." side={<Link href="/case-studies" className="text-link">See our work</Link>} />
        <div className="other-ind three">
          {industries.map((o, i) => (
            <Link key={o.slug} href={industryHref(o.slug)} className="other-card" data-reveal style={vars({ '--d': i * 100 })}>
              <span className="other-photo">
                <Photo id={o.image} alt="" sizes="(max-width: 999px) 100vw, 420px" />
              </span>
              <span className="other-body">
                <span className="other-name">{o.name}</span>
                <span className="other-desc">{o.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="tint-band section-pad">
        <div className="container">
          <Head label="Our team" title="The people behind the work." side={<Link href="/team" className="btn btn-dark btn-sm">Meet the full team <ArrowDisc /></Link>} />
          <TeamGrid />
        </div>
      </section>

      <section className="container section-pad">
        <div className="link-panels">
          <Link href="/team" className="link-panel" data-reveal>
            <span className="link-panel-title">Meet the team</span>
            <span className="link-panel-desc">The consultants and architects behind the work.</span>
            <ArrowDisc />
          </Link>
          <Link href="/accreditations" className="link-panel" data-reveal style={vars({ '--d': 100 })}>
            <span className="link-panel-title">Accreditations and partners</span>
            <span className="link-panel-desc">The platforms we work on and the standards we help you meet.</span>
            <ArrowDisc />
          </Link>
        </div>
      </section>
    </>
  );
}
