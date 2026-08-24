import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Section from './section';

function Contacto() {
  return (
    <Section id="contacto" className="!min-h-[calc(100vh-5rem)] bg-slate-900/50 py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-5xl">¿Trabajamos Juntos?</h2>
        <p className="mb-10 text-base leading-relaxed text-gray-400 md:text-lg">
          Actualmente estoy abierto a nuevas oportunidades. Si tienes un proyecto en mente,
          una pregunta o simplemente quieres conectar, ¡mi bandeja de entrada está abierta!
        </p>
        <a
          href="mailto:tu-email@ejemplo.com"
          className="rounded-full bg-blue-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-blue-600/20 transition-transform hover:scale-105 hover:bg-blue-500 active:scale-95"
        >
          Hablemos
        </a>

        <div className="mt-12 flex gap-8 text-gray-500">
          <a href="https://github.com/JostynD" target="_blank" rel="noreferrer" className="transition-all hover:scale-110 hover:text-white"><FaGithub size={32} /></a>
          <a href="https://www.linkedin.com/in/jostynmuentesroca/" target="_blank" rel="noreferrer" className="transition-all hover:scale-110 hover:text-blue-400"><FaLinkedin size={32} /></a>
          <a href="mailto:jostynroca2@gmail.com" className="transition-all hover:scale-110 hover:text-white "><Mail size={32} /></a>
        </div>
        <p className="mt-10 text-sm text-gray-600">Diseñado y construido con React & Tailwind</p>
      </div>
    </Section>
  );
}

export default Contacto;
