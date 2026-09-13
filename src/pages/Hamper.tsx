import { useState } from "react";
import { images } from "../data/images";
import { routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

const gallery = [
  { src: images.hamperHero, alt: "Open Samman Signature Hamper", id: "hamper-g1" },
  { src: images.hamperClosed, alt: "Closed Samman hamper box", id: "hamper-g2" },
  { src: images.hamperLifestyle, alt: "Hamper in a workplace setting", id: "hamper-g3" },
  { src: images.hamperDetail, alt: "Packing the hamper by hand", id: "hamper-g4" },
];

const contents = [
  {
    title: "Curated Rural Favourite",
    body: "A pantry staple drawn from rural kitchens — pure stone-ground spices that bring genuine warmth to everyday meals.",
    img: images.itemSpice,
    id: "item-1",
  },
  {
    title: "Traditional Pantry Preserve",
    body: "Handcrafted pickle in the lineage of home achar — sun-matured with mustard oil and regional seed spices.",
    img: images.itemPreserve,
    id: "item-2",
  },
  {
    title: "Heritage Grains & Millets",
    body: "Nutrient-dense indigenous grains grown by smallholder farmers, celebrated for natural wellness.",
    img: images.itemGrain,
    id: "item-3",
  },
  {
    title: "Cold-Pressed Seed Oil",
    body: "Pure, unrefined edible oil pressed slowly to retain natural aroma, flavour, and nutrition.",
    img: images.itemOil,
    id: "item-4",
  },
  {
    title: "Aromatic Masala Blend",
    body: "A bespoke blend crafted by women elders — the quiet luxury of an authentic village masala dabba.",
    img: images.itemPantry,
    id: "item-5",
  },
];

export function Hamper() {
  const [active, setActive] = useState(0);

  return (
    <>
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <ReplaceableImage
              src={gallery[active].src}
              alt={gallery[active].alt}
              id={gallery[active].id}
              className="aspect-[4/5] w-full"
            />
            <div className="mt-3 grid grid-cols-4 gap-2">
              {gallery.map((g, i) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  className={`overflow-hidden border cursor-pointer ${
                    active === i ? "border-ink ring-1 ring-ink" : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={g.src} alt="" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs font-light text-muted">Curation photography · Handcrafted gift presentation shown</p>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">The Shop</p>
            <h1 className="display mt-4 text-4xl sm:text-5xl">Samman Signature Hamper</h1>
            <p className="mt-5 font-serif text-4xl text-ink">₹999</p>
            <p className="mt-2 text-sm font-light text-muted">
              Reference price per hamper · Corporate and volume orders quoted individually with custom tier pricing.
            </p>
            <p className="prose-body mt-8">
              Four to five curated artisanal food items inspired by the flavours of rural India, assembled as an elegant corporate gift. Handcrafted by
              rural women producers. Designed for Diwali, employee appreciation, milestones, and esteemed clients.
            </p>
            <p className="prose-body mt-4">
              Each hamper is assembled with care. The selections below represent our core culinary curation, sourced directly from producer collectives in small batches.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink to={routes.quote}>Request a Bulk Quote</ButtonLink>
              <ButtonLink to={routes.corporate} variant="secondary">
                Corporate Capabilities
              </ButtonLink>
            </div>
            <div className="mt-10 space-y-3 border-t border-ink/10 pt-8 text-sm font-light text-ink-soft">
              <div className="flex items-center gap-2.5">
                <span className="text-terracotta-dark font-medium">✓</span>
                <span>Minimum Order Quantity: <strong>25 units</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-terracotta-dark font-medium">✓</span>
                <span>Custom corporate sleeve &amp; leadership card (Orders 50+)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-terracotta-dark font-medium">✓</span>
                <span>Pan-India single-drop HQ or individual employee doorstep dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-terracotta-dark font-medium">✓</span>
                <span>GST invoice &amp; vendor onboarding paperwork provided</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/8 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">Inside the hamper</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Five artisanal foods. One meaningful gift.</h2>
            <p className="prose-body mt-4 max-w-2xl">
              Each ingredient is ethically harvested and prepared using generational culinary knowledge by women collectives.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {contents.map((item, i) => (
              <Reveal key={item.id} delay={i * 60}>
                <ReplaceableImage src={item.img} alt={item.title} id={item.id} className="aspect-square w-full" />
                <p className="mt-4 font-serif text-lg text-ink">{item.title}</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <ReplaceableImage
              src={images.festiveGifts}
              alt="Women exchanging gifts in festive attire"
              id="hamper-gifting"
              className="aspect-[4/3] w-full"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">Why this hamper</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">A gift that carries a story — without making a speech of it.</h2>
            <p className="prose-body mt-6">
              Employees open something worth eating. Companies give something worth standing behind. Rural women sell
              something they made. That is the whole design.
            </p>
            <div className="mt-8">
              <ButtonLink to={routes.quote}>Request a Bulk Quote</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
