import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-glow transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
      <MessageCircle className="relative size-6" />
    </a>
  );
}
