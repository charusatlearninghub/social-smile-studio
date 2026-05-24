import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";

export function Booking() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-surface p-8 shadow-glow ring-1 ring-border md:p-12"
        >
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Book your visit
            </span>
            <h2 className="mt-4 text-4xl font-bold text-ink">Join the community</h2>
            <p className="mt-3 text-ink-soft">Secure your slot for a personalized consultation.</p>
          </div>

          {submitted ? (
            <div className="mt-10 rounded-2xl bg-gradient-brand p-8 text-center text-primary-foreground">
              <p className="text-lg font-bold">Thanks — we'll be in touch shortly.</p>
              <p className="mt-2 text-sm opacity-90">
                A team member will confirm your appointment within 2 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-10 grid gap-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Full Name" name="name" required />
                <Input label="Phone Number" name="phone" type="tel" required />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Treatment Type">
                  <select
                    required
                    className="w-full rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm text-ink outline-none transition-all focus:border-primary"
                  >
                    <option value="">Select treatment</option>
                    <option>Teeth Cleaning</option>
                    <option>Dental Implants</option>
                    <option>Root Canal</option>
                    <option>Braces & Aligners</option>
                    <option>Teeth Whitening</option>
                    <option>Smile Design</option>
                    <option>Pediatric Dentistry</option>
                    <option>Emergency Care</option>
                  </select>
                </Field>
                <Input label="Date & Time" name="datetime" type="datetime-local" required />
              </div>
              <Field label="Message">
                <textarea
                  rows={3}
                  placeholder="Anything we should know?"
                  className="w-full resize-none rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm text-ink placeholder:text-ink-soft outline-none transition-all focus:border-primary"
                />
              </Field>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-primary py-4 font-bold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
                >
                  Confirm Appointment
                </button>
                <a
                  href="https://wa.me/10000000000"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-6 py-4 font-bold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="size-5" />
                  Book on WhatsApp
                </a>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
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
