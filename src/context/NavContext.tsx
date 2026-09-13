import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export const routes = {
  home: "/",
  about: "/about",
  work: "/work",
  women: "/women",
  shop: "/shop",
  hamper: "/shop/signature-hamper",
  corporate: "/corporate",
  quote: "/quote",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export type Path = (typeof routes)[keyof typeof routes];

const titles: Record<string, string> = {
  [routes.home]: "Samman — Thoughtful Gifting. Meaningful Livelihoods.",
  [routes.about]: "About Samman — Our Story & Working Partnership",
  [routes.work]: "Our Work & Impact — Samman",
  [routes.women]: "The Women Creators — Samman",
  [routes.shop]: "Shop & Collections — Samman",
  [routes.hamper]: "Samman Signature Hamper — ₹999 Corporate Gift",
  [routes.corporate]: "Corporate Gifting at Scale — Samman",
  [routes.quote]: "Request a Corporate Bulk Quote — Samman",
  [routes.contact]: "Contact & Partnerships — Samman",
  [routes.privacy]: "Privacy Policy — Samman",
  [routes.terms]: "Terms of Supply — Samman",
};

const descriptions: Record<string, string> = {
  [routes.home]:
    "Samman is a social-impact enterprise working with rural women as creators and entrepreneurs. Discover our work, and the Samman Signature Hamper — a ₹999 gift made for corporate and employee gifting.",
  [routes.about]:
    "Learn about Samman's mission: building practical partnerships with rural women producers to bring traditional culinary craft to modern tables.",
  [routes.work]:
    "Explore the three pillars of Samman: Livelihoods & Enterprise, Culinary Heritage, and Pan-India Market Access.",
  [routes.women]:
    "Meet the rural women producers behind Samman. Creators, makers, and entrepreneurs building sustainable livelihoods.",
  [routes.shop]:
    "Discover handcrafted products from rural India. The Samman Signature Hamper is curated for corporate and festive gifting.",
  [routes.hamper]:
    "The Samman Signature Hamper — ₹999 reference price. Five curated artisanal foods handcrafted by rural women for corporate gifting.",
  [routes.corporate]:
    "Corporate gifting at scale. Co-branding, Pan-India multi-drop delivery, GST compliance, and meaningful social impact for Diwali and year-round celebrations.",
  [routes.quote]:
    "Request a customized corporate bulk quotation for the Samman Signature Hamper. Tailored volumes, co-branding, and Pan-India dispatch.",
  [routes.contact]:
    "Contact Samman for corporate gifting partnerships, bulk orders, and collaboration inquiries.",
  [routes.privacy]:
    "Privacy Policy — Confidentiality standards for corporate clients and partner data at Samman.",
  [routes.terms]:
    "Terms of Supply — Guidelines governing corporate quotations, artisanal batches, and delivery timelines at Samman.",
};

type NavContextValue = {
  path: string;
  navigate: (to: string) => void;
};

const NavContext = createContext<NavContextValue | null>(null);

function normalise(input: string) {
  let value = input.trim();
  if (value.startsWith("#")) value = value.slice(1);
  if (!value.startsWith("/")) value = `/${value}`;
  if (value.length > 1 && value.endsWith("/")) value = value.slice(0, -1);
  return value || "/";
}

function readPath() {
  const hash = window.location.hash.replace(/^#/, "");
  if (hash) return normalise(hash);
  return normalise(window.location.pathname);
}

function hashHref(to: string) {
  const path = normalise(to);
  return path === "/" ? "#/" : `#${path}`;
}

export function NavProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState(() => readPath());

  const navigate = useCallback((to: string) => {
    const next = normalise(to);
    const href = hashHref(next);
    if (window.location.hash !== href) {
      window.location.hash = href;
    }
    setPath(next);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onChange = () => {
      setPath(readPath());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("hashchange", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  useEffect(() => {
    document.title = titles[path] ?? "Samman — Thoughtful Gifting. Meaningful Livelihoods.";
    const meta = document.querySelector('meta[name="description"]');
    if (meta && descriptions[path]) {
      meta.setAttribute("content", descriptions[path]);
    }
  }, [path]);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);

  return <NavContext.Provider value={value}>{children}</NavContext.Provider>;
}

export function useNav() {
  const ctx = useContext(NavContext);
  if (!ctx) throw new Error("useNav must be used within NavProvider");
  return ctx;
}

export function Link({
  to,
  children,
  className,
  onClick,
  "aria-current": ariaCurrent,
  "aria-label": ariaLabel,
}: {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-current"?: "page" | undefined;
  "aria-label"?: string;
}) {
  const { path, navigate } = useNav();
  const active = path === to;

  return (
    <a
      href={hashHref(to)}
      className={className}
      aria-current={ariaCurrent ?? (active ? "page" : undefined)}
      aria-label={ariaLabel}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        onClick?.();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
