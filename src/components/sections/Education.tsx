import { GraduationCap, Award, CheckCircle2, Loader } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const TIMELINE = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    org: "UFBRA — EAD",
    status: "Em andamento",
    ongoing: true,
  },
  {
    title: "Técnico em Informática",
    org: "ETEC Adolpho Berezin",
    status: "Concluído",
    ongoing: false,
  },
  { title: "Ensino Médio", org: "Formação básica", status: "Concluído", ongoing: false },
];

const COURSES = [
  { org: "Cisco Networking Academy", name: "Introdução à Cibersegurança", status: "Concluído" },
  {
    org: "Cisco Networking Academy",
    name: "Noções Básicas de Redes",
    status: "Concluído",
  },
  { org: "Fundação Bradesco", name: "Python", status: "Concluído" },
];

export function Education() {
  return (
    <section id="formacao" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading index="04" kicker="TRAJETÓRIA" title="Formação & Certificações" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative pl-6">
          <span className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-gold via-crimson to-transparent" />
          <ul className="space-y-5">
            {TIMELINE.map((t, i) => (
              <Reveal as="li" key={t.title} variant="left" delay={i * 110} className="relative">
                <span
                  className={
                    t.ongoing
                      ? "absolute top-6 -left-[22px] size-3.5 rounded-full border-2 border-crimson bg-background shadow-[0_0_14px_var(--crimson)]"
                      : "absolute top-6 -left-[22px] size-3.5 rounded-full border-2 border-gold/70 bg-background"
                  }
                />
                <TiltCard accent={t.ongoing ? "red" : "gold"} max={4}>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 size-4 shrink-0 text-gold" />
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">{t.org}</p>
                    </div>
                    <span
                      className={
                        t.ongoing
                          ? "ml-auto shrink-0 rounded-full border border-crimson/50 bg-crimson/10 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-crimson"
                          : "ml-auto shrink-0 rounded-full border border-gold/30 bg-gold/5 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-gold/90"
                      }
                    >
                      {t.ongoing ? "EM ANDAMENTO" : "CONCLUÍDO"}
                    </span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {COURSES.map((c, i) => {
            const done = c.status.startsWith("Concluído");
            return (
              <Reveal key={c.name + c.org} variant="right" delay={i * 90}>
                <TiltCard accent={done ? "gold" : "red"} max={4}>
                  <div className="flex items-start gap-3">
                    <Award className="mt-0.5 size-4 shrink-0 text-crimson" />
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.18em] text-gold/75">
                        {c.org.toUpperCase()}
                      </p>
                      <h3 className="mt-1 font-display text-base font-semibold text-foreground">
                        {c.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                        {done ? (
                          <CheckCircle2 className="size-3.5 text-gold" />
                        ) : (
                          <Loader className="size-3.5 text-crimson" />
                        )}
                        {c.status}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}