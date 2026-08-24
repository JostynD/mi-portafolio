import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import Section from './Section';

function Proyectos() {
  return (
    <Section id="proyectos">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold md:text-4xl">
          <span className="text-xl text-blue-500 md:text-3xl">02.</span> Mis Proyectos
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              <div className="relative h-56 w-full overflow-hidden bg-gray-800 transition-transform duration-500 group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center font-medium text-gray-500">
                  Captura del Proyecto {item}
                </div>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">Proyecto Increíble {item}</h3>
                <p className="mb-6 line-clamp-3 text-gray-400">
                  Breve descripción de este proyecto. Qué tecnologías usaste, qué problema resuelve y cuál fue tu rol principal.
                </p>
                <div className="flex gap-6 text-sm font-semibold">
                  <a href="#" className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white">
                    <Code size={18} /> Código
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300">
                    <ExternalLink size={18} /> Ver Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Proyectos;
