import { useEffect, useRef } from 'react';
import { T } from '../context/LangContext';
import { t } from '../data/content';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef(null);
  const visualRef  = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    [contentRef, visualRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="ripple" />
        <div className="ripple" />
        <div className="ripple" />
        <div className="blob blob-1" />
        <div className="blob blob-2" />
      </div>

      <div className="hero-content fade-in" ref={contentRef}>
        <div className="hero-badge">
          <span className="badge-dot" />
          <T data={t.hero.badge} />
        </div>

        <h1>
          <T data={t.hero.h1a} /><br />
          <em><T data={t.hero.h1b} /></em>
        </h1>

        <p><T data={t.hero.p} /></p>

        <div className="hero-cta">
          <a href="#contact" className="btn-primary"><T data={t.hero.ctaPrimary} /></a>
          <a href="#services" className="btn-secondary"><T data={t.hero.ctaSecondary} /></a>
        </div>

        <div className="stats-strip">
          {t.hero.stats.map(s => (
            <div className="stat" key={s.num}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label"><T data={s.label} /></span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual fade-in" ref={visualRef}>
        <div className="hero-card-wrap">
          <div className="hero-pool-card">
            <img
              className="hero-pool-img"
              src="https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=920&q=85&auto=format&fit=crop"
              alt="Clean swimming pool"
            />
            <div className="hero-pool-footer">
              <div className="hero-pool-badge">
                <span className="badge-dot" />
                <T data={t.hero.poolReady} />
              </div>
              <span className="hero-pool-status"><T data={t.hero.lastService} /></span>
            </div>
          </div>

          <div className="float-card float-card-1">
            <span className="float-icon">🧪</span>
            <div>
              <div className="float-label"><T data={t.hero.phLabel} /></div>
              <div className="float-value">7.4 ✓</div>
            </div>
          </div>

          <a
            className="float-card float-card-2"
            href="https://search.google.com/local/writereview?placeid=REPLACE_WITH_YOUR_PLACE_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="float-water-bg">
              <svg className="float-water-svg" viewBox="0 0 800 52" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 30 Q50 10 100 30 Q150 50 200 30 Q250 10 300 30 Q350 50 400 30 Q450 10 500 30 Q550 50 600 30 Q650 10 700 30 Q750 50 800 30 L800 52 L0 52Z" fill="rgba(255,255,255,0.35)"/>
              </svg>
              <svg className="float-water-svg2" viewBox="0 0 800 52" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M0 35 Q60 15 120 35 Q180 55 240 35 Q300 15 360 35 Q420 55 480 35 Q540 15 600 35 Q660 55 720 35 Q780 15 800 35 L800 52 L0 52Z" fill="rgba(255,255,255,0.25)"/>
              </svg>
            </div>
            <div className="float-card-2-body">
              <span className="float-icon">⭐</span>
              <div>
                <div className="float-label"><T data={t.hero.ratingLabel} /></div>
                <div className="float-value">5.0 / 5</div>
                <span className="float-link-hint"><T data={t.hero.seeReviews} /></span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
