import Link from 'next/link';
import { hostingPlans } from '@/lib/services';
import { ArrowDisc, CheckIcon, vars } from './Icons';
import { Head } from './page/Cards';

export default function HostingPlans() {
  return (
    <section className="tint-band section-pad" id="plans">
      <div className="container">
        <Head label="Plans" title="Compare hosting plans side by side." side={<p>Every plan includes SSL, backups and security updates. Prices are confirmed when you order, based on your site.</p>} />
        <div className="plans">
          {hostingPlans.map((p, i) => (
            <div key={p.name} className={`plan${p.featured ? ' is-featured' : ''}`} data-reveal style={vars({ '--d': i * 100 })}>
              {p.featured && <span className="plan-badge">Most popular</span>}
              <span className="plan-name">{p.name}</span>
              <span className="plan-for">{p.for}</span>
              <ul className="plan-features">
                {p.features.map((f) => (
                  <li key={f}>
                    <CheckIcon size={15} /> {f}
                  </li>
                ))}
              </ul>
              <Link href={`/contact?tab=quote&service=${encodeURIComponent('Hosting Packages')}`} className={`btn ${p.featured ? 'btn-primary' : 'btn-outline'} plan-cta`}>
                Order {p.name} <ArrowDisc />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
