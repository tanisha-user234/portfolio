import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Projects = ({data}) => {
  console.log("Project Section",data);
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

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}Portfolio Showcase</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle : ''}Featured<span className="gradient-text">{data.sectionTitleHighlight?data.sectionTitleHighlight:''}Projects</span></h1>
        </motion.div>

{/* mapping the dynamic projects */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridAutoFlow: 'dense',
          gap: '24px',
          padding: '24px 0'
        }}>
          {data.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{
                gridRow: project.size === 'large' ? 'span 2' : 'span 1',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: project.size === 'large' ? '500px' : '300px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div className="glass-effect" style={{ padding: '10px', borderRadius: '12px' }}>
                    {project.type === 'mobile' ? <Smartphone size={24} color="var(--accent-primary)" /> : <Globe size={24} color="var(--accent-primary)" />}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <motion.a whileHover={{ color: 'var(--accent-primary)' }} href="https://github.com"><FaGithub size={18} /></motion.a>
                    <motion.a whileHover={{ color: 'var(--accent-primary)' }} href="https://demo.com"><Smartphone size={18} /></motion.a>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{project.title}</h3>
                <span style={{ fontSize: '12px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>{project.category}</span>
                <p style={{ color: 'var(--text-secondary)', margin: '16px 0', fontSize: '15px' }}>{project.description}</p>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t.id} style={{ fontSize: '11px', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-muted)' }}>{t.skill}</span>
                  ))}
                </div>
              </div>

              {/* Decorative background circle */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                opacity: '0.1',
                zIndex: '-1'
              }}></div>
            </motion.div>
          ))}
        </div>
        {/* Bento Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gridAutoFlow: 'dense',
          gap: '24px',
          padding: '24px 0'
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{
                gridRow: project.size === 'large' ? 'span 2' : 'span 1',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: project.size === 'large' ? '500px' : '300px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div className="glass-effect" style={{ padding: '10px', borderRadius: '12px' }}>
                    {project.type === 'mobile' ? <Smartphone size={24} color="var(--accent-primary)" /> : <Globe size={24} color="var(--accent-primary)" />}
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <motion.a whileHover={{ color: 'var(--accent-primary)' }} href="https://github.com"><FaGithub size={18} /></motion.a>
                    <motion.a whileHover={{ color: 'var(--accent-primary)' }} href="https://demo.com"><Smartphone size={18} /></motion.a>
                  </div>
                </div>
                
                <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{project.title}</h3>
                <span style={{ fontSize: '12px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1.5px', fontWeight: '700' }}>{project.category}</span>
                <p style={{ color: 'var(--text-secondary)', margin: '16px 0', fontSize: '15px' }}>{project.description}</p>
              </div>

              <div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ fontSize: '11px', padding: '4px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-muted)' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Decorative background circle */}
              <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                opacity: '0.1',
                zIndex: '-1'
              }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
