import { Github, Radar, ArrowUpRight, Globe, Layout } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const TECHS = ["Python", "Flask", "HTML5", "CSS3", "Socket", "Networking"];
const PORTS = [21, 22, 23, 25, 53, 80, 110, 143, 443, 445, 3306, 8080];

export function Projects() {
  return (
    <section id="projetos" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        index="03"
        kicker="PRÁTICA"
        title="Projetos"
        desc="Aplicação prática dos estudos em redes, programação e segurança."
        center
      />

      {/* ── Grupo 1: Cibersegurança e redes ── */}
      <p className="mt-2 mb-8 text-center font-mono text-xs tracking-[0.28em] text-gold/60 uppercase">
        Cibersegurança e redes
      </p>

      <Reveal variant="scale">
        <TiltCard accent="red" max={4} className="overflow-hidden p-0">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0 p-6 sm:p-9">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-sm border border-crimson/40 bg-crimson/10">
                  <Radar className="size-5 text-crimson" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-gold/80">
                    PROJETO EM DESTAQUE
                  </p>
                  <h3 className="break-words font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Scanner de Portas em Python
                  </h3>
                </div>
              </div>

              <p className="mt-5 break-words text-sm leading-relaxed text-muted-foreground">
                Aplicação web desenvolvida com Python e Flask para realizar varredura de portas
                TCP de um endereço IP e identificar portas abertas. O projeto foi desenvolvido
                para praticar programação, desenvolvimento web, redes de computadores e conceitos
                básicos de cibersegurança.
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {TECHS.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-gold/90"
                  >
                    {t.toUpperCase()}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Yohan160/Scanner-de-portas-python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-gold/10 px-5 py-3 text-sm font-medium text-gold transition-all hover:border-gold hover:shadow-[var(--glow-gold)]"
                >
                  <Github className="size-4" />
                  Ver no GitHub
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://github.com/Yohan160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-crimson/45 px-5 py-3 text-sm text-foreground/90 transition-all hover:border-crimson hover:bg-crimson/10"
                >
                  <Github className="size-4" />
                  Todos os repositórios
                </a>
              </div>
            </div>

            {/* abstract port-scan visual */}
            <div className="relative min-h-[280px] min-w-0 border-t border-gold/12 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--crimson)_16%,transparent),transparent_65%)] p-6 lg:border-t-0 lg:border-l">
              <div className="grid-floor absolute inset-0 opacity-25" />
              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
                  TCP PORT MAP · ABSTRAÇÃO VISUAL
                </p>
                <div className="mt-4 grid grid-cols-3 gap-1.5 min-w-0 sm:grid-cols-6 sm:gap-2 lg:grid-cols-4">
                  {PORTS.map((p, i) => (
                    <div
                      key={p}
                      style={{ animationDelay: `${i * 220}ms` }}
                      className="min-w-0 animate-float-slow rounded-sm border border-gold/20 bg-graphite/80 px-1.5 py-2 text-center transition-colors hover:border-crimson/60 sm:px-2 sm:py-3"
                    >
                      <span className="block truncate font-mono text-[10px] text-gold sm:text-[11px]">{p}</span>
                      <span
                        className={
                          i % 3 === 0
                            ? "mx-auto mt-2 block size-1.5 rounded-full bg-crimson shadow-[0_0_10px_var(--crimson)]"
                            : "mx-auto mt-2 block size-1.5 rounded-full bg-gold/40"
                        }
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 font-mono text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground/70">
                  SOCKET → CONNECT → TIMEOUT → STATUS
                </p>
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>

      {/* ── Grupo 2: Desenvolvimento web ── */}
      <p className="mt-16 mb-8 text-center font-mono text-xs tracking-[0.28em] text-gold/60 uppercase">
        Desenvolvimento web
      </p>

      <Reveal variant="scale">
        <TiltCard accent="red" max={4} className="overflow-hidden p-0">
          <div className="grid min-w-0 grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0 p-6 sm:p-9">
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-sm border border-crimson/40 bg-crimson/10">
                  <Layout className="size-5 text-crimson" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-gold/80">
                    PROJETO EM DESTAQUE
                  </p>
                  <h3 className="break-words font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    ONG Espaço Tia Jú
                  </h3>
                </div>
              </div>

              <p className="mt-5 break-words text-sm leading-relaxed text-muted-foreground">
                Site institucional para a ONG Espaço Tia Jú — projeto de educação e acolhimento
                em Mongaguá-SP. A página apresenta a missão da organização, formas de colaborar
                e informações de contato.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://github.com/Yohan160/Espaco-Tia_ju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-sm border border-gold/50 bg-gold/10 px-5 py-3 text-sm font-medium text-gold transition-all hover:border-gold hover:shadow-[var(--glow-gold)]"
                >
                  <Github className="size-4" />
                  Ver no GitHub
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="https://espaco-tia-ju-jcnb.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-crimson/45 px-5 py-3 text-sm text-foreground/90 transition-all hover:border-crimson hover:bg-crimson/10"
                >
                  <Globe className="size-4" />
                  Visitar site
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            {/* preview visual do site */}
            <div className="relative min-h-[280px] min-w-0 border-t border-gold/12 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--crimson)_16%,transparent),transparent_65%)] p-6 lg:border-t-0 lg:border-l flex items-center justify-center overflow-hidden">
              <div className="grid-floor absolute inset-0 opacity-25" />
              <div className="relative w-full">
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground mb-3">
                  PREVIEW · ESPAÇO TIA JÚ
                </p>
                <div className="rounded-sm border border-gold/20 overflow-hidden shadow-lg">
                  <div className="flex items-center gap-1.5 bg-graphite/90 px-3 py-2 border-b border-gold/10">
                    <span className="size-2 rounded-full bg-crimson/70" />
                    <span className="size-2 rounded-full bg-gold/40" />
                    <span className="size-2 rounded-full bg-gold/20" />
                    <span className="ml-2 font-mono text-[9px] text-muted-foreground/60 truncate">
                      espaco-tia-ju-jcnb.vercel.app
                    </span>
                  </div>
                  <img
                    src="/tia-ju-preview.png"
                    alt="Preview do site Espaço Tia Jú"
                    className="w-full object-cover object-top"
                    style={{ maxHeight: "180px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>
    </section>
  );
}