import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from './About';
import Menu from '../components/Menu';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from '../components/Footer';
import AOS from 'aos';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <main className="text-gray-800 font-sans overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <section id="home" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="menu" className="snap-start">
        <Menu />
      </section>
      <section id="gallery" className="snap-start">
        <Gallery />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
