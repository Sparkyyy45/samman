import { cn } from "../utils/cn";
import { Link } from "../context/NavContext";

export function Logo({ className, light = false, onClick }: { className?: string; light?: boolean; onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} className={cn("group inline-flex items-center gap-2.5", className)} aria-label="Samman home">
      <span className="relative flex h-8 w-8 items-center justify-center" aria-hidden>
        <svg viewBox="0 0 32 32" className="h-8 w-8">
          <rect width="32" height="32" rx="2" className={light ? "fill-cream" : "fill-terracotta-dark"} />
          <path
            d="M16 6.8c.35 2.6 1.5 4.85 3.35 6.6C21.3 15.2 22.6 17.6 22.6 20.5c0 3.15-2.7 5.3-6.6 5.3s-6.6-2.15-6.6-5.3c0-2.9 1.3-5.3 3.25-7.1 1.85-1.75 3-4 3.35-6.6z"
            className={light ? "fill-terracotta-dark" : "fill-cream"}
          />
        </svg>
      </span>
      <span
        className={cn(
          "font-serif text-[1.65rem] font-medium leading-none tracking-tight",
          light ? "text-cream" : "text-ink",
        )}
      >
        Samman
      </span>
    </Link>
  );
}
