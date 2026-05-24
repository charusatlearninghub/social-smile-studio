import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, HeartHandshake, Cpu } from "lucide-react";
import labImg from "@/assets/clinic-lab.jpg";
import { useLanguage } from "@/hooks/use-language";

export function About() {
  const { t } = useLanguage();

  const pillars = [
    { icon: ShieldCheck, label: t("about.pillars.experienced") },
    { icon: Cpu, label: t("about.pillars.digital") },
    { icon: Sparkles, label: t("about.pillars.painFree") },
    { icon: HeartHandshake, label: t("about.pillars.friendly") },
  ];

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-ink p-5 text-background sm:rounded-[40px] sm:p-8 lg:p-20"
        >
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="min-w-0 lg:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {t("about.eyebrow")}
              </span>
              <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                {t("about.title")}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/70 sm:mt-6 sm:text-lg">
                {t("about.description")}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
                {pillars.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur sm:p-4"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white sm:size-10">
                      <Icon className="size-4 sm:size-5" />
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-semibold leading-snug sm:text-[0.9375rem]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 min-w-0 sm:mt-10 lg:mt-0 lg:w-1/2">
              <img
                src={labImg}
                alt={t("about.imageAlt")}
                loading="lazy"
                width={1280}
                height={1024}
                className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-white/10 sm:rounded-3xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
