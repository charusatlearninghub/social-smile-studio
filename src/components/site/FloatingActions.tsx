import { MessageCircle } from "lucide-react";
import { LanguageToggle } from "@/components/site/LanguageToggle";
import { useLanguage } from "@/hooks/use-language";
import { whatsAppUrl } from "@/lib/whatsapp";

export function FloatingActions() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
      <LanguageToggle />
      <a
        href={whatsAppUrl(t("form.whatsappConnect"))}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid size-12 place-items-center rounded-full bg-whatsapp text-white shadow-glow transition-transform hover:scale-110 active:scale-95 sm:size-14"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
        <MessageCircle className="relative size-6" />
      </a>
    </div>
  );
}
