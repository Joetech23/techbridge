'use client';

import { useState } from 'react';
import { CheckDraw } from './Icons';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/** Newsletter sign-up. `wide` renders the full-width band used on inner pages. */
export default function Briefing({ wide = false, bare = false }: { wide?: boolean; bare?: boolean }) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'error' | 'sending' | 'done'>('idle');

  const subscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailOk(email)) {
      setState('error');
      return;
    }
    setState('sending');
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      });
    } catch {
      /* non-blocking: still confirm to the visitor */
    }
    setState('done');
  };

  return (
    <div className={`briefing${wide ? ' wide' : ''}${bare ? ' bare' : ''}`} data-reveal={bare ? undefined : ''}>
      <div className="briefing-text">
        <span className="briefing-title">The TechBridge briefing</span>
        <span className="briefing-desc">One practical email a month on cloud, security and data. No sales pitches.</span>
      </div>
      {state === 'done' ? (
        <span className="briefing-done">
          <span className="done-icon">
            <CheckDraw />
          </span>
          You’re on the list. Thanks.
        </span>
      ) : (
        <form className={`briefing-form${state === 'error' ? ' has-error' : ''}`} onSubmit={subscribe} noValidate>
          <input
            type="email"
            placeholder="Work email"
            aria-label="Work email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (state === 'error') setState('idle');
            }}
          />
          <button type="submit" disabled={state === 'sending'}>
            {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
          </button>
          {state === 'error' && <span className="form-error">Please enter a valid work email.</span>}
        </form>
      )}
    </div>
  );
}
