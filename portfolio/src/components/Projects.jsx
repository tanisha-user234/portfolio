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
  data = data || {};
  const projects = [
    {
      title: 'niit.com',
      category: 'Production Web Platform',
      description: 'Improved page performance by implementing image optimization and auditing third-party library usage. Built and integrated a course detail API end-to-end.',
      tech: ['Next.js', 'Strapi CMS', 'Fastify', 'Keycloak', 'Tailwind CSS'],
      type: 'web',
      size: 'large'
    },
    {
      title: 'Learn for Jobs Platform',
      category: 'Full-stack Platform',
      description: 'Led UI design phase, built the Strapi CMS layer, and owned the complete authentication system implementing OTP-based login. Developed full grievance submission workflow.',
      tech: ['Next.js', 'Strapi CMS', 'Node.js', 'PostgreSQL'],
      type: 'web',
      size: 'large'
    },
    {
      title: 'AgentHire',
      category: 'AI Platform',
      description: 'Built a multi-agent AI interview platform with three specialized agents that conduct structured candidate assessments without human intervention.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      type: 'web',
      size: 'medium'
    },
    {
      title: 'AI Site Builder',
      category: 'AI Tool',
      description: 'Platform where users generate full website code from plain-text prompts. Shipped version history, live code editing, and auth system.',
      tech: ['React', 'Node.js'],
      type: 'web',
      size: 'medium'
    },
    {
      title: 'ChatterSphere',
      category: 'Mobile App',
      description: 'Full-stack real-time chat application with contact management, live messaging via Socket.IO, and daily conversation prompts.',
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Socket.IO'],
      type: 'mobile',
      size: 'medium'
    },
    {
      title: 'Dynamic Portfolio',
      category: 'Web Portfolio',
      description: 'Content-managed personal portfolio connecting a React frontend to a Strapi backend.',
      tech: ['React', 'Strapi'],
      type: 'web',
      size: 'small'
    },
    {
      title: 'ClickKart',
      category: 'Mobile E-commerce',
      description: 'Full-stack e-commerce app with JWT-based authentication, add-to-cart functionality, order management, and admin panel.',
      tech: ['Flutter', 'Node.js', 'Express.js', 'MongoDB'],
      type: 'mobile',
      size: 'small'
    },
    {
      title: 'Pocket Doc',
      category: 'Healthcare App',
      description: 'Android healthcare app for booking doctor appointments and browsing a medicine catalogue with offline access.',
      tech: ['Java', 'XML', 'Android Studio', 'SQLite'],
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

        {/* Restored Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {projectList.map((project, i) => {
            const isCMS = !!project.tech[0]?.skill;
            return (
              <MagneticCard
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glow-card"
                style={{
                  padding: '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden'
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
                  
                  <span style={{ fontSize: '12px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800' }}>{project.category}</span>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px', marginTop: '8px', fontWeight: '800' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', margin: '16px 0', fontSize: '15px', lineHeight: '1.6' }}>{project.description}</p>
                </div>

                <div style={{ marginTop: '24px' }}>
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
