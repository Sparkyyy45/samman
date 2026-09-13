import { images } from "../data/images";
import { routes } from "../context/NavContext";
import { ButtonLink } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { ReplaceableImage } from "../components/ReplaceableImage";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Our story is a working partnership.">
        <p>
          Samman exists so that rural women can create, sell and be paid for work that is already theirs — foods,
          flavours and knowledge rooted in rural India.
        </p>
      </PageHero>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <ReplaceableImage
              src={images.walkingField}
              alt="Women walking through agricultural fields carrying vessels"
              id="about-fields"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">The name</p>
            <h2 className="display mt-4 text-3xl sm:text-4xl">Samman means honour.</h2>
            <p className="prose-body mt-6">
              It is the word we chose because it is the thing most often missing from how rural women’s work is treated:
              not as craft, not as enterprise, but as something invisible.
            </p>
            <p className="prose-body mt-4">
              Honour, here, is practical. It looks like a product that can be sold. A price that can be quoted. A
              company that can order a hundred, or a thousand, hampers without the exchange becoming charity.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow">Mission</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">What we are here to do.</h2>
              <p className="prose-body mt-6">
                To enable rural women to create and sell products of genuine quality, rooted in the tastes and
                traditions of rural India — and to build a market, especially among companies, that can sustain that
                work.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="eyebrow">How we work</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">Not charity. Exchange.</h2>
              <p className="prose-body mt-6">
                Women produce. Samman carries. Customers — families and, first of all, organisations — buy. The Shop is
                one instrument of the mission, not a departure from it.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-5">
            <Reveal>
              <ReplaceableImage
                src={images.clayPots}
                alt="Handcrafted clay pots in an Indian market"
                id="about-craft"
                className="aspect-[3/4] w-full"
              />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p className="eyebrow">What we will not do</p>
              <h2 className="display mt-4 text-3xl sm:text-4xl">No invented impact.</h2>
              <p className="prose-body mt-6">
                This page will not list villages, headcounts, certifications or awards that have not been earned and
                recorded. When those facts exist, they will be published with care.
              </p>
              <p className="prose-body mt-4">
                Until then, the claim is simpler: rural women make products of real quality; Samman exists to give those
                products a market worthy of them.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonLink to={routes.work}>Our Work</ButtonLink>
                <ButtonLink to={routes.women} variant="secondary">
                  The Women
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
