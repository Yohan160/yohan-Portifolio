import { ShieldCheck, Network, Code2, Cpu } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const PILLARS = [
  { icon: ShieldCheck, t: "Segurança", d: "Fundamentos, criptografia e autenticação." },
  { icon: Network, t: "Redes", d: "TCP/IP, OSI, sub-redes e roteamento." },
  { icon: Code2, t: "Código", d: "Python, Flask, HTML e CSS." },
  { icon: Cpu, t: "Tecnologia", d: "Bancos de dados e infraestrutura." },
];

export function About() {
  return (
    <section id="sobre" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading index="01" kicker="PERFIL" title="Sobre mim" center />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal variant="left">
          <TiltCard max={4} className="h-full p-6 sm:p-8">
            <p className="text-base leading-relaxed text-foreground/90">
              Sou estudante de Análise e Desenvolvimento de Sistemas, formado como Técnico em
              Informática e interessado em tecnologia, programação, redes e cibersegurança. Tenho
              desenvolvido conhecimentos principalmente em Python, desenvolvimento web, bancos de
              dados e fundamentos de redes, buscando transformar o conhecimento teórico em
              projetos práticos.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Ensino Médio completo", "Técnico em Informática", "ADS em andamento"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold/25 bg-gold/5 px-3 py-1 font-mono text-[10px] tracking-[0.16em] text-gold/90"
                >
                  {t.toUpperCase()}
                </span>
              ))}
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.t} variant="scale" delay={i * 90}>
              <TiltCard accent={i % 2 ? "red" : "gold"} className="h-full">
                <p.icon className={i % 2 ? "size-5 text-crimson" : "size-5 text-gold"} />
                <h3 className="mt-3 font-display text-sm font-semibold tracking-wide text-foreground">
                  {p.t}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}