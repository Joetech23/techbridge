'use client';

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ArrowRight } from './Icons';

type Ctx = { go: (dir: 1 | -1) => void; atStart: boolean; atEnd: boolean; setTrack: (el: HTMLDivElement | null) => void };
const CarouselCtx = createContext<Ctx | null>(null);

/** Scroll-snap carousel. Put <CarouselNav /> anywhere inside the provider, <CarouselTrack> around the slides. */
export function Carousel({ children }: { children: React.ReactNode }) {
  const track = useRef<HTMLDivElement | null>(null);
  const [edge, setEdge] = useState({ atStart: true, atEnd: false });

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdge({ atStart: el.scrollLeft < 8, atEnd: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 });
  }, []);

  const setTrack = useCallback(
    (el: HTMLDivElement | null) => {
      track.current = el;
      measure();
    },
    [measure],
  );

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return <CarouselCtx.Provider value={{ go, setTrack, ...edge }}>{children}</CarouselCtx.Provider>;
}

export function CarouselTrack({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ctx = useContext(CarouselCtx)!;
  return (
    <div ref={ctx.setTrack} className={`car-track ${className}`}>
      {children}
    </div>
  );
}

export function CarouselNav({ dark = false }: { dark?: boolean }) {
  const ctx = useContext(CarouselCtx)!;
  return (
    <div className={`car-nav${dark ? ' on-dark' : ''}`}>
      <button type="button" aria-label="Previous" onClick={() => ctx.go(-1)} disabled={ctx.atStart} className="car-btn prev">
        <ArrowRight size={15} />
      </button>
      <button type="button" aria-label="Next" onClick={() => ctx.go(1)} disabled={ctx.atEnd} className="car-btn">
        <ArrowRight size={15} />
      </button>
    </div>
  );
}
