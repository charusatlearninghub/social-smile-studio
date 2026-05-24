import { motion } from "framer-motion";
import {
  Sparkles,
  Smile,
  Activity,
  Stethoscope,
  Baby,
  Brackets,
  Syringe,
  Siren,
} from "lucide-react";

const services = [
  { icon: Sparkles, title: "Teeth Cleaning", desc: "Professional prophylaxis for a healthy microbiome." },
  { icon: Stethoscope, title: "Dental Implants", desc: "Biocompatible titanium replacements that last." },
  { icon: Syringe, title: "Root Canal", desc: "Pain-free endodontic therapy in a single visit." },
  { icon: Brackets, title: "Braces & Aligners", desc: "Invisalign-certified discreet alignment." },
  { icon: Smile, title: "Teeth Whitening", desc: "Laser-grade brightening for a radiant glow." },
  { icon: Activity, title: "Smile Design", desc: "Custom porcelain veneers with 3D simulation." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Gentle care for our youngest patients." },
  { icon: Siren, title: "Emergency Care", desc: "Same-day appointments when minutes matter." },
];

export function Services() {
  return (
    <section id="services" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            What we do
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">
            Premium services, end-to-end.
          </h2>
          <p className="mt-4 text-ink-soft">
            Precision dentistry tailored to your unique facial aesthetics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-soft">
                <s.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
