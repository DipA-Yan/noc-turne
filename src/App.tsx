import Backdrop from './components/Backdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Marquee } from './components/ui';
import { marqueeA, marqueeB } from './data';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip font-body text-paper">
      <Backdrop />
      <div className="noise" aria-hidden />
      <Navbar />
      <main>
        <Hero />
        <Marquee items={marqueeA} />
        <About />
        <Education />
        <Skills />
        <Marquee items={marqueeB} reverse duration={34} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
