import { NAV, profile, socials } from '../data';
import { Icon } from './ui';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-line bg-ink-900/60">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="font-display grid h-9 w-9 place-items-center bg-crimson-500 text-xl text-ink-950 clip-corner-sm transition-colors duration-300 group-hover:bg-crimson-400">
                K
              </span>
              <span className="font-display text-2xl tracking-[0.08em]">
                KAIRO<span className="text-crimson-500">.</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center border border-line bg-ink-950/60 text-muted clip-corner-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-500/70 hover:text-crimson-400"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-xl tracking-[0.1em] text-paper/90">
              MAP <span className="text-crimson-500">//</span> <span className="font-jp text-sm text-muted">地図</span>
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className="group inline-flex items-center gap-2 font-semibold tracking-wide text-muted transition-colors duration-200 hover:text-crimson-400"
                  >
                    <span className="font-display text-xs text-crimson-500/70">0{i + 1}</span>
                    {n.label}
                    <Icon
                      name="arrowRight"
                      className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-xl tracking-[0.1em] text-paper/90">
              BASE <span className="text-crimson-500">//</span> <span className="font-jp text-sm text-muted">拠点</span>
            </p>
            <ul className="mt-4 space-y-2.5 font-semibold text-muted">
              <li className="flex items-center gap-2.5">
                <Icon name="mail" className="h-4 w-4 text-crimson-500/80" />
                <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-crimson-400">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="pin" className="h-4 w-4 text-crimson-500/80" />
                {profile.location}
              </li>
              <li className="flex items-center gap-2.5">
                <Icon name="zap" className="h-4 w-4 text-crimson-500/80" />
                {profile.status}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-muted md:flex-row md:px-8">
          <p>
            © {year} <span className="font-bold text-paper/80">{profile.alias}</span> — all rights reserved. Dummy data
            lives in <code className="text-neon-300">src/data.ts</code>, swap it with your real info.
          </p>
          <p className="flex items-center gap-2">
            Forged with <span className="text-crimson-500">⚔</span> code &amp; ramen
            <a
              href="#home"
              aria-label="Back to top"
              className="ml-3 grid h-9 w-9 place-items-center border border-line bg-ink-950/60 text-paper/80 clip-corner-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-500/70 hover:text-crimson-400"
            >
              <Icon name="arrowUpRight" className="h-4 w-4 -rotate-45" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
