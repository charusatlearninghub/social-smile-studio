import { createFileRoute } from "@tanstack/react-router";
import { Doctors } from "@/components/site/Doctors";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "Meet Our Doctors — SOCIAL DENTIST" },
      {
        name: "description",
        content:
          "Meet the expert dental team behind SOCIAL DENTIST — credentialed specialists in implants, aligners, and smile design.",
      },
      { property: "og:title", content: "Meet Our Doctors — SOCIAL DENTIST" },
      {
        property: "og:description",
        content: "Our experienced dental specialists.",
      },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
  component: () => (
    <div className="pt-10">
      <Doctors />
    </div>
  ),
});
