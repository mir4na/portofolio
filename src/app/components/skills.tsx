'use client';

import { useEffect, useRef } from 'react';

const SkillsPage = () => {
  const marqueeRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    marqueeRefs.forEach((ref) => {
      const marqueeElement = ref.current;
      if (!marqueeElement) return;
      
      const itemsContainer = marqueeElement.querySelector('.items');
      if (!itemsContainer) return;
      
      while (itemsContainer.children.length > techIcons[0].length) {
        itemsContainer.removeChild(itemsContainer.lastChild);
      }
      
      const originalContent = itemsContainer.innerHTML;
      itemsContainer.innerHTML = originalContent + originalContent + originalContent;
    });
  }, []);

  const techIcons = [
    [
      { name: "React", path: "/icons/react.png" },
      { name: "JavaScript", path: "/icons/javascript.png" },
      { name: "TypeScript", path: "/icons/typescript.png" },
      { name: "HTML", path: "/icons/html.png" },
      { name: "CSS", path: "/icons/css.jpg" },
      { name: "Next.js", path: "/icons/next.png" },
    ],
    [
      { name: "Python", path: "/icons/python.png" },
      { name: "Java", path: "/icons/java.png" },
      { name: "Django", path: "/icons/django.png" },
      { name: "Springboot", path: "/icons/springboot.png" },
      { name: "Go Lang", path: "/icons/golang.png" },
      { name: "PostgreSQL", path: "/icons/postgresql.png" },
      { name: "MySQL", path: "/icons/mysql.png" },
    ],
    [
      { name: "Git", path: "/icons/git.png" },
      { name: "Godot", path: "/icons/godot.png" },
      { name: "Unity", path: "/icons/unity.png" },
      { name: "Figma", path: "/icons/figma.png" },
    ]
  ];

  return (
    <div className="skills-page">
      <div className="skills-container">
        <h2 className="skills-title">
          My Skills
          <span className="title-underline"></span>
        </h2>
        
        {marqueeRefs.map((ref, index) => (
          <div key={`marquee-${index}`} className="marquee-wrapper" ref={ref}>
            <div 
              className={`marquee-items ${index % 2 === 0 ? 'animate-marquee' : 'animate-marquee-reverse'}`}
              style={{ animationDuration: `${30 + index * 5}s` }}
            >
              {techIcons[index].map((icon, iconIndex) => (
                <div key={`icon-${index}-${iconIndex}`} className="icon-card">
                  <div className="icon-image-container">
                    <img 
                      src={icon.path} 
                      alt={icon.name}
                      className="icon-img"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="icon-label">{icon.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #;
          padding: 2rem;
        }
        
        .skills-container {
          width: 100%;
          max-width: 1200px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .skills-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 3rem;
          position: relative;
          color: #111827;
        }
        
        .title-underline {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100px;
          height: 4px;
          background-color: #22c55e;
          border-radius: 2px;
        }
        
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          background: white;
          border-radius: 12px;
          padding: 1.5rem 0;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .marquee-items {
          display: flex;
          align-items: center;
          width: fit-content;
        }
        
        .icon-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 1.5rem;
          transition: transform 0.3s ease;
        }
        
        .icon-card:hover {
          transform: scale(1.1);
        }
        
        .icon-image-container {
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #f9fafb;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 8px;
        }
        
        .icon-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        
        .icon-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          text-align: center;
          max-width: 100px;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
        
        @media (max-width: 768px) {
          .skills-title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          
          .icon-image-container {
            width: 70px;
            height: 70px;
          }
          
          .icon-card {
            margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;