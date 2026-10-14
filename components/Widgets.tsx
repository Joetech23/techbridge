'use client';

import { useEffect, useState } from 'react';

const KEY = 'tb-cookie-consent';

/** UK GDPR cookie consent (proposal §05). Non-essential cookies stay off until accepted. */
export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(KEY);
    } catch {
      /* storage blocked */
    }
    if (stored) return;
    const t = setTimeout(() => setShow(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const choose = (v: 'all' | 'essential') => {
    try {
      localStorage.setItem(KEY, v);
    } catch {
      /* storage blocked */
    }
    setShow(false);
  };

  return (
    <div className={`cookie${show ? ' is-on' : ''}`} role="dialog" aria-label="Cookie preferences" aria-hidden={!show}>
      <span className="cookie-text">
        We use essential cookies to run this site. With your consent, we’d also use analytics cookies to improve it. <a href="/cookies">Cookie policy</a>
      </span>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn ghost" onClick={() => choose('essential')} tabIndex={show ? 0 : -1}>
          Essential only
        </button>
        <button type="button" className="cookie-btn" onClick={() => choose('all')} tabIndex={show ? 0 : -1}>
          Accept all
        </button>
      </div>
    </div>
  );
}
