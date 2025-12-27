import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const skillsRef = useRef([]);

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 92 },
    { name: 'TypeScript', level: 88 },
    { name: 'GSAP', level: 85 },
    { name: 'CSS/SASS', level: 90 },
    { name: 'HTML5', level: 95 },
    { name: 'Node.js', level: 80 },
    { name: 'Git', level: 85 },
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

    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    });

    skillsRef.current.forEach((skill, index) => {
      if (skill) {
        gsap.from(skill, {
          scrollTrigger: {
            trigger: skill,
            start: 'top 90%',
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
        });

        const progressBar = skill.querySelector('.skill-progress-fill');
        if (progressBar) {
          gsap.from(progressBar, {
            scrollTrigger: {
              trigger: skill,
              start: 'top 90%',
            },
            width: 0,
            duration: 1.5,
            delay: index * 0.1 + 0.5,
            ease: 'power2.out',
          });
        }
      }
    });
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <h2 ref={titleRef} className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="about-content">
          <div ref={contentRef} className="about-text">
            <p>
              I'm a passionate front-end developer with expertise in creating stunning, 
              interactive web experiences. With a strong foundation in modern JavaScript 
              frameworks and animation libraries, I bring designs to life with smooth, 
              engaging animations that captivate users.
            </p>
            <p>
              My approach combines technical excellence with creative problem-solving, 
              ensuring every project I work on not only looks great but performs 
              exceptionally well. I'm constantly learning and adapting to new technologies 
              to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="skills-container">
            <h3 className="skills-title">Technical Skills</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  ref={(el) => (skillsRef.current[index] = el)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
