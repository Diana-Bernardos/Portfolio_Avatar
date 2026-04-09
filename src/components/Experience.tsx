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
      title: ' Bootcamp Desarrollo Web',
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
    <section id="experience" className="overflow-hidden border-t border-borderC/50 bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Trayectoria</h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary">
            Mi recorrido profesional y academico me ha llevado del ambito sanitario al desarrollo web, el diseno UX/UI y la integracion de IA en producto.
          </p>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-12">
          <div>
            <div className="mb-10 flex items-center gap-3">
              <div className="rounded-xl border border-borderC bg-[rgb(var(--color-surface))] p-3 text-accent2">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-primary">Experiencia Laboral</h3>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute bottom-4 left-[15px] top-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent2/35 to-transparent" />

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
                    <div className="absolute left-[-37px] top-1.5 z-10 h-4 w-4 rounded-full border-4 border-background bg-accent shadow-[0_0_14px_rgba(0,209,255,0.35)] md:left-[-6px]" />

                    <div className="rounded-2xl border border-borderC p-6 transition-colors duration-300 group hover:border-accent/60 surface-gradient">
                      <div className="mb-4 flex flex-col">
                        <span className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-accent">{exp.period}</span>
                        <h4 className="mb-1 text-xl font-extrabold text-primary transition-colors group-hover:text-accent">{exp.title}</h4>
                        <span className="font-medium text-secondary">{exp.company}</span>
                      </div>
                      <p className="text-sm leading-relaxed text-primary/75 md:text-base">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="mb-10 flex items-center gap-3">
              <div className="rounded-xl border border-borderC bg-[rgb(var(--color-surface))] p-3 text-accent2">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-primary">Educacion</h3>
            </div>

            <div className="relative pl-8 md:pl-0">
              <div className="absolute bottom-4 left-[15px] top-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent2/35 to-transparent" />

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
                    <div className="absolute left-[-37px] top-1.5 z-10 h-4 w-4 rounded-full border-4 border-background bg-accent shadow-[0_0_14px_rgba(0,209,255,0.35)] md:left-[-6px]" />

                    <div className="rounded-2xl border border-borderC p-6 transition-colors duration-300 group hover:border-accent/60 surface-gradient">
                      <div className="flex flex-col">
                        <span className="mb-2 font-mono text-sm font-bold uppercase tracking-wider text-accent">{edu.period}</span>
                        <h4 className="mb-1 text-xl font-extrabold text-primary transition-colors group-hover:text-accent">{edu.title}</h4>
                        <span className="font-medium text-secondary">{edu.institution}</span>
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
