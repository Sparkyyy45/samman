import { type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Link } from "../context/NavContext";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "cream";

const variants: Record<Variant, string> = {
  primary:
    "bg-terracotta-dark text-cream hover:bg-madder border border-terracotta-dark",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink hover:text-cream",
  ghost: "bg-transparent text-ink border-0 hover:text-terracotta-dark px-0",
  dark: "bg-ink text-cream hover:bg-ink-soft border border-ink",
  cream:
    "bg-cream text-ink hover:bg-ivory border border-cream",
};

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

export function Button({
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link to={to} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}
