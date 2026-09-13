import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";

export function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal &amp; Compliance" title="Privacy policy">
        <p>We are committed to treating personal and enterprise information with confidentiality and care.</p>
      </PageHero>
      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="space-y-6 prose-body">
              <p>
                Samman collects corporate contact information, including representative names, work email addresses,
                phone numbers, and delivery requirements solely to prepare and fulfill requested corporate quotations.
              </p>
              <h2 className="display text-2xl text-ink pt-4">Data Usage &amp; Protection</h2>
              <p>
                Information submitted through our quotation and partnership forms is treated as confidential commercial
                correspondence. We do not sell, rent, or trade partner data with third-party advertising networks.
              </p>
              <h2 className="display text-2xl text-ink pt-4">Corporate Recipient Lists</h2>
              <p>
                For multi-address remote employee deliveries, address spreadsheets provided by corporate clients are
                utilized strictly by our logistics partners for parcel dispatch and delivery tracking, after which they
                are archived securely in accordance with standard statutory requirements.
              </p>
              <p>
                For inquiries regarding data access or deletion requests, please contact{" "}
                <a href="mailto:partnerships@samman.org" className="text-terracotta-dark underline underline-offset-4">
                  partnerships@samman.org
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal &amp; Procurement" title="Terms of supply">
        <p>Guidelines governing quotations, corporate bulk orders, and artisanal production timelines.</p>
      </PageHero>
      <section className="bg-ivory">
        <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <Reveal>
            <div className="space-y-6 prose-body">
              <p>
                The ₹999 figure shown for the Samman Signature Hamper serves as a benchmark reference unit price. Formal
                corporate orders are confirmed through binding written purchase orders and proforma invoices covering
                exact quantities, packaging, co-branding artwork, and freight logistics.
              </p>
              <h2 className="display text-2xl text-ink pt-4">Artisanal Production &amp; Availability</h2>
              <p>
                Because Samman products are produced in small artisanal batches by rural women collectives, seasonal
                variations in natural ingredients may occur. Any substitutions are strictly of equal or greater value and
                communicated prior to final packaging approval.
              </p>
              <h2 className="display text-2xl text-ink pt-4">Billing &amp; Taxation</h2>
              <p>
                All corporate shipments are accompanied by official GST invoices. Volume discounts, advance payment schedules,
                and delivery milestone terms are detailed within each customized quotation.
              </p>
              <p>
                Formal terms of sale and delivery guarantees are executed upon written order approval.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
