import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Clinic Gallery — SOCIAL DENTIST" },
      {
        name: "description",
        content:
          "A look inside the SOCIAL DENTIST clinic — modern interiors, technology, and a calm patient experience.",
      },
      { property: "og:title", content: "Clinic Gallery — SOCIAL DENTIST" },
      {
        property: "og:description",
        content: "Step inside our premium dental clinic.",
      },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <div className="pt-10">
      <Gallery />
    </div>
  ),
});
