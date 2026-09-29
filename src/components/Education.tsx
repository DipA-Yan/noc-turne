import { education } from '../data';
import { Corners, Icon, Reveal, SectionHeading } from './ui';

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="02"
          kanji="経歴"
          eyebrow="Education"
          title="TRAINING ARC"
          sub="The academy episodes — where the stats were ground out. Swap in your real schools, degrees and grades."
        />

        <div className="relative ml-2 md:ml-4">
          <span
            aria-hidden
            className="absolute bottom-2 left-0 top-2 w-px bg-gradient-to-b from-crimson-500 via-line to-transparent"
          />
          <ol className="space-y-8">
            {education.map((e, i) => (
              <li key={e.school} className="relative pl-9 md:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-7 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-2 border-crimson-500 bg-ink-950 shadow-[0_0_14px_rgba(255,46,79,0.55)]"
                />
                <Reveal delay={i * 90}>
                  <div className="group relative border border-line bg-ink-900/70 p-6 clip-corner transition-all duration-300 hover:border-crimson-500/60 hover:bg-ink-900 md:p-7">
                    <Corners className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="bg-crimson-500/15 px-3.5 py-1 text-xs font-bold tracking-[0.22em] text-crimson-400 clip-tag">
                        {e.period}
                      </span>
                      <span className="ml-auto flex items-center gap-2 bg-neon-400/10 px-3.5 py-1 text-xs font-bold tracking-[0.22em] text-neon-300 clip-tag">
                        <Icon name="cap" className="h-3.5 w-3.5" />
                        {e.grade}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl tracking-wide transition-colors duration-300 group-hover:text-crimson-400 md:text-3xl">
                      {e.school}
                    </h3>
                    <p className="mt-0.5 font-bold tracking-wide text-paper/90">{e.degree}</p>
                    <p className="mt-2.5 max-w-2xl leading-relaxed text-muted">{e.note}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
