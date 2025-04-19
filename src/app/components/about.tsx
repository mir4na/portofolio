'use client';

const AboutPage = () => {
  const style = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 50px',
      color: 'var(--black)'
    },
    content: {
      maxWidth: '1200px',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '50px',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '20px',
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
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '50px',
    },
    aboutText: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
      color: 'var(--dark-gray)',
    },
    statsList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '30px',
    },
    statItem: {
      backgroundColor: 'var(--black)',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
      border: '1px solid rgba(0, 204, 153, 0.2)',
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: 'var(--primary-green)',
      marginBottom: '10px',
    },
    statTitle: {
      fontSize: '1rem',
      color: 'var(--dark-gray)',
    },
    timelineSection: {
      marginTop: '50px',
    },
    timeline: {
      position: 'relative' as const,
      paddingLeft: '40px',
    },
    timelineItem: {
      position: 'relative' as const,
      marginBottom: '40px',
    },
    timelineDot: {
      position: 'absolute' as const,
      left: '-40px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'var(--primary-green)',
    },
    timelineLine: {
      position: 'absolute' as const,
      left: '-31px',
      top: '20px',
      bottom: '-40px',
      width: '2px',
      backgroundColor: 'var(--light-green)',
    },
    timelineDate: {
      fontSize: '0.9rem',
      color: 'var(--primary-green)',
      fontWeight: '600',
      marginBottom: '5px',
    },
    timelineTitle: {
      fontSize: '1.2rem',
      fontWeight: '600',
      marginBottom: '10px',
    },
    timelineSubtitle: {
      fontSize: '1rem',
      color: 'var(--dark-gray)',
      fontStyle: 'italic',
      marginBottom: '10px',
    },
    timelineText: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  };

  return (
    <div style={style.container}>
      <div style={style.content}>
        {/* <div>
          <h2 style={style.heading}>
            About Me
            <span style={style.headingAfter}></span>
          </h2>
          
          <div style={style.aboutGrid}>
            <div>
              <p style={style.aboutText}>
                I'm a passionate Full Stack Developer with expertise in modern web technologies. With 5+ years of experience, 
                I've worked on various projects ranging from e-commerce platforms to enterprise applications.
              </p>
              <br />
              <p style={style.aboutText}>
                My approach combines technical excellence with creative problem-solving, enabling me to deliver 
                solutions that are not only functional but also aesthetically pleasing and user-friendly.
              </p>
            </div>
            
            <div style={style.statsList}>
              <div style={style.statItem}>
                <div style={style.statNumber}>5+</div>
                <div style={style.statTitle}>Years Experience</div>
              </div>
              <div style={style.statItem}>
                <div style={style.statNumber}>50+</div>
                <div style={style.statTitle}>Projects Completed</div>
              </div>
              <div style={style.statItem}>
                <div style={style.statNumber}>20+</div>
                <div style={style.statTitle}>Happy Clients</div>
              </div>
              <div style={style.statItem}>
                <div style={style.statNumber}>10+</div>
                <div style={style.statTitle}>Awards Received</div>
              </div>
            </div>
          </div>
        </div> */}
        
        <div style={style.timelineSection}>
          <h2 style={style.heading}>
            Experience
            <span style={style.headingAfter}></span>
          </h2>
          
          <div style={style.timeline}>
            <div style={style.timelineItem}>
              <div style={style.timelineDot}></div>
              <div style={style.timelineLine}></div>
              <div style={style.timelineDate}>2025 - Present</div>
              <h3 style={style.timelineTitle}>Programmer Member of Game Development</h3>
              <h4 style={style.timelineSubtitle}>RISTEK Fasilkom UI</h4>
              <p style={style.timelineText}>
                Creating a game project to support an event, enhancing a game product from RISTEK, and learning many new things about the world of game development.
              </p>
            </div>
            
            <div style={style.timelineItem}>
              <div style={style.timelineDot}></div>
              <div style={style.timelineLine}></div>
              <div style={style.timelineDate}>2019 - 2021</div>
              <h3 style={style.timelineTitle}>Frontend Developer</h3>
              <h4 style={style.timelineSubtitle}>Digital Agency XYZ</h4>
              <p style={style.timelineText}>
                Developed responsive websites and web applications for various clients. 
                Collaborated with designers to implement pixel-perfect interfaces.
              </p>
            </div>
            
            <div style={style.timelineItem}>
              <div style={style.timelineDot}></div>
              <div style={style.timelineLine}></div>
              <div style={style.timelineDate}>2017 - 2019</div>
              <h3 style={style.timelineTitle}>Junior Developer</h3>
              <h4 style={style.timelineSubtitle}>Web Solutions Ltd.</h4>
              <p style={style.timelineText}>
                Started my career building websites and small web applications.
                Gained experience in HTML, CSS, JavaScript, and various frontend frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;