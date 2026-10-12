import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Faq from '@/components/Faq';
import { ArrowDisc, vars } from '@/components/Icons';
import { CaseCard, CheckList, Head, ServiceCard } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import Photo from '@/components/Photo';
import { cases } from '@/lib/cases';
import { img } from '@/lib/content';
import { industries, industryBySlug, industryHref } from '@/lib/industries';
import { serviceBySlug } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const ind = industryBySlug((await params).slug);
  if (!ind) return {};
  return {
    title: ind.seoTitle,
    description: ind.metaDesc,
    alternates: { canonical: industryHref(ind.slug) },
    openGraph: { title: ind.seoTitle, description: ind.metaDesc, url: industryHref(ind.slug) },
  };
}

export default async function IndustryPage({ params }: Props) {
  const ind = industryBySlug((await params).slug);
  if (!ind) notFound();
  const svc = ind.services.map((s) => serviceBySlug(s)!).filter(Boolean);
  const work = cases.filter((c) => c.sector === ind.name);
  const others = industries.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Industries', href: '/#industries' }, { label: ind.name }]}
        label="Industries"
        title={ind.short}
        lede={ind.lede}
        image={ind.image}
        actions={
          <Link href="/contact" className="btn btn-primary">
            Talk to a consultant <ArrowDisc />
          </Link>
        }
      />

      <section className="container section-pad">
        <Head label="The challenge" title="What gets in the way." side={<p>We hear the same pressures from {ind.audience} again and again. Here’s where we usually start.</p>} />
        <div className="challenge-grid">
          {ind.challenges.map((c, i) => (
            <div key={c.title} className="challenge" data-reveal style={vars({ '--d': i * 90 })}>
              <span className="challenge-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="challenge-title">{c.title}</span>
              <span className="challenge-desc">{c.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tint-band section-pad">
        <div className="container split-media">
          <div className="split-photo reveal-img" data-reveal="img">
            <Photo id={img.process} alt="" sizes="(max-width: 999px) 100vw, 620px" />
          </div>
          <div>
            <span className="label" data-reveal>
              <span className="label-dot" /> Our approach
            </span>
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              How we help {ind.audience}.
            </h2>
            <div className="split-list">
              <CheckList items={ind.approach} />
            </div>
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <Head label="Relevant services" title="The services our clients use most." side={<Link href="/#services" className="text-link">See all services</Link>} />
        <div className="card-grid-4">
          {svc.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
        </div>
      </section>

      {work.length > 0 && (
        <section className="container section-pad no-top">
          <Head label="Selected work" title={`Recent work for ${ind.audience}.`} />
          <div className="case-grid">
            {work.map((cs, i) => (
              <CaseCard key={cs.title} cs={cs} i={i} />
            ))}
          </div>
        </section>
      )}

      <Faq items={ind.faqs} title={`Working with ${ind.audience}.`} tint />

      <section className="container section-pad">
        <Head label="Other sectors" title="We also work with." />
        <div className="other-ind">
          {others.map((o, i) => (
            <Link key={o.slug} href={industryHref(o.slug)} className="other-card" data-reveal style={vars({ '--d': i * 100 })}>
              <span className="other-photo">
                <Photo id={o.image} alt="" sizes="(max-width: 999px) 100vw, 620px" />
              </span>
              <span className="other-body">
                <span className="other-name">{o.name}</span>
                <span className="other-desc">{o.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
