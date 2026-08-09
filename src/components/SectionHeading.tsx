import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  kicker,
  title,
  desc,
}: {
  index: string;
  kicker: string;
  title: string;
  desc?: string;
}) {
  return (
    <Reveal variant="blur" className="mb-8">
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.3em] text-crimson">{index}</span>
        <span className="h-px w-8 bg-gradient-to-r from-crimson to-gold/40" />
        <span className="font-mono text-[10px] tracking-[0.3em] text-gold/80">{kicker}</span>
      </div>
      <h2 className="mt-3 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-none font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{desc}</p>
      ) : null}
    </Reveal>
  );
}