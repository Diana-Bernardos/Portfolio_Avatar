import { Component, Server, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

export function Skills() {
  const customItems = [
    {
      icon: <Component className="mb-4 h-10 w-10 text-accent" />,
      title: 'Frontend Dev',
      description: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind y Framer Motion',
    },
    {
      icon: <Figma className="mb-4 h-10 w-10 text-accent2" />,
      title: 'UX/UI Design',
      description: 'Figma, Webflow, UX Research, Design Systems y Wireframing',
    },
    {
      icon: <Server className="mb-4 h-10 w-10 text-primary" />,
      title: 'Backend & AI',
      description: 'Node.js, MySQL, Python, Ollama y FastAPI integrations',
    },
  ];

  return (
    <section id="skills" className="overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-left"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-4xl">My skills</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {customItems.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex cursor-pointer flex-col items-center rounded-2xl border border-transparent p-8 text-center transition-colors duration-300 hover:border-accent/50 surface-gradient"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(0,209,255,0.12)_0%,rgba(112,0,255,0.1)_48%,transparent_72%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <motion.div
                className="relative z-10 mb-2 flex flex-col items-center justify-center rounded-xl p-4"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="relative z-10 mb-3 text-xl font-bold text-primary transition-colors duration-300 group-hover:text-accent">{skill.title}</h3>
              <p className="relative z-10 px-4 text-sm font-medium leading-relaxed text-primary/75 transition-colors duration-300 group-hover:text-primary">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
