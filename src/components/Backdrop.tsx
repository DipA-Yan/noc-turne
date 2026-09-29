import { useEffect, useRef } from 'react';

/**
 * Ambient fixed backdrop: layered ink gradients, a faint cyber grid and a
 * canvas of drifting embers (red / cyan / gold) that slowly rise and twinkle.
 */
export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;

    type Ember = { x: number; y: number; r: number; vy: number; phase: number; color: string };
    let embers: Ember[] = [];
    const colors = ['255,46,79', '60,224,234', '233,180,91'];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(85, Math.floor((w * h) / 24000));
      embers = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.7 + 0.6,
        vy: Math.random() * 0.35 + 0.1,
        phase: Math.random() * Math.PI * 2,
        color: colors[Math.random() < 0.68 ? 0 : Math.random() < 0.6 ? 1 : 2],
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;
      for (const p of embers) {
        p.y -= p.vy;
        p.x += Math.sin(t * 2 + p.phase) * 0.18;
        if (p.y < -12) {
          p.y = h + 12;
          p.x = Math.random() * w;
        }
        const a = 0.22 + Math.abs(Math.sin(t * 3 + p.phase)) * 0.4;
        // soft halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${(a * 0.12).toFixed(3)})`;
        ctx.fill();
        // core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${a.toFixed(3)})`;
        ctx.fill();
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-950" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(1100px_700px_at_80%_-10%,rgba(214,31,62,0.14),transparent_60%),radial-gradient(900px_600px_at_-10%_110%,rgba(23,195,209,0.10),transparent_60%),linear-gradient(180deg,#05070e_0%,#080b14_50%,#05070e_100%)]" />
      <div className="gridlines absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_78%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(3,5,10,0.6)_100%)]" />
    </div>
  );
}
