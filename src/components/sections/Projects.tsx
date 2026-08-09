import { Github, Radar, ArrowUpRight } from "lucide-react";
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
      />

      <Reveal variant="scale">
        <TiltCard accent="red" max={4} className="overflow-hidden p-0">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-6 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-sm border border-crimson/40 bg-crimson/10">
                  <Radar className="size-5 text-crimson" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.24em] text-gold/80">
                    PROJETO EM DESTAQUE
                  </p>
                  <h3 className="truncate font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Scanner de Portas em Python
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
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
            <div className="relative min-h-[280px] border-t border-gold/12 bg-[radial-gradient(circle_at_70%_30%,color-mix(in_oklab,var(--crimson)_16%,transparent),transparent_65%)] p-6 lg:border-t-0 lg:border-l">
              <div className="grid-floor absolute inset-0 opacity-25" />
              <div className="relative">
                <p className="font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
                  TCP PORT MAP · ABSTRAÇÃO VISUAL
                </p>
                <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-4">
                  {PORTS.map((p, i) => (
                    <div
                      key={p}
                      style={{ animationDelay: `${i * 220}ms` }}
                      className="animate-float-slow rounded-sm border border-gold/20 bg-graphite/80 px-2 py-3 text-center transition-colors hover:border-crimson/60"
                    >
                      <span className="block font-mono text-[11px] text-gold">{p}</span>
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
    </section>
  );
}