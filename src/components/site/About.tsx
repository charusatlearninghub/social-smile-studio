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
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] bg-ink p-8 text-background sm:p-12 lg:p-20"
        >
          <div className="lg:flex lg:items-center lg:gap-16">
            <div className="lg:w-1/2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                {t("about.eyebrow")}
              </span>
              <h2 className="mt-4 text-4xl font-bold lg:text-5xl">{t("about.title")}</h2>
              <p className="mt-6 max-w-lg text-lg text-background/70">{t("about.description")}</p>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {pillars.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-sm font-semibold">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <img
                src={labImg}
                alt={t("about.imageAlt")}
                loading="lazy"
                width={1280}
                height={1024}
                className="aspect-[4/3] w-full rounded-3xl object-cover ring-1 ring-white/10"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
