import { useState, type FormEvent } from "react";
import { Button } from "../components/Button";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { ButtonLink } from "../components/Button";
import { routes } from "../context/NavContext";

export function Contact() {
  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [sentRef, setSentRef] = useState<string | null>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const ref = `SAMMAN-C${Math.floor(1000 + Math.random() * 9000)}`;
    try {
      const existing = JSON.parse(localStorage.getItem("samman_general_enquiries") || "[]");
      localStorage.setItem(
        "samman_general_enquiries",
        JSON.stringify([{ ref, timestamp: new Date().toISOString(), ...formValues }, ...existing]),
      );
    } catch {
      // LocalStorage fallback
    }
    setSentRef(ref);
  }

  const waText = `*General Enquiry — Samman*
*Reference:* ${sentRef}
*Name:* ${formValues.name}
*Email:* ${formValues.email}
*Message:* ${formValues.message}`;

  const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
  const mailtoLink = `mailto:hello@samman.org?subject=${encodeURIComponent(
    `Enquiry [${sentRef}]: ${formValues.name}`,
  )}&body=${encodeURIComponent(waText.replace(/\*/g, ""))}`;

  return (
    <>
      <PageHero eyebrow="Contact &amp; Partnerships" title="Get in touch.">
        <p>
          Whether you are exploring a corporate partnership, looking to stock our hampers, or wishing to collaborate with
          our rural women producer collectives, we welcome the conversation.
        </p>
      </PageHero>

      <section className="bg-ivory">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <Reveal>
            <h2 className="display text-3xl">General enquiries</h2>
            {sentRef ? (
              <div className="mt-6 border border-ink/10 bg-cream p-6 sm:p-8 animate-fade-in">
                <span className="inline-block rounded-full bg-terracotta-dark/10 px-3 py-1 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-terracotta-dark">
                  Ref: {sentRef}
                </span>
                <h3 className="display mt-3 text-2xl text-ink">Thank you, {formValues.name}.</h3>
                <p className="prose-body mt-3 text-sm">
                  Your message has been registered. You can dispatch it directly via WhatsApp or email for an immediate response.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-white hover:bg-[#1EBE5B] transition-colors"
                  >
                    Send via WhatsApp
                  </a>
                  <a
                    href={mailtoLink}
                    className="inline-flex items-center justify-center gap-2 border border-ink/20 bg-ivory px-5 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase text-ink hover:bg-ink hover:text-cream transition-colors"
                  >
                    Open in Email
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSentRef(null);
                    setFormValues({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 block text-xs font-light text-muted underline decoration-muted/30 hover:text-ink cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                <label className="block">
                  <span className="mb-2 block text-[0.65rem] font-medium tracking-[0.18em] uppercase text-muted">
                    Your Name
                  </span>
                  <input
                    required
                    name="name"
                    placeholder="e.g. Rahul Verma"
                    value={formValues.name}
                    onChange={(e) => setFormValues((v) => ({ ...v, name: e.target.value }))}
                    className="w-full border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-terracotta-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[0.65rem] font-medium tracking-[0.18em] uppercase text-muted">
                    Work or Personal Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="rahul@company.org"
                    value={formValues.email}
                    onChange={(e) => setFormValues((v) => ({ ...v, email: e.target.value }))}
                    className="w-full border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-terracotta-dark"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[0.65rem] font-medium tracking-[0.18em] uppercase text-muted">
                    Message
                  </span>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirements or collaboration ideas…"
                    value={formValues.message}
                    onChange={(e) => setFormValues((v) => ({ ...v, message: e.target.value }))}
                    className="w-full border border-ink/15 bg-ivory px-4 py-3 text-sm outline-none focus:border-terracotta-dark resize-y"
                  />
                </label>
                <div>
                  <Button type="submit">Send Message</Button>
                </div>
              </form>
            )}
          </Reveal>

          <Reveal delay={80}>
            <div className="border border-ink/10 bg-cream p-8 sm:p-10">
              <p className="eyebrow">Corporate &amp; Bulk Orders</p>
              <h2 className="display mt-4 text-3xl">Need hampers for your company?</h2>
              <p className="prose-body mt-4">
                Corporate bulk enquiries — including quantity tiers, customized co-branding, and pan-India delivery logistics — are handled via our dedicated quotation team.
              </p>
              <div className="mt-8">
                <ButtonLink to={routes.quote}>Request a Bulk Quote</ButtonLink>
              </div>

              <div className="mt-12 border-t border-ink/10 pt-8 space-y-4">
                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terracotta-dark">
                    Direct Enquiries
                  </p>
                  <p className="mt-1 text-sm font-light text-ink-soft">
                    Corporate:{" "}
                    <a href="mailto:partnerships@samman.org" className="text-ink hover:underline font-normal">
                      partnerships@samman.org
                    </a>
                  </p>
                  <p className="mt-0.5 text-sm font-light text-ink-soft">
                    General:{" "}
                    <a href="mailto:hello@samman.org" className="text-ink hover:underline font-normal">
                      hello@samman.org
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terracotta-dark">
                    Corporate Helpdesk &amp; WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-light text-ink-soft">+91 98712 34567 (Mon–Sat, 9:30 AM – 6:30 PM IST)</p>
                </div>

                <div>
                  <p className="text-[0.65rem] font-medium tracking-[0.18em] uppercase text-terracotta-dark">
                    Operations &amp; Fulfilment
                  </p>
                  <p className="mt-1 text-sm font-light text-ink-soft">
                    National Fulfilment Center · New Delhi &amp; Maharashtra Regional Collectives
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
