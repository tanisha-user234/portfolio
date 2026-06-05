import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Rocket, Target, Play } from 'lucide-react';

const Experience = ({data}) => {
  data = data || {};
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'NIIT Limited',
      period: 'Jan 2026 - Present',
      location: 'Gurugram, Haryana',
      description: 'Shipped production UI components and full page sections for niit.com using Next.js. Designed and maintained Strapi CMS content types. Built and integrated REST APIs using Fastify.',
      tech: ['Next.js', 'Fastify', 'Strapi CMS', 'PostgreSQL'],
      color: '#3b82f6',
      videoUrl: '' // Placeholder for future video
    },
    {
      id: 2,
      title: 'Flutter Intern',
      company: 'Aquadsoft Software Solutions',
      period: 'July 2025 - Sept 2025',
      location: 'Remote',
      description: 'Diagnosed and resolved UI and logic bugs that improved code stability and reduced reported defect count. Authored technical documentation for core Flutter concepts.',
      tech: ['Flutter', 'Dart', 'BLoC', 'Provider'],
      color: '#00d2ff',
      videoUrl: ''
    },
    {
      id: 3,
      title: 'Machine Learning Intern',
      company: 'NIT Delhi',
      period: 'June 2024 - July 2024',
      location: 'New Delhi',
      description: 'Built a supervised learning framework for multi-class cardiac disease detection on the PTB Diagnostic ECG Database. Delivered the highest classification accuracy using the LSTM-CNN hybrid architecture.',
      tech: ['Python', 'SVM', 'KNN', 'LSTM-CNN'],
      color: '#8b5cf6',
      videoUrl: ''
    }
  ];
  
  const experienceList = data.experience && data.experience.length > 0 ? data.experience : experiences;

  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', overflow: 'visible' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}My Career Journey</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle :''}Work <span className="gradient-text">{data.sectionTitleHighlight ? data.sectionTitleHighlight :''}Experience</span></h1>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {experienceList.map((item, i) => {
            const isCMS = !!item.tech[0]?.skill;

            return (
              <div key={item.id || item.company} style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', position: 'relative' }}>
                
                {/* Sticky Left Sidebar for Company */}
                <div className="sticky-sidebar" style={{ flex: '1 1 300px', position: 'sticky', top: '120px', height: 'fit-content', zIndex: 10 }}>
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ paddingRight: '20px' }}
                  >
                    <h2 style={{ fontSize: '32px', color: 'var(--text-primary)', marginBottom: '8px', lineHeight: '1.2' }}>{item.company}</h2>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '15px', marginBottom: '8px' }}>
                      <Calendar size={16} /> {item.period}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '15px' }}>
                      <MapPin size={16} /> {item.location}
                    </div>
                  </motion.div>
                </div>

                {/* Scrollable Right Content for Details */}
                <div style={{ flex: '2 1 500px' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <h3 style={{ fontSize: '28px', color: 'var(--accent-primary)', marginBottom: '24px' }}>{item.title}</h3>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '18px', lineHeight: '1.8', marginBottom: '32px' }}>
                      {item.description}
                    </p>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
                      {item.tech.map((t, idx) => (
                        <span key={idx} style={{ padding: '8px 16px', fontSize: '14px', borderRadius: '8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-primary)' }}>
                          {isCMS ? t.skill : t}
                        </span>
                      ))}
                    </div>

                    {/* Video Placeholder */}
                    <div className="video-wrapper" style={{ background: 'var(--bg-surface)' }}>
                      {item.videoUrl ? (
                        <video src={item.videoUrl} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                          <Play size={48} style={{ opacity: 0.2, marginBottom: '16px' }} />
                          <p>Experience video coming soon</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

