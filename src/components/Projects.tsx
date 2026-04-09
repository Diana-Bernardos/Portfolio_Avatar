import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  metrics?: Array<{ label: string; value: string }>;
}

const aiTechKeywords = ['ollama', 'openai', 'hugging', 'fastapi', 'python', 'llama', 'ai', 'ml', 'machine'];
const webTechKeywords = ['react', 'vite', 'javascript', 'typescript', 'css', 'tailwind', 'node', 'axios', 'html', 'scss'];

function getTechnologyTone(tech: string) {
  const normalized = tech.toLowerCase();

  if (aiTechKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'ai';
  }

  if (webTechKeywords.some((keyword) => normalized.includes(keyword))) {
    return 'web';
  }

  return 'neutral';
}

function getTechnologyBadgeClass(tech: string) {
  switch (getTechnologyTone(tech)) {
    case 'ai':
      return 'border-accent2/25 bg-[linear-gradient(135deg,rgba(112,0,255,0.18)_0%,rgba(112,0,255,0.08)_100%)] text-[#D8B4FF] shadow-[0_0_18px_rgba(112,0,255,0.08)]';
    case 'web':
      return 'border-accent/25 bg-[linear-gradient(135deg,rgba(0,209,255,0.16)_0%,rgba(0,209,255,0.06)_100%)] text-[#7DDCFF] shadow-[0_0_18px_rgba(0,209,255,0.08)]';
    default:
      return 'border-borderC/70 bg-[rgba(22,27,34,0.92)] text-primary/90 shadow-[0_0_18px_rgba(0,0,0,0.08)]';
  }
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      title: 'FinNest.2',
      description: 'App de finanzas personales con IA local integrada.',
      longDescription:
        'Sistema avanzado de finanzas personales que analiza, predice y categoriza gastos sin exponer datos a la nube. El reto central fue hacer accesible la IA financiera sin sacrificar privacidad, integrando Ollama como motor local para una inferencia fluida en la maquina del usuario.',
      image: finnest1,
      technologies: ['React + Vite', 'Tailwind CSS', 'Recharts', 'Node.js + Express', 'Sequelize', 'PostgreSQL', 'Ollama', 'Llama 3.2', 'Axios'],
      liveUrl: 'https://fin-nest-2.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/FinNest.2.git',
      featured: true,
      role: 'Full-stack / Diseno UX',
      problem: 'Gestionar finanzas con IA requiere subir datos sensibles a la nube, comprometiendo la privacidad.',
      solution: 'Integracion de Ollama con Llama 3.2 para procesamiento local, manteniendo una UX premium y fluida.',
      impact: '0 datos enviados al exterior. 4 modulos operativos con categorizacion automatica.',
      metrics: [
        { label: 'Privacy', value: '100%' },
        { label: 'Modules', value: '04' },
      ],
    },
    {
      title: 'SmartHome AI',
      description: 'Asistente domotico con IA para controlar dispositivos y automatizar rutinas.',
      longDescription:
        'Interfaz centralizada para escenas, control por voz y recomendaciones inteligentes. Backend en FastAPI y despliegue modular.',
      image: asistDom,
      technologies: ['React', 'Python', 'Tailwind', 'Ollama Phi3', 'FastAPI'],
      liveUrl: 'https://smart-home-ai-1-r8m0nnuor-dianas-projects-b7ad46ac.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/Portfolio_web.git',
      featured: true,
      role: 'Full Stack + IA',
      problem: 'Gestion dispersa de dispositivos y rutinas.',
      solution: 'Panel unificado + automatizaciones + IA contextual.',
      impact: 'Mayor control y reduccion de tareas repetitivas.',
      metrics: [
        { label: 'Automations', value: '12+' },
        { label: 'Latency', value: '<1s' },
      ],
    },
    {
      title: 'Family Planner',
      description: 'Calendario de planificacion familiar con asistente inteligente para coordinar tareas y eventos.',
      longDescription:
        'Producto completo con gestion de agendas, recordatorios y un asistente IA que sugiere actividades y optimiza tiempos. Enfoque fuerte en UX y accesibilidad.',
      image: family,
      technologies: ['React', 'Node.js', 'Axios', 'JavaScript', 'CSS', 'Ollama'],
      liveUrl: 'https://familyca.netlify.app/',
      githubUrl: 'https://www.canva.com/design/DAGgfKaN_gE/r6LhVstvPKNO9xYvlLNX1w/view',
      featured: true,
      role: 'UX/UI + Frontend',
      problem: 'Coordinacion familiar dispersa y sin visibilidad compartida.',
      solution: 'Calendario + tareas + asistente IA con recomendaciones.',
      impact: 'Mejor claridad y menos friccion en la planificacion diaria.',
      metrics: [
        { label: 'Planning clarity', value: '+74%' },
        { label: 'AI prompts', value: 'Smart' },
      ],
    },
    {
      title: 'Recetario Sin Gluten',
      description: 'Recetario personalizado con IA para crear menus y compras sin gluten.',
      longDescription:
        'Busqueda inteligente de recetas, personalizacion por dieta y generacion automatica de menus. Integracion con APIs y base de datos para guardado de favoritos.',
      image: recetario,
      technologies: ['React', 'Spoonacular Recipes API', 'Ollama', 'Tailwind CSS', 'Supabase'],
      liveUrl: 'https://mis-recetas-gluten-free.vercel.app/',
      githubUrl: 'https://github.com/Diana-Bernardos/mis-recetas-gluten-free.git',
      featured: true,
      role: 'Product + Frontend',
      problem: 'Busqueda manual de recetas sin filtrado fiable.',
      solution: 'IA para sugerencias y menus adaptados a dieta.',
      impact: 'Ahorro de tiempo y mayor adherencia a dieta.',
      metrics: [
        { label: 'Menu time', value: '-63%' },
        { label: 'Diet fit', value: 'High' },
      ],
    },
    {
      title: 'Case Study Family Planner',
      description: 'Estudio UX/UI completo: investigacion, mapas de viaje y prototipo.',
      longDescription:
        'Caso de estudio con investigacion cualitativa, definicion de problemas, flujos, wireframes y prototipo de alta fidelidad.',
      image: study,
      technologies: ['Figma', 'UX Research'],
      liveUrl: 'https://v0-ux-ui-expert-review-8btb2bjgp-dianas-projects-b7ad46ac.vercel.app/',
      githubUrl: '#',
      featured: true,
      role: 'UX Research + UI',
      problem: 'Usuarios con baja claridad en organizacion familiar.',
      solution: 'Redefinicion de flujos y prototipo validable.',
      impact: 'Mejor comprension del producto y priorizacion de features.',
      metrics: [
        { label: 'Flows', value: '06' },
        { label: 'Research', value: 'UX' },
      ],
    },
    {
      title: 'Project Sphere',
      description: 'Guarda y comparte tus mejores proyectos.',
      image: libro,
      technologies: ['React', 'MySQL', 'CSS', 'JavaScript'],
      liveUrl: 'https://diana-bernardos.github.io/project-promo-X-module-3-team-2/',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'FinNest Classic',
      description: 'Analisis de gastos y metas de ahorro con visualizaciones.',
      image: finnest,
      technologies: ['React', 'MySQL', 'Node.js', 'JS', 'Ollama'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'My Shopping List',
      description: 'Gestion de listas de compra y menus semanales.',
      image: shopping,
      technologies: ['React', 'TypeScript', 'Ollama'],
      liveUrl: 'https://v0-mobile-shopping-app-seven.vercel.app/',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Rick and Morty API',
      description: 'Explorador de personajes de la serie.',
      image: img3225,
      technologies: ['React', 'JS', 'SCSS'],
      liveUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
      githubUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
      featured: false,
    },
    {
      title: 'Calculadora Cientifica',
      description: 'Calculadora animada con operaciones complejas.',
      image: calculadora,
      technologies: ['React', 'JS', 'CSS'],
      liveUrl: 'https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/',
      githubUrl: '#',
      featured: false,
    },
    {
      title: 'Easy Peasy Cards',
      description: 'Generador de tarjetas de visita digitales.',
      image: easy,
      technologies: ['React', 'JS', 'CSS'],
      liveUrl: 'https://aidanarr.github.io/project-promo-X-module-2-team-3/',
      githubUrl: '#',
      featured: false,
    },
  ];

  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);
  const visibleSecondary = showAll ? secondary : secondary.slice(0, 3);

  const compactText = (text?: string, maxLength = 140) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength).trim()}...`;
  };

  return (
    <section id="projects" className="scroll-mt-28 bg-background px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center rounded-full border border-borderC bg-[rgb(var(--color-surface))]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              Selected Work
            </span>
            <h2 className="mt-6 mb-4 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">My works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary/80 md:text-lg">
              Seleccion de productos donde combino frontend, UX e IA con un enfoque claro en utilidad, narrativa visual y experiencia real.
            </p>
          </motion.div>
        </div>

        <div className="mb-28 space-y-24 md:space-y-32">
          {featured.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={`grid gap-0 overflow-hidden rounded-[2.4rem] border border-[#161B22] bg-[rgb(var(--color-surface))] shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${
                index % 2 === 0 ? 'lg:grid-cols-[1.12fr_0.88fr]' : 'lg:grid-cols-[0.88fr_1.12fr]'
              }`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative min-h-[18rem] overflow-hidden border-b border-[#161B22] lg:min-h-[26rem] lg:border-b-0 lg:border-r lg:border-[#161B22]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-none"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-black/12 to-accent2/10" />
                <div className="absolute left-5 top-5 rounded-full border border-accent/20 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">
                  Case overview
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <div className="inline-flex rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                    Click para abrir
                  </div>
                </div>
              </button>

              <div className="flex flex-col gap-5 p-5 md:p-6 lg:p-7">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <span className="h-px w-10 bg-gradient-to-r from-accent to-accent2" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Estudio de caso</span>
                  </div>

                  <h3 className="font-display text-3xl font-extrabold leading-[1.05] tracking-tighter text-primary md:text-[2.6rem]">{project.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary/78 md:text-[15px]">
                    {compactText(project.longDescription || project.description, 112)}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Rol</p>
                    <p className="text-sm font-semibold leading-snug text-primary">{project.role || 'Project design + development'}</p>
                  </div>
                  <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Impacto</p>
                    <p className="text-sm font-semibold leading-snug text-primary">{compactText(project.impact || project.description, 68)}</p>
                  </div>
                </div>

                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary/65">{metric.label}</p>
                        <p className="mt-2 text-lg font-extrabold text-primary">{metric.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={`rounded-lg border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${getTechnologyBadgeClass(tech)}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition-colors hover:opacity-95 neural-button"
                    >
                      Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-[#161B22] bg-black/50 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-10 border-t border-borderC pt-16 text-center md:text-left">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-3xl">Mas proyectos</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleSecondary.map((project, index) => (
            <motion.button
              key={index}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[2rem] border border-[#161B22] bg-[rgb(var(--color-surface))] text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-colors duration-300 hover:border-accent/80"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[#161B22]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover object-center transition-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent opacity-75" />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h4 className="mb-3 text-xl font-bold tracking-tight text-primary group-hover:text-accent">{project.title}</h4>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-primary/78">{project.description}</p>
                <div className="mt-auto flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  Explorar <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {secondary.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="rounded-xl border border-borderC bg-[rgb(var(--color-surface))]/85 px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              {showAll ? 'Ver menos' : 'See all'}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              className="relative w-full max-w-6xl overflow-hidden rounded-3xl border border-[#161B22] shadow-[0_0_50px_rgba(0,0,0,0.5)] surface-gradient backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-primary transition-colors hover:bg-accent hover:text-[rgb(var(--color-ink))]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-0 md:grid-cols-2">
              <div className="relative min-h-[20rem] border-b border-[#161B22] md:min-h-[36rem] md:border-b-0 md:border-r md:border-[#161B22]">
                  <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/12 to-accent2/10" />
                  <div className="absolute left-5 top-5 rounded-full border border-accent/20 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">
                    Case overview
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-4 md:p-4 lg:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-gradient-to-r from-accent to-accent2" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Selected Work</span>
                      </div>
                      <h2 className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-3xl">{selectedProject.title}</h2>
                      <p className="mt-2 text-sm leading-relaxed text-primary/78">
                        {compactText(selectedProject.longDescription || selectedProject.description, 100)}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-wrap justify-end gap-2 pt-1">
                      {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition-colors hover:opacity-95 neural-button"
                        >
                          Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                      {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-[#161B22] bg-black/50 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent"
                        >
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Rol</p>
                      <p className="text-sm font-semibold leading-snug text-primary">{selectedProject.role || 'Project design + development'}</p>
                    </div>
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Impacto</p>
                      <p className="text-sm font-semibold leading-snug text-primary">{compactText(selectedProject.impact || selectedProject.description, 66)}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className={`rounded-lg border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${getTechnologyBadgeClass(tech)}`}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Problema</p>
                      <p className="text-sm leading-snug text-primary/78">{compactText(selectedProject.problem || 'Necesidad real detectada en el producto.', 60)}</p>
                    </div>
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Solucion</p>
                      <p className="text-sm leading-snug text-primary/78">{compactText(selectedProject.solution || 'Interfaz clara con foco en ejecucion.', 60)}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                    <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Stack rapido</p>
                    <p className="text-sm leading-snug text-primary/78">{selectedProject.technologies.slice(0, 4).join(' · ')}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
