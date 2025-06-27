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
        opacity={0.15} 
        primaryColor="#FF6F61" 
        secondaryColor="#3DF5C6" 
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
                primaryColor="#FF6F61"
                secondaryColor="#3DF5C6"
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
              background: 'linear-gradient(135deg, #FF6F61, #3DF5C6)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              蜂巢网络
            </Text>
            <Text component="span"> 核心特点</Text>
            
            {/* 装饰性六边形 */}
            <div style={{
              position: 'absolute',
              bottom: -15,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 150,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #FF6F61, #3DF5C6, transparent)',
            }} />
          </Title>
          
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={30}>
            <HexagonInfoCard
              title="集体智能"
              description="利用分布式节点网络的协同能力，实现比单一AI更强大的集体智能"
              icon={<Brain size={40} />}
              color="#FF6F61"
              delay={0}
            />
            <HexagonInfoCard
              title="去中心化网络"
              description="基于区块链技术构建的完全去中心化网络，无单点故障风险"
              icon={<Network size={40} />}
              color="#3DF5C6"
              delay={1}
            />
            <HexagonInfoCard
              title="链上验证"
              description="所有AI计算和交互都在链上验证，确保透明度和可信度"
              icon={<Lock size={40} />}
              color="#9FEFFF"
              delay={2}
            />
            <HexagonInfoCard
              title="分布式计算"
              description="利用全球节点的计算资源，实现高效且可扩展的AI训练和推理"
              icon={<Cpu size={40} />}
              color="#6B76FF"
              delay={3}
            />
            <HexagonInfoCard
              title="数据主权"
              description="用户完全控制自己的数据，同时能够安全地参与协作训练"
              icon={<Database size={40} />}
              color="#FF6F61"
              delay={4}
            />
            <HexagonInfoCard
              title="社区治理"
              description="通过代币经济和DAO机制，实现网络的民主化治理和激励"
              icon={<Users size={40} />}
              color="#3DF5C6"
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
