import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern, responsive e-commerce platform with advanced animations and seamless user experience.',
      technologies: ['React', 'GSAP', 'Redux', 'Stripe'],
      category: 'Web Application',
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio showcasing creative animations and smooth transitions using GSAP.',
      technologies: ['React', 'GSAP', 'CSS3', 'Vite'],
      category: 'Personal Project',
    },
    {
      title: 'Dashboard Analytics',
      description: 'Real-time analytics dashboard with beautiful data visualizations and micro-interactions.',
      technologies: ['React', 'D3.js', 'GSAP', 'TypeScript'],
      category: 'Enterprise',
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with real-time updates and engaging user interface.',
      technologies: ['React', 'Firebase', 'GSAP', 'Material-UI'],
      category: 'Web Application',
    },
    {
      title: 'Landing Page Builder',
      description: 'Drag-and-drop landing page builder with pre-built animated components.',
      technologies: ['React', 'GSAP', 'DnD Kit', 'TailwindCSS'],
      category: 'SaaS',
    },
    {
      title: 'Task Management Tool',
      description: 'Collaborative task management with smooth drag-and-drop animations.',
      technologies: ['React', 'GSAP', 'Node.js', 'MongoDB'],
      category: 'Productivity',
    },
  ];

  useEffect(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
    });

    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.from(project, {
          scrollTrigger: {
            trigger: project,
            start: 'top 85%',
          },
          y: 80,
          opacity: 0,
          duration: 1,
          delay: (index % 3) * 0.2,
        });
      }
    });
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
              ref={(el) => (projectsRef.current[index] = el)}
            >
              <div className="project-category">{project.category}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="project-link">View Project →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
