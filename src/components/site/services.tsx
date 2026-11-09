"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CtaLink } from "@/components/site/cta-link";
import { services, whatsappHref } from "@/lib/site-data";

export function Services() {
  const [active, setActive] = useState<string>(services[0].id);

  return (
    <section
      id="reciclaje"
      className="relative overflow-hidden border-b border-border/60 py-20 md:py-28"
    >
      <div
        aria-hidden
        className="absolute -top-24 right-0 size-112 rounded-full bg-brand-muted/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Servicios de reciclaje
          </h2>
          <p className="mt-3 text-muted-foreground">
            Seis frentes de trabajo, el mismo compromiso: dar a cada material
            una salida responsable.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Tabs
            value={active}
            onValueChange={(value) => setActive(value as string)}
            orientation="vertical"
            className="gap-6 md:grid md:grid-cols-[minmax(0,16rem)_1fr] md:gap-10"
          >
            <TabsList
              variant="line"
              className="h-auto w-full flex-row gap-1 overflow-x-auto md:w-auto md:flex-col md:items-stretch md:overflow-visible"
            >
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="h-auto shrink-0 justify-start gap-3 rounded-xl px-3 py-2.5 text-left data-active:bg-brand-muted data-active:text-foreground"
                >
                  <service.icon className="size-4 shrink-0 text-brand" />
                  <span className="text-sm font-medium whitespace-normal">
                    {service.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="relative grid grid-cols-1 overflow-hidden">
              {services.map((service) => (
                <TabsContent
                  key={service.id}
                  value={service.id}
                  keepMounted
                  className="col-start-1 row-start-1 overflow-hidden rounded-3xl border border-border/60 bg-card outline-none [transition:opacity_250ms_ease,translate_350ms_cubic-bezier(0.22,1,0.36,1)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-safe:data-starting-style:translate-y-2 motion-safe:data-ending-style:-translate-y-2"
                >
                  <div
                    className={
                      service.image
                        ? "grid gap-0 sm:grid-cols-2"
                        : undefined
                    }
                  >
                    <div className="p-8 md:p-10">
                      <span className="flex size-12 items-center justify-center rounded-full bg-brand text-brand-foreground">
                        <service.icon className="size-5" />
                      </span>
                      <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-muted-foreground">
                        {service.description}
                      </p>
                      <CtaLink
                        href={whatsappHref(
                          `Hola, necesito información sobre ${service.title.toLowerCase()}`
                        )}
                        external
                        variant="outline"
                        className="mt-6 rounded-full"
                      >
                        <MessageCircle className="size-4" data-icon="inline-start" />
                        Escribir por WhatsApp
                      </CtaLink>
                    </div>
                    {service.image && (
                      <div className="relative min-h-56 sm:min-h-full">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}
