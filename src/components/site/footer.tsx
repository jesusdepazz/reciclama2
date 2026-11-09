import Link from "next/link";
import { Recycle } from "lucide-react";
import { SocialIcon } from "@/components/site/social-icon";
import { CurrentYear } from "@/components/site/current-year";
import { navLinks, SITE, whatsappHref } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <Recycle className="size-3.5" />
          </span>
          Reciclama
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            WhatsApp
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Reciclama"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <SocialIcon slug="facebook" className="size-4" />
          </a>
          <a
            href={SITE.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Reciclama"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <SocialIcon slug="instagram" className="size-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-border/60 px-6 py-4 text-center text-xs text-muted-foreground">
        © <CurrentYear /> Reciclama. Todos los derechos reservados.
      </div>
    </footer>
  );
}
