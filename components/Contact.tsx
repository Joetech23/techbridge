'use client';

import { useState } from 'react';
import { img, quoteServices, site } from '@/lib/content';
import { CheckDraw, MailIcon, PinIcon, vars } from './Icons';
import Photo from './Photo';

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/** Single "Contact us" form. Booking, quotes, live chat and WhatsApp were removed (demo session, 13 Oct 2026). */
function ContactForm() {
  const [f, setF] = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim().length > 1 && emailOk(f.email) && f.message.trim().length > 4;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'contact', ...f }) });
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
        <span className="done-title">Thanks, {f.name.split(' ')[0]}.</span>
        <span className="done-desc">Your message is with our team. A consultant will reply to {f.email}.</span>
        <button type="button" className="btn btn-outline btn-sm done-btn" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="form-stack" onSubmit={submit} noValidate>
      <div className="field-row">
        <input className={touched && f.name.trim().length < 2 ? 'invalid' : ''} placeholder="Full name" aria-label="Full name" value={f.name} onChange={set('name')} autoComplete="name" />
        <input className={touched && !emailOk(f.email) ? 'invalid' : ''} type="email" placeholder="Work email" aria-label="Work email" value={f.email} onChange={set('email')} autoComplete="email" />
      </div>
      <div className="field-row">
        <input placeholder="Organisation" aria-label="Organisation" value={f.company} onChange={set('company')} autoComplete="organization" />
        <select aria-label="Area of interest" value={f.service} onChange={set('service')}>
          <option value="">Area of interest (optional)</option>
          {quoteServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <textarea
        className={touched && f.message.trim().length < 5 ? 'invalid' : ''}
        placeholder="How can we help?"
        aria-label="Message"
        rows={6}
        value={f.message}
        onChange={set('message')}
      />
      <button type="submit" className="btn-submit is-ready" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Contact us'}
      </button>
      {touched && !valid && <span className="form-error">Please add your name, a valid work email and a short message.</span>}
      {status === 'error' && (
        <span className="form-error">
          Something went wrong. Please try again or email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </span>
      )}
    </form>
  );
}

export default function Contact({ heading = true }: { heading?: boolean }) {
  return (
    <section id="contact" className="contact section-pad" data-screen-label="Contact us">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="label" data-reveal>
            <span className="label-dot" /> Contact us
          </span>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            {heading ? 'Ready to cross over?' : 'Talk to a consultant.'}
          </h2>
          <p className="lede" data-reveal style={vars({ '--d': 140 })}>
            Tell us what you’re trying to achieve. A consultant will come back to you with honest advice, whether or not we’re the right fit.
          </p>

          <ul className="contact-items" data-reveal style={vars({ '--d': 200 })}>
            <li>
              <span className="ci-icon">
                <MailIcon />
              </span>
              <span>
                <span className="ci-label">Email us</span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </span>
            </li>
            <li>
              <span className="ci-icon">
                <PinIcon />
              </span>
              <span>
                <span className="ci-label">Visit us</span>
                <span>
                  {site.address.street}, {site.address.city} {site.address.postcode}
                </span>
              </span>
            </li>
          </ul>

          <div className="office-card" data-reveal style={vars({ '--d': 260 })}>
            <span className="office-photo">
              <Photo id={img.office} alt="" sizes="(max-width: 999px) 100vw, 520px" />
            </span>
            <span className="office-body">
              <span className="office-kicker">Headquarters</span>
              <span className="office-title">London, SW19</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(`${site.address.street}, ${site.address.city} ${site.address.postcode}`)}`}
                target="_blank"
                rel="noreferrer"
                className="office-link"
              >
                Get directions
              </a>
            </span>
          </div>
        </div>

        <div className="contact-card" data-reveal="right" style={vars({ '--d': 120 })}>
          <div className="contact-card-head">
            <span className="contact-card-title">Send us a message</span>
            <span className="contact-card-meta">We reply by email</span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
