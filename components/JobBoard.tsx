'use client';

import { useMemo, useState } from 'react';
import { jobTypes, opportunities, type JobType } from '@/lib/company';
import { site } from '@/lib/content';
import { ArrowRight, CheckIcon, PinIcon, SearchIcon, vars } from './Icons';

type Query = { keyword: string; location: string; remote: boolean };
const empty: Query = { keyword: '', location: '', remote: false };

/** Job openings search: keyword + location, remote toggle, job-type filters and results. */
export default function JobBoard() {
  const [draft, setDraft] = useState<Query>(empty);
  const [query, setQuery] = useState<Query>(empty);
  const [types, setTypes] = useState<JobType[]>([...jobTypes]);

  const results = useMemo(() => {
    const words = query.keyword.toLowerCase().split(/\s+/).filter(Boolean);
    const loc = query.location.trim().toLowerCase();
    return opportunities.filter((o) => {
      const hay = `${o.title} ${o.desc} ${o.areas.join(' ')}`.toLowerCase();
      return (
        types.includes(o.type) &&
        (!query.remote || o.remote) &&
        (!loc || o.location.toLowerCase().includes(loc) || (o.remote && 'remote'.includes(loc))) &&
        words.every((w) => hay.includes(w))
      );
    });
  }, [query, types]);

  const toggle = (t: JobType) => setTypes((ts) => (ts.includes(t) ? ts.filter((x) => x !== t) : [...ts, t]));
  const reset = () => {
    setDraft(empty);
    setQuery(empty);
    setTypes([...jobTypes]);
  };
  const apply = (title: string) => {
    window.dispatchEvent(new CustomEvent('tb-apply', { detail: title }));
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="jobs">
      <form
        className="jobs-search"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(draft);
        }}
      >
        <label className="jobs-field">
          <SearchIcon size={18} />
          <input placeholder="Keywords, e.g. AWS DevOps" aria-label="Keywords" value={draft.keyword} onChange={(e) => setDraft({ ...draft, keyword: e.target.value })} />
        </label>
        <label className="jobs-field">
          <PinIcon size={18} />
          <input placeholder="Location, e.g. London" aria-label="Location" value={draft.location} onChange={(e) => setDraft({ ...draft, location: e.target.value })} />
        </label>
        <button type="submit" className="btn btn-dark">
          Search jobs
        </button>
        <label className="jobs-check jobs-remote">
          <input type="checkbox" checked={draft.remote} onChange={(e) => setDraft({ ...draft, remote: e.target.checked })} />
          <span className="jobs-box">
            <CheckIcon size={13} />
          </span>
          Remote positions only
        </label>
      </form>

      <div className="jobs-types" role="group" aria-label="Job type">
        {jobTypes.map((t) => (
          <label key={t} className="jobs-check">
            <input type="checkbox" checked={types.includes(t)} onChange={() => toggle(t)} />
            <span className="jobs-box">
              <CheckIcon size={13} />
            </span>
            {t}
          </label>
        ))}
      </div>

      <div className="jobs-status" aria-live="polite">
        <span>
          {results.length === 0 ? 'No matching openings.' : `${results.length} ${results.length === 1 ? 'opening' : 'openings'} found.`}
        </span>
        <button type="button" className="jobs-reset" onClick={reset}>
          Reset
        </button>
      </div>

      {results.length ? (
        <ul className="jobs-list">
          {results.map((o, i) => (
            <li key={o.slug} className="job" style={vars({ '--i': i })}>
              <div className="job-main">
                <span className="job-meta">
                  {o.type !== o.title && <span className="job-type">{o.type}</span>}
                  <span>
                    {o.location}
                    {o.remote ? ' · Remote' : ''}
                  </span>
                </span>
                <span className="job-title">{o.title}</span>
                <span className="job-desc">{o.desc}</span>
                <span className="chips">
                  {o.areas.map((a) => (
                    <span key={a}>{a}</span>
                  ))}
                </span>
              </div>
              <button type="button" className="btn btn-dark btn-sm" onClick={() => apply(o.title)}>
                Apply <ArrowRight size={14} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="jobs-empty">
          <span>There are no openings matching your search right now.</span>
          <span>
            Send your CV to <a href={`mailto:${site.onboardingEmail}`}>{site.onboardingEmail}</a> and we’ll keep you in mind for future roles.
          </span>
        </div>
      )}
    </div>
  );
}
