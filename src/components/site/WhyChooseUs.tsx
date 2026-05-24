import { motion } from "framer-motion";
import { Users, Award, Cpu, BadgeCheck, Wallet } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Patients" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Cpu, value: "100%", label: "Digital Workflow" },
  { icon: BadgeCheck, value: "12+", label: "Certified Dentists" },
  { icon: Wallet, value: "0%", label: "Hidden Costs" },
];

export function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Why choose us
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">
            Trusted by thousands. Designed for you.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-3xl border border-border bg-surface p-6 shadow-soft"
            >
              <s.icon className="size-7 text-primary" />
              <div className="mt-6 text-3xl font-extrabold text-ink lg:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-ink-soft">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
