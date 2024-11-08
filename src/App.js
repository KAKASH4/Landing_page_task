// src/App.js
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Sponser from './components/Sponsers/Sponser';
import Contact from './components/Contact/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleSectionInView = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />

      <SectionWrapper id="hero" name="hero" setActiveSection={handleSectionInView}>
        <Hero />
      </SectionWrapper>
      <SectionWrapper id="about" name="about" setActiveSection={handleSectionInView}>
        <About />
      </SectionWrapper>
      <SectionWrapper id="sponsors" name="sponsors" setActiveSection={handleSectionInView}>
        <Sponser />
      </SectionWrapper>
      <SectionWrapper id="contact" name="contact" setActiveSection={handleSectionInView}>
        <Contact />
      </SectionWrapper>
    </div>
  );
}

function SectionWrapper({ id, name, setActiveSection, children }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      setActiveSection(name);
    }
  }, [inView, name, setActiveSection]);

  return (
    <section id={id} ref={ref}>
      {children}
    </section>
  );
}

export default App;
