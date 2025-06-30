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
import FeatureHighlights from './components/FeatureHighlights';
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
      
      <HeroSection />
      
      <section id="benefits" style={{ padding: '20px 0 40px' }}>
        <FeatureHighlights />
      </section>
      
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
