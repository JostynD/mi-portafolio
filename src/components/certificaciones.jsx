import { useEffect, useMemo, useRef, useState } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from './section';

const certifications = [
	{
		platform: 'Microsoft',
		title: 'Fundamentos de GitHub',
		date: 'Agosto 2026',
		skills: 'GitHub · Git · Control de Versiones · Ramas · Pull request · Merge · Projets · Issues · Copilot',
		link: 'https://learn.microsoft.com/api/credentials/share/es-es/jostynmr/31CF58F31B71C12D?sharingId=43A0376933BE8E6B'
	},
	{
		platform: 'DataCamp',
		title: 'GitHub Foundations',
		date: 'Agosto 2026',
		skills: 'GitHub · Git · Integración Continua',
		link: 'https://www.datacamp.com/completed/statement-of-accomplishment/track/c3438e7480e385a67a1a5bb8601ee8f44757bf68?utm_medium=organic_social&utm_campaign=sharewidget&utm_content=soa'
	},
	{
		platform: 'Uleam',
		title: 'I International Conference on Life Sciences and Emerging Technologies (ICLSET)',
		date: 'Julio 2026',
		skills: 'Emerging Technologies · Life Sciences',
		link: 'https://drive.google.com/file/d/1XkbInFpFtlPr-QXKA0XVHPtEu1JbmtQH/view?usp=drive_link'
	},
	{
		platform: 'Cisco Networking Academy',
		title: 'Fundamentos de Python 1',
		date: 'Julio 2026',
		skills: 'Python · Programación · Lógica',
		link: 'https://drive.google.com/file/d/1ZZEhvMjFLXOzOhzw_gwEnN0D80LEZ0vn/view?usp=sharing'
	},
	{
		platform: 'Ecotec / Rosetta Stone',
		title: 'Inglés Nivel B1 (Intermediate)',
		date: 'Marzo 2025',
		skills: 'Inglés · Competencias Lingüísticas',
		link: 'https://drive.google.com/file/d/1Q5n8WTW1U7oQF5UIh1_bmrY-BalIMj97/view?usp=sharing'
	},
	{
		platform: 'Udemy',
		title: 'CSS And JavaScript Complete Course For Beginners',
		date: 'Marzo 2024',
		skills: 'CSS · JavaScript · Desarrollo Web',
		link: 'https://ude.my/UC-1c7e9df4-cee2-4785-ba6b-45a973027328'
	},
	{
		platform: 'Udemy',
		title: 'Moodle Security, de Cero a Experto',
		date: 'Agosto 2023',
		skills: 'Seguridad Moodle · Hardening · SysAdmin',
		link: 'https://ude.my/UC-470e1d1a-0e3f-480c-a70f-851049a4d8db'
	},
	{
		platform: 'LinkedIn Learning',
		title: 'Fundamentos de la programación: Bases de datos',
		date: 'Mayo 2023',
		skills: 'SQL · Bases de Datos · Modelado de Datos',
		link: 'https://drive.google.com/file/d/1M_KOactbpCzGZXgoQQDBMLX-zUR_aIiD/view?usp=sharing'
	},
	{
		platform: 'LinkedIn Learning',
		title: 'Fundamentos de la ciberseguridad',
		date: 'Abril 2023',
		skills: 'Ciberseguridad · Seguridad Informática',
		link: 'https://drive.google.com/file/d/1tpuFBS7r9I62VpMUD73wWeZ_RyGZ_iNP/view?usp=sharing'
	},
	{
		platform: 'Coursera (Google)',
		title: 'Fundamentos de la gestión de proyectos',
		date: 'Febrero 2023',
		skills: 'Gestión de Proyectos · Metodologías Ágiles · Scrum',
		link: 'https://coursera.org/verify/W99G87NVR8A6'
	},
	{
		platform: 'Cisco Networking Academy',
		title: 'NDG Linux Unhatched',
		date: 'Noviembre 2022',
		skills: 'Linux · Terminal · SysAdmin',
		link: 'https://drive.google.com/file/d/1w8eZFP9rg88LnXDvTJlYcQEOLpNazZeJ/view?usp=sharing'
	},
	{
		platform: 'Udemy',
		title: 'Seguridad Informática desde Cero',
		date: 'Febrero 2022',
		skills: 'Ciberseguridad · Redes · Seguridad de la Información',
		link: 'https://ude.my/UC-40d394a7-071a-42be-b926-726caf0bd9f6'
	},
	{
		platform: 'Udemy',
		title: 'Cómo convertirse en un profesional de la informática',
		date: 'Marzo 2021',
		skills: 'Soporte Técnico · TI · Infraestructura',
		link: 'https://ude.my/UC-20071ec6-01c5-4f1e-bc99-6760bf35a406'
	}
];

