"use client";

import { useState, useEffect } from 'react';
import { Paper, Title, Text, Tabs, Box, Group, Badge, Button, Accordion, ThemeIcon, rem, Tooltip, Overlay, Card } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Shield, Database, Network, Cpu, Bot, Coins, Users, Lock, ChevronRight, Play, FileText, ExternalLink } from 'lucide-react';
import AINetworkVisualization from '../components/AINetworkVisualization';

const MotionDiv = motion.div;
const MotionHeading = motion.h2;

export default function TechDemo() {
  const [activeTab, setActiveTab] = useState<string | null>('network');
  const [showDemo, setShowDemo] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Responsive settings
  const padding = isMobile ? rem(16) : rem(24);
  const titleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? 'sm' : 'md';
  const iconSize = isMobile ? 16 : 20;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Demo data for different technologies
  const techData = {
    network: {
      title: 'AI Agent Network',
      description: 'The MindHive Network connects specialized AI agents that collaborate to solve complex tasks. Each agent has specific capabilities and can be composed with others to create powerful workflows.',
      icon: <Bot size={iconSize} />,
      color: 'coral',
      features: [
        'Specialized AI agents with different capabilities',
        'Agent composition for complex workflows',
        'On-chain verification of AI outputs',
        'Reputation system for quality assurance',
        'Decentralized governance of agent parameters'
      ],
      demoUrl: 'https://demo.mindhive.network/ai-agents',
      whitepaper: 'Section 2.1: AI Agent Network Architecture'
    },
    data: {
      title: 'DataDAO Framework',
      description: 'DataDAOs enable collective ownership and governance of datasets, ensuring fair compensation for data contributors while maintaining privacy and security.',
      icon: <Database size={iconSize} />,
      color: 'mint',
      features: [
        'Decentralized data governance',
        'Privacy-preserving data access controls',
        'Fair compensation for data contributors',
        'Federated learning capabilities',
        'Data quality verification mechanisms'
      ],
      demoUrl: 'https://demo.mindhive.network/datadao',
      whitepaper: 'Section 2.3: DataDAO Framework'
    },
    compute: {
      title: 'Compute Marketplace',
      description: 'The Compute Marketplace connects AI workloads with computational resources in a decentralized manner, ensuring efficient allocation and fair pricing.',
      icon: <Cpu size={iconSize} />,
      color: 'ice',
      features: [
        'Resource discovery and matching algorithms',
        'Verifiable computation protocols',
        'Dynamic pricing based on demand',
        'Quality of service guarantees',
        'Energy-efficient resource allocation'
      ],
      demoUrl: 'https://demo.mindhive.network/compute',
      whitepaper: 'Section 2.4: Compute Marketplace'
    },
    governance: {
      title: 'On-Chain Governance',
      description: 'MindHive Network employs a multi-layered governance system that enables token holders to participate in protocol decisions and upgrades.',
      icon: <Users size={iconSize} />,
      color: 'blue',
      features: [
        'Token-weighted voting on proposals',
        'Delegated expert committees',
        'Quadratic voting mechanisms',
        'Time-locked execution of changes',
        'Transparent governance dashboards'
      ],
      demoUrl: 'https://demo.mindhive.network/governance',
      whitepaper: 'Section 4: Governance'
    },
    token: {
      title: 'MHN Token Economics',
      description: 'The MHN token powers the entire ecosystem, aligning incentives among all participants and enabling decentralized governance.',
      icon: <Coins size={iconSize} />,
      color: 'mint',
      features: [
        'Payment for AI services and resources',
        'Staking for network security',
        'Governance participation rights',
        'Fee burn mechanisms for deflation',
        'Reputation multipliers for long-term holders'
      ],
      demoUrl: 'https://demo.mindhive.network/token',
      whitepaper: 'Section 3: Token Economics'
    },
    security: {
      title: 'Security & Privacy',
      description: 'MindHive Network implements robust security measures and privacy-preserving techniques to protect user data and ensure system integrity.',
      icon: <Lock size={iconSize} />,
      color: 'coral',
      features: [
        'Zero-knowledge proofs for privacy',
        'Secure multi-party computation',
        'Federated learning for data privacy',
        'Formal verification of critical components',
        'Regular security audits and bug bounties'
      ],
      demoUrl: 'https://demo.mindhive.network/security',
      whitepaper: 'Section 5: Security & Privacy'
    }
  };

  // Auto-rotate through tabs every 10 seconds
  useEffect(() => {
    if (!showDemo) {
      const tabs = Object.keys(techData);
      const interval = setInterval(() => {
        const currentIndex = tabs.indexOf(activeTab as string);
        const nextIndex = (currentIndex + 1) % tabs.length;
        setActiveTab(tabs[nextIndex]);
      }, 10000);
      
      return () => clearInterval(interval);
    }
  }, [activeTab, showDemo]);

  const currentTech = techData[activeTab as keyof typeof techData];

  return (
    <Paper
      radius="xl" 
      p={padding} 
      shadow="md" 
      mb={rem(40)}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionHeading 
          style={{
            fontSize: titleSize,
            textAlign: 'center',
            marginBottom: rem(24),
            background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Technology Demonstration
        </MotionHeading>
        
        <Text size={textSize} mb="xl" ta="center">
          Experience the key technologies powering the MindHive Network ecosystem
        </Text>
        
        <Tabs 
          value={activeTab} 
          onChange={setActiveTab} 
          radius="xl"
          variant="pills"
          mb="xl"
        >
          <Tabs.List grow>
            {Object.entries(techData).map(([key, data]) => (
              <Tabs.Tab 
                key={key} 
                value={key} 
                leftSection={
                  <ThemeIcon size="sm" radius="xl" color={data.color} variant={activeTab === key ? "filled" : "light"}>
                    {data.icon}
                  </ThemeIcon>
                }
              >
                {isMobile ? '' : data.title.split(' ')[0]}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          
          <Box mt="xl">
            <MotionDiv
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={activeTab} // This forces re-render of animation when tab changes
            >
              <MotionDiv 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: rem(16) 
                }} 
                variants={itemVariants}
              >
                <ThemeIcon size="xl" radius="md" color={currentTech.color}>
                  {currentTech.icon}
                </ThemeIcon>
                <div style={{ marginLeft: rem(12) }}>
                  <Title order={3} fz={headingSize}>{currentTech.title}</Title>
                  <Badge color={currentTech.color} variant="light">Core Technology</Badge>
                </div>
              </MotionDiv>
              
              <MotionDiv 
                variants={itemVariants}
                style={{ marginBottom: rem(16) }}
              >
                <Text size={textSize}>
                  {currentTech.description}
                </Text>
              </MotionDiv>
              
              <MotionDiv 
                variants={itemVariants}
                style={{ marginBottom: rem(24) }}
              >
                <Title order={4} fz={rem(18)} mb="md">Key Features</Title>
                <Box mb="xl">
                  {currentTech.features.map((feature, index) => (
                    <MotionDiv 
                      key={index} 
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        marginBottom: rem(8)
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ChevronRight size={14} style={{ marginRight: '8px', color: `var(--mantine-color-${currentTech.color}-6)` }} />
                      <Text size={textSize}>{feature}</Text>
                    </MotionDiv>
                  ))}
                </Box>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                <Accordion variant="separated" mb="xl">
                  <Accordion.Item value="implementation">
                    <Accordion.Control>Implementation Details</Accordion.Control>
                    <Accordion.Panel>
                      <Text size="sm">
                        This technology is implemented using a combination of blockchain-based smart contracts for verification and governance, along with off-chain components for high-performance computation and data processing.
                      </Text>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants} style={{ display: 'flex', justifyContent: 'center' }}>
                <Tooltip label="Read whitepaper section">
                  <Button 
                    variant="outline" 
                    color={currentTech.color} 
                    radius="xl"
                    leftSection={<FileText size={16} />}
                    component="a"
                    href="#whitepaper"
                    mr="md"
                  >
                    {currentTech.whitepaper}
                  </Button>
                </Tooltip>
                <Tooltip label="View technical demo">
                  <Button 
                    variant="light" 
                    color={currentTech.color}
                    leftSection={<Play size={16} />}
                    onClick={() => setShowDemo(true)}
                  >
                    View Demo
                  </Button>
                </Tooltip>
              </MotionDiv>
            </MotionDiv>
          </Box>
        </Tabs>
        
        <Paper 
          radius="lg" 
          p={0} 
          mt={rem(40)} 
          withBorder 
          style={{ 
            overflow: 'hidden',
            position: 'relative',
            height: rem(400),
            background: 'linear-gradient(135deg, rgba(255,122,92,0.05), rgba(92,219,195,0.05))',
          }}
        >
          {showDemo && (
            <MotionDiv
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Text color="white" mb="md">Demo functionality will be available in the full release</Text>
              <Button variant="white" onClick={() => setShowDemo(false)}>Close</Button>
            </MotionDiv>
          )}
          <AINetworkVisualization />
        </Paper>
        
        <Text size="sm" c="dimmed" ta="center" mt="md">
          Interactive visualization of the MindHive Network ecosystem. Hover over nodes to see details.
        </Text>
      </MotionDiv>
    </Paper>
  );
} 