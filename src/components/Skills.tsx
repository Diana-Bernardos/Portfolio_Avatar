import { Component, Server, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const customItems = [
    {
      icon: <Component className="w-10 h-10 text-accent mb-4" />,
      title: 'Frontend Dev',
      description: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind y Framer Motion',
    },
    {
      icon: <Figma className="w-10 h-10 text-accent2 mb-4" />,
      title: 'UX/UI Design',
      description: 'Figma, Webflow, UX Research, Design Systems y Wireframing',
    },
    {
      icon: <Server className="w-10 h-10 text-primary mb-4" />,
      title: 'Backend & AI',
      description: 'Node.js, MySQL, Python, Ollama y FastAPI integrations',
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary tracking-tight font-display">
            My skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customItems.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-[rgb(var(--color-surface))]/50 border border-transparent hover:border-secondary/50 transition-colors duration-300 relative group cursor-pointer"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

              <motion.div
                className="flex flex-col items-center justify-center p-4 rounded-xl mb-2 relative z-10"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-primary group-hover:text-accent2 transition-colors duration-300 mb-3 relative z-10">
                {skill.title}
              </h3>
              <p className="text-sm font-medium text-primary/75 leading-relaxed px-4 relative z-10 group-hover:text-primary transition-colors duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
