import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, Github, ShieldCheck, Network, Terminal } from "lucide-react";
import yohan from "@/assets/yohan.jpg.asset.json";

const CHIPS = [
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Network, label: "Networking" },
  { icon: Terminal, label: "Python" },
];

export function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / r.width;
      const py = (e.clientY - (r.top + r.height / 2)) / r.height;
      setTilt({ x: Math.max(-1, Math.min(1, px)), y: Math.max(-1, Math.min(1, py)) });
    };
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const parallax = Math.min(scrollY, 600);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-14 sm:pt-28"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        {/* Text column */}
        <div
          className="order-2 lg:order-1"
          style={{ transform: `translateY(${parallax * -0.06}px)` }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-graphite/70 px-3 py-1.5 backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-crimson/70" />
              <span className="relative inline-flex size-2 rounded-full bg-crimson" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.28em] text-gold sm:text-[11px]">
              CYBERSECURITY • NETWORKING • PYTHON
            </span>
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.92] font-bold tracking-tight">
            <span className="block text-foreground">YOHAN</span>
            <span className="text-gradient-gold block">CLARK</span>
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-crimson to-transparent" />
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Estudante de Análise e Desenvolvimento de Sistemas com foco em Cibersegurança,
              Redes e Python.
            </p>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {CHIPS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="panel corner-ticks flex items-center gap-2 rounded-sm px-3 py-2 text-xs tracking-wide text-foreground/85 transition-colors hover:border-crimson/45"
              >
                <Icon className="size-3.5 text-gold" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projetos"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-sm border border-gold/50 bg-gold/10 px-6 py-3.5 text-sm font-medium tracking-wide text-gold transition-all hover:border-gold hover:shadow-[var(--glow-gold)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              Ver projetos
              <ArrowDownRight className="size-4" />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-sm border border-crimson/45 px-6 py-3.5 text-sm font-medium tracking-wide text-foreground/90 transition-all hover:border-crimson hover:bg-crimson/10 hover:shadow-[var(--glow-red)]"
            >
              Sobre mim
            </a>
            <a
              href="https://github.com/Yohan160"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm px-3 py-3.5 text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </div>

          <dl className="mt-8 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-sm border border-gold/15 bg-gold/10">
            {[
              { k: "Foco", v: "Cybersec" },
              { k: "Curso", v: "ADS · UFBRA" },
              { k: "Técnico", v: "Informática" },
            ].map((s) => (
              <div key={s.k} className="bg-graphite/85 px-3 py-3">
                <dt className="font-mono text-[10px] tracking-[0.18em] text-gold/70">
                  {s.k.toUpperCase()}
                </dt>
                <dd className="mt-1 truncate text-sm text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo column */}
        <div
          ref={wrapRef}
          className="order-1 flex justify-center lg:order-2"
          style={{ transform: `translateY(${parallax * 0.09}px)` }}
        >
          <div
            className="relative aspect-square w-[min(78vw,300px)] sm:w-[340px] lg:w-[440px]"
            style={{
              transform: `perspective(1100px) rotateY(${tilt.x * 8}deg) rotateX(${-tilt.y * 8}deg)`,
              transition: "transform 400ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {/* orbital rings */}
            <div className="absolute inset-0 animate-orbit rounded-full border border-dashed border-gold/25">
              <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-gold shadow-[0_0_14px_var(--gold)]" />
              <span className="absolute top-1/2 -right-1 size-1.5 rounded-full bg-crimson shadow-[0_0_12px_var(--crimson)]" />
            </div>
            <div className="absolute inset-[7%] animate-orbit-rev rounded-full border border-crimson/25">
              <span className="absolute -bottom-1 left-1/3 size-1.5 rounded-full bg-crimson shadow-[0_0_12px_var(--crimson)]" />
            </div>
            <div className="absolute inset-[14%] rounded-full border border-gold/15" />
            <div className="absolute inset-0 animate-pulse-ring rounded-full border border-gold/30" />

            {/* glow */}
            <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_30%_25%,color-mix(in_oklab,var(--gold)_28%,transparent),transparent_60%)] blur-2xl" />
            <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_75%_80%,color-mix(in_oklab,var(--crimson)_32%,transparent),transparent_60%)] blur-2xl" />

            {/* portrait */}
            <div className="absolute inset-[19%] overflow-hidden rounded-full border border-gold/45 shadow-[0_0_0_1px_color-mix(in_oklab,var(--crimson)_30%,transparent),0_30px_80px_-20px_color-mix(in_oklab,var(--gold)_50%,transparent)]">
              <img
                src={yohan.url}
                alt="Yohan Clark"
                width={640}
                height={880}
                loading="eager"
                className="size-full object-cover object-[50%_22%]"
              />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-8 animate-scan bg-gradient-to-b from-transparent via-gold/25 to-transparent" />
              <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-gold/25" />
            </div>

            {/* HUD chips */}
            <div className="absolute -left-2 top-[16%] animate-float-slow rounded-sm border border-gold/30 bg-graphite/85 px-2.5 py-1.5 backdrop-blur sm:-left-6">
              <p className="font-mono text-[9px] tracking-[0.2em] text-gold">TCP/IP</p>
            </div>
            <div
              className="absolute -right-2 top-[36%] animate-float-slow rounded-sm border border-crimson/40 bg-graphite/85 px-2.5 py-1.5 backdrop-blur sm:-right-6"
              style={{ animationDelay: "1.4s" }}
            >
              <p className="font-mono text-[9px] tracking-[0.2em] text-crimson">SHA-256</p>
            </div>
            <div
              className="absolute bottom-[12%] -left-1 animate-float-slow rounded-sm border border-gold/30 bg-graphite/85 px-2.5 py-1.5 backdrop-blur sm:-left-4"
              style={{ animationDelay: "2.6s" }}
            >
              <p className="font-mono text-[9px] tracking-[0.2em] text-gold/90">SUBNET /24</p>
            </div>
          </div>
        </div>
      </div>

      {/* marquee strip fills the lower band */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 border-y border-gold/10 bg-graphite/40 py-2 backdrop-blur-sm">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-8">
              {[
                "NETWORK SECURITY",
                "CRIPTOGRAFIA",
                "MODELO OSI",
                "PYTHON",
                "FLASK",
                "SQL",
                "SUB-REDES",
                "AUTENTICAÇÃO",
                "HTTPS",
                "PORT SCANNING",
              ].map((t) => (
                <span
                  key={t + i}
                  className="flex items-center gap-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground/70"
                >
                  {t}
                  <span className="size-1 rounded-full bg-crimson/70" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}