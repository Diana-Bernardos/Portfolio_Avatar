import { motion } from 'framer-motion';
import { BotMessageSquare, Sparkles, Workflow, BrainCircuit, CheckCircle2 } from 'lucide-react';

export function AiExperience() {
  const customItems = [
    {
      icon: <BotMessageSquare className="h-8 w-8 text-accent" />,
      title: 'Chatbots Conversacionales',
      description: 'Diseño e implementación de agentes interactivos que resuelven consultas y guían al usuario.',
    },
    {
      icon: <Sparkles className="h-8 w-8 text-accent2" />,
      title: 'Asistentes Virtuales',
      description: 'Creación de interfaces asistidas para control de dispositivos y recomendación de contenido.',
    },
    {
      icon: <Workflow className="h-8 w-8 text-primary" />,
      title: 'Automatizaciones',
      description: 'Flujos optimizados con APIs y herramientas como n8n para reducir la carga operativa.',
    },
    {
      icon: <BrainCircuit className="h-8 w-8 text-[#7DDCFF]" />,
      title: 'Integración LLMs',
      description: 'Conexión de modelos locales (Ollama) o APIs en la nube para potenciar los datos.',
    },
  ];

  return (
    <section id="ai-experience" className="scroll-mt-28 bg-background py-16 md:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 relative z-10">
        
        <div className="mb-14 flex flex-col md:flex-row gap-10 md:items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-borderC bg-[rgb(var(--color-surface))]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-accent mb-6">
              <BrainCircuit className="h-3.5 w-3.5" />
              Experiencia con IA
            </span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl mb-4">
              Integración nativa de IA en producto
            </h2>
            <p className="text-base leading-relaxed text-primary/80 md:text-lg">
              Mi experiencia se enfoca en integrar inteligencia artificial de forma natural en productos digitales. No solo se trata de la tecnología backend, sino del diseño de la interacción, asegurando que la IA sirva realmente para resolver problemas del usuario de manera fluida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-[1.75rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/60 p-6 md:p-8 backdrop-blur-sm self-stretch max-w-sm"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-secondary/80 mb-4">Enfoque UX Conversacional</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent2 shrink-0 mt-0.5" />
                <p className="text-sm text-primary/85 font-medium">Claridad y precisión en las respuestas</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent2 shrink-0 mt-0.5" />
                <p className="text-sm text-primary/85 font-medium">Reducción drástica de fricción en flujos complejos</p>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent2 shrink-0 mt-0.5" />
                <p className="text-sm text-primary/85 font-medium">Enfoque puramente centrado en el usuario (Human-in-the-loop)</p>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
          {customItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#161B22] bg-[rgb(var(--color-surface))]/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 surface-gradient"
            >
               <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,209,255,0.06)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
               <div className="relative z-10 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#161B22] bg-background/50 shadow-inner">
                 {item.icon}
               </div>
               <h3 className="relative z-10 mb-2 text-lg font-bold tracking-tight text-primary">{item.title}</h3>
               <p className="relative z-10 text-sm leading-relaxed text-primary/75">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
