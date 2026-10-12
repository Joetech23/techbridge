'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { img, steps } from '@/lib/content';
import { ArrowDisc, vars } from './Icons';
import { prefersReducedMotion } from './Motion';
import Photo from './Photo';

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  // The timeline fills as the steps pass the middle of the viewport.
  useEffect(() => {
    if (prefersReducedMotion()) {
      setP(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.6;
      setP(Math.max(0, Math.min(1, (mid - r.top) / r.height)));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="process section-pad" data-screen-label="How we work">
      <div className="container process-grid">
        <div className="process-intro">
          <span className="label" data-reveal>
            <span className="label-dot" /> How we work
          </span>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            Four spans. No gaps.
          </h2>
          <p className="lede" data-reveal style={vars({ '--d': 140 })}>
            Every engagement follows the same path, so you always know what’s happening, what it costs and what you get at the end of each stage.
          </p>
          <div className="process-photo reveal-img" data-reveal="img" style={vars({ '--d': 200 })}>
            <Photo id={img.process} alt="Consultants in a planning session" sizes="(max-width: 999px) 100vw, 520px" />
          </div>
          <Link href="/contact" className="btn btn-primary" data-reveal style={vars({ '--d': 260 })}>
            Start with an assessment <ArrowDisc />
          </Link>
        </div>

        <div ref={ref} className="timeline" style={vars({ '--p': p })}>
          <span className="timeline-line" aria-hidden>
            <span />
          </span>
          <ol>
          {steps.map((st, i) => {
            const on = p >= (i + 0.35) / steps.length;
            return (
              <li key={st.no} className={`tl-step${on ? ' is-on' : ''}`} data-reveal style={vars({ '--d': i * 90 })}>
                <span className="tl-dot">{st.no}</span>
                <div className="tl-body">
                  <span className="tl-title">{st.title}</span>
                  <span className="tl-desc">{st.desc}</span>
                  <span className="tl-out">
                    <span>You get</span> {st.out}
                  </span>
                </div>
              </li>
            );
          })}
          </ol>
        </div>
      </div>
    </section>
  );
}
