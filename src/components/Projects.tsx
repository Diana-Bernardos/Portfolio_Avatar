import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import images (assuming they are in src/assets)
import family from '../assets/family.png';
import libro from '../assets/ebook-example.jpg';
import calculadora from '../assets/Calculadora.png';
import finnest from '../assets/Finest.png';
import finnest1 from '../assets/finnest-dash-1.png.png';
import finnest2 from '../assets/finnest-dash-2.png.png';

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
  secondaryImage?: string;
  hoverPosition?: string; // e.g., 'right' or 'bottom'
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
      title: 'FinNest.2',
      description: 'App de finanzas personales con IA local integrada.',
      longDescription: 'Sistema avanzado de finanzas personales que analiza, predice y categoriza gastos sin exponer datos a la nube. El reto central fue hacer accesible la IA financiera sin sacrificar privacidad, integrando Ollama como motor local para una inferencia fluida en la máquina del usuario.',
      image: finnest1,
      technologies: ['React + Vite', 'Tailwind CSS', 'Recharts', 'Node.js + Express', 'Sequelize', 'PostgreSQL', 'Ollama', 'Llama 3.2', 'Axios'],
      liveUrl: 'https://fin-nest-2.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/FinNest.2.git',
      featured: true,
      role: 'Full-stack · Diseño UX',
      problem: 'Gestionar finanzas con IA requiere subir datos sensibles a la nube, comprometiendo la privacidad.',
      solution: 'Integración de Ollama con Llama 3.2 para procesamiento local, manteniendo una UX premium y fluida.',
      impact: '0 datos enviados al exterior. 4 módulos operativos (ahorros, gastos, análisis, predicción) con categorización automática.',
      secondaryImage: finnest2,
      hoverPosition: 'right'
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
      title: 'FinNest Classic',
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

        {/* Featured Projects (Modern Asymmetrical Layout) */}
        <div className="space-y-32 md:space-y-48 mb-32">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 md:gap-20 items-center`}
            >
              {/* Content Description */}
              <div className="w-full lg:w-5/12 flex flex-col items-start justify-center text-left">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[1px] bg-accent" />
                  <span className="text-accent font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">Estudio de Caso</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tighter font-display">
                  {project.title}
                </h3>
                
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 font-medium max-w-lg">
                  {project.longDescription || project.description}
                </p>
                
                {project.role && (
                  <div className="mb-10 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm w-full">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-3">Rol & Responsabilidades</p>
                    <p className="text-base font-semibold text-gray-200">{project.role}</p>
                  </div>
                )}
                
                <div className="flex gap-4 w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="w-full sm:w-auto px-10 py-5 bg-accent text-[#121212] rounded-2xl font-bold flex items-center justify-center hover:shadow-[0_0_30px_rgba(255,206,50,0.3)] transition-all text-lg"
                  >
                    Ver Detalles
                  </motion.button>
                </div>
              </div>

              {/* Image Showcase - More modern frame */}
              <div className="w-full lg:w-7/12 relative group cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden border border-white/10 bg-[#1E1E1E] shadow-2xl">
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${
                      project.hoverPosition === 'right' ? 'group-hover:translate-x-[-10%]' : 
                      project.hoverPosition === 'bottom' ? 'group-hover:translate-y-[-10%]' : 
                      'group-hover:scale-110'
                    }`}
                  />
                  
                  {/* Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                      Explorar Proyecto
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Regular Projects Header */}
        <div className="mb-10 text-center md:text-left border-t border-[#333333] pt-16">
           <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight font-display">Más proyectos</h3>
        </div>

        {/* Regular Projects Grid - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {visibleSecondary.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#1E1E1E]/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 transition-all duration-500 hover:-translate-y-3 flex flex-col group cursor-pointer ${
                index === 1 ? 'lg:translate-y-8' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[1.2] overflow-hidden relative border-b border-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-base text-gray-400 mb-10 leading-relaxed flex-grow font-medium">
                  {project.description}
                </p>
                <div className="w-full mt-auto">
                  <div className="flex items-center gap-2 text-accent font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explorar <ExternalLink className="w-4 h-4" />
                  </div>
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
                  <p className="mb-6">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  
                  {selectedProject.problem && (
                    <div className="mb-6">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">El Problema</h4>
                      <p className="text-gray-400">{selectedProject.problem}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="mb-6">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">La Solución</h4>
                      <p className="text-gray-400">{selectedProject.solution}</p>
                    </div>
                  )}

                  {selectedProject.impact && (
                    <div className="mb-6">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">Impacto Clave</h4>
                      <p className="text-gray-400">{selectedProject.impact}</p>
                    </div>
                  )}

                  {selectedProject.secondaryImage && (
                    <div className="mt-8 rounded-2xl overflow-hidden border border-[#333333]">
                      <img
                        src={selectedProject.secondaryImage}
                        alt={`${selectedProject.title} dashboard view`}
                        className="w-full h-auto"
                      />
                    </div>
                  )}
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



