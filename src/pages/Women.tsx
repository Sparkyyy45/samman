import { images } from "../data/images";
import { routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

export function Women() {
  return (
    <>
      <PageHero eyebrow="The Women" title="Creators. Producers. Entrepreneurs.">
        <p>
          Behind every hamper are women building their own livelihoods. Samman works with them as makers — not as a
          cause to be pitied.
        </p>
      </PageHero>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <ReplaceableImage
              src={images.cookingTandoor}
              alt="A woman cooking with a traditional outdoor oven"
              id="women-cooking"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl sm:text-4xl">The work is already theirs.</h2>
            <p className="prose-body mt-6">
              Rural women have always produced — food, flavour, surplus, skill. What they have not always had is a
              market that travels, a price that holds, and a buyer who is not standing in the next lane.
            </p>
            <p className="prose-body mt-4">
              Samman is that route. Locally rooted products, made by women, carried to customers and companies beyond
              their immediate geography.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <p className="eyebrow">Portraits</p>
            <h2 className="display mt-4 max-w-2xl text-3xl sm:text-4xl">
              Names, villages and first-person stories will be published with consent — not invented for a website.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: images.portraitWarm, alt: "Portrait of a smiling woman in traditional clothing", id: "women-p1" },
              { src: images.portraitField, alt: "A woman in a sari standing outdoors", id: "women-p2" },
              { src: images.portraitSari, alt: "Portrait of a senior woman in a sari", id: "women-p3" },
              { src: images.harvestPortrait, alt: "A woman harvesting grain", id: "women-p4" },
            ].map((p) => (
              <Reveal key={p.id}>
                <ReplaceableImage src={p.src} alt={p.alt} id={p.id} className="aspect-[3/4] w-full" />
                <p className="mt-3 text-xs font-light text-muted">Community producer portrait</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8">
          <Reveal>
            <p className="font-serif text-3xl italic leading-snug text-ink sm:text-4xl">
              “They are not the subject of a campaign. They are the makers.”
            </p>
            <p className="mt-6 text-sm font-light tracking-wide text-muted">— The standard we write to</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <ButtonLink to={routes.shop}>See what they create</ButtonLink>
              <ButtonLink to={routes.work} variant="secondary">
                Our Work
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
