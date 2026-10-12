import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDisc, Motif, vars } from '@/components/Icons';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import Photo from '@/components/Photo';
import TeamGrid from '@/components/TeamGrid';
import { disciplines, team } from '@/lib/company';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Team | TechBridge Consultancy',
  description: 'Meet the TechBridge team: delivery leads, technical consultants and advisors based in London, including our Head of Women in Tech.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
  const profiles = team.filter((m) => m.bio);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: team.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: { '@type': 'Person', name: m.name, jobTitle: m.role, worksFor: { '@type': 'Organization', name: site.legalName }, image: `${site.url}${m.photo}` },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[{ label: 'Company', href: '/about' }, { label: 'Our team' }]}
        label="Our team"
        title="The people behind the work."
        lede="Delivery leads, technical consultants and advisors who plan, build and run your systems. You’ll work with the same people from first call to go-live."
      />

      <section className="container section-pad">
        <Head label="Meet the team" title="Experienced people, one accountable team." side={<p>The consultants and advisors you’ll work with. Fuller profiles follow below.</p>} />
        <TeamGrid />
      </section>

      {profiles.length > 0 && (
        <section className="tint-band section-pad">
          <div className="container">
            <Head label="Profiles" title="A closer look." />
            <div className="profiles">
              {profiles.map((m, i) => (
                <article key={m.slug} id={m.slug} className={`profile${i % 2 ? ' flip' : ''}`}>
                  <div className="profile-media" data-reveal>
                    <div className="profile-photo">
                      <Photo id={m.photo} alt={`${m.name}, ${m.role}`} sizes="(max-width: 999px) 100vw, 480px" position={m.pos} />
                    </div>
                    <Motif className="profile-motif" tone="mixed" />
                  </div>
                  <div className="profile-body">
                    <span className="label" data-reveal>
                      <span className="label-dot" /> {m.role}
                    </span>
                    <h3 className="h2" data-reveal style={vars({ '--d': 80 })}>
                      {m.name}
                    </h3>
                    {m.bio!.map((p, k) => (
                      <p key={k} className={k === 0 ? 'profile-lede' : undefined} data-reveal style={vars({ '--d': 140 + k * 60 })}>
                        {p}
                      </p>
                    ))}
                    <Link href="/contact" className="btn btn-dark btn-sm" data-reveal style={vars({ '--d': 360 })}>
                      Get in touch <ArrowDisc />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container section-pad">
        <Head label="Disciplines" title="Specialists across every service." />
        <div className="discipline-grid">
          {disciplines.map((d, i) => (
            <div key={d.title} className="discipline" data-reveal style={vars({ '--d': (i % 3) * 90 })}>
              <span className="discipline-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="discipline-title">{d.title}</span>
              <span className="discipline-desc">{d.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-pad no-top">
        <div className="join-band" data-reveal>
          <div>
            <span className="join-title">Want to work with us?</span>
            <span className="join-desc">We offer voluntary project roles and internships across cloud, security, data and digital.</span>
          </div>
          <Link href="/careers" className="btn btn-dark">
            View opportunities <ArrowDisc />
          </Link>
        </div>
      </section>
    </>
  );
}
