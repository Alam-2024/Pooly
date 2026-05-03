import { useEffect, useRef } from 'react';
import { T } from '../context/LangContext';
import { t } from '../data/content';
import './Process.css';

export default function Process() {
  const headerRef = useRef(null);
  const stepsRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    [headerRef, stepsRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="process-section">
      <div className="section-header fade-in" ref={headerRef} style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 56px' }}>
        <div className="section-label"><T data={t.process.sectionLabel} /></div>
        <div className="section-title"><T data={t.process.title} /></div>
      </div>
      <div className="process-steps fade-in" ref={stepsRef}>
        {t.process.steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="step-num">{step.num}</div>
            <h3><T data={step.title} /></h3>
            <p><T data={step.desc} /></p>
          </div>
        ))}
      </div>
    </section>
  );
}
