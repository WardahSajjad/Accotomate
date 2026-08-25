"use client";

import { useState } from "react";

import { site } from "@/content/site";
import { cn } from "@/lib/cn";

type Errors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const fieldClass =
  "w-full rounded-sm border bg-surface px-4 py-3 text-body text-ink outline-none transition-colors placeholder:text-ink-soft focus:border-ink";

/** Pre-filled mailto, used when no email provider is configured server-side. */
function buildMailto(values: { name: string; email: string; message: string }) {
  const subject = `Website enquiry from ${values.name || "a visitor"}`;
  const body = `Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const update = (key: keyof typeof values) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValues((prev) => ({ ...prev, [key]: event.target.value }));

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrors({});

    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          company: form.get("company"),
        }),
      });

      if (response.ok) {
        setStatus("sent");
        setValues({ name: "", email: "", message: "" });
        return;
      }

      const data = await response.json().catch(() => ({}));

      if (response.status === 422) {
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }

      if (data.error === "not_configured") {
        // No email provider wired up yet. Rather than dead-ending the visitor,
        // hand the message straight to their mail client, pre-filled.
        window.location.href = buildMailto(values);
        setStatus("unconfigured");
        return;
      }

      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-surface-subtle p-8 md:p-10">
        <h3 className="text-h3 text-ink">Thanks — that&rsquo;s with us.</h3>
        <p className="mt-3 text-body text-ink-muted">
          We reply to every enquiry by email, usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-[0.9375rem] font-semibold text-ink underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  const mailtoFallback = buildMailto(values);

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClass, errors.name ? "border-red-500" : "border-line-strong")}
            placeholder="Jane Smith"
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClass, errors.email ? "border-red-500" : "border-line-strong")}
            placeholder="jane@company.co.uk"
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(
            fieldClass,
            "resize-y",
            errors.message ? "border-red-500" : "border-line-strong",
          )}
          placeholder="Tell us which software you use and what's taking the most time."
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Something went wrong sending that. Please try again, or email us
            directly at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold underline">
              {site.email}
            </a>
            .
          </p>
        ) : null}

        {status === "unconfigured" ? (
          <p className="rounded-sm border border-accent/30 bg-accent-soft px-4 py-3 text-sm text-ink">
            We&rsquo;ve opened your email app with this message ready to go — just
            hit send. If nothing opened,{" "}
            <a href={mailtoFallback} className="font-semibold underline">
              email us directly
            </a>
            .
          </p>
        ) : null}
      </div>

      <div>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-base font-semibold text-ink transition-colors duration-200 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
