'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const offers = [
  { number: '01', title: 'Sitios y landing pages', short: 'WEB', tone: 'teal', description: 'Una presencia digital que cuenta quién eres, deja clara tu propuesta y guía a las personas a dar el siguiente paso.', includes: ['Diseño responsive', 'Contenido editable', 'Contacto integrado'] },
  { number: '02', title: 'Tiendas online', short: 'SHOP', tone: 'orange', description: 'Un espacio para mostrar tus productos, facilitar la compra y gestionar el recorrido desde la vitrina hasta el pedido.', includes: ['Catálogo de productos', 'Experiencia de compra', 'Gestión de pedidos'] },
  { number: '03', title: 'Apps y MVP', short: 'APP', tone: 'cream', description: 'La primera versión de una idea, construida para aprender de usuarios reales y decidir con claridad qué sigue.', includes: ['Flujos y prototipo', 'Desarrollo inicial', 'Base para iterar'] },
  { number: '04', title: 'Software interno', short: 'OPS', tone: 'teal', description: 'Herramientas hechas alrededor de cómo trabaja tu equipo: menos pasos manuales y mejor visibilidad de la operación.', includes: ['Paneles de gestión', 'Roles y permisos', 'Integraciones'] },
  { number: '05', title: 'Webs interactivas', short: 'LAB', tone: 'orange', description: 'Experiencias digitales donde narrativa, movimiento e interacción ayudan a que el mensaje se recuerde.', includes: ['Dirección visual', 'Interacciones', 'Optimización móvil'] },
  { number: '06', title: 'Mejoras y evolución', short: 'NEXT', tone: 'cream', description: 'Una mirada nueva a un producto existente para encontrar fricciones, priorizar cambios y construir su siguiente versión.', includes: ['Auditoría', 'Plan de mejoras', 'Desarrollo por etapas'] },
];

export default function Catalogue() {
  const [selected, setSelected] = useState(0);
  const current = offers[selected];
  const whatsapp = `https://wa.me/593963249815?text=${encodeURIComponent(`Hola Yanax, me interesa conversar sobre ${current.title.toLowerCase()}.`)}`;

  return <section className="catalogue section-pad" id="catalogo" aria-labelledby="catalogue-title">
    <div className="section-label" data-reveal><span>03 / CATÁLOGO</span><span>LO QUE PODEMOS CREAR CONTIGO</span></div>
    <div className="catalogue-heading" data-reveal>
      <div><p className="eyebrow">ELIGE UN PUNTO DE PARTIDA</p><h2 id="catalogue-title">¿Qué tienes<br/><em>en mente?</em></h2></div>
      <p>Desde una web que abre conversaciones hasta un sistema que transforma tu operación. Cada proyecto se define según tu reto.</p>
    </div>
    <div className="catalogue-layout">
      <div className="catalogue-list" role="group" aria-label="Tipos de proyecto">
        {offers.map((offer, index) => <button type="button" key={offer.number} className={`catalogue-option ${selected === index ? 'is-selected' : ''}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <span className="catalogue-option-number">{offer.number}</span><span>{offer.title}</span><ArrowUpRight size={22} strokeWidth={1.5}/>
        </button>)}
      </div>
      <div className="catalogue-display" key={current.number} data-tone={current.tone} aria-live="polite">
        <div className="catalogue-display-top"><span>YANAX / {current.number}</span><span>POSIBILIDAD {current.number} — 06</span></div>
        <div className="catalogue-display-word" aria-hidden="true">{current.short}</div>
        <div className="catalogue-display-content"><div><p>UNA FORMA DE EMPEZAR</p><h3>{current.title}</h3><p className="catalogue-description">{current.description}</p></div><div className="catalogue-includes"><span>PUEDE INCLUIR</span><ul>{current.includes.map(item => <li key={item}>{item}</li>)}</ul></div></div>
        <a className="catalogue-action" href={whatsapp} target="_blank" rel="noopener noreferrer">Conversemos sobre esto <ArrowUpRight size={20}/></a>
      </div>
    </div>
    <p className="catalogue-footnote">No hay paquetes cerrados: construimos la solución alrededor de lo que necesitas.</p>
  </section>;
}
