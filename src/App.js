import React, { useRef } from "react";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import MyWorks from "./Components/MyWorks";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Brands from "./Components/Brands";
import WorkProcess from "./Components/WorkProcess";

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const myWorksRef = useRef(null);
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const brandsRef = useRef(null);

  // Function to scroll to the section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToMyWorks={() => scrollToSection(myWorksRef)}
        scrollToContact={() => scrollToSection(contactRef)}
        scrollToServices={() => scrollToSection(servicesRef)}
        scrollToBrands={() => scrollToSection(brandsRef)}
      />

      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={brandsRef}>
        <Brands />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div>
        <WorkProcess />
      </div>
      <div ref={myWorksRef}>
        <MyWorks />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>
      {/* <div><Home/></div> */}
      {/* <div><About/></div> */}
      {/* <div><MyWorks/></div> */}
      {/* <div><Contact/></div> */}
    </div>
  );
}

export default App;
