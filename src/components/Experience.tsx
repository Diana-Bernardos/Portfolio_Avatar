import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Desarrolladora Web Freelance',
      company: 'Proyectos personales y colaborativos',
      period: 'Mar 2024 - Actualidad',
      description:
        'Desarrollo de aplicaciones web con React, JavaScript, Node.js, Python y SQL. Tambien realizo case studies de UX/UI desde la investigacion hasta el prototipado y despliegue.',
    },
    {
      title: 'Desarrolladora Freelance en IA Generativa',
      company: 'Colaboraciones remotas',
      period: 'Jul 2024 - Actualidad',
      description:
        'Implementacion de soluciones con IA generativa para optimizar procesos internos, mejorar la productividad y elevar la experiencia de usuario en productos web.',
    },
    {
      title: 'Responsable de Facturacion Hospitalaria',
      company: 'Hospital Ruber Internacional',
      period: 'May 2005 - Sep 2023',
      description:
        'Gestion de facturacion de sociedades medicas, codificacion clinica y uso de software especializado. Esta etapa reforzo mi precision, organizacion y vision de procesos.',
    },
  ];

  const education = [
    {
      title: 'Tecnico Superior DAW',
      institution: 'IES Colegio Arenales',
      period: '2025 - 2027',
    },
    {
      title: 'Desarrollo Web',
      institution: 'Adalab Escuela de Formacion Digital',
      period: '03/2024',
    },
    {
      title: 'Tecnico Superior en Documentacion Sanitaria',
      institution: 'Escuela Universitaria de Enfermeria San Juan de Dios',
      period: '2003 - 2005',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background overflow-hidden border-t border-borderC/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight font-display mb-4">
            Trayectoria
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg">
            Mi recorrido profesional y academico me ha llevado del ambito sanitario al desarrollo web, el diseno UX/UI y la integracion de IA en producto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-[rgb(var(--color-surface))] border border-borderC rounded-xl text-accent2">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary tracking-tight">Experiencia Laboral</h3>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent2/80 via-secondary/30 to-transparent" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-12"
                  >
                    <div className="absolute left-[-37px] md:left-[-6px] top-1.5 w-4 h-4 rounded-full bg-accent2 border-4 border-background shadow-[0_0_10px_rgba(207,169,172,0.45)] z-10" />

                    <div className="bg-[rgb(var(--color-surface))]/40 border border-borderC p-6 rounded-2xl hover:border-secondary/60 transition-colors duration-300 group">
                      <div className="flex flex-col mb-4">
                        <span className="text-accent2 font-bold text-sm tracking-wider uppercase mb-2">{exp.period}</span>
                        <h4 className="text-xl font-extrabold text-primary mb-1 group-hover:text-accent2 transition-colors">{exp.title}</h4>
                        <span className="text-secondary font-medium">{exp.company}</span>
                      </div>
                      <p className="text-primary/75 leading-relaxed text-sm md:text-base">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-[rgb(var(--color-surface))] border border-borderC rounded-xl text-accent2">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary tracking-tight">Educacion</h3>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent2/80 via-secondary/30 to-transparent" />

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-12"
                  >
                    <div className="absolute left-[-37px] md:left-[-6px] top-1.5 w-4 h-4 rounded-full bg-accent2 border-4 border-background shadow-[0_0_10px_rgba(207,169,172,0.45)] z-10" />

                    <div className="bg-[rgb(var(--color-surface))]/40 border border-borderC p-6 rounded-2xl hover:border-secondary/60 transition-colors duration-300 group">
                      <div className="flex flex-col">
                        <span className="text-accent2 font-bold text-sm tracking-wider uppercase mb-2">{edu.period}</span>
                        <h4 className="text-xl font-extrabold text-primary mb-1 group-hover:text-accent2 transition-colors">{edu.title}</h4>
                        <span className="text-secondary font-medium">{edu.institution}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
