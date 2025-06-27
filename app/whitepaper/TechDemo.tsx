"use client";

import { useState } from 'react';
import { Paper, Title, Text, Tabs, Box, Group, Badge, Button, Accordion, ThemeIcon, rem, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Shield, Database, Network, Cpu, Bot, Coins, Users, Lock } from 'lucide-react';
import AINetworkVisualization from '../components/AINetworkVisualization';

export default function TechDemo() {
  const [activeTab, setActiveTab] = useState<string | null>('network');
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Responsive settings
  const padding = isMobile ? rem(16) : rem(24);
  const titleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? 'sm' : 'md';
  const iconSize = isMobile ? 16 : 20;

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
      ]
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
      ]
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
      ]
    },
    governance: {
      title: 'On-Chain Governance',
      description: 'MindHive Network employs a multi-layered governance system that enables token holders to participate in protocol decisions and upgrades.',
      icon: <Users size={iconSize} />,
      color: 'yellow',
      features: [
        'Token-weighted voting on proposals',
        'Delegated expert committees',
        'Quadratic voting mechanisms',
        'Time-locked execution of changes',
        'Transparent governance dashboards'
      ]
    },
    token: {
      title: 'MHN Token Economics',
      description: 'The MHN token powers the entire ecosystem, aligning incentives among all participants and enabling decentralized governance.',
      icon: <Coins size={iconSize} />,
      color: 'blue',
      features: [
        'Payment for AI services and resources',
        'Staking for network security',
        'Governance participation rights',
        'Fee burn mechanisms for deflation',
        'Reputation multipliers for long-term holders'
      ]
    },
    security: {
      title: 'Security & Privacy',
      description: 'MindHive Network implements robust security measures and privacy-preserving techniques to protect user data and ensure system integrity.',
      icon: <Lock size={iconSize} />,
      color: 'grape',
      features: [
        'Zero-knowledge proofs for privacy',
        'Secure multi-party computation',
        'Federated learning for data privacy',
        'Formal verification of critical components',
        'Regular security audits and bug bounties'
      ]
    }
  };

  return (
    <Paper 
      radius="xl" 
      p={padding} 
      shadow="md" 
      mb={rem(40)}
      style={{
        background: isDark ? 'rgba(36, 36, 36, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <Title order={2} fz={titleSize} mb="xl" ta="center" c="coral.6">
        Technology Demonstration
      </Title>
      
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
          <Tabs.Tab value="network" leftSection={<Bot size={16} />}>
            AI Network
          </Tabs.Tab>
          <Tabs.Tab value="data" leftSection={<Database size={16} />}>
            DataDAO
          </Tabs.Tab>
          <Tabs.Tab value="compute" leftSection={<Cpu size={16} />}>
            Compute
          </Tabs.Tab>
          <Tabs.Tab value="governance" leftSection={<Users size={16} />}>
            Governance
          </Tabs.Tab>
          <Tabs.Tab value="token" leftSection={<Coins size={16} />}>
            Token
          </Tabs.Tab>
          <Tabs.Tab value="security" leftSection={<Shield size={16} />}>
            Security
          </Tabs.Tab>
        </Tabs.List>
        
        <Box mt="md">
          {Object.entries(techData).map(([key, data]) => (
            <Tabs.Panel key={key} value={key}>
              <Group mb="md">
                <ThemeIcon size="xl" radius="md" color={data.color}>
                  {data.icon}
                </ThemeIcon>
                <div>
                  <Title order={3} fz={headingSize}>{data.title}</Title>
                  <Badge color={data.color} variant="light">Core Technology</Badge>
                </div>
              </Group>
              
              <Text size={textSize} mb="lg">
                {data.description}
              </Text>
              
              <Title order={4} fz={rem(18)} mb="md">Key Features</Title>
              <Box mb="xl">
                {data.features.map((feature, index) => (
                  <Group key={index} mb="xs">
                    <ThemeIcon size="sm" radius="xl" color={data.color} variant="light">
                      •
                    </ThemeIcon>
                    <Text size={textSize}>{feature}</Text>
                  </Group>
                ))}
              </Box>
              
              <Accordion variant="separated" mb="xl">
                <Accordion.Item value="implementation">
                  <Accordion.Control>
                    <Text fw={500}>Implementation Details</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size={textSize}>
                      The {data.title} is implemented using a combination of blockchain technology, 
                      distributed systems architecture, and advanced cryptographic techniques. 
                      The system is designed to be scalable, secure, and interoperable with existing 
                      AI infrastructure.
                    </Text>
                  </Accordion.Panel>
                </Accordion.Item>
                
                <Accordion.Item value="use-cases">
                  <Accordion.Control>
                    <Text fw={500}>Use Cases</Text>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <Text size={textSize} mb="md">
                      The {data.title} enables a wide range of applications across industries:
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
              
              <Group justify="center">
                <Button variant="light" color={data.color} radius="xl">
                  Learn More
                </Button>
                <Button variant="filled" color={data.color} radius="xl">
                  Try Demo
                </Button>
              </Group>
            </Tabs.Panel>
          ))}
        </Box>
      </Tabs>
      
      <Paper 
        radius="lg" 
        p={0} 
        withBorder
        style={{ 
          height: rem(400),
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <AINetworkVisualization />
      </Paper>
      
      <Text size="sm" c="dimmed" ta="center" mt="md">
        Interactive visualization of the MindHive Network ecosystem. Hover over nodes to see details.
      </Text>
    </Paper>
  );
} 