import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Faq from '@/components/Faq';
import HostingPlans from '@/components/HostingPlans';
import { ArrowDisc, vars } from '@/components/Icons';
import { CheckList, FeatureGrid, Head, ServiceCard } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import Process from '@/components/Process';
import { cloudStrategyDetail, serviceBySlug, services, sevenRs } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = serviceBySlug((await params).slug);
  if (!s) return {};
  return {
    title: s.seoTitle,
    description: s.metaDesc,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.seoTitle, description: s.metaDesc, url: `/services/${s.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const s = serviceBySlug((await params).slug);
  if (!s) notFound();
  const related = s.related.map((r) => serviceBySlug(r)!).filter(Boolean);
  const quoteHref = `/contact?tab=quote&service=${encodeURIComponent(s.name)}`;
  const isAws = s.slug === 'aws-solutions-architect';

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Services', href: '/#services' }, { label: s.name }]}
        label={s.flagship ? `${s.cat} · Flagship service` : s.cat}
        title={s.name}
        lede={s.lede}
        image={s.image}
        actions={
          <>
            <Link href="/contact" className="btn btn-primary">
              Book a free consultation <ArrowDisc />
            </Link>
            <Link href={quoteHref} className="btn btn-outline">
              Get a quote
            </Link>
          </>
        }
      />

      <section className="container section-pad overview">
        <div className="overview-grid">
          <div>
            <span className="label" data-reveal>
              <span className="label-dot" /> Overview
            </span>
            <p className="overview-statement" data-reveal style={vars({ '--d': 80 })}>
              {s.overview[0]}
            </p>
            {s.overview.slice(1).map((p) => (
              <p key={p} className="lede" data-reveal style={vars({ '--d': 140 })}>
                {p}
              </p>
            ))}
          </div>
          <div className="outcomes" data-reveal="right" style={vars({ '--d': 120 })}>
            <span className="outcomes-title">What you can expect</span>
            <CheckList items={s.outcomes} />
          </div>
        </div>
      </section>

      {s.slug === 'hosting-packages' ? (
        <HostingPlans />
      ) : (
        <section className="tint-band section-pad">
          <div className="container">
            <Head label="What’s included" title={isAws ? 'Everything you need to build in the cloud with confidence.' : 'Practical help at every stage.'} />
            <FeatureGrid items={s.included} />
          </div>
        </section>
      )}

      {isAws && (
        <>
          <section className="container section-pad">
            <Head label="Cloud strategy services" title="From readiness to review, every step covered." side={<p>Five structured services that take you from first questions to a well-architected platform.</p>} />
            <div className="strategy-list">
              {cloudStrategyDetail.map((c, i) => (
                <div key={c.title} className="strategy-row" data-reveal style={vars({ '--d': i * 70 })}>
                  <span className="strategy-no">{String(i + 1).padStart(2, '0')}</span>
                  <span className="strategy-title">{c.title}</span>
                  <span className="strategy-desc">{c.desc}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="rs-band section-pad">
            <div className="container">
              <Head dark label="Migration strategy" title="The 7 Rs: the right path for every workload." side={<Link href="/insights/7-rs-of-cloud-migration" className="btn btn-light btn-sm">Read the guide <ArrowDisc /></Link>} />
              <div className="rs-grid">
                {sevenRs.map(([name, desc], i) => (
                  <div key={name} className="rs-card" data-reveal style={vars({ '--d': i * 60 })}>
                    <span className="rs-no">R{i + 1}</span>
                    <span className="rs-name">{name}</span>
                    <span className="rs-desc">{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Process />

      <Faq items={s.faqs} title={`${s.name}: common questions.`} tint />

      <section className="container section-pad">
        <Head label="Related services" title="Often paired with this service." />
        <div className="card-grid-3">
          {related.map((r, i) => (
            <ServiceCard key={r.slug} s={r} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}
