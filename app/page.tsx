import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import { AccentBand, CaseRow, Engagement, InsightsRow, ProcessRow, Statement, StatsMosaic, Trusted, WhyCircles } from '@/components/HomeSections';
import Industries from '@/components/Industries';
import ServiceTabs from '@/components/ServiceTabs';

export default function Home() {
  return (
    <>
      <Hero />
      <Trusted />
      <Statement />
      <WhyCircles />
      <AccentBand />
      <CaseRow />
      <ServiceTabs />
      <Industries />
      <InsightsRow />
      <ProcessRow />
      <StatsMosaic />
      <Engagement />
      <Contact />
    </>
  );
}
