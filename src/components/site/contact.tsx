import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { CtaLink } from "@/components/site/cta-link";
import { SocialIcon } from "@/components/site/social-icon";
import { SITE, whatsappHref } from "@/lib/site-data";

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mx-auto max-w-2xl rounded-3xl border border-brand/20 bg-brand-muted/60 px-8 py-12 text-center">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <MessageCircle className="size-6" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
            Hablemos de tu reciclaje
          </h2>
          <p className="mt-3 text-muted-foreground">
            Escríbenos por WhatsApp y coordinamos la recolección de tus
            materiales.
          </p>

          <div className="mt-8 flex justify-center">
            <CtaLink
              href={whatsappHref()}
              external
              className="h-12 rounded-full px-7 text-base"
            >
              Escribir por WhatsApp
            </CtaLink>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 border-t border-brand/20 pt-6">
            <span className="text-sm text-muted-foreground">Síguenos:</span>
            <a
              href={SITE.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Reciclama"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-background transition-transform active:scale-95"
            >
              <SocialIcon slug="facebook" className="size-4" />
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Reciclama"
              className="flex size-9 items-center justify-center rounded-full border border-border bg-background transition-transform active:scale-95"
            >
              <SocialIcon slug="instagram" className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
