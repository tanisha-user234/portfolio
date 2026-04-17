import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ExternalLink } from 'lucide-react';

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
            {data.mainTitlePart1 ? data.mainTitlePart1 : 'Elevating Ideas with'}Elevating Ideas with <span className="gradient-text">{data.mainTitleHighlight? data.mainTitleHighlight : ''}Elegant Code</span>{data.mainTitlePart2 ? data.mainTitlePart2 :''}.
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
          <div style={{ display: 'flex', gap: '16px', marginTop: '60px' }}>

          {data.stats.map((item)=>(
                <motion.div key={item.id} variants={itemVariants}>
               <div className='glass-card' style={{padding:'12px 24px',display:'flex',flexDirection:'column'}}>
                <span style={{fontSize:'24px',fontWeight:'800',color: 'var(--accent-primary)'}}>{item.value ? item.value :''}</span>
                <span style={{fontSize:'12px', color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'1px'}}>{item.label ? item.label :''}</span>
               </div>
          </motion.div>
          ))}
          </div>
          <motion.div variants={itemVariants} style={{ marginTop: '60px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="glass-card" style={{ padding: '12px 24px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-primary)' }}>GATE</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Qualified</span>
            </div>
            <div className="glass-card" style={{ padding: '12px 24px', display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-primary)' }}>4+</span>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Full-stack Projects</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero background decor */}
      <div style={{ position: 'absolute', top: '20%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: '-1', opacity: '0.4' }}></div>
    </section>
  );
};

export default Hero;
