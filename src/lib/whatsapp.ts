import { CLINIC_WHATSAPP_NUMBER } from "@/lib/clinic";

export type AppointmentPayload = {
  name: string;
  phone: string;
  treatment: string;
  datetime: string;
  message?: string;
};

export type AppointmentMessageLabels = {
  greeting: string;
  name: string;
  phone: string;
  treatment: string;
  datetime: string;
  notes: string;
  footer: string;
  notSpecified: string;
};

export function whatsAppUrl(message?: string) {
  const base = `https://wa.me/${CLINIC_WHATSAPP_NUMBER}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message?: string) {
  window.open(whatsAppUrl(message), "_blank", "noopener,noreferrer");
}

function formatAppointmentDateTime(value: string, notSpecified: string, locale: string) {
  if (!value) return notSpecified;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(locale === "gu" ? "gu-IN" : "en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function buildAppointmentMessage(
  data: AppointmentPayload,
  labels: AppointmentMessageLabels,
  locale = "en",
) {
  const notes = data.message?.trim();
  return [
    labels.greeting,
    "",
    `*${labels.name}:* ${data.name}`,
    `*${labels.phone}:* ${data.phone}`,
    `*${labels.treatment}:* ${data.treatment}`,
    `*${labels.datetime}:* ${formatAppointmentDateTime(data.datetime, labels.notSpecified, locale)}`,
    notes ? `*${labels.notes}:* ${notes}` : null,
    "",
    labels.footer,
  ]
    .filter(Boolean)
    .join("\n");
}

export function sendAppointmentToWhatsApp(
  data: AppointmentPayload,
  labels: AppointmentMessageLabels,
  locale = "en",
) {
  openWhatsApp(buildAppointmentMessage(data, labels, locale));
}
