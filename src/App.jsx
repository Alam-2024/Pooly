import { LangProvider } from './context/LangContext';
import Navbar      from './components/Navbar';
import Hero        from './components/Hero';
import WaveDivider from './components/WaveDivider';
import Services    from './components/Services';
import Process     from './components/Process';
import Team        from './components/Team';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import './index.css';

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <WaveDivider topColor="#F7FBFE" bottomColor="#ffffff" flip={false} />
      <Services />
      <WaveDivider topColor="#ffffff" bottomColor="#F7FBFE" flip={true} />
      <Process />
      <WaveDivider topColor="#F7FBFE" bottomColor="#ffffff" flip={false} />
      <Team />
      <Contact />
      <Footer />
    </LangProvider>
  );
}
