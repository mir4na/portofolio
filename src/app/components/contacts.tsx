'use client';

const ContactPage = () => {
  const style = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 50px',
      backgroundColor: 'var(--light-gray)',
    },
    content: {
      maxWidth: '1200px',
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
    },
    heading: {
      fontSize: '3rem',
      fontWeight: '700',
      marginBottom: '30px',
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
    contactInfo: {
      marginBottom: '40px',
    },
    contactText: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      color: 'var(--dark-gray)',
      marginBottom: '30px',
    },
    contactMethods: {
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '20px',
    },
    contactMethod: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    contactIcon: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-green)',
      boxShadow: '0 10px 20px rgba(0, 204, 153, 0.1)',
    },
    contactDetails: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    contactLabel: {
      fontSize: '0.9rem',
      color: 'var(--dark-gray)',
      marginBottom: '5px',
    },
    contactValue: {
      fontSize: '1.1rem',
      fontWeight: '500',
      color: 'var(--dark-gray)',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      marginTop: '40px',
    },
    socialLink: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--primary-green)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    socialLinkHover: {
      '&:hover': {
        backgroundColor: 'var(--primary-green)',
        color: 'var(--white)',
        transform: 'translateY(-5px)',
      },
    },
    formSection: {
      backgroundColor: 'var(--white)',
      borderRadius: '15px',
      padding: '40px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
    },
    formGroup: {
      marginBottom: '20px',
    },
    formLabel: {
      display: 'block',
      fontSize: '0.9rem',
      fontWeight: '500',
      marginBottom: '8px',
      color: 'var(--dark-gray)',
    },
    formInput: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      fontSize: '1rem',
      transition: 'border-color 0.3s ease',
      outline: 'none',
    },
    formInputFocus: {
      '&:focus': {
        borderColor: 'var(--primary-green)',
        boxShadow: '0 0 0 2px rgba(0, 204, 153, 0.1)',
      },
    },
    formTextarea: {
      width: '100%',
      padding: '12px 15px',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      fontSize: '1rem',
      minHeight: '150px',
      resize: 'vertical' as const,
      transition: 'border-color 0.3s ease',
      outline: 'none',
    },
    formTextareaFocus: {
      '&:focus': {
        borderColor: 'var(--primary-green)',
        boxShadow: '0 0 0 2px rgba(0, 204, 153, 0.1)',
      },
    },
    formButton: {
      backgroundColor: 'var(--primary-green)',
      color: 'var(--white)',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '30px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '10px',
    },
    formButtonHover: {
      '&:hover': {
        backgroundColor: 'var(--dark-green)',
        transform: 'translateY(-3px)',
        boxShadow: '0 10px 20px rgba(0, 204, 153, 0.2)',
      },
    },
  };

  const combinedSocialLink = {
    ...style.socialLink,
    ...style.socialLinkHover,
  };

  const combinedFormInput = {
    ...style.formInput,
    ...style.formInputFocus,
  };

  const combinedFormTextarea = {
    ...style.formTextarea,
    ...style.formTextareaFocus,
  };

  const combinedFormButton = {
    ...style.formButton,
    ...style.formButtonHover,
  };

  return (
    <div style={style.container}>
      <div style={style.content}>
        <div>
          <h2 style={style.heading}>
            Contact Me
            <span style={style.headingAfter}></span>
          </h2>
          
          <div style={style.contactInfo}>
            <p style={style.contactText}>
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me through any of the methods below. I'm looking forward to hearing from you!
            </p>
            
            <div style={style.contactMethods}>
              <div style={style.contactMethod}>
                <div style={style.contactIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                  </svg>
                </div>
                <div style={style.contactDetails}>
                  <span style={style.contactLabel}>Email</span>
                  <span style={style.contactValue}>your.email@example.com</span>
                </div>
              </div>
              
              <div style={style.contactMethod}>
                <div style={style.contactIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
                  </svg>
                </div>
                <div style={style.contactDetails}>
                  <span style={style.contactLabel}>Phone</span>
                  <span style={style.contactValue}>+1 (123) 456-7890</span>
                </div>
              </div>
              
              <div style={style.contactMethod}>
                <div style={style.contactIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
                  </svg>
                </div>
                <div style={style.contactDetails}>
                  <span style={style.contactLabel}>Location</span>
                  <span style={style.contactValue}>City, Country</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={style.socialLinks}>
            <a href="#" style={combinedSocialLink}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a href="#" style={combinedSocialLink}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="#" style={combinedSocialLink}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a href="#" style={combinedSocialLink}>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div style={style.formSection}>
          <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '25px', color: 'var(--primary-green)'}}>
            Send Me a Message
          </h3>
          
          <form>
            <div style={style.formGroup}>
              <label style={style.formLabel} htmlFor="name">Your Name</label>
              <input id="name" type="text" style={combinedFormInput} placeholder="Enter your name" />
            </div>
            
            <div style={style.formGroup}>
              <label style={style.formLabel} htmlFor="email">Your Email</label>
              <input id="email" type="email" style={combinedFormInput} placeholder="Enter your email" />
            </div>
            
            <div style={style.formGroup}>
              <label style={style.formLabel} htmlFor="subject">Subject</label>
              <input id="subject" type="text" style={combinedFormInput} placeholder="Enter subject" />
            </div>
            
            <div style={style.formGroup}>
              <label style={style.formLabel} htmlFor="message">Your Message</label>
              <textarea id="message" style={combinedFormTextarea} placeholder="Write your message here..."></textarea>
            </div>
            
            <button type="submit" style={combinedFormButton}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;