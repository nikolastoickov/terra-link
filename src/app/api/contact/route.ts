import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "nikolastoickov1997@gmail.com";

const FORM_LABELS: Record<string, string> = {
  "land-owner": "Vlasnik zemljišta",
  investor: "Investitor",
  contact: "Kontakt forma",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  const body = await req.json();
  const { formType, fields } = body as {
    formType: string;
    fields: Record<string, string>;
  };

  if (!formType || !fields || typeof fields !== "object") {
    return NextResponse.json({ error: "Nevalidni podaci" }, { status: 400 });
  }

  if (!(formType in FORM_LABELS)) {
    return NextResponse.json({ error: "Nepoznat tip forme" }, { status: 400 });
  }

  const label = FORM_LABELS[formType];
  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(
      ([key, value]) =>
        `<p><strong>${escapeHtml(key)}:</strong> ${escapeHtml(String(value))}</p>`
    )
    .join("");

  const { error } = await resend.emails.send({
    from: `Terra Link <formulari@${process.env.RESEND_EMAIL_DOMAIN}>`,
    to: [TO_EMAIL],
    subject: `Novi upit — ${label}`,
    html: `<h2>Novi upit: ${label}</h2>${rows}`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
