'use client';

import { useEffect, useState } from 'react';
import { careerTracks, opportunities } from '@/lib/company';
import { site } from '@/lib/content';
import { CheckDraw } from './Icons';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const areas = ['Cloud', 'Cyber security', 'Data & AI', 'Managed IT', 'Product & project delivery', 'Web & digital', 'Digital consulting'];
const linkOk = (v: string) => /^(https?:\/\/)?[\w-]+(\.[\w-]+)+\S*$/.test(v.trim());
const CV_TYPES = '.pdf,.doc,.docx';
const CV_MAX = 4 * 1024 * 1024; // 4 MB

type Cv = { name: string; type: string; data: string };
const readCv = (file: File) =>
  new Promise<Cv>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve({ name: file.name, type: file.type || 'application/octet-stream', data: String(r.result).split(',')[1] ?? '' });
    r.onerror = () => reject(r.error);
    r.readAsDataURL(file);
  });

export default function CareersForm() {
  const [f, setF] = useState({ name: '', email: '', opportunity: '', area: '', link: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const [cv, setCv] = useState<Cv | null>(null);
  const [cvError, setCvError] = useState('');

  const pickCv = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setCvError('');
    if (!file) return setCv(null);
    if (!/\.(pdf|docx?)$/i.test(file.name)) {
      e.target.value = '';
      setCv(null);
      return setCvError('Please upload your CV as a PDF or Word document.');
    }
    if (file.size > CV_MAX) {
      e.target.value = '';
      setCv(null);
      return setCvError('Please keep your CV under 4 MB.');
    }
    setCv(await readCv(file));
  };
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim().length > 1 && emailOk(f.email) && f.opportunity && (!!cv || linkOk(f.link)) && f.message.trim().length > 10;

  // 'Apply' on a job listing preselects the opportunity.
  useEffect(() => {
    const on = (e: Event) => setF((p) => ({ ...p, opportunity: (e as CustomEvent<string>).detail }));
    window.addEventListener('tb-apply', on);
    return () => window.removeEventListener('tb-apply', on);
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'careers', ...f, cv }) });
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
          <optgroup label="Career and training tracks">
            {careerTracks.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </optgroup>
          <optgroup label="Practice areas">
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </optgroup>
        </select>
      </div>
      <label className={`cv-upload${cv ? ' has-file' : ''}${touched && !cv && !linkOk(f.link) ? ' invalid' : ''}`}>
        <input type="file" accept={CV_TYPES} onChange={pickCv} aria-describedby="cv-hint" />
        <span className="cv-upload-icon" aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 16V4M12 4L7 9M12 4L17 9M4 16V19C4 19.6 4.4 20 5 20H19C19.6 20 20 19.6 20 19V16" />
          </svg>
        </span>
        <span className="cv-upload-text">
          <span className="cv-upload-title">{cv ? cv.name : 'Upload your CV'}</span>
          <span id="cv-hint" className="cv-upload-hint">
            {cv ? 'Click to choose a different file' : 'PDF or Word, up to 4 MB. Sent straight to our onboarding team.'}
          </span>
        </span>
      </label>
      {cvError && <span className="form-error">{cvError}</span>}
      <input
        className={touched && !cv && !linkOk(f.link) ? 'invalid' : ''}
        type="url"
        placeholder={cv ? 'LinkedIn profile (optional)' : 'Or paste a link to your CV or LinkedIn profile'}
        aria-label="CV or LinkedIn link"
        value={f.link}
        onChange={set('link')}
      />
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
      {touched && !valid && <span className="form-error">Please add your name, email, the opportunity, your CV (upload or link) and a few words about yourself.</span>}
      {status === 'error' && <span className="form-error">Something went wrong. Please try again or email your CV to {site.onboardingEmail}.</span>}
    </form>
  );
}
