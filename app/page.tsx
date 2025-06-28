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
import { Box, Container, SimpleGrid, Title, Text, rem } from '@mantine/core';
import HexagonGrid from './components/HexagonGrid';
import HiveNetworkVisualization from './components/HiveNetworkVisualization';
import HexagonInfoCard from './components/HexagonInfoCard';
import HoneycombBackground from './components/HoneycombBackground';
import { Brain, Network, Lock, Cpu, Database, Users } from 'lucide-react';

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
      
      {/* 动态蜂巢背景 */}
      <HoneycombBackground 
        opacity={0.1} 
        primaryColor="var(--mantine-color-coral-6)" 
        secondaryColor="var(--mantine-color-mint-6)" 
        density={25}
        scrollSpeed={0.3}
      />
      
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
              <HiveNetworkVisualization 
                width={600} 
                height={500}
                nodeCount={12}
                dataPacketCount={20}
                primaryColor="var(--mantine-color-coral-6)"
                secondaryColor="var(--mantine-color-mint-6)"
              />
            </div>
          </Box>
        )}
      </div>
      
      {/* 蜂巢特点展示 */}
      <section style={{ padding: '80px 0 40px' }}>
        <Container size="lg">
          <Title 
            order={2} 
            ta="center" 
            mb={rem(50)}
            style={{
              fontSize: rem(36),
              position: 'relative',
              display: 'inline-block',
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '100%',
            }}
          >
            <Text component="span" style={{ 
              background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Hivemind Network
            </Text>
            <Text component="span"> Core Features</Text>
            
            {/* 装饰性六边形 */}
            <div style={{
              position: 'absolute',
              bottom: -15,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 150,
              height: 3,
              background: 'linear-gradient(90deg, transparent, var(--mantine-color-coral-6), var(--mantine-color-mint-6), transparent)',
            }} />
          </Title>
          
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
            <HexagonInfoCard
              title="Collective Intelligence"
              description="Leverage the collaborative power of distributed nodes to achieve intelligence beyond single AI capabilities"
              icon={<Brain size={40} />}
              color="var(--mantine-color-coral-6)"
              delay={0}
            />
            <HexagonInfoCard
              title="Decentralized Network"
              description="Built on blockchain technology for a fully decentralized network with no single point of failure"
              icon={<Network size={40} />}
              color="var(--mantine-color-mint-6)"
              delay={1}
            />
            <HexagonInfoCard
              title="On-chain Verification"
              description="All AI computations and interactions are verified on-chain for transparency and trust"
              icon={<Lock size={40} />}
              color="var(--mantine-color-ice-6)"
              delay={2}
            />
            <HexagonInfoCard
              title="Distributed Computing"
              description="Utilize computing resources from nodes worldwide for efficient and scalable AI training and inference"
              icon={<Cpu size={40} />}
              color="var(--mantine-color-blue-6)"
              delay={3}
            />
            <HexagonInfoCard
              title="Data Sovereignty"
              description="Users maintain complete control over their data while safely participating in collaborative training"
              icon={<Database size={40} />}
              color="var(--mantine-color-coral-6)"
              delay={4}
            />
            <HexagonInfoCard
              title="Community Governance"
              description="Democratic governance and incentives through token economics and DAO mechanisms"
              icon={<Users size={40} />}
              color="var(--mantine-color-mint-6)"
              delay={5}
            />
          </SimpleGrid>
        </Container>
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
