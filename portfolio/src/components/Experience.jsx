import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Rocket, Laptop, Target } from 'lucide-react';

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
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Flutter Intern',
      company: 'Aquadsoft Software Solutions',
      period: 'July 2025 - Sept 2025',
      location: 'Remote',
      description: 'Diagnosed and resolved UI and logic bugs that improved code stability and reduced reported defect count. Authored technical documentation for core Flutter concepts.',
      tech: ['Flutter', 'Dart', 'BLoC', 'Provider'],
      color: '#00d2ff'
    },
    {
      id: 3,
      title: 'Machine Learning Intern',
      company: 'NIT Delhi',
      period: 'June 2024 - July 2024',
      location: 'New Delhi',
      description: 'Built a supervised learning framework for multi-class cardiac disease detection on the PTB Diagnostic ECG Database. Delivered the highest classification accuracy using the LSTM-CNN hybrid architecture.',
      tech: ['Python', 'SVM', 'KNN', 'LSTM-CNN'],
      color: '#8b5cf6'
    }
  ];
  
  const experienceList = data.experience && data.experience.length > 0 ? data.experience : experiences;
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="section-padding" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Floating Ambient Tech Icons */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '15%', right: '10%', opacity: '0.08', zIndex: 0 }}
      >
        <Rocket size={160} color="var(--accent-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: '0.08', zIndex: 0 }}
      >
        <Briefcase size={200} color="var(--accent-secondary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -40, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', top: '50%', right: '20%', opacity: '0.05', zIndex: 0 }}
      >
        <Target size={140} color="var(--text-primary)" />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>{data.sectionSubtitle? data.sectionSubtitle :''}My Career Journey</h2>
          <h1 style={{ fontSize: '48px' }}>{data.sectionTitle ? data.sectionTitle :''}Work <span className="gradient-text">{data.sectionTitleHighlight ? data.sectionTitleHighlight :''}Experience</span></h1>
        </motion.div>

        <div className="timeline" style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Scroll-Driven Vertical SVG Line */}
          <div style={{ position: 'absolute', left: '20px', top: '0', bottom: '0', width: '2px', background: 'rgba(255,255,255,0.05)' }}>
            <motion.div style={{
              width: '100%',
              height: lineHeight,
              background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))',
              boxShadow: '0 0 15px var(--accent-primary)'
            }} />
          </div>

          {experienceList.map((item, i) => {
            const color = item.color || '#3b82f6';
            const isCMS = !!item.tech[0]?.skill;

            return (
              <motion.div
                key={item.id || item.company}
                initial={{ opacity: 0, x: -100, scale: 0.8, rotateZ: -2 }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotateZ: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", bounce: 0.5, duration: 1, delay: i * 0.1 }}
                className="glow-card"
                style={{ marginLeft: '50px', padding: '32px', position: 'relative' }}
              >
                {/* Scroll-triggered Dot decorator */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", bounce: 0.7, delay: i * 0.1 + 0.3 }}
                  style={{ 
                  position: 'absolute', 
                  left: '-38px', 
                  top: '40px', 
                  width: '16px', 
                  height: '16px', 
                  borderRadius: '50%', 
                  background: color,
                  boxShadow: `0 0 15px ${color}`
                }}></motion.div>

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

                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px', lineHeight: '1.6' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {item.tech.map((t, idx) => (
                    <span key={idx} className="glass-effect" style={{ padding: '6px 14px', fontSize: '12px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-secondary)', fontWeight: '600' }}>
                      {isCMS ? t.skill : t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
