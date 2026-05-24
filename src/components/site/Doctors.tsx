import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/clinic";
import { useLanguage } from "@/hooks/use-language";
import d1 from "@/assets/doctor-1.jpg";
import d2 from "@/assets/doctor-2.jpg";

const socials = [
  { icon: Instagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
  { icon: Facebook, href: SOCIAL_LINKS.facebook, label: "Facebook" },
] as const;

export function Doctors() {
  const { t } = useLanguage();

  const doctors = [
    {
      img: d1,
      name: t("doctors.drMehta.name"),
      qualification: t("doctors.drMehta.qualification"),
      experience: t("doctors.drMehta.experience"),
    },
    {
      img: d2,
      name: t("doctors.drRao.name"),
      qualification: t("doctors.drRao.qualification"),
      experience: t("doctors.drRao.experience"),
    },
  ];

  return (
    <section id="doctors" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t("doctors.eyebrow")}
          </span>
          <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("doctors.title")}</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {doctors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-soft"
            >
              <div className="grid grid-cols-5">
                <div className="col-span-2 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-between p-7">
                  <div>
                    <h3 className="text-2xl font-bold text-ink">{d.name}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{d.qualification}</p>
                    <p className="mt-4 text-xs uppercase tracking-widest text-primary">{d.experience}</p>
                  </div>
                  <div className="mt-6 flex gap-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="grid size-9 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
                        aria-label={label}
                      >
                        <Icon className="size-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
