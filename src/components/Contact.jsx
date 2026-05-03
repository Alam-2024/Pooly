import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLang, T } from '../context/LangContext';
import { t } from '../data/content';
import './Contact.css';

const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
}

export default function Contact() {
  const { lang } = useLang();
  const leftRef  = useRef(null);
  const rightRef = useRef(null);
  const formRef  = useRef(null);

  const [btnText, setBtnText] = useState(null);
  const [btnStyle, setBtnStyle] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    [leftRef, rightRef].forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = formRef.current;
    const data = Object.fromEntries(new FormData(form));

    const params = {
      from_name:  `${data.fname} ${data.lname}`.trim(),
      from_email: data.email || 'not provided',
      phone:      data.phone || 'not provided',
      service:    data.service || 'Not specified',
      message:    data.message || '',
    };

    if (EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      setBtnText(t.contact.form.sending[lang]);
      emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params)
        .then(() => {
          setBtnText(t.contact.form.sent[lang]);
          setBtnStyle({ background: '#A8F0DE' });
          form.reset();
        })
        .catch(() => {
          setBtnText(t.contact.form.error[lang]);
          setBtnStyle({ background: '#FFAAAA' });
        })
        .finally(() => {
          setTimeout(() => { setBtnText(null); setBtnStyle({}); }, 4000);
        });
    } else {
      setBtnText(t.contact.form.sentDemo[lang]);
      setBtnStyle({ background: '#A8F0DE' });
      setTimeout(() => { setBtnText(null); setBtnStyle({}); }, 3000);
    }
  }

  const c = t.contact;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-layout">
        <div className="fade-in" ref={leftRef}>
          <div className="section-header">
            <div className="section-label" style={{ color: 'var(--blue-light)' }}><T data={c.sectionLabel} /></div>
            <div className="section-title" style={{ color: '#fff' }}><T data={c.title} /></div>
            <p className="section-sub" style={{ color: 'rgba(255,255,255,0.65)' }}><T data={c.sub} /></p>
          </div>
          <div className="contact-items">
            {c.items.map((item, i) => (
              <div className="contact-item" key={i}>
                <div className="contact-item-icon">{item.icon}</div>
                <div>
                  <div className="contact-item-label"><T data={item.label} /></div>
                  <div className="contact-item-text">
                    {typeof item.value === 'string' ? item.value : <T data={item.value} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in" ref={rightRef}>
          <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
            <div className="form-row">
              <div className="form-group">
                <label><T data={c.form.firstName} /></label>
                <input name="fname" type="text" placeholder="Alex" />
              </div>
              <div className="form-group">
                <label><T data={c.form.lastName} /></label>
                <input name="lname" type="text" placeholder="Gomez" />
              </div>
            </div>
            <div className="form-group">
              <label><T data={c.form.phone} /></label>
              <input name="phone" type="tel" placeholder="+1 (555) 000-0000" />
            </div>
            <div className="form-group">
              <label>
                <T data={c.form.email} />{' '}
                <span style={{ opacity: 0.5, fontWeight: 400 }}>(<T data={c.form.emailOpt} />)</span>
              </label>
              <input name="email" type="email" placeholder="you@example.com" />
            </div>
            <div className="form-group">
              <label><T data={c.form.service} /></label>
              <select name="service">
                <option value=""><T data={c.form.selectPlaceholder} /></option>
                {c.form.services.map((s, i) => (
                  <option key={i}><T data={s} /></option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label><T data={c.form.message} /></label>
              <textarea name="message" placeholder={c.form.messagePh[lang]} />
            </div>
            <button type="submit" className="btn-submit" style={btnStyle}>
              {btnText ?? <T data={c.form.submit} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
