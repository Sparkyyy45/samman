import { useState, type ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link, routes, useNav } from "../context/NavContext";

export function Layout({ children }: { children: ReactNode }) {
  const { path } = useNav();
  const showMobileCta = path !== routes.quote;
  const [showProposalBanner, setShowProposalBanner] = useState(true);

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById("main");
          el?.focus();
          el?.scrollIntoView();
        }}
      >
        Skip to content
      </a>

      {/* Subtle NGO Proposal Preview Badge */}
      {showProposalBanner && (
        <aside
          aria-label="Proposal Demo Notice"
          className="border-b border-gold/30 bg-ink-soft px-4 py-2 text-center text-cream relative z-50 transition-all duration-300"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 text-left sm:text-center text-[0.68rem] tracking-wider text-cream/90">
            <div className="flex items-center gap-2 mx-auto">
              <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-medium text-gold">NGO Proposal Concept:</strong> Live interactive demo. Test corporate quote workflows &amp; WhatsApp/Email lead dispatches in real-time.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setShowProposalBanner(false)}
              className="text-cream/60 hover:text-cream ml-2 p-1 text-xs shrink-0 cursor-pointer"
              aria-label="Dismiss proposal preview notice"
            >
              ✕
            </button>
          </div>
        </aside>
      )}

      <Header />

      <main
        id="main"
        tabIndex={-1}
        className="page-enter outline-none flex-1"
        key={path}
      >
        {children}
      </main>

      <div className={showMobileCta ? "pb-24 sm:pb-0" : ""}>
        <Footer />
      </div>

      {showMobileCta && (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-ivory/95 p-3 backdrop-blur-md sm:hidden shadow-lg">
          <Link
            to={routes.quote}
            className="flex w-full items-center justify-center bg-terracotta-dark px-4 py-3.5 text-[0.7rem] font-medium tracking-[0.18em] uppercase text-cream shadow-sm active:bg-madder transition-colors"
          >
            Request a Bulk Quote
          </Link>
        </div>
      )}
    </div>
  );
}
