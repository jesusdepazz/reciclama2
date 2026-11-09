"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  durationSeconds = 28,
}: {
  children: ReactNode;
  className?: string;
  durationSeconds?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "group/marquee relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]",
        className
      )}
    >
      <div
        className="flex shrink-0 items-center gap-3 pr-3 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover/marquee:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 items-center gap-3 pr-3 [animation:marquee_var(--marquee-duration)_linear_infinite] group-hover/marquee:[animation-play-state:paused]"
        style={{ "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}
