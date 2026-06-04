import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ExternalLink, Code, Laptop, Terminal, Cpu, Database, Server, Wifi } from 'lucide-react';

const Hero = ({data}) => {
  if(!data) return null;
//  console.log("Hero Section Data",data);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="home" className="section-padding" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: '800px' }}
        >
          <motion.div variants={itemVariants} className="badge-wrapper" style={{ marginBottom: '24px' }}>
            <span className="glass-effect" style={{ padding: '8px 16px', borderRadius: '100px', fontSize: '14px', fontWeight: '600', color: 'var(--accent-primary)', border: '1px solid var(--border-active)' }}>
              ✨ {data.topBadgeText ? data.topBadgeText : 'Software Engineer Intern @ NIIT Limited'}
              
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(40px, 8vw, 84px)', marginBottom: '24px', lineHeight: '1.05' }}>
            {data.mainTitlePart1 ? data.mainTitlePart1 : 'Elevating Ideas with'} <span className="gradient-text">{data.mainTitleHighlight ? data.mainTitleHighlight : 'Elegant Code'}</span>{data.mainTitlePart2 ? data.mainTitlePart2 : ''}.
          </motion.h1>

          <motion.p variants={itemVariants} style={{ fontSize: 'clamp(18px, 2vw, 22px)', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '650px' }}>
            I'm <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Tanisha Yadav</span>{data.heroDescription ? data.heroDescription : ''}, a full-stack developer and GATE qualifier passionate about building high-performance applications with <span className="gradient-text">{data.descriptionHighlight ? data.descriptionHighlight : ''}Flutter, Next.js, and Node.js</span>.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <motion.a 
              href="#projects" 
              className="glass-effect"
              whileHover={{ scale: 1.05, background: 'var(--accent-primary)', color: 'black' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '16px 32px', borderRadius: '12px', fontWeight: '700', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {data.primaryButtonLabel ? data.primaryButtonLabel :''}View My Work <ChevronRight size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/tanisha-yadav-97369b296"
              target="_blank"
              className="glass-card"
              whileHover={{ scale: 1.05, borderColor: 'var(--accent-primary)' }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '16px 32px', fontWeight: '600', fontSize: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
             {data.secondaryButtonText ? data.secondaryButtonText :''} LinkedIn <ExternalLink size={18} />
            </motion.a>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', marginTop: '60px' }}>
            {data.stats && data.stats.map((item)=>(
              <motion.div 
                key={item.id} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className='glow-card' style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(20,20,25,0.8) 0%, rgba(10,10,12,0.9) 100%)',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                    style={{ 
                      fontSize: '36px', 
                      fontWeight: '900', 
                      background: 'linear-gradient(to right, var(--accent-primary), var(--text-primary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px', 
                      lineHeight: '1' 
                    }}
                  >
                    {item.value ? item.value : ''}
                  </motion.span>
                  <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>
                    {item.label ? item.label : ''}
                  </span>
                </div>
              </motion.div>
            ))}

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
              <div className="glow-card" style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(20,20,25,0.8) 0%, rgba(10,10,12,0.9) 100%)',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.6 }}
                  style={{ 
                      fontSize: '36px', 
                      fontWeight: '900', 
                      background: 'linear-gradient(to right, var(--accent-secondary), var(--text-primary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px', 
                      lineHeight: '1' 
                    }}
                >
                  GATE
                </motion.span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Qualified</span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
              <div className="glow-card" style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%', 
                  justifyContent: 'center',
                  background: 'linear-gradient(145deg, rgba(20,20,25,0.8) 0%, rgba(10,10,12,0.9) 100%)',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                <motion.span 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                  style={{ 
                      fontSize: '36px', 
                      fontWeight: '900', 
                      background: 'linear-gradient(to right, var(--accent-primary), var(--text-primary))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      marginBottom: '12px', 
                      lineHeight: '1' 
                    }}
                >
                  4+
                </motion.span>
                <span style={{ fontSize: '13px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Full-stack Projects</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating Ambient Tech Icons */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, -20, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '10%', left: '15%', opacity: '0.1', zIndex: 0 }}
      >
        <Database size={90} color="var(--text-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, 30, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', top: '5%', right: '25%', opacity: '0.1', zIndex: 0 }}
      >
        <Server size={100} color="var(--accent-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -40, 0], rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '35%', right: '10%', opacity: '0.12', zIndex: 0 }}
      >
        <Code size={120} color="var(--accent-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 50, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', bottom: '15%', left: '8%', opacity: '0.15', zIndex: 0 }}
      >
        <Laptop size={140} color="var(--accent-secondary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, -30, 0], x: [0, 30, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ position: 'absolute', top: '10%', left: '35%', opacity: '0.1', zIndex: 0 }}
      >
        <Terminal size={80} color="var(--text-primary)" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 40, 0], x: [0, -40, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        style={{ position: 'absolute', bottom: '30%', right: '25%', opacity: '0.1', zIndex: 0 }}
      >
        <Cpu size={100} color="var(--accent-primary)" />
      </motion.div>
      
      {/* Existing Abstract Ambient Shapes */}
      <motion.div 
        animate={{ y: [0, -30, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '15%', right: '15%', width: '100px', height: '100px', borderRadius: '30%', background: 'linear-gradient(135deg, var(--accent-primary) 0%, transparent 100%)', filter: 'blur(15px)', opacity: '0.3', zIndex: 0 }}
      />
      <motion.div 
        animate={{ y: [0, 40, 0], rotate: [0, -20, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: 'absolute', bottom: '20%', left: '5%', width: '150px', height: '150px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-secondary) 0%, transparent 100%)', filter: 'blur(20px)', opacity: '0.2', zIndex: 0 }}
      />

      {/* Hero background decor */}
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '500px', height: '500px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)', filter: 'blur(80px)', zIndex: '-1', opacity: '0.6' }}></div>
    </section>
  );
};

export default Hero;
