import { Github, Linkedin, Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";

const CONTACTS = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Yohan160",
    href: "https://github.com/Yohan160",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "yohan-c-838a183b2",
    href: "https://www.linkedin.com/in/yohan-c-838a183b2/",
    external: true,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@yohan_.zx",
    href: "https://www.instagram.com/yohan_.zx/",
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "yohanclark183@outlook.com",
    href: "mailto:yohanclark183@outlook.com",
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 18 99699 6604",
    href: "https://wa.me/5518996996604",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <Reveal variant="blur" className="text-center">
          <p className="font-mono text-[10px] tracking-[0.3em] text-gold/80">06 · CONTATO</p>
          <h2 className="mt-3 font-display text-[clamp(2rem,6vw,3.6rem)] leading-none font-bold tracking-tight">
            <span className="text-gradient-gold">Vamos conversar?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Estou aberto a oportunidades, projetos e conexões na área de tecnologia.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONTACTS.map((c, i) => (
            <Reveal key={c.label} variant="up" delay={i * 80}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="block h-full focus-visible:outline-none"
              >
                <TiltCard accent={i % 2 ? "red" : "gold"} max={7} className="h-full">
                  <div className="flex items-center gap-3">
                    <span
                      className={
                        i % 2
                          ? "grid size-10 shrink-0 place-items-center rounded-sm border border-crimson/40 bg-crimson/10"
                          : "grid size-10 shrink-0 place-items-center rounded-sm border border-gold/35 bg-gold/10"
                      }
                    >
                      <c.icon className={i % 2 ? "size-4 text-crimson" : "size-4 text-gold"} />
                    </span>
                    <div className="min-w-0">
                      <p className="font-mono text-[10px] tracking-[0.2em] text-gold/75">
                        {c.label.toUpperCase()}
                      </p>
                      <p className="truncate text-sm text-foreground/90">{c.value}</p>
                    </div>
                    <ArrowUpRight className="ml-auto size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </TiltCard>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <footer className="border-t border-gold/12 bg-graphite/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-6 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
          <p className="font-display text-xs tracking-[0.22em] text-foreground/80">
            YOHAN CLARK
          </p>
          <p className="font-mono text-[10px] tracking-[0.22em] text-muted-foreground">
            CYBERSECURITY • NETWORKING • PYTHON
          </p>
        </div>
      </footer>
    </section>
  );
}