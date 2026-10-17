import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDisc, vars } from '@/components/Icons';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import TeamGrid from '@/components/TeamGrid';
import { disciplines, team } from '@/lib/company';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Our Team | TechBridge Consultancy',
  description: 'Meet the TechBridge team: customer success, product strategy, delivery, technical and partnership specialists based in London.',
  alternates: { canonical: '/team' },
};

export default function TeamPage() {
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
        <Head label="Meet the team" title="Experienced people, one accountable team." side={<p>The consultants and advisors you’ll work with. Select anyone to read their profile.</p>} />
        <TeamGrid />
      </section>

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
            <span className="join-desc">Explore contract, freelance and consultancy opportunities across cloud, security, data and delivery.</span>
          </div>
          <Link href="/careers" className="btn btn-dark">
            View opportunities <ArrowDisc />
          </Link>
        </div>
      </section>
    </>
  );
}
