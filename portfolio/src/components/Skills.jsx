import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Smartphone, Layout, BrainCircuit, Cpu } from 'lucide-react';

const Skills = ({data}) => {
  data = data || {};
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout size={24} />,
      skills: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      color: '#3b82f6'
    },
    {
      title: 'Backend & CMS',
      icon: <Server size={24} />,
      skills: ['Node.js', 'Fastify', 'Express.js', 'Strapi CMS', 'PostgreSQL', 'MongoDB', 'WebSockets'],
      color: '#8b5cf6'
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone size={24} />,
      skills: ['Flutter (Dart)', 'Android Studio', 'Firebase', 'BLoC', 'Provider', 'SQLite'],
      color: '#00d2ff'
    },
    {
      title: 'AI & Machine Learning',
      icon: <BrainCircuit size={24} />,
      skills: ['LangGraph', 'Multi-agent Systems', 'LSTM', 'Hybrid LSTM-CNN', 'Supervised Learning'],
      color: '#10b981'
    },
    {
      title: 'Languages & Tools',
      icon: <Code2 size={24} />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'GitLab/Git'],
      color: '#ec4899'
    }
  ];

  const allSkills = skillCategories.flatMap(c => c.skills);
  // Duplicate for seamless marquee loop
  const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, marginBottom: '60px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>Technical Arsenal</h2>
          <h1 style={{ fontSize: '48px' }}>Core <span className="gradient-text">Competencies</span></h1>
        </motion.div>
      </div>

      {/* Infinite Marquee Section */}
      <div className="marquee-container" style={{ padding: '40px 0', background: 'rgba(255,255,255,0.02)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)' }}>
        <div className="marquee-content">
          {marqueeItems.map((skill, idx) => (
            <span key={idx} style={{ 
              fontSize: '24px', 
              fontWeight: '800', 
              color: 'var(--text-secondary)',
              WebkitTextStroke: '1px rgba(255,255,255,0.1)',
              letterSpacing: '2px',
              textTransform: 'uppercase'
            }}>
              {skill} <span style={{ color: 'var(--accent-primary)', margin: '0 20px' }}>•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Categories Modern Grid */}
      <div className="container" style={{ marginTop: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '24px', borderLeft: `2px solid ${category.color}55`, background: 'linear-gradient(90deg, rgba(255,255,255,0.02) 0%, transparent 100%)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ color: category.color }}>{category.icon}</div>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>{category.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '15px' }}>
                {category.skills.join(', ')}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

