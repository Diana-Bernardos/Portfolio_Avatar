import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Entiendo el problema',
    description: 'Analizo necesidades reales de usuario y negocio.',
  },
  {
    number: '2',
    title: 'Diseno la solucion',
    description: 'Creo experiencias intuitivas y funcionales.',
  },
  {
    number: '3',
    title: 'Desarrollo el producto',
    description: 'Implemento soluciones modernas y escalables.',
  },
  {
    number: '4',
    title: 'Itero y optimizo',
    description: 'Me baso en datos y feedback para mejorar continuamente.',
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="overflow-hidden border-y border-borderC/60 bg-[linear-gradient(180deg,rgba(10,15,20,1)_0%,rgba(12,18,27,1)_100%)] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full border border-borderC bg-[rgb(var(--color-surface))] px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-accent">
            Work Process
          </span>
          <h2 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Proceso de Trabajo</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-secondary md:text-lg">
            Trabajo con una estructura clara, colaborativa y enfocada en convertir ideas en productos utiles, cuidados y listos para crecer.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-accent/70 via-accent/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: index * 0.08 }}
                  className="relative grid grid-cols-[auto_1fr] gap-6 md:grid-cols-2 md:gap-12"
                >
                  <div className={`hidden md:block ${isRight ? 'order-1' : 'order-2'}`} />

                  <div className={`relative ${isRight ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>
                    <div className="absolute left-6 top-6 z-10 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-background text-[rgb(var(--color-ink))] shadow-[0_0_24px_rgba(0,209,255,0.24)] md:right-[-24px] md:left-auto md:top-1/2 md:translate-x-0 md:-translate-y-1/2 neural-gradient">
                      <div className="flex h-full w-full items-center justify-center text-base font-black">{step.number}</div>
                    </div>

                    <div className="ml-14 rounded-[1.75rem] border border-borderC p-6 backdrop-blur-sm transition-colors duration-300 hover:border-accent/60 md:ml-0 md:p-8 surface-gradient">
                      <h3 className="text-xl font-extrabold tracking-tight text-primary md:text-2xl">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-primary/75 md:text-base">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
