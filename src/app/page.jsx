"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('section-start');

  const handleScroll = () => {
    const sections = ['section-start', 'section-1', 'section-2', 'section-3' , "section-footer"];
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetTop + offsetHeight - 50) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(section); 
    }
  };

  return (
    <div>
      {/* Navigation */}
      <nav className="fixed top-1/4 right-10 flex-col flex gap-5">
        <p
          className={`cursor-pointer ${activeSection === 'section-start' ? 'text-red-500 border-r-2 p-4 border-red-700' : 'border-r-2 p-4'}`}
          onClick={() => scrollToSection('section-start')}
        >
          Start
        </p>
        <p
          className={`cursor-pointer ${activeSection === 'section-1' ? 'text-red-500 border-r-2 p-4 border-red-700' : 'border-r-2 p-4'}`}
          onClick={() => scrollToSection('section-1')}
        >
          01
        </p>
        <p
          className={`cursor-pointer ${activeSection === 'section-2' ? 'text-red-500 border-r-2 p-4 border-red-700' : 'border-r-2 p-4'}`}
          onClick={() => scrollToSection('section-2')}
        >
          02
        </p>
        <p
          className={`cursor-pointer ${activeSection === 'section-3' ? 'text-red-500 border-r-2 p-4 border-red-700' : 'border-r-2 p-4'}`}
          onClick={() => scrollToSection('section-3')}
        >
          03
        </p>
        <p
          className={`cursor-pointer ${activeSection === 'section-footer' ? 'text-red-500 border-r-2 p-4 border-red-700' : 'border-r-2 p-4'}`}
          onClick={() => scrollToSection('section-footer')}
        >
          Footer
        </p>
      </nav>

      {/* Sections */}
      <div id="section-start" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image1.jpg)' }}>
        <h1 className="text-white text-6xl p-20">Be Prepared for the Mountains and Beyond!</h1>
      </div>

      <div id="section-1" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image2.jpg)' }}>
        <h2 className="text-white text-6xl p-20">Section 1</h2>
      </div>

      <div id="section-2" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image3.jpg)' }}>
        <h2 className="text-white text-6xl p-20">Section 2</h2>
      </div>

      <div id="section-3" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image4.jpg)' }}>
        <h2 className="text-white text-6xl p-20">Section 3</h2>
      </div>
      <div id="section-footer" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image4.jpg)' }}>
        <h2 className="text-white text-6xl p-20"> Footer</h2>
      </div>
    </div>
  );
}
