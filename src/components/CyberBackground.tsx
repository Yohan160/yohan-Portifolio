import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; z: number; red: boolean };

/**
 * Canvas network of nodes + connections that reacts to the cursor.
 * Pauses when off-screen, respects prefers-reduced-motion, scales down on mobile.
 */
export function CyberBackground() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let dpr = 1;
    let nodes: Node[] = [];
    let raf = 0;
    let running = true;
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = w < 768 ? 14000 : 10000;
      const count = Math.min(120, Math.max(28, Math.round((w * h) / density)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        z: 0.4 + Math.random() * 0.6,
        red: Math.random() < 0.34,
      }));
    };

    const draw = () => {
      raf = requestAnimationFrame(draw);
      if (!running) return;

      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;

      ctx.clearRect(0, 0, w, h);

      const linkDist = w < 768 ? 110 : 150;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduced) {
          n.x += n.vx * n.z;
          n.y += n.vy * n.z;
        }
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        const dxp = n.x - pointer.x;
        const dyp = n.y - pointer.y;
        const dp = Math.hypot(dxp, dyp);
        const near = dp < 190;

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const d = Math.hypot(dx, dy);
          if (d > linkDist) continue;
          const a = (1 - d / linkDist) * 0.28 * ((n.z + m.z) / 2);
          const hot = near && dp < 150;
          ctx.strokeStyle = hot
            ? `rgba(193,18,31,${a + 0.22})`
            : n.red || m.red
              ? `rgba(139,0,0,${a * 0.9})`
              : `rgba(212,175,55,${a})`;
          ctx.lineWidth = hot ? 0.9 : 0.55;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }

        const r = (near ? 2.4 : 1.5) * n.z;
        ctx.fillStyle = near
          ? "rgba(212,175,55,0.95)"
          : n.red
            ? "rgba(165,0,0,0.75)"
            : "rgba(212,175,55,0.5)";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (near) {
          ctx.strokeStyle = `rgba(193,18,31,${0.35 * (1 - dp / 190)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.tx = e.clientX;
      pointer.ty = e.clientY;
    };
    const onLeave = () => {
      pointer.tx = -9999;
      pointer.ty = -9999;
    };
    const onVis = () => {
      running = !document.hidden;
    };

    build();
    draw();
    window.addEventListener("resize", build);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-floor absolute inset-x-0 bottom-0 h-[55vh] opacity-[0.35] [mask-image:linear-gradient(to_top,black,transparent)]" />
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_26%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute -right-32 top-[28%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--crimson)_28%,transparent),transparent_70%)] blur-3xl" />
      <div className="absolute left-[20%] bottom-[-15%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--blood)_26%,transparent),transparent_70%)] blur-3xl" />
      <canvas ref={ref} className="absolute inset-0 h-full w-full opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,color-mix(in_oklab,var(--background)_88%,transparent)_100%)]" />
    </div>
  );
}