import { Reveal } from "@/components/motion/reveal";
import { Marquee } from "@/components/site/marquee";
import { materials } from "@/lib/site-data";

export function Materials() {
  const loopItems = [...materials, ...materials];

  return (
    <section className="border-b border-border/60 py-12">
      <Reveal>
        <p className="text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Qué compramos
        </p>
        <Marquee className="mt-5" durationSeconds={26}>
          {loopItems.map((material, index) => (
            <span
              key={`${material.label}-${index}`}
              className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium"
            >
              <material.icon className="size-4 text-brand" />
              {material.label}
            </span>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}
