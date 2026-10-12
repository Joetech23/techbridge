'use client';

import Link from 'next/link';
import { useLayoutEffect, useRef, useState } from 'react';
import { serviceCats } from '@/lib/nav';
import { serviceHref } from '@/lib/services';
import { ArrowRight, ServiceIcon, vars } from './Icons';

/** Dark services section with a sliding tab highlight and service cards per category. */
export default function ServiceTabs() {
  const [tab, setTab] = useState(0);
  const [pill, setPill] = useState({ x: 0, w: 0, ready: false });
  const btns = useRef<(HTMLButtonElement | null)[]>([]);

  useLayoutEffect(() => {
    const measure = () => {
      const el = btns.current[tab];
      if (el) setPill({ x: el.offsetLeft, w: el.offsetWidth, ready: true });
    };
    measure();
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);
    return () => window.removeEventListener('resize', measure);
  }, [tab]);

  const cat = serviceCats[tab];

  return (
    <section id="services" className="svc-dark section-pad" data-screen-label="Services">
      <div className="gutter">
        <div className="center-head on-dark">
          <h2 className="h2" data-reveal>
            Services that move you forward.
          </h2>
          <p data-reveal style={vars({ '--d': 100 })}>
            Every service you need to modernise, under one roof. Strategy and architecture, security, data and the day-to-day support that keeps it all running.
          </p>
        </div>

        <div className="tabs-scroll" data-reveal style={vars({ '--d': 160 })}>
          <div className="tabs" role="tablist" aria-label="Service categories">
            <span className={`tabs-pill${pill.ready ? ' ready' : ''}`} style={vars({ '--x': `${pill.x}px`, '--w': `${pill.w}px` })} aria-hidden />
            {serviceCats.map((c, i) => (
              <button
                key={c.label}
                ref={(el) => {
                  btns.current[i] = el;
                }}
                type="button"
                role="tab"
                aria-selected={i === tab}
                className={`tab${i === tab ? ' is-on' : ''}`}
                onClick={() => setTab(i)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div key={tab} className="svc-cards" role="tabpanel">
          {cat.items.map((s, i) => (
            <Link key={s.slug} href={serviceHref(s.slug)} className="scard" style={vars({ '--i': i })}>
              <span className="scard-icon">
                <ServiceIcon slug={s.slug} />
              </span>
              <span className="scard-body">
                <span className="scard-title">{s.name}</span>
                <span className="scard-desc">{s.desc}</span>
              </span>
              <span className="scard-arrow">
                <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
