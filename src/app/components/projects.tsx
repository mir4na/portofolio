'use client';

const ProjectsPage = () => {
  const style = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 50px',
    },
    content: {
      maxWidth: '1200px',
      width: '100%',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '50px',
      position: 'relative' as const,
      display: 'inline-block',
    },
    headingAfter: {
      content: '""',
      position: 'absolute' as const,
      bottom: '-10px',
      left: '0',
      width: '100px',
      height: '5px',
      backgroundColor: 'var(--primary-green)',
      borderRadius: '10px',
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
    },
    projectCard: {
      backgroundColor: 'var(--white)',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    projectCardHover: {
      '&:hover': {
        transform: 'translateY(-10px)',
        boxShadow: '0 15px 40px rgba(0, 204, 153, 0.2)',
      },
      '&:hover .projectImage': {
        transform: 'scale(1.05)',
      },
    },
    projectImageContainer: {
      width: '100%',
      height: '220px',
      overflow: 'hidden',
    },
    projectImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover' as const,
      transition: 'transform 0.5s ease',
    },
    projectInfo: {
      padding: '25px',
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '10px',
      color: 'var(--dark-gray)',
    },
    projectTags: {
      display: 'flex',
      gap: '10px',
      marginBottom: '15px',
      flexWrap: 'wrap' as const,
    },
    projectTag: {
      backgroundColor: 'rgba(0, 204, 153, 0.1)',
      color: 'var(--primary-green)',
      padding: '5px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500',
    },
    projectDescription: {
      fontSize: '1rem',
      lineHeight: 1.6,
      color: 'var(--dark-gray)',
      marginBottom: '20px',
    },
    projectLinks: {
      display: 'flex',
      gap: '15px',
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
      color: 'var(--primary-green)',
      fontWeight: '500',
      fontSize: '0.9rem',
      transition: 'color 0.3s ease',
    },
    projectLinkHover: {
      '&:hover': {
        color: 'var(--dark-green)',
      },
    },
  };

  const combinedProjectCard = {
    ...style.projectCard,
    ...style.projectCardHover,
  };

  const combinedProjectLink = {
    ...style.projectLink,
    ...style.projectLinkHover,
  };

  const projects = [
    {
      title: 'StudiumX',
      image: 'e-commerce.jpg',
      tags: ['HTML', 'CSS', 'Python', 'Django'],
      description: 'A fully functional e-commerce platform with product catalog, cart, and payment integration.',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Task Management App',
      image: 'task-app.jpg',
      tags: ['React', 'Firebase', 'CSS'],
      description: 'A productivity app with task tracking, reminders, and collaborative features.',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Weather Dashboard',
      image: 'weather-app.jpg',
      tags: ['JavaScript', 'API', 'CSS'],
      description: 'Real-time weather application with forecast data and interactive maps.',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Portfolio Website',
      image: 'portfolio.jpg',
      tags: ['Next.js', 'CSS', 'Animation'],
      description: 'A modern portfolio website showcasing projects and skills with smooth animations.',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Blog Platform',
      image: 'blog.jpg',
      tags: ['React', 'Node.js', 'MongoDB'],
      description: 'A full-stack blog platform with user authentication and rich text editing.',
      demoLink: '#',
      githubLink: '#',
    },
    {
      title: 'Fitness Tracker',
      image: 'fitness.jpg',
      tags: ['React Native', 'Firebase', 'Charts'],
      description: 'Mobile app for tracking workouts, nutrition, and progress with visual statistics.',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <div style={style.container}>
      <div style={style.content}>
        <h2 style={style.heading}>
          My Projects
          <span style={style.headingAfter}></span>
        </h2>
        
        <div style={style.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={combinedProjectCard}>
              <div style={style.projectImageContainer}>
                <div 
                  className="projectImage"
                  style={{
                    ...style.projectImage, 
                    backgroundColor: 'var(--light-gray)'
                  }}
                ></div>
              </div>
              <div style={style.projectInfo}>
                <h3 style={style.projectTitle}>{project.title}</h3>
                <div style={style.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={style.projectTag}>{tag}</span>
                  ))}
                </div>
                <p style={style.projectDescription}>{project.description}</p>
                <div style={style.projectLinks}>
                  <a href={project.demoLink} style={combinedProjectLink}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.5 2.25a.75.75 0 01.75-.75h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V4.06l-6.22 6.22a.75.75 0 11-1.06-1.06L19.94 3h-3.69a.75.75 0 01-.75-.75z" />
                      <path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 010 1.5h-8.5a.25.25 0 00-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 00.25-.25v-8.5a.75.75 0 011.5 0v8.5a1.75 1.75 0 01-1.75 1.75H4.25a1.75 1.75 0 01-1.75-1.75V4.25z" />
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubLink} style={combinedProjectLink}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;