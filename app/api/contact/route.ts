import { NextResponse } from 'next/server';

// Receives bookings, quote requests, messages, careers applications and newsletter sign-ups.
// TODO: forward to the team's inbox / CRM / calendar (e.g. Resend, HubSpot, Cal.com) once chosen.

const emailOk = (v: unknown) => typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) && v.length < 200;
const clean = (v: unknown, max = 2000) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const type = clean(body.type, 20);
  if (!['booking', 'quote', 'contact', 'careers', 'newsletter'].includes(type)) {
    return NextResponse.json({ ok: false, error: 'Unknown request type' }, { status: 400 });
  }
  if (!emailOk(body.email)) {
    return NextResponse.json({ ok: false, error: 'A valid email is required' }, { status: 422 });
  }
  if (type !== 'newsletter' && clean(body.name, 120).length < 2) {
    return NextResponse.json({ ok: false, error: 'Name is required' }, { status: 422 });
  }

  const entry = {
    type,
    email: clean(body.email, 200),
    name: clean(body.name, 120),
    company: clean(body.company, 160),
    service: clean(body.service, 120),
    message: clean(body.message),
    slot: clean(body.slot, 120),
    subject: clean(body.subject, 200),
    opportunity: clean(body.opportunity, 120),
    area: clean(body.area, 120),
    link: clean(body.link, 300),
    receivedAt: new Date().toISOString(),
  };
  console.info('[contact]', JSON.stringify(entry));

  return NextResponse.json({ ok: true });
}
