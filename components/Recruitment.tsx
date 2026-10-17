import Link from 'next/link';
import { recruitmentProcess, recruitmentServices, recruitmentStats, testimonials } from '@/lib/company';
import { ArrowRight, SearchIcon, WhyIcon, vars } from './Icons';
import { CountUp } from './Motion';
import { Head } from './page/Cards';

const icons = ['compass', 'flask', 'shield', 'scale'] as const;

/** Recruitment and placement services: shows visitors TechBridge also recruits and places talent. */
export function RecruitmentServices() {
  return (
    <section className="recruit section-pad">
      <div className="container">
        <Head
          dark
          label="Recruitment & placement"
          title="Talent for technology and financial services teams."
          side={<p>Alongside consulting, we connect skilled people with employers who need them, from graduates and interns to experienced specialists.</p>}
        />
        <div className="recruit-grid">
          {recruitmentServices.map((s, i) => (
            <div key={s.title} className="recruit-card" data-reveal style={vars({ '--d': i * 90 })}>
              <span className="recruit-icon">
                <WhyIcon name={icons[i % icons.length]} />
              </span>
              <span className="recruit-title">{s.title}</span>
              <span className="recruit-desc">{s.desc}</span>
            </div>
          ))}
          <a href="#openings" className="recruit-card is-action" data-reveal style={vars({ '--d': 360 })}>
            <span className="recruit-icon">
              <SearchIcon size={22} />
            </span>
            <span className="recruit-title">Search for Job Openings</span>
            <span className="recruit-desc">Browse our current openings and filter by keyword, location and job type.</span>
            <span className="recruit-link">
              Search jobs <ArrowRight size={14} />
            </span>
          </a>
          <a href="#apply" className="recruit-card is-action alt" data-reveal style={vars({ '--d': 450 })}>
            <span className="recruit-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M12 16V4M12 4L7 9M12 4L17 9M4 16V19C4 19.6 4.4 20 5 20H19C19.6 20 20 19.6 20 19V16" />
              </svg>
            </span>
            <span className="recruit-title">Upload your CV in one click</span>
            <span className="recruit-desc">Send your CV straight to our onboarding team and we’ll match you with the right opportunity.</span>
            <span className="recruit-link">
              Upload your CV <ArrowRight size={14} />
            </span>
          </a>
        </div>
        <div className="recruit-employers" data-reveal>
          <span>Hiring? Tell us about the role and we’ll find the right people.</span>
          <Link href="/contact" className="btn btn-light btn-sm">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Counters and testimonials render only once TechBridge supplies real figures and quotes. */
export function RecruitmentProof() {
  if (!recruitmentStats.length && !testimonials.length) return null;
  return (
    <section className="container section-pad">
      {recruitmentStats.length > 0 && (
        <div className="recruit-stats">
          {recruitmentStats.map((s, i) => (
            <div key={s.label} className="recruit-stat" data-reveal style={vars({ '--d': i * 90 })}>
              <span className="recruit-stat-n">
                <CountUp to={s.value} />
                {s.suffix}
              </span>
              <span className="recruit-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      )}
      {testimonials.length > 0 && (
        <>
          <Head label="Testimonials" title="What people say about working with us." />
          <div className="testimonials">
            {testimonials.map((t, i) => (
              <figure key={t.name} className="testimonial" data-reveal style={vars({ '--d': i * 90 })}>
                <blockquote>“{t.quote}”</blockquote>
                <figcaption>
                  <b>{t.name}</b>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

export function RecruitmentProcess() {
  return (
    <section className="container section-pad">
      <Head label="Our work process" title="How we match people and roles." />
      <div className="span-grid">
        {recruitmentProcess.map((s, i) => (
          <div key={s.title} className="span-tile" data-reveal style={vars({ '--d': i * 100 })}>
            <span className="span-no">{String(i + 1).padStart(2, '0')}</span>
            <span className="span-title">{s.title}</span>
            <span className="span-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
