"use client";
import { Container, Title, Text, Timeline, Paper, rem, ThemeIcon, Group, Badge } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Check, Clock, Rocket, Code, Users, Zap, Server, Globe, Lock } from 'lucide-react';

// 使用更具体的类型定义以解决类型错误
const MotionDiv = motion.div;

// Roadmap data with detailed information
const roadmapData = [
  {
    title: 'Protocol Development',
    date: 'Q2 2025',
    description: 'Development of core protocol architecture and smart contracts for on-chain verification of AI computations.',
    status: 'planned',
    icon: <Code size={16} />,
    color: 'coral',
    achievements: [
      'Core protocol design',
      'Smart contract architecture',
      'On-chain verification mechanism',
      'Whitepaper publication'
    ]
  },
  {
    title: 'Testnet Launch',
    date: 'Q4 2025',
    description: 'Launch of the MindHive testnet with initial AI agent deployment capabilities and basic network operations.',
    status: 'planned',
    icon: <Server size={16} />,
    color: 'mint',
    achievements: [
      'Testnet deployment',
      'Initial AI agent framework',
      'Developer documentation',
      'Early partner onboarding'
    ]
  },
  {
    title: 'Mainnet Alpha',
    date: 'Q1 2026',
    description: 'Limited mainnet launch with core features and initial token distribution to early supporters and contributors.',
    status: 'planned',
    icon: <Rocket size={16} />,
    color: 'ice',
    achievements: [
      'Mainnet security audit',
      'Token generation event',
      'Governance framework',
      'Initial marketplace features'
    ]
  },
  {
    title: 'DataDAO Framework',
    date: 'Q3 2026',
    description: 'Introduction of the DataDAO framework for collective ownership and governance of AI training datasets.',
    status: 'planned',
    icon: <Users size={16} />,
    color: 'blue',
    achievements: [
      'DAO creation toolkit',
      'Data contribution mechanism',
      'Revenue distribution system',
      'Privacy-preserving data access'
    ]
  },
  {
    title: 'Full Mainnet Launch',
    date: 'Q4 2026',
    description: 'Complete mainnet launch with all core features, expanded marketplace, and comprehensive developer tools.',
    status: 'planned',
    icon: <Globe size={16} />,
    color: 'coral',
    achievements: [
      'Full feature set deployment',
      'Expanded partner ecosystem',
      'Developer grants program',
      'Cross-chain interoperability'
    ]
  },
  {
    title: 'Advanced Features',
    date: 'Q2 2027',
    description: 'Introduction of advanced features including zero-knowledge proofs for private AI computations and cross-chain integration.',
    status: 'planned',
    icon: <Lock size={16} />,
    color: 'mint',
    achievements: [
      'Zero-knowledge AI computation',
      'Cross-chain asset bridge',
      'Advanced governance features',
      'Enterprise integration tools'
    ]
  }
];

export default function RoadmapSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <Container size="lg" py={rem(60)}>
      <Title 
        order={2} 
        ta="center" 
        mb={rem(10)} 
        style={{
          fontSize: isMobile ? rem(28) : rem(36),
          background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Development Roadmap
      </Title>
      
      <Text ta="center" mb={rem(50)} size="lg" maw={700} mx="auto">
        Our journey to build the decentralized AI network of the future, with key milestones and upcoming features.
      </Text>
      
      <MotionDiv
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          padding: isMobile ? rem(20) : rem(40),
          borderRadius: 'var(--mantine-radius-lg)',
          boxShadow: 'var(--mantine-shadow-md)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Timeline active={2} bulletSize={28} lineWidth={2}>
          {roadmapData.map((item, index) => (
            <Timeline.Item
              key={index}
              bullet={
                <ThemeIcon 
                  size={28} 
                  radius="xl" 
                  color={item.color}
                  variant={item.status === 'completed' ? 'filled' : 'light'}
                >
                  {item.status === 'completed' ? <Check size={16} /> : item.icon}
                </ThemeIcon>
              }
              title={
                <Group mb={4}>
                  <Text fw={700}>{item.title}</Text>
                  <Badge 
                    color={
                      item.status === 'completed' ? 'green' : 
                      item.status === 'in-progress' ? 'blue' : 
                      'gray'
                    }
                    variant="light"
                  >
                    {item.status === 'completed' ? 'Completed' : 
                     item.status === 'in-progress' ? 'In Progress' : 
                     'Planned'}
                  </Badge>
                </Group>
              }
            >
              <Text size="sm" c="dimmed">{item.date}</Text>
              <Text size="sm" mt="xs" mb="md">{item.description}</Text>
              
              <Group gap="xs" mb="xs">
                {item.achievements.map((achievement, i) => (
                  <Badge key={i} size="sm" variant="dot" color={item.color}>
                    {achievement}
                  </Badge>
                ))}
              </Group>
            </Timeline.Item>
          ))}
        </Timeline>
      </MotionDiv>
      
      <Group justify="center" mt={rem(40)}>
        <Badge size="lg" leftSection={<Clock size={14} />}>
          Last Updated: June 2025
        </Badge>
      </Group>
    </Container>
  );
} 