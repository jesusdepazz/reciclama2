"use client";

import { Battery, Cpu, Hammer, Newspaper, Recycle } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";

const orbitIcons = [Hammer, Newspaper, Cpu, Battery, Recycle];

export function OrbitVisual({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 14 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 14 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      className={className}
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformPerspective: 800,
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div aria-hidden className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
      <div className="absolute inset-6 rounded-full border border-white/30" />
      <div className="absolute inset-[22%] rounded-full border border-white/40" />
      <div className="absolute inset-[40%] flex items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-black/30">
        <Recycle className="size-10" />
      </div>

      {orbitIcons.map((Icon, index) => {
        const angle = (360 / orbitIcons.length) * index;
        return (
          <motion.div
            key={index}
            className="absolute inset-6"
            style={{ rotate: angle }}
            animate={shouldReduceMotion ? undefined : { rotate: angle + 360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                style={{ rotate: -angle }}
                animate={shouldReduceMotion ? undefined : { rotate: -angle - 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm"
              >
                <Icon className="size-4.5" />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
