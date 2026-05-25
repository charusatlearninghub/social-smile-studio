import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental Services — SOCIAL DENTIST" },
      {
        name: "description",
        content:
          "Implants, aligners, smile design, whitening, root canal and more — premium dentistry tailored to your smile.",
      },
      { property: "og:title", content: "Dental Services — SOCIAL DENTIST" },
      {
        property: "og:description",
        content: "Explore premium dental treatments at SOCIAL DENTIST.",
      },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <div className="pt-10">
      <Services />
      <WhyChooseUs />
    </div>
  ),
});
