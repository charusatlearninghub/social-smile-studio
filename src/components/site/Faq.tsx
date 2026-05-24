import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(0);

  const faqs = [
    { q: t("faq.items.pain.q"), a: t("faq.items.pain.a") },
    { q: t("faq.items.aligners.q"), a: t("faq.items.aligners.a") },
    { q: t("faq.items.emergency.q"), a: t("faq.items.emergency.a") },
    { q: t("faq.items.cost.q"), a: t("faq.items.cost.a") },
  ];

  return (
    <section id="faq" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("faq.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("faq.title")}</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-surface">
                <button
                  onClick={() => setOpen(active ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="text-base font-bold text-ink">{f.q}</span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    {active ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {active && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-ink-soft">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
