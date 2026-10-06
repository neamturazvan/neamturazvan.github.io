import type { ExternalLink as LinkData } from "@/data/profile";
export function ExternalLink({
  link,
  className = "",
}: {
  link: LinkData;
  className?: string;
}) {
  if (!link.href)
    return (
      <span className={`unavailable ${className}`}>
        <span>{link.label}</span>
        <span className="placeholder-label">Not added yet</span>
      </span>
    );
  return (
    <a
      className={className}
      href={link.href}
      {...(link.href.startsWith("https://")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {link.label}
    </a>
  );
}
