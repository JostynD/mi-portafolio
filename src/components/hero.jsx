import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Hero({ heroRef, avatar, heroScale, heroTranslateY, heroOpacity, scrollHintOpacity }) {
  return (
    <section ref={heroRef} id="inicio" className="relative flex min-h-screen scroll-mt-28 flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ scale: heroScale, y: heroTranslateY, opacity: heroOpacity }}
      >
        <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full border-4 border-gray-800 bg-gray-900 shadow-2xl sm:h-28 sm:w-28 md:mb-7 md:h-36 md:w-36">
          <img src={avatar} alt="Mi Foto" className="h-full w-full object-cover" />
        </div>

        <h1 className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          Hola, soy <span className="text-blue-500">Jostyn Muentes</span>
        </h1>
        <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-gray-400 sm:text-lg md:text-xl">
          Soy un Desarrollador full stack.
        </p>
      </motion.div>

      <motion.div
        className="mt-14 flex flex-col items-center gap-1 text-gray-500 sm:mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{ opacity: scrollHintOpacity }}
      >
        <span className="text-xs font-medium uppercase tracking-widest sm:text-sm">Desliza para saber más de mí</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
