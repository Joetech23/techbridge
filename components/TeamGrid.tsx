import Link from 'next/link';
import type { Member } from '@/lib/company';
import { team } from '@/lib/company';
import { ArrowRight, vars } from './Icons';
import Photo from './Photo';

export function MemberCard({ m, i = 0 }: { m: Member; i?: number }) {
  const inner = (
    <>
      <span className="member-photo">
        <Photo id={m.photo} alt={`${m.name}, ${m.role}`} sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 320px" position={m.pos} />
        <span className="member-bar" aria-hidden />
      </span>
      <span className="member-name">{m.name}</span>
      <span className="member-role">{m.role}</span>
      {m.bio && (
        <span className="member-link">
          Read profile <ArrowRight size={13} />
        </span>
      )}
    </>
  );
  return m.bio ? (
    <Link href={`/team#${m.slug}`} className="member" data-reveal style={vars({ '--d': (i % 5) * 80 })}>
      {inner}
    </Link>
  ) : (
    <div className="member" data-reveal style={vars({ '--d': (i % 5) * 80 })}>
      {inner}
    </div>
  );
}

export default function TeamGrid() {
  return (
    <div className="team-grid">
      {team.map((m, i) => (
        <MemberCard key={m.slug} m={m} i={i} />
      ))}
    </div>
  );
}
