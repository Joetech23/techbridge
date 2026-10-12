import type { CSSProperties } from 'react';

/** Cast an object of CSS custom properties for the `style` prop. */
export const vars = (o: Record<string, string | number>) => o as CSSProperties;

type P = { size?: number; className?: string };

const Line = ({ size = 20, className, children }: P & { children: React.ReactNode }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    {children}
  </svg>
);

export const ArrowUpRight = ({ size = 14, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M3 11L11 3M11 3H4.5M11 3V9.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

export const ArrowRight = ({ size = 14, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M1.5 7H12.5M12.5 7L8 2.5M12.5 7L8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Chevron = ({ size = 12, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
    <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Plus = ({ size = 14, className }: P) => (
  <svg className={className} width={size} height={size} viewBox="0 0 14 14" fill="none" aria-hidden>
    <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const SearchIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <circle cx="7" cy="7" r="5.2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M11 11L14.5 14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export const CalendarIcon = ({ size = 18 }: P) => (
  <Line size={size}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10H20.5M8 3V6.5M16 3V6.5" />
  </Line>
);

export const MailIcon = ({ size = 18 }: P) => (
  <Line size={size}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="M3.5 6.5L12 13L20.5 6.5" />
  </Line>
);

export const PinIcon = ({ size = 18 }: P) => (
  <Line size={size}>
    <path d="M12 21C12 21 19 14.8 19 9.5C19 5.6 15.9 3 12 3C8.1 3 5 5.6 5 9.5C5 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Line>
);

export const ClockIcon = ({ size = 18 }: P) => (
  <Line size={size}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12L15 14" />
  </Line>
);

export const CheckIcon = ({ size = 16, className }: P) => (
  <Line size={size} className={className}>
    <path d="M5 12.5L10 17L19 7.5" />
  </Line>
);

export const ChatIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
    <path d="M4 5.5C4 4.67 4.67 4 5.5 4H16.5C17.33 4 18 4.67 18 5.5V13.5C18 14.33 17.33 15 16.5 15H9L5 18.5V15H5.5C4.67 15 4 14.33 4 13.5V5.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
  </svg>
);

export const CloseIcon = ({ size = 16 }: P) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M3.5 3.5L12.5 12.5M12.5 3.5L3.5 12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

export const CheckDraw = () => (
  <svg className="check-draw" width="22" height="22" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M4 10.5L8 14.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Line icons for the "Why TechBridge" cards.
export const WhyIcon = ({ name }: { name: 'flask' | 'scale' | 'compass' | 'shield' }) => (
  <Line size={24}>
    {name === 'flask' && <path d="M9.5 3H14.5M10 3V9L4.8 17.6C4 19 5 20.5 6.6 20.5H17.4C19 20.5 20 19 19.2 17.6L14 9V3M7.5 14.5H16.5" />}
    {name === 'scale' && <path d="M12 3.5V20.5M7 20.5H17M5 7.5H19M5 7.5L2.5 13.5C2.5 15 3.6 16 5 16C6.4 16 7.5 15 7.5 13.5L5 7.5ZM19 7.5L16.5 13.5C16.5 15 17.6 16 19 16C20.4 16 21.5 15 21.5 13.5L19 7.5Z" />}
    {name === 'compass' && (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z" />
      </>
    )}
    {name === 'shield' && <path d="M12 3L19.5 6V11.5C19.5 16 16.3 19.6 12 21C7.7 19.6 4.5 16 4.5 11.5V6L12 3ZM8.8 12L11 14.2L15.4 9.8" />}
  </Line>
);

/** Trailing arrow for pill buttons; slides on hover. */
export const ArrowDisc = () => (
  <span className="arrow-disc" aria-hidden>
    <ArrowRight size={15} />
  </span>
);

// Line icons for services, keyed by slug.
export const ServiceIcon = ({ slug, size = 26 }: { slug: string; size?: number }) => {
  const paths: Record<string, React.ReactNode> = {
    'aws-solutions-architect': <path d="M7 18.5H17.5C19.7 18.5 21.5 16.8 21.5 14.6C21.5 12.6 20 11 18 10.8C17.6 7.8 15.1 5.5 12 5.5C9.3 5.5 7 7.3 6.3 9.8C4.1 10.1 2.5 11.9 2.5 14.1C2.5 16.5 4.5 18.5 7 18.5Z" />,
    cybersecurity: <path d="M12 3L19.5 6V11.5C19.5 16 16.3 19.6 12 21C7.7 19.6 4.5 16 4.5 11.5V6L12 3ZM8.8 12L11 14.2L15.4 9.8" />,
    'penetration-testing': (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 1.5V5M12 19V22.5M1.5 12H5M19 12H22.5" />
      </>
    ),
    'digital-consulting': (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M15.5 8.5L13.5 13.5L8.5 15.5L10.5 10.5L15.5 8.5Z" />
      </>
    ),
    'devops-maturity-assessment': <path d="M7.5 9C5.3 9 3.5 10.3 3.5 12C3.5 13.7 5.3 15 7.5 15C11 15 13 9 16.5 9C18.7 9 20.5 10.3 20.5 12C20.5 13.7 18.7 15 16.5 15C13 15 11 9 7.5 9Z" />,
    'data-ai-ml': <path d="M4 20V4M4 20H20M8 16V11M12 16V7M16 16V13" />,
    'managed-it-services': <path d="M4.5 13V12C4.5 7.9 7.9 4.5 12 4.5C16.1 4.5 19.5 7.9 19.5 12V13M4.5 13H7V18H5.5C4.9 18 4.5 17.6 4.5 17V13ZM19.5 13H17V18H18.5C19.1 18 19.5 17.6 19.5 17V13ZM19.5 18C19.5 19.7 17.5 20.5 14 20.5" />,
    'cloud-hosting': (
      <>
        <rect x="3.5" y="4.5" width="17" height="6" rx="1.5" />
        <rect x="3.5" y="13.5" width="17" height="6" rx="1.5" />
        <path d="M7 7.5H7.01M7 16.5H7.01" />
      </>
    ),
    'hosting-packages': <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3ZM4 7.5L12 12M12 12L20 7.5M12 12V21" />,
    'web-digital': (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12H20.5M12 3.5C14.3 6 15.5 8.9 15.5 12C15.5 15.1 14.3 18 12 20.5C9.7 18 8.5 15.1 8.5 12C8.5 8.9 9.7 6 12 3.5Z" />
      </>
    ),
  };
  return <Line size={size}>{paths[slug] ?? paths['digital-consulting']}</Line>;
};

/**
 * Brand motif drawn from the TechBridge mark: the slanted bar from the top of the "T",
 * stacked like bridge spans, plus the amber wedge. Bars slide in, then drift on a loop.
 * tone: 'light' on dark photos, 'ghost' on the blue band, 'mixed' over light sections.
 */
export const Motif = ({ className = '', tone = 'light' }: { className?: string; tone?: 'light' | 'ghost' | 'mixed' }) => (
  <div className={`motif tone-${tone} ${className}`} aria-hidden>
    <span className="span-bar s1" />
    <span className="span-bar s2" />
    <span className="span-bar s3" />
    <span className="span-wedge" />
  </div>
);
