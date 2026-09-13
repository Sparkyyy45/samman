import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { Link, routes, useNav } from "../context/NavContext";
import { Logo } from "./Logo";
import { ButtonLink } from "./Button";

const nav = [
  { to: routes.about, label: "About" },
  { to: routes.work, label: "Our Work" },
  { to: routes.women, label: "The Women" },
  { to: routes.shop, label: "Shop" },
  { to: routes.corporate, label: "Corporate Gifting" },
];

export function Header() {
  const { path } = useNav();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-5 py-2 text-center sm:px-8">
          <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-cream/90 sm:text-[0.7rem]">
            Corporate &amp; bulk orders for Diwali and year-round gifting
          </p>
          <span className="hidden text-gold sm:inline" aria-hidden>
            ·
          </span>
          <Link
            to={routes.quote}
            className="hidden text-[0.65rem] font-medium tracking-[0.18em] uppercase text-gold underline-offset-4 hover:underline sm:inline"
          >
            Request a bulk quote
          </Link>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 border-b transition-colors duration-300",
          scrolled ? "border-ink/10 bg-ivory/95 backdrop-blur-md shadow-xs" : "border-ink/8 bg-ivory",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active = path === item.to || (item.to === routes.shop && path.startsWith("/shop"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors",
                    active ? "text-terracotta-dark" : "text-ink-soft hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1 left-0 h-px w-full bg-terracotta-dark" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink to={routes.quote} className="hidden sm:inline-flex px-5 py-2.5 text-[0.65rem]">
              Request a Bulk Quote
            </ButtonLink>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center lg:hidden cursor-pointer"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity duration-300",
                    open ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-full bg-ink transition-all duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with dedicated Top Bar & Cross Button */}
      <div
        className={cn(
          "fixed inset-0 z-60 bg-ivory transition-all duration-300 lg:hidden flex flex-col",
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
        role="dialog"
        aria-modal={open}
        aria-label="Mobile Navigation"
      >
        {/* Drawer Header Bar with Logo and prominent '✕' Close Button */}
        <div className="flex items-center justify-between border-b border-ink/10 bg-ivory px-5 py-4 sm:px-8 shrink-0">
          <Logo onClick={() => setOpen(false)} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-cream transition-all duration-200 cursor-pointer active:scale-95"
            aria-label="Close menu and return to page"
            title="Close menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => {
              const active = path === item.to || (item.to === routes.shop && path.startsWith("/shop"));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-serif text-3xl sm:text-4xl font-medium py-2.5 transition-colors flex items-center justify-between",
                    active ? "text-terracotta-dark" : "text-ink hover:text-terracotta-dark",
                  )}
                >
                  <span>{item.label}</span>
                  {active && (
                    <span className="text-[0.65rem] uppercase tracking-widest text-terracotta-dark font-sans font-medium">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
            <Link
              to={routes.contact}
              onClick={() => setOpen(false)}
              className={cn(
                "font-serif text-3xl sm:text-4xl font-medium py-2.5 transition-colors flex items-center justify-between",
                path === routes.contact ? "text-terracotta-dark" : "text-ink hover:text-terracotta-dark",
              )}
            >
              <span>Contact</span>
              {path === routes.contact && (
                <span className="text-[0.65rem] uppercase tracking-widest text-terracotta-dark font-sans font-medium">
                  Current
                </span>
              )}
            </Link>
          </nav>

          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-col gap-3">
            <ButtonLink to={routes.quote} onClick={() => setOpen(false)} className="w-full">
              Request a Bulk Quote
            </ButtonLink>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 text-xs tracking-wider uppercase font-medium text-muted hover:text-ink py-2 cursor-pointer transition-colors"
            >
              <span>✕ Return to page</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
