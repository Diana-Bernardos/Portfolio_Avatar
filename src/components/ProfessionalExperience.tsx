import { motion } from 'framer-motion';

export function ProfessionalExperience() {
  const experiences = [
    {
      role: 'Desarrolladora Web',
      company: 'Proyectos propios & freelance',
      date: 'Presente',
      description: 'Desarrollo completo de aplicaciones web, desde la concepción hasta el despliegue. Integrando tecnologías de IA y diseño centrado en el usuario.'
    },
    {
      role: 'Bootcamp Desarrollo Web',
      company: 'Formación intensiva',
      date: 'Reciente',
      description: 'Inmersión práctica en desarrollo Full Stack. Creación de múltiples proyectos colaborativos utilizando metodologías ágiles, control de versiones y despliegue continuo.'
    },
    {
      role: 'Técnico Superior en DAW',
      company: 'Formación Profesional',
      date: 'Anterior',
      description: 'Fundamentos sólidos en Desarrollo de Aplicaciones Web. Aprendizaje en profundidad de arquitectura de software, bases de datos y desarrollo frontend/backend.'
    },
    {
      role: 'Transición profesional',
      company: 'Cambio de sector',
      date: 'Anterior',
      description: 'Tras años de experiencia en otro sector, inicié mi camino en el desarrollo web, aportando habilidades transversales como la resolución de problemas y la adaptabilidad.'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-background border-y border-borderC">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-primary tracking-tight mb-4 font-display"
          >
            Experiencia
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-secondary"
          >
            Mi viaje hacia la tecnología.
          </motion.p>
        </div>

        <div className="relative border-l border-borderC ml-4 md:ml-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 pl-8 relative group"
            >
              {/* Timeline dot */}
              <div className="absolute w-3 h-3 bg-background border-2 border-accent rounded-full -left-[6.5px] top-2 group-hover:scale-150 group-hover:bg-accent transition-all duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold text-primary tracking-tight">
                  {exp.role}
                </h3>
                <span className="text-sm font-medium text-secondary mt-1 md:mt-0">
                  {exp.date}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-accent mb-4 tracking-wide uppercase">
                {exp.company}
              </h4>
              <p className="text-secondary leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


