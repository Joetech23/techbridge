import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Briefing from '@/components/Briefing';
import DevOpsCheck from '@/components/DevOpsCheck';
import { ArrowDisc, ArrowRight, vars } from '@/components/Icons';
import { Head, PostCard } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import { site, unsplash } from '@/lib/content';
import { postBySlug, postHref, posts } from '@/lib/insights';
import { serviceBySlug, serviceHref } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = postBySlug((await params).slug);
  if (!p) return {};
  return {
    title: p.seoTitle,
    description: p.excerpt,
    alternates: { canonical: postHref(p.slug) },
    openGraph: { type: 'article', title: p.seoTitle, description: p.excerpt, url: postHref(p.slug), images: [unsplash(p.image, 1200)] },
  };
}

export default async function PostPage({ params }: Props) {
  const p = postBySlug((await params).slug);
  if (!p) notFound();
  const svc = serviceBySlug(p.related)!;
  const more = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    image: unsplash(p.image, 1200),
    publisher: { '@type': 'Organization', name: site.legalName, logo: { '@type': 'ImageObject', url: `${site.url}/assets/tb-logo.png` } },
    mainEntityOfPage: `${site.url}${postHref(p.slug)}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <PageHero crumbs={[{ label: 'Insights', href: '/insights' }, { label: p.type }]} label={`${p.type} · ${p.meta}`} title={p.title} lede={p.excerpt} image={p.image} />

        <div className="container post-layout">
          <div className="prose">
            {p.body.map((b, i) => (
              <div key={i} data-reveal>
                {b.h && <h2>{b.h}</h2>}
                {b.p?.map((t) => <p key={t}>{t}</p>)}
                {b.list && (
                  <dl className="prose-list">
                    {b.list.map((l) => (
                      <div key={l.t}>
                        <dt>{l.t}</dt>
                        <dd>{l.d}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            ))}
            {p.interactive === 'devops' && <DevOpsCheck />}
          </div>

          <aside className="post-aside">
            <div className="aside-card" data-reveal="right">
              <span className="aside-kicker">Related service</span>
              <span className="aside-title">{svc.name}</span>
              <span className="aside-desc">{svc.desc}</span>
              <Link href={serviceHref(svc.slug)} className="text-link">
                Explore the service <ArrowRight size={12} />
              </Link>
            </div>
            <div className="aside-card dark" data-reveal="right" style={vars({ '--d': 120 })}>
              <span className="aside-title">Want a second opinion?</span>
              <span className="aside-desc">Tell us about your project and a consultant will be in touch.</span>
              <Link href="/contact" className="btn btn-light btn-sm">
                Contact us <ArrowDisc />
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="container section-pad">
        <Briefing wide />
      </section>

      <section className="container section-pad no-top">
        <Head label="Keep reading" title="More from Insights." side={<Link href="/insights" className="text-link">All insights <ArrowRight size={12} /></Link>} />
        <div className="post-grid">
          {more.map((m, i) => (
            <PostCard key={m.slug} p={m} i={i} />
          ))}
        </div>
      </section>
    </>
  );
}
