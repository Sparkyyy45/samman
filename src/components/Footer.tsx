import { Link, routes } from "../context/NavContext";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Organisation",
    links: [
      { to: routes.about, label: "About Samman" },
      { to: routes.work, label: "Our Work & Impact" },
      { to: routes.women, label: "The Women Creators" },
      { to: routes.corporate, label: "Corporate Partnership" },
    ],
  },
  {
    title: "Gifting & Shop",
    links: [
      { to: routes.shop, label: "All Collections" },
      { to: routes.hamper, label: "Signature Hamper (₹999)" },
      { to: routes.corporate, label: "Corporate Gifting" },
      { to: routes.quote, label: "Request a Bulk Quote" },
    ],
  },
  {
    title: "Information",
    links: [
      { to: routes.contact, label: "Contact & Enquiries" },
      { to: routes.privacy, label: "Privacy Policy" },
      { to: routes.terms, label: "Terms of Supply" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo light />
            <p className="mt-6 max-w-sm text-[0.95rem] font-light leading-relaxed text-cream/75">
              Thoughtful gifting. Meaningful livelihoods. Samman works with rural women to bring the authentic flavours of rural
              India to corporate tables across the country.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-light text-cream/60">
              <span>pan-India delivery</span>
              <span>·</span>
              <span>GST invoices provided</span>
              <span>·</span>
              <a href="mailto:partnerships@samman.org" className="text-gold hover:underline">
                partnerships@samman.org
              </a>
            </div>
            <p className="mt-6 font-serif text-2xl italic text-gold/90">सम्मान</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[0.65rem] font-medium tracking-[0.22em] uppercase text-gold">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm font-light text-cream/75 transition-colors hover:text-cream">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-light tracking-wide text-cream/50">
            © {new Date().getFullYear()} Samman. All rights reserved.
          </p>
          <p className="text-xs font-light tracking-wide text-cream/50">
            A social-impact enterprise proposal &amp; demonstration platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
