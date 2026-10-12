'use client';

import { useState } from 'react';
import { caseSectors, caseServices, cases } from '@/lib/cases';
import { posts } from '@/lib/insights';
import { FilterBar } from './CaseStudies';
import { CaseCard, PostCard } from './page/Cards';

export function CaseLibrary() {
  const [sector, setSector] = useState<(typeof caseSectors)[number]>('All');
  const [service, setService] = useState<(typeof caseServices)[number]>('All services');
  const list = cases.filter((c) => (sector === 'All' || c.sector === sector) && (service === 'All services' || c.service === service));

  return (
    <>
      <div className="lib-filters" data-reveal>
        <div className="lib-filter">
          <span className="lib-filter-label">Industry</span>
          <FilterBar options={caseSectors} value={sector} onChange={setSector} label="Filter by industry" />
        </div>
        <div className="lib-filter">
          <span className="lib-filter-label">Service</span>
          <FilterBar options={caseServices} value={service} onChange={setService} label="Filter by service" />
        </div>
      </div>
      <p className="lib-count" aria-live="polite">
        {list.length} {list.length === 1 ? 'story' : 'stories'}
      </p>
      {list.length ? (
        <div className="case-grid">
          {list.map((cs, i) => (
            <CaseCard key={`${sector}-${service}-${cs.title}`} cs={cs} i={i} />
          ))}
        </div>
      ) : (
        <div className="lib-empty">
          No stories match those filters yet.{' '}
          <button
            type="button"
            className="text-link"
            onClick={() => {
              setSector('All');
              setService('All services');
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}

const postTypes = ['All', 'Guide', 'Article', 'Download'] as const;

export function PostLibrary() {
  const [type, setType] = useState<(typeof postTypes)[number]>('All');
  const list = type === 'All' ? posts : posts.filter((p) => p.type === type);
  return (
    <>
      <div className="lib-filters" data-reveal>
        <FilterBar options={postTypes} value={type} onChange={setType} label="Filter insights" />
      </div>
      <div className="post-grid">
        {list.map((p, i) => (
          <PostCard key={`${type}-${p.slug}`} p={p} i={i} />
        ))}
      </div>
    </>
  );
}
