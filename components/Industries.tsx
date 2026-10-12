'use client';

import Link from 'next/link';
import { useState } from 'react';
import { industries, industryHref } from '@/lib/industries';
import { ArrowUpRight, vars } from './Icons';
import Photo from './Photo';

export default function Industries() {
  const [active, setActive] = useState(0);
  return (
    <section id="industries" className="industries section-pad" data-screen-label="Industries">
      <div className="container">
        <div className="section-head">
          <div className="section-head-main">
            <span className="label" data-reveal>
              <span className="label-dot" /> Industries
            </span>
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              Built for sectors where getting it wrong isn’t an option.
            </h2>
          </div>
          <p className="section-head-side" data-reveal style={vars({ '--d': 160 })}>
            Regulated, high-stakes and growing organisations trust us with the systems they can’t afford to lose.
          </p>
        </div>

        <div className="ind-row">
          {industries.map((ind, i) => (
            <Link
              key={ind.slug}
              href={industryHref(ind.slug)}
              className={`ind-card${i === active ? ' is-on' : ''}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              data-reveal
              style={vars({ '--d': i * 120 })}
            >
              <span className="ind-photo">
                <Photo id={ind.image} alt="" sizes="(max-width: 999px) 100vw, 640px" />
              </span>
              <span className="ind-shade" aria-hidden />
              <span className="ind-top">
                <span className="ind-no">{String(i + 1).padStart(2, '0')}</span>
                <span className="ind-arrow">
                  <ArrowUpRight size={13} />
                </span>
              </span>
              <span className="ind-body">
                <span className="ind-name">{ind.name}</span>
                <span className="ind-more">
                  <span className="ind-more-inner">
                    <span className="ind-desc">{ind.desc}</span>
                    <span className="ind-tags">
                      {ind.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </span>
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
