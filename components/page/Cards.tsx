import Link from 'next/link';
import type { CaseItem } from '@/lib/cases';
import type { Post } from '@/lib/insights';
import { postHref } from '@/lib/insights';
import type { Service } from '@/lib/services';
import { serviceHref } from '@/lib/services';
import { ArrowRight, ArrowUpRight, CheckIcon, vars } from '../Icons';
import Photo from '../Photo';

export function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <Link href={serviceHref(s.slug)} className="svc-card" data-reveal style={vars({ '--d': i * 90 })}>
      <span className="svc-card-photo">
        <Photo id={s.image} alt="" sizes="(max-width: 640px) 100vw, 400px" />
        <span className="svc-card-cat">{s.cat}</span>
      </span>
      <span className="svc-card-body">
        <span className="svc-card-name">{s.name}</span>
        <span className="svc-card-desc">{s.desc}</span>
        <span className="text-link">
          Explore service <ArrowRight size={12} />
        </span>
      </span>
    </Link>
  );
}

export function CaseCard({ cs, i = 0 }: { cs: CaseItem; i?: number }) {
  return (
    <Link href="/contact" className="case-card" style={vars({ '--i': i })}>
      <span className="case-photo">
        <Photo id={cs.image} alt="" sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 320px" />
        <span className="case-sector">{cs.sector}</span>
        <span className="case-arrow">
          <ArrowUpRight size={13} />
        </span>
      </span>
      <span className="case-body">
        <span className="case-service">{cs.serviceLabel}</span>
        <span className="case-title">{cs.title}</span>
        <span className="case-note">Sample story. Replace with the client’s challenge and results.</span>
      </span>
    </Link>
  );
}

export function PostCard({ p, i = 0 }: { p: Post; i?: number }) {
  return (
    <Link href={postHref(p.slug)} className="post-card" style={vars({ '--i': i })}>
      <span className="post-card-photo">
        <Photo id={p.image} alt="" sizes="(max-width: 640px) 100vw, 400px" />
      </span>
      <span className="post-meta">
        <span className="post-type">{p.type}</span>
        <span>{p.meta}</span>
      </span>
      <span className="post-card-title">{p.title}</span>
      <span className="post-card-excerpt">{p.excerpt}</span>
    </Link>
  );
}

/** Numbered feature cards ("What's included"). */
export function FeatureGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="feature-grid">
      {items.map((it, i) => (
        <div key={it.title} className="feature" data-reveal style={vars({ '--d': (i % 3) * 90 })}>
          <span className="feature-no">{String(i + 1).padStart(2, '0')}</span>
          <span className="feature-title">{it.title}</span>
          <span className="feature-desc">{it.desc}</span>
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="checklist">
      {items.map((t, i) => (
        <li key={t} data-reveal style={vars({ '--d': i * 70 })}>
          <span className="check-dot">
            <CheckIcon size={14} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Section heading block used across inner pages. */
export function Head({ label, title, side, dark }: { label: string; title: string; side?: React.ReactNode; dark?: boolean }) {
  return (
    <div className="section-head">
      <div className="section-head-main">
        <span className={`label${dark ? ' on-dark' : ''}`} data-reveal>
          <span className="label-dot" /> {label}
        </span>
        <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
          {title}
        </h2>
      </div>
      {side && (
        <div className="section-head-side" data-reveal style={vars({ '--d': 160 })}>
          {side}
        </div>
      )}
    </div>
  );
}