const SCROLL_FACTOR = 0.9;

function Certificaciones() {
	const trackRef = useRef(null);
	const [selectedPlatform, setSelectedPlatform] = useState('Todas');
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);

	const platforms = useMemo(
		() => ['Todas', ...new Set(certifications.map((certification) => certification.platform))],
		[]
	);

	const filteredCertifications = useMemo(() => {
		if (selectedPlatform === 'Todas') {
			return certifications;
		}

		return certifications.filter(
			(certification) => certification.platform === selectedPlatform
		);
	}, [selectedPlatform]);

	const updateScrollState = () => {
		const track = trackRef.current;
		if (!track) {
			setCanScrollLeft(false);
			setCanScrollRight(false);
			return;
		}

		const maxScrollLeft = Math.max(0, track.scrollWidth - track.clientWidth);
		setCanScrollLeft(track.scrollLeft > 8);
		setCanScrollRight(track.scrollLeft < maxScrollLeft - 8);
	};

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return undefined;

		const handleScroll = () => updateScrollState();
		const handleResize = () => updateScrollState();

		updateScrollState();
		track.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleResize);

		return () => {
			track.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleResize);
		};
	}, [filteredCertifications]);

	const handleFilterChange = (platform) => {
		setSelectedPlatform(platform);

		const track = trackRef.current;
		if (track) {
			track.scrollTo({ left: 0, behavior: 'smooth' });
		}

		requestAnimationFrame(updateScrollState);
	};

	const scrollTrack = (direction) => {
		const track = trackRef.current;
		if (!track) return;

		track.scrollBy({
			left: track.clientWidth * SCROLL_FACTOR * direction,
			behavior: 'smooth'
		});
	};

	return (
		<Section id="certificaciones" className="bg-slate-900/50">
			<div className="mx-auto w-full max-w-5xl">
				<h2 className="mb-4 flex items-center gap-4 text-2xl font-bold md:text-4xl">
					Certificaciones
				</h2>
				<p className="mb-10 max-w-2xl text-base leading-relaxed text-gray-400 md:text-lg">
					Formación continua y conocimientos que complementan mi experiencia en desarrollo web.
				</p>

				<div className="mb-6 flex flex-wrap items-center gap-3">
					{platforms.map((platform) => {
						const isActive = selectedPlatform === platform;

						return (
							<button
								key={platform}
								type="button"
								onClick={() => handleFilterChange(platform)}
								className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
									isActive
										? 'border-emerald-300 bg-emerald-300/15 text-emerald-200'
										: 'border-emerald-700/60 bg-gray-900/70 text-gray-300 hover:border-emerald-400/60 hover:text-emerald-200'
								}`}
							>
								{platform}
							</button>
						);
					})}
				</div>

				<div className="mb-4 flex justify-end gap-2">
					{canScrollLeft && (
						<button
							type="button"
							onClick={() => scrollTrack(-1)}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/60 bg-gray-900/80 text-emerald-200 transition-colors hover:bg-emerald-400/10"
							aria-label="Mover certificaciones a la izquierda"
						>
							<ChevronLeft size={18} />
						</button>
					)}
					{canScrollRight && (
						<button
							type="button"
							onClick={() => scrollTrack(1)}
							className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/60 bg-gray-900/80 text-emerald-200 transition-colors hover:bg-emerald-400/10"
							aria-label="Mover certificaciones a la derecha"
						>
							<ChevronRight size={18} />
						</button>
					)}
				</div>

				<div
					ref={trackRef}
					className="flex gap-5 overflow-x-auto pb-3 pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
				>
					{filteredCertifications.map((certification, index) => (
						<motion.article
							key={certification.link}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.45, delay: index * 0.08 }}
							className="flex min-h-[290px] w-[285px] shrink-0 flex-col rounded-2xl border border-emerald-900/60 bg-gray-900/80 p-5 shadow-lg transition-colors duration-300 hover:border-emerald-400/60 md:w-[320px]"
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
								target="_blank"
								rel="noreferrer"
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