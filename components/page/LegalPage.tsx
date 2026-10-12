import { legal } from '@/lib/legal';
import PageHero from './PageHero';

export default function LegalPage({ kind }: { kind: keyof typeof legal }) {
  const doc = legal[kind];
  return (
    <>
      <PageHero crumbs={[{ label: doc.title }]} label="Legal" title={doc.title} lede={`Last updated ${doc.updated}.`} />
      <section className="container section-pad no-top">
        <div className="prose legal">
          {doc.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              {b.p?.map((t) => <p key={t}>{t}</p>)}
              {b.list && (
                <dl className="prose-list">
                  {b.list.map((l) => (
                    <div key={l.t}>
                      <dt>{l.t}</dt>
                      <dd>{l.d}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
