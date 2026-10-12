import Link from 'next/link';
import { ArrowDisc, Motif } from '@/components/Icons';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="gutter">
        <span className="label on-dark">
          <span className="label-dot" /> Error 404
        </span>
        <h1 className="page-title">This bridge doesn’t go anywhere.</h1>
        <p className="page-hero-lede">The page you’re looking for has moved or doesn’t exist. Try the homepage, or search with Ctrl + K.</p>
        <div className="page-hero-actions">
          <Link href="/" className="btn btn-light">
            Back to home <ArrowDisc />
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Contact us <ArrowDisc />
          </Link>
        </div>
      </div>
      <Motif className="page-hero-pixels" />
    </section>
  );
}
