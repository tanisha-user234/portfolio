import React from 'react';
import { color, motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = ({data}) => {
  console.log("Experience Section Data",data);
  if(!data){
    return null;
  }
  const experiences = [
    {
      title: 'Software Engineer Intern',
      company: 'NIIT Limited',
      period: 'Current',
      location: 'Gurugram, HR',
      description: 'Developing high-performance features for the main website using Next.js, Fastify, Node.js, and PostgreSQL. Implementing CMS solutions with Strapi.',
      tech: ['Next.js', 'PostgreSQL', 'Node.js', 'Fastify', 'Strapi'],
      color: '#3b82f6'
    },
    {
      title: 'Flutter Intern',
      company: 'Aquadsoft Software Solutions',
      period: 'July 2025 - Sept 2025',
      location: 'Remote',
      description: 'Worked on resolving UI/logic bugs for mobile applications. Focused on state management using BLoC and Provider.',
      tech: ['Flutter', 'Dart', 'BLoC', 'Provider', 'GetX'],
      color: '#00d2ff'
    },
    {
      title: 'Machine Learning Intern',
      company: 'NIT Delhi',
      period: 'June 2024 - July 2024',
      location: 'New Delhi',
      description: 'Developed a supervised learning framework for detecting cardiac diseases using PTB Diagnostic ECG Database. Implemented SVM, KNN, and LSTM-CNN models.',
      tech: ['Python', 'SVM', 'KNN', 'LSTM-CNN', 'LaTeX'],
      color: '#a855f7'
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}My Career Journey</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle :''}Work <span className="gradient-text">{data.sectionTitleHighlight ? data.sectionTitleHighlight :''}Experience</span></h1>
        </motion.div>

        <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical line decor */}
          <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', borderLeft: '1px solid var(--border-glass)' }}></div>
            {data.experience.map((item,i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card"
              style={{ marginLeft: '40px', padding: '32px', position: 'relative' }}
            >
              {/* Dot decorator */}
              const color={item.color ? item.color :'#3b82f6'};
              <div style={{ 
                position: 'absolute', 
                left: '-28px', 
                top: '40px', 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: color,
                boxShadow: `0 0 10px ${color}`
              }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '16px', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{item.title}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: '600' }}>
                    <Briefcase size={16} /> {item.company}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'var(--text-muted)', fontSize: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {item.period}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {item.location}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {item.tech.map(t => (
                  <span key={t.id} className="glass-effect" style={{ padding: '4px 12px', fontSize: '12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontWeight: '600' }}>
                    {t.skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card"
              style={{ marginLeft: '40px', padding: '32px', position: 'relative' }}
            >
              {/* Dot decorator */}
              <div style={{ 
                position: 'absolute', 
                left: '-28px', 
                top: '40px', 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: exp.color,
                boxShadow: `0 0 10px ${exp.color}`
              }}></div>

              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '16px', gap: '12px' }}>
                <div>
                  <h2 style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{exp.title}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontWeight: '600' }}>
                    <Briefcase size={16} /> {exp.company}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'var(--text-muted)', fontSize: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {exp.period}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={14} /> {exp.location}</span>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {exp.tech.map(t => (
                  <span key={t} className="glass-effect" style={{ padding: '4px 12px', fontSize: '12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontWeight: '600' }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
