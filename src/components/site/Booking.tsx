import { motion } from "framer-motion";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { useLanguage } from "@/hooks/use-language";

export function Booking() {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-surface p-8 shadow-glow ring-1 ring-border md:p-12"
        >
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("booking.eyebrow")}
            </span>
            <h2 className="mt-4 text-4xl font-bold text-ink">{t("booking.title")}</h2>
            <p className="mt-3 text-ink-soft">
              {t("booking.description")}{" "}
              <a
                href="https://wa.me/916353317847"
                className="font-semibold text-primary hover:underline"
              >
                +91 63533 17847
              </a>
              .
            </p>
          </div>

          <AppointmentForm />
        </motion.div>
      </div>
    </section>
  );
}
