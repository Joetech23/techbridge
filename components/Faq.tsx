'use client';

import Link from 'next/link';
import { useState } from 'react';
import { faqs as homeFaqs } from '@/lib/content';
import { ArrowDisc, Plus, vars } from './Icons';

export default function Faq({
  items = homeFaqs,
  title = 'Questions we hear a lot.',
  lede = 'Can’t see yours? A 30-minute call is free and there’s no obligation.',
  tint = false,
}: {
  items?: { q: string; a: string }[];
  title?: string;
  lede?: string;
  tint?: boolean;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
  return (
    <section className={`faq section-pad${tint ? ' tint' : ''}`} data-screen-label="FAQ">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="container faq-grid">
        <div className="faq-intro">
          <span className="label" data-reveal>
            <span className="label-dot" /> FAQ
          </span>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            {title}
          </h2>
          <p className="lede" data-reveal style={vars({ '--d': 140 })}>
            {lede}
          </p>
          <Link href="/contact" className="btn btn-outline btn-sm" data-reveal style={vars({ '--d': 200 })}>
            Ask a consultant <ArrowDisc />
          </Link>
        </div>

        <div className="faq-list">
          {items.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className={`faq-item${on ? ' is-open' : ''}`} data-reveal style={vars({ '--d': i * 60 })}>
                <button type="button" className="faq-q" aria-expanded={on} aria-controls={`faq-${i}`} onClick={() => setOpen(on ? null : i)}>
                  <span>{f.q}</span>
                  <span className="faq-icon">
                    <Plus />
                  </span>
                </button>
                <div id={`faq-${i}`} className="faq-a" role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
