import type { CSSProperties } from 'react';
import { learning, skillBars, skillGroups } from '../data';
import { useTypewriter } from '../hooks';
import { Reveal, SectionHeading } from './ui';

export default function Skills() {
  const nowLearning = useTypewriter(learning, 85, 1400);

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="03"
          kanji="技能"
          eyebrow="Skills"
          title="POWER LEVEL"
          sub="The stats screen. Bars animate in as you scroll — replace the numbers with your honest (or legendary) values."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* combat stats / bars */}
          <Reveal from="left" className="h-full">
            <div className="relative h-full border border-line bg-ink-900/70 p-7 clip-corner md:p-9">
              <div className="mb-8 flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl tracking-wide">
                  COMBAT <span className="text-crimson-500">STATS</span>
                </h3>
                <span className="font-jp text-xs tracking-[0.4em] text-muted">戦闘力</span>
              </div>
              <div className="space-y-6">
                {skillBars.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-2 flex items-baseline justify-between gap-4">
                      <span className="font-semibold tracking-wide text-paper/90">{s.name}</span>
                      <span className="font-display text-xl text-crimson-400">
                        {s.level}
                        <span className="text-sm text-muted">/100</span>
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-ink-700/80 clip-tag">
                      <div
                        className="bar-fill h-full bg-crimson-500 clip-tag shadow-[0_0_12px_rgba(255,46,79,0.6)]"
                        style={{ '--w': `${s.level}%`, transitionDelay: `${i * 110}ms` } as CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-line pt-5 text-sm text-muted">
                <span className="font-bold text-crimson-400">NOTE //</span> stats are placeholders — edit{' '}
                <code className="text-neon-300">skillBars</code> in <code className="text-neon-300">src/data.ts</code>.
              </p>
            </div>
          </Reveal>

          {/* arsenal */}
          <div className="flex flex-col gap-7">
            {skillGroups.map((g, gi) => (
              <Reveal key={g.title} from="right" delay={gi * 100}>
                <div className="group border border-line bg-ink-900/70 p-6 clip-corner transition-colors duration-300 hover:border-neon-400/40 md:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-jp bg-neon-400/12 px-3 py-1 text-xs font-bold tracking-[0.25em] text-neon-300 clip-tag">
                      {g.jp}
                    </span>
                    <h3 className="font-display text-2xl tracking-wide">{g.title}</h3>
                    <span className="ml-auto h-px flex-1 bg-line" />
                    <span className="font-display text-lg text-muted">{g.items.length}</span>
                  </div>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="cursor-default border border-line bg-ink-800/80 px-3.5 py-1.5 text-sm font-semibold tracking-wide text-paper/80 clip-corner-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-500/60 hover:text-crimson-300"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            <Reveal from="right" delay={320}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border border-gold-400/25 bg-ink-900/70 px-6 py-5 clip-corner">
                <span className="font-display text-2xl tracking-wide text-gold-400">NOW MASTERING</span>
                <span className="flex min-w-[120px] items-center gap-2 text-lg font-semibold text-paper/90">
                  <span className="text-crimson-500">▸</span>
                  {nowLearning}
                  <span className="animate-blink inline-block h-4 w-2 bg-gold-400" />
                </span>
                <span className="ml-auto text-xs font-bold uppercase tracking-[0.25em] text-muted">
                  Power Level: <span className="text-gold-400">9000+</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
