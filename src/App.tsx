import { useEffect } from 'react';
import { CustomCursor } from './components/ui/CustomCursor';
import { Background } from './components/ui/Background';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Certifications } from './components/sections/Certifications';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/ui/Footer';

function App() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="text-gray-100 min-h-screen selection:bg-primary/30 selection:text-white font-sans overflow-x-hidden">
      <CustomCursor />
      <Background />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Stats />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
