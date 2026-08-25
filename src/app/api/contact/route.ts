import { NextResponse } from "next/server";

import { site } from "@/content/site";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  /** Honeypot — real users never fill this in. */
  company?: unknown;
};

const asString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

function validate(body: Payload) {
  const name = asString(body.name);
  const email = asString(body.email);
  const message = asString(body.message);
  const errors: Record<string, string> = {};

  if (!name) errors.name = "Please enter your name.";
  else if (name.length > 120) errors.name = "That name is too long.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "That doesn't look like a valid email address.";

  if (!message) errors.message = "Please tell us how we can help.";
  else if (message.length > 5000) errors.message = "Please keep it under 5000 characters.";

  return { name, email, message, errors };
}

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot: pretend it worked so bots don't learn anything.
  if (asString(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message, errors } = validate(body);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "validation", errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  // No provider wired up yet — tell the client so it can offer a mailto
  // fallback rather than silently swallowing the enquiry.
  if (!apiKey || !from) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [site.email],
        reply_to: email,
        subject: `New enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      console.error("Resend rejected the message", await response.text());
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
