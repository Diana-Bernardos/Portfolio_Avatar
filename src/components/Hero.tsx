import { FileDown, Github, Linkedin, ChevronDown } from 'lucide-react';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

import avatar1 from '../assets/images/avatar-hero.png';
import avatar2 from '../assets/images/avatar.png';
import avatar3 from '../assets/images/avatar-about.png';
import cvPdf from '../assets/docs/CV.pdf';
import { ScrollCanvas } from './ScrollCanvas';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeReaction, setActiveReaction] = useState<'greeting' | 'frontend' | 'ux' | 'ai' | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

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

  const heroSignals = [
    {
      key: 'frontend' as const,
      label: 'Frontend',
      hint: 'React, motion y UI',
      tone: 'from-accent/20 to-accent/5 text-[#7DDCFF]',
    },
    {
      key: 'ux' as const,
      label: 'UX/UI',
      hint: 'Flujos claros',
      tone: 'from-accent2/20 to-accent2/5 text-[#D8B4FF]',
    },
    {
      key: 'ai' as const,
      label: 'IA aplicada',
      hint: 'Producto inteligente',
      tone: 'from-[#7C3AED]/20 to-[#7C3AED]/5 text-[#D8B4FF]',
    },
  ];

  const images = [avatar1, avatar2, avatar3];
  const neuralLines = [
    { d: 'M120 200L360 150L620 280L910 220L1210 360', color: 'rgba(0,209,255,0.16)' },
    { d: 'M240 620L500 500L770 580L1040 460L1300 540', color: 'rgba(112,0,255,0.16)' },
    { d: 'M360 150L500 500', color: 'rgba(230,237,243,0.08)', dashed: true },
    { d: 'M620 280L770 580', color: 'rgba(230,237,243,0.08)', dashed: true },
    { d: 'M910 220L1040 460', color: 'rgba(230,237,243,0.08)', dashed: true },
  ];
  const neuralNodes = [
    { cx: 120, cy: 200, fill: 'rgba(0,209,255,0.9)', delay: 0 },
    { cx: 360, cy: 150, fill: 'rgba(230,237,243,0.9)', delay: 0.5 },
    { cx: 620, cy: 280, fill: 'rgba(112,0,255,0.85)', delay: 1 },
    { cx: 910, cy: 220, fill: 'rgba(0,209,255,0.9)', delay: 1.5 },
    { cx: 1210, cy: 360, fill: 'rgba(112,0,255,0.85)', delay: 2 },
    { cx: 240, cy: 620, fill: 'rgba(112,0,255,0.85)', delay: 0.3 },
    { cx: 500, cy: 500, fill: 'rgba(0,209,255,0.9)', delay: 0.8 },
    { cx: 770, cy: 580, fill: 'rgba(230,237,243,0.9)', delay: 1.3 },
    { cx: 1040, cy: 460, fill: 'rgba(0,209,255,0.9)', delay: 1.8 },
    { cx: 1300, cy: 540, fill: 'rgba(112,0,255,0.85)', delay: 2.3 },
  ];

  const avatarMotion =
    activeReaction === 'frontend'
      ? {
          x: [0, -8, 8, 0],
          y: [0, -3, 0],
          rotate: [0, -2, 2, 0],
          scale: 1.02,
        }
      : activeReaction === 'ux'
        ? {
            x: [0, 5, -5, 0],
            y: [0, -7, 0],
            rotate: [0, 4, -4, 0],
            scale: 1.015,
          }
        : activeReaction === 'ai'
          ? {
              x: [0, 0, 0],
              y: [0, -10, 0],
              rotate: [0, 1, -1, 0],
              scale: [1.01, 1.04, 1.01],
            }
          : activeReaction === 'greeting'
            ? {
                x: [0, -4, 4, 0],
                y: [0, -6, 0],
                rotate: [0, -3, 3, 0],
                scale: 1.01,
              }
            : {
                x: 0,
                y: 0,
                rotate: 0,
                scale: 1,
              };

  const avatarMotionTransition =
    activeReaction === 'ai'
      ? { duration: 1.1, ease: 'easeInOut', repeat: Infinity }
      : activeReaction
        ? { duration: 0.9, ease: 'easeInOut' }
        : { duration: 0.7, ease: 'easeInOut' };

  return (
    <header id="home" ref={containerRef} className="relative h-[200vh] overflow-visible bg-background">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <motion.svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 1440 900"
            fill="none"
            preserveAspectRatio="none"
            animate={{ opacity: [0.62, 0.8, 0.62] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            {neuralLines.map((line) => (
              <motion.path
                key={line.d}
                d={line.d}
                stroke={line.color}
                strokeWidth="1.2"
                strokeDasharray={line.dashed ? '5 12' : undefined}
                initial={{ pathLength: 0.85, opacity: 0.45 }}
                animate={{ pathLength: [0.85, 1, 0.85], opacity: [0.35, 0.8, 0.35] }}
                transition={{ duration: line.dashed ? 8 : 10, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}

            {neuralNodes.map((node, index) => (
              <motion.g
                key={`${node.cx}-${node.cy}`}
                animate={{
                  x: [0, index % 2 === 0 ? 3 : -3, 0],
                  y: [0, index % 3 === 0 ? -4 : 4, 0],
                }}
                transition={{
                  duration: 6 + (index % 3),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: node.delay,
                }}
              >
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="10"
                  fill={node.fill}
                  initial={{ scale: 0.9, opacity: 0.12 }}
                  animate={{ scale: [0.9, 1.6, 0.9], opacity: [0.08, 0.2, 0.08] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
                <motion.circle
                  cx={node.cx}
                  cy={node.cy}
                  r="3.5"
                  fill={node.fill}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.85, 1, 0.85] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: node.delay }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
              </motion.g>
            ))}
          </motion.svg>
        </div>

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2"
        >
          <div className="mt-8 flex flex-col items-center text-center lg:mt-0 lg:items-start lg:text-left">
            <motion.div variants={item} className="mb-8">
              <span
                onMouseEnter={() => setActiveReaction('greeting')}
                onMouseLeave={() => setActiveReaction(null)}
                onFocus={() => setActiveReaction('greeting')}
                onBlur={() => setActiveReaction(null)}
                className="mb-6 inline-block cursor-default rounded-full border border-borderC bg-[rgb(var(--color-surface))]/80 px-5 py-2 text-sm font-semibold lowercase tracking-wide text-primary/85 transition-colors duration-300 hover:border-accent/50 hover:text-primary"
              >
                Hola, soy Diana.
              </span>
              <h1 className="mb-6 bg-[linear-gradient(135deg,rgb(var(--color-gradient-start))_0%,rgb(var(--color-primary))_46%,rgb(var(--color-gradient-end))_100%)] bg-clip-text font-display text-4xl font-extrabold leading-[1.1] tracking-tighter text-transparent sm:text-6xl md:text-7xl">
                Frontend Developer & <br /> UX/UI Designer
              </h1>
              <p className="max-w-xl text-base font-medium leading-relaxed text-primary/80 md:text-lg">
                Diseño y desarrollo productos digitales centrados en el usuario, combinando frontend moderno con soluciones basadas en inteligencia artificial.
              </p>
              <br />
              <p className="text-primary/85">Creo experiencias eficientes, intuitivas y con impacto real en negocio.</p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {heroSignals.map((signal) => (
                  <button
                    key={signal.key}
                    type="button"
                    onMouseEnter={() => setActiveReaction(signal.key)}
                    onMouseLeave={() => setActiveReaction(null)}
                    onFocus={() => setActiveReaction(signal.key)}
                    onBlur={() => setActiveReaction(null)}
                    className={`rounded-full border border-borderC/80 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary/88 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-primary ${signal.tone}`}
                  >
                    <span className="block text-[10px] font-semibold normal-case tracking-normal text-primary/55">{signal.hint}</span>
                    {signal.label}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-8 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full overflow-hidden rounded-xl px-8 py-4 text-base font-bold transition-all duration-300 hover:-translate-y-1 sm:w-auto neural-button"
              >
                <div className="absolute inset-0 h-full w-full translate-x-[-100%] bg-white/10 transition-transform duration-700 ease-in-out group-hover:translate-x-[100%]" />
                Contactar
              </motion.button>

              <a
                href={cvPdf}
                download="CV.pdf"
                className="flex w-full items-center justify-center rounded-xl border-2 border-borderC bg-[rgb(var(--color-surface))]/85 px-8 py-4 text-base font-bold text-primary transition-all duration-300 hover:border-accent hover:shadow-[0_0_0_1px_rgba(0,209,255,0.15)] sm:w-auto"
              >
                <FileDown className="mr-3 h-5 w-5" />
                Descargar CV
              </a>
            </motion.div>

            <motion.div variants={item} className="flex gap-4">
              {[Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href={
                    Icon === Github
                      ? 'https://github.com/Diana-Bernardos'
                      : 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-borderC bg-[rgb(var(--color-surface))]/85 p-3 text-secondary transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_0_24px_rgba(0,209,255,0.18)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={item}
            animate={avatarMotion}
            transition={avatarMotionTransition}
            style={{ scale: avatarScale, y: avatarY }}
            className="relative hidden h-[360px] w-full items-center justify-center md:flex md:h-[540px] lg:h-[520px]"
          >
            <div className="pointer-events-none absolute h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle,rgba(0,209,255,0.16)_0%,rgba(112,0,255,0.16)_48%,transparent_72%)] blur-[90px] lg:h-[280px] lg:w-[280px]" />
            <motion.div
              className="absolute left-8 top-10 rounded-2xl border border-accent/20 bg-[rgb(var(--color-surface))]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,209,255,0.12)]"
              animate={
                activeReaction === 'ai'
                  ? { y: [-2, -10, -2], scale: [1, 1.03, 1] }
                  : activeReaction === 'ux'
                    ? { y: [0, -6, 0], x: [0, 2, 0] }
                    : activeReaction === 'frontend'
                      ? { y: [0, -4, 0], x: [0, -2, 2, 0] }
                      : activeReaction === 'greeting'
                        ? { y: [-2, -8, -2] }
                        : { y: 0 }
              }
              transition={
                activeReaction === 'ai'
                  ? { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
                  : activeReaction
                    ? { duration: 0.9, ease: 'easeInOut' }
                    : { duration: 0.7, ease: 'easeInOut' }
              }
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                {activeReaction === 'frontend' ? 'Interface' : activeReaction === 'ux' ? 'Experience' : activeReaction === 'ai' ? 'Inference' : 'Inference'}
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                {activeReaction === 'frontend'
                  ? 'UI con ritmo y precisión'
                  : activeReaction === 'ux'
                    ? 'UX que guía sin ruido'
                    : activeReaction === 'ai'
                      ? 'AI-powered product thinking'
                      : 'AI-powered product thinking'}
              </p>
            </motion.div>
            <div className="absolute bottom-16 right-6 rounded-2xl border border-accent2/20 bg-[rgb(var(--color-surface))]/80 px-4 py-3 backdrop-blur-md shadow-[0_0_30px_rgba(112,0,255,0.12)]">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent2">Pipeline</p>
              <p className="mt-2 text-sm font-semibold text-primary">
                {activeReaction === 'frontend'
                  ? 'Frontend -&gt; Motion -&gt; Clarity'
                  : activeReaction === 'ux'
                    ? 'UX -&gt; Flow -&gt; Action'
                    : activeReaction === 'ai'
                      ? 'UX -&gt; Frontend -&gt; AI'
                      : 'UX -&gt; Frontend -&gt; AI'}
              </p>
            </div>

            <div className="relative z-10 flex h-full w-full max-w-md items-center justify-center lg:max-w-sm">
              <ScrollCanvas images={images} containerRef={containerRef} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2"
          style={{ opacity: textOpacity }}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-secondary/80">Scroll para explorar</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ChevronDown className="h-5 w-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
