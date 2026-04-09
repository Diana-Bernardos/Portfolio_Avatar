import React, { useState } from 'react';
import { User, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function About() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="border-b border-borderC bg-background px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-4"
        >
          <div className="rounded-lg border border-borderC bg-background p-3">
            <User className="h-5 w-5 text-secondary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-primary md:text-4xl">Sobre mi</h2>
        </motion.div>

        <div className="grid items-start gap-10 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h3 className="mb-4 text-xl font-semibold text-primary">Frontend Developer & UX/UI</h3>
            <p className="mb-6 text-lg leading-relaxed text-secondary">
              Diseño y desarrollo interfaces claras, accesibles y escalables. Me enfoco en productos con impacto real, donde la UX y el negocio se alinean.
            </p>
            <ul className="mb-8 space-y-3 text-secondary">
              <li>Interfaces limpias con foco en conversion y retencion.</li>
              <li>IA aplicada a producto: flujos y asistentes utiles.</li>
              <li>Trabajo con equipos multidisciplinares y metodologias agiles.</li>
            </ul>

            <button
              onClick={() => setShowFullStory(true)}
              className="inline-flex items-center rounded-lg border border-borderC px-5 py-3 font-medium text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Leer historia completa
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="overflow-hidden rounded-[1.5rem] border border-accent/15 bg-[rgb(var(--color-surface))] shadow-[0_22px_60px_rgba(0,0,0,0.24),0_0_0_1px_rgba(0,209,255,0.06)]">
              <img
                src="https://images.pexels.com/photos/22046267/pexels-photo-22046267.jpeg?cs=srgb&dl=pexels-silverkblack-22046267.jpg&fm=jpg"
                alt="Woman working on laptop in a modern office"
                className="aspect-[4/5] w-full object-cover object-[center_18%] scale-[1.03]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showFullStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
            onClick={() => setShowFullStory(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              className="surface relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFullStory(false)}
                className="absolute right-4 top-4 rounded-full bg-background p-2 transition-colors hover:bg-[rgb(var(--color-surface))]"
              >
                <X className="h-5 w-5 text-secondary" />
              </button>

              <div className="p-8 md:p-10">
                <h2 className="mb-6 font-display text-2xl font-bold text-primary md:text-3xl">Mi historia</h2>

                <div className="prose prose-lg max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1654741735474-827841af7707?w=900&auto=format&fit=crop&q=60"
                    alt="Working"
                    className="mb-8 h-56 w-full rounded-lg object-cover"
                  />

                  <h3 className="mb-3 text-lg font-semibold text-primary">El cambio</h3>
                  <p className="mb-6 text-secondary">
                    Llego al desarrollo web tras anos de experiencia en otro sector. Esa transicion me dio una mirada practica y orientada a buenos resultados.
                  </p>

                  <h3 className="mb-3 text-lg font-semibold text-primary">Actualidad</h3>
                  <p className="mb-6 text-secondary">
                    Soy Desarrolladora Web con formacion en DAW, Bootcamp de Desarrollo Web intensivo y aprendizaje continuo en IA y producto.
                  </p>

                  <h3 className="mb-3 text-lg font-semibold text-primary">Filosofia</h3>
                  <p className="text-secondary">Creo en interfaces claras, codigo mantenible y experiencias con proposito.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
