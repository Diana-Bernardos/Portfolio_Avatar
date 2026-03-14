import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export function Clients() {
  const reviews = [
    {
      name: "Carlos",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
      text: "Un trabajo excepcional en UX. Diana transformó completamente la experiencia de usuario de nuestra plataforma. Su atención al detalle y visión es increíble."
    },
    {
      name: "Laura Gómez",
      avatar: "https://i.pravatar.cc/150?img=5",
      rating: 5,
      text: "La mejor decisión que tomamos fue contar con su experiencia en desarrollo Frontend. Entregable rápido, escalable y con un código impecable."
    },
    {
      name: "Andrés Silva",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
      text: "Comprende perfectamente las necesidades del producto. No solo diseña y programa, sino que propone soluciones inteligentes que mejoran el negocio."
    }
  ];

  return (
    <section className="py-20 md:py-24 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
              My clients
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1E1E1E] p-8 rounded-[2rem] border border-[#333333] shadow-xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-20 h-20 rounded-full mb-4 border-2 border-accent object-cover"
              />
              <h4 className="text-lg font-bold text-white mb-2">{review.name}</h4>
              <div className="flex gap-1 mb-6 text-accent">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-medium">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
