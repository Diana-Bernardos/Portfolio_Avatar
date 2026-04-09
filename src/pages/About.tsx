import { ProfessionalExperience } from '../components/ProfessionalExperience';
import { Certifications } from '../components/Certifications';

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-background py-24">
      <div className="mx-auto mb-24 grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative hidden h-[500px] w-full items-center justify-center md:flex">
          <div className="pointer-events-none absolute h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.16)_0%,rgba(112,0,255,0.16)_48%,transparent_72%)] blur-[90px]" />

          <div className="relative z-10 overflow-hidden rounded-[2.1rem] border border-[#161B22] bg-[rgb(var(--color-surface))] shadow-[0_26px_70px_rgba(0,0,0,0.28),0_0_0_1px_rgba(0,209,255,0.08)]">
            <img
              src="https://images.pexels.com/photos/22046267/pexels-photo-22046267.jpeg?cs=srgb&dl=pexels-silverkblack-22046267.jpg&fm=jpg"
              alt="Woman working on laptop in a modern office"
              className="h-[520px] w-[430px] object-cover object-[center_18%]"
            />
          </div>
        </div>

        <div className="surface-gradient relative z-10 w-full rounded-[2rem] border border-[#161B22] p-8 shadow-xl md:-ml-12 md:p-10 lg:-ml-20">
          <h2 className="mb-6 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Sobre mi</h2>
          <p className="mb-6 text-lg font-medium leading-relaxed text-primary/80">
            Mi trayectoria profesional comenzo en el ambito sanitario, donde desarrolle habilidades clave como la organizacion, la precision y la gestion de procesos complejos.
            <br />
            <br />
            Hoy aplico esa base al mundo digital, diseñando y desarrollando productos web centrados en el usuario.
            <br />
            <br />
            Trabajo combinando UX/UI, desarrollo frontend y soluciones con inteligencia artificial, incluyendo automatizacion de procesos, chatbots y aplicaciones inteligentes.
            <br />
            <br />
            Me interesa especialmente crear herramientas utiles que mejoren la experiencia de las personas y optimicen el trabajo de los equipos.
          </p>

          <ul className="mb-8 space-y-4">
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-accent2">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">Desarrollo Frontend:</strong> Desarrollo de aplicaciones web completas, desde la investigacion inicial hasta el despliegue final.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-accent2">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">Diseno UX/UI:</strong> Creacion de productos digitales centrados en el usuario, combinando diseno UX/UI con desarrollo frontend moderno.
              </p>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1 text-accent2">*</span>
              <p className="text-primary/80">
                <strong className="text-primary">IA y Backend:</strong> Integracion de modelos de lenguaje y desarrollo de APIs eficientes con Node.js.
              </p>
            </li>
          </ul>

          <a href="#contact" className="inline-block rounded-xl px-8 py-3.5 font-bold transition-all shadow-md hover:-translate-y-1 neural-button">
            Contactar
          </a>
        </div>
      </div>

      <ProfessionalExperience />
      <Certifications />

      <div className="bg-background px-6 py-20 text-center md:px-12">
        <h2 className="mb-6 font-display text-2xl font-bold text-primary">Lista para colaborar?</h2>
        <a
          href="mailto:dianabernardosm@gmail.com"
          className="inline-flex items-center rounded-lg px-8 py-3.5 font-bold transition-all hover:-translate-y-1 neural-button"
        >
          Enviame un mensaje
        </a>
      </div>
    </section>
  );
}
