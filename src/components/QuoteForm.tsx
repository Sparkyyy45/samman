import { useState, type FormEvent, type ReactNode } from "react";
import { cn } from "../utils/cn";
import { Button } from "./Button";

const occasions = [
  "Diwali Gifting",
  "Employee Appreciation",
  "Corporate Festival",
  "Client / Partner Gifting",
  "Annual Conference / Offsite",
  "Other Celebration",
] as const;

type Fields = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  quantity: string;
  occasion: string;
  location: string;
  date: string;
  message: string;
};

const empty: Fields = {
  company: "",
  contact: "",
  email: "",
  phone: "",
  quantity: "",
  occasion: "",
  location: "",
  date: "",
  message: "",
};

function Field({
  label,
  htmlFor,
  children,
  error,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  error?: string;
}) {
  return (
    <div className="block">
      <label htmlFor={htmlFor} className="mb-2 block text-[0.65rem] font-medium tracking-[0.18em] uppercase text-muted">
        {label}
      </label>
      {children}
      {error && <span className="mt-1.5 block text-xs text-terracotta-dark">{error}</span>}
    </div>
  );
}

const inputClass =
  "w-full border border-ink/15 bg-ivory px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-terracotta-dark";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const todayStr = new Date().toISOString().split("T")[0];

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Fields> = {};
    if (!values.company.trim()) next.company = "Please enter your company name.";
    if (!values.contact.trim()) next.contact = "Please enter a contact person.";
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid work email.";
    const digitsOnly = values.phone.replace(/\D/g, "");
    if (!values.phone.trim()) {
      next.phone = "Please enter a phone number.";
    } else if (digitsOnly.length < 10) {
      next.phone = "Please enter a valid phone number (min. 10 digits).";
    }
    if (!values.quantity.trim()) next.quantity = "Please share an approximate quantity.";
    if (!values.occasion) next.occasion = "Please select an occasion.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }

    const refId = `SAMMAN-Q${Math.floor(1000 + Math.random() * 9000)}`;
    try {
      const existing = JSON.parse(localStorage.getItem("samman_quote_requests") || "[]");
      const record = { refId, timestamp: new Date().toISOString(), ...values };
      localStorage.setItem("samman_quote_requests", JSON.stringify([record, ...existing]));
    } catch {
      // LocalStorage fallback if unavailable
    }

    setSubmittedRef(refId);
  }

  if (submittedRef) {
    const quoteSummaryText = `*Bulk Quote Enquiry — Samman Gifting*
*Reference:* ${submittedRef}
*Company:* ${values.company}
*Contact:* ${values.contact}
*Work Email:* ${values.email}
*Phone:* ${values.phone}
*Quantity:* ${values.quantity} hampers
*Occasion:* ${values.occasion}
*Delivery Location:* ${values.location || "To be confirmed"}
*Target Delivery Date:* ${values.date || "Flexible"}
*Requirements:* ${values.message || "None specified"}`;

    const waLink = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteSummaryText)}`;
    const mailtoLink = `mailto:partnerships@samman.org?subject=${encodeURIComponent(
      `Bulk Quote Request [${submittedRef}]: ${values.company}`,
    )}&body=${encodeURIComponent(quoteSummaryText.replace(/\*/g, ""))}`;

    return (
      <div className="border border-ink/10 bg-cream px-6 py-10 text-center sm:px-12 sm:py-14 animate-fade-in">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-terracotta-dark/10 px-3 py-1 text-[0.68rem] font-medium tracking-[0.16em] uppercase text-terracotta-dark">
          Ref: {submittedRef}
        </span>
        <h3 className="display mt-4 text-3xl sm:text-4xl text-ink">Thank you. Your request is registered.</h3>
        <p className="prose-body mx-auto mt-4 max-w-lg text-sm sm:text-base">
          We have generated your formal quote reference. Our team will review availability, co-branding possibilities,
          and logistical timelines for your delivery.
        </p>

        {/* Structured summary block */}
        <div className="mx-auto mt-8 max-w-md rounded border border-ink/10 bg-ivory p-5 text-left text-xs leading-relaxed text-ink-soft shadow-xs">
          <p className="font-medium uppercase tracking-[0.15em] text-muted text-[0.65rem]">Request Summary</p>
          <div className="mt-3 grid grid-cols-2 gap-2 text-ink">
            <span className="text-muted">Company:</span>
            <span className="font-medium text-right">{values.company}</span>
            <span className="text-muted">Quantity:</span>
            <span className="font-medium text-right">{values.quantity} hampers</span>
            <span className="text-muted">Occasion:</span>
            <span className="font-medium text-right">{values.occasion}</span>
            {values.location && (
              <>
                <span className="text-muted">Location:</span>
                <span className="font-medium text-right">{values.location}</span>
              </>
            )}
            {values.date && (
              <>
                <span className="text-muted">Target Date:</span>
                <span className="font-medium text-right">{values.date}</span>
              </>
            )}
          </div>
        </div>

        {/* Action dispatch buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#25D366] px-6 py-3 text-[0.72rem] font-medium tracking-[0.16em] uppercase text-white hover:bg-[#1EBE5B] transition-colors rounded-xs shadow-xs"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </a>
          <a
            href={mailtoLink}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 border border-ink/20 bg-ivory px-6 py-3 text-[0.72rem] font-medium tracking-[0.16em] uppercase text-ink hover:border-ink hover:bg-ink hover:text-cream transition-colors rounded-xs shadow-xs"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Open in Email
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setSubmittedRef(null);
            setValues(empty);
          }}
          className="mt-8 text-xs font-light text-muted underline decoration-muted/30 underline-offset-4 hover:text-ink cursor-pointer"
        >
          Submit another quotation request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className={cn("grid gap-6", compact ? "" : "sm:grid-cols-2")}>
      <Field label="Company Name" htmlFor="company" error={errors.company}>
        <input
          id="company"
          name="company"
          placeholder="e.g. Tata Consultancy, Infosys, Zomato"
          autoComplete="organization"
          className={inputClass}
          value={values.company}
          onChange={(e) => set("company", e.target.value)}
        />
      </Field>

      <Field label="Contact Person" htmlFor="contact" error={errors.contact}>
        <input
          id="contact"
          name="contact"
          placeholder="e.g. Priya Sharma"
          autoComplete="name"
          className={inputClass}
          value={values.contact}
          onChange={(e) => set("contact", e.target.value)}
        />
      </Field>

      <Field label="Work Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@company.com"
          autoComplete="email"
          className={inputClass}
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </Field>

      <Field label="Phone / WhatsApp" htmlFor="phone" error={errors.phone}>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
          className={inputClass}
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
        />
      </Field>

      <Field label="Approximate Quantity" htmlFor="quantity" error={errors.quantity}>
        <input
          id="quantity"
          name="quantity"
          inputMode="numeric"
          placeholder="e.g. 50, 200, 1000 (Min. 25)"
          className={inputClass}
          value={values.quantity}
          onChange={(e) => set("quantity", e.target.value)}
        />
      </Field>

      <Field label="Occasion" htmlFor="occasion" error={errors.occasion}>
        <div className="relative">
          <select
            id="occasion"
            name="occasion"
            className={cn(inputClass, "appearance-none pr-10 cursor-pointer")}
            value={values.occasion}
            onChange={(e) => set("occasion", e.target.value)}
          >
            <option value="">Select an occasion</option>
            {occasions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-muted" aria-hidden="true">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1.5L6 6.5L11 1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Field>

      <Field label="Delivery Location / Scope" htmlFor="location">
        <input
          id="location"
          name="location"
          placeholder="e.g. Mumbai HQ / Pan-India Remote"
          className={inputClass}
          value={values.location}
          onChange={(e) => set("location", e.target.value)}
        />
      </Field>

      <Field label="Required Delivery Date" htmlFor="date">
        <input
          id="date"
          name="date"
          type="date"
          min={todayStr}
          className={inputClass}
          value={values.date}
          onChange={(e) => set("date", e.target.value)}
        />
      </Field>

      <div className={compact ? "" : "sm:col-span-2"}>
        <Field label="Customization & Packaging Notes" htmlFor="message">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Co-branding requests (logo sleeve, greeting cards), specific delivery splits, custom dietary preferences…"
            className={cn(inputClass, "resize-y")}
            value={values.message}
            onChange={(e) => set("message", e.target.value)}
          />
        </Field>
      </div>

      <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", compact ? "" : "sm:col-span-2")}>
        <p className="text-xs font-light text-muted">
          ₹999 reference price · Custom volume pricing &amp; GST invoices provided on confirmation.
        </p>
        <Button type="submit" className="shrink-0">
          Request Quote
        </Button>
      </div>
    </form>
  );
}
