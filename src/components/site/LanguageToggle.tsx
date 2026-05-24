import { Languages } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import type { Locale } from "@/i18n/translations";

const options: { locale: Locale; labelKey: "english" | "gujarati" }[] = [
  { locale: "en", labelKey: "english" },
  { locale: "gu", labelKey: "gujarati" },
];

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className="glass flex flex-col gap-1.5 rounded-2xl p-1.5 shadow-glow"
      role="group"
      aria-label="Language"
    >
      {options.map(({ locale: loc, labelKey }) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => setLocale(loc)}
            className={`flex min-w-[132px] items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
              active
                ? "bg-primary text-primary-foreground shadow-soft scale-[1.02]"
                : "text-ink hover:bg-surface/80"
            }`}
            aria-pressed={active}
          >
            <span className="leading-tight">{t(`lang.${labelKey}`)}</span>
            {active && <Languages className="size-4 shrink-0 opacity-80" />}
          </button>
        );
      })}
    </div>
  );
}
