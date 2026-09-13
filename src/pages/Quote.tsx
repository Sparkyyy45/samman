import { QuoteForm } from "../components/QuoteForm";
import { Reveal } from "../components/Reveal";
import { Link, routes } from "../context/NavContext";

export function Quote() {
  return (
    <section className="bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Corporate &amp; Bulk Orders</p>
            <h1 className="display mt-4 text-4xl sm:text-5xl">Request a corporate quote.</h1>
            <p className="prose-body mt-6">
              Tell us your company, estimated quantity, occasion, and target delivery date. We will prepare a formal proposal
              covering volume tiers, co-branding options, and delivery logistics.
            </p>
            <ul className="mt-10 space-y-4 text-sm font-light text-ink-soft">
              <li className="flex gap-3">
                <span className="font-serif italic text-terracotta-dark">01</span>
                Samman Signature Hamper · ₹999 reference price (volume discounts apply)
              </li>
              <li className="flex gap-3">
                <span className="font-serif italic text-terracotta-dark">02</span>
                Built for scale — from team milestones of 25 to 1,000+ festive hampers
              </li>
              <li className="flex gap-3">
                <span className="font-serif italic text-terracotta-dark">03</span>
                Co-branding: custom logo sleeve &amp; leadership greeting cards (50+ units)
              </li>
              <li className="flex gap-3">
                <span className="font-serif italic text-terracotta-dark">04</span>
                Pan-India door-to-door or single-drop HQ delivery with valid GST invoicing
              </li>
            </ul>
            <p className="mt-10 text-sm font-light text-muted">
              Need more details before requesting?{" "}
              <Link to={routes.hamper} className="underline decoration-ink/20 underline-offset-4 hover:text-ink">
                Inspect the hamper
              </Link>{" "}
              or review{" "}
              <Link to={routes.corporate} className="underline decoration-ink/20 underline-offset-4 hover:text-ink">
                corporate capabilities
              </Link>
              .
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <div className="border border-ink/10 bg-cream p-6 sm:p-10 shadow-xs">
              <QuoteForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
