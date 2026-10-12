'use client';

import { useEffect, useState } from 'react';
import { site } from '@/lib/content';
import { ChatIcon, CloseIcon } from './Icons';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="chat">
      <div className={`chat-pop${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <span className="chat-title">Hi, how can we help?</span>
        <span className="chat-desc">We usually reply within the hour, Monday to Friday.</span>
        <a href="/contact" className="chat-primary" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          Start live chat
        </a>
        <a href={site.whatsapp || '/contact'} className="chat-secondary" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
          WhatsApp us
        </a>
      </div>
      <button type="button" className={`chat-fab${open ? ' is-open' : ''}`} aria-label={open ? 'Close chat' : 'Chat'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span className="fab-icon chat-i">
          <ChatIcon />
        </span>
        <span className="fab-icon close-i">
          <CloseIcon size={18} />
        </span>
      </button>
    </div>
  );
}

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
