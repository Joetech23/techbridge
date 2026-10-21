import { NextResponse } from 'next/server';
import { site } from '@/lib/content';

// Receives contact-form messages, careers applications and newsletter sign-ups.
// Routing (demo session, 13 Oct 2026): careers applications go to the onboarding inbox,
// everything else to the general inbox.
//
// Sending: set RESEND_API_KEY and MAIL_FROM (a verified sender on techbridgedigital.co.uk) in the
// hosting environment to email each submission. Without them, submissions are only logged.

type Kind = 'contact' | 'careers' | 'newsletter';
const recipients: Record<Kind, string> = {
  contact: site.email,
  careers: site.onboardingEmail,
  newsletter: site.email,
};
const subjects: Record<Kind, string> = {
  contact: 'Website enquiry',
  careers: 'Careers application',
  newsletter: 'Newsletter sign-up',
};

const emailOk = (v: unknown) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && v.length < 200;
const clean = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

type Attachment = { filename: string; content: string };

// CV uploads: PDF or Word, up to 4 MB, attached to the email sent to the onboarding inbox.
const CV_MAX_BYTES = 4 * 1024 * 1024;
function readCv(v: unknown): Attachment | null | 'invalid' {
  if (!v) return null;
  if (typeof v !== 'object') return 'invalid';
  const { name, data } = v as { name?: unknown; data?: unknown };
  if (typeof name !== 'string' || typeof data !== 'string' || !/\.(pdf|docx?)$/i.test(name)) return 'invalid';
  if (!/^[A-Za-z0-9+/=]+$/.test(data) || (data.length * 3) / 4 > CV_MAX_BYTES) return 'invalid';
  return { filename: name.replace(/[^\w.\- ]/g, '_').slice(0, 120), content: data };
}

async function send(to: string, replyTo: string, subject: string, fields: Record<string, string>, attachments: Attachment[] = []) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM;
  if (!key || !from) return false;
  const text = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: replyTo, subject, text, ...(attachments.length ? { attachments } : {}) }),
  });
  if (!res.ok) throw new Error(`Email provider returned ${res.status}`);
  return true;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const type = clean(body.type, 20) as Kind;
  if (!(type in recipients)) {
    return NextResponse.json({ ok: false, error: 'Unknown request type' }, { status: 400 });
  }
  if (!emailOk(body.email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 422 });
  }
  if (type !== 'newsletter' && clean(body.name, 120).length < 2) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 });
  }
  const cv = type === 'careers' ? readCv(body.cv) : null;
  if (cv === 'invalid') {
    return NextResponse.json({ ok: false, error: 'Please upload your CV as a PDF or Word document under 4 MB.' }, { status: 422 });
  }
  if (type === 'careers' && !cv && !clean(body.link, 300)) {
    return NextResponse.json({ ok: false, error: 'Please upload your CV or add a link to it' }, { status: 422 });
  }

  const fields = {
    Name: clean(body.name, 120),
    Email: clean(body.email, 200),
    Organisation: clean(body.company, 160),
    'Area of interest': clean(body.service, 120) || clean(body.area, 120),
    Opportunity: clean(body.opportunity, 120),
    'CV / LinkedIn': clean(body.link, 300),
    'CV attached': cv ? cv.filename : '',
    Message: clean(body.message),
  };
  const to = recipients[type];
  const subject = `${subjects[type]}${fields.Name ? ` from ${fields.Name}` : ''}`;

  try {
    const sent = await send(to, fields.Email, subject, fields, cv ? [cv] : []);
    console.info('[contact]', JSON.stringify({ type, to, sent, ...fields, receivedAt: new Date().toISOString() }));
    // In production, never tell someone their message arrived when email isn't configured.
    if (!sent && process.env.NODE_ENV === 'production') {
      console.error('[contact] RESEND_API_KEY or MAIL_FROM is not set; nothing was sent');
      return NextResponse.json({ ok: false, error: 'We could not send your message. Please email us directly.' }, { status: 503 });
    }
  } catch (err) {
    console.error('[contact] send failed', err);
    return NextResponse.json({ ok: false, error: 'We could not send your message. Please email us directly.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
