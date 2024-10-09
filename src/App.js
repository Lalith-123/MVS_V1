import React, { useRef } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import MyWorks from './Components/MyWorks';
import Contact from './Components/Contact';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const myWorksRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to the section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Header 
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToMyWorks={() => scrollToSection(myWorksRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      
      <div ref={homeRef}><Home /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={myWorksRef}><MyWorks /></div>
      <div ref={contactRef}><Contact /></div>
    </div>
  );
}

export default App;
