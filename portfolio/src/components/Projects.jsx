import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Play, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({data}) => {
  data = data || {};
  const defaultProjects = [
    {
      id: 1,
      title: 'niit.com',
      category: 'Production Web Platform',
      description: 'Improved page performance by implementing image optimization and auditing third-party library usage. Built and integrated a course detail API end-to-end.',
      tech: ['Next.js', 'Strapi CMS', 'Fastify', 'Keycloak'],
      type: 'web',
      videoUrl: '' // Add video URL here
    },
    {
      id: 2,
      title: 'Learn for Jobs Platform',
      category: 'Full-stack Platform',
      description: 'Led UI design phase, built the Strapi CMS layer, and owned the complete authentication system implementing OTP-based login. Developed full grievance submission workflow.',
      tech: ['Next.js', 'Strapi CMS', 'Node.js', 'PostgreSQL'],
      type: 'web',
      videoUrl: ''
    },
    {
      id: 3,
      title: 'AgentHire',
      category: 'AI Platform',
      description: 'Built a multi-agent AI interview platform with three specialized agents that conduct structured candidate assessments without human intervention.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
      type: 'web',
      videoUrl: ''
    },
    {
      id: 4,
      title: 'ChatterSphere',
      category: 'Mobile App',
      description: 'Full-stack real-time chat application with contact management, live messaging via Socket.IO, and daily conversation prompts.',
      tech: ['Flutter', 'Node.js', 'PostgreSQL', 'Socket.IO'],
      type: 'mobile',
      videoUrl: ''
    }
  ];

  const projectList = data.projects && data.projects.length > 0 ? data.projects : defaultProjects;
  
  const [hoveredProject, setHoveredProject] = useState(projectList[0]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}Portfolio Showcase</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle : ''}Featured <span className="gradient-text">{data.sectionTitleHighlight?data.sectionTitleHighlight:''}Projects</span></h1>
        </motion.div>

        <div style={{ display: 'flex', gap: '60px', position: 'relative' }}>
          
          {/* List Section (Left on Desktop, Full on Mobile) */}
          <div style={{ flex: isMobile ? '1 1 100%' : '1 1 50%', display: 'flex', flexDirection: 'column' }}>
            {projectList.map((project) => {
              const isCMS = !!project.tech[0]?.skill;
              const isOpen = activeAccordion === project.id;

              return (
                <div 
                  key={project.id}
                  className="project-list-item"
                  onMouseEnter={() => !isMobile && setHoveredProject(project)}
                  style={{ padding: '32px 0', cursor: isMobile ? 'pointer' : 'default' }}
                  onClick={() => isMobile && toggleAccordion(project.id)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '800', display: 'block', marginBottom: '8px' }}>
                        {project.category}
                      </span>
                      <h3 className="project-title" style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '800', margin: 0 }}>
                        {project.title}
                      </h3>
                    </div>
                    {isMobile && (
                      <ChevronDown 
                        size={24} 
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: 'var(--text-muted)' }} 
                      />
                    )}
                  </div>

                  {/* Accordion Content for Mobile */}
                  {isMobile && (
                    <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                      <div className="accordion-inner">
                        <div style={{ paddingTop: '24px' }}>
                          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>{project.description}</p>
                          
                          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '24px' }}>
                            {project.tech.map((t, idx) => (
                              <span key={idx} style={{ fontSize: '12px', padding: '6px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', color: 'var(--text-primary)' }}>
                                {isCMS ? t.skill : t}
                              </span>
                            ))}
                          </div>

                          <div className="video-wrapper" style={{ background: 'var(--bg-surface)' }}>
                            {project.videoUrl ? (
                              <video src={project.videoUrl} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)', padding: '40px 0' }}>
                                <Play size={32} style={{ opacity: 0.2, marginBottom: '8px' }} />
                                <p style={{ fontSize: '14px' }}>Demo video placeholder</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tech stack row visible on desktop list */}
                  {!isMobile && (
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px', opacity: hoveredProject.id === project.id ? 1 : 0.5, transition: 'opacity 0.3s ease' }}>
                      {project.tech.map((t, idx) => (
                        <span key={idx} style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                          {isCMS ? t.skill : t} {idx < project.tech.length - 1 && ' • '}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Sticky Media Preview (Desktop Only) */}
          {!isMobile && (
            <div style={{ flex: '1 1 50%', position: 'relative' }}>
              <div style={{ position: 'sticky', top: '120px', height: 'fit-content' }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{ background: 'var(--bg-card)', border: '1px solid var(--border-glass)', borderRadius: '24px', padding: '32px', overflow: 'hidden' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                      <div className="glass-effect" style={{ padding: '12px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        {hoveredProject.type === 'mobile' ? <Smartphone size={24} color="var(--accent-primary)" /> : <Globe size={24} color="var(--accent-primary)" />}
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Preview</span>
                      </div>
                      <div style={{ display: 'flex', gap: '16px' }}>
                        <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><FaGithub size={24} /></a>
                      </div>
                    </div>

                    <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
                      {hoveredProject.description}
                    </p>

                    <div className="video-wrapper" style={{ background: 'var(--bg-deep)', boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
                      {hoveredProject.videoUrl ? (
                        <video src={hoveredProject.videoUrl} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                          <Play size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
                          <p>Demo video placeholder</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Projects;

