"use client";

import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { whatsappHref } from "@/lib/site-data";

export function WhatsappFab() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-13 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-brand/30"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
      whileTap={{ scale: 0.92 }}
    >
      <MessageCircle className="size-6" />
    </motion.a>
  );
}
