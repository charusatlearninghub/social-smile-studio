import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "Aditi S.",
    role: "Smile Design Patient",
    quote:
      "Every visit feels like a luxury spa experience for my dental health. My new smile is everything I dreamed of.",
  },
  {
    name: "Rohan K.",
    role: "Implant Patient",
    quote:
      "Painless, transparent pricing, and finished in a single day. The team here is on another level.",
  },
  {
    name: "Maya V.",
    role: "Aligners Patient",
    quote:
      "Six months of aligners and I can't stop smiling for selfies. The digital plan made everything predictable.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];

  return (
    <section className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Loved by patients
        </span>
        <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">5-star smiles, every visit.</h2>

        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 max-w-3xl rounded-3xl bg-surface p-10 shadow-soft ring-1 ring-border"
        >
          <div className="flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} className="size-5 fill-current" />
            ))}
          </div>
          <p className="mt-6 text-xl font-medium leading-relaxed text-ink lg:text-2xl">
            "{r.quote}"
          </p>
          <div className="mt-8 text-sm">
            <div className="font-bold text-ink">{r.name}</div>
            <div className="text-ink-soft">{r.role}</div>
          </div>
        </motion.div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            onClick={() => setI((p) => (p - 1 + reviews.length) % reviews.length)}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-ink-soft hover:text-ink"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </button>
          {reviews.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
              aria-label={`Go to ${k + 1}`}
            />
          ))}
          <button
            onClick={() => setI((p) => (p + 1) % reviews.length)}
            className="grid size-11 place-items-center rounded-full border border-border bg-surface text-ink-soft hover:text-ink"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
