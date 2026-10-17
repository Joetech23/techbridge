import type { Block } from './insights';
import { site } from './content';

// DRAFT legal copy. TechBridge must have these reviewed by a qualified adviser before launch.
const addr = `${site.legalName}, ${site.address.street}, ${site.address.city} ${site.address.postcode}`;

export const legal: Record<'privacy' | 'cookies' | 'terms', { title: string; seoTitle: string; desc: string; updated: string; body: Block[] }> = {
  privacy: {
    title: 'Privacy policy',
    seoTitle: 'Privacy Policy | TechBridge',
    desc: 'How TechBridge Consultancy collects, uses and protects your personal data.',
    updated: 'October 2026',
    body: [
      { p: [`This policy explains how ${site.legalName} (“TechBridge”, “we”, “us”) collects and uses personal data when you use this website or contact us. We are the data controller for this information.`] },
      {
        h: 'What we collect',
        list: [
          { t: 'Enquiries', d: 'Your name, email address, organisation and the details you share when you send us a message through the contact form.' },
          { t: 'Careers applications', d: 'Your name, email address, the opportunity you’re interested in, any links you share and what you tell us about yourself.' },
          { t: 'Newsletter', d: 'Your email address, if you subscribe to the TechBridge briefing.' },
          { t: 'Website usage', d: 'Technical information such as pages visited and device type. Analytics cookies are only used with your consent.' },
        ],
      },
      {
        h: 'How we use it',
        p: [
          'To respond to your enquiry, assess job and placement applications and send the newsletter you asked for. Our lawful bases are your consent, steps taken at your request before entering a contract, and our legitimate interest in running and improving our business.',
          'We do not sell your personal data.',
        ],
      },
      {
        h: 'Sharing and storage',
        p: ['We use trusted service providers to host this website and to manage email, scheduling and customer records. They process data only on our instructions. Where data is transferred outside the UK, we use appropriate safeguards.'],
      },
      {
        h: 'How long we keep it',
        p: ['We keep enquiry and client records for as long as needed to provide our services and meet legal obligations. Unsuccessful careers applications and newsletter data are deleted when no longer needed or when you ask us to.'],
      },
      {
        h: 'Your rights',
        p: [
          `Under UK GDPR you can ask to access, correct or delete your data, object to or restrict processing, and withdraw consent at any time. Email ${site.email} to make a request.`,
          'You can also complain to the Information Commissioner’s Office (ico.org.uk) if you’re unhappy with how we handle your data.',
        ],
      },
      { h: 'Contact', p: [`${addr}. Email: ${site.email}.`] },
    ],
  },
  cookies: {
    title: 'Cookie policy',
    seoTitle: 'Cookie Policy | TechBridge',
    desc: 'How TechBridge uses cookies on this website and how to manage your preferences.',
    updated: 'October 2026',
    body: [
      { p: ['Cookies are small files stored on your device when you visit a website. We use as few as possible, and only use non-essential cookies with your consent.'] },
      {
        h: 'Cookies we use',
        list: [
          { t: 'Essential', d: 'Needed for the site to work, including remembering your cookie preference. These cannot be switched off.' },
          { t: 'Analytics (optional)', d: 'Help us understand how visitors use the site so we can improve it. Only set if you choose “Accept all”.' },
        ],
      },
      {
        h: 'Managing your preferences',
        p: [
          'You can change your choice at any time by clearing this site’s data in your browser, which will show the cookie banner again. You can also block cookies in your browser settings, although some features may not work as expected.',
        ],
      },
      { h: 'Contact', p: [`Questions about cookies? Email ${site.email}.`] },
    ],
  },
  terms: {
    title: 'Terms of use',
    seoTitle: 'Terms of Use | TechBridge',
    desc: 'The terms that apply when you use the TechBridge Consultancy website.',
    updated: 'October 2026',
    body: [
      { p: [`These terms apply to your use of this website, operated by ${site.legalName}. By using the site, you accept them. Our consulting services are provided under separate written agreements.`] },
      {
        h: 'Using this website',
        p: ['You may view and share content from this site for personal or internal business use. You must not misuse the site, attempt to gain unauthorised access, or interfere with its operation.'],
      },
      {
        h: 'Information on this site',
        p: ['Content is provided for general information and does not constitute professional advice for your specific situation. We aim to keep it accurate and up to date but make no guarantees. Contact us for advice tailored to your organisation.'],
      },
      {
        h: 'Intellectual property',
        p: ['The content, design and branding on this site belong to TechBridge or our licensors. Third-party names and logos belong to their respective owners.'],
      },
      {
        h: 'Liability',
        p: ['To the extent permitted by law, we are not liable for any loss arising from use of this website. Nothing in these terms limits liability that cannot be limited under English law.'],
      },
      { h: 'Governing law', p: ['These terms are governed by the laws of England and Wales.'] },
      { h: 'Contact', p: [`${addr}. Email: ${site.email}.`] },
    ],
  },
};
