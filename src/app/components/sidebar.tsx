'use client';

type SectionKeys = 'home' | 'about' | 'skills' | 'projects' | 'contact';

interface SidebarProps {
    activeSection: SectionKeys;
    setActiveSection: (section: SectionKeys) => void;
}

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
    const style = {
        sidebar: {
        position: 'fixed' as const,
        left: 0,
        top: 0,
        height: '100vh',
        width: '80px',
        backgroundColor: 'var(--white)',
        boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
        },
        navItem: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        margin: '15px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        position: 'relative' as const,
        },
        activeNavItem: {
        backgroundColor: 'var(--primary-green)',
        color: 'var(--white)',
        },
        navTooltip: {
        position: 'absolute' as const,
        left: '60px',
        backgroundColor: 'var(--primary-green)',
        color: 'var(--white)',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        whiteSpace: 'nowrap' as const,
        opacity: 0,
        pointerEvents: 'none' as const,
        transition: 'opacity 0.3s ease',
        },
        navItemHover: {
        '&:hover': {
            backgroundColor: 'var(--light-gray)',
        },
        '&:hover span': {
            opacity: 1,
        },
        },
    };

    const getNavItemStyle = (section: string) => {
        return {
        ...style.navItem,
        ...(activeSection === section ? style.activeNavItem : {}),
        ...style.navItemHover,
        };
    };

    return (
        <div style={style.sidebar}>
        <div 
            style={getNavItemStyle('home')} 
            onClick={() => setActiveSection('home')}
        >
            <span style={style.navTooltip}>Home</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        </div>

        <div 
            style={getNavItemStyle('about')} 
            onClick={() => setActiveSection('about')}
        >
            <span style={style.navTooltip}>About</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        </div>

        <div 
            style={getNavItemStyle('skills')} 
            onClick={() => setActiveSection('skills')}
        >
            <span style={style.navTooltip}>Skills</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        </div>

        <div 
            style={getNavItemStyle('projects')} 
            onClick={() => setActiveSection('projects')}
        >
            <span style={style.navTooltip}>Projects</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
        </div>

        <div 
            style={getNavItemStyle('contact')} 
            onClick={() => setActiveSection('contact')}
        >
            <span style={style.navTooltip}>Contact</span>
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        </div>
        </div>
    );
};

export default Sidebar;