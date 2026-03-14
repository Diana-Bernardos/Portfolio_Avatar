import { motion } from 'framer-motion';
import { Layers, Lightbulb, ShieldCheck } from 'lucide-react';

export function ValueProposition() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-accent" />,
      title: 'Claridad en producto',
      description: 'Transformo requisitos complejos en interfaces claras, con arquitectura y UX alineadas.'
    },
    {
      icon: <Layers className="w-6 h-6 text-accent" />,
      title: 'Sistemas escalables',
      description: 'Diseño componentes reutilizables y flujos que reducen deuda técnica y aceleran equipos.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-accent" />,
      title: 'IA aplicada',
      description: 'Integro IA con foco en valor real: automatización, guía inteligente y mejores decisiones.'
    }
  ];

  return (
    <section id="approach" className="py-20 md:py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            Enfoque
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary tracking-tight mb-5 md:mb-6 font-display"
          >
            Diseño y desarrollo orientados a resultados
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed"
          >
            Mi objetivo es acortar la brecha entre producto, ingeniería y experiencia de usuario.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 md:p-10 rounded-[2rem] bg-background border border-borderC premium-shadow hover:premium-shadow-hover transition-all duration-500  hover-lift"
            >
              <div className="mb-10 p-5 bg-background rounded-2xl inline-block shadow-inner ring-1 ring-accent/5">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-5 leading-tight tracking-tight">
                {value.title}
              </h3>
              <p className="text-secondary leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


