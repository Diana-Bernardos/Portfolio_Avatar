import { motion } from 'framer-motion';

export function Trust() {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };
  const items = [
    'HealthTech',
    'AI Products',
    'Design Systems',
    'Data Dashboards',
    'UX Research'
  ];

  return (
    <section className="py-12 md:py-14 px-6 md:px-12 bg-background border-t border-borderC">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.25em] text-secondary/70 mb-6"
        >
          Focus
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 gap-4"
        >
          {items.map((item) => (
            <motion.div
              key={item}
              variants={item}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="px-4 py-3 border border-borderC rounded-lg text-sm font-semibold text-primary text-center bg-background hover:shadow-md transition-shadow"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

