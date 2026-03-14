import { motion } from 'framer-motion';
import { Database, Monitor, Activity, Network } from 'lucide-react';

export function CoreExpertise() {
  const expertise = [
    {
      category: 'Full Stack Development',
      icon: <Monitor className="w-5 h-5 text-accent" />,
      skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      description: 'Interfaces reactivas con una arquitectura limpia y mantenible.'
    },
    {
      category: 'AI / Product Strategy',
      icon: <Network className="w-5 h-5 text-accent" />,
      skills: ['Ollama', 'LLM Integration', 'Python', 'FastAPI'],
      description: 'Despliegue de modelos locales y flujos de IA generativa.'
    },
    {
      category: 'HealthTech UX',
      icon: <Activity className="w-5 h-5 text-accent" />,
      skills: ['Accesibilidad', 'Inclusividad', 'WCAG', 'UX médica'],
      description: 'Soluciones críticas donde la claridad y la precisión son vitales.'
    },
    {
      category: 'Data Visualization',
      icon: <Database className="w-5 h-5 text-accent" />,
      skills: ['MySQL', 'Dashboards', 'Interactive Data', 'Analytics'],
      description: 'Sintetizando big data en visualizaciones comprensibles.'
    }
  ];

  return (
    <section id="expertise" className="py-20 md:py-24 px-6 md:px-12 surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4 text-accent font-bold uppercase tracking-widest text-sm"
          >
            <span className="w-8 h-[2px] bg-accent"></span>
            Especialización
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-4 md:mb-5 font-display"
          >
            Core Expertise
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-6 md:p-7 rounded-3xl bg-background border border-borderC group hover:shadow-md transition-all duration-500 flex flex-col items-start  hover-lift"
            >
              <div className="p-4 surface rounded-2xl premium-shadow mb-8 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-accent/5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 tracking-tight">{item.category}</h3>
              <p className="text-secondary mb-8 leading-relaxed text-sm flex-grow">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-borderC/50 w-full mt-auto">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[9px] font-extrabold text-secondary/70 uppercase tracking-widest surface/60 px-2 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


