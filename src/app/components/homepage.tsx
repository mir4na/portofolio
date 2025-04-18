'use client';

const HomePage = () => {
    const style = {
        container: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 50px',
        position: 'relative' as const,
        overflow: 'hidden',
        },
        content: {
        maxWidth: '1200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '50px',
        zIndex: 1,
        },
        textSection: {
        flex: 1,
        },
        imageSection: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        },
        title: {
        fontSize: '4rem',
        fontWeight: '700',
        marginBottom: '20px',
        background: 'linear-gradient(45deg, var(--primary-green), var(--dark-green))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        },
        subtitle: {
        fontSize: '1.5rem',
        color: 'var(--dark-gray)',
        marginBottom: '30px',
        },
        description: {
        fontSize: '1.1rem',
        color: 'var(--light-gray)',
        lineHeight: 1.6,
        marginBottom: '40px',
        },
        button: {
        backgroundColor: 'var(--primary-green)',
        color: 'var(--white)',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '30px',
        fontSize: '1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        },
        buttonHover: {
        '&:hover': {
            backgroundColor: 'var(--dark-green)',
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 20px rgba(0, 204, 153, 0.2)',
        },
        },
        imageContainer: {
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '5px solid var(--primary-green)',
        boxShadow: '0 20px 40px rgba(0, 204, 153, 0.3)',
        },
        bgCircle: {
        position: 'absolute' as const,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, rgba(0, 204, 153, 0.1), rgba(127, 255, 212, 0.1))',
        zIndex: 0,
        },
    };

    const combinedButtonStyle = {
        ...style.button,
        ...style.buttonHover,
    };

    return (
        <div style={style.container}>
        <div style={{...style.bgCircle, width: '600px', height: '600px', top: '-200px', right: '-100px'}}></div>
        <div style={{...style.bgCircle, width: '400px', height: '400px', bottom: '-150px', left: '10%'}}></div>
        
        <div style={style.content}>
            <div style={style.textSection}>
            <h1 style={style.title}>Hello, I'm Muhammad Afwan Hafizh</h1>
            <h2 style={style.subtitle}>Full Stack Developer & Game Programmer</h2>
            <p style={style.description}>
            Crafting modern web applications and immersive game experiences with cutting-edge technologies. As a Full Stack Developer and Game Programmer, I specialize in building elegant, efficient, and scalable solutions across both web and interactive digital platforms.
            </p>
            <button style={combinedButtonStyle}>Download CV Here</button>
            </div>
            
            <div style={style.imageSection}>
            <div style={style.imageContainer}>
                <div style={{width: '100%', height: '100%', backgroundColor: 'var(--light-gray)'}}></div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default HomePage;