import Link from 'next/link';
import { Fragment } from 'react';
import { site } from '@/lib/content';
import { Motif, vars } from '../Icons';
import Photo from '../Photo';

type Crumb = { label: string; href?: string };

/** Inner-page hero: dark band (optionally over a photo) with breadcrumb, uppercase title, lede and the squares motif. */
export default function PageHero({
  crumbs,
  label,
  title,
  lede,
  actions,
  image,
  imageAlt = '',
}: {
  crumbs: Crumb[];
  label?: string;
  title: string;
  lede?: string;
  actions?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  const all: Crumb[] = [{ label: 'Home', href: '/' }, ...crumbs];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${site.url}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  };

  return (
    <section className={`page-hero${image ? ' has-image' : ''}`}>
      {image && (
        <div className="page-hero-bg">
          <Photo id={image} alt={imageAlt} sizes="100vw" priority wide />
        </div>
      )}
      <div className="page-hero-shade" aria-hidden />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="gutter page-hero-inner">
        <nav className="crumbs hero-in" aria-label="Breadcrumb">
          {all.map((c, i) => (
            <Fragment key={c.label}>
              {i > 0 && (
                <span className="crumb-sep" aria-hidden>
                  /
                </span>
              )}
              {c.href && i < all.length - 1 ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
            </Fragment>
          ))}
        </nav>
        {label && (
          <span className="label on-dark hero-in" style={vars({ '--d': 80 })}>
            <span className="label-dot" /> {label}
          </span>
        )}
        <h1 className="page-title">
          {title.split(' ').map((w, i) => (
            <Fragment key={i}>
              <span className="hw">
                <span style={vars({ '--i': i })}>{w}</span>
              </span>{' '}
            </Fragment>
          ))}
        </h1>
        {lede && (
          <p className="page-hero-lede hero-in" style={vars({ '--d': 420 })}>
            {lede}
          </p>
        )}
        {actions && (
          <div className="page-hero-actions hero-in" style={vars({ '--d': 520 })}>
            {actions}
          </div>
        )}
      </div>
      <Motif className="page-hero-pixels" />
    </section>
  );
}
