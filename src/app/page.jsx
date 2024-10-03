"use client";
import Image from 'next/image';

import Link from 'next/link';
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
    <div className="bg-slate-800">
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
      <div id="section-start" className="h-screen  bg-cover bg-center" style={{ backgroundImage: 'url(https://png.pngtree.com/thumb_back/fh260/background/20230615/pngtree-green-mountains-with-flowers-and-grass-landscape-free-mobile-wallpapers-image_2902262.jpg)' }}>
        <div className="container mx-auto flex justify-between max-w-[110rem] w-[90rem] pt-9">
          <h1>MNTN</h1>
         <div className="flex gap-10" >
         <Link href="/equipment">
            Equipment
          </Link> 
          <Link href="/about">
          About us
          </Link>
          <Link href="/blog">
            Blog
          </Link>
         </div>
         <Link href="/acount">
            Acount
          </Link>
        </div>
        <div>
          <p className="text-center mt-24 text-textColor text-lg font-extrabold"> 
          A HIKING GUIDE
          </p>
          <h2 className="text-center text-8xl font-semibold">Be Prepared For The <br /> Mountains And Beyond!</h2>
        </div>
      </div>

      <div id="section-1" className="h-screen bg-cover  flex bg-slate-800">
        
      <div className="container mx-auto flex  max-w-[110rem] w-[90rem] pt-9">
      <div className="flex-1 flex flex-col justify-center w-[39rem] p-12 text-white">
      
        <p className="text-yellow-400 uppercase tracking-widest mb-4">Get started</p>
        <h1 className="text-5xl font-bold mb-4">What level of hiker are you?</h1>
        <p className="text-lg mb-6 max-w-lg">
          Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?
        </p>
        <a href="#" className="text-yellow-400 uppercase hover:underline">Read more →</a>
      </div>

     <img className="w-[15rem] h-[20rem]" src="/hiking-image.png" alt="88484" />
        
      </div>
      </div>

      <div id="section-2" className="h-screen bg-cover bg-center bg-slate-800" >
       

      <div className="container mx-auto flex mt-32  max-w-[110rem] w-[90rem] pt-9">
     <img className="w-[15rem] ml-7 h-[20rem]" src="/hiking-image.png" alt="88484" />
      <div className="flex-1 ml-44 flex flex-col justify-center w-[39rem] p-12 text-white">
      
        <p className="text-yellow-400 uppercase tracking-widest mb-4">Hiking Essentials</p>
        <h1 className="text-5xl font-bold mb-4">Picking the right Hiking Gear!</h1>
        <p className="text-lg mb-6 max-w-lg">
        The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
        Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
        </p>
        <a href="#" className="text-yellow-400 uppercase hover:underline">Read more →</a>
      </div>

        
      </div>


      </div>

      <div id="section-3" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image4.jpg)' }}>
       
       




      <div className="container mx-auto flex  max-w-[110rem] w-[90rem] pt-9">
      <div className="flex-1 flex flex-col justify-center w-[39rem] p-12 text-white">
      
        <p className="text-yellow-400 uppercase tracking-widest mb-4">where you go is the key</p>
        <h1 className="text-5xl font-bold mb-4">Understand Your Map & Timing</h1>
        <p className="text-lg mb-6 max-w-lg">
        To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
        </p>
        <a href="#" className="text-yellow-400 uppercase hover:underline">Read more →</a>
      </div>

     <img className="w-[15rem] h-[20rem]" src="/hiking-image.png" alt="88484" />
        
      </div>




       
      </div>
      <div id="section-footer" className="h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-image4.jpg)' }}>
        <h2 className="text-white text-6xl p-20"> Footer</h2>
      </div>
    </div>
  );
}
