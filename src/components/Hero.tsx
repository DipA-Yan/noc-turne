import { useEffect, useRef } from 'react';
import { profile, roles, socials } from '../data';
import { useTypewriter } from '../hooks';
import { Corners, Icon, Reveal, btnGhost, btnPrimary } from './ui';

/**
 * Hero — an anime key-visual stage with a mouse-driven 3D parallax scene:
 * red sun, rotating halo rings, floating character card and HUD chips,
 * each living on its own translateZ depth.
 */
export default function Hero() {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<HTMLDivElement | null>(null);
  const typed = useTypewriter(roles);

  useEffect(() => {
    const host = hostRef.current;
    const scene = sceneRef.current;
    if (!host || !scene) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      const sx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      const sy = ((e.clientY - r.top) / r.height - 0.5) * 2;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        scene.style.setProperty('--sx', sx.toFixed(3));
        scene.style.setProperty('--sy', sy.toFixed(3));
      });
    };
    const onLeave = () => {
      scene.style.setProperty('--sx', '0');
      scene.style.setProperty('--sy', '0');
    };
    host.addEventListener('mousemove', onMove);
    host.addEventListener('mouseleave', onLeave);
    return () => {
      host.removeEventListener('mousemove', onMove);
      host.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28 md:pt-24">
      {/* section ambience */}
      <div
        aria-hidden
        className="screentone absolute right-0 top-0 h-[46rem] w-[46rem] max-w-full opacity-40 [mask-image:radial-gradient(circle_at_70%_30%,black,transparent_65%)]"
      />
      <span
        aria-hidden
        className="font-jp absolute right-5 top-1/2 hidden -translate-y-1/2 select-none text-base font-bold tracking-[0.55em] text-muted/50 xl:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        主人公の物語 — THE PROTAGONIST ARC
      </span>

      <div
        ref={hostRef}
        className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6"
      >
        {/* ---------------- left : intro ---------------- */}
        <div className="relative z-10 text-center lg:text-left">
          <Reveal>
            <div className="animate-flicker inline-flex items-center gap-3 border border-line bg-ink-900/80 px-4 py-2 clip-tag">
              <span className="animate-pulse-dot h-2 w-2 rounded-full bg-crimson-500" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-paper/85">System Online</span>
              <span className="h-3.5 w-px bg-line" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neon-400">{profile.status}</span>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <p className="font-jp mt-7 text-sm tracking-[0.35em] text-neon-400 md:text-base">
              {profile.jpIntro} <span className="text-muted">— YO, I AM</span>
            </p>
          </Reveal>

          <Reveal delay={160}>
            <h1 className="font-display mt-3 text-[clamp(4.2rem,13vw,8.5rem)] leading-[0.85] tracking-wide">
              <span className="glitch block" data-text={profile.firstName}>
                {profile.firstName}
              </span>
              <span className="text-outline-red block">{profile.lastName}</span>
            </h1>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-5 flex min-h-[2rem] items-center justify-center gap-3 text-lg font-semibold tracking-wide md:min-h-[2.4rem] md:text-2xl lg:justify-start">
              <span className="font-display text-2xl text-crimson-500 md:text-3xl">//</span>
              <span className="text-paper">{typed}</span>
              <span className="animate-blink inline-block h-5 w-2.5 bg-neon-400 md:h-6 md:w-3" />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl lg:mx-0">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={370}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a href="#projects" className={btnPrimary}>
                View My Work
                <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className={btnGhost}>
                Contact
                <Icon
                  name="send"
                  className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-9 flex items-center justify-center gap-3 lg:justify-start">
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted">Follow —</span>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${s.label} (placeholder link)`}
                  title={`${s.label}: ${s.handle} — replace in src/data.ts`}
                  className="grid h-10 w-10 place-items-center border border-line bg-ink-900/70 text-muted clip-corner-sm transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/70 hover:text-crimson-400 hover:shadow-[0_8px_24px_rgba(255,46,79,0.25)]"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------------- right : 3D stage ---------------- */}
        <Reveal from="scale" delay={200} className="relative">
          <div className="hero-stage relative mx-auto aspect-[4/5] w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px]">
            <div ref={sceneRef} className="hero-scene absolute inset-0">
              {/* red sun */}
              <div
                className="layer left-1/2 top-[44%] h-[74%] w-[74%] rounded-full opacity-90"
                style={{
                  transform:
                    'translate(-50%,-50%) translate3d(calc(var(--sx,0)*-24px), calc(var(--sy,0)*-18px), -90px)',
                  background: 'radial-gradient(circle at 35% 30%, #ff5570, #d61f3e 55%, #6d0e21 100%)',
                  filter: 'blur(2px)',
                }}
              />
              {/* dashed halo */}
              <div
                className="layer inset-[2%]"
                style={{ transform: 'translate3d(calc(var(--sx,0)*-14px), calc(var(--sy,0)*-10px), -45px)' }}
              >
                <div className="animate-spin-slow h-full w-full rounded-full border border-dashed border-crimson-500/35" />
              </div>
              {/* outer ring */}
              <div
                className="layer -inset-[4%]"
                style={{ transform: 'translate3d(calc(var(--sx,0)*-8px), calc(var(--sy,0)*-6px), -20px)' }}
              >
                <div className="animate-spin-slow-rev h-full w-full rounded-full border border-neon-400/20" />
              </div>

              {/* character card */}
              <div
                className="layer inset-x-[7%] inset-y-[3%]"
                style={{ transform: 'translate3d(calc(var(--sx,0)*26px), calc(var(--sy,0)*18px), 42px)' }}
              >
                <div className="animate-floaty h-full w-full">
                  <div className="relative h-full w-full overflow-hidden border border-crimson-500/30 bg-ink-900 clip-corner shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                    <img
                      src="/images/hero.png"
                      alt="Anime protagonist — placeholder hero art"
                      className="h-full w-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-ink-950/25" />
                    <div className="scanlines absolute inset-0 opacity-60" />
                    <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                      <div>
                        <p className="font-jp text-[10px] tracking-[0.35em] text-neon-300">{profile.jpName}</p>
                        <p className="font-display mt-1 text-2xl leading-none tracking-[0.12em]">{profile.alias}</p>
                      </div>
                      <span className="bg-crimson-500 px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] text-ink-950 clip-tag">
                        LV.{profile.level}
                      </span>
                    </div>
                    <Corners />
                  </div>
                </div>
              </div>

              {/* HUD chip : class */}
              <div
                className="layer -left-2 top-[12%] sm:-left-7"
                style={{ transform: 'translate3d(calc(var(--sx,0)*40px), calc(var(--sy,0)*26px), 85px)' }}
              >
                <div className="animate-floaty" style={{ animationDelay: '0.6s' }}>
                  <div className="border border-line bg-ink-900/95 px-3.5 py-2 clip-corner-sm backdrop-blur-sm">
                    <p className="text-[9px] font-bold tracking-[0.28em] text-muted">CLASS</p>
                    <p className="font-display mt-0.5 text-lg leading-none tracking-[0.1em] text-crimson-400">
                      FULL-STACK
                    </p>
                  </div>
                </div>
              </div>

              {/* HUD chip : HP */}
              <div
                className="layer -right-1 top-[38%] sm:-right-6"
                style={{ transform: 'translate3d(calc(var(--sx,0)*48px), calc(var(--sy,0)*30px), 100px)' }}
              >
                <div className="animate-floaty" style={{ animationDelay: '1.3s' }}>
                  <div className="border border-line bg-ink-900/95 px-3.5 py-2 clip-corner-sm backdrop-blur-sm">
                    <p className="mb-1.5 text-[9px] font-bold tracking-[0.28em] text-muted">HP</p>
                    <div className="flex gap-1">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <span
                          key={i}
                          className={`h-2.5 w-4 -skew-x-12 ${i < 4 ? 'bg-crimson-500' : 'bg-ink-700'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* HUD chip : MP */}
              <div
                className="layer -left-3 bottom-[15%] sm:-left-9"
                style={{ transform: 'translate3d(calc(var(--sx,0)*34px), calc(var(--sy,0)*22px), 70px)' }}
              >
                <div className="animate-floaty" style={{ animationDelay: '2s' }}>
                  <div className="border border-neon-400/40 bg-ink-900/95 px-3 py-1.5 text-[10px] font-bold tracking-[0.25em] text-neon-300 clip-tag backdrop-blur-sm">
                    MP — CODING ∞
                  </div>
                </div>
              </div>

              {/* floating kanji */}
              <div
                className="layer right-[5%] top-[3%]"
                style={{ transform: 'translate3d(calc(var(--sx,0)*56px), calc(var(--sy,0)*38px), 120px)' }}
              >
                <span
                  className="font-jp animate-floaty block text-3xl font-black text-crimson-500 drop-shadow-[0_0_18px_rgba(255,46,79,0.55)]"
                  style={{ animationDelay: '0.9s' }}
                >
                  主人公
                </span>
              </div>

              {/* ground glow */}
              <div
                className="layer bottom-[-5%] left-1/2 h-12 w-[72%] rounded-[100%] bg-crimson-500/25 blur-2xl"
                style={{ transform: 'translateX(-50%) translate3d(calc(var(--sx,0)*18px), 0px, 10px)' }}
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex" aria-hidden>
        <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-muted">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-line p-1">
          <span className="animate-scroll-wheel h-2 w-1 rounded-full bg-crimson-500" />
        </span>
      </div>
    </section>
  );
}
