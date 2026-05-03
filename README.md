# Pooly — Whites Pool Services (React)

React rewrite of the original **Whites Pool Services** single-page website, built with **Vite + React 19**. Faithfully reproduces every section, animation, and bilingual (EN/ES) toggle from the original hand-coded HTML design.

---

## What was built

### Stack
| Tool | Role |
|---|---|
| Vite 8 | Dev server & bundler |
| React 19 | UI framework |
| @emailjs/browser | Contact-form email delivery |
| CSS per-component | Scoped styling |
| Google Fonts – DM Sans | Typography |

---

## Project structure

```
Pooly/
├── public/
│   └── uploads/
│       ├── ale.jpeg        ← team photo (copied from parent project)
│       └── suli.jpeg       ← team photo
├── src/
│   ├── context/
│   │   └── LangContext.jsx ← React context: lang state + <T> helper component
│   ├── data/
│   │   └── content.js      ← all bilingual strings (EN + ES) in one place
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── Process.jsx / .css
│   │   ├── Team.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── WaveDivider.jsx
│   ├── App.jsx             ← root component, assembles all sections
│   ├── index.css           ← global tokens, fonts, shared utilities
│   └── main.jsx            ← React entry point
├── index.html
└── README.md
```

---

## How it works

### Bilingual toggle (EN/ES)
- `LangContext.jsx` holds `lang` state (`'en'` | `'es'`) and a `toggle()` function.
- The `<T data={obj} />` helper component reads `lang` from context and renders `obj[lang]`.
- All copy lives in `src/data/content.js` as objects with `en` and `es` keys — no duplicate JSX.

### Animations
- **Fade-in on scroll**: each section uses `IntersectionObserver` to add the `.visible` class when it enters the viewport (CSS transition handles the rest).
- **Ripple rings**: CSS `@keyframes ripple-expand` on absolutely-positioned circles — pure CSS, no JS.
- **Blob drift**: CSS `@keyframes blob-drift` with `blur()` filter — GPU-accelerated.
- **Water wave**: CSS `@keyframes wave-slide` on the floating rating card's SVG path — loops infinitely.
- **Wave dividers**: `<WaveDivider>` renders an inline SVG; accepts `topColor`, `bottomColor`, and `flip` props.

### Contact form + EmailJS
`Contact.jsx` uses `@emailjs/browser`. Three constants at the top of the file need to be filled in:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
```

Until they are set the form works in **demo mode** (success flash, no actual email sent).

**Setup steps:**
1. Create a free account at https://www.emailjs.com
2. Add an Email Service (Gmail, Outlook, etc.) → copy the **Service ID**
3. Create a Template using variables: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}` → copy the **Template ID**
4. Go to Account → API Keys → copy the **Public Key**

---

## Getting started

```bash
cd Pooly
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
```

---

## What's needed to be 100% functional

| Item | Status | Notes |
|---|---|---|
| EmailJS keys configured | ⏳ Pending | Replace the 3 constants in `Contact.jsx` |
| Google Reviews Place ID | ⏳ Pending | Replace `REPLACE_WITH_YOUR_PLACE_ID` in `Hero.jsx` |
| Real phone number | ⏳ Pending | Update `+1 (555) 000-0000` in `content.js` |
| Real email address | ⏳ Pending | Update `hello@whitespoolservices.com` in `content.js` |
| Real service area | ⏳ Pending | Update "Greater Metro Area" copy in `content.js` |
| Favicon | ⏳ Pending | Replace `/public/favicon.svg` with brand icon |
| Domain / hosting | ⏳ Pending | Deploy `dist/` to Netlify, Vercel, or similar |
| SEO meta tags | ⏳ Pending | Add `<meta description>`, Open Graph tags in `index.html` |

---

## Optional improvements (future additions)

| Feature | Description |
|---|---|
| Mobile hamburger menu | Show nav links on mobile via slide-in drawer |
| WhatsApp floating button | Fixed CTA linking to `https://wa.me/...` |
| Before/After gallery | Photo slider showing pool transformations |
| Testimonials carousel | Rotating client quotes with star ratings |
| Pricing section | Cards with basic / premium plan tiers |
| Google Maps embed | Interactive map of the service area |
| Blog / Tips section | Pool maintenance tips to improve SEO |
| Booking calendar | Integrate Calendly or a custom date picker |
| Dark mode | CSS variable swap on `prefers-color-scheme: dark` |
| i18n library | Replace the custom `LangContext` with `react-i18next` for scale |
| TypeScript | Migrate `.jsx` → `.tsx` for type safety |
| Unit tests | Vitest + React Testing Library for component tests |
| Analytics | Google Analytics or Plausible |
| React Router | Add proper routes (`/services`, `/team`) for deep linking |

---

## Relation to parent project

This React app lives at `Pools/Pooly/` alongside the original files:

```
Pools/
├── index.html                ← original Claude Design HTML (source of truth)
├── Whites Pool Services.html ← standalone export
├── uploads/                  ← original team photos
├── PROJECT_TRACKER.html/.md  ← project tracker
├── CLAUDE.md                 ← project instructions
└── Pooly/                    ← this React app
```

Team photos are served from `Pooly/public/uploads/` (copied from `Pools/uploads/`).
