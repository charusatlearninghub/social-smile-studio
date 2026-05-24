import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
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
                  Creating Confident Smiles
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
              Reimagining dental care for the modern era. Premium, painless, and beautifully designed.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-10 place-items-center rounded-full border border-border text-ink-soft transition-colors hover:bg-primary hover:text-primary-foreground"
                  aria-label="Social"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-ink">Services</h4>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {["Implants", "Aligners", "Whitening", "Smile Design", "Pediatrics"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-primary">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ink">Quick Links</h4>
            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              {[
                ["About", "#about"],
                ["Doctors", "#doctors"],
                ["Gallery", "#gallery"],
                ["Book", "#booking"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-xs text-ink-soft">
          © {new Date().getFullYear()} SOCIAL DENTIST. Creating Confident Smiles.
        </div>
      </div>
    </footer>
  );
}
