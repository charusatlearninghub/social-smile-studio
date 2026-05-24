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
      className="glass flex flex-col gap-1 rounded-xl p-1 shadow-glow sm:gap-1.5 sm:rounded-2xl sm:p-1.5"
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
            className={`flex w-[7.5rem] items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold transition-all duration-300 sm:w-auto sm:min-w-[132px] sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2.5 sm:text-sm ${
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
