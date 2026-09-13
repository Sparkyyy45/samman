import { images } from "../data/images";
import { Link, routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

export function Shop() {
  return (
    <>
      <section className="border-b border-ink/8 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <p className="eyebrow">The Shop</p>
            <h1 className="display mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
              Products from the work — for the table, and for the workplace.
            </h1>
            <p className="prose-body mt-6 max-w-2xl">
              The Shop is how Samman’s work leaves the village. The first product is a hamper designed for corporate and
              festival gifting. Individual checkout is not offered yet; bulk enquiries are.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
          <Reveal>
            <Link to={routes.hamper} className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <ReplaceableImage
                src={images.hamperHero}
                alt="Samman Signature Hamper"
                id="shop-featured"
                className="aspect-[4/5] w-full"
              />
              <div>
                <p className="eyebrow">Featured</p>
                <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl group-hover:text-terracotta-dark transition-colors">
                  Samman Signature Hamper
                </h2>
                <p className="mt-4 font-serif text-3xl text-ink">₹999</p>
                <p className="mt-1 text-xs tracking-wide text-muted">Reference price · Corporate bulk orders quoted separately</p>
                <p className="prose-body mt-6">
                  A curated hamper of 4–5 food items inspired by the flavours and feeling of rural India. Made by rural
                  women. Intended, from the first, for Diwali and year-round corporate gifting.
                </p>
                <p className="mt-8 inline-flex items-center gap-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase text-terracotta-dark">
                  View the hamper
                  <span aria-hidden>→</span>
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3">
            <Reveal className="lg:col-span-1">
              <h2 className="display text-3xl">More from the work, in time.</h2>
              <p className="prose-body mt-4">
                Further products will be listed here as they are ready. The hamper is the beginning of the channel, not
                the whole of it.
              </p>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
              {[
                { src: images.itemSpice, label: "Single Origin Spices" },
                { src: images.itemPreserve, label: "Artisanal Seasonal Preserves" },
              ].map((item, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="relative">
                    <ReplaceableImage src={item.src} alt={item.label} id={`shop-soon-${i}`} className="aspect-square w-full" />
                    <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1 text-[0.65rem] font-medium tracking-[0.18em] uppercase text-ink shadow-xs">
                      {item.label}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <h2 className="display text-3xl text-cream sm:text-4xl">Ordering for a company?</h2>
            <p className="mt-4 max-w-md text-base font-light leading-relaxed text-cream/75">
              The Signature Hamper is built for bulk. Share quantity, occasion and delivery — Samman will send a quote.
              There is no individual checkout in this first version.
            </p>
          </Reveal>
          <Reveal delay={80} className="lg:text-right">
            <ButtonLink to={routes.quote} variant="cream">
              Request a Bulk Quote
            </ButtonLink>
          </Reveal>
        </div>
      </section>
    </>
  );
}
