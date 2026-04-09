import { motion } from 'framer-motion';

export function ProfessionalExperience() {
  const experiences = [
    {
      role: 'Desarrolladora Web',
      company: 'Proyectos propios & freelance',
      date: 'Presente',
      description: 'Desarrollo completo de aplicaciones web, desde la concepcion hasta el despliegue. Integrando tecnologias de IA y diseno centrado en el usuario.',
    },
    {
      role: 'Bootcamp Desarrollo Web',
      company: 'Formacion intensiva',
      date: 'Reciente',
      description: 'Inmersion practica en desarrollo Full Stack. Creacion de multiples proyectos colaborativos utilizando metodologias agiles, control de versiones y despliegue continuo.',
    },
    {
      role: 'Tecnico Superior en DAW',
      company: 'Formacion Profesional',
      date: 'Anterior',
      description: 'Fundamentos solidos en Desarrollo de Aplicaciones Web. Aprendizaje en profundidad de arquitectura de software, bases de datos y desarrollo frontend/backend.',
    },
    {
      role: 'Transicion profesional',
      company: 'Cambio de sector',
      date: 'Anterior',
      description: 'Tras anos de experiencia en otro sector, inicie mi camino en el desarrollo web, aportando habilidades transversales como la resolucion de problemas y la adaptabilidad.',
    },
  ];

  return (
    <section id="professional-experience" className="scroll-mt-28 border-y border-[#161B22] bg-background px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl"
          >
            Experiencia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="max-w-2xl text-base leading-relaxed text-primary/78 md:text-lg"
          >
            Mi viaje hacia la tecnologia.
          </motion.p>
        </div>

        <div className="relative pl-6 md:pl-0">
          <div className="absolute left-[11px] top-2 h-full w-px bg-gradient-to-b from-accent via-accent2/40 to-transparent md:left-0 md:translate-x-0" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-[1.5rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/80 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.16)] surface-gradient md:p-6"
              >
                <div className="absolute -left-[14px] top-8 h-4 w-4 rounded-full border-4 border-background bg-accent shadow-[0_0_18px_rgba(0,209,255,0.28)]" />
                <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-xl font-bold tracking-tight text-primary">{exp.role}</h3>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">{exp.date}</span>
                </div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent">{exp.company}</h4>
                <p className="leading-relaxed text-primary/78">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
