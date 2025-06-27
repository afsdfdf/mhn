"use client";
import { useState, useEffect } from 'react';
import MainNavbar from './components/MainNavbar';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import NewsletterBar from './components/NewsletterBar';
import RoadmapSection from './components/RoadmapSection';
import DemoSection from './components/DemoSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import AINetworkVisualization from './components/AINetworkVisualization';
import { Box } from '@mantine/core';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <main>
      <MainNavbar />
      
      <div style={{ position: 'relative' }}>
        <HeroSection />
        {!isMobile && (
          <Box
            style={{ 
              position: 'absolute', 
              top: 0, 
              right: 0, 
              width: '50%', 
              height: '100%',
              zIndex: 10
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '100%',
              position: 'relative'
            }}>
              <AINetworkVisualization />
            </div>
          </Box>
        )}
      </div>
      
      <section id="features" style={{ padding: '40px 0' }}>
        <FeatureCards />
      </section>
      
      <section id="demo">
        <DemoSection />
      </section>
      
      <section id="roadmap">
        <RoadmapSection />
      </section>
      
      <section id="team">
        <TeamSection />
      </section>
      
      <section style={{ padding: '0 20px' }}>
        <NewsletterBar />
      </section>
      
      <Footer />
    </main>
  );
}
