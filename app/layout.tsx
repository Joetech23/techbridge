import type { Metadata, Viewport } from 'next';
import { Sora, Outfit, JetBrains_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { RevealObserver } from '@/components/Motion';
import { CookieBanner } from '@/components/Widgets';
import { site } from '@/lib/content';
import './globals.css';

const sora = Sora({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-sora', display: 'swap' });
const head = Outfit({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-outfit', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  // Proposal §04: lead with the service, name the location, stay under 60 characters.
  title: 'IT Consultancy & Cyber Security Services London | TechBridge',
  description:
    'TechBridge is a London IT consultancy for public bodies, finance firms and growing businesses: AWS cloud architecture, cyber security, penetration testing, data & AI and managed IT.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.legalName,
    title: 'IT Consultancy & Cyber Security Services London | TechBridge',
    description: 'We design your cloud, secure your systems and put your data to work. Then we stay on to run it.',
    locale: 'en_GB',
  },
};

export const viewport: Viewport = { themeColor: '#0A1440' };

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.legalName,
  url: site.url,
  email: site.email,
  logo: `${site.url}/assets/tb-logo.png`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  areaServed: 'GB',
  knowsAbout: ['Cloud architecture', 'AWS', 'Cyber security', 'Penetration testing', 'DevOps', 'Managed IT', 'Data and AI'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sora.variable} ${head.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        {/* Flags JS early so reveal-on-scroll content stays visible without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <RevealObserver />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
