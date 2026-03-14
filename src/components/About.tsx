import React, { useState } from 'react';
import { User, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function About() {
  const [showFullStory, setShowFullStory] = useState(false);

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-background border-b border-borderC">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="p-3 bg-background rounded-lg border border-borderC">
            <User className="w-5 h-5 text-secondary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-display">Sobre mi</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <h3 className="text-xl font-semibold text-primary mb-4">
              Frontend Developer & UX/UI
            </h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              Diseño y desarrollo interfaces claras, accesibles y escalables. Me enfoco en productos con impacto real, donde la UX y el negocio se alinean.
            </p>
            <ul className="space-y-3 text-secondary mb-8">
              <li>Interfaces limpias con foco en conversion y retencion.</li>
              <li>IA aplicada a producto: flujos y asistentes utiles.</li>
              <li>Trabajo con equipos multidisciplinares y metodologias agiles.</li>
            </ul>

            <button
              onClick={() => setShowFullStory(true)}
              className="inline-flex items-center px-5 py-3 border border-borderC text-primary rounded-lg hover:bg-background transition-colors font-medium"
            >
              Leer historia completa
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="border border-borderC rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1609813744174-a0df83d477fe?w=900&auto=format&fit=crop&q=60"
                alt="Diana Bernardos"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Story Modal */}
      <AnimatePresence>
        {showFullStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowFullStory(false)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              className="surface rounded-xl shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setShowFullStory(false)}
                className="absolute top-4 right-4 p-2 bg-background rounded-full hover:bg-background transition-colors"
              >
                <X className="w-5 h-5 text-secondary" />
              </button>

              <div className="p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-display">Mi historia</h2>

                <div className="prose prose-lg max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1654741735474-827841af7707?w=900&auto=format&fit=crop&q=60"
                    alt="Working"
                    className="w-full h-56 object-cover rounded-lg mb-8"
                  />

                  <h3 className="text-lg font-semibold text-primary mb-3">El cambio</h3>
                  <p className="mb-6 text-secondary">
                    Llego al desarrollo web tras anos de experiencia en otro sector. Esa transicion me dio una mirada practica y orientada a resultados.
                  </p>

                  <h3 className="text-lg font-semibold text-primary mb-3">Actualidad</h3>
                  <p className="mb-6 text-secondary">
                    Soy Desarrolladora Web con formacion en DAW, bootcamp intensivo y aprendizaje continuo en IA y producto.
                  </p>

                  <h3 className="text-lg font-semibold text-primary mb-3">Filosofia</h3>
                  <p className="text-secondary">
                    Creo en interfaces claras, codigo mantenible y experiencias con proposito.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

