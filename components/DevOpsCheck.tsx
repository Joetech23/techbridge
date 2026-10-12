'use client';

import Link from 'next/link';
import { useState } from 'react';
import { devopsQuestions } from '@/lib/insights';
import { ArrowDisc, CheckIcon, vars } from './Icons';

const levels = [
  { min: 0, name: 'Starting out', desc: 'Releases depend on people more than process. A few foundations, like automated builds and version control for everything, will make the biggest difference.' },
  { min: 3, name: 'Developing', desc: 'Good habits are forming. Automating testing and environments is usually the next step to faster, safer releases.' },
  { min: 5, name: 'Established', desc: 'You release with confidence most of the time. Focus on observability, rollback and learning from incidents.' },
  { min: 7, name: 'Advanced', desc: 'Strong practices across the board. A review can help you find the remaining bottlenecks and keep improving.' },
];

export default function DevOpsCheck() {
  const [ticked, setTicked] = useState<boolean[]>(() => devopsQuestions.map(() => false));
  const score = ticked.filter(Boolean).length;
  const level = [...levels].reverse().find((l) => score >= l.min)!;
  const pct = score / devopsQuestions.length;

  return (
    <div className="devops">
      <ol className="devops-list">
        {devopsQuestions.map((q, i) => (
          <li key={q}>
            <label className={`devops-item${ticked[i] ? ' is-on' : ''}`}>
              <input
                type="checkbox"
                checked={ticked[i]}
                onChange={() => setTicked((t) => t.map((v, j) => (j === i ? !v : v)))}
              />
              <span className="devops-box" aria-hidden>
                <CheckIcon size={14} />
              </span>
              <span>{q}</span>
            </label>
          </li>
        ))}
      </ol>
      <div className="devops-result" aria-live="polite">
        <div className="devops-ring" style={vars({ '--pct': pct })}>
          <span>
            {score}
            <small>/{devopsQuestions.length}</small>
          </span>
        </div>
        <div className="devops-level">
          <span className="devops-kicker">Your maturity level</span>
          <span key={level.name} className="devops-name">
            {level.name}
          </span>
          <p>{level.desc}</p>
          <Link href="/services/devops-maturity-assessment" className="btn btn-primary btn-sm">
            Get a full assessment <ArrowDisc />
          </Link>
        </div>
      </div>
    </div>
  );
}
