import { useEffect, useState } from 'react';
import { NAV, NAV_IDS, socials } from '../data';
import { useScrollSpy } from '../hooks';
import { Icon } from './ui';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const active = useScrollSpy(NAV_IDS);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-line bg-ink-950/90 backdrop-blur-md shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      {/* reading progress */}
      <div className="absolute left-0 top-0 h-[2px] w-full bg-ink-700/30">
        <div
          className="h-full origin-left bg-crimson-500 shadow-[0_0_10px_rgba(255,46,79,0.8)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="font-display grid h-9 w-9 place-items-center bg-crimson-500 text-xl text-ink-950 clip-corner-sm transition-colors duration-300 group-hover:bg-crimson-400">
            K
          </span>
          <span className="font-display text-2xl tracking-[0.08em]">
            KAIRO<span className="text-crimson-500">.</span>
          </span>
          <span className="font-jp hidden text-[10px] tracking-[0.3em] text-muted sm:block">ポートフォリオ</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`relative pb-1 text-[13px] font-bold uppercase tracking-[0.18em] transition-colors duration-200 ${
                  active === n.id ? 'text-crimson-400' : 'text-muted hover:text-paper'
                }`}
              >
                <span className="font-jp mr-1.5 text-[10px] opacity-60">{n.jp}</span>
                {n.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-crimson-500 transition-all duration-300 ${
                    active === n.id ? 'w-full' : 'w-0'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden items-center gap-2 border border-crimson-500/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-crimson-400 clip-corner-sm transition-all duration-300 hover:bg-crimson-500 hover:text-ink-950 lg:inline-flex"
        >
          <Icon name="zap" className="h-3.5 w-3.5" />
          Hire Me
        </a>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center border border-line bg-ink-900/70 text-paper clip-corner-sm transition-colors hover:border-crimson-500/60 hover:text-crimson-400 lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-line bg-ink-950/95 backdrop-blur-md transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[480px] border-b opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-1 px-5 py-5">
          {NAV.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 border-l-2 px-4 py-3 transition-all duration-200 ${
                  active === n.id
                    ? 'border-crimson-500 bg-crimson-500/10 text-crimson-400'
                    : 'border-line text-paper/80 hover:border-crimson-500/50 hover:bg-ink-900 hover:text-paper'
                }`}
              >
                <span className="font-display text-sm text-muted">0{i + 1}</span>
                <span className="font-jp text-xs tracking-[0.3em] text-muted">{n.jp}</span>
                <span className="font-display text-2xl tracking-[0.1em]">{n.label.toUpperCase()}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 px-6 pb-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center border border-line bg-ink-900/70 text-muted clip-corner-sm transition-colors hover:border-crimson-500/70 hover:text-crimson-400"
            >
              <Icon name={s.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
