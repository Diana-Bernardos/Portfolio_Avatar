import { FileDown, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import avatar1 from '../assets/images/avatar-hero.png';
import avatar2 from '../assets/images/avatar.png';
import avatar3 from '../assets/images/avatar-about.png';
import cvPdf from '../assets/docs/CV.pdf';
import { ScrollCanvas } from './ScrollCanvas';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax transforms for text elements
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const avatarScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const avatarY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const images = [avatar1, avatar2, avatar3];

  return (
    <header 
      id="home" 
      ref={containerRef}
      className="relative h-[200vh] bg-background overflow-visible"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 px-6 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left mt-8 lg:mt-0">
          <motion.div
            variants={item}
            className="mb-8"
          >
            <span className="inline-block px-5 py-2 rounded-full border border-borderC bg-[rgb(var(--color-surface))] text-sm font-semibold text-secondary mb-6 lowercase tracking-wide">
              ¡Hola! soy Diana
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(135deg,rgba(244,198,205,1)_0%,rgba(246,242,244,1)_46%,rgba(186,226,232,0.98)_100%)] mb-6 tracking-tighter leading-[1.1] font-display">
              Frontend Developer & <br /> UX/UI Designer
            </h1>
            <p className="text-base md:text-lg text-primary/80 max-w-xl leading-relaxed font-medium">
              Diseño y desarrollo produrctos digitales centrados en el usuario,combinando desarrollo frontend moderno con soluciones basadas en inteligencia artificial.
              </p>
              <br ></br>
            <p className="text-secondary">
              Creo experiencias eficientes, intuitivas y con impacto real en negocio.

            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-8"
          >
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-accent text-[#233033] rounded-xl font-bold text-base transition-all duration-300 shadow-[0_0_18px_rgba(244,198,205,0.42)] hover:shadow-[0_0_30px_rgba(186,226,232,0.3)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-accent2/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              Contactar
            </motion.button>

            <a
              href={cvPdf}
              download="CV.pdf"
              className="w-full sm:w-auto px-8 py-4 border-2 border-borderC bg-[rgb(var(--color-surface))] text-primary rounded-xl font-bold text-base hover:border-accent2 transition-all duration-300 flex items-center justify-center"
            >
              <FileDown className="w-5 h-5 mr-3" />
              Descargar CV
            </a>
          </motion.div>

          <motion.div variants={item} className="flex gap-4">
            {[Github, Linkedin].map((Icon, i) => (
              <a 
                key={i} 
                href={Icon === Github ? 'https://github.com/Diana-Bernardos' : Icon === Linkedin ? 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223' : '#'}
                target="_blank"  
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-borderC bg-[rgb(var(--color-surface))] text-secondary hover:text-accent2 hover:border-accent transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Avatar / ScrollCanvas */}
        <motion.div
           variants={item}
           style={{ scale: avatarScale, y: avatarY }}
           className="hidden md:flex justify-center items-center w-full relative h-[400px] md:h-[600px]"
        >
          {/* Subtle decoration */}
          <div className="absolute w-[400px] h-[400px] bg-accent2/25 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full h-full max-w-lg flex items-center justify-center">
             <ScrollCanvas images={images} containerRef={containerRef} />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        style={{ opacity: textOpacity }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-secondary/80 font-bold">Scroll para explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
      </div>
    </header>
  );
}
