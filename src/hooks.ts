import { useEffect, useRef, useState } from 'react';

/** One-shot intersection observer — flips true the first time the element scrolls into view. */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Eased count-up that starts when `start` becomes true. */
export function useCountUp(target: number, start: boolean, duration = 1400) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return val;
}

/** Typewriter that types / deletes / cycles through words. */
export function useTypewriter(words: readonly string[], typeMs = 65, holdMs = 1700) {
  const [text, setText] = useState(words[0] ?? '');

  useEffect(() => {
    if (words.length === 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let wi = 0;
    let ci = words[0]?.length ?? 0;
    let deleting = false;
    let timer = 0;

    const step = () => {
      const word = words[wi];
      if (!deleting) {
        ci += 1;
        setText(word.slice(0, ci));
        if (ci >= word.length) {
          deleting = true;
          timer = window.setTimeout(step, holdMs);
          return;
        }
        timer = window.setTimeout(step, typeMs);
      } else {
        ci -= 1;
        setText(word.slice(0, ci));
        if (ci <= 0) {
          deleting = false;
          wi = (wi + 1) % words.length;
          timer = window.setTimeout(step, 320);
          return;
        }
        timer = window.setTimeout(step, 30);
      }
    };

    timer = window.setTimeout(step, holdMs);
    return () => window.clearTimeout(timer);
  }, [words, typeMs, holdMs]);

  return text;
}

/** Mouse-driven 3D tilt. Applies --rx / --ry CSS vars to the returned ref. */
export function useTilt<T extends HTMLElement>(max = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`);
        el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`);
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(raf);
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [max]);

  return ref;
}

/** Tracks which section id is currently in the reading zone. */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
