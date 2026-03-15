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
    <section id="certifications" className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4 font-display"
          >
            Certificaciones
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 space-y-0 text-left">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center p-6 surface border border-borderC rounded-xl hover:border-accent hover:shadow-md transition-all duration-300 group"
            >
              <Award className="w-8 h-8 text-borderC mr-4 group-hover:text-accent transition-colors shrink-0" />
              <p className="text-primary font-medium leading-snug">{cert}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

