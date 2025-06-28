"use client";
import { Container, SimpleGrid, Card, Text, Title, rem, Group, Badge, Box } from '@mantine/core';
import { Brain, Network, Lock, Bot, Server, Database, Users, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';

const MotionCard = motion(Card);

// Feature data with icons and descriptions
const features = [
  {
    title: 'Decentralized AI Network',
    description: 'Connect and collaborate with AI agents across a distributed network, ensuring no single point of failure or control.',
    icon: <Network size={24} />,
    color: 'coral',
    badge: 'Core'
  },
  {
    title: 'On-chain Verification',
    description: 'All AI computations are verified and recorded on-chain, providing transparency and auditability.',
    icon: <Lock size={24} />,
    color: 'mint',
    badge: 'Security'
  },
  {
    title: 'Collaborative Intelligence',
    description: 'Leverage the power of multiple AI models working together to solve complex problems.',
    icon: <Brain size={24} />,
    color: 'ice',
    badge: 'Innovation'
  },
  {
    title: 'AI Agent Marketplace',
    description: 'Deploy, discover, and monetize specialized AI agents for various tasks and industries.',
    icon: <Bot size={24} />,
    color: 'blue',
    badge: 'Ecosystem'
  },
  {
    title: 'Compute Marketplace',
    description: 'Access distributed computational resources for training and running AI models efficiently.',
    icon: <Server size={24} />,
    color: 'coral',
    badge: 'Infrastructure'
  },
  {
    title: 'DataDAO Framework',
    description: 'Collectively own, govern, and monetize datasets through decentralized autonomous organizations.',
    icon: <Database size={24} />,
    color: 'mint',
    badge: 'Governance'
  },
  {
    title: 'Community Governance',
    description: 'Participate in protocol decisions through token-based voting and delegation mechanisms.',
    icon: <Users size={24} />,
    color: 'ice',
    badge: 'Participation'
  },
  {
    title: 'Privacy-Preserving AI',
    description: 'Utilize advanced techniques to train models while protecting sensitive data and user privacy.',
    icon: <Shield size={24} />,
    color: 'blue',
    badge: 'Privacy'
  }
];

export default function FeatureCards() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const cols = isMobile ? 1 : 4;
  
  return (
    <Container size="lg" py={rem(60)}>
      <Title 
        order={2} 
        ta="center" 
        mb={rem(50)} 
        style={{
          fontSize: isMobile ? rem(28) : rem(36),
          background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Platform Features
      </Title>
      
      <SimpleGrid cols={cols} spacing={isMobile ? "md" : "lg"}>
        {features.map((feature, index) => (
          <MotionCard
            key={index}
            padding="xl"
            radius="lg"
            withBorder
            shadow="sm"
            style={{
              height: '100%',
              background: `linear-gradient(135deg, var(--mantine-color-${feature.color}-0), var(--mantine-color-${feature.color}-1))`,
              border: `1px solid var(--mantine-color-${feature.color}-2)`,
              transition: 'all 0.3s ease',
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              background: `linear-gradient(135deg, var(--mantine-color-${feature.color}-1), var(--mantine-color-${feature.color}-2))`,
            }}
          >
            <Group mb="md">
              <Box
                style={{
                  width: rem(50),
                  height: rem(50),
                  borderRadius: '50%',
                  background: `var(--mantine-color-${feature.color}-1)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: `var(--mantine-color-${feature.color}-6)`,
                }}
              >
                {feature.icon}
              </Box>
              <Badge color={feature.color} variant="light">
                {feature.badge}
              </Badge>
            </Group>
            
            <Title order={3} fw={600} fz={rem(20)} mb="xs">
              {feature.title}
            </Title>
            
            <Text size="sm" c="dimmed" lh={1.6}>
              {feature.description}
            </Text>
          </MotionCard>
        ))}
      </SimpleGrid>
    </Container>
  );
} 