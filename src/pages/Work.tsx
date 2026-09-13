import { images } from "../data/images";
import { routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

const areas = [
  {
    n: "01",
    title: "Livelihoods & Enterprise",
    body: "Rural women as producers and micro-entrepreneurs. Support where it is useful — making, packing, quality, the unglamorous work of getting a product ready to leave the village. The goal is a livelihood that belongs to them.",
    img: images.siftingGrain,
    id: "work-page-livelihoods",
    alt: "A woman sifting grain outdoors",
  },
  {
    n: "02",
    title: "Culinary Heritage",
    body: "The foods of rural India are not a theme. They are a body of knowledge: pickles, millets, oils, spice blends, pantry goods made the way they have been made. Samman treats that knowledge as craft with a market.",
    img: images.workKitchen,
    id: "work-page-heritage",
    alt: "A rural kitchen workspace with jars and vessels",
  },
  {
    n: "03",
    title: "Market Access",
    body: "A product that cannot travel cannot pay. Samman builds the route from producer to customer — including the corporate gifting channel that can move hundreds of hampers in a season, not a handful of jars at a mela.",
    img: images.hamperDetail,
    id: "work-page-market",
    alt: "Hands packing food products into a hamper",
  },
];

export function Work() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Three directions. One standard of respect.">
        <p>
          Exact programmes will be published as they are confirmed. What follows is the architecture of the work —
          livelihoods, heritage, and a market that reaches beyond the village.
        </p>
      </PageHero>

      {areas.map((area, i) => (
        <section key={area.n} className={i % 2 === 0 ? "bg-ivory" : "bg-cream"}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-24">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <ReplaceableImage src={area.img} alt={area.alt} id={area.id} className="aspect-[4/3] w-full" />
            </Reveal>
            <Reveal delay={80} className={i % 2 === 1 ? "lg:order-1" : ""}>
              <p className="font-serif text-sm italic text-terracotta-dark">{area.n}</p>
              <h2 className="display mt-3 text-3xl sm:text-4xl">{area.title}</h2>
              <p className="prose-body mt-6">{area.body}</p>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-24">
          <Reveal>
            <h2 className="display text-3xl text-cream sm:text-4xl">The Shop is part of the work.</h2>
            <p className="mx-auto mt-5 max-w-xl text-base font-light leading-relaxed text-cream/75">
              Selling is not a sideline. It is how products leave the village, how livelihoods are paid, and how
              companies can take part without turning the exchange into charity.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink to={routes.shop} variant="cream">
                Explore the Shop
              </ButtonLink>
              <ButtonLink to={routes.quote} variant="secondary" className="border-cream/30 text-cream hover:bg-cream hover:text-ink">
                Request a Bulk Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
