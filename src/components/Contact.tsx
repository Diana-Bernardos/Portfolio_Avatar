import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-5 font-display">
            Contact me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'dianabernardosm@gmail.com', href: 'mailto:dianabernardosm@gmail.com' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'Diana Bernardos', href: 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223' },
                { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: '@Diana-Bernardos', href: 'https://github.com/Diana-Bernardos' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-transparent border-none group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-[rgb(var(--color-surface))] rounded-[1rem] shadow-[0_0_0_rgba(158,133,123,0)] group-hover:shadow-[0_0_15px_rgba(207,169,172,0.25)] mr-4 text-primary border border-borderC group-hover:border-accent2 transition-all duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-primary font-bold tracking-tight mb-1 group-hover:text-accent2 transition-colors duration-300">{item.value}</p>
                    <p className="text-xs text-secondary font-medium group-hover:text-primary/80 transition-colors duration-300">{item.label}</p>
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
            <div className="flex flex-col space-y-4 w-full text-base relative">
              <div className="absolute inset-0 bg-secondary/10 blur-3xl rounded-full z-0 pointer-events-none" />

              <motion.input
                type="text"
                placeholder="Your name"
                className="w-full bg-[rgb(var(--color-surface))] border border-borderC text-primary rounded-xl px-5 py-4 focus:outline-none focus:border-accent2 focus:shadow-[0_0_15px_rgba(207,169,172,0.2)] hover:border-accent/70 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.input
                type="email"
                placeholder="Your email"
                className="w-full bg-[rgb(var(--color-surface))] border border-borderC text-primary rounded-xl px-5 py-4 focus:outline-none focus:border-accent2 focus:shadow-[0_0_15px_rgba(207,169,172,0.2)] hover:border-accent/70 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.textarea
                placeholder="Typing your message here..."
                className="w-full bg-[rgb(var(--color-surface))] border border-borderC text-primary rounded-xl px-5 py-4 h-40 resize-none focus:outline-none focus:border-accent2 focus:shadow-[0_0_15px_rgba(207,169,172,0.2)] hover:border-accent/70 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />

              <div className="flex justify-end pt-2 z-10 relative">
                <motion.a
                  href="mailto:dianabernardosm@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-[0_0_15px_rgba(158,133,123,0.3)] hover:shadow-[0_0_25px_rgba(207,169,172,0.45)] cursor-pointer"
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
