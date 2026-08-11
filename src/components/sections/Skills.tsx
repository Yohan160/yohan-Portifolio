import { ShieldCheck, Network, Terminal, Database } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { TiltCard } from "../TiltCard";

const GROUPS = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    accent: "red" as const,
    items: [
      "Fundamentos de Cibersegurança",
      "Segurança da Informação",
      "Criptografia",
      "Hash",
      "HTTPS",
      "Autenticação",
      "Segurança de redes",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    accent: "gold" as const,
    items: [
      "IPv4",
      "Sub-redes",
      "Máscaras de rede",
      "TCP/IP",
      "Modelo OSI",
      "ARP",
      "Roteamento",
      "Switching",
      "Broadcast",
      "Multicast",
      "Segmentação de redes",
    ],
  },
  {
    icon: Terminal,
    title: "Programming",
    accent: "gold" as const,
    items: ["Python", "Flask", "HTML", "CSS", "Lógica de programação"],
  },
  {
    icon: Database,
    title: "Database",
    accent: "red" as const,
    items: ["SQL", "Consultas SQL", "Fundamentos de bancos de dados"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <SectionHeading
        index="02"
        kicker="STACK DE CONHECIMENTO"
        title="Skills"
        desc="Conhecimentos em desenvolvimento contínuo, organizados por área de foco."
        center
      />

      <div className="grid gap-5 md:grid-cols-2">
        {GROUPS.map((g, i) => (
          <Reveal key={g.title} variant={i % 2 ? "right" : "left"} delay={i * 80}>
            <TiltCard accent={g.accent} max={5} className="h-full p-6">
              <div className="flex items-center gap-3">
                <span
                  className={
                    g.accent === "red"
                      ? "grid size-10 place-items-center rounded-sm border border-crimson/40 bg-crimson/10"
                      : "grid size-10 place-items-center rounded-sm border border-gold/35 bg-gold/10"
                  }
                >
                  <g.icon
                    className={g.accent === "red" ? "size-5 text-crimson" : "size-5 text-gold"}
                  />
                </span>
                <h3 className="font-display text-lg font-semibold tracking-wide text-foreground">
                  {g.title}
                </h3>
                <span className="ml-auto font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  {String(g.items.length).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="group/i relative rounded-sm border border-gold/12 bg-steel/60 px-3 py-1.5 text-xs text-foreground/85 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/50 hover:text-foreground"
                  >
                    <span className="mr-2 inline-block size-1 rounded-full bg-gold/70 align-middle transition-colors group-hover/i:bg-crimson" />
                    {it}
                  </li>
                ))}
              </ul>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}