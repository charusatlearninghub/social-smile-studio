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
  Calendar,
} from "lucide-react";
import { useAppointment } from "@/hooks/use-appointment";
import { useLanguage } from "@/hooks/use-language";
import type { TreatmentKey } from "@/i18n/translations";

const services: {
  icon: typeof Sparkles;
  key: TreatmentKey;
  treatment: string;
}[] = [
  { icon: Sparkles, key: "teethCleaning", treatment: "Teeth Cleaning" },
  { icon: Stethoscope, key: "dentalImplants", treatment: "Dental Implants" },
  { icon: Syringe, key: "rootCanal", treatment: "Root Canal" },
  { icon: Brackets, key: "bracesAligners", treatment: "Braces & Aligners" },
  { icon: Smile, key: "teethWhitening", treatment: "Teeth Whitening" },
  { icon: Activity, key: "smileDesign", treatment: "Smile Design" },
  { icon: Baby, key: "pediatric", treatment: "Pediatric Dentistry" },
  { icon: Siren, key: "emergency", treatment: "Emergency Care" },
];

export function Services() {
  const { openAppointment } = useAppointment();
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("services.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("services.title")}</h2>
          <p className="mt-4 text-ink-soft">{t("services.subtitle")}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
              <div className="mb-6 grid size-14 place-items-center rounded-2xl bg-gradient-brand text-white shadow-soft">
                <s.icon className="size-6" />
              </div>
              <h3 className="text-lg font-bold text-ink">{t(`services.items.${s.key}.title`)}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                {t(`services.items.${s.key}.desc`)}
              </p>
              <button
                type="button"
                onClick={() => openAppointment(s.treatment)}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-opacity hover:opacity-80"
              >
                <Calendar className="size-4" />
                {t("services.bookTreatment")}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
