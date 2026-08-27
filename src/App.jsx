import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import avatar from './assets/avatar.jpeg';
import Certificaciones from './components/certificaciones';
import Contacto from './components/contacto';
import Experiencia from './components/experiencia';
import Header from './components/header';
import Hero from './components/hero';
import Presentacion from './components/presentacion';
import Proyectos from './components/Proyectos';

function App() {
  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'presentacion', label: 'Presentación' },
    { id: 'proyectos', label: 'Mis proyectos' },
    { id: 'certificaciones', label: 'Certificaciones' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const [activeSection, setActiveSection] = useState('inicio');
  const heroRef = useRef(null);

  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroScale = useTransform(heroScrollProgress, [0, 0.55], [1, 0.62]);
  const heroTranslateY = useTransform(heroScrollProgress, [0, 1], [0, -180]);
  const heroOpacity = useTransform(heroScrollProgress, [0, 0.72, 1], [1, 0.45, 0]);
  const scrollHintOpacity = useTransform(heroScrollProgress, [0, 0.25, 0.45], [1, 0.6, 0]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.35;
      const currentSection = sections.reduce((current, section) => {
        const sectionTop = section.getBoundingClientRect().top;

        return sectionTop <= readingLine ? section : current;
      }, sections[0]);

      if (currentSection?.id) {
        setActiveSection(currentSection.id);
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 96;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans text-gray-100 selection:bg-blue-500/30">
      <Header
        navItems={navItems}
        activeSection={activeSection}
        onNavigate={scrollToSection}
        showProfile={activeSection !== 'inicio'}
        avatar={avatar}
      />

      {/* Agrega o reordena aquí los bloques principales del portafolio. */}
      <main>
        <Hero
          heroRef={heroRef}
          avatar={avatar}
          heroScale={heroScale}
          heroTranslateY={heroTranslateY}
          heroOpacity={heroOpacity}
          scrollHintOpacity={scrollHintOpacity}
        />
        <Presentacion />
        <Proyectos />
        <Certificaciones />
        <Experiencia />
        <Contacto />
      </main>
    </div>
  );
}

export default App;
