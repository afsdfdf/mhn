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
    icon: <Brain size={24} />,
    color: 'coral'
  },
  {
    title: 'Secure',
    description: 'Immutable, auditable blockchain verification',
    icon: <Shield size={24} />,
    color: 'mint'
  },
  {
    title: 'Earn Rewards',
    description: 'Get paid for meaningful contributions to the network',
    icon: <Gift size={24} />,
    color: 'yellow'
  }
];

export default function FeatureHighlights() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // 根据屏幕大小调整样式
  const titleSize = isMobile ? rem(28) : rem(36);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(30) : rem(50);
  
  // 获取卡片颜色类名
  const getColorClass = (color: string) => {
    switch(color) {
      case 'coral': return 'feature-card-coral';
      case 'mint': return 'feature-card-mint';
      case 'yellow': return 'feature-card-yellow';
      default: return 'feature-card-coral';
    }
  };
  
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
                  className={`${getColorClass(feature.color)} card-float`}
                  style={{ height: '100%', minHeight: rem(180) }}
                >
                  <Group mb="md">
                    {feature.icon}
                    <Text fw={700} size="lg" c="white">
                      {feature.title}
                    </Text>
                  </Group>
                  
                  <Text size="md" c={feature.color === 'yellow' ? '#333' : 'white'} lh={1.6}>
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