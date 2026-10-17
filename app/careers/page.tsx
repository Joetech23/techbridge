import type { Metadata } from 'next';
import CareersForm from '@/components/CareersForm';
import { WhyIcon, vars } from '@/components/Icons';
import JobBoard from '@/components/JobBoard';
import { RecruitmentProcess, RecruitmentProof, RecruitmentServices } from '@/components/Recruitment';
import { Head } from '@/components/page/Cards';
import PageHero from '@/components/page/PageHero';
import { careerPerks } from '@/lib/company';
import { img, site } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Careers, Graduate Scheme & Internships | TechBridge',
  description: 'Careers and recruitment at TechBridge: graduate scheme, internships and job placements across AWS, DevOps, cyber security, data and project management. Upload your CV.',
  alternates: { canonical: '/careers' },
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Company', href: '/about' }, { label: 'Careers' }]}
        label="Careers"
        title="Job openings at TechBridge."
        lede="Our graduate scheme and internships give you hands-on experience on real client projects in cloud, security, data and delivery."
        image={img.careersHero}
        actions={
          <a href="#openings" className="btn btn-light">
            Search openings
          </a>
        }
      />

      <RecruitmentServices />

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

      <RecruitmentProof />

      <RecruitmentProcess />

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
