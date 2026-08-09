import { useEffect, useState } from "react";
import { Menu, X, ShieldHalf } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "skills", label: "Skills" },
  { id: "projetos", label: "Projetos" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];

export function SiteNav() {
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => io.observe(s));

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-gold/15 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
        <a href="#inicio" className="group flex min-w-0 items-center gap-2.5">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-sm border border-gold/35 bg-graphite">
            <ShieldHalf className="size-4 text-gold" />
            <span className="absolute inset-0 animate-pulse-ring rounded-sm border border-crimson/50" />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-[0.18em] text-foreground">
              YOHAN CLARK
            </span>
            <span className="block truncate font-mono text-[10px] tracking-[0.22em] text-gold/70">
              SEC · NET · PY
            </span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "relative rounded-sm px-3 py-2 text-sm transition-colors",
                active === l.id
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute inset-x-2 -bottom-0.5 h-px origin-left bg-gradient-to-r from-gold via-crimson to-transparent transition-transform duration-500",
                  active === l.id ? "scale-x-100" : "scale-x-0",
                )}
              />
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid size-11 shrink-0 place-items-center rounded-sm border border-gold/25 text-gold transition-colors hover:border-crimson/60 hover:text-crimson md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "grid overflow-hidden border-t border-gold/10 bg-background/95 backdrop-blur-xl transition-all duration-500 md:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <nav className="min-h-0">
          <ul className="flex flex-col p-3">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center gap-3 rounded-sm px-3 py-3.5 text-base transition-colors",
                    active === l.id ? "text-gold" : "text-muted-foreground",
                  )}
                >
                  <span
                    className={cn(
                      "h-4 w-px transition-colors",
                      active === l.id ? "bg-crimson" : "bg-gold/25",
                    )}
                  />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="h-px w-full bg-gold/10">
        <div
          className="h-px bg-gradient-to-r from-gold via-crimson to-blood transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}