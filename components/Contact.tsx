'use client';

import { useEffect, useState } from 'react';
import { img, quoteServices, site } from '@/lib/content';
import { ClockIcon, CheckDraw, MailIcon, PinIcon, vars } from './Icons';
import Photo from './Photo';

const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const DW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const TIMES = ['09:30', '11:00', '14:00', '15:30'];
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/** Next five weekdays, starting tomorrow. */
function nextWeekdays() {
  const out: Date[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (out.length < 5) {
    if (d.getDay() % 6 !== 0) out.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

async function send(payload: Record<string, unknown>) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error('Request failed');
}

function Booking() {
  const [days, setDays] = useState<Date[]>([]);
  const [day, setDay] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  // Dates are computed on the client to avoid server/client clock mismatches.
  useEffect(() => setDays(nextWeekdays()), []);

  const picked = day !== null && time !== null;
  const ready = picked && name.trim().length > 1 && emailOk(email);
  const summary = picked && days[day!] ? `${DW[days[day!].getDay()]} ${days[day!].getDate()} ${MON[days[day!].getMonth()]} at ${TIMES[time!]}` : '';

  const confirm = async () => {
    if (!ready) return;
    setStatus('sending');
    try {
      await send({ type: 'booking', name, email, slot: summary, date: days[day!].toISOString().slice(0, 10), time: TIMES[time!] });
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
        <span className="done-title">You’re booked in.</span>
        <span className="done-desc">{summary}. A calendar invite is on its way to your inbox.</span>
        <button type="button" className="btn btn-outline btn-sm done-btn" onClick={() => setStatus('idle')}>
          Change time
        </button>
      </div>
    );
  }

  const label = !picked ? 'Choose a day and time' : !ready ? 'Add your name and work email' : status === 'sending' ? 'Booking…' : 'Confirm booking';

  return (
    <div className="form-stack">
      <div className="field-group">
        <span className="field-label">1. Pick a day</span>
        <div className="days">
          {(days.length ? days : ([null, null, null, null, null] as (Date | null)[])).map((d: Date | null, i: number) => (
            <button key={i} type="button" className={`day${day === i ? ' is-on' : ''}`} onClick={() => d && setDay(i)} disabled={!d} aria-pressed={day === i}>
              <span className="day-dow">{d ? DOW[d.getDay()] : '···'}</span>
              <span className="day-date">{d ? d.getDate() : '–'}</span>
              <span className="day-mon">{d ? MON[d.getMonth()] : ''}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="field-group">
        <span className="field-label">2. Pick a time (UK)</span>
        <div className="times">
          {TIMES.map((t, i) => (
            <button key={t} type="button" className={`time${time === i ? ' is-on' : ''}`} onClick={() => setTime(i)} aria-pressed={time === i}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className={`field-row reveal-row${picked ? ' is-open' : ''}`}>
        <input placeholder="Full name" aria-label="Full name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        <input type="email" placeholder="Work email" aria-label="Work email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
      </div>
      <button type="button" className={`btn-submit${ready ? ' is-ready' : ''}`} onClick={confirm} disabled={!ready || status === 'sending'}>
        {label}
      </button>
      {status === 'error' && <span className="form-error">Something went wrong. Please try again or email {site.email}.</span>}
    </div>
  );
}

function Quote({ initialService = '' }: { initialService?: string }) {
  const [f, setF] = useState({ name: '', email: '', company: '', service: initialService, message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim().length > 1 && emailOk(f.email) && f.service;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus('sending');
    try {
      await send({ type: 'quote', ...f });
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
        <span className="done-title">Quote request received.</span>
        <span className="done-desc">Thanks, {f.name.split(' ')[0]}. A consultant will be in touch with next steps for {f.service}.</span>
        <button type="button" className="btn btn-outline btn-sm done-btn" onClick={() => setStatus('idle')}>
          Send another
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
        <select className={touched && !f.service ? 'invalid' : ''} aria-label="Service" value={f.service} onChange={set('service')}>
          <option value="">Service you need…</option>
          {quoteServices.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <textarea placeholder="Tell us about the project: scope, timing, constraints" aria-label="Project details" rows={4} value={f.message} onChange={set('message')} />
      <button type="submit" className="btn-submit is-ready" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request a quote'}
      </button>
      {touched && !valid && <span className="form-error">Please add your name, a valid work email and the service you need.</span>}
      {status === 'error' && <span className="form-error">Something went wrong. Please try again or email {site.email}.</span>}
    </form>
  );
}

function Message() {
  const [f, setF] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');
  const [touched, setTouched] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value });
  const valid = f.name.trim().length > 1 && emailOk(f.email) && f.message.trim().length > 4;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus('sending');
    try {
      await send({ type: 'contact', ...f });
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
        <span className="done-title">Message sent.</span>
        <span className="done-desc">Thanks, {f.name.split(' ')[0]}. We’ll get back to you at {f.email}.</span>
        <button type="button" className="btn btn-outline btn-sm done-btn" onClick={() => setStatus('idle')}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form-stack" onSubmit={submit} noValidate>
      <div className="field-row">
        <input className={touched && f.name.trim().length < 2 ? 'invalid' : ''} placeholder="Full name" aria-label="Full name" value={f.name} onChange={set('name')} autoComplete="name" />
        <input className={touched && !emailOk(f.email) ? 'invalid' : ''} type="email" placeholder="Email" aria-label="Email" value={f.email} onChange={set('email')} autoComplete="email" />
      </div>
      <input placeholder="Subject" aria-label="Subject" value={f.subject} onChange={set('subject')} />
      <textarea className={touched && f.message.trim().length < 5 ? 'invalid' : ''} placeholder="How can we help?" aria-label="Message" rows={5} value={f.message} onChange={set('message')} />
      <button type="submit" className="btn-submit is-ready" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {touched && !valid && <span className="form-error">Please add your name, a valid email and a short message.</span>}
      {status === 'error' && <span className="form-error">Something went wrong. Please try again or email {site.email}.</span>}
    </form>
  );
}
type Tab = 'book' | 'quote' | 'message';
const TABS: { id: Tab; label: string; title: string; meta: string }[] = [
  { id: 'book', label: 'Book a call', title: 'Pick a time that suits you', meta: '30 min · Video call' },
  { id: 'quote', label: 'Get a quote', title: 'Tell us what you need', meta: 'Any service · No obligation' },
  { id: 'message', label: 'Message', title: 'Send us a message', meta: 'General enquiries' },
];

export default function Contact({ heading = true }: { heading?: boolean }) {
  const [tab, setTab] = useState<Tab>('book');
  const [service, setService] = useState('');

  // Deep links: /contact?tab=quote&service=Cybersecurity
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const t = p.get('tab') as Tab | null;
    if (t && TABS.some((x) => x.id === t)) setTab(t);
    const s = p.get('service');
    if (s && quoteServices.includes(s)) setService(s);
  }, []);
  const cur = TABS.find((x) => x.id === tab)!;
  return (
    <section id="contact" className="contact section-pad" data-screen-label="Book a consultation">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="label" data-reveal>
            <span className="label-dot" /> Contact us
          </span>
          {heading ? (
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              Ready to <span className="serif blue">cross over?</span>
            </h2>
          ) : (
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              Talk to a consultant.
            </h2>
          )}
          <p className="lede" data-reveal style={vars({ '--d': 140 })}>
            Book a free 30-minute call with a consultant. You’ll get a calendar invite straight away, and honest advice whether or not we’re the right fit.
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
            <li>
              <span className="ci-icon">
                <ClockIcon />
              </span>
              <span>
                <span className="ci-label">Live chat</span>
                <span>Usually within the hour, Monday to Friday</span>
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
              <a href={`https://maps.google.com/?q=${encodeURIComponent(`${site.address.street}, ${site.address.city} ${site.address.postcode}`)}`} target="_blank" rel="noreferrer" className="office-link">
                Get directions
              </a>
            </span>
          </div>
        </div>

        <div className="contact-card" data-reveal="right" style={vars({ '--d': 120 })}>
          <div className="seg-wrap">
            <div className="seg seg-3" role="tablist" style={vars({ '--idx': TABS.findIndex((x) => x.id === tab) })}>
              <span className="seg-pill" aria-hidden />
              {TABS.map((t) => (
                <button key={t.id} type="button" role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="contact-card-head">
            <span className="contact-card-title">{cur.title}</span>
            <span className="contact-card-meta">{cur.meta}</span>
          </div>
          <div key={tab + service} className="tab-pane">
            {tab === 'book' ? <Booking /> : tab === 'quote' ? <Quote initialService={service} /> : <Message />}
          </div>
        </div>
      </div>
    </section>
  );
}