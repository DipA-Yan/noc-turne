import { about, profile, stats } from '../data';
import { Corners, CountUp, Icon, Reveal, SectionHeading, btnGhost } from './ui';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="01"
          kanji="自分"
          eyebrow="About Me"
          title="THE PROTAGONIST"
          sub="Every good arc needs an origin story. Here's mine — placeholder edition, ready to be rewritten with your real lore."
        />

        <div className="grid items-start gap-14 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* portrait */}
          <Reveal from="left">
            <div className="group relative mx-auto max-w-md lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-3 translate-x-3 translate-y-3 border border-crimson-500/35 clip-corner transition-transform duration-500 group-hover:translate-x-1.5 group-hover:translate-y-1.5"
              />
              <div aria-hidden className="screentone absolute -left-8 -top-8 h-32 w-32 opacity-60" />
              <div className="relative border border-line bg-ink-900 clip-corner">
                <div className="overflow-hidden">
                  <img
                    src="/images/about.jpg"
                    alt="Late-night coding session — placeholder portrait"
                    className="aspect-[10/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="scanlines pointer-events-none absolute inset-0 opacity-40" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink-950/85 px-5 py-3 backdrop-blur-sm">
                  <span className="font-jp text-xs tracking-[0.35em] text-neon-300">主人公</span>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-paper/80">Protagonist</span>
                </div>
                <Corners />
              </div>
              <div className="absolute -top-4 -right-3 rotate-6 bg-crimson-500 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-ink-950 clip-tag shadow-[0_8px_24px_rgba(255,46,79,0.4)]">
                S-RANK DEV
              </div>
            </div>
          </Reveal>

          {/* story */}
          <div>
            <Reveal delay={100}>
              <p className="text-lg leading-relaxed text-paper/85 md:text-xl">{about.p1}</p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">{about.p2}</p>
            </Reveal>

            <Reveal delay={250}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-line py-6 sm:grid-cols-3">
                {about.details.map((d) => (
                  <div key={d.k}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.3em] text-crimson-400">{d.k}</dt>
                    <dd className="mt-1 break-words font-semibold text-paper/90">{d.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={profile.resumeUrl} className={btnGhost} title="Placeholder — point resumeUrl in src/data.ts to your CV">
                  <Icon name="download" className="h-4 w-4" />
                  Download CV
                  <span className="text-[10px] font-semibold normal-case tracking-normal text-muted">(placeholder)</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
                {stats.map((s) => (
                  <CountUp key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
