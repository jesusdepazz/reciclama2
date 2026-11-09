import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";

type CtaLinkProps = React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants> & {
    external?: boolean;
  };

export function CtaLink({
  className,
  variant,
  size,
  external,
  ...props
}: CtaLinkProps) {
  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      className={cn(buttonVariants({ variant, size, className }))}
      {...externalProps}
      {...props}
    />
  );
}
