import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("contact.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("contact.title")}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title={t("contact.address")}>
              {t("contact.addressLine1")}
              <br /> {t("contact.addressLine2")}
            </InfoCard>
            <InfoCard icon={Phone} title={t("contact.phone")}>
              <a href="https://wa.me/916353317847" className="hover:text-primary">
                +91 63533 17847
              </a>
            </InfoCard>
            <InfoCard icon={Mail} title={t("contact.email")}>
              hello@socialdentist.co
            </InfoCard>
            <InfoCard icon={Clock} title={t("contact.hours")}>
              {t("contact.hoursWeekday")}
              <br /> {t("contact.hoursSaturday")}
            </InfoCard>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft lg:col-span-3">
            <iframe
              title={t("contact.mapTitle")}
              src="https://www.google.com/maps?q=Marble+Arch+London&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-brand text-white">
        <Icon className="size-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-widest text-ink-soft">{title}</div>
        <div className="mt-1 text-sm font-medium text-ink">{children}</div>
      </div>
    </div>
  );
}
