"use client";

import { Container, Title, Text, Group, Paper, rem, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';
import { Brain, Shield, Gift } from 'lucide-react';

// 浮动动画变体
const floatVariants: Variants = {
  initial: { y: 0 },
  float: { 
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: [0.45, 0, 0.55, 1] // easeInOut贝塞尔曲线
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

// 特性数据
const features = [
  {
    title: 'Collaborate',
    description: 'Deploy AI agents & share models with the community',
    icon: <Brain size={24} color="white" />,
    color: '#FF6F61' // 珊瑚色
  },
  {
    title: 'Secure',
    description: 'Immutable, auditable blockchain verification',
    icon: <Shield size={24} color="white" />,
    color: '#15D9AC' // 薄荷色
  },
  {
    title: 'Earn Rewards',
    description: 'Get paid for meaningful contributions to the network',
    icon: <Gift size={24} color="#333" />,
    color: '#FFE86E' // 黄色
  }
];

export default function FeatureHighlights() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // 根据屏幕大小调整样式
  const titleSize = isMobile ? rem(28) : rem(36);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(30) : rem(50);
  
  return (
    <Container size="lg" py={containerPadding}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title 
          order={2} 
          ta="center" 
          mb={rem(40)}
          className="gradient-text"
          style={{ fontSize: titleSize }}
        >
          Key Benefits
        </Title>
        
        <Grid gutter={30}>
          {features.map((feature, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 4 }}>
              <motion.div
                variants={floatVariants}
                initial="initial"
                animate="float"
                whileHover={{ y: -5 }}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Paper
                  p={padding}
                  radius="md"
                  className="card-float"
                  style={{ 
                    height: '100%', 
                    minHeight: rem(180),
                    backgroundColor: feature.color,
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <Group mb="md">
                    {feature.icon}
                    <Text fw={700} size="lg" c={feature.color === '#FFE86E' ? '#333' : 'white'}>
                      {feature.title}
                    </Text>
                  </Group>
                  
                  <Text size="md" c={feature.color === '#FFE86E' ? '#333' : 'white'} lh={1.6}>
                    {feature.description}
                  </Text>
                </Paper>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
} 