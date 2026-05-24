import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g1, label: "Smile Reveal" },
  { src: g2, label: "Lounge" },
  { src: g3, label: "Consultation" },
  { src: g4, label: "Selfie Moment" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The smile gallery
            </span>
            <h2 className="mt-4 text-4xl font-bold text-ink lg:text-5xl">
              Real results, real smiles.
            </h2>
          </div>
          <a href="#" className="hidden text-sm font-bold text-primary sm:block">
            Follow @SocialDentist
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                width={800}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest text-background opacity-0 transition-opacity group-hover:opacity-100">
                {it.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
