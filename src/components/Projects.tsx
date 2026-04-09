import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BarChart3, ExternalLink, Github, Layers3, Sparkles, Target, X } from 'lucide-react';

import family from '../assets/family.png';
import libro from '../assets/ebook-example.jpg';
import calculadora from '../assets/Calculadora.png';
import finnest from '../assets/Finest.png';
import finnest1 from '../assets/finnest-dash-1.png.png';
import recetario from '../assets/recetario.png';
import shopping from '../assets/shopping.jpg';
import easy from '../assets/easy_4.png';
import study from '../assets/case.png';
import img3225 from '../assets/img3255.webp';
import asistDom from '../assets/asistDom.png';

interface ProjectMetric {
  label: string;
  value: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  role: string;
  problem: string;
  solution: string;
  impact: string;
  features: string[];
  metrics: ProjectMetric[];
  category: string;
  scope: string;
}

const aiTechKeywords = ['ollama', 'openai', 'hugging', 'fastapi', 'python', 'llama', 'ai', 'ml', 'machine'];
const webTechKeywords = ['react', 'vite', 'javascript', 'typescript', 'css', 'tailwind', 'node', 'axios', 'html', 'scss'];

const projects: Project[] = [
  {
    title: 'FinNest 2',
    subtitle: 'IA local para finanzas personales',
    description: 'App de finanzas personales con clasificacion automatica y privacidad local.',
    longDescription: 'Sistema de finanzas personales para registrar movimientos, analizar gastos y generar insights utiles sin exponer datos sensibles. La capa de IA funciona en local con Ollama para mantener privacidad y una experiencia fluida.',
    image: finnest1,
    technologies: ['React + Vite', 'Tailwind CSS', 'Recharts', 'Node.js + Express', 'Sequelize', 'PostgreSQL', 'Ollama', 'Llama 3.2', 'Axios'],
    liveUrl: 'https://fin-nest-2.vercel.app/',
    githubUrl: 'https://github.com/Diana-Bernardos/FinNest.2.git',
    featured: true,
    role: 'Full-stack y diseno de producto',
    problem: 'Gestionar finanzas con IA suele implicar subir datos sensibles a servicios externos.',
    solution: 'Inferencia local con Ollama, paneles claros y analitica centrada en decisiones rapidas.',
    impact: 'Privacidad total en el procesamiento y cuatro modulos activos con clasificacion automatica.',
    features: ['Clasificacion automatica de gastos', 'Dashboard de ingresos y tendencias', 'IA local sin salida a nube', 'Seguimiento mensual y alertas'],
    metrics: [
      { label: 'Privacy', value: '100%' },
      { label: 'Modules', value: '04' },
      { label: 'AI runtime', value: 'Local' },
    ],
    category: 'Fintech + AI',
    scope: 'Producto completo',
  },
  {
    title: 'SmartHome AI',
    subtitle: 'Control domotico con IA contextual',
    description: 'Asistente para controlar dispositivos y automatizar rutinas del hogar.',
    longDescription: 'Interfaz centralizada para escenas, control por voz y recomendaciones inteligentes. La arquitectura separa frontend, automatizaciones y capa de IA para sostener un flujo simple y escalable.',
    image: asistDom,
    technologies: ['React', 'Python', 'Tailwind', 'Ollama Phi3', 'FastAPI'],
    liveUrl: 'https://smart-home-ai-1-r8m0nnuor-dianas-projects-b7ad46ac.vercel.app/',
    githubUrl: 'https://github.com/Diana-Bernardos/Portfolio_web.git',
    featured: true,
    role: 'Full-stack + IA',
    problem: 'La gestion de rutinas y dispositivos queda dispersa en muchas interfaces distintas.',
    solution: 'Un panel unificado con automatizaciones y sugerencias contextuales impulsadas por IA.',
    impact: 'Menos friccion operativa y control rapido de escenas, tareas y rutinas domesticas.',
    features: ['Control centralizado de dispositivos', 'Rutinas y escenas automatizadas', 'IA contextual para sugerencias', 'Backend modular con FastAPI'],
    metrics: [
      { label: 'Automations', value: '12+' },
      { label: 'Latency', value: '<1s' },
      { label: 'Voice flow', value: 'Ready' },
    ],
    category: 'Smart home',
    scope: 'Producto funcional',
  },
  {
    title: 'Family Planner',
    subtitle: 'Planificacion compartida para familias',
    description: 'Calendario y tareas con asistente inteligente para coordinar eventos y rutinas.',
    longDescription: 'Producto orientado a coordinar agendas, recordatorios y tareas de varias personas desde una sola interfaz. El foco esta en claridad visual, accesibilidad y una experiencia que reduzca la carga mental.',
    image: family,
    technologies: ['React', 'Node.js', 'Axios', 'JavaScript', 'CSS', 'Ollama'],
    liveUrl: 'https://familyca.netlify.app/',
    githubUrl: 'https://www.canva.com/design/DAGgfKaN_gE/r6LhVstvPKNO9xYvlLNX1w/view',
    featured: true,
    role: 'UX/UI y Frontend',
    problem: 'La coordinacion familiar suele vivir en mensajes dispersos y recordatorios poco claros.',
    solution: 'Calendario compartido, tareas visibles y asistencia IA para priorizar y organizar mejor.',
    impact: 'Mas claridad en la planificacion y menos friccion en la gestion diaria.',
    features: ['Agenda compartida', 'Tareas y recordatorios', 'Asistente IA para propuestas', 'UX centrada en accesibilidad'],
    metrics: [
      { label: 'Planning clarity', value: '+74%' },
      { label: 'Shared views', value: '03' },
      { label: 'Assistants', value: 'AI' },
    ],
    category: 'Productivity',
    scope: 'Caso funcional',
  },
  {
    title: 'Recetario Sin Gluten',
    subtitle: 'Menus adaptados y compra asistida',
    description: 'Recetario personalizado con IA para menus y compras sin gluten.',
    longDescription: 'Busqueda inteligente de recetas, personalizacion por dieta y generacion automatica de menus. Integra APIs y persistencia para guardar favoritos y reducir el tiempo de planificacion.',
    image: recetario,
    technologies: ['React', 'Spoonacular Recipes API', 'Ollama', 'Tailwind CSS', 'Supabase'],
    liveUrl: 'https://mis-recetas-gluten-free.vercel.app/',
    githubUrl: 'https://github.com/Diana-Bernardos/mis-recetas-gluten-free.git',
    featured: true,
    role: 'Product + Frontend',
    problem: 'Buscar recetas compatibles con una dieta concreta consume mucho tiempo y genera incertidumbre.',
    solution: 'Sugerencias inteligentes, menus adaptados y una experiencia que prioriza filtros claros.',
    impact: 'Menos tiempo de busqueda y mejor adherencia a la dieta sin renunciar a variedad.',
    features: ['Buscador con filtros dieteticos', 'Menus automaticos semanales', 'Favoritos persistentes', 'Sugerencias asistidas por IA'],
    metrics: [
      { label: 'Menu time', value: '-63%' },
      { label: 'Diet fit', value: 'High' },
      { label: 'Saved recipes', value: 'Yes' },
    ],
    category: 'Food tech',
    scope: 'MVP avanzado',
  },
  {
    title: 'Case Study Family Planner',
    subtitle: 'Investigacion y prototipo de alta fidelidad',
    description: 'Estudio UX completo con investigacion, flujos, wireframes y prototipo.',
    longDescription: 'Caso de estudio con investigacion cualitativa, definicion de problemas, flujos, wireframes y prototipo de alta fidelidad. La pieza prioriza la lectura del proceso y las decisiones de diseno.',
    image: study,
    technologies: ['Figma', 'UX Research'],
    liveUrl: 'https://v0-ux-ui-expert-review-8btb2bjgp-dianas-projects-b7ad46ac.vercel.app/',
    githubUrl: '#',
    featured: true,
    role: 'UX Research + UI',
    problem: 'El producto necesitaba una estructura de flujos mas clara para resolver el problema real del usuario.',
    solution: 'Replanteamiento del journey, mapas de flujo y prototipo validable en alta fidelidad.',
    impact: 'Mejor comprension del producto y una base solida para priorizar funcionalidades.',
    features: ['Research cualitativo', 'Journey map y flujos', 'Wireframes de baja fidelidad', 'Prototipo visual de alta fidelidad'],
    metrics: [
      { label: 'Flows', value: '06' },
      { label: 'Research', value: 'UX' },
      { label: 'Fidelity', value: 'High' },
    ],
    category: 'UX case study',
    scope: 'Portfolio piece',
  },
  {
    title: 'Project Sphere',
    subtitle: 'Repositorio visual de proyectos',
    description: 'Plataforma para guardar, explorar y compartir proyectos propios.',
    longDescription: 'Aplicacion para organizar proyectos, visualizar tarjetas de trabajo y navegar entre piezas con una interfaz clara y orientada a portafolio.',
    image: libro,
    technologies: ['React', 'MySQL', 'CSS', 'JavaScript'],
    liveUrl: 'https://diana-bernardos.github.io/project-promo-X-module-3-team-2/',
    githubUrl: '#',
    featured: false,
    role: 'Frontend',
    problem: 'Muchos proyectos terminan dispersos y sin una capa visual de exploracion.',
    solution: 'Tarjetas de proyectos con estructura clara y una pagina de exploracion simple.',
    impact: 'Mejor presentacion del trabajo y acceso mas rapido a cada pieza.',
    features: ['Listado visual de proyectos', 'Navegacion simple', 'Tarjetas con imagen y resumen'],
    metrics: [
      { label: 'Cards', value: 'Visual' },
      { label: 'Scope', value: 'Portfolio' },
    ],
    category: 'Portfolio',
    scope: 'Frontend',
  },
  {
    title: 'FinNest Classic',
    subtitle: 'Finanzas y ahorro con analitica visual',
    description: 'Analisis de gastos y metas de ahorro con visualizaciones.',
    longDescription: 'Primera version del producto orientada a visualizacion de gastos, objetivos de ahorro y seguimiento de salud financiera con una interfaz directa.',
    image: finnest,
    technologies: ['React', 'MySQL', 'Node.js', 'JS', 'Ollama'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    role: 'Frontend + data view',
    problem: 'Necesidad de entender gastos y ahorro en un solo panel rapido.',
    solution: 'Dashboards sencillos y una estructura pensada para leer tendencias sin ruido.',
    impact: 'Base funcional para evolucionar hacia la version 2 con IA local.',
    features: ['Visor de gastos', 'Objetivos de ahorro', 'Resumen financiero'],
    metrics: [
      { label: 'Views', value: '03' },
      { label: 'Stack', value: 'Web' },
    ],
    category: 'Fintech',
    scope: 'Version base',
  },
  {
    title: 'My Shopping List',
    subtitle: 'Listas de compra y menus semanales',
    description: 'Gestion de listas de compra y menus semanales.',
    longDescription: 'Aplicacion para organizar compras y planificar menus semanales con una interfaz movil sencilla, rapida y orientada a tareas diarias.',
    image: shopping,
    technologies: ['React', 'TypeScript', 'Ollama'],
    liveUrl: 'https://v0-mobile-shopping-app-seven.vercel.app/',
    githubUrl: '#',
    featured: false,
    role: 'Product + Frontend',
    problem: 'Las listas de compra suelen duplicarse y perder contexto cuando cambian los menus.',
    solution: 'Una app movil con lista unica, planning semanal y acceso inmediato al contenido.',
    impact: 'Menos duplicidad y una gestion mucho mas rapida de la compra.',
    features: ['Lista unica de compra', 'Menu semanal', 'Vista movil clara'],
    metrics: [
      { label: 'Tasks', value: '2' },
      { label: 'Focus', value: 'Mobile' },
    ],
    category: 'Utility',
    scope: 'Mobile-first',
  },
  {
    title: 'Rick and Morty API',
    subtitle: 'Explorador de personajes y episodios',
    description: 'Explorador de personajes de la serie con consumo de API.',
    longDescription: 'Proyecto orientado al consumo de API, filtrado de resultados y exploracion de personajes con una interfaz ligera y centrada en descubrimiento.',
    image: img3225,
    technologies: ['React', 'JS', 'SCSS'],
    liveUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
    githubUrl: 'https://rick-and-morty-nu-eight.vercel.app/',
    featured: false,
    role: 'Frontend',
    problem: 'Explorar datos de una API requiere una UI rapida y comprensible.',
    solution: 'Listado visual, filtros simples y detalle inmediato de personajes.',
    impact: 'Proyecto util para practicar consumo de API y estados de interfaz.',
    features: ['Consumo de API', 'Filtros de exploracion', 'Vista detallada'],
    metrics: [
      { label: 'API', value: 'Live' },
      { label: 'UI', value: 'Clean' },
    ],
    category: 'API explorer',
    scope: 'Frontend',
  },
  {
    title: 'Calculadora Cientifica',
    subtitle: 'Operaciones complejas con interfaz animada',
    description: 'Calculadora animada con operaciones complejas.',
    longDescription: 'Calculadora con soporte para operaciones complejas y una capa visual mas pulida para que la interfaz no se sienta como una calculadora basica.',
    image: calculadora,
    technologies: ['React', 'JS', 'CSS'],
    liveUrl: 'https://67b303fe8fa230145787ba78--gentle-lolly-b754d6.netlify.app/',
    githubUrl: '#',
    featured: false,
    role: 'Frontend',
    problem: 'Las calculadoras tradicionales son funcionales pero poco expresivas en UI.',
    solution: 'Interfaz mas cuidada, animacion sutil y control de operaciones avanzadas.',
    impact: 'Mejor experiencia visual para una herramienta de uso cotidiano.',
    features: ['Operaciones avanzadas', 'Animacion de interfaz', 'Diseño responsive'],
    metrics: [
      { label: 'Ops', value: 'Smart' },
      { label: 'Mode', value: 'Sci' },
    ],
    category: 'Utility',
    scope: 'UI tool',
  },
  {
    title: 'Easy Peasy Cards',
    subtitle: 'Generador de tarjetas de visita digitales',
    description: 'Generador de tarjetas de visita digitales.',
    longDescription: 'Proyecto para generar tarjetas de visita digitales con enfoque en composicion visual, simplicidad de uso y una salida rapida del resultado.',
    image: easy,
    technologies: ['React', 'JS', 'CSS'],
    liveUrl: 'https://aidanarr.github.io/project-promo-X-module-2-team-3/',
    githubUrl: '#',
    featured: false,
    role: 'Frontend',
    problem: 'Crear una tarjeta digital util sin complejidad de configuracion.',
    solution: 'Componente directo, flujo corto y enfoque visual muy claro.',
    impact: 'Una pieza sencilla pero efectiva para mostrar identidad profesional.',
    features: ['Tarjeta digital', 'Salida rapida', 'UI minimal'],
    metrics: [
      { label: 'Steps', value: 'Low' },
      { label: 'Use', value: 'Quick' },
    ],
    category: 'Identity',
    scope: 'Simple tool',
  },
];
function getTechnologyTone(tech: string) {
  const normalized = tech.toLowerCase();

  if (aiTechKeywords.some((keyword) => normalized.includes(keyword))) return 'ai';
  if (webTechKeywords.some((keyword) => normalized.includes(keyword))) return 'web';
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

function compactText(text: string, maxLength = 140) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}...`;
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-4">
      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">{label}</p>
      <p className="text-sm font-semibold leading-snug text-primary">{value}</p>
    </div>
  );
}

function ProjectTechPill({ tech }: { tech: string }) {
  return <span className={`rounded-lg border px-3 py-1.5 text-xs font-bold uppercase tracking-wider ${getTechnologyBadgeClass(tech)}`}>{tech}</span>;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const featuredProjects = projects.filter((project) => project.featured);
  const secondaryProjects = projects.filter((project) => !project.featured);
  const visibleSecondary = showAll ? secondaryProjects : secondaryProjects.slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-28 bg-background px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center text-center md:mb-16">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-borderC bg-[rgb(var(--color-surface))]/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Selected work
            </span>
            <h2 className="mt-6 mb-4 font-display text-3xl font-extrabold tracking-tight text-primary md:text-5xl">Proyectos</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-primary/80 md:text-lg">Una seleccion donde se combinan frontend, UX e IA con foco en utilidad, claridad visual y detalle de producto.</p>
          </motion.div>
        </div>

        <div className="mb-16 space-y-14 md:space-y-20">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className={`grid gap-0 overflow-hidden rounded-[2.4rem] border border-[#161B22] bg-[rgb(var(--color-surface))] shadow-[0_24px_70px_rgba(0,0,0,0.22)] ${index % 2 === 0 ? 'lg:grid-cols-[1.08fr_0.92fr]' : 'lg:grid-cols-[0.92fr_1.08fr]'}`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group relative min-h-[18rem] overflow-hidden border-b border-[#161B22] text-left lg:min-h-[30rem] lg:border-b-0 lg:border-r lg:border-[#161B22]"
              >
                <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/62 via-black/18 to-accent2/10" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-accent/25 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">{project.category}</span>
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">{project.scope}</span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md">
                    Abrir detalle
                    <ArrowRight className="ml-2 h-3.5 w-3.5" />
                  </div>
                </div>
              </button>

              <div className="flex flex-col gap-5 p-5 sm:p-6 lg:p-7">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-10 bg-gradient-to-r from-accent to-accent2" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Proyecto destacado</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-extrabold leading-[1.05] tracking-tighter text-primary md:text-[2.25rem]">{project.title}</h3>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary/80">{project.subtitle}</p>
                  </div>
                  <p className="max-w-2xl text-sm leading-relaxed text-primary/80 md:text-[15px]">{compactText(project.longDescription, 170)}</p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => <DetailCard key={metric.label} label={metric.label} value={metric.value} />)}
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <DetailCard label="Rol" value={project.role} />
                  <DetailCard label="Impacto" value={compactText(project.impact, 86)} />
                </div>

                <div className="rounded-[1.5rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Layers3 className="h-4 w-4 text-accent" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Stack rapido</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech) => <ProjectTechPill key={tech} tech={tech} />)}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4 text-accent2" />
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Problema y solucion</p>
                  </div>
                  <div className="grid gap-3 md:grid-cols-2">
                    <p className="text-sm leading-relaxed text-primary/78"><span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Problema</span>{compactText(project.problem, 150)}</p>
                    <p className="text-sm leading-relaxed text-primary/78"><span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Solucion</span>{compactText(project.solution, 150)}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition-colors hover:opacity-95 neural-button">
                      Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#161B22] bg-black/50 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mb-10 border-t border-borderC pt-16 text-center md:text-left">
          <h3 className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-3xl">Mas proyectos</h3>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visibleSecondary.map((project, index) => (
            <motion.button
              key={project.title}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-[1.75rem] border border-[#161B22] bg-[rgb(var(--color-surface))] text-left shadow-[0_14px_36px_rgba(0,0,0,0.18)] transition-colors duration-300 hover:border-accent/80"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-[16/11] overflow-hidden border-b border-[#161B22]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/18 to-transparent opacity-75" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md">{project.category}</div>
              </div>
              <div className="flex flex-grow flex-col p-6">
                <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">{project.scope}</p>
                <h4 className="mb-2 text-xl font-bold tracking-tight text-primary transition-colors group-hover:text-accent">{project.title}</h4>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary/80">{project.subtitle}</p>
                <p className="mb-5 flex-grow text-sm leading-relaxed text-primary/78">{project.description}</p>
                <div className="mt-auto flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-accent">
                  Ver detalle <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {secondaryProjects.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setShowAll((prev) => !prev)} className="rounded-xl border border-borderC bg-[rgb(var(--color-surface))]/85 px-8 py-3.5 text-sm font-bold text-primary transition-colors hover:border-accent hover:text-accent">
              {showAll ? 'Ver menos' : 'Ver todo'}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-6" onClick={() => setSelectedProject(null)}>
            <motion.div initial={{ scale: 0.97, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.97, opacity: 0, y: 10 }} className="relative w-full max-w-5xl overflow-hidden rounded-[1.75rem] border border-[#161B22] shadow-[0_0_40px_rgba(0,0,0,0.45)] surface-gradient backdrop-blur-2xl" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-primary transition-colors hover:bg-accent hover:text-[rgb(var(--color-ink))]">
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-0 md:grid-cols-[0.95fr_1.05fr]">
                <div className="relative aspect-[4/3] min-h-[16rem] border-b border-[#161B22] sm:min-h-[18rem] md:aspect-auto md:min-h-[30rem] md:border-b-0 md:border-r md:border-[#161B22]">
                  <img src={selectedProject.image} alt={selectedProject.title} className="absolute inset-0 h-full w-full object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/68 via-black/18 to-accent2/10" />
                  <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                    <span className="rounded-full border border-accent/25 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">{selectedProject.category}</span>
                    <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-primary backdrop-blur-md">{selectedProject.scope}</span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-md">
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">Quick summary</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/90">{selectedProject.subtitle}</p>
                    </div>
                  </div>
                </div>

                <div className="flex max-h-[82vh] flex-col gap-4 overflow-y-auto p-5 sm:p-5 lg:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-10 bg-gradient-to-r from-accent to-accent2" />
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-accent">Selected work</span>
                      </div>
                      <h2 className="font-display text-2xl font-extrabold tracking-tight text-primary md:text-[2.35rem]">{selectedProject.title}</h2>
                      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-primary/78 md:text-[14px]">{compactText(selectedProject.longDescription, 180)}</p>
                    </div>
                    <div className="flex shrink-0 flex-wrap gap-2 sm:justify-end">
                      {selectedProject.liveUrl !== '#' && (
                        <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-bold transition-colors hover:opacity-95 neural-button">
                          Demo <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      )}
                      {selectedProject.githubUrl !== '#' && (
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#161B22] bg-black/50 px-4 py-2.5 text-sm font-bold text-primary transition-colors hover:border-accent">
                          <Github className="mr-2 h-4 w-4" /> GitHub
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {selectedProject.metrics.map((metric) => <DetailCard key={metric.label} label={metric.label} value={metric.value} />)}
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <DetailCard label="Rol" value={selectedProject.role} />
                    <DetailCard label="Impacto" value={selectedProject.impact} />
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <div className="mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-accent2" />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Problema</p>
                      </div>
                      <p className="text-sm leading-relaxed text-primary/78">{compactText(selectedProject.problem, 140)}</p>
                    </div>
                    <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                      <div className="mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-accent" />
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Solucion</p>
                      </div>
                      <p className="text-sm leading-relaxed text-primary/78">{compactText(selectedProject.solution, 140)}</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                    <div className="mb-4 flex items-center gap-2">
                      <Layers3 className="h-4 w-4 text-accent" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Principales especificaciones</p>
                    </div>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {selectedProject.features.map((feature) => <div key={feature} className="rounded-xl border border-[#161B22] bg-[rgb(var(--color-surface))]/80 px-4 py-3 text-sm font-medium text-primary/85">{feature}</div>)}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-[#161B22] bg-[rgb(var(--color-surface))]/70 p-3.5">
                    <div className="mb-3 flex items-center gap-2">
                      <BarChart3 className="h-4 w-4 text-accent" />
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary/60">Stack tecnico</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => <ProjectTechPill key={tech} tech={tech} />)}
                    </div>
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
