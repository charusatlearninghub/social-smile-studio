import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Doctors } from "@/components/site/Doctors";
import { Booking } from "@/components/site/Booking";
import { Testimonials } from "@/components/site/Testimonials";
import { Gallery } from "@/components/site/Gallery";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOCIAL DENTIST — Creating Confident Smiles" },
      {
        name: "description",
        content:
          "Premium modern dental clinic offering implants, aligners, smile design, and pain-free digital dentistry. Book your appointment today.",
      },
      { property: "og:title", content: "SOCIAL DENTIST — Creating Confident Smiles" },
      {
        property: "og:description",
        content: "Advanced dental care with modern technology. Book online or via WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Doctors />
      <Testimonials />
      <Gallery />
      <Booking />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
