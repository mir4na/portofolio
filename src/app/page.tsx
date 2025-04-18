'use client';
import { useState, useRef, useEffect } from 'react';
import Sidebar from './components/sidebar';
import HomePage from './components/homepage';
import AboutPage from './components/about';
import SkillsPage from './components/skills';
import ProjectsPage from './components/projects';
import ContactPage from './components/contacts';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({
    home: null,
    about: null,
    skills: null,
    projects: null,
    contact: null,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section in sectionsRef.current) {
        const element = sectionsRef.current[section];
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const style = {
    mainContainer: {
      paddingLeft: '80px',
    },
  };

  return (
    <main style={style.mainContainer}>
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <section ref={el => (sectionsRef.current.home = el)} id="home">
        <HomePage />
      </section>
      
      <section ref={el => (sectionsRef.current.about = el)} id="about">
        <AboutPage />
      </section>
      
      <section ref={el => (sectionsRef.current.skills = el)} id="skills">
        <SkillsPage />
      </section>
      
      <section ref={el => (sectionsRef.current.projects = el)} id="projects">
        <ProjectsPage />
      </section>
      
      <section ref={el => (sectionsRef.current.contact = el)} id="contact">
        <ContactPage />
      </section>
    </main>
  );
}