import Link from 'next/link';
import { site } from '@/lib/content';
import { footerCols } from '@/lib/nav';
import Briefing from './Briefing';
import { ArrowDisc, MailIcon, PinIcon, vars } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2 className="footer-cta-title">
            Stay in touch
            <br />
            <span>with the latest.</span>
          </h2>
          <div className="footer-cta-side">
            <p>One practical email a month on cloud, security and data. No sales pitches.</p>
            <Briefing bare />
            <Link href="/contact" className="btn btn-pale">
              Book a free consultation <ArrowDisc />
            </Link>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-about">
            <Link href="/" className="brand on-dark" aria-label="TechBridge Consultancy, home">
              <img src="/assets/tb-mark-white.png" alt="" width={38} height={36} />
              <span className="brand-text">
                <span className="brand-name">TechBridge</span>
                <span className="brand-sub">CONSULTANCY</span>
              </span>
            </Link>
            <p className="footer-pitch">IT consultancy for organisations that can’t afford to get technology wrong.</p>
            <div className="footer-contacts">
              <a href={`mailto:${site.email}`} className="footer-contact">
                <span className="fc-icon">
                  <MailIcon size={16} />
                </span>
                <span>
                  <span className="fc-label">Send us mail</span>
                  {site.email}
                </span>
              </a>
              <span className="footer-contact">
                <span className="fc-icon">
                  <PinIcon size={16} />
                </span>
                <span>
                  <span className="fc-label">Office</span>
                  {site.address.street}, {site.address.city} {site.address.postcode}
                </span>
              </span>
              {site.phone && (
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="footer-contact">
                  <span>
                    <span className="fc-label">Call us</span>
                    {site.phone}
                  </span>
                </a>
              )}
            </div>
          </div>
          {footerCols.map((fc, i) => (
            <div key={fc.title} className="footer-col" data-reveal style={vars({ '--d': i * 70 })}>
              <span className="footer-col-title">{fc.title}</span>
              {fc.links.map((l) => (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.legalName}
          </span>
          <div className="footer-legal">
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/terms">Terms</Link>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
