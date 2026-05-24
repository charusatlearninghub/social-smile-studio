import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-patient.jpg";
import clinicImg from "@/assets/clinic-lab.jpg";
import { CompareSlider } from "@/components/site/CompareSlider";
import { useLanguage } from "@/hooks/use-language";
import { TREATMENTS, type Treatment } from "@/lib/clinic";

type SmileCase = {
  id: string;
  treatment: Treatment;
  captionKey: string;
  before: string;
  after: string;
};

const cases: SmileCase[] = [
  {
    id: "whitening-1",
    treatment: "Teeth Whitening",
    captionKey: "whitening1",
    before: g3,
    after: g1,
  },
  {
    id: "aligners-1",
    treatment: "Braces & Aligners",
    captionKey: "aligners1",
    before: g4,
    after: heroImg,
  },
  {
    id: "smile-design-1",
    treatment: "Smile Design",
    captionKey: "smileDesign1",
    before: g2,
    after: g1,
  },
  {
    id: "implants-1",
    treatment: "Dental Implants",
    captionKey: "implants1",
    before: clinicImg,
    after: heroImg,
  },
  {
    id: "cleaning-1",
    treatment: "Teeth Cleaning",
    captionKey: "cleaning1",
    before: g4,
    after: g3,
  },
];

export function SmileResults() {
  const { t, treatmentLabel } = useLanguage();
  const [filter, setFilter] = useState<Treatment | "All">("All");
  const [activeId, setActiveId] = useState(cases[0].id);

  const filtered = useMemo(
    () => (filter === "All" ? cases : cases.filter((c) => c.treatment === filter)),
    [filter],
  );

  const active = filtered.find((c) => c.id === activeId) ?? filtered[0];

  const filterOptions: (Treatment | "All")[] = ["All", ...TREATMENTS];

  return (
    <section id="results" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("results.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("results.title")}</h2>
          <p className="mt-4 text-ink-soft">{t("results.subtitle")}</p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filterOptions.map((option) => {
            const count =
              option === "All" ? cases.length : cases.filter((c) => c.treatment === option).length;
            if (option !== "All" && count === 0) return null;

            const label = option === "All" ? t("results.all") : treatmentLabel(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setFilter(option);
                  const next =
                    option === "All" ? cases[0] : cases.find((c) => c.treatment === option);
                  if (next) setActiveId(next.id);
                }}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  filter === option
                    ? "bg-ink text-background shadow-soft"
                    : "border border-border bg-surface text-ink-soft hover:text-ink"
                }`}
              >
                {label}
                {option !== "All" && <span className="ml-1.5 opacity-60">({count})</span>}
              </button>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-sm text-ink-soft">{t("results.empty")}</p>
        ) : (
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_320px]">
            <motion.div
              key={active?.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {active && (
                <>
                  <CompareSlider
                    beforeSrc={active.before}
                    afterSrc={active.after}
                    beforeAlt={`${t("results.before")} ${treatmentLabel(active.treatment)}`}
                    afterAlt={`${t("results.after")} ${treatmentLabel(active.treatment)}`}
                    beforeLabel={t("results.before")}
                    afterLabel={t("results.after")}
                    compareLabel={t("results.compareLabel")}
                  />
                  <p className="mt-4 text-center text-sm text-ink-soft lg:text-left">
                    {t(`results.cases.${active.captionKey}`)}
                  </p>
                </>
              )}
            </motion.div>

            <div className="flex flex-col gap-3 lg:sticky lg:top-28">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                    active?.id === item.id
                      ? "border-primary bg-surface shadow-glow"
                      : "border-border bg-surface hover:border-primary/40"
                  }`}
                >
                  <img
                    src={item.after}
                    alt=""
                    className="size-16 shrink-0 rounded-xl object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold text-ink">{treatmentLabel(item.treatment)}</div>
                    <div className="mt-1 line-clamp-2 text-xs text-ink-soft">
                      {t(`results.cases.${item.captionKey}`)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
