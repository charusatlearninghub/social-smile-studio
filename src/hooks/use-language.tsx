import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  translations,
  TREATMENT_KEYS,
  type Locale,
  type TranslationTree,
  type TreatmentKey,
} from "@/i18n/translations";

const STORAGE_KEY = "social-dentist-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
  treatments: TranslationTree["treatments"];
  treatmentLabel: (englishTreatment: string) => string;
  treatmentToEnglish: (key: TreatmentKey) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getNestedValue(obj: unknown, path: string): string {
  const value = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  return typeof value === "string" ? value : path;
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "gu" ? "gu" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);
  const [fading, setFading] = useState(false);

  const setLocale = useCallback((next: Locale) => {
    if (next === locale) return;
    setFading(true);
    window.setTimeout(() => {
      setLocaleState(next);
      localStorage.setItem(STORAGE_KEY, next);
      setFading(false);
    }, 180);
  }, [locale]);

  useEffect(() => {
    document.documentElement.lang = locale === "gu" ? "gu" : "en";
    document.documentElement.classList.toggle("lang-gu", locale === "gu");
  }, [locale]);

  const dict = translations[locale];

  const t = useCallback((path: string) => getNestedValue(dict, path), [dict]);

  const treatmentLabel = useCallback(
    (englishTreatment: string) => {
      const key = TREATMENT_KEYS[englishTreatment];
      return key ? dict.treatments[key] : englishTreatment;
    },
    [dict],
  );

  const treatmentToEnglish = useCallback(
    (key: TreatmentKey) => translations.en.treatments[key],
    [],
  );

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
      treatments: dict.treatments,
      treatmentLabel,
      treatmentToEnglish,
    }),
    [locale, setLocale, t, dict.treatments, treatmentLabel, treatmentToEnglish],
  );

  return (
    <LanguageContext.Provider value={value}>
      <div
        className={`lang-content transition-opacity duration-300 ease-out ${
          fading ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
