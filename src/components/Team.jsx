import { useEffect, useRef } from 'react';
import { T } from '../context/LangContext';
import { t } from '../data/content';
import './Team.css';

export default function Team() {
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
    <section id="team" className="team-section">
      <div className="section-header fade-in" ref={headerRef}>
        <div className="section-label"><T data={t.team.sectionLabel} /></div>
        <div className="section-title"><T data={t.team.title} /></div>
        <p className="section-sub"><T data={t.team.sub} /></p>
      </div>
      <div className="team-grid fade-in" ref={gridRef}>
        {t.team.members.map((m, i) => (
          <div className="team-card" key={i}>
            <div className="team-avatar">
              <img src={m.photo} alt={m.name} />
            </div>
            <div className="team-info">
              <div className="team-name">{m.name}</div>
              <div className="team-role"><T data={m.role} /></div>
              <p className="team-bio"><T data={m.bio} /></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
