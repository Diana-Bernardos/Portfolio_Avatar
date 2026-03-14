import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images (assuming they are in src/assets)
import family from '../assets/family.png';
import libro from '../assets/ebook-example.jpg';
import calculadora from '../assets/Calculadora.png';
import finnest from '../assets/Finest.png';
import recetario from '../assets/recetario.png';
import shopping from '../assets/shopping.jpg';
import easy from '../assets/easy_4.png';
import study from '../assets/case.png';
import img3225 from '../assets/img3255.webp';
import asistDom from '../assets/asistDom.png';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  role?: string;
  problem?: string;
  solution?: string;
  impact?: string;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: 'Family Planner',
      description: 'Calendario de planificación familiar con asistente inteligente para coordinar tareas y eventos.',
      longDescription: 'Producto completo con gestión de agendas, recordatorios y un asistente IA que sugiere actividades y optimiza tiempos. Enfoque fuerte en UX y accesibilidad.',
      image: family,
      technologies: ['React', 'Node.js', 'Axios', 'JavaScript', 'CSS', 'Ollama'],
      liveUrl: 'https://familyca.netlify.app/',
      githubUrl: 'https://www.canva.com/design/DAGgfKaN_gE/r6LhVstvPKNO9xYvlLNX1w/view',
      featured: true,
      role: 'UX/UI + Frontend',
      problem: 'Coordinación familiar dispersa y sin visibilidad compartida.',
      solution: 'Calendario + tareas + asistente IA con recomendaciones.',
      impact: 'Mejor claridad y menos fricción en la planificación diaria.'
    },
    {
      title: 'Recetario Sin Gluten',
      description: 'Recetario personalizado con IA para crear menús y compras sin gluten.',
      longDescription: 'Búsqueda inteligente de recetas, personalización por dieta y generación automática de menús. Integración con APIs y base de datos para guardado de favoritos.',
      image: recetario,
      technologies: ['React', 'Spoonacular Recipes API', 'Ollama', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://mis-recetas-gluten-free.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/mis-recetas-gluten-free.git',
      featured: true,
      role: 'Product + Frontend',
      problem: 'Búsqueda manual de recetas sin filtrado fiable.',
      solution: 'IA para sugerencias y menús adaptados a dieta.',
      impact: 'Ahorro de tiempo y mayor adherencia a dieta.'
    },
    {
      title: 'SmartHome AI',
      description: 'Asistente domótico con IA para controlar dispositivos y automatizar rutinas.',
      longDescription: 'Interfaz centralizada para escenas, control por voz y recomendaciones inteligentes. Backend en FastAPI y despliegue modular.',
      image: asistDom,
      technologies: ['React', 'Python', 'Tailwind', 'Ollama Phi3', 'FastAPI'],
      liveUrl: 'https://smart-home-ai-1-r8m0nnuor-dianas-projects-b7ad46ac.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/Portfolio_web.git',
      featured: true,
      role: 'Full Stack + IA',
      problem: 'Gestión dispersa de dispositivos y rutinas.',
      solution: 'Panel unificado + automatizaciones + IA contextual.',
      impact: 'Mayor control y reducción de tareas repetitivas.'
    },
    {
      title: 'Case Study Family Planner',
      description: 'Estudio UX/UI completo: investigación, mapas de viaje y prototipo.',
      longDescription: 'Caso de estudio con investigación cualitativa, definición de problemas, flujos, wireframes y prototipo de alta fidelidad.',
      image: study,
      technologies: ['Figma', 'UX Research'],
      liveUrl: 'https://v0-ux-ui-expert-review-8btb2bjgp-dianas-projects-b7ad46ac.vercel.app/',
      githubUrl: '#',
      featured: true,
      role: 'UX Research + UI',
      problem: 'Usuarios con baja claridad en organización familiar.',
      solution: 'Redefinición de flujos y prototipo validable.',
      impact: 'Mejor comprensión del producto y priorización de features.'
    },

    // Secondary projects
    {
      title: 'Project Sphere',
      description: 'Guarda y comparte tus mejores proyectos.',
      longDescription: 'Plataforma colaborativa para desarrolladores donde pueden exhibir sus proyectos, recibir feedback y encontrar colaboradores.',
      image: libro,
      technologies: ['React', 'MySQL', 'CSS', 'JavaScript'],
      liveUrl: 'https://diana-bernardos.github.io/project-promo-X-module-3-team-2/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'FinNest Dashboard',
      description: 'Analisis de gastos y metas de ahorro con visualizaciones.',
      image: finnest,
      technologies: ['React', 'MySQL', 'Node.js', 'JS', 'Ollama'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'My Shopping List',
      description: 'Gestion de listas de compra y menus semanales.',
      image: shopping,
      technologies: ['React', 'TypeScript', 'Ollama'],
      liveUrl: 'https://v0-mobile-shopping-app-seven.vercel.app/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Rick and Morty API',
      description: 'Explorador de personajes de la serie.',
      image: img3225,
      technologies: ['React', 'JS', 'SCSS'],
      liveUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
      githubUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
      featured: false
    },
    {
      title: 'Calculadora Cientifica',
      description: 'Calculadora animada con operaciones complejas.',
      image: calculadora,
      technologies: ['React', 'JS', 'CSS'],
      liveUrl: 'https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Easy Peasy Cards',
      description: 'Generador de tarjetas de visita digitales.',
      image: easy,
      technologies: ['React', 'JS', 'CSS'],
      liveUrl: 'https://aidanarr.github.io/project-promo-X-module-2-team-3/',
      githubUrl: '#',
      featured: false
    },
  ];

  const featured = projects.filter(p => p.featured);
  const secondary = projects.filter(p => !p.featured);
  const visibleSecondary = showAll ? secondary : secondary.slice(0, 3);

  return (
    <section id="projects" className="py-20 md:py-24 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
              My works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              Selección de productos donde combino frontend, UX e IA: dashboards, asistentes y herramientas centradas en personas usuarias.
            </p>
          </motion.div>
        </div>

        {/* Featured Projects (Mobile Mockup Layout) */}
        <div className="space-y-24 md:space-y-32 mb-24 md:mb-32">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-16 items-center`}
            >
              {/* Content Description */}
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-left">
                <span className="text-accent font-bold uppercase tracking-widest text-xs md:text-sm mb-4">Caso Destacado</span>
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tighter">
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 font-medium">
                  {project.longDescription || project.description}
                </p>
                
                {project.role && (
                  <div className="mb-8">
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Rol en el proyecto</p>
                    <p className="text-base font-semibold text-white">{project.role}</p>
                  </div>
                )}
                
                <div className="flex gap-4 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-auto px-10 py-4 bg-accent text-[#121212] rounded-xl font-bold flex items-center justify-center hover:bg-yellow-400 transition-all shadow-xl text-lg"
                  >
                    View project
                  </button>
                </div>
              </div>

              {/* Image Frame - Mobile Simulation */}
              <div className="w-full lg:w-1/2 flex justify-center">
                {/* Mobile Device Mockup */}
                <div 
                  className="relative mx-auto border-[#333333] bg-[#121212] border-[12px] md:border-[14px] rounded-[2.5rem] md:rounded-[3rem] h-[550px] w-[275px] md:h-[650px] md:w-[325px] shadow-2xl transition-transform duration-500 hover:-translate-y-4 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Notch / Speaker hole */}
                  <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                    <div className="w-24 h-4 md:h-5 bg-[#333333] rounded-b-xl"></div>
                  </div>
                  {/* Buttons */}
                  <div className="h-[32px] w-[3px] bg-[#333333] absolute -left-[15px] md:-left-[17px] top-[72px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-[#333333] absolute -left-[15px] md:-left-[17px] top-[124px] rounded-l-lg"></div>
                  <div className="h-[46px] w-[3px] bg-[#333333] absolute -left-[15px] md:-left-[17px] top-[178px] rounded-l-lg"></div>
                  <div className="h-[64px] w-[3px] bg-[#333333] absolute -right-[15px] md:-right-[17px] top-[142px] rounded-r-lg"></div>
                  
                  {/* Screen Content */}
                  <div className="rounded-[1.5rem] md:rounded-[2rem] overflow-hidden w-full h-full bg-[#1E1E1E] relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay interaction hint */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-[#121212]/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm">
                      <div className="bg-accent text-[#121212] px-6 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Abrir Demo
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects Header */}
        <div className="mb-10 text-center md:text-left border-t border-[#333333] pt-16">
           <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Más proyectos</h3>
        </div>

        {/* Regular Projects Grid matching "My works" reference exact layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleSecondary.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#1E1E1E] rounded-[2rem] overflow-hidden shadow-xl border border-[#333333] transition-all duration-300 hover:-translate-y-2 flex flex-col group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/11] overflow-hidden relative border-b border-[#333333]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow items-center text-center">
                <h4 className="text-xl font-bold text-white tracking-tight mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed flex-grow font-medium">
                  {project.description}
                </p>
                <div className="w-full mt-auto">
                  <button
                    className="w-full py-3.5 bg-accent text-[#121212] rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-sm"
                  >
                    View project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {secondary.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-8 py-3.5 rounded-xl border border-[#333333] bg-[#1E1E1E] text-sm font-bold text-white hover:border-accent transition-colors"
            >
              {showAll ? 'Ver menos' : 'See All'}
            </button>
          </div>
        )}
      </div>

      {/* Project Modal Backdrop */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-[#121212]/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              className="bg-[#121212]/80 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-[#121212] rounded-full hover:bg-accent hover:text-[#121212] text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative h-64 md:h-80 shrink-0 border-b border-[#333333]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight font-display">{selectedProject.title}</h2>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.technologies.map((tech: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent rounded-lg text-xs font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(255,206,50,0.1)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none mb-8 text-gray-300 leading-relaxed">
                  <p>
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#333333]">
                  {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3.5 bg-accent text-[#121212] rounded-xl font-bold hover:bg-yellow-400 transition-colors"
                    >
                      Ver Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  )}
                  {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-6 py-3.5 bg-[#121212] border border-[#333333] text-white rounded-xl font-bold hover:border-accent transition-colors"
                    >
                      <Github className="w-5 h-5 mr-2" /> Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}



