import { createFileRoute } from "@tanstack/react-router";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Appointment — SOCIAL DENTIST" },
      {
        name: "description",
        content:
          "Book your dental appointment online or via WhatsApp. Same-day slots available at SOCIAL DENTIST.",
      },
      { property: "og:title", content: "Book Appointment — SOCIAL DENTIST" },
      {
        property: "og:description",
        content: "Reserve your appointment in seconds.",
      },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: () => (
    <div className="pt-10">
      <Booking />
      <Contact />
    </div>
  ),
});
