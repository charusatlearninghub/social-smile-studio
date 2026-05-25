import { Sparkles, Images, UserRound, Stethoscope, CalendarCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/use-language";

export function MobileBottomNav() {
  const { t } = useLanguage();

  const items = [
    { to: "/services" as const, label: t("nav.services"), Icon: Stethoscope },
    { to: "/results" as const, label: t("nav.results"), Icon: Sparkles },
    { to: "/gallery" as const, label: t("nav.gallery"), Icon: Images },
    { to: "/doctors" as const, label: t("nav.doctors"), Icon: UserRound },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 glass pb-[env(safe-area-inset-bottom)] md:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5 items-end px-2 py-2 text-[10px]">
        {items.slice(0, 2).map(({ to, label, Icon }) => (
          <li key={to}>
            <Link
              to={to}
              activeProps={{ className: "text-primary" }}
              className="flex flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-ink-soft transition-colors hover:text-primary"
            >
              <Icon className="size-5" />
              <span className="truncate font-medium">{label}</span>
            </Link>
          </li>
        ))}
        <li className="-mt-6 flex justify-center">
          <Link
            to="/book"
            className="flex flex-col items-center gap-1"
            aria-label={t("nav.bookNow")}
          >
            <span className="grid size-14 place-items-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow ring-4 ring-background">
              <CalendarCheck className="size-6" />
            </span>
            <span className="text-[10px] font-semibold text-ink">{t("nav.bookNow")}</span>
          </Link>
        </li>
        {items.slice(2).map(({ to, label, Icon }) => (
          <li key={to}>
            <Link
              to={to}
              activeProps={{ className: "text-primary" }}
              className="flex flex-col items-center gap-1 rounded-lg px-1 py-1.5 text-ink-soft transition-colors hover:text-primary"
            >
              <Icon className="size-5" />
              <span className="truncate font-medium">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
