import Link from 'next/link';
import { facts, site } from '@/lib/content';
import { ArrowRight, vars } from './Icons';
import { CountUp } from './Motion';

/** Branded stand-in until the client supplies a team photo (proposal §06, Day 1). */
function TeamVisual() {
  return (
    <div className="team-visual" aria-hidden>
      <div className="tv-grid" />
      {[
        { cls: 'o1', chips: [['Cloud', 20], ['Security', 200]] },
        { cls: 'o2', chips: [['Data & AI', 110], ['Managed IT', 290]] },
      ].map((o) => (
        <div key={o.cls} className={`tv-orbit ${o.cls}`}>
          {o.chips.map(([label, a]) => (
            <span key={label} className="tv-arm" style={vars({ '--a': `${a}deg` })}>
              <span className={`tv-chip${label === 'Data & AI' ? ' amber' : ''}`}>{label}</span>
            </span>
          ))}
        </div>
      ))}
      <div className="tv-core">
        <img src="/assets/tb-mark-white.png" alt="" width={120} height={114} />
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <section id="about" className="container intro" data-screen-label="Who we are">
      <div className="intro-grid">
        <div className="intro-copy">
          <span className="label" data-reveal>
            <span className="label-dot" /> Who we are
          </span>
          <p className="intro-statement" data-reveal style={vars({ '--d': 100 })}>
            We’re the bridge between where your technology is today and where your business needs it to be, <span className="serif blue">without the risk</span> of
            getting there alone.
          </p>
          <div className="facts">
            {facts.map((f, i) => (
              <div key={f.label} className="fact" data-reveal style={vars({ '--d': 200 + i * 120 })}>
                <span className="fact-n">
                  <CountUp to={f.n} />
                  <span className="blue">{f.s}</span>
                </span>
                <span className="fact-label">{f.label}</span>
              </div>
            ))}
          </div>
          <Link href="/about" className="text-link intro-link" data-reveal style={vars({ '--d': 500 })}>
            More about TechBridge <ArrowRight size={12} />
          </Link>
        </div>

        <div className="intro-media" data-reveal="right" style={vars({ '--d': 150 })}>
          <div className="intro-accent" />
          <div className="intro-photo">{site.teamPhoto ? <img src={site.teamPhoto} alt="TechBridge consultants" /> : <TeamVisual />}</div>
          <div className="intro-quote">
            <span className="serif">“Planned properly. Delivered securely.”</span>
          </div>
        </div>
      </div>
    </section>
  );
}
