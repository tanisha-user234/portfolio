import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = (data) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-effect" style={{ borderRadius: '0', borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="logo" 
          style={{ fontSize: '24px', fontWeight: '800', cursor: 'pointer' }}
        >
          <span className="gradient-text">TY</span>.
        </motion.div>

        {/* Desktop Links */}
        <div className="desktop-nav" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}
              whileHover={{ color: 'var(--accent-primary)', y: -2 }}
            >
              {link.name}
            </motion.a>
          ))}
          
          <div style={{ display: 'flex', gap: '16px', marginLeft: '16px', paddingLeft: '16px', borderLeft: '1px solid var(--border-glass)' }}>
            <motion.a 
              href="https://github.com" target="_blank"
              whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
            >
              <FaGithub size={20} />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/tanisha-yadav-97369b296" target="_blank"
              whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
            >
              <FaLinkedin size={20} />
            </motion.a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'none' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Optional extension) */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
