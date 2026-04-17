import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Smartphone, Layout, BrainCircuit } from 'lucide-react';

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
    <section id="skills" className="section-padding">
      <div className="container">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', border: `1px solid ${category.color}44`, color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '20px' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {category.skills.map(skill => (
                  <motion.span
                    key={skill.id}
                    whileHover={{ scale: 1.05, borderColor: category.color, background: `${category.color}11` }}
                    className="glass-effect"
                    style={{ 
                      padding: '6px 14px', 
                      fontSize: '13px', 
                      borderRadius: '100px', 
                      color: 'var(--text-secondary)',
                      fontWeight: '500',
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '32px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', border: `1px solid ${category.color}44`, color: category.color }}>
                  {category.icon}
                </div>
                <h3 style={{ fontSize: '20px' }}>{category.title}</h3>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {category.skills.map(skill => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, borderColor: category.color, background: `${category.color}11` }}
                    className="glass-effect"
                    style={{ 
                      padding: '6px 14px', 
                      fontSize: '13px', 
                      borderRadius: '100px', 
                      color: 'var(--text-secondary)',
                      fontWeight: '500',
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
