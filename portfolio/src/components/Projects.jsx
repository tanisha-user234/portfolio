import React from 'react';
import { motion, useMotionValue, useSpring, useScroll } from 'framer-motion';
import { Globe, Smartphone, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


// Magnetic Card Component
const MagneticCard = ({ children, style, className, ...props }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Spring physics for smooth magnetic pull and release
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Calculate distance from center of the card
    const hX = e.clientX - (rect.left + rect.width / 2);
    const hY = e.clientY - (rect.top + rect.height / 2);
    
    // Magnetic pull strength (higher = more movement)
    x.set(hX * 0.15);
    y.set(hY * 0.15);
  };
  
  const handleMouseLeave = () => {
    // Snap back to center
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, x: mouseX, y: mouseY }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

const Projects = ({data}) => {
  if(!data){return null;}
  const projects = [
    {
      title: 'ChatterSphere',
      category: 'Full-stack Chat App',
      description: 'Real-time chat with Socket.io, contact management, and live messaging.',
      tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      type: 'web',
      size: 'large'
    },
    {
      title: 'TaskMate Pro',
      category: 'Mobile Productivity',
      description: 'Task management with user authentication and local storage.',
      tech: ['Flutter', 'Node.js', 'MongoDB'],
      type: 'mobile',
      size: 'small'
    },
    {
      title: 'ClickKart',
      category: 'E-commerce',
      description: 'Full e-commerce platform with cart, admin, and auth features.',
      tech: ['Flutter', 'Express.js', 'MongoDB'],
      type: 'mobile',
      size: 'small'
    },
    {
      title: 'Pocket Doc',
      category: 'Healthcare App',
      description: 'Appointment booking, medicine cart, and user auth.',
      tech: ['Java', 'Android Studio', 'SQLite'],
      type: 'mobile',
      size: 'small'
    },
    {
      title: 'Journi',
      category: 'Travel Guide',
      description: 'Travel app with destination insights and user engagement.',
      tech: ['Java', 'Firebase', 'Android Studio'],
      type: 'mobile',
      size: 'small'
    },
    {
      title: 'Socio Lite',
      category: 'Social Media',
      description: 'Static Instagram front-page clone.',
      tech: ['XML', 'Java', 'Android Studio'],
      type: 'mobile',
      size: 'small'
    }
  ];

  const projectList = data.projects && data.projects.length > 0 ? data.projects : projects;

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}Portfolio Showcase</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle : ''}Featured <span className="gradient-text">{data.sectionTitleHighlight?data.sectionTitleHighlight:''}Projects</span></h1>
        </motion.div>

        {/* Sticky Stacking Cards Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px', /* Space between cards before they stack */
          paddingBottom: '20vh'
        }}>
          {projectList.map((project, i) => {
            const isCMS = !!project.tech[0]?.skill;
            return (
              <MagneticCard
                key={project.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="glow-card"
                style={{
                  position: 'sticky',
                  top: `calc(15vh + ${i * 20}px)`, 
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '400px',
                  maxWidth: '900px',
                  margin: '0 auto',
                  width: '100%',
                  transformOrigin: 'top center',
                  zIndex: i,
                  boxShadow: '0 -10px 40px rgba(0,0,0,0.5)' 
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <div className="glass-effect" style={{ padding: '12px', borderRadius: '16px' }}>
                      {project.type === 'mobile' ? <Smartphone size={28} color="var(--accent-primary)" /> : <Globe size={28} color="var(--accent-primary)" />}
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <motion.a whileHover={{ color: 'var(--accent-primary)', scale: 1.1 }} href="https://github.com"><FaGithub size={24} /></motion.a>
                      <motion.a whileHover={{ color: 'var(--accent-primary)', scale: 1.1 }} href="https://demo.com"><Globe size={24} /></motion.a>
                    </div>
                  </div>
                  
                  <span style={{ fontSize: '13px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>{project.category}</span>
                  <h3 style={{ fontSize: '36px', marginBottom: '16px', marginTop: '8px', fontWeight: '800' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '20px 0', fontSize: '18px', maxWidth: '600px', lineHeight: '1.6' }}>{project.description}</p>
                </div>

                <div style={{ marginTop: '32px' }}>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {project.tech.map((t, idx) => (
                      <span key={idx} style={{ fontSize: '13px', padding: '6px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-primary)', fontWeight: '500' }}>
                        {isCMS ? t.skill : t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative background glow inside card */}
                <div style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)',
                  opacity: '0.15',
                  zIndex: '-1',
                  pointerEvents: 'none'
                }}></div>
              </MagneticCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
