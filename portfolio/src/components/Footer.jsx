import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = (data) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="glass-effect" style={{ borderRadius: '0', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', padding: '60px 0 30px' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div 
            style={{ fontSize: '32px', fontWeight: '800', marginBottom: '16px', cursor: 'pointer' }}
            whileHover={{ scale: 1.05 }}
            onClick={scrollToTop}
          >
            <span className="gradient-text">Tanisha Yadav</span>
          </motion.div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
            Designing and developing digital experiences with precision and passion.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '24px' }}>
          <motion.a 
            href="https://github.com" target="_blank"
            className="glass-effect"
            style={{ padding: '12px', borderRadius: '50%', color: 'var(--text-secondary)' }}
            whileHover={{ color: 'var(--accent-primary)', scale: 1.1, translateY: -5 }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/tanisha-yadav-97369b296" target="_blank"
            className="glass-effect"
            style={{ padding: '12px', borderRadius: '50%', color: 'var(--text-secondary)' }}
            whileHover={{ color: 'var(--accent-primary)', scale: 1.1, translateY: -5 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a 
            href="mailto:tanisha.yadav@asu.apeejay.edu"
            className="glass-effect"
            style={{ padding: '12px', borderRadius: '50%', color: 'var(--text-secondary)' }}
            whileHover={{ color: 'var(--accent-primary)', scale: 1.1, translateY: -5 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>

        <div style={{ borderTop: '1px solid var(--border-glass)', width: '100%', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '14px', color: 'var(--text-muted)' }}>
          <p>© 2026 Tanisha Yadav. Built with React & Framer Motion.</p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            Back to Top <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
