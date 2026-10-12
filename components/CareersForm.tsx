'use client';

import { useState } from 'react';
import { opportunities } from '@/lib/company';
import { site } from '@/lib/content';
import { CheckDraw } from './Icons';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const areas = ['Cloud', 'Cyber security', 'Data & AI', 'Managed IT', 'Web & digital', 'Digital consulting'];

export default function CareersForm() {
  const [f, setF] = useState({ name: '', email: '', opportunity: '', area: '', link: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim().length > 1 && emailOk(f.email) && f.opportunity && f.message.trim().length > 10;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'careers', ...f }) });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'done') {
    return (
      <div className="done">
        <span className="done-badge">
          <CheckDraw />
        </span>
        <span className="done-title">Application received.</span>
        <span className="done-desc">Thanks, {f.name.split(' ')[0]}. We read every application and will reply to {f.email}.</span>
      </div>
    );
  }

  return (
    <form className="form-stack" onSubmit={submit} noValidate>
      <div className="field-row">
        <input className={touched && f.name.trim().length < 2 ? 'invalid' : ''} placeholder="Full name" aria-label="Full name" value={f.name} onChange={set('name')} autoComplete="name" />
        <input className={touched && !emailOk(f.email) ? 'invalid' : ''} type="email" placeholder="Email" aria-label="Email" value={f.email} onChange={set('email')} autoComplete="email" />
      </div>
      <div className="field-row">
        <select className={touched && !f.opportunity ? 'invalid' : ''} aria-label="Opportunity" value={f.opportunity} onChange={set('opportunity')}>
          <option value="">Opportunity…</option>
          {opportunities.map((o) => (
            <option key={o.title}>{o.title}</option>
          ))}
        </select>
        <select aria-label="Area of interest" value={f.area} onChange={set('area')}>
          <option value="">Area of interest…</option>
          {areas.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>
      <input type="url" placeholder="LinkedIn profile or link to your CV (optional)" aria-label="LinkedIn or CV link" value={f.link} onChange={set('link')} />
      <textarea
        className={touched && f.message.trim().length < 11 ? 'invalid' : ''}
        placeholder="Tell us a little about yourself and what you’d like to work on"
        aria-label="About you"
        rows={5}
        value={f.message}
        onChange={set('message')}
      />
      <button type="submit" className="btn-submit is-ready" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Submit application'}
      </button>
      {touched && !valid && <span className="form-error">Please add your name, email, the opportunity and a few words about yourself.</span>}
      {status === 'error' && <span className="form-error">Something went wrong. Please try again or email {site.email}.</span>}
    </form>
  );
}
