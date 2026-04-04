import { motion } from 'framer-motion';
import { ProfessionalExperience } from '../components/ProfessionalExperience';
import { Certifications } from '../components/Certifications';
import avatar from '../assets/images/avatar-about.png';

export default function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 mb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:flex justify-center items-center w-full relative h-[500px]"
        >
          <div className="absolute w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[90px] pointer-events-none" />

          <motion.img
            src={avatar}
            alt="Diana Avatar 3D"
            className="relative z-10 w-[400px] h-auto object-contain drop-shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[rgb(var(--color-surface))] p-8 md:p-10 rounded-[2rem] border border-borderC shadow-xl relative z-10 w-full md:-ml-12 lg:-ml-20"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary tracking-tight mb-6 font-display">
            Sobre mi
          </h2>
          <p className="text-primary/80 text-lg leading-relaxed mb-6 font-medium">
            Mi trayectoria profesional comenzo en el ambito sanitario, donde desarrolle habilidades clave como la organizacion, la precision y la gestion de procesos complejos.
            <br /><br />
            Hoy aplico esa base al mundo digital, disenando y desarrollando productos web centrados en el usuario.
            <br /><br />
            Trabajo combinando UX/UI, desarrollo frontend y soluciones con inteligencia artificial, incluyendo automatizacion de procesos, chatbots y aplicaciones inteligentes.
            <br /><br />
            Me interesa especialmente crear herramientas utiles que mejoren la experiencia de las personas y optimicen el trabajo de los equipos.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-accent2 mr-3 mt-1">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">Desarrollo Frontend:</strong> Desarrollo de aplicaciones web completas, desde la investigacion inicial hasta el despliegue final.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent2 mr-3 mt-1">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">Diseno UX/UI:</strong> Creacion de productos digitales centrados en el usuario, combinando diseno UX/UI con desarrollo frontend moderno.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-accent2 mr-3 mt-1">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">IA y Backend:</strong> Integracion de modelos de lenguaje y desarrollo de APIs eficientes con Node.js.
              </p>
            </li>
          </ul>

          <a
            href="#contact"
            className="inline-block px-8 py-3.5 bg-accent text-white rounded-xl font-bold hover:bg-secondary transition-all shadow-md"
          >
            Contactar
          </a>
        </motion.div>
      </div>

      <ProfessionalExperience />
      <Certifications />

      <div className="py-20 px-6 md:px-12 text-center bg-background">
        <h2 className="text-2xl font-bold text-primary mb-6 font-display">Listo para colaborar?</h2>
        <a
          href="mailto:dianabernardosm@gmail.com"
          className="inline-flex items-center px-8 py-3.5 bg-accent text-white rounded-lg font-bold hover:bg-secondary transition-all"
        >
          Enviame un mensaje
        </a>
      </div>
    </section>
  );
}
