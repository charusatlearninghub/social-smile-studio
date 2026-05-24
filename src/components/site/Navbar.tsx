import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useAppointment } from "@/hooks/use-appointment";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const { openAppointment } = useAppointment();
  const { t } = useLanguage();

  const links = [
    { href: "#services", label: t("nav.services") },
    { href: "#results", label: t("nav.results") },
    { href: "#doctors", label: t("nav.doctors") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const book = (treatment?: string) => {
    setOpen(false);
    openAppointment(treatment);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 glass">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-soft">
            <span className="block size-3 rounded-sm bg-white/90" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
              SOCIAL DENTIST
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-ink-soft">
              {t("nav.tagline")}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full border border-border px-3 py-2 text-xs font-medium text-ink-soft hover:text-ink"
            aria-label="Toggle theme"
          >
            {dark ? t("nav.light") : t("nav.dark")}
          </button>
          <button
            type="button"
            onClick={() => book()}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-all hover:opacity-90"
          >
            {t("nav.bookNow")}
          </button>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={t("nav.menu")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink-soft hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => book()}
              className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-background"
            >
              {t("nav.bookAppointment")}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
