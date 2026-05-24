import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Visit us
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">
            Drop by — we'd love to meet you.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <InfoCard icon={MapPin} title="Address">
              102 Marble Arch, Suite 402
              <br /> London, UK
            </InfoCard>
            <InfoCard icon={Phone} title="Phone">+1 (800) SOCIAL-D</InfoCard>
            <InfoCard icon={Mail} title="Email">hello@socialdentist.co</InfoCard>
            <InfoCard icon={Clock} title="Working Hours">
              Mon – Fri · 08:00 – 20:00
              <br /> Saturday · 10:00 – 16:00
            </InfoCard>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-soft lg:col-span-3">
            <iframe
              title="Clinic map"
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
