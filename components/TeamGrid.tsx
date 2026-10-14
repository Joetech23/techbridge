'use client';

import { useEffect, useRef, useState } from 'react';
import type { Member } from '@/lib/company';
import { team } from '@/lib/company';
import { ArrowRight, CloseIcon, vars } from './Icons';
import Photo from './Photo';

/**
 * Uniform team grid (demo session, 13 Oct 2026): every card shows photo, name and designation,
 * and every card opens the same profile panel.
 */
export default function TeamGrid() {
  const [open, setOpen] = useState<Member | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  return (
    <>
      <div className="team-grid">
        {team.map((m, i) => (
          <button key={m.slug} type="button" className="member" data-reveal style={vars({ '--d': (i % 4) * 80 })} onClick={() => setOpen(m)}>
            <span className="member-photo">
              <Photo id={m.photo} alt={`${m.name}, ${m.role}`} sizes="(max-width: 640px) 50vw, (max-width: 1180px) 33vw, 300px" position={m.pos} />
              <span className="member-bar" aria-hidden />
            </span>
            <span className="member-name">{m.name}</span>
            <span className="member-role">{m.role}</span>
            <span className="member-link">
              View profile <ArrowRight size={13} />
            </span>
          </button>
        ))}
      </div>

      <dialog ref={dialog} className="profile-dialog" onClose={() => setOpen(null)} onClick={(e) => e.target === e.currentTarget && setOpen(null)} aria-label={open ? `${open.name} profile` : 'Profile'}>
        {open && (
          <div className="pd-inner">
            <button type="button" className="pd-close" onClick={() => setOpen(null)} aria-label="Close profile">
              <CloseIcon size={16} />
            </button>
            <div className="pd-photo">
              <Photo id={open.photo} alt={`${open.name}, ${open.role}`} sizes="(max-width: 999px) 90vw, 420px" position={open.pos} />
            </div>
            <div className="pd-body">
              <span className="label">
                <span className="label-dot" /> {open.role}
              </span>
              <h3 className="h2">{open.name}</h3>
              {open.bio?.length ? (
                open.bio.map((p, k) => (
                  <p key={k} className={k === 0 ? 'pd-lede' : undefined}>
                    {p}
                  </p>
                ))
              ) : (
                <p className="pd-lede">Full profile coming soon.</p>
              )}
              {open.certs.length > 0 && (
                <span className="chips">
                  {open.certs.map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </span>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
