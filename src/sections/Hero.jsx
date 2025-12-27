import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

// Generate particle positions outside component
const particlePositions = [...Array(20)].map(() => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
}));

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
    })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4');

    // Animate particles
    particlesRef.current.forEach((particle, index) => {
      if (particle) {
        gsap.to(particle, {
          y: `random(-100, 100)`,
          x: `random(-100, 100)`,
          duration: `random(3, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: index * 0.1,
        });
      }
    });

    // Gradient animation
    gsap.to('.gradient-circle', {
      scale: 1.2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="gradient-circle gradient-1"></div>
      <div className="gradient-circle gradient-2"></div>
      
      <div className="particles">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            className="particle"
            ref={(el) => (particlesRef.current[i] = el)}
            style={position}
          />
        ))}
      </div>

      <div className="container hero-content">
        <h1 ref={titleRef} className="hero-title">
          Hi, I'm a <span className="gradient-text">Front-End Expert</span>
        </h1>
        <p ref={subtitleRef} className="hero-subtitle">
          Crafting exceptional digital experiences with React, GSAP, and modern web technologies
        </p>
        <div ref={ctaRef} className="hero-cta">
          <button className="btn btn-primary" onClick={scrollToProjects}>
            View My Work
          </button>
          <button className="btn btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
