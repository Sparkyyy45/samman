import { type ReactNode } from "react";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { routes } from "../context/NavContext";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-ink/8 bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display mt-5 max-w-4xl text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {children && <div className="prose-body mt-6 max-w-2xl">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function ClosingCta({
  title,
  body,
  buttonText = "Request a Bulk Quote",
  buttonLink = routes.quote,
}: {
  title: string;
  body: string;
  buttonText?: string;
  buttonLink?: string;
}) {
  return (
    <section className="bg-terracotta-dark text-cream">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
        <Reveal>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-relaxed text-cream/80">{body}</p>
          <div className="mt-10 flex justify-center">
            <ButtonLink to={buttonLink} variant="cream">
              {buttonText}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
