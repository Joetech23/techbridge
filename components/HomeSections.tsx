import Link from 'next/link';
import { cases } from '@/lib/cases';
import { facts, img, platforms, steps, whys } from '@/lib/content';
import { postHref, posts } from '@/lib/insights';
import { Carousel, CarouselNav, CarouselTrack } from './Carousel';
import { ArrowDisc, ArrowRight, Motif, ServiceIcon, WhyIcon, vars } from './Icons';
import { CountUp } from './Motion';
import Photo from './Photo';

const Label = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <span className={`label${dark ? ' on-dark' : ''}`} data-reveal>
    <span className="label-dot" /> {children}
  </span>
);

/** Platforms strip (their "where our colleagues make a difference" logo row). */
export function Trusted() {
  return (
    <section className="trusted" data-screen-label="Platforms">
      <div className="trusted-head">
        <Label>Platforms and standards we work with</Label>
      </div>
      <div className="trusted-wrap" data-reveal="fade">
        <div className="trusted-track">
          {[...platforms, ...platforms, ...platforms].map((p, i) => (
            <span key={i} className="trusted-item" aria-hidden={i >= platforms.length}>
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Pale-blue statement block with the three headline numbers. */
export function Statement() {
  return (
    <section className="gutter" id="about" data-screen-label="Who we are">
      <div className="pale-block">
        <div className="pale-grid">
          <h2 className="h2" data-reveal>
            Planned properly. Delivered securely.
          </h2>
          <div data-reveal style={vars({ '--d': 120 })}>
            <p>
              We’re the bridge between where your technology is today and where your business needs it to be, without the risk of getting there alone. Our
              architects, security specialists and engineers plan the route, build it with you and keep it running, so you always have one accountable team from
              first conversation to day-to-day support.
            </p>
            <Link href="/about" className="btn btn-dark">
              About TechBridge <ArrowDisc />
            </Link>
          </div>
        </div>
        <div className="pale-facts">
          {facts.map((f, i) => (
            <div key={f.label} className="pale-fact" data-reveal style={vars({ '--d': 160 + i * 110 })}>
              <span className="pale-fact-n">
                <CountUp to={f.n} />
                {f.s}
              </span>
              <span className="pale-fact-label">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const circleTone = ['blue', 'navy', 'amber', 'sky'];

/** "Why clients choose" row of icon circles. */
export function WhyCircles() {
  return (
    <section className="why2 section-pad" data-screen-label="Why TechBridge">
      <div className="gutter">
        <div className="center-head">
          <h2 className="h2" data-reveal>
            Why clients choose TechBridge.
          </h2>
          <p data-reveal style={vars({ '--d': 100 })}>
            We translate your business needs into clear technical deliverables and secure designs, prove the approach early, and stay to keep it running.
          </p>
        </div>
        <div className="circles">
          {whys.map((w, i) => (
            <div key={w.title} className="circle-item" data-reveal style={vars({ '--d': i * 110 })}>
              <span className={`circle tone-${circleTone[i]}`}>
                <WhyIcon name={w.icon} />
              </span>
              <span className="circle-title">{w.title}</span>
              <span className="circle-desc">{w.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const offers = [
  {
    slug: 'aws-solutions-architect',
    title: 'AWS Well-Architected Review',
    desc: 'A structured review of your workloads against the six AWS pillars. You get a clear report of risks, ranked by impact, and a plan to fix them.',
    href: '/insights/aws-well-architected-review',
  },
  {
    slug: 'cloud-hosting',
    title: 'Cloud Migration Assessment (the 7 Rs)',
    desc: 'Every workload mapped to the right route to the cloud: retire, retain, rehost, replatform, repurchase, refactor or relocate.',
    href: '/insights/7-rs-of-cloud-migration',
  },
];

/** Bold colour band plus two featured offers. */
export function AccentBand() {
  return (
    <>
      <section className="accent-band" data-screen-label="Flagship">
        <Motif className="accent-pixels" tone="ghost" />
        <div className="gutter accent-grid">
          <h2 className="h2" data-reveal>
            Explore our flagship AWS services.
          </h2>
          <div data-reveal style={vars({ '--d': 120 })}>
            <p>
              Cloud architecture, system integration, proof of concepts and technology roadmaps on AWS, structured around the six pillars of the
              Well-Architected Framework. Experienced architects on demand, without the cost of full-time hires.
            </p>
            <Link href="/services/aws-solutions-architect" className="btn btn-light">
              View AWS architect services <ArrowDisc />
            </Link>
          </div>
        </div>
      </section>
      <section className="gutter offers">
        {offers.map((o, i) => (
          <div key={o.title} className="offer" data-reveal style={vars({ '--d': i * 120 })}>
            <span className="offer-icon">
              <ServiceIcon slug={o.slug} />
            </span>
            <div>
              <h3 className="offer-title">{o.title}</h3>
              <p className="offer-desc">{o.desc}</p>
              <Link href={o.href} className="btn btn-dark btn-sm">
                Learn more <ArrowDisc />
              </Link>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

/** Case study carousel. */
export function CaseRow() {
  return (
    <section id="cases" className="section-pad case-row" data-screen-label="Case studies">
      <Carousel>
        <div className="gutter row-head">
          <h2 className="h2" data-reveal>
            Explore our
            <br />
            case studies.
          </h2>
          <div className="row-head-side" data-reveal style={vars({ '--d': 120 })}>
            <p>Recent work across the public sector, financial services and growing businesses.</p>
            <Link href="/case-studies" className="btn btn-pale">
              View all case studies <ArrowDisc />
            </Link>
          </div>
        </div>
        <CarouselTrack className="gutter-track">
          {[...cases, ...cases.slice(0, 2)].map((cs, i) => (
            <Link key={i} href="/case-studies" className="ccard" data-reveal style={vars({ '--d': Math.min(i, 4) * 90 })}>
              <span className="ccard-photo">
                <Photo id={cs.image} alt="" sizes="(max-width: 640px) 80vw, 400px" />
              </span>
              <span className="chips">
                <span>{cs.sector}</span>
                <span>{cs.service}</span>
              </span>
              <span className="ccard-title">{cs.title}</span>
              <span className="ccard-link">
                Read case study <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </CarouselTrack>
        <div className="gutter">
          <CarouselNav />
        </div>
      </Carousel>
    </section>
  );
}

/** Latest insights: heading column plus a card carousel. */
export function InsightsRow() {
  return (
    <section id="insights" className="section-pad insights-row" data-screen-label="Insights">
      <Carousel>
        <div className="news-grid">
          <div className="news-head">
            <Label>Our insights</Label>
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              The latest thinking.
            </h2>
            <Link href="/insights" className="btn btn-pale" data-reveal style={vars({ '--d': 140 })}>
              View our insights <ArrowDisc />
            </Link>
            <CarouselNav />
          </div>
          <CarouselTrack>
            {posts.map((p, i) => (
              <Link key={p.slug} href={postHref(p.slug)} className="ncard" data-reveal style={vars({ '--d': i * 90 })}>
                <span className="ncard-photo">
                  <Photo id={p.image} alt="" sizes="(max-width: 640px) 80vw, 420px" />
                  <span className="chips on-photo">
                    <span>{p.type}</span>
                    <span>{p.meta}</span>
                  </span>
                </span>
                <span className="ncard-title">{p.title}</span>
                <span className="ncard-link">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </CarouselTrack>
        </div>
      </Carousel>
    </section>
  );
}

/** Four-stage process as square tiles. */
export function ProcessRow() {
  return (
    <section className="section-pad process-row" data-screen-label="How we work">
      <div className="gutter">
        <div className="center-head">
          <h2 className="h2" data-reveal>
            Four spans. No gaps.
          </h2>
          <p data-reveal style={vars({ '--d': 100 })}>
            Every engagement follows the same path, so you always know what’s happening, what it costs and what you get at the end of each stage.
          </p>
        </div>
        <div className="span-grid">
          {steps.map((s, i) => (
            <div key={s.no} className="span-tile" data-reveal style={vars({ '--d': i * 110 })}>
              <span className="span-no">{s.no}</span>
              <span className="span-title">{s.title}</span>
              <span className="span-desc">{s.desc}</span>
              <span className="span-out">
                <b>You get</b> {s.out}
              </span>
            </div>
          ))}
        </div>
        <div className="center-cta" data-reveal>
          <span>Want to start with an assessment?</span>
          <Link href="/contact" className="btn btn-pale">
            Talk to a consultant <ArrowDisc />
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Dark "why us" section with a checkerboard of stats and photos. */
export function StatsMosaic() {
  return (
    <section className="mosaic-sec" data-screen-label="Why us">
      <div className="gutter mosaic-grid">
        <div className="mosaic-copy">
          <Label dark>Why us?</Label>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            Turning complex technology into confident decisions.
          </h2>
          <p className="mosaic-lede" data-reveal style={vars({ '--d': 140 })}>
            At the heart of TechBridge is one accountable team, from first assessment to day-to-day support.
          </p>
          <p data-reveal style={vars({ '--d': 180 })}>
            We mitigate risk before you build, with proof of concepts that surface problems in week one. We size infrastructure and licences to what you actually need.
            And we design security, resilience and governance into every layer, so your platform is future-proof, not an afterthought.
          </p>
          <div className="mosaic-ctas" data-reveal style={vars({ '--d': 240 })}>
            <Link href="/about" className="btn btn-pale">
              About us <ArrowDisc />
            </Link>
            <Link href="/contact" className="btn btn-pale">
              Chat to us today <ArrowDisc />
            </Link>
          </div>
        </div>

        <div className="mosaic" data-reveal="fade">
          <div className="tile photo" style={vars({ '--i': 0 })}>
            <Photo id={img.mosaicA} alt="" sizes="260px" />
          </div>
          <div className="tile stat pale" style={vars({ '--i': 1 })}>
            <span className="tile-n">
              <CountUp to={facts[0].n} />
              <sup>+</sup>
            </span>
            <span className="tile-label">specialist services</span>
          </div>
          <div className="tile empty" />
          <div className="tile empty" />
          <div className="tile photo" style={vars({ '--i': 2 })}>
            <Photo id={img.mosaicB} alt="" sizes="260px" />
          </div>
          <div className="tile stat amber" style={vars({ '--i': 3 })}>
            <span className="tile-n">
              <CountUp to={facts[1].n} />
            </span>
            <span className="tile-label">core sectors</span>
          </div>
          <div className="tile stat blue" style={vars({ '--i': 4 })}>
            <span className="tile-n">
              <CountUp to={facts[2].n} />
            </span>
            <span className="tile-label">accountable team</span>
          </div>
          <div className="tile empty" />
          <div className="tile photo" style={vars({ '--i': 5 })}>
            <Photo id={img.mosaicC} alt="" sizes="260px" />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Engagement models: photo with squares on one side, copy on the other. */
export function Engagement() {
  return (
    <section className="section-pad engage" data-screen-label="Engagement models">
      <div className="gutter engage-grid">
        <div className="engage-media" data-reveal>
          <div className="engage-photo">
            <Photo id={img.process} alt="Consultants in a planning session" sizes="(max-width: 999px) 100vw, 560px" />
          </div>
          <Motif className="engage-pixels" tone="mixed" />
        </div>
        <div>
          <Label>Engagement models</Label>
          <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
            Starting projects with clarity and no surprises.
          </h2>
          <p className="engage-lede" data-reveal style={vars({ '--d': 140 })}>
            Pay the way that suits the work.
          </p>
          <div className="models2">
            <div data-reveal style={vars({ '--d': 180 })}>
              <b>Fixed price</b>
              <span>A clear scope of work agreed up front. Ideal for assessments and defined projects.</span>
            </div>
            <div data-reveal style={vars({ '--d': 240 })}>
              <b>Time and materials</b>
              <span>Flexible capacity for evolving programmes and ongoing advisory.</span>
            </div>
          </div>
          <Link href="/contact" className="btn btn-dark" data-reveal style={vars({ '--d': 300 })}>
            Contact us <ArrowDisc />
          </Link>
        </div>
      </div>
    </section>
  );
}
