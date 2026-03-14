import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 font-display">Contact me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="space-y-6">
              {[
                { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'dianabernardosm@gmail.com', href: 'mailto:dianabernardosm@gmail.com' },
                { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', value: 'Diana Bernardos', href: 'https://www.linkedin.com/in/diana-bernardos-moraleda-536378223' },
                { icon: <Github className="w-5 h-5" />, label: 'GitHub', value: '@Diana-Bernardos', href: 'https://github.com/Diana-Bernardos' }
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-transparent border-none group cursor-pointer"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-3 bg-[#1E1E1E] rounded-[1rem] shadow-[0_0_0_rgba(255,206,50,0)] group-hover:shadow-[0_0_15px_rgba(255,206,50,0.3)] mr-4 text-white border border-[#333333] group-hover:border-accent transition-all duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-bold tracking-tight mb-1 group-hover:text-accent transition-colors duration-300">{item.value}</p>
                    <p className="text-xs text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">{item.label}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form matches the exact visual style of the design mockup */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-transparent"
          >
            <div className="flex flex-col space-y-4 w-full text-base relative">
              {/* Subtle ambient glow behind form */}
              <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

              <motion.input 
                type="text" 
                placeholder="Your name" 
                className="w-full bg-[#1E1E1E] border border-[#333333] text-white rounded-xl px-5 py-4 focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,206,50,0.2)] hover:border-accent/50 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-[#1E1E1E] border border-[#333333] text-white rounded-xl px-5 py-4 focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,206,50,0.2)] hover:border-accent/50 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />
              <motion.textarea 
                placeholder="Typing your message here..." 
                className="w-full bg-[#1E1E1E] border border-[#333333] text-white rounded-xl px-5 py-4 h-40 resize-none focus:outline-none focus:border-accent focus:shadow-[0_0_15px_rgba(255,206,50,0.2)] hover:border-accent/50 transition-all z-10 relative cursor-text"
                whileFocus={{ scale: 1.01 }}
                disabled
              />

              <div className="flex justify-end pt-2 z-10 relative">
                <motion.a
                  href="mailto:dianabernardosm@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-[#121212] rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(255,206,50,0.3)] hover:shadow-[0_0_25px_rgba(255,206,50,0.6)] cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send message
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


