import { projects } from '../data';
import { Corners, Icon, Reveal, SectionHeading, TiltCard } from './ui';

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="04"
          kanji="作品"
          eyebrow="Projects"
          title="SELECTED WORKS"
          sub="Side quests and boss fights, shipped. Every card tilts in 3D on hover — swap in your real repos and live demos."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 100} className={p.featured ? 'md:col-span-2' : ''}>
              <TiltCard className="group relative h-full overflow-hidden border border-line bg-ink-900/70 clip-corner transition-colors duration-300 hover:border-crimson-500/55">
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                  aria-label={`${p.title} — live demo (placeholder link)`}
                >
                  <div className={`relative overflow-hidden ${p.featured ? 'aspect-[16/8]' : 'aspect-video'}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent" />
                    <div className="scanlines pointer-events-none absolute inset-0 opacity-50" />
                    <span className="font-jp absolute right-4 top-1 select-none text-6xl font-black text-paper/10 md:text-7xl">
                      {p.jp}
                    </span>
                    <span className="font-display text-outline absolute left-4 top-3 text-4xl md:text-5xl">{p.id}</span>
                    {p.featured && (
                      <span className="absolute bottom-3 left-4 bg-crimson-500 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-ink-950 clip-tag">
                        ★ FEATURED
                      </span>
                    )}
                    <span className="absolute inset-0 grid place-items-center bg-ink-950/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="border border-crimson-500 bg-ink-950/90 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-crimson-400 clip-corner-sm">
                        Open Quest ↗
                      </span>
                    </span>
                  </div>
                </a>

                <div className="relative p-6">
                  <div className="mb-2.5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em]">
                    <span className="bg-crimson-500/15 px-2.5 py-1 text-crimson-400 clip-tag">{p.type}</span>
                    <span className="text-muted">{p.year}</span>
                    <span className="ml-auto flex gap-3">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} live demo (placeholder)`}
                        className="text-muted transition-colors duration-200 hover:text-neon-300"
                      >
                        <Icon name="arrowUpRight" className="h-[18px] w-[18px]" />
                      </a>
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} source code (placeholder)`}
                        className="text-muted transition-colors duration-200 hover:text-neon-300"
                      >
                        <Icon name="github" className="h-[18px] w-[18px]" />
                      </a>
                    </span>
                  </div>
                  <h3 className="font-display text-3xl tracking-wide transition-colors duration-300 group-hover:text-crimson-400">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{p.desc}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-line bg-ink-800/70 px-2.5 py-1 text-[11px] font-bold tracking-[0.15em] text-paper/70 clip-tag"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <Corners className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </TiltCard>
            </Reveal>
          ))}

          {/* placeholder filler card */}
          <Reveal delay={200}>
            <a
              href="#contact"
              className="group flex h-full min-h-[300px] flex-col items-center justify-center gap-4 border border-dashed border-line bg-transparent p-8 text-center clip-corner transition-all duration-300 hover:-translate-y-1 hover:border-crimson-500/60 hover:bg-ink-900/50"
            >
              <span className="font-jp text-outline-red text-5xl font-black transition-colors duration-300 group-hover:text-crimson-500/60">
                工事
              </span>
              <span className="font-display text-3xl tracking-wide">NEXT QUEST LOADING…</span>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-muted">
                Your project could live here — <span className="text-crimson-400">hire me</span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
