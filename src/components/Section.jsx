import { motion } from 'framer-motion';

function Section({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`min-h-screen scroll-mt-28 flex flex-col justify-center px-6 py-16 md:px-16 md:py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default Section;
