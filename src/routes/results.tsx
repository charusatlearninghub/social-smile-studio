import { createFileRoute } from "@tanstack/react-router";
import { SmileResults } from "@/components/site/SmileResults";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Smile Results — SOCIAL DENTIST" },
      {
        name: "description",
        content:
          "Real before-and-after smile transformations and patient stories from SOCIAL DENTIST.",
      },
      { property: "og:title", content: "Smile Results — SOCIAL DENTIST" },
      {
        property: "og:description",
        content: "Before-and-after results from real patients.",
      },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: () => (
    <div className="pt-10">
      <SmileResults />
      <Testimonials />
    </div>
  ),
});
