import { Component, Server, Figma } from 'lucide-react';
import { motion } from 'framer-motion';

const aiTechKeywords = ['ollama', 'openai', 'hugging', 'fastapi', 'python', 'llama', 'ai', 'ml'];
const webTechKeywords = ['react', 'vite', 'javascript', 'typescript', 'css', 'tailwind', 'node', 'html', 'scss', 'framer'];

function getSkillBadgeClass(skill: string) {
  const normalized = skill.toLowerCase();

  if (aiTechKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'border-accent2/25 bg-[linear-gradient(135deg,rgba(112,0,255,0.18)_0%,rgba(112,0,255,0.08)_100%)] text-[#D8B4FF]';
  }

  if (webTechKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'border-accent/25 bg-[linear-gradient(135deg,rgba(0,209,255,0.16)_0%,rgba(0,209,255,0.06)_100%)] text-[#7DDCFF]';
  }

  return 'border-borderC/70 bg-[rgba(22,27,34,0.92)] text-primary/85';
}

export function Skills() {
  const customItems = [
    {
      icon: <Component className="h-10 w-10 text-accent" />,
      title: 'Frontend Dev',
      description: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind y Framer Motion',
      tags: ['React', 'TypeScript', 'Tailwind', 'Motion'],
    },
    {
      icon: <Figma className="h-10 w-10 text-accent2" />,
      title: 'UX/UI Design',
      description: 'Figma, Webflow, UX Research, Design Systems y Wireframing',
      tags: ['Figma', 'UX Research', 'Design Systems', 'Wireframing'],
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: 'Backend & AI',
      description: 'Node.js, MySQL, Python, Ollama y FastAPI integrations',
      tags: ['Node.js', 'Python', 'Ollama', 'FastAPI'],
    },
  ];

  return (
    <section id="skills" className="scroll-mt-28 overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-left"
        >
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-4xl">My skills</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary/78 md:text-lg">
            Un resumen rapido de mi stack principal para que se lea de un vistazo, sin ruido visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {customItems.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/80 p-8 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-accent/60 surface-gradient"
              whileHover={{ scale: 1.015 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,209,255,0.12)_0%,rgba(112,0,255,0.08)_48%,transparent_72%)] opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 mb-5 flex justify-center">
                <div className="rounded-2xl border border-borderC bg-[rgb(var(--color-surface))] p-4 shadow-[0_0_18px_rgba(0,0,0,0.14)] transition-transform duration-300 group-hover:-translate-y-1">
                  {skill.icon}
                </div>
              </div>

              <h3 className="relative z-10 mb-3 text-xl font-bold tracking-tight text-primary">{skill.title}</h3>
              <p className="relative z-10 px-2 text-sm font-medium leading-relaxed text-primary/78">{skill.description}</p>

              <div className="relative z-10 mt-7 flex flex-wrap justify-center gap-2 border-t border-[#161B22] pt-6">
                {skill.tags.map((entry) => (
                  <span
                    key={entry}
                    className={`rounded-lg border px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-widest ${getSkillBadgeClass(entry)}`}
                  >
                    {entry}
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
