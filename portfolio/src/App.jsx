import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import { fetchApi } from './lib/cms';



function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const[data,setData]=React.useState('');

  useEffect( ()=>{
     const getData= async()=>{
      const response= await fetchApi('/dashboard');
      console.log(response);
      setData(response);
     };

     getData();
  }, [])

  
  const heroSectionData= data.HeroSection;
  const CotactSectionData= data.ContactSection;
  const NavbarData= data.Navbar;
  const ExperienceSectionData = data.ExperienceSection;
  const footerSectionData=data.footerSection;
  const ProjectSectionData = data.projectSection;
  const SkillsSectionData= data.skillsSection;
 

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-primary)',
          transformOrigin: '0%',
          zIndex: 100
        }}
      />

      {/* Modern Background Mesh */}
      <div className="bg-mesh" />
      
      {/* Navigation */}
      <Navbar data={NavbarData}/>

      {/* Main Content */}
      <main>
        <Hero data={heroSectionData}/>
        <Experience data={ExperienceSectionData} />
        <Projects data={ProjectSectionData}/>
        <Skills data={SkillsSectionData} />
        
        {/* Education & Certifications */}
        <section id="about" className="section-padding">
          <div className="container">
            <div className="glass-card" style={{ padding: '60px', textAlign: 'center' }}>
              <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Education & Honors</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                <div>
                  <h3 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>B.Tech CSE</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Apeejay Stya University</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>2022 - 2026 (Current)</p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>GATE Qualified</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>CS IT 2026</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Qualified on Recent Attempt</p>
                </div>
                <div>
                  <h3 style={{ color: 'var(--accent-primary)', fontSize: '24px' }}>96% Score</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Higher Secondary & High School</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Academic Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact data={CotactSectionData} />
      </main>

      {/* Footer */}
      <Footer data={footerSectionData}/>

      {/* Global CSS for additional features */}
      <style>{`
        .app-container {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
        }
        
        main {
          padding-top: 80px; /* Offset for sticky navbar */
        }

        /* Micro-animations */
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .floating {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
