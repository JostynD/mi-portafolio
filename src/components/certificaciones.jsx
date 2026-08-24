import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './Section';

const certifications = [
	{
		platform: 'Udemy',
		title: 'Nombre de tu certificación',
		date: '2025',
		skills: 'React · JavaScript',
		link: '#'
	},
	{
		platform: 'Coursera',
		title: 'Nombre de tu certificación',
		date: '2025',
		skills: 'Desarrollo web · UX',
		link: '#'
	},
	{
		platform: 'Google',
		title: 'Nombre de tu certificación',
		date: '2025',
		skills: 'Cloud · Tecnología',
		link: '#'
	}
];

function Certificaciones() {
	return (
		<Section id="certificaciones" className="bg-emerald-950/20">
			<div className="mx-auto w-full max-w-5xl">
				<h2 className="mb-4 flex items-center gap-4 text-2xl font-bold md:text-4xl">
					<span className="text-xl text-emerald-400 md:text-3xl">03.</span> Certificaciones
				</h2>
				<p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
					Formación continua y conocimientos que complementan mi experiencia en desarrollo web.
				</p>

				<div className="grid gap-5 md:grid-cols-3">
					{certifications.map((certification, index) => (
						<motion.article
							key={`${certification.platform}-${index}`}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: '-80px' }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
							className="flex h-full flex-col rounded-2xl border border-emerald-900/60 bg-gray-900/80 p-5 shadow-lg transition-colors duration-300 hover:border-emerald-400/60"
						>
							<div className="mb-6 flex items-start justify-between gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
									<Award size={21} />
								</div>
								<span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
									{certification.platform}
								</span>
							</div>

							<h3 className="mb-3 text-lg font-bold leading-snug text-white">
								{certification.title}
							</h3>
							<p className="mb-2 text-sm text-gray-500">{certification.date}</p>
							<p className="mb-6 text-sm text-gray-400">{certification.skills}</p>

							<a
								href={certification.link}
								className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
							>
								Ver certificado <ExternalLink size={16} />
							</a>
						</motion.article>
					))}
				</div>
			</div>
		</Section>
	);
}

export default Certificaciones;
