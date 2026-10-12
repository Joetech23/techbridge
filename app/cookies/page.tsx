import type { Metadata } from 'next';
import LegalPage from '@/components/page/LegalPage';
import { legal } from '@/lib/legal';

const doc = legal.cookies;
export const metadata: Metadata = { title: doc.seoTitle, description: doc.desc, alternates: { canonical: '/cookies' } };

export default function Page() {
  return <LegalPage kind="cookies" />;
}