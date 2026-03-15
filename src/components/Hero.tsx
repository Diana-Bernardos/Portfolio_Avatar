import { FileDown, Github, Linkedin } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

import avatar from '../assets/images/avatar-hero.png';
import cvPdf from '../assets/docs/CV.pdf';

export function Hero() {
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

  return (
    <header id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#121212] pt-20">
      <motion.div
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
            <span className="inline-block px-5 py-2 rounded-full border border-[#333333] bg-[#1E1E1E] text-sm font-semibold text-gray-300 mb-6 lowercase tracking-wide">
              ¡hola! soy diana
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-accent mb-6 tracking-tighter leading-[1.1] font-display">
              Frontend & <br /> UX Designer
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-medium">
              Diseño y construyo interfaces claras y escalables. Trabajo con equipos de producto para convertir requisitos complejos en experiencias simples y efectivas, aplicando UX e IA.
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
              className="w-full sm:w-auto px-8 py-4 bg-accent text-[#121212] rounded-xl font-bold text-base transition-all duration-300 shadow-[0_0_15px_rgba(255,206,50,0.4)] hover:shadow-[0_0_30px_rgba(255,206,50,0.6)] relative overflow-hidden group"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              Contactar
            </motion.button>

            <a
              href={cvPdf}
              download="CV.pdf"
              className="w-full sm:w-auto px-8 py-4 border-2 border-[#333333] bg-[#1E1E1E] text-white rounded-xl font-bold text-base hover:border-accent transition-all duration-300 flex items-center justify-center"
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
                className="p-3 rounded-full border border-[#333333] bg-[#1E1E1E] text-gray-400 hover:text-accent hover:border-accent transition-all duration-300"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Side - Avatar */}
        <motion.div
           variants={item}
           className="hidden md:flex justify-center items-center w-full relative"
        >
          {/* Subtle decoration retaining the dark ambient feel */}
          <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 w-full max-w-lg">
             <motion.img 
               src={avatar} 
               alt="Diana Avatar 3D" 
               className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               animate={{ y: [0, -15, 0] }}
               transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}


