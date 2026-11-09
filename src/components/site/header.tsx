"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CtaLink } from "@/components/site/cta-link";
import { navLinks, whatsappHref } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#inicio" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-full bg-brand text-brand-foreground">
            <Recycle className="size-4" />
          </span>
          <span className="text-lg">Reciclama</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaLink
            href={whatsappHref()}
            external
            className="rounded-full"
          >
            Escribir por WhatsApp
          </CtaLink>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button variant="outline" size="icon" className="md:hidden" />
            }
          >
            <Menu className="size-4" />
            <span className="sr-only">Abrir menú</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 p-6">
            <SheetHeader className="p-0">
              <SheetTitle className="flex items-center gap-2">
                <span className="flex size-7 items-center justify-center rounded-full bg-brand text-brand-foreground">
                  <Recycle className="size-3.5" />
                </span>
                Reciclama
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <CtaLink
              href={whatsappHref()}
              external
              className="mt-4 w-full rounded-full"
              onClick={() => setOpen(false)}
            >
              Escribir por WhatsApp
            </CtaLink>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
