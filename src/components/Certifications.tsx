import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export function Certifications() {
  const certs = [
    'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
    'Bootcamp Desarrollo de Páginas Web',
    'Formación continua en IA (Ollama, HuggingFace)',
    'Certificación de Google en UX/UI',
  ];

  return (
    <section id="certifications" className="scroll-mt-28 bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl"
        >
          Certificaciones
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-[1.5rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/80 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.18)] surface-gradient"
            >
              <div className="rounded-xl border border-accent/15 bg-[rgb(var(--color-surface))] p-3 text-accent shadow-[0_0_22px_rgba(0,209,255,0.1)]">
                <Award className="h-6 w-6" />
              </div>
              <p className="pt-1 text-base font-semibold leading-snug text-primary/90">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
