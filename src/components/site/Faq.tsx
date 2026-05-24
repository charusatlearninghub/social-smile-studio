import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Is treatment painful?",
    a: "Our protocols are designed for comfort — local anesthesia, sedation options, and gentle digital instruments mean most patients describe their visit as relaxing.",
  },
  {
    q: "Do you provide aligners?",
    a: "Yes. We're a certified Invisalign provider and use 3D iTero scanning to plan your discreet, removable aligners.",
  },
  {
    q: "What are your emergency timings?",
    a: "We reserve daily emergency slots and offer same-day appointments. Call or WhatsApp us and we'll fit you in.",
  },
  {
    q: "Can I get a cost estimation upfront?",
    a: "Absolutely. After a quick consultation we share a transparent plan — no hidden charges, ever.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Questions, answered
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">Frequently asked</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-surface"
              >
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
