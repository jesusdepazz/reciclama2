"use client";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaLink } from "@/components/site/cta-link";
import { OrbitVisual } from "@/components/site/orbit-visual";
import { images, whatsappHref } from "@/lib/site-data";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-border/60"
    >
      <Image
        src={images.heroScrapYard}
        alt="Patio de reciclaje de chatarra metálica"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 pt-28 pb-20 md:grid-cols-2 md:pt-36 md:pb-28">
        <Reveal>
          <p className="text-sm font-medium text-emerald-300">Guatemala</p>
          <h1 className="mt-3 max-w-xl text-5xl font-semibold tracking-tight text-balance text-white md:text-6xl lg:text-7xl">
            De desecho a materia prima
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/80">
            Compramos y recolectamos hierro, papel, electrónicos, cobre y
            aluminio. Gestión responsable con licencia ambiental y
            certificación de destrucción.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaLink
              href={whatsappHref()}
              external
              className="h-12 rounded-full px-6 text-base"
            >
              Escribir por WhatsApp
            </CtaLink>
            <CtaLink
              href="#reciclaje"
              className="h-12 rounded-full border-white/30 bg-white/10 px-6 text-base text-white backdrop-blur-sm hover:bg-white/20"
            >
              Ver servicios
              <ArrowDown className="size-4" data-icon="inline-end" />
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto hidden w-full max-w-sm md:block">
          <OrbitVisual className="relative aspect-square w-full" />
        </Reveal>
      </div>
    </section>
  );
}
