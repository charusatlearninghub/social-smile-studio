import { Instagram, Facebook } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/clinic";
import { useLanguage } from "@/hooks/use-language";

const socials = [
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
] as const;

export function Footer() {
  const { t } = useLanguage();

  const serviceItems = [
    { label: t("footer.serviceItems.implants"), href: "#services" },
    { label: t("footer.serviceItems.aligners"), href: "#services" },
    { label: t("footer.serviceItems.whitening"), href: "#services" },
    { label: t("footer.serviceItems.smileDesign"), href: "#services" },
    { label: t("footer.serviceItems.pediatrics"), href: "#services" },
  ];

  const quickLinks = [
    { label: t("footer.links.about"), href: "#about" },
    { label: t("footer.links.doctors"), href: "#doctors" },
    { label: t("footer.links.results"), href: "#results" },
    { label: t("footer.links.gallery"), href: "#gallery" },
    { label: t("footer.links.book"), href: "#booking" },
    { label: t("footer.links.contact"), href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand shadow-soft">
                <span className="block size-3 rounded-sm bg-white/90" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-extrabold tracking-tight text-ink">
                  SOCIAL DENTIST
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.18em] text-ink-soft">
                  {t("nav.tagline")}
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label={label}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-ink">{t("footer.services")}</h4>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {serviceItems.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ink">{t("footer.quickLinks")}</h4>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} SOCIAL DENTIST. {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
}
