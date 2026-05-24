import { motion } from "framer-motion";
import { Calendar, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react";
import heroImg from "@/assets/hero-patient.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-soft pt-16 pb-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-glow opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 lg:w-1/2"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now accepting new patients
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Your Smile,
            <br />
            <span className="text-gradient-brand">Our Priority</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">
            Advanced dental care with modern technology — pain-free treatments,
            digital workflows, and a clinic designed for confident, Instagram-ready smiles.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-2xl bg-primary px-7 py-4 font-bold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              <Calendar className="size-5" />
              Book Appointment
            </a>
            <a
              href="https://wa.me/10000000000"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-surface px-7 py-4 font-bold text-ink shadow-soft transition-colors hover:bg-muted"
            >
              <MessageCircle className="size-5 text-whatsapp" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-ink-soft">
            <span className="text-xs font-semibold uppercase tracking-[0.18em]">Follow</span>
            <span className="h-px w-8 bg-border" />
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid size-9 place-items-center rounded-full border border-border bg-surface transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Social"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 lg:mt-0 lg:w-1/2"
        >
          <div className="relative">
            <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />
            <div className="absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroImg}
              alt="Smiling patient at Social Dentist clinic"
              width={1024}
              height={1280}
              className="relative aspect-[4/5] w-full rounded-[40px] object-cover shadow-glow ring-1 ring-black/5"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 rounded-3xl bg-surface p-5 shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="size-10 rounded-full border-2 border-surface bg-gradient-to-br from-primary to-secondary" />
                  <div className="size-10 rounded-full border-2 border-surface bg-gradient-to-br from-secondary to-primary" />
                  <div className="size-10 rounded-full border-2 border-surface bg-gradient-to-br from-primary to-accent" />
                </div>
                <div>
                  <div className="text-lg font-bold text-ink">5,000+</div>
                  <div className="text-[10px] uppercase tracking-[0.15em] text-ink-soft">
                    Happy Patients
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -top-6 right-4 rounded-2xl glass px-4 py-3 shadow-soft"
            >
              <div className="text-xs font-semibold text-primary">★ 4.9 / 5.0</div>
              <div className="text-[10px] text-ink-soft">2,400+ reviews</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
