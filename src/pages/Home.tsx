import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { Experience } from '../components/Experience';
import { Process } from '../components/Process';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Contact } from '../components/Contact';
import About from './About';

export default function Home() {
  const stackedSections = [
    <About key="about" />,
    <Process key="process" />,
    <Experience key="experience" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Contact key="contact" />,
  ];

  return (
    <div className="flex flex-col gap-0 w-full">
      <Hero />

      <div className="relative px-3 md:px-5 pb-20 md:pb-28 accordion-scroll-shell">
        {stackedSections.map((section, index) => (
          <motion.div
            key={index}
            className={`accordion-panel ${index === 0 ? 'mt-0' : 'accordion-panel-overlap'}`}
            style={{
              zIndex: index + 1,
              top: `calc(5.25rem + ${index * 0.75}rem)`,
            }}
            initial={{
              opacity: 0.68,
              scale: 0.972,
              y: 42,
              boxShadow: '0 12px 34px rgba(0, 0, 0, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
              boxShadow: '0 24px 58px rgba(0, 0, 0, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
            viewport={{ once: false, amount: 0.2, margin: '-10% 0px -12% 0px' }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.04,
            }}
          >
            <motion.div
              aria-hidden="true"
              className="liquid-focus-glow"
              initial={{ opacity: 0, x: '-34%', scaleX: 0.92 }}
              whileInView={{ opacity: 0.95, x: '34%', scaleX: 1 }}
              viewport={{ once: false, amount: 0.3, margin: '-8% 0px -10% 0px' }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1], delay: index * 0.03 }}
            />
            {section}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
