import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { credentials } from "@/lib/site-data";

export function Credentials() {
  return (
    <section className="border-b border-border/60 bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Por qué trabajar con nosotros
            </h2>
            <p className="mt-3 text-muted-foreground">
              Cuatro razones por las que empresas en Guatemala nos confían la
              gestión de sus desechos.
            </p>
          </Reveal>

          <RevealGroup className="divide-y divide-border/60 border-t border-border/60">
            {credentials.map((item, index) => (
              <RevealItem key={item.title}>
                <div className="group flex items-start gap-6 py-6 transition-colors first:pt-0">
                  <span className="shrink-0 font-mono text-sm text-brand/50 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <item.icon className="mt-0.5 size-5 shrink-0 text-brand transition-transform duration-200 ease-out group-hover:-translate-y-0.5" />
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
