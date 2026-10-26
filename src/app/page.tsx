'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, ChevronDown, Code2, Command, Layers3, Menu, MoveUpRight, Sparkles, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Catalogue from '@/components/Catalogue';

const services = [
  { n: '01', icon: Layers3, title: 'Producto digital', body: 'De la idea al producto que la gente quiere usar: descubrimiento, experiencia, interfaz y desarrollo.', tags: 'UX · UI · MVP' },
  { n: '02', icon: Code2, title: 'Software a medida', body: 'Plataformas, paneles internos e integraciones pensadas alrededor de tu operación real.', tags: 'Web apps · APIs · CMS' },
  { n: '03', icon: Sparkles, title: 'Experiencias web', body: 'Sitios de alto impacto donde diseño, contenido e interacción trabajan en la misma dirección.', tags: 'Web · Motion · 3D' },
  { n: '04', icon: Command, title: 'Evolución continua', body: 'Mejoramos productos existentes con decisiones basadas en objetivos, pruebas y aprendizaje.', tags: 'Auditoría · Iteración · Escala' },
];
const steps = [
  { n: '01', title: 'Entendemos', body: 'Nos metemos en el problema, el negocio y las personas que usarán la solución. Definimos qué vale la pena construir.' },
  { n: '02', title: 'Diseñamos', body: 'Convertimos hallazgos en flujos, prototipos y una dirección visual con personalidad y propósito.' },
  { n: '03', title: 'Construimos', body: 'Desarrollamos en ciclos cortos, conectamos las piezas y cuidamos rendimiento, accesibilidad y detalle.' },
  { n: '04', title: 'Evolucionamos', body: 'Lanzamos, observamos y ajustamos. Un buen producto sigue mejorando después de salir al mundo.' },
];
const questions = [
  { q: '¿Trabajan desde una idea o necesitan un diseño listo?', a: 'Podemos comenzar desde una idea temprana, una necesidad de negocio o un producto existente. El alcance se define después de entender el reto.' },
  { q: '¿Qué tipo de proyectos hacen?', a: 'Diseñamos y desarrollamos productos web, sitios con interacción, paneles de gestión, herramientas internas y experiencias digitales a medida.' },
  { q: '¿Cómo arranca un proyecto?', a: 'Empezamos con una conversación para definir objetivos, usuarios, alcance y prioridades. Después proponemos un plan de trabajo por etapas.' },
  { q: '¿El contenido se podrá editar sin tocar código?', a: 'Sí. Cuando el proyecto lo necesita, planteamos un panel de administración para actualizar textos, imágenes y proyectos de forma autónoma.' },
];

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ delay: 1.25, defaults: { ease: 'power3.out' } });
      intro.from('.hero-kicker', { y: 28, opacity: 0, duration: .65 })
        .from('.hero-line', { yPercent: 110, rotate: 2, duration: 1, stagger: .12 }, '-=.35')
        .from('.hero-stage', { y: 85, rotate: 10, opacity: 0, duration: 1.2 }, '-=1.1')
        .from('.hero-sub', { y: 30, opacity: 0, duration: .7 }, '-=.55');
      gsap.to('.hero-stage', { y: 90, rotate: -5, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.to('.hero-grid', { y: 125, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.from(el, { y: 56, opacity: 0, duration: .95, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('.service-card').forEach((el, i) => {
        gsap.from(el, { y: 70, opacity: 0, duration: .8, delay: i % 2 * .12, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 91%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('.process-step').forEach((el, i) => {
        ScrollTrigger.create({ trigger: el, start: 'top 52%', end: 'bottom 48%', onEnter: () => setActiveStep(i), onEnterBack: () => setActiveStep(i) });
      });
      gsap.to('.statement-outline', { xPercent: -14, ease: 'none', scrollTrigger: { trigger: '.statement', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      gsap.to('.project-window-one', { y: -48, ease: 'none', scrollTrigger: { trigger: '.work', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      gsap.to('.project-window-two', { y: 55, ease: 'none', scrollTrigger: { trigger: '.work', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      gsap.to('.scroll-meter', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: .2 } });
    }, root);
    return () => ctx.revert();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <main ref={root} id="inicio" className="min-h-screen">
    <div className="entry-screen" aria-hidden="true"><div className="entry-title">YANAX<span>STUDIO</span></div><div className="entry-footer"><span>IDEAS EN ACCIÓN / 001</span><span className="entry-progress"><i /></span><span>ENTRANDO ↗</span></div></div>
    <div className="scroll-meter" aria-hidden="true" />
    <header className="site-header">
      <a href="#inicio" className="brand" aria-label="Yanax Studio, inicio" onClick={closeMenu}><Image src="/logo-yanax.png" alt="Yanax Studio" fill sizes="150px" priority /></a>
      <nav className="desktop-nav" aria-label="Navegación principal"><a href="#servicios">Servicios</a><a href="#catalogo">Catálogo</a><a href="#metodo">Proceso</a><a href="#proyectos">Proyectos</a></nav>
      <a className="header-cta" href="#contacto">Hablemos <ArrowUpRight size={17} /></a>
      <button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
    </header>
    {menuOpen && <nav className="mobile-nav" aria-label="Navegación móvil"><a href="#servicios" onClick={closeMenu}>Servicios</a><a href="#catalogo" onClick={closeMenu}>Catálogo</a><a href="#metodo" onClick={closeMenu}>Proceso</a><a href="#proyectos" onClick={closeMenu}>Proyectos</a><a href="#estudio" onClick={closeMenu}>Yanax</a><a href="#contacto" onClick={closeMenu}>Hablemos ↗</a></nav>}

    <section className="hero section-pad" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-top"><span className="eyebrow hero-kicker"><span className="signal-dot" /> ESTUDIO DE SOFTWARE & EXPERIENCIAS DIGITALES</span><span className="hero-index">INDEPENDIENTE · HECHO CON INTENCIÓN</span></div>
      <div className="hero-content">
        <h1 id="hero-title" className="hero-title"><span className="line-mask"><span className="hero-line">Ideas que</span></span><span className="line-mask"><span className="hero-line accent-text">se sienten.</span></span><span className="line-mask"><span className="hero-line">Software que</span></span><span className="line-mask"><span className="hero-line outlined">funciona.</span></span></h1>
        <div className="hero-stage" aria-hidden="true">
          <div className="stage-backdrop" />
          <div className="stage-window">
            <div className="stage-bar"><span className="stage-dots"><i/><i/><i/></span><span>yanax / preview_01</span><span>↗</span></div>
            <div className="stage-body">
              <div className="stage-sidebar"><span>●</span><span>▤<br/>◫<br/>▥</span><span>01</span></div>
              <div className="stage-content"><small>PRODUCTO EN CONSTRUCCIÓN</small><strong>Make it<br/><em>matter.</em></strong><div className="stage-bars"><span/><span/><span/><span/><span/><span/><span/></div><div className="stage-bottom"><span>IDEA → PROTOTIPO → PRODUCTO</span><b>↗</b></div></div>
            </div>
          </div>
          <div className="stage-note">PENSADO PARA PERSONAS.<br/>CONSTRUIDO PARA DURAR.</div>
        </div>
      </div>
      <div className="hero-bottom"><p className="hero-sub">Creamos productos digitales, plataformas y sitios web que convierten una buena idea en una experiencia imposible de ignorar.</p><a className="round-link" href="#servicios" aria-label="Explorar servicios"><ArrowDown size={26}/></a><span className="scroll-cue">DESLIZA PARA DESCUBRIR <span>↓</span></span></div>
    </section>

    <div className="ticker" aria-label="Una idea es solo el inicio. Hagamos que pase."><div className="ticker-track" aria-hidden="true">{Array.from({length: 4}, (_,i) => <span key={i}>UNA IDEA ES SOLO EL INICIO <b>↗</b> HAGAMOS QUE PASE <b>↗</b> </span>)}</div></div>

    <section className="intro section-pad"><div className="section-label" data-reveal><span>01 / LA IDEA</span><span>EL PUNTO DE PARTIDA</span></div><div className="intro-grid"><h2 className="big-copy" data-reveal>La tecnología<br/>debería <em>mover</em><br/>algo real.</h2><div className="intro-aside" data-reveal><span className="asterisk">✳</span><p>No creemos en soluciones que solo se ven bien en una presentación. Unimos visión de producto, diseño y desarrollo para crear herramientas útiles, memorables y listas para crecer.</p><a className="text-link" href="#metodo">CONOCE NUESTRO ENFOQUE <ArrowUpRight size={18}/></a></div></div></section>

    <section className="services section-pad" id="servicios"><div className="section-label light" data-reveal><span>02 / QUÉ HACEMOS</span><span>DE LA IDEA A LA PANTALLA</span></div><div className="section-head" data-reveal><h2>Ideas complejas.<br/><span>Soluciones claras.</span></h2><p>Elegimos las herramientas según el reto. Estas son las formas en que podemos ayudarte a avanzar.</p></div><div className="services-grid">{services.map(s => <article className="service-card" key={s.n}><div className="service-top"><span>{s.n} / 04</span><s.icon size={30} strokeWidth={1.5}/></div><div><h3>{s.title}</h3><p>{s.body}</p></div><span className="service-tags">{s.tags}</span></article>)}</div></section>

    <Catalogue />

    <section className="statement" aria-label="Diseñar, desarrollar, evolucionar"><div className="statement-outline" aria-hidden="true">NO ES SOLO SOFTWARE · NO ES SOLO SOFTWARE ·</div><div className="statement-inner section-pad"><p className="eyebrow">EL EQUILIBRIO IMPORTA</p><h2>Una experiencia<br/>que <span>conecta.</span><br/>Una solución<br/>que <span>resuelve.</span></h2><div className="statement-stamp" aria-hidden="true">Y / X</div></div></section>

    <section className="process section-pad" id="metodo"><div className="section-label" data-reveal><span>04 / CÓMO TRABAJAMOS</span><span>UN PROCESO EN MOVIMIENTO</span></div><div className="process-layout"><div className="process-sticky"><p className="eyebrow">DE LA PREGUNTA AL PRODUCTO</p><h2>Cada gran<br/>solución<br/><em>empieza</em><br/>escuchando.</h2><div className="process-visual" aria-hidden="true"><span className="process-orbit orbit-a"/><span className="process-orbit orbit-b"/><span className="process-number">0{activeStep + 1}</span></div><div className="process-progress">{steps.map((s,i)=><span key={s.n} className={i===activeStep?'active':''}/>)}</div></div><div className="process-steps">{steps.map(s=><article className="process-step" key={s.n}><span className="step-number">{s.n} / 04</span><h3>{s.title}<MoveUpRight size={27}/></h3><p>{s.body}</p></article>)}</div></div></section>

    <section className="work section-pad" id="proyectos"><div className="section-label light" data-reveal><span>05 / EN PANTALLA</span><span>EXPLORACIONES VISUALES</span></div><div className="section-head" data-reveal><h2>Un vistazo a lo<br/><span>que podemos crear.</span></h2><p>Escenarios de muestra para visualizar el tipo de producto y nivel de detalle. Aquí vivirán los casos reales de Yanax.</p></div><div className="project-grid"><article className="project-card project-one" data-reveal><div className="project-meta"><span>CONCEPTO 01 / PLATAFORMA</span><ArrowUpRight/></div><div className="project-window project-window-one"><div className="window-bar"><span/><span/><span/><small>pulse / workspace</small></div><div className="dashboard"><div className="dash-sidebar"><b>pulse.</b><span>◫ &nbsp; Overview</span><span>▤ &nbsp; Projects</span><span>◉ &nbsp; Insights</span></div><div className="dash-main"><small>GOOD MORNING, ALEX</small><h4>Make space for<br/>what matters.</h4><div className="dash-chart"><span/><span/><span/><span/><span/><span/><span/><span/></div><div className="dash-row"><div><small>ACTIVE PROJECTS</small><b>12</b></div><div><small>COMPLETED TASKS</small><b>84%</b></div></div></div></div></div><div className="project-caption"><div><h3>Pulse Workspace</h3><p>Un panel claro para equipos que hacen mucho.</p></div><span>PRODUCTO DIGITAL · CONCEPTO</span></div></article><article className="project-card project-two" data-reveal><div className="project-meta"><span>CONCEPTO 02 / EXPERIENCIA WEB</span><ArrowUpRight/></div><div className="project-window project-window-two"><div className="window-bar dark-bar"><span/><span/><span/><small>forma / digital experience</small></div><div className="showcase-ui"><div className="showcase-nav">FORMA® <span>ABOUT &nbsp; WORK &nbsp; CONTACT</span></div><div className="showcase-object"><i/><i/><i/></div><div className="showcase-type">FORM<br/><span>FOLLOWS</span><br/>FEELING.</div><div className="showcase-bottom">DESIGNED TO BE FELT. <span>EXPLORE ↓</span></div></div></div><div className="project-caption"><div><h3>Forma Digital</h3><p>Una presencia web con carácter y movimiento.</p></div><span>WEB INTERACTIVA · CONCEPTO</span></div></article></div><p className="project-note" data-reveal>¿Ya tienes un caso en mente? Tu próximo proyecto podría ocupar este espacio.</p></section>

    <section className="capabilities section-pad" id="estudio"><div className="section-label" data-reveal><span>06 / EL ESTUDIO</span><span>YANAX STUDIO</span></div><div className="capabilities-layout"><div data-reveal><h2>Creatividad<br/>con <em>estructura.</em></h2><p>Somos un estudio que cruza pensamiento visual y construcción técnica. Nos interesan los retos que piden claridad, curiosidad y una ejecución cuidadosa.</p></div><div className="principles"><div data-reveal><span>01</span><h3>Primero la pregunta correcta</h3><p>La mejor interfaz empieza entendiendo qué necesita cambiar.</p></div><div data-reveal><span>02</span><h3>Diseño con intención</h3><p>Cada interacción tiene un propósito, no solo un efecto.</p></div><div data-reveal><span>03</span><h3>Tecnología que acompaña</h3><p>Elegimos una base flexible para que el producto pueda evolucionar.</p></div></div></div><div className="tech-line" data-reveal><span>LO QUE NOS MUEVE</span><div>BUENAS PREGUNTAS <b>↗</b> MEJORES EXPERIENCIAS <b>↗</b> PRODUCTOS QUE DURAN</div></div></section>

    <section className="faq section-pad" id="preguntas"><div className="section-label" data-reveal><span>07 / PREGUNTAS FRECUENTES</span><span>LO QUE SUELE SURGIR</span></div><div className="faq-layout"><h2 data-reveal>Hablemos<br/>sin vueltas<span>.</span></h2><div className="faq-list">{questions.map((item,i)=><div className="faq-item" key={item.q}><button aria-expanded={openQuestion===i} onClick={()=>setOpenQuestion(openQuestion===i?null:i)}><span>{item.q}</span><ChevronDown className={openQuestion===i?'rotated':''} size={22}/></button>{openQuestion===i&&<p>{item.a}</p>}</div>)}</div></div></section>

    <section className="contact section-pad" id="contacto"><div className="contact-glow" aria-hidden="true"/><div className="section-label light" data-reveal><span>08 / SIGUIENTE PASO</span><span>ESTO PUEDE EMPEZAR HOY</span></div><div className="contact-content" data-reveal><p>¿TIENES UNA IDEA, UN RETO O ALGO QUE TODAVÍA NO TIENE NOMBRE?</p><h2>Hagamos<br/><em>que pase.</em></h2><a className="contact-button" href="https://wa.me/593963249815?text=Hola%20Yanax%2C%20tengo%20una%20idea%20para%20un%20proyecto." target="_blank" rel="noopener noreferrer">Hablemos por WhatsApp <ArrowUpRight size={25}/></a></div><div className="contact-bottom"><span>BUENAS IDEAS + BUENAS PREGUNTAS</span><span>YANAX STUDIO © 2026</span></div></section>
    <footer className="footer section-pad">
      <div className="footer-top"><div data-reveal><p className="footer-kicker">YANAX STUDIO / EN CONTACTO</p><h2>Lo próximo<br/><span>empieza hablando.</span></h2></div><a className="footer-top-link" href="https://wa.me/593963249815?text=Hola%20Yanax%2C%20hablemos%20de%20un%20proyecto." target="_blank" rel="noopener noreferrer" aria-label="Escribir a Yanax por WhatsApp"><ArrowUpRight size={35}/></a></div>
      <div className="footer-columns">
        <div className="footer-column"><span className="footer-column-label">CONTACTO DIRECTO</span><a className="footer-phone" href="https://wa.me/593963249815" target="_blank" rel="noopener noreferrer">+593 96 324 9815 <ArrowUpRight size={19}/></a><span>WhatsApp · Cuéntanos tu idea</span></div>
        <div className="footer-column"><span className="footer-column-label">EN REDES</span><a href="https://www.instagram.com/yanax.dev/" target="_blank" rel="noopener noreferrer">Instagram <span>@yanax.dev <ArrowUpRight size={17}/></span></a><a href="https://www.tiktok.com/@yanax.dev" target="_blank" rel="noopener noreferrer">TikTok <span>@yanax.dev <ArrowUpRight size={17}/></span></a></div>
        <nav className="footer-column" aria-label="Navegación del pie"><span className="footer-column-label">EXPLORA</span><a href="#servicios">Servicios <ArrowUpRight size={17}/></a><a href="#catalogo">Catálogo <ArrowUpRight size={17}/></a><a href="#proyectos">Proyectos <ArrowUpRight size={17}/></a><a href="#estudio">El estudio <ArrowUpRight size={17}/></a></nav>
      </div>
      <div className="footer-wordmark" aria-hidden="true">YANAX<span>STUDIO</span></div>
      <div className="footer-bottom"><span>© 2026 YANAX STUDIO</span><span>IDEAS QUE SE SIENTEN. SOFTWARE QUE FUNCIONA.</span><a href="#inicio">VOLVER ARRIBA ↑</a></div>
    </footer>
  </main>;
}
