import { motion } from 'framer-motion';
import { ProfessionalExperience } from '../components/ProfessionalExperience';
import { Certifications } from '../components/Certifications';
import avatar from '../assets/images/avatar-about.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* 3D Character */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="hidden md:flex justify-center items-center w-full relative h-[500px]"
        >
          {/* subtle glow */}
          <div className="absolute w-[300px] h-[300px] bg-accent/20 rounded-full blur-[90px] pointer-events-none" />
          
          <motion.img 
               src={avatar} 
               alt="Diana Avatar 3D" 
               className="relative z-10 w-[400px] h-auto object-contain drop-shadow-2xl"
               animate={{ y: [0, -12, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* Text Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#1E1E1E] p-8 md:p-10 rounded-[2rem] border border-[#333333] shadow-xl relative z-10 w-full md:-ml-12 lg:-ml-20"
        >
          {/* About Text Content */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6 font-display">
            Sobre mí
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-medium">
            Soy una Frontend & UX Designer apasionada por crear interfaces digitales que no solo se vean bien, sino que funcionen de manera intuitiva. Mi enfoque combina la estética del diseño con la solidez técnica.
          </p>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">✦</span>
              <p className="text-gray-300"><strong className="text-white">Desarrollo Frontend:</strong> Construyo aplicaciones web escalables y eficientes utilizando React, TypeScript y Tailwind CSS.</p>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">✦</span>
              <p className="text-gray-300"><strong className="text-white">Diseño UX/UI:</strong> Fomento experiencias centradas en el usuario, desde wireframes en Figma hasta prototipos interactivos.</p>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">✦</span>
              <p className="text-gray-300"><strong className="text-white">IA & Backend:</strong> Integración de modelos de lenguaje (LLMs) y desarrollo de APIs eficientes con Node.js.</p>
            </li>
          </ul>

          <a 
            href="#contact" 
            className="inline-block px-8 py-3.5 bg-accent text-[#121212] rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-md"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      <ProfessionalExperience />
      <Certifications />

      <div className="py-20 px-6 md:px-12 text-center bg-[#121212]">
        <h2 className="text-2xl font-bold text-white mb-6 font-display">¿Listo para colaborar?</h2>
        <a
          href="mailto:dianabernardosm@gmail.com"
          className="inline-flex items-center px-8 py-3.5 bg-accent text-[#121212] rounded-lg font-bold hover:bg-yellow-400 transition-all"
        >
          Envíame un mensaje
        </a>
      </div>
    </section>
  );
}
