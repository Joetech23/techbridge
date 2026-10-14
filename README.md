# TechBridge: website (Next.js)

Website for **TechBridge Consultancy Ltd** (teckbridge.co.uk), built from the Claude Design handoff
"TechBridge Home v2" and the Eaglescroft website proposal (ref. ETB-2610-01).

## Design direction

The client asked for the feel of ubdsdigital.com with TechBridge's own logo, colours and content:
full-screen photo heroes with a transparent header, heavy uppercase headings (Outfit 800), square
corners, pill buttons with arrows, and a checkered-squares motif (`Pixels` in `components/Icons.tsx`).
Navy is the dark, royal blue the bold accent, pale blue (`--peri`) the tint, amber the highlight.
Layout ideas are borrowed; all copy, photography and code are TechBridge's own.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node.js 20+. Every page is statically generated.

## Pages (proposal §02)

| Route | Page |
| --- | --- |
| `/` | Home |
| `/industries/public-sector`, `/financial-services`, `/sme-enterprise` | Industry pages (01–03) |
| `/services/[slug]` | 10 service pages (04–13), AWS page carries the full §03 content |
| `/case-studies` | Case studies, filtered by industry and service (14) |
| `/insights`, `/insights/[slug]` | Insights index and four articles, incl. an interactive DevOps checklist (15) |
| `/about`, `/team`, `/accreditations`, `/careers` | Company pages (16–19), careers has an application form |
| `/contact` | Booking, quote request and general message (20) |
| `/privacy`, `/cookies`, `/terms` | Legal pages (drafts) |
| `/sitemap.xml`, `/robots.txt` | Generated from the data files |

## Structure

```
app/                  routes; layout.tsx holds header, footer, chat, cookie banner
  api/contact/        POST endpoint: booking, quote, contact, careers, newsletter
components/           homepage sections, Header, Footer, Contact, Faq, forms
  page/               PageHero (breadcrumbs + JSON-LD), cards, LegalPage
lib/
  content.ts          site details, photos, homepage copy
  services.ts         all 10 services: copy, SEO titles, FAQs, hosting plans
  industries.ts       the 3 sectors
  cases.ts            case studies (samples)
  insights.ts         articles and the DevOps checklist questions
  company.ts          values, disciplines, team, partners, careers
  legal.ts            privacy, cookies and terms copy
  nav.ts              menus, footer links and the site search index
```

Every page has its own title (under 60 characters, per proposal §04), description, canonical URL and
breadcrumb structured data. FAQ sections also emit FAQ structured data.

## Content still needed from the client (proposal §06, Day 1)

- **Photography**: every photo is a free Unsplash placeholder listed in `img` in `lib/content.ts`.
  Swap in TechBridge's own photos (put them in `/public`, e.g. `/photos/team.jpg`, and replace the ids with those paths).
- **Team**: seven members are live from `team` in `lib/company.ts`, photos in `/public/team`. Still needed: bios for Calvin Agu and Kaustuv Prajapati, Dr. James's profile, better headshots for Calvin and Kaustuv, and certifications.
- **Accreditations**: `accreditations` in `lib/company.ts`.
- **Case studies**: real stories in `lib/cases.ts` (currently samples from the design).
- **Hosting plans**: confirm features and prices in `hostingPlans` in `lib/services.ts`.
- **Contact details**: `phone`, `linkedin`, `clientPortal`, `knowledgeBase` in `site`. WhatsApp and live chat are off by decision (13 Oct).
- **Client logos and testimonials**: `site.clientLogos`; testimonials can be added to the About page.
- **Legal pages**: draft copy in `lib/legal.ts`. Must be reviewed by a qualified adviser before launch.

## To wire up

- **Form email.** `app/api/contact/route.ts` routes careers applications to onboarding@techbridgedigital.co.uk and
  everything else to hello@techbridgedigital.co.uk. Set `RESEND_API_KEY` and `MAIL_FROM` (a verified sender on the
  domain) in the hosting environment to actually send; without them submissions are only logged. The route needs a
  Node server, so a pure static export to cPanel will not run it.
- **LinkedIn.** Add the page URL to `site.linkedin` in `lib/content.ts` when DGCL has it live.
- **Careers openings.** Edit `opportunities` in `lib/company.ts`; job type, location and remote flags still need confirming.
- Analytics (GA4) should only load after “Accept all” in the cookie banner.

## Motion

All animation is CSS plus small client hooks (no animation library). Everything respects
`prefers-reduced-motion`, and content stays visible without JavaScript.
