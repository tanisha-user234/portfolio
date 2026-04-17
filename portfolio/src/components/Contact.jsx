import React from 'react';
import { motion } from 'framer-motion';
import { Mail,Send, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = ({data}) => {
  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <h2 style={{ fontSize: '14px', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>Let's Connect</h2>
          <h1 style={{ fontSize: '48px' }}>Get In <span className="gradient-text">Touch</span></h1>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ padding: '40px' }}
          >
            <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>Let's build something <span className="gradient-text">amazing</span> together.</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)' }}><Mail size={20} /></div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Email Me</div>
                  <div style={{ fontWeight: '600' }}>tanisha.yadav@asu.apeejay.edu</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)' }}><FaLinkedin size={20} /></div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>LinkedIn</div>
                  <motion.a 
                    href="https://www.linkedin.com/in/tanisha-yadav-97369b296" 
                    target="_blank" 
                    style={{ fontWeight: '600' }}
                    whileHover={{ color: 'var(--accent-primary)' }}
                  >
                    Tanisha Yadav <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                  </motion.a>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div className="glass-effect" style={{ padding: '12px', borderRadius: '12px', color: 'var(--accent-primary)' }}><FaGithub size={20} /></div>
                <div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>GitHub</div>
                  <motion.a 
                    href="https://github.com" 
                    target="_blank" 
                    style={{ fontWeight: '600' }}
                    whileHover={{ color: 'var(--accent-primary)' }}
                  >
                    @tanisha-github <ExternalLink size={12} style={{ marginLeft: '4px' }} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card" 
            style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Full Name</label>
              <input type="text" placeholder="John Doe" className="glass-effect" style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.02)', outline: 'none', border: '1px solid var(--border-glass)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" className="glass-effect" style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.02)', outline: 'none', border: '1px solid var(--border-glass)' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
              <textarea placeholder="Tell me about your project..." rows="5" className="glass-effect" style={{ padding: '14px 20px', background: 'rgba(255,255,255,0.02)', outline: 'none', border: '1px solid var(--border-glass)', resize: 'none' }}></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, background: 'var(--accent-primary)', color: 'black' }}
              whileTap={{ scale: 0.98 }}
              className="glass-effect"
              style={{ 
                padding: '16px', 
                borderRadius: '12px', 
                fontWeight: '700', 
                fontSize: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '12px',
                cursor: 'pointer'
              }}
            >
              Send Message <Send size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
