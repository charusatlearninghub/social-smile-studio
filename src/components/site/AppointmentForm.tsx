import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { TREATMENTS } from "@/lib/clinic";
import { sendAppointmentToWhatsApp, whatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/hooks/use-language";

type AppointmentFormProps = {
  defaultTreatment?: string;
  compact?: boolean;
  onSubmitted?: () => void;
};

export function AppointmentForm({
  defaultTreatment = "",
  compact = false,
  onSubmitted,
}: AppointmentFormProps) {
  const { t, locale, treatmentLabel } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [treatment, setTreatment] = useState(defaultTreatment);

  useEffect(() => {
    setTreatment(defaultTreatment);
  }, [defaultTreatment]);

  const whatsappLabels = {
    greeting: t("whatsapp.greeting"),
    name: t("whatsapp.name"),
    phone: t("whatsapp.phone"),
    treatment: t("whatsapp.treatment"),
    datetime: t("whatsapp.datetime"),
    notes: t("whatsapp.notes"),
    footer: t("whatsapp.footer"),
    notSpecified: t("whatsapp.notSpecified"),
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-gradient-brand p-8 text-center text-primary-foreground">
        <p className="text-lg font-bold">{t("form.successTitle")}</p>
        <p className="mt-2 text-sm opacity-90">{t("form.successBody")}</p>
        <a
          href={whatsAppUrl()}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-3 text-sm font-semibold backdrop-blur transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-4" />
          {t("form.openWhatsAppAgain")}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const englishTreatment = String(data.get("treatment") ?? treatment);
        sendAppointmentToWhatsApp(
          {
            name: String(data.get("name") ?? ""),
            phone: String(data.get("phone") ?? ""),
            treatment: treatmentLabel(englishTreatment),
            datetime: String(data.get("datetime") ?? ""),
            message: String(data.get("message") ?? ""),
          },
          whatsappLabels,
          locale,
        );
        setSubmitted(true);
        onSubmitted?.();
      }}
      className={compact ? "grid gap-4" : "mt-10 grid gap-5"}
    >
      <div className={`grid gap-5 ${compact ? "" : "md:grid-cols-2"}`}>
        <Input label={t("form.fullName")} name="name" required />
        <Input label={t("form.phone")} name="phone" type="tel" required />
      </div>
      <div className={`grid gap-5 ${compact ? "" : "md:grid-cols-2"}`}>
        <Field label={t("form.treatmentType")}>
          <select
            name="treatment"
            required
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm text-ink outline-none transition-all focus:border-primary"
          >
            <option value="">{t("form.selectTreatment")}</option>
            {TREATMENTS.map((tr) => (
              <option key={tr} value={tr}>
                {treatmentLabel(tr)}
              </option>
            ))}
          </select>
        </Field>
        <Input label={t("form.dateTime")} name="datetime" type="datetime-local" required />
      </div>
      <Field label={t("form.message")}>
        <textarea
          name="message"
          rows={compact ? 2 : 3}
          placeholder={t("form.messagePlaceholder")}
          className="w-full resize-none rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm text-ink placeholder:text-ink-soft outline-none transition-all focus:border-primary"
        />
      </Field>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="flex-1 rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
        >
          {t("form.confirmWhatsApp")}
        </button>
        <a
          href={whatsAppUrl(t("form.whatsappQuick"))}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 font-bold text-white transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-5" />
          {t("form.quickChat")}
        </a>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-ink-soft">{label}</span>
      {children}
    </label>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  const { label, ...rest } = props;
  return (
    <Field label={label}>
      <input
        {...rest}
        className="w-full rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm text-ink placeholder:text-ink-soft outline-none transition-all focus:border-primary"
      />
    </Field>
  );
}
