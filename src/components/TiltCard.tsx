import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Card with subtle 3D tilt + cursor-following glow. */
export function TiltCard({
  children,
  className,
  accent = "gold",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  accent?: "gold" | "red";
  max?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * max}deg) rotateY(${(px - 0.5) * max}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      className={cn(
        "panel corner-ticks group relative overflow-hidden rounded-md p-5 transition-[transform,box-shadow,border-color] duration-300 will-change-transform",
        accent === "gold"
          ? "hover:border-gold/45 hover:shadow-[var(--glow-gold)]"
          : "hover:border-crimson/50 hover:shadow-[var(--glow-red)]",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          accent === "gold"
            ? "bg-[radial-gradient(320px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--gold)_16%,transparent),transparent_65%)]"
            : "bg-[radial-gradient(320px_circle_at_var(--mx,50%)_var(--my,50%),color-mix(in_oklab,var(--crimson)_20%,transparent),transparent_65%)]",
        )}
      />
      <div className="relative">{children}</div>
    </div>
  );
}