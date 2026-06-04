import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Smartphone, Layout, BrainCircuit, Cpu, Wifi, Monitor } from 'lucide-react';

const Skills = ({data}) => {
  if(!data){return null}
  console.log("Skills section",data)
  const skillCategories = [
    {
      title: 'Current Focus',
      icon: <Layout size={24} />,
      skills: ['Next.js', 'PostgreSQL', 'Fastify', 'Strapi', 'Node.js', 'React'],
      color: '#3b82f6'
    },
    {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      skills: ['Flutter', 'Dart', 'Android Studio', 'BLoC', 'Provider', 'GetX'],
      color: '#00d2ff'
    },
    {
      title: 'Backend & Databases',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'SQLite', 'PostgreSQL'],
      color: '#8b5cf6'
    },
    {
      title: 'Languages',
      icon: <Code2 size={24} />,
      skills: ['Java', 'Python', 'C++', 'C', 'JavaScript', 'TypeScript'],
      color: '#ec4899'
    },
    {
      title: 'Machine Learning',
      icon: <BrainCircuit size={24} />,
      skills: ['Supervised Models', 'LSTM', 'Hybrid LSTM-CNN', 'Data Analysis'],
      color: '#10b981'
    }
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Floating Ambient Tech Icons */}
      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '10%', right: '10%', opacity: '0.08', zIndex: 0 }}
      >
        <Cpu size={180} color="var(--accent-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -30, 0], rotate: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', bottom: '15%', left: '5%', opacity: '0.08', zIndex: 0 }}
      >
        <Database size={200} color="var(--accent-secondary)" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -40, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', top: '40%', left: '15%', opacity: '0.05', zIndex: 0 }}
      >
        <Code2 size={120} color="var(--text-primary)" />
      </motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>Technical Arsenal</h2>
          <h1 style={{ fontSize: '48px' }}>My <span className="gradient-text">Skills</span></h1>
        </motion.div>
{/* the cms driven skills */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {data.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, rotateX: 90, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
              animate={{ y: [0, -8, 0] }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'top center' }}
              transition={{ 
                opacity: { duration: 0.4, delay: i * 0.15 },
                rotateX: { type: "spring", stiffness: 100, damping: 12, delay: i * 0.15 },
                scale: { type: "spring", stiffness: 100, damping: 12, delay: i * 0.15 },
                y: { duration: 3 + (i % 2), repeat: Infinity, ease: "easeInOut" } 
              }}
              className="glow-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', border: `1px solid ${category.color}88`, color: category.color, boxShadow: `0 0 15px ${category.color}40` }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {category.skills.map(skill => (
                  <motion.span
                    key={skill.id}
                    whileHover={{ scale: 1.05, borderColor: category.color, background: `${category.color}22`, boxShadow: `0 0 10px ${category.color}60` }}
                    className="glass-effect"
                    style={{ 
                      padding: '6px 14px', 
                      fontSize: '13px', 
                      borderRadius: '100px', 
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill.skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, rotateX: 90, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, rotateX: 0, scale: 1, y: 0 }}
              animate={{ y: [0, -8, 0] }}
              viewport={{ once: true, margin: "-50px" }}
              style={{ transformStyle: 'preserve-3d', transformOrigin: 'top center' }}
              transition={{ 
                opacity: { duration: 0.4, delay: i * 0.15 },
                rotateX: { type: "spring", stiffness: 100, damping: 12, delay: i * 0.15 },
                scale: { type: "spring", stiffness: 100, damping: 12, delay: i * 0.15 },
                y: { duration: 3 + (i % 2), repeat: Infinity, ease: "easeInOut" } 
              }}
              className="glow-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', border: `1px solid ${category.color}88`, color: category.color, boxShadow: `0 0 15px ${category.color}40` }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: category.color, background: `${category.color}22`, boxShadow: `0 0 10px ${category.color}60` }}
                    className="glass-effect"
                    style={{ 
                      padding: '6px 14px', 
                      fontSize: '13px', 
                      borderRadius: '100px', 
                      color: 'var(--text-primary)',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
