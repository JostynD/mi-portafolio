import Section from './section';

function Presentacion() {
    const skillGroups = [
        { title: 'Lenguajes y Frameworks', skills: ['Laravel','PHP','React','React native','Vue','JavaScript', 'React', 'Python','Node.js', 'HTML/CSS', 'Tailwind'] },
        { title: 'Bases de datos', skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase'] },
        { title: 'Inteligencia artificial', skills: ['OpenAI API', 'Gemini API', 'Anthropic API', 'Machine Learning'] },
        { title: 'Herramientas', skills: ['Git', 'GitHub', 'Figma', 'Docker', 'VS Code'] }
    ];

    return (
        <Section id="presentacion" className="bg-slate-900/50">
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="mb-10 flex items-center gap-4 text-2xl font-bold md:text-4xl">
                    Sobre Mí
                </h2>

                <div className="grid items-start gap-12 text-base leading-relaxed text-gray-300 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:text-lg">
                    <div className="space-y-6">
                        <p>
                            Soy un desarrollador autodidacta apasionado por crear interfaces limpias y experiencias de usuario fluidas.
                            Me especializo en construir aplicaciones web modernas.
                        </p>
                        <p>
                            Actualmente me encuentro cursando el ultimo semestre de la carrera de Tecnologías de la Información en la Universidad Eloy Alfaro de Manabí.
                        </p>
                        <p>
                            Me encanta resolver problemas complejos y transformar diseños en código de alta calidad.
                            Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-5 text-lg font-bold text-white">Mis habilidades</h3>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {skillGroups.map((group) => (
                                <div key={group.title} className="h-full rounded-2xl border border-gray-800 bg-gray-950/50 p-5 shadow-xl md:p-6">
                                    <h4 className="mb-4 text-base font-bold text-white">{group.title}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span key={skill} className="rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs font-medium text-blue-400 shadow-sm sm:text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Presentacion;