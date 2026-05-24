import { motion } from "framer-motion";
import { SOCIAL_HANDLES, SOCIAL_LINKS } from "@/lib/clinic";
import { useLanguage } from "@/hooks/use-language";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, key: "smileReveal" },
  { src: g2, key: "lounge" },
  { src: g3, key: "consultation" },
  { src: g4, key: "selfie" },
] as const;

export function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {t("gallery.eyebrow")}
            </span>
            <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">{t("gallery.title")}</h2>
          </div>
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-bold text-primary hover:underline sm:block"
          >
            {t("gallery.follow")} {SOCIAL_HANDLES.instagram}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.key}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <img
                src={it.src}
                alt={t(`gallery.items.${it.key}`)}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-background opacity-0 transition-opacity group-hover:opacity-100">
                {t(`gallery.items.${it.key}`)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
