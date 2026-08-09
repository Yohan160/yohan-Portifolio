import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "up" | "left" | "right" | "scale" | "blur";

const hidden: Record<Variant, string> = {
  up: "translate-y-10 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
  scale: "scale-[0.94] opacity-0",
  blur: "translate-y-6 opacity-0 blur-[6px]",
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article" | "header";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-[900ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] will-change-transform",
        shown ? "translate-x-0 translate-y-0 scale-100 opacity-100 blur-0" : hidden[variant],
        className,
      )}
    >
      {children}
    </Tag>
  );
}