import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { contact, profile, socials } from '../data';
import { Corners, Icon, Reveal, SectionHeading, btnPrimary } from './ui';
import type { IconName } from './ui';

type FormState = { name: string; email: string; message: string };

const infoRows: { icon: IconName; label: string; value: string; href?: string }[] = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  { icon: 'pin', label: 'Base', value: profile.location },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs: Partial<FormState> = {};
    if (!form.name.trim()) errs.name = 'Required — tell me your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'A valid email is required';
    if (form.message.trim().length < 10) errs.message = 'Give me at least 10 characters of story';
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus('sending');
    // TODO: wire this up to a real backend / email service (Formspree, Resend, your API…)
    window.setTimeout(() => setStatus('sent'), 1100);
  };

  const inputCls = (bad?: string) =>
    `w-full border bg-ink-950/70 px-4 py-3 font-semibold text-paper placeholder:font-normal placeholder:text-muted/60 clip-corner-sm outline-none transition-colors duration-200 ${
      bad ? 'border-crimson-500' : 'border-line focus:border-crimson-500/70'
    }`;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          index="05"
          kanji="連絡"
          eyebrow="Contact"
          title="START A SIDE QUEST"
          sub={contact.sub}
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* info column */}
          <Reveal from="left" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="border border-line bg-ink-900/70 p-6 clip-corner md:p-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="animate-pulse-dot h-2.5 w-2.5 rounded-full bg-crimson-500" />
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-paper/85">
                    {contact.availability}
                  </span>
                </div>
                <ul className="space-y-4">
                  {infoRows.map((r) => (
                    <li key={r.label}>
                      {r.href ? (
                        <a
                          href={r.href}
                          className="group flex items-center gap-4 border border-line bg-ink-950/60 p-4 clip-corner-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-500/60"
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center bg-crimson-500/15 text-crimson-400 clip-corner-sm transition-colors duration-200 group-hover:bg-crimson-500 group-hover:text-ink-950">
                            <Icon name={r.icon} className="h-4.5 w-4.5" />
                          </span>
                          <span>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                              {r.label} — placeholder
                            </span>
                            <span className="block break-all font-semibold text-paper/90">{r.value}</span>
                          </span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 border border-line bg-ink-950/60 p-4 clip-corner-sm">
                          <span className="grid h-10 w-10 shrink-0 place-items-center bg-crimson-500/15 text-crimson-400 clip-corner-sm">
                            <Icon name={r.icon} className="h-4.5 w-4.5" />
                          </span>
                          <span>
                            <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-muted">
                              {r.label} — placeholder
                            </span>
                            <span className="block font-semibold text-paper/90">{r.value}</span>
                          </span>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-line bg-ink-900/70 p-6 clip-corner md:p-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-muted">Find me in the multiverse</p>
                <div className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      title={`${s.label}: ${s.handle} — replace in src/data.ts`}
                      className="group flex items-center gap-2.5 border border-line bg-ink-950/60 px-4 py-2.5 clip-corner-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-crimson-500/60"
                    >
                      <Icon name={s.icon} className="h-4 w-4 text-muted transition-colors group-hover:text-crimson-400" />
                      <span className="text-sm font-bold tracking-wide text-paper/85">{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* form column */}
          <Reveal from="right" delay={120} className="lg:col-span-3">
            <div className="relative border border-line bg-ink-900/70 p-6 clip-corner md:p-9">
              <Corners />
              {status === 'sent' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center">
                  <span className="grid h-16 w-16 place-items-center border border-crimson-500/50 bg-crimson-500/15 text-crimson-400 clip-corner">
                    <Icon name="check" className="h-8 w-8" />
                  </span>
                  <h3 className="font-display text-4xl tracking-wide md:text-5xl">
                    MESSAGE <span className="text-crimson-500">RECEIVED</span>
                  </h3>
                  <p className="max-w-md text-lg text-muted">
                    Transmission logged, {form.name.trim() || 'traveler'}. This is a placeholder form — hook it to a
                    real backend and I&apos;ll answer within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setForm({ name: '', email: '', message: '' });
                      setStatus('idle');
                    }}
                    className="mt-2 border border-line bg-ink-950/60 px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-paper/85 clip-corner-sm transition-all duration-200 hover:border-crimson-500/60 hover:text-crimson-400"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <h3 className="font-display text-3xl tracking-wide">
                      SEND A <span className="text-crimson-500">SIGNAL</span>
                    </h3>
                    <span className="font-jp text-xs tracking-[0.4em] text-muted">通信</span>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-name" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.28em] text-muted">
                        Name <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        id="c-name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        placeholder="Monkey D. Placeholder"
                        className={inputCls(errors.name)}
                      />
                      {errors.name && <p className="mt-1.5 text-sm font-semibold text-crimson-400">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.28em] text-muted">
                        Email <span className="text-crimson-500">*</span>
                      </label>
                      <input
                        id="c-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={onChange}
                        placeholder="you@grandline.dev"
                        className={inputCls(errors.email)}
                      />
                      {errors.email && <p className="mt-1.5 text-sm font-semibold text-crimson-400">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="mt-6">
                    <label htmlFor="c-message" className="mb-1.5 block text-[11px] font-bold uppercase tracking-[0.28em] text-muted">
                      Message <span className="text-crimson-500">*</span>
                    </label>
                    <textarea
                      id="c-message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell me about the mission — scope, timeline, budget, favorite anime…"
                      className={`${inputCls(errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm font-semibold text-crimson-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-5">
                    <button type="submit" disabled={status === 'sending'} className={`${btnPrimary} disabled:cursor-wait disabled:opacity-70`}>
                      {status === 'sending' ? (
                        <>
                          Transmitting
                          <span className="animate-blink inline-block h-4 w-2 bg-ink-950" />
                        </>
                      ) : (
                        <>
                          Send Message
                          <Icon name="send" className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-muted">
                      <span className="font-bold text-neon-400">FYI //</span> placeholder form — no data leaves your
                      browser yet.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
