import { images } from "../data/images";
import { routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

const work = [
  {
    title: "Livelihoods & Enterprise",
    body: "We work with rural women as producers and micro-entrepreneurs — from making and packing to selling. The aim is dignified work, not dependence.",
    img: images.siftingGrain,
    id: "work-livelihoods",
  },
  {
    title: "Culinary Heritage",
    body: "Foods, recipes and pantry traditions that belong to rural India — treated as living, sellable craft, not as nostalgia.",
    img: images.spiceMarket,
    id: "work-heritage",
  },
  {
    title: "Market Access",
    body: "A channel that carries these products beyond the village — to households, and especially to companies looking for gifts with meaning.",
    img: images.hamperLifestyle,
    id: "work-market",
  },
];

const why = [
  {
    title: "Rooted in Rural India",
    body: "Every product begins in the kitchens, fields and pantries of rural communities — flavours that cannot be invented in a factory.",
  },
  {
    title: "Made by Rural Women",
    body: "Women are the producers. Samman exists to give their work a market, a price, and a presence it has long been denied.",
  },
  {
    title: "Thoughtful Corporate Gifting",
    body: "A hamper designed for Diwali, employee appreciation, festivals and client gifting — at a scale companies actually need.",
  },
  {
    title: "Meaningful Social Impact",
    body: "A purchase is a commercial exchange that creates livelihood. Not charity. Not a slogan. Work, paid fairly, reaching further.",
  },
];

export function Home() {
  return (
    <>
      {/* 1. HERO — organisation first */}
      <section className="relative bg-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-12">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-24 lg:col-span-6 lg:py-28 xl:pr-16">
            <p className="eyebrow animate-fade-up">A social-impact initiative</p>
            <h1 className="display mt-6 text-4xl sm:text-5xl lg:text-[3.65rem] xl:text-[4.15rem] animate-fade-up" style={{ animationDelay: "80ms" }}>
              Respect for the women who create.
            </h1>
            <p className="prose-body mt-6 max-w-lg animate-fade-up" style={{ animationDelay: "160ms" }}>
              Samman works with rural women as creators, producers and entrepreneurs — building a path from village
              kitchens and fields to tables, and workplaces, far beyond their own geography.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
              <ButtonLink to={routes.work}>Discover Our Work</ButtonLink>
              <ButtonLink to={routes.shop} variant="secondary">
                Explore the Shop
              </ButtonLink>
            </div>
          </div>
          <div className="relative min-h-[52vh] lg:col-span-6 lg:min-h-[88vh]">
            <ReplaceableImage
              src={images.heroFields}
              alt="Rural women working together in green fields"
              id="home-hero"
              className="absolute inset-0 h-full"
              imgClassName="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Business model in 10 seconds */}
      <section className="border-y border-ink/8 bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12">
          <p className="mb-6 text-center text-[0.65rem] font-medium tracking-[0.22em] uppercase text-muted">
            How Samman works
          </p>
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Rural Women", d: "Creators and producers." },
              { n: "02", t: "Premium Products", d: "Foods rooted in place." },
              { n: "03", t: "Samman Hamper", d: "A curated ₹999 gift." },
              { n: "04", t: "Corporate Gifting", d: "At the scale companies need." },
            ].map((step) => (
              <li key={step.n} className="text-center lg:px-4">
                <p className="font-serif text-sm italic text-terracotta-dark">{step.n}</p>
                <p className="mt-2 font-serif text-2xl text-ink">{step.t}</p>
                <p className="mt-1 text-sm font-light text-muted">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <ReplaceableImage
              src={images.womanFarmer}
              alt="A woman farmer standing beside rice fields"
              id="home-about"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">About Samman</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">Who we are, and what we do.</h2>
            <p className="prose-body mt-6">
              Samman is a social-impact initiative that enables rural women to create and sell products that carry the
              feeling and flavours of rural India. The name means honour — and that is the standard we hold ourselves
              to.
            </p>
            <p className="prose-body mt-4">
              We are not a charity in the conventional sense. We are a working partnership: women as producers, products
              as the bridge, and customers — especially companies — as participants in a fair exchange.
            </p>
            <div className="mt-8">
              <ButtonLink to={routes.about} variant="secondary">
                Our Story
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. OUR WORK */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Our Work</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">Where the organisation puts its energy.</h2>
              <p className="prose-body mt-5">
                Programmes continue to take shape. The work below describes the directions Samman is built around —
                livelihoods, heritage, and a market that reaches further.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {work.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <article>
                  <ReplaceableImage src={item.img} alt={item.title} id={item.id} className="aspect-[4/3] w-full" />
                  <h3 className="display mt-5 text-2xl">{item.title}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12">
              <ButtonLink to={routes.work} variant="secondary">
                See Our Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. THE WOMEN */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-[50vh] lg:min-h-[720px]">
            <ReplaceableImage
              src={images.cookingParatha}
              alt="A woman preparing traditional food in a rural kitchen"
              id="home-women"
              className="absolute inset-0 h-full"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">The women behind the work</p>
              <h2 className="display mt-5 text-3xl text-cream sm:text-4xl lg:text-5xl">
                Behind every hamper are women building their own livelihoods.
              </h2>
              <p className="mt-6 text-base font-light leading-relaxed text-cream/75">
                They are not the subject of a campaign. They are the makers. Samman creates a route for rural women to
                bring locally rooted products to customers — including companies — beyond their immediate geography.
              </p>
              <p className="mt-4 text-base font-light leading-relaxed text-cream/75">
                Photography and first-person accounts from the communities we work with will live here. Until then, we
                speak of them as we work with them: as producers, not as objects of sympathy.
              </p>
              <div className="mt-10">
                <ButtonLink to={routes.women} variant="cream">
                  Meet the Work
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. IMPACT / STORIES — honest placeholders */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">Stories</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">The work, in human terms.</h2>
              <p className="prose-body mt-5">
                We will not invent numbers, villages or testimonials. When stories, portraits and outcomes are ready,
                they will appear here — in the voices of the women themselves.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { img: images.portraitWarm, alt: "Portrait of a woman in traditional attire", id: "story-1" },
              { img: images.harvestPortrait, alt: "A woman harvesting grain", id: "story-2" },
              { img: images.portraitSari, alt: "Portrait of a senior woman in a sari", id: "story-3" },
            ].map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <figure>
                  <ReplaceableImage src={p.img} alt={p.alt} id={p.id} className="aspect-[3/4] w-full" />
                  <figcaption className="mt-3 text-xs font-light tracking-wide text-muted">
                    Producer Collective · Rural Field Portrait
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SHOP INTRODUCTION */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <Reveal>
            <p className="eyebrow">The Shop</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">
              From the communities we work with comes something you can take home, share and gift.
            </h2>
            <p className="prose-body mt-6">
              The Shop is not a separate business. It is a channel — a way for products created through Samman’s work
              to reach households and organisations, and for that demand to return as livelihood.
            </p>
            <p className="prose-body mt-4">
              The first offering is the Samman Signature Hamper: a curated set of 4–5 food items inspired by the
              flavours of rural India. Reference price ₹999. Designed, from the start, for corporate gifting at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink to={routes.shop}>Explore the Shop</ButtonLink>
              <ButtonLink to={routes.hamper} variant="secondary">
                The Hamper
              </ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ReplaceableImage
              src={images.hamperHero}
              alt="Samman Signature Hamper with curated rural food products"
              id="home-hamper"
              className="aspect-[4/5] w-full"
            />
            <p className="mt-3 text-center text-xs font-light tracking-wide text-muted">
              Samman Signature Hamper · Curated Artisanal Gift Edition
            </p>
          </Reveal>
        </div>
      </section>

      {/* 7. CORPORATE GIFTING */}
      <section className="bg-ivory">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow">Corporate &amp; employee gifting</p>
                <h2 className="display mt-4 text-3xl sm:text-4xl lg:text-5xl">Made for gifting at scale.</h2>
                <p className="prose-body mt-6 max-w-xl">
                  The Signature Hamper is built for Diwali, employee appreciation, corporate festivals, team
                  celebrations and client gifting. Companies request the quantity they need. Samman confirms
                  availability, pricing and delivery.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <Reveal>
                <p className="font-serif text-5xl text-ink">₹999</p>
                <p className="mt-1 text-sm font-light text-muted">Reference price / hamper · Bulk orders quoted separately</p>
              </Reveal>
            </div>
          </div>

          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
            {["Diwali gifting", "Employee appreciation", "Corporate festivals", "Team celebrations", "Client & partner gifts"].map(
              (item) => (
                <div key={item} className="bg-ivory px-5 py-8 text-center">
                  <p className="font-serif text-xl text-ink">{item}</p>
                </div>
              ),
            )}
          </div>

          <Reveal>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink to={routes.quote}>Request a Bulk Quote</ButtonLink>
              <ButtonLink to={routes.corporate} variant="secondary">
                Corporate Gifting
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY SAMMAN */}
      <section className="border-t border-ink/8 bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">Why Samman</p>
            <h2 className="display mt-4 max-w-xl text-3xl sm:text-4xl">Four things we will not compromise.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <p className="font-serif text-sm italic text-terracotta-dark">0{i + 1}</p>
                <h3 className="display mt-3 text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm font-light leading-relaxed text-ink-soft">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-terracotta-dark text-cream">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <Reveal>
            <p className="text-[0.7rem] font-medium tracking-[0.28em] uppercase text-gold">Corporate gifting</p>
            <h2 className="display mt-5 text-4xl text-cream sm:text-5xl lg:text-6xl">
              Make your next corporate gift mean more.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base font-light leading-relaxed text-cream/80">
              Celebrate your people while creating opportunities for women in rural communities. Tell us what you need
              — quantity, occasion, delivery — and we will send a quote.
            </p>
            <div className="mt-10 flex justify-center">
              <ButtonLink to={routes.quote} variant="cream">
                Request a Bulk Quote
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
