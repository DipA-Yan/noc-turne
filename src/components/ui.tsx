import type { CSSProperties, ReactNode } from 'react';
import { useCountUp, useInView, useTilt } from '../hooks';

/* ------------------------------------------------------------------ */
/*  Inline SVG icon set (stroke style)                                 */
/* ------------------------------------------------------------------ */
export type IconName =
  | 'github' | 'linkedin' | 'twitter' | 'instagram'
  | 'mail' | 'phone' | 'pin'
  | 'arrowRight' | 'arrowUpRight' | 'menu' | 'close'
  | 'send' | 'check' | 'zap' | 'cap' | 'download';

export function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    github: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    twitter: (
      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    ),
    instagram: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
    mail: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    pin: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
    arrowRight: (
      <>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </>
    ),
    arrowUpRight: (
      <>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </>
    ),
    menu: (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    ),
    close: (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ),
    send: (
      <>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </>
    ),
    check: <polyline points="20 6 9 17 4 12" />,
    zap: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
    cap: (
      <>
        <path d="M22 10 12 5 2 10l10 5 10-5z" />
        <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
      </>
    ),
    download: (
      <>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Scroll reveal wrapper                                              */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  delay = 0,
  from = 'up',
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  from?: 'up' | 'left' | 'right' | 'scale';
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal reveal-${from} ${inView ? 'is-in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  HUD corner brackets                                                */
/* ------------------------------------------------------------------ */
export function Corners({ className = '' }: { className?: string }) {
  const b = 'absolute h-4 w-4 border-crimson-500/80';
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 z-10 ${className}`}>
      <span className={`${b} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${b} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${b} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${b} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section heading with kanji watermark                               */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  index,
  kanji,
  eyebrow,
  title,
  sub,
}: {
  index: string;
  kanji: string;
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="relative mb-12 md:mb-16">
      <span
        aria-hidden
        className="font-jp text-outline-red pointer-events-none absolute -top-7 left-0 select-none text-[5.2rem] font-black leading-none opacity-70 md:-top-12 md:text-[8.5rem]"
      >
        {kanji}
      </span>
      <Reveal from="left" className="relative">
        <div className="flex items-center gap-4">
          <span className="h-2.5 w-2.5 rotate-45 bg-crimson-500" />
          <span className="text-xs font-bold uppercase tracking-[0.38em] text-neon-400 md:text-sm">
            {index} <span className="text-muted">//</span> {eyebrow}
          </span>
          <span className="h-px w-14 bg-line md:w-28" />
          <span className="font-jp hidden text-[11px] tracking-[0.35em] text-muted sm:block">{kanji}</span>
        </div>
        <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-wide md:text-7xl">{title}</h2>
        {sub ? <p className="mt-4 max-w-2xl text-lg text-muted">{sub}</p> : null}
      </Reveal>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  3D tilt card                                                       */
/* ------------------------------------------------------------------ */
export function TiltCard({
  children,
  className = '',
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useTilt<HTMLDivElement>(max);
  return (
    <div ref={ref} className={`tilt ${className}`}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Marquee strip                                                      */
/* ------------------------------------------------------------------ */
export function Marquee({
  items,
  reverse = false,
  duration = 30,
}: {
  items: readonly string[];
  reverse?: boolean;
  duration?: number;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-ink-900/70 py-3.5">
      <div
        className="marquee-track flex w-max items-center"
        style={
          {
            '--marquee-dur': `${duration}s`,
            animationDirection: reverse ? 'reverse' : undefined,
          } as CSSProperties
        }
      >
        {row.map((it, i) => (
          <span key={`${it}-${i}`} className="flex items-center">
            <span
              className={`font-display px-6 text-2xl tracking-wider md:text-3xl ${
                i % 2 === 1 ? 'text-outline' : 'text-paper/85'
              }`}
            >
              {it}
            </span>
            <span className="text-sm text-crimson-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Animated stat counter                                              */
/* ------------------------------------------------------------------ */
export function CountUp({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const n = useCountUp(value, inView);
  return (
    <div ref={ref} className="group">
      <div className="font-display text-4xl leading-none md:text-5xl">
        <span className="text-crimson-500 transition-colors duration-300 group-hover:text-crimson-400">{n}</span>
        <span className="text-paper/70">{suffix}</span>
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">{label}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Shared button styles                                               */
/* ------------------------------------------------------------------ */
export const btnPrimary =
  'group inline-flex items-center justify-center gap-2.5 bg-crimson-500 px-7 py-3.5 clip-corner-sm text-sm font-bold uppercase tracking-[0.22em] text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-crimson-400 hover:shadow-[0_10px_34px_rgba(255,46,79,0.35)]';

export const btnGhost =
  'group inline-flex items-center justify-center gap-2.5 border border-line bg-ink-800/60 px-7 py-3.5 clip-corner-sm text-sm font-bold uppercase tracking-[0.22em] text-paper/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson-500/70 hover:text-crimson-400';
