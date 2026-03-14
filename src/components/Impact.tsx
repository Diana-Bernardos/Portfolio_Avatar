import { motion } from 'framer-motion';

export function Impact() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0 },
  };
  const metrics = [
    {
      label: 'Claridad UX',
      value: 'Alta',
      note: 'navegacion simple y directa'
    },
    {
      label: 'Entrega',
      value: '4-8 sem',
      note: 'MVP funcional y validable'
    },
    {
      label: 'Stack',
      value: 'React + IA',
      note: 'interfaces inteligentes y escalables'
    },
  ];

  return (
    <section id="impact" className="py-14 md:py-16 px-6 md:px-12 bg-background border-t border-borderC">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {metrics.map((item, idx) => (
            <motion.div
              key={item.label}
              variants={item}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="p-6 rounded-xl bg-background border border-borderC shadow-sm"
            >
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-secondary/60 mb-2">{item.label}</p>
              <p className="text-2xl font-extrabold text-primary mb-2">{item.value}</p>
              <p className="text-sm text-secondary">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

