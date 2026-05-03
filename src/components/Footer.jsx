import { T } from '../context/LangContext';
import { t } from '../data/content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">Whites Pool Services</div>
      <div>{t.footer.copy}</div>
      <div className="footer-links">
        <a href="#services"><T data={t.nav.services} /></a>
        <a href="#team"><T data={t.nav.team} /></a>
        <a href="#contact"><T data={t.nav.contact} /></a>
      </div>
    </footer>
  );
}
