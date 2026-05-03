import { useLang, T } from '../context/LangContext';
import { t } from '../data/content';
import './Navbar.css';

export default function Navbar() {
  const { lang, toggle } = useLang();

  return (
    <nav className="navbar">
      <a className="nav-logo" href="#home">
        <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="32" height="32" rx="10" fill="#E8F4FD"/>
          <path d="M5 20 Q9 16 13 20 Q17 24 21 20 Q25 16 29 20" stroke="#1A6FA8" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          <path d="M5 14 Q9 10 13 14 Q17 18 21 14 Q25 10 29 14" stroke="#2E9CCA" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55"/>
        </svg>
        Whites Pool Services
      </a>

      <div className="nav-links">
        <a href="#services"><T data={t.nav.services} /></a>
        <a href="#team"><T data={t.nav.team} /></a>
        <a href="#contact"><T data={t.nav.contact} /></a>
      </div>

      <div className="lang-toggle">
        <button
          className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
          onClick={() => lang !== 'en' && toggle()}
        >EN</button>
        <button
          className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
          onClick={() => lang !== 'es' && toggle()}
        >ES</button>
      </div>
    </nav>
  );
}
