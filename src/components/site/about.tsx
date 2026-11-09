import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { images, values } from "@/lib/site-data";

export function About() {
  return (
    <section id="empresa" className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <Reveal direction="left" className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src={images.cardboardBales}
              alt="Fardos de cartón listos para reciclar"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </Reveal>

          <div>
            <Reveal direction="right">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                La empresa
              </h2>
              <p className="mt-4 text-muted-foreground">
                Somos parte de una organización dedicada al reciclaje.
                Apoyamos a empresas y hogares en la gestión de sus desechos,
                comprando y recolectando chatarra, papel, equipo electrónico y
                más — con el equipo y la licencia ambiental necesarios para
                cualquier proyecto.
              </p>
            </Reveal>

            <RevealGroup className="mt-6 grid gap-6 rounded-3xl border border-border/60 bg-card p-6 sm:grid-cols-2">
              <RevealItem>
                <h3 className="text-sm font-semibold text-brand">Misión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Facilitar el reciclaje para empresas y personas, asesorando
                  en el buen manejo de sus desechos para que cada material
                  llegue a convertirse en nueva materia prima.
                </p>
              </RevealItem>
              <RevealItem>
                <h3 className="text-sm font-semibold text-brand">Visión</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Ser la primera opción en reciclaje en Guatemala, promoviendo
                  el buen manejo de desechos para que las empresas optimicen
                  sus recursos.
                </p>
              </RevealItem>
            </RevealGroup>

            <Reveal delay={0.1} className="mt-8">
              <h3 className="text-sm font-semibold text-muted-foreground">
                Nuestros valores
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {values.map((value) => (
                  <Badge
                    key={value}
                    variant="secondary"
                    className="rounded-full px-3 py-1"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
