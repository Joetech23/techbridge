'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import { searchIndex } from '@/lib/nav';
import { ArrowUpRight, CloseIcon, SearchIcon, vars } from './Icons';

export default function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const results = useMemo(() => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return searchIndex;
    return searchIndex.filter((r) => {
      const hay = `${r.title} ${r.desc} ${r.group}`.toLowerCase();
      return terms.every((t) => hay.includes(t));
    });
  }, [q]);

  useEffect(() => {
    if (open) {
      setQ('');
      setActive(0);
      const t = setTimeout(() => inputRef.current?.focus(), 60);
      document.body.style.overflow = 'hidden';
      return () => {
        clearTimeout(t);
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  useEffect(() => setActive(0), [q]);

  const go = (href: string) => {
    onClose();
    router.push(href);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    }
    if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      go(results[active].href);
    }
  };

  let lastGroup = '';
  return (
    <div className={`search${open ? ' is-open' : ''}`} aria-hidden={!open} onKeyDown={onKey}>
      <div className="search-backdrop" onClick={onClose} />
      <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Search the site">
        <div className="search-bar">
          <SearchIcon size={18} />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search services, industries, pages…"
            aria-label="Search"
            tabIndex={open ? 0 : -1}
          />
          <button type="button" className="search-close" onClick={onClose} aria-label="Close search" tabIndex={open ? 0 : -1}>
            <CloseIcon size={14} />
          </button>
        </div>
        <div className="search-results">
          {results.length === 0 && (
            <div className="search-empty">
              No matches for “{q}”. <a href="/contact" onClick={onClose}>Ask a consultant instead →</a>
            </div>
          )}
          {results.map((r, i) => {
            const head = r.group !== lastGroup ? r.group : null;
            lastGroup = r.group;
            return (
              <div key={r.href + r.title}>
                {head && <div className="search-group">{head}</div>}
                <a
                  href={r.href}
                  className={`search-item${i === active ? ' is-active' : ''}`}
                  style={vars({ '--i': Math.min(i, 10) })}
                  onMouseEnter={() => setActive(i)}
                  onClick={(e) => {
                    e.preventDefault();
                    go(r.href);
                  }}
                  tabIndex={open ? 0 : -1}
                >
                  <span>
                    <span className="search-title">{r.title}</span>
                    <span className="search-desc">{r.desc}</span>
                  </span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            );
          })}
        </div>
        <div className="search-foot">
          <span><kbd>↑</kbd><kbd>↓</kbd> to move</span>
          <span><kbd>Enter</kbd> to open</span>
          <span><kbd>Esc</kbd> to close</span>
        </div>
      </div>
    </div>
  );
}
