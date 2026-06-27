import React, { useEffect, useRef } from 'react';
import photo1 from '../assets/photo1.jpg';
import { ArrowDown, VolumeX, Music } from 'lucide-react';

const Hero = ({ isUnlocked, toggleMusic, isPlaying, lang, setLang, t }) => {
  const parallaxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isUnlocked || !containerRef.current) return;
    
    const container = containerRef.current;
    const particleCount = 30;
    
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.bottom = `-10px`;
      particle.style.animationDuration = `${duration}s`;
      particle.style.animationDelay = `${delay}s`;

      container.appendChild(particle);

      particle.addEventListener('animationend', () => {
        particle.remove();
        if(document.body.contains(container)) {
          createParticle();
        }
      });
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }
  }, [isUnlocked]);

  return (
    <section className="hero">
      <div ref={parallaxRef} className="parallax-bg" style={{ backgroundImage: `url(${photo1})` }}></div>
      <div ref={containerRef} className="particles-container"></div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h2 className="top-text">{t.hero.invitation}</h2>
        <h1 className="hero-names">{t.hero.name1}<span className="hero-and">{t.hero.and}</span>{t.hero.name2}</h1>
        
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <p>{t.hero.scroll}</p>
          <ArrowDown size={14} className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
