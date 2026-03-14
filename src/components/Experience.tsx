import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: 'Desarrolladora Web Freelance',
      company: 'Proyectos Personales y Colaborativos',
      period: 'Mar 2024 - Present',
      description: 'Desarrollo de diversas aplicaciones web con tecnologías como REACT, JavaScript, Node JS, SQL. Case Study de Diseño UX/UI del producto desde cero hasta su prototipado y posterior despliegue de la web o APP, utilizando Figma, Wordpress y Google Analytics.',
      icon: <Briefcase className="w-5 h-5" />,
      type: 'work'
    },
    {
      title: 'Desarrolladora Freelance en IA Generativa',
      company: 'Empresa Remoto Freelance',
      period: 'Jul 2024 - Present',
      description: 'Colaboré con una empresa para implementar IA generativa, optimizando procesos internos y mejorando la productividad.',
      icon: <Briefcase className="w-5 h-5" />,
      type: 'work'
    },
    {
      title: 'Responsable de Facturación Hospitalaria',
      company: 'Hospital Ruber Internacional',
      period: 'May 2005 - Sept 2023',
      description: 'Gestión de facturación de sociedades médicas, Codificación Clínica con CIE-10. Uso de programas como IMDH-IFMS y CASIOPEA. Desarrollo de habilidades en organización de equipos, atención al detalle y uso de software especializado.',
      icon: <Briefcase className="w-5 h-5" />,
      type: 'work'
    }
  ];

  const education = [
    {
      title: 'Técnico superior DAW',
      institution: 'I.E.S Colegio Arenales',
      period: '2025 - 2027',
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'edu'
    },
    {
      title: 'Desarrollo Web',
      institution: 'Adalab Escuela de formación digital',
      period: '03/2024',
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'edu'
    },
    {
      title: 'Técnico superior Documentación Sanitaria',
      institution: 'Escuela Universitaria de Enfermería San Juan de Dios',
      period: '2003 - 2005',
      icon: <GraduationCap className="w-5 h-5" />,
      type: 'edu'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-[#121212] overflow-hidden border-t border-[#333333]/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Trayectoria
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mi recorrido profesional y académico que me ha llevado hasta el desarrollo web y el diseño UX/UI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-12">
          {/* Work Experience Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-[#1E1E1E] border border-[#333333] rounded-xl text-accent">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Experiencia Laboral</h3>
            </div>
            
            <div className="relative pl-8 md:pl-0">
              {/* Vertical accent line */}
              <div className="hidden md:block absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent/20 to-transparent"></div>
              <div className="md:hidden absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent/20 to-transparent"></div>

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-37px] md:left-[-6px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-[#121212] shadow-[0_0_10px_rgba(255,206,50,0.5)] z-10"></div>
                    
                    <div className="bg-[#1E1E1E]/40 border border-[#333333] p-6 rounded-2xl hover:border-accent/40 transition-colors duration-300 group">
                      <div className="flex flex-col mb-4">
                        <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2">{exp.period}</span>
                        <h4 className="text-xl font-extrabold text-white mb-1 group-hover:text-accent transition-colors">{exp.title}</h4>
                        <span className="text-gray-400 font-medium">{exp.company}</span>
                      </div>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="mt-8 md:mt-0">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-[#1E1E1E] border border-[#333333] rounded-xl text-accent">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">Educación</h3>
            </div>
            
            <div className="relative pl-8 md:pl-0">
              {/* Vertical accent line */}
              <div className="hidden md:block absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent/20 to-transparent"></div>
              <div className="md:hidden absolute left-[15px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent/80 via-accent/20 to-transparent"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1 }}
                    className="relative md:pl-12"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[-37px] md:left-[-6px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-[#121212] shadow-[0_0_10px_rgba(255,206,50,0.5)] z-10"></div>
                    
                    <div className="bg-[#1E1E1E]/40 border border-[#333333] p-6 rounded-2xl hover:border-accent/40 transition-colors duration-300 group">
                      <div className="flex flex-col">
                        <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2">{edu.period}</span>
                        <h4 className="text-xl font-extrabold text-white mb-1 group-hover:text-accent transition-colors">{edu.title}</h4>
                        <span className="text-gray-400 font-medium">{edu.institution}</span>
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
