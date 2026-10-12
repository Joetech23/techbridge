import Link from 'next/link';
import { Fragment } from 'react';
import { img } from '@/lib/content';
import { ArrowDisc, Motif, vars } from './Icons';
import Photo from './Photo';

const white = ['Your', 'bridge', 'to', 'the', 'cloud,'];
const pale = ['built', 'secure', 'from', 'day', 'one.'];

/** Full-screen photo hero: heavy uppercase headline, bold lede, pill CTAs and the squares motif. */
export default function Hero() {
  return (
    <>
      <section id="top" className="hero" data-screen-label="Hero">
        <div className="hero-bg">
          <Photo id={img.heroWide} alt="TechBridge consultants working together at a screen" sizes="100vw" priority wide />
        </div>
        <div className="hero-shade" aria-hidden />

        <div className="hero-inner">
          <span className="label on-dark hero-in" style={vars({ '--d': 100 })}>
            <span className="label-dot" /> Planned properly. Delivered securely.
          </span>
          <h1 className="hero-title">
            {white.map((w, i) => (
              <Fragment key={w}>
                <span className="hw">
                  <span style={vars({ '--i': i })}>{w}</span>
                </span>{' '}
              </Fragment>
            ))}
            <span className="hero-title-pale">
              {pale.map((w, i) => (
                <Fragment key={w}>
                  <span className="hw">
                    <span style={vars({ '--i': white.length + i })}>{w}</span>
                  </span>{' '}
                </Fragment>
              ))}
            </span>
          </h1>
          <p className="hero-lede hero-in" style={vars({ '--d': 900 })}>
            TechBridge is the IT consultancy for public bodies, finance firms and growing businesses. We design your cloud, secure your systems and stay on to run
            them.
          </p>
          <div className="hero-ctas hero-in" style={vars({ '--d': 1020 })}>
            <Link href="/contact" className="btn btn-light">
              Book a consultation <ArrowDisc />
            </Link>
            <a href="#services" className="btn btn-ghost">
              Our services <ArrowDisc />
            </a>
          </div>
        </div>

        <Motif className="hero-pixels" />
      </section>

      {/* Feature band, attached to the hero */}
      <section className="band-photo" data-screen-label="Feature band">
        <div className="band-photo-bg">
          <Photo id={img.bandDark} alt="" sizes="100vw" />
        </div>
        <div className="band-photo-inner">
          <h2 className="h2" data-reveal>
            AWS Well-Architected Reviews. Now booking.
          </h2>
          <div data-reveal style={vars({ '--d': 120 })}>
            <p>
              Six pillars, one report. Our architects review your AWS workloads for security, reliability, performance and cost, and hand you a prioritised plan to
              fix what matters first.
            </p>
            <div className="band-ctas">
              <Link href="/services/aws-solutions-architect" className="btn btn-light">
                Learn more <ArrowDisc />
              </Link>
              <Link href="/insights/aws-well-architected-review" className="btn btn-light">
                Read the guide <ArrowDisc />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
