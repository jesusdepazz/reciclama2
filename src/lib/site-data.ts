import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Cpu,
  Battery,
  Newspaper,
  Recycle,
  Hammer,
  Shield,
  Layers,
  Truck,
  FileCheck,
  Users,
  Leaf,
} from "lucide-react";

export const SITE = {
  name: "Reciclama",
  tagline: "Reciclaje industrial y doméstico en Guatemala",
  whatsappNumber: "+50242995528",
  whatsappMessage: "Hola, necesito información sobre reciclaje",
  facebookUrl: "https://www.facebook.com/chatarraycomprademateriales/",
  instagramUrl: "https://www.instagram.com/reciclama/",
};

export function whatsappHref(message = SITE.whatsappMessage) {
  const digits = SITE.whatsappNumber.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const images = {
  heroScrapYard:
    "https://images.unsplash.com/photo-1722695694560-f452b0919d3a?w=2000&q=80&auto=format&fit=crop",
  cardboardBales:
    "https://images.unsplash.com/photo-1788734170194-043a8a994606?w=1400&q=80&auto=format&fit=crop",
  electronicsPile:
    "https://images.unsplash.com/photo-1717667745934-53091623e8ee?w=1200&q=70&auto=format&fit=crop",
};

export type Material = {
  label: string;
  icon: LucideIcon;
};

export const materials: Material[] = [
  { label: "Hierro", icon: Hammer },
  { label: "Papel y cartón", icon: Newspaper },
  { label: "Electrónicos", icon: Cpu },
  { label: "Bronce y cobre", icon: Layers },
  { label: "Aluminio", icon: Boxes },
  { label: "Plástico", icon: Recycle },
  { label: "Baterías", icon: Battery },
];

export type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image?: string;
};

export const services: Service[] = [
  {
    id: "recoleccion",
    title: "Proceso de recolección",
    short: "Coordinamos la logística completa en tus instalaciones.",
    description:
      "Visitamos tu empresa o bodega, pesamos el material en sitio y programamos la frecuencia de recolección que necesites, sin que tengas que trasladar nada.",
    icon: Truck,
  },
  {
    id: "hierro",
    title: "Reciclaje de hierro",
    short: "Compra y recolección de chatarra y estructuras de hierro.",
    description:
      "Retiramos estructuras, piezas y chatarra de hierro de proyectos industriales, construcción o demolición, con pesaje transparente frente a tu equipo.",
    icon: Hammer,
  },
  {
    id: "electronicos",
    title: "Reciclaje de electrónicos",
    short: "Equipo de cómputo y aparatos electrónicos fuera de uso.",
    description:
      "Damos salida responsable a computadoras, monitores, cables y equipo electrónico obsoleto, evitando que terminen en vertederos.",
    icon: Cpu,
    image: images.electronicsPile,
  },
  {
    id: "papel",
    title: "Reciclaje de papel",
    short: "Papel, cartón y archivo que tu empresa ya no necesita.",
    description:
      "Recolectamos papel de oficina, cartón y archivo muerto para reincorporarlos al ciclo de producción de nuevo papel.",
    icon: Newspaper,
  },
  {
    id: "otros",
    title: "Otros materiales",
    short: "Bronce, cobre, aluminio, plástico y baterías.",
    description:
      "Compramos metales no ferrosos, plástico industrial y baterías, dándoles el proceso de reciclaje adecuado según el tipo de material.",
    icon: Layers,
  },
  {
    id: "destruccion",
    title: "Destrucción total",
    short: "Trituración y certificación de destrucción de activos.",
    description:
      "Trituramos discos duros, documentos y equipo con información sensible, y entregamos un certificado de destrucción para tu empresa.",
    icon: Shield,
  },
];

export type Credential = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const credentials: Credential[] = [
  {
    title: "Licencia ambiental vigente",
    description: "Operamos bajo los requisitos legales para el manejo de desechos en Guatemala.",
    icon: FileCheck,
  },
  {
    title: "Equipo propio de recolección",
    description: "Vehículos y personal dedicados para proyectos de cualquier tamaño.",
    icon: Truck,
  },
  {
    title: "Atendemos empresas y particulares",
    description: "Desde una planta industrial hasta la limpieza de una bodega en casa.",
    icon: Users,
  },
  {
    title: "Enfoque en economía circular",
    description: "Cada material recolectado se dirige a su proceso final como nueva materia prima.",
    icon: Leaf,
  },
];

export const values = [
  "Puntualidad",
  "Responsabilidad",
  "Seguridad",
  "Honestidad",
  "Justicia",
  "Trabajo en equipo",
];

export const navLinks = [
  { href: "#reciclaje", label: "Reciclaje" },
  { href: "#empresa", label: "La empresa" },
  { href: "#contacto", label: "Contáctenos" },
];
