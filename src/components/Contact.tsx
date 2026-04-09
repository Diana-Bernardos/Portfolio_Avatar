import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dianabernardosm@gmail.com',
    href: 'mailto:dianabernardosm@gmail.com',
    helper: 'La forma mas directa de hablar conmigo.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Diana Bernardos',
    href: 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223',
    helper: 'Perfil profesional y trayectoria completa.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@Diana-Bernardos',
    href: 'https://github.com/Diana-Bernardos',
    helper: 'Codigo, proyectos y evolucion tecnica.',
  },
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-[#161B22] bg-background px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl"
        >
          <span className="inline-flex items-center rounded-full border border-borderC bg-[rgb(var(--color-surface))]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
            Contacto directo
          </span>
          <h2 className="mt-5 mb-4 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Hablemos</h2>
          <p className="text-base leading-relaxed text-primary/78 md:text-lg">
            He eliminado el formulario para no dejar una experiencia rota. Si te interesa mi perfil, puedes escribirme por email o revisar mi recorrido en LinkedIn y GitHub.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {contactItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-[1.6rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/85 p-6 shadow-[0_16px_38px_rgba(0,0,0,0.16)] transition-colors duration-300 hover:border-accent/70"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#161B22] bg-background/70 text-accent transition-colors duration-300 group-hover:border-accent/60">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">{item.label}</p>
                <h3 className="mb-3 text-lg font-bold tracking-tight text-primary transition-colors duration-300 group-hover:text-accent">
                  {item.value}
                </h3>
                <p className="text-sm leading-relaxed text-primary/72">{item.helper}</p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
