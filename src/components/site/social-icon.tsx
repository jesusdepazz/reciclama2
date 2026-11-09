type SocialIconProps = {
  slug: "facebook" | "instagram";
  className?: string;
};

export function SocialIcon({ slug, className }: SocialIconProps) {
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt=""
      aria-hidden
      className={className}
      style={{ filter: "grayscale(1) opacity(0.75)" }}
    />
  );
}
