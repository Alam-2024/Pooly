import { useEffect, useRef } from 'react';
import { T } from '../context/LangContext';
import { t } from '../data/content';
import './Services.css';

export default function Services() {
  const headerRef = useRef(null);
  const gridRef   = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    [headerRef, gridRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="section-header fade-in" ref={headerRef}>
        <div className="section-label"><T data={t.services.sectionLabel} /></div>
        <div className="section-title"><T data={t.services.title} /></div>
        <p className="section-sub"><T data={t.services.sub} /></p>
      </div>
      <div className="services-grid fade-in" ref={gridRef}>
        {t.services.items.map((item, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon">{item.icon}</div>
            <h3><T data={item.title} /></h3>
            <p><T data={item.desc} /></p>
          </div>
        ))}
      </div>
    </section>
  );
}
