import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react';
import Section from './Section';

const projects = [
  {
    title: 'Sistema de Horarios ULEAM',
    description:
      'Plataforma móvil para centralizar la gestión y consulta de horarios académicos en ULEAM, optimizando la organización de docentes, materias y aulas en una app móvil.',
    tech: ['Laravel', 'React native', 'JavaScript', 'PostgreSQL'],
    repos: [
      { label: 'Backend', url: 'https://github.com/JostynD/laravel-backend-v2' },
      { label: 'Frontend', url: 'https://github.com/JostynD/uleam-horarios-app-v2' },
    ],
    demoUrl: null,
  },
  {
    title: 'Plugin WordPress PDF',
    description:
      'Plugin para WordPress orientado a la gestión y visualización de documentos PDF dentro del sitio, facilitando su integración, acceso y experiencia de uso para administradores y visitantes.',
    tech: ['PHP', 'JavaScript', 'CSS', 'WordPress'],
    repos: [
      { label: 'Repositorio', url: 'https://github.com/JostynD/plugin-wordpress-pdf' },
    ],
    demoUrl: null,
  },
  {
    title: 'ARENA',
    description:
      'Aplicación web interactiva enfocada en una experiencia tipo juego con flujo de lobby, ingreso de jugador y UI estilizada personalizada. Diseñada para ejecutarse en navegador con una interfaz visual llamativa y estructura ligera para sesiones rápidas.',
    tech: ['HTML', 'JavaScript', 'Docker'],
    repos: [
      { label: 'Repositorio', url: 'https://github.com/JostynD/arena-frontend' },
    ],
    demoUrl: null,
  },
  {
    title: 'App de Gestión de Citas y Negocios',
    description:
      'Plataforma web completa para reserva y gestión de citas en negocios. Permite a usuarios autenticados buscar negocios, consultar servicios, agendar citas y gestionar su perfil. Administradores pueden crear/editar negocios, definir servicios y horarios, y confirmar citas. Incluye panel administrativo global para gestión de usuarios y roles. Rol principal: desarrollo full-stack, diseño de arquitectura modular frontend-backend, implementación de autenticación con JWT y control de acceso por roles.',
    tech: [
      'Vue 3',
      'Vite',
      'Tailwind CSS',
      'Laravel 11',
      'PHP 8.2',
      'PostgreSQL',
      'Laravel Sanctum (JWT)',
      'Vuex',
      'Vue Router',
      'Axios',
    ],
    repos: [
      { label: 'Frontend', url: 'https://github.com/JostynD/AWII_Frontend' },
      { label: 'Backend', url: 'https://github.com/JostynD/AWII_Backend' },
    ],
    demoUrl: null,
  },
];

function Proyectos() {
  return (
    <Section id="proyectos">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="mb-12 flex items-center gap-4 text-2xl font-bold md:text-4xl">
          <span className="text-xl text-blue-500 md:text-3xl">02.</span> Mis Proyectos
        </h2>
        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900 shadow-lg transition-all duration-300 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              <div className="p-6 md:p-7">
                <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-400">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-6 text-sm font-semibold">
                  {project.repos.map((repo) => (
                    <a
                      key={repo.url + repo.label}
                      href={repo.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <Code size={18} /> {repo.label}
                    </a>
                  ))}
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white"
                    >
                      <ExternalLink size={18} /> Demo
                    </a>
                  )}
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
