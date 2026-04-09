import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-[#161B22] bg-background px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-left"
        >
          <h2 className="mb-5 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Contact me</h2>
        </motion.div>

        <div className="grid items-start gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-6">
              {[
                { icon: <Mail className="h-5 w-5" />, label: 'Email', value: 'dianabernardosm@gmail.com', href: 'mailto:dianabernardosm@gmail.com' },
                { icon: <Linkedin className="h-5 w-5" />, label: 'LinkedIn', value: 'Diana Bernardos', href: 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223' },
                { icon: <Github className="h-5 w-5" />, label: 'GitHub', value: '@Diana-Bernardos', href: 'https://github.com/Diana-Bernardos' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex cursor-pointer items-center border-none bg-transparent p-4"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="mr-4 rounded-[1rem] border border-[#161B22] bg-[rgb(var(--color-surface))] p-3 text-primary shadow-[0_0_0_rgba(0,0,0,0)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent group-hover:shadow-[0_0_18px_rgba(0,209,255,0.16)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-1 font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">{item.value}</p>
                    <p className="text-xs font-medium text-primary/68 transition-colors duration-300 group-hover:text-primary/85">{item.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-transparent"
          >
            <div className="relative flex w-full flex-col space-y-4 text-base">
              <div className="pointer-events-none absolute inset-0 z-0 rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.12)_0%,rgba(112,0,255,0.08)_48%,transparent_72%)] blur-3xl" />

              <motion.input
                type="text"
                placeholder="Your name"
                className="relative z-10 w-full cursor-text rounded-xl border border-[#161B22] bg-[rgb(var(--color-surface))] px-5 py-4 text-primary transition-all hover:border-accent/70 focus:border-accent focus:outline-none focus:shadow-[0_0_18px_rgba(0,209,255,0.14)]"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.input
                type="email"
                placeholder="Your email"
                className="relative z-10 w-full cursor-text rounded-xl border border-[#161B22] bg-[rgb(var(--color-surface))] px-5 py-4 text-primary transition-all hover:border-accent/70 focus:border-accent focus:outline-none focus:shadow-[0_0_18px_rgba(0,209,255,0.14)]"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.textarea
                placeholder="Typing your message here..."
                className="relative z-10 h-40 w-full resize-none cursor-text rounded-xl border border-[#161B22] bg-[rgb(var(--color-surface))] px-5 py-4 text-primary transition-all hover:border-accent/70 focus:border-accent focus:outline-none focus:shadow-[0_0_18px_rgba(0,209,255,0.14)]"
                whileFocus={{ scale: 1.01 }}
                disabled
              />

              <div className="relative z-10 flex justify-end pt-2">
                <motion.a
                  href="mailto:dianabernardosm@gmail.com"
                  className="inline-flex cursor-pointer items-center justify-center rounded-xl px-8 py-3.5 font-bold transition-all hover:-translate-y-1 neural-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send message
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
