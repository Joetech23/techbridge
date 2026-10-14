import type { Metadata } from 'next';
import CareersForm from '@/components/CareersForm';
import { WhyIcon, vars } from '@/components/Icons';
import JobBoard from '@/components/JobBoard';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import { careerPerks } from '@/lib/company';
import { img, site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Careers, Graduate Scheme & Internships | TechBridge',
  description: 'Join the TechBridge graduate scheme or an internship. Work on real cloud, cyber security, data and delivery projects in London. Search our job openings.',
  alternates: { canonical: '/careers' },
};

const applySteps = [
  { title: 'Find your opening', desc: 'Search our openings for the graduate scheme or an internship that fits your interests.' },
  { title: 'Send your application', desc: 'Share your details and a link to your CV or LinkedIn profile. It takes a few minutes.' },
  { title: 'Talk to our team', desc: 'If there’s a fit, we’ll invite you to a conversation about your goals and the programme.' },
  { title: 'Start on real projects', desc: 'Join a client team, learn from experienced consultants and build work you can talk about.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Company', href: '/about' }, { label: 'Careers' }]}
        label="Careers"
        title="Job openings at TechBridge."
        lede="Our graduate scheme and internships give you hands-on experience on real client projects in cloud, security, data and delivery."
        image={img.meeting}
        actions={
          <a href="#openings" className="btn btn-light">
            Search openings
          </a>
        }
      />

      <section id="openings" className="container section-pad">
        <Head label="Search job openings" title="Find your next step." side={<p>Filter by keyword, location and job type. New openings are added here first.</p>} />
        <JobBoard />
      </section>

      <section className="tint-band section-pad">
        <div className="container">
          <Head label="Why join us" title="Experience that counts." />
          <div className="values-grid">
            {careerPerks.map((v, i) => (
              <div key={v.title} className="value-card" data-reveal style={vars({ '--d': i * 90 })}>
                <span className="value-card-icon">
                  <WhyIcon name={v.icon} />
                </span>
                <span className="value-card-title">{v.title}</span>
                <span className="value-card-desc">{v.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-pad">
        <Head label="How it works" title="From application to your first project." />
        <div className="span-grid">
          {applySteps.map((s, i) => (
            <div key={s.title} className="span-tile" data-reveal style={vars({ '--d': i * 100 })}>
              <span className="span-no">{String(i + 1).padStart(2, '0')}</span>
              <span className="span-title">{s.title}</span>
              <span className="span-desc">{s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" className="tint-band section-pad">
        <div className="container apply-grid">
          <div>
            <span className="label" data-reveal>
              <span className="label-dot" /> Apply
            </span>
            <h2 className="h2" data-reveal style={vars({ '--d': 80 })}>
              Send us your application.
            </h2>
            <p className="lede" data-reveal style={vars({ '--d': 140 })}>
              Tell us which opening you’re applying for and share a link to your CV or LinkedIn profile. Applications go straight to our onboarding team.
            </p>
            <p className="lede" data-reveal style={vars({ '--d': 200 })}>
              Prefer email? Send your CV to <a href={`mailto:${site.onboardingEmail}`}>{site.onboardingEmail}</a>.
            </p>
          </div>
          <div className="contact-card" data-reveal="right">
            <CareersForm />
          </div>
        </div>
      </section>
    </>
  );
}
