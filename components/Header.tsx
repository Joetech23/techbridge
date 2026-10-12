'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { img } from '@/lib/content';
import { industries, industryHref } from '@/lib/industries';
import { companyLinks, mobileLinks, serviceCats } from '@/lib/nav';
import { serviceHref } from '@/lib/services';
import { ArrowDisc, ArrowRight, Chevron, SearchIcon, vars } from './Icons';
import Photo from './Photo';
import SearchOverlay from './SearchOverlay';

type Menu = null | 'ind' | 'svc' | 'co';

const navItems: { label: string; menu?: Exclude<Menu, null>; href?: string; match: string[] }[] = [
  { label: 'Industries', menu: 'ind', match: ['/industries'] },
  { label: 'Services', menu: 'svc', match: ['/services'] },
  { label: 'Company', menu: 'co', match: ['/about', '/team', '/accreditations'] },
  { label: 'Case studies', href: '/case-studies', match: ['/case-studies'] },
  { label: 'Insights', href: '/insights', match: ['/insights'] },
  { label: 'Careers', href: '/careers', match: ['/careers'] },
];

export default function Header() {
  const [menu, setMenu] = useState<Menu>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [search, setSearch] = useState(false);
  const [ink, setInk] = useState({ x: 0, w: 0, on: false });
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const current = (n: (typeof navItems)[number]) => n.match.some((m) => pathname.startsWith(m));

  // Close menus after navigating.
  useEffect(() => {
    setMenu(null);
    setMobile(false);
    setInk((i) => ({ ...i, on: false }));
  }, [pathname]);
  const openRef = useRef({ menu, mobile });
  openRef.current = { menu, mobile };

  // Hairline once scrolled; slide away on scroll-down, return on scroll-up.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 8);
      const busy = openRef.current.menu || openRef.current.mobile;
      if (!busy && Math.abs(y - last) > 6) setHidden(y > 520 && y > last);
      last = y;
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    return () => {
      window.removeEventListener('scroll', on);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearch((s) => !s);
      }
      if (e.key === 'Escape') {
        setMenu(null);
        setMobile(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const moveInk = useCallback((el: HTMLElement | null) => {
    const nav = navRef.current;
    if (!el || !nav) return;
    const a = el.getBoundingClientRect();
    const b = nav.getBoundingClientRect();
    setInk({ x: a.left - b.left, w: a.width, on: true });
  }, []);

  const close = () => setMenu(null);
  const tab = (m: Menu) => (menu === m ? 0 : -1);

  return (
    <>
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}${hidden ? ' is-hidden' : ''}${menu ? ' has-menu' : ''}`}
        onMouseLeave={() => {
          close();
          setInk((i) => ({ ...i, on: false }));
        }}
      >
        <div className="container header-row">
          <Link href="/" className="brand" aria-label="TechBridge Consultancy, home">
            <img src="/assets/tb-mark-white.png" alt="" width={38} height={36} />
            <span className="brand-text">
              <span className="brand-name">TechBridge</span>
              <span className="brand-sub">CONSULTANCY</span>
            </span>
          </Link>

          <nav
            ref={navRef}
            className={`main-nav${menu ? ' has-open' : ''}`}
            aria-label="Main"
            onMouseLeave={() => {
              if (!openRef.current.menu) setInk((i) => ({ ...i, on: false }));
            }}
          >
            <span className={`nav-ink${ink.on ? ' is-on' : ''}`} style={vars({ '--x': `${ink.x}px`, '--w': `${ink.w}px` })} aria-hidden />
            {navItems.map((n) =>
              n.menu ? (
                <button
                  key={n.label}
                  type="button"
                  className={`nav-link${menu === n.menu ? ' is-active' : ''}${current(n) ? ' is-current' : ''}`}
                  aria-expanded={menu === n.menu}
                  onMouseEnter={(e) => {
                    setMenu(n.menu!);
                    moveInk(e.currentTarget);
                  }}
                  onFocus={(e) => moveInk(e.currentTarget)}
                  onClick={(e) => {
                    setMenu((m) => (m === n.menu ? null : n.menu!));
                    moveInk(e.currentTarget);
                  }}
                >
                  {n.label} <Chevron className="nav-chev" />
                </button>
              ) : (
                <Link
                  key={n.label}
                  href={n.href!}
                  className={`nav-link${current(n) ? ' is-current' : ''}`}
                  onMouseEnter={(e) => {
                    close();
                    moveInk(e.currentTarget);
                  }}
                  onFocus={(e) => moveInk(e.currentTarget)}
                >
                  {n.label}
                </Link>
              ),
            )}
          </nav>

          <div className="header-actions">
            <button type="button" className="icon-btn" aria-label="Search (Ctrl+K)" onClick={() => setSearch(true)}>
              <SearchIcon />
            </button>

            <Link href="/contact" className="btn btn-ghost btn-sm header-cta">
              Get in touch <ArrowDisc />
            </Link>
            <button type="button" className={`burger${mobile ? ' is-open' : ''}`} aria-label="Menu" aria-expanded={mobile} onClick={() => setMobile((m) => !m)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-menu${mobile ? ' is-open' : ''}`} aria-hidden={!mobile}>
          {mobileLinks.map((l, i) => (
            <Link key={l.label} href={l.href} style={vars({ '--i': i })} onClick={() => setMobile(false)} tabIndex={mobile ? 0 : -1}>
              {l.label}
              <ArrowRight size={13} />
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary mobile-cta" onClick={() => setMobile(false)} tabIndex={mobile ? 0 : -1}>
            Get in touch <ArrowDisc />
          </Link>
        </div>

        {/* Services */}
        <div className={`mega${menu === 'svc' ? ' is-open' : ''}`} aria-hidden={menu !== 'svc'}>
          <div className="mega-panel mega-services">
            <div className="mega-cats">
              {serviceCats.map((c, ci) => (
                <div key={c.label} className="mega-cat mega-item" style={vars({ '--i': ci })}>
                  <div className="mega-label">{c.label}</div>
                  {c.items.map((s) => (
                    <Link key={s.slug} href={serviceHref(s.slug)} onClick={close} tabIndex={tab('svc')}>
                      {s.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <Link href="/contact" className="mega-feature" onClick={close} tabIndex={tab('svc')}>
              <span className="mega-feature-img">
                <Photo id={img.review} sizes="320px" />
              </span>
              <span className="mega-feature-body">
                <span className="mega-feature-kicker">Free, 30 minutes</span>
                <span className="mega-feature-title">Not sure where to start? Talk to an architect.</span>
                <span className="text-link">
                  Book a consultation <ArrowRight size={12} />
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* Industries */}
        <div className={`mega${menu === 'ind' ? ' is-open' : ''}`} aria-hidden={menu !== 'ind'}>
          <div className="mega-panel mega-grid cols-3">
            {industries.map((ind, i) => (
              <Link key={ind.slug} href={industryHref(ind.slug)} className="mega-card mega-item" style={vars({ '--i': i })} onClick={close} tabIndex={tab('ind')}>
                <span className="mega-card-img">
                  <Photo id={ind.image} sizes="360px" />
                </span>
                <span className="mega-card-title">{ind.name}</span>
                <span className="mega-card-desc">{ind.desc}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className={`mega${menu === 'co' ? ' is-open' : ''}`} aria-hidden={menu !== 'co'}>
          <div className="mega-panel mega-grid cols-4">
            {companyLinks.map((cl, i) => (
              <Link key={cl.name} href={cl.href} className="mega-card plain mega-item" style={vars({ '--i': i })} onClick={close} tabIndex={tab('co')}>
                <span className="mega-card-title">
                  {cl.name} <ArrowRight size={12} />
                </span>
                <span className="mega-card-desc">{cl.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </header>

      <SearchOverlay open={search} onClose={() => setSearch(false)} />
    </>
  );
}
