"use client";

import { useState, useEffect } from 'react';
import { Paper, Title, Text, Tabs, Box, Group, Badge, Button, Accordion, ThemeIcon, rem, Tooltip, Overlay, Card } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Shield, Database, Network, Cpu, Bot, Coins, Users, Lock, ChevronRight, Play, FileText, ExternalLink } from 'lucide-react';
import AINetworkVisualization from '../components/AINetworkVisualization';

const MotionPaper = motion(Paper);
const MotionGroup = motion(Group);
const MotionBox = motion(Box);
const MotionTitle = motion(Title);

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
    <MotionPaper 
      radius="xl" 
      p={padding} 
      shadow="md" 
      mb={rem(40)}
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MotionTitle 
        order={2} 
        fz={titleSize} 
        mb="xl" 
        ta="center" 
        style={{
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
      </MotionTitle>
      
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
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeTab} // This forces re-render of animation when tab changes
          >
            <MotionGroup mb="md" variants={itemVariants}>
              <ThemeIcon size="xl" radius="md" color={currentTech.color}>
                {currentTech.icon}
              </ThemeIcon>
              <div>
                <Title order={3} fz={headingSize}>{currentTech.title}</Title>
                <Badge color={currentTech.color} variant="light">Core Technology</Badge>
              </div>
            </MotionGroup>
            
            <MotionBox variants={itemVariants}>
              <Text size={textSize} mb="lg">
                {currentTech.description}
              </Text>
            </MotionBox>
            
            <MotionBox variants={itemVariants}>
              <Title order={4} fz={rem(18)} mb="md">Key Features</Title>
              <Box mb="xl">
                {currentTech.features.map((feature, index) => (
                  <MotionGroup 
                    key={index} 
                    mb="xs"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <ThemeIcon size="sm" radius="xl" color={currentTech.color}>
                      <ChevronRight size={12} />
                    </ThemeIcon>
                    <Text size={textSize}>{feature}</Text>
                  </MotionGroup>
                ))}
              </Box>
            </MotionBox>
            
            <MotionBox variants={itemVariants}>
              <Accordion variant="separated" mb="xl">
                <Accordion.Item value="implementation">
                  <Accordion.Control>
                    <Text fw={500}>Implementation Details</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size={textSize}>
                      The {currentTech.title} is implemented using a combination of blockchain technology, 
                      distributed systems architecture, and advanced cryptographic techniques. 
                      The system is designed to be scalable, secure, and interoperable with existing 
                      AI infrastructure.
                    </Text>
                    <Group mt="md">
                      <Badge color={currentTech.color} leftSection={<FileText size={12} />}>
                        {currentTech.whitepaper}
                      </Badge>
                    </Group>
                  </Accordion.Panel>
                </Accordion.Item>
                
                <Accordion.Item value="use-cases">
                  <Accordion.Control>
                    <Text fw={500}>Use Cases</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size={textSize} mb="md">
                      The {currentTech.title} enables a wide range of applications across industries:
                    </Text>
                    <Box pl="md">
                      <Text size={textSize} mb="xs">• Enterprise data collaboration without compromising privacy</Text>
                      <Text size={textSize} mb="xs">• Decentralized research and development in AI</Text>
                      <Text size={textSize} mb="xs">• Community-owned and governed AI services</Text>
                      <Text size={textSize} mb="xs">• Cross-organizational AI model training and deployment</Text>
                    </Box>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </MotionBox>
            
            <MotionGroup justify="center" variants={itemVariants}>
              <Tooltip label="Read whitepaper section">
                <Button 
                  variant="light" 
                  color={currentTech.color} 
                  radius="xl"
                  leftSection={<FileText size={16} />}
                >
                  Learn More
                </Button>
              </Tooltip>
              <Tooltip label="Try interactive demo">
                <Button 
                  variant="filled" 
                  color={currentTech.color} 
                  radius="xl"
                  leftSection={<Play size={16} />}
                  onClick={() => setShowDemo(true)}
                >
                  Try Demo
                </Button>
              </Tooltip>
            </MotionGroup>
          </MotionBox>
        </Box>
      </Tabs>
      
      <MotionPaper 
        radius="lg" 
        p={0} 
        withBorder
        style={{ 
          height: rem(400),
          overflow: 'hidden',
          position: 'relative'
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {showDemo && (
          <Overlay color="#000" backgroundOpacity={0.85} blur={3}>
            <Box 
              style={{ 
                height: '100%', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: rem(20)
              }}
            >
              <Title order={3} c="white" ta="center" mb="xl">
                Interactive Demo: {currentTech.title}
              </Title>
              <Text c="white" size="lg" ta="center" mb="xl">
                This would launch an interactive demo of the {currentTech.title} technology.
              </Text>
              <Group>
                <Button 
                  variant="white" 
                  color="dark"
                  leftSection={<ExternalLink size={16} />}
                  onClick={() => window.open(currentTech.demoUrl, '_blank')}
                >
                  Open Full Demo
                </Button>
                <Button 
                  variant="subtle" 
                  color="white"
                  onClick={() => setShowDemo(false)}
                >
                  Close Preview
                </Button>
              </Group>
            </Box>
          </Overlay>
        )}
        <AINetworkVisualization />
      </MotionPaper>
      
      <Text size="sm" c="dimmed" ta="center" mt="md">
        Interactive visualization of the MindHive Network ecosystem. Hover over nodes to see details.
      </Text>
    </MotionPaper>
  );
} 