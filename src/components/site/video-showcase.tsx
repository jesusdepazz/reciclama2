import { Reveal } from "@/components/motion/reveal";

export function VideoShowcase() {
  return (
    <section className="border-b border-border/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Así trabajamos
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Un vistazo real a nuestro proceso de recolección y reciclaje en
            Guatemala.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-md sm:max-w-lg">
          <video
            className="w-full rounded-3xl border border-border/60 shadow-lg"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/videos/reciclama-operacion.mp4`}
            controls
            preload="metadata"
            playsInline
          />
        </Reveal>
      </div>
    </section>
  );
}
