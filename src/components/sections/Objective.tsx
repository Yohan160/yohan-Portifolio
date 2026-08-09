import {
  Target,
  ShieldCheck,
  Network,
  Router,
  Terminal,
  Lock,
  Code2,
  Globe,
  Server,
} from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const INTERESTS = [
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Lock, label: "Network Security" },
  { icon: Router, label: "Redes de Computadores" },
  { icon: Terminal, label: "Python" },
  { icon: ShieldCheck, label: "Segurança da Informação" },
  { icon: Code2, label: "Desenvolvimento de Software" },
  { icon: Globe, label: "Desenvolvimento Web" },
  { icon: Server, label: "Tecnologia da Informação" },
];

export function Objective() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading index="05" kicker="DIREÇÃO" title="Objetivo & Áreas de interesse" />

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal variant="left">
          <TiltCard accent="red" max={4} className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-sm border border-crimson/40 bg-crimson/10">
                <Target className="size-5 text-crimson" />
              </span>
              <h3 className="font-display text-lg font-semibold text-foreground">Objetivo</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-foreground/90">
              Busco uma oportunidade de estágio ou posição inicial na área de tecnologia,
              especialmente em cibersegurança, redes ou desenvolvimento, onde possa aplicar meus
              conhecimentos, desenvolver experiência prática e continuar evoluindo
              profissionalmente.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-crimson/60 to-transparent" />
              <Network className="size-4 text-gold/70" />
            </div>
          </TiltCard>
        </Reveal>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
          {INTERESTS.map((it, i) => (
            <Reveal key={it.label} variant="scale" delay={i * 60}>
              <TiltCard accent={i % 3 === 0 ? "red" : "gold"} max={8} className="h-full p-4">
                <it.icon
                  className={i % 3 === 0 ? "size-4 text-crimson" : "size-4 text-gold"}
                />
                <p className="mt-3 text-xs leading-snug font-medium text-foreground/90">
                  {it.label}
                </p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}