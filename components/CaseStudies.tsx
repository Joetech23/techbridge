'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';
import { caseSectors, cases } from '@/lib/cases';
import { ArrowRight, vars } from './Icons';
import { CaseCard } from './page/Cards';

type Filter = (typeof caseSectors)[number];

/** Animated segmented filter with a sliding highlight. */
export function FilterBar<T extends string>({ options, value, onChange, label }: { options: readonly T[]; value: T; onChange: (v: T) => void; label: string }) {
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false });
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const measure = () => {
      const el = btns.current[options.indexOf(value)];
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth, ready: true });
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [value, options]);

  return (
    <div className="filters" role="tablist" aria-label={label}>
      <span className={`filter-pill${pill.ready ? ' ready' : ''}`} style={vars({ '--x': `${pill.x}px`, '--w': `${pill.w}px` })} aria-hidden />
      {options.map((f, i) => (
        <button
          key={f}
          ref={(el) => {
            btns.current[i] = el;
          }}
          type="button"
          role="tab"
          aria-selected={f === value}
          className={`filter${f === value ? ' is-on' : ''}`}
          onClick={() => onChange(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  const [filter, setFilter] = useState<Filter>('All');
  const list = filter === 'All' ? cases : cases.filter((c) => c.sector === filter);

  return (
    <section id="cases" className="cases section-pad" data-screen-label="Case studies">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <span className="label" data-reveal>
              <span className="label-dot" /> Case studies
            </span>
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              Selected work across our sectors.
            </h2>
          </div>
          <div data-reveal style={vars({ '--d': 160 })}>
            <FilterBar options={caseSectors} value={filter} onChange={setFilter} label="Filter case studies" />
          </div>
        </div>

        <div className="case-grid">
          {list.map((cs, i) => (
            <CaseCard key={`${filter}-${cs.title}`} cs={cs} i={i} />
          ))}
        </div>

        <div className="center-link" data-reveal>
          <Link href="/case-studies" className="text-link">
            View all case studies <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
