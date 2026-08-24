import { Briefcase, CalendarDays, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './section';

const experiences = [
  {
    role: 'Soporte tecnico - Pasantia',
    company: 'Hospital General Manta - IESS',
    period: 'Octubre 2025 - Enero 2026',
    location: 'Manta, Ecuador · Presencial',
    type: '180 horas',
    summary:
      'Estuve como soporte tecnico en el area de informatica resolviendo problemas en equipos, hardware/software en distintas partes del hospital.',
    achievements: [
      'Atención a solicitudes de soporte técnico de médicos, asistentes y otros usuarios.',
      'Instalación y configuración de software institucional en equipos de las diferentes áreas.',
      'Apoyo en la organización y gestión de equipos tecnológicos del área de informática.'
    ],
    tech: ['Habilidades blandas', 'Comunicacion', 'Resolucion de problemas']
  },
  {
    role: 'Desarrollo de software - Pasantia',
    company: 'Empresa Pública Estudios y Construcciones ULEAM-EP',
    period: 'Mayo 2026 - Junio 2026',
    location: 'Manta, Ecuador · Presencial',
    type: '120 horas',
    summary:
      'Cumpli el papel de desarrollador de software atendiendo el requerimiento expuesto de los usuarios administrativos, desarolle un plugin en wordpress para la insercion y manejo de los certificados de la empresa.',
    achievements: [
      'Investigación sobre la arquitectura de WordPress, el desarrollo de plugins y el uso de sus APIs..',
      'Diseño de la estructura del plugin, organización del código y planificación de las funcionalidades.',
      'Entrega e implementación del plugin completamente funcional, acompañado de una demostración de su funcionamiento al tutor institucional.'
    ],
    tech: ['PHP', 'Wordpress', 'Recoleccion de requisitos']
  },
];

function Experiencia() {
  return (
    <Section id="experiencia" className="bg-slate-950/50">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-4 flex items-center gap-4 text-2xl font-bold md:text-4xl">
          Experiencia profesional
        </h2>
        <p className="mb-10 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
          
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {experiences.map((experience, index) => (
            <motion.article
              key={`${experience.company}-${experience.role}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Briefcase size={20} />
                </div>
                <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                  {experience.type}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white md:text-xl">{experience.role}</h3>
              <p className="mb-3 text-sm font-semibold text-blue-300">{experience.company}</p>

              <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-400 md:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={14} /> {experience.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin size={14} /> {experience.location}
                </span>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-gray-300">{experience.summary}</p>

              <ul className="mb-5 space-y-2 text-sm text-gray-300">
                {experience.achievements.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2">
                {experience.tech.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Experiencia;