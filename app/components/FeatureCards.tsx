"use client";
import { Container, Title, Text, SimpleGrid, Paper, Group, ThemeIcon, rem } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Brain, Network, Database, Cpu, Lock, Users, Coins, Zap } from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Feature data with direct color values
const features = [
  {
    title: 'Collective Intelligence',
    description: 'Combine the power of multiple AI models to solve complex problems that individual models cannot.',
    icon: <Brain size={24} />,
    color: '#FF6F61' // 珊瑚色
  },
  {
    title: 'Decentralized Network',
    description: 'A fully decentralized network of AI agents that operate without central authority or control.',
    icon: <Network size={24} />,
    color: '#15D9AC' // 薄荷色
  },
  {
    title: 'DataDAO Framework',
    description: 'Community-owned and governed datasets with fair compensation for contributors.',
    icon: <Database size={24} />,
    color: '#FFE86E' // 黄色
  },
  {
    title: 'Compute Marketplace',
    description: 'Connect AI workloads with computational resources in an efficient, decentralized manner.',
    icon: <Cpu size={24} />,
    color: '#62D9F7' // 蓝色
  },
  {
    title: 'Privacy Preserving',
    description: 'Advanced techniques for training AI models while preserving data privacy and security.',
    icon: <Lock size={24} />,
    color: '#FF6F61' // 珊瑚色
  },
  {
    title: 'Community Governance',
    description: 'Token-based governance allowing stakeholders to guide the development of the platform.',
    icon: <Users size={24} />,
    color: '#15D9AC' // 薄荷色
  },
  {
    title: 'Token Economics',
    description: 'Carefully designed incentive structure to reward valuable contributions to the network.',
    icon: <Coins size={24} />,
    color: '#FFE86E' // 黄色
  },
  {
    title: 'Composable AI',
    description: 'Build complex AI workflows by combining specialized agents with different capabilities.',
    icon: <Zap size={24} />,
    color: '#62D9F7' // 蓝色
  }
];

export default function FeatureCards() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container size="lg" py={containerPadding}>
        <Title 
          order={2} 
          ta="center" 
          mb={rem(50)}
          className="gradient-text"
          style={{ fontSize: titleSize }}
        >
          Platform Features
        </Title>
        
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={rem(20)}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <Paper
                p={padding}
                radius="md"
                className="card-float"
                style={{ 
                  height: '100%',
                  backgroundColor: feature.color,
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                <Group mb="md">
                  <ThemeIcon 
                    size={44} 
                    radius="md" 
                    variant="light"
                    color="white"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                  >
                    {feature.icon}
                  </ThemeIcon>
                  <Text fw={700} size="lg" c={feature.color === '#FFE86E' ? '#333' : 'white'}>
                    {feature.title}
                  </Text>
                </Group>
                
                <Text size="sm" c={feature.color === '#FFE86E' ? '#333' : 'white'} lh={1.6}>
                  {feature.description}
                </Text>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>
    </motion.div>
  );
} 