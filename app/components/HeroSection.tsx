"use client";

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Group, Box, rem, Grid, Paper } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';
import { Brain, Shield, Gift } from 'lucide-react';

// 定义动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

// 定义GradientText组件
interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
}

const GradientText = ({ children, gradient = "linear-gradient(135deg, var(--color-coral), #FF9F7D)" }: GradientTextProps) => (
  <span
    style={{
      background: gradient,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}
  >
    {children}
  </span>
);

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const titleSize = isMobile ? rem(36) : rem(60);
  const subtitleSize = isMobile ? rem(16) : rem(20);
  const containerPadding = isMobile ? rem(40) : rem(80);
  
  if (!mounted) return null;
  
  return (
    <Container size="lg" py={containerPadding}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Grid gutter={40}>
          <Grid.Col span={{ base: 12, md: 7 }}>
            <motion.div variants={itemVariants}>
              <Title 
                order={1} 
                style={{ 
                  fontSize: titleSize,
                  lineHeight: 1.2,
                  marginBottom: rem(20),
                  fontWeight: 800
                }}
              >
                <GradientText>Decentralized</GradientText> <br />
                <GradientText>AI Hivemind</GradientText>
              </Title>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Text size={subtitleSize} mb={30} style={{ maxWidth: rem(600) }}>
                Build, monetize and govern collaborative AI agents on-chain.
              </Text>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Group mt={30}>
                <Button 
                  className="connect-wallet-btn"
                  size="lg"
                >
                  Get Started
                </Button>
                <Button 
                  variant="light" 
                  size="lg"
                  radius="xl"
                >
                  Learn More
                </Button>
              </Group>
            </motion.div>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Grid>
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <motion.div 
                  initial="initial"
                  animate="float"
                  variants={floatVariants}
                  style={{ marginTop: isMobile ? 0 : rem(40) }}
                >
                  <Paper 
                    p="md" 
                    radius="md" 
                    className="feature-card-coral"
                    style={{ height: rem(180) }}
                  >
                    <Group mb="xs">
                      <Brain size={24} />
                      <Text fw={700} size="lg">Collaborate</Text>
                    </Group>
                    <Text size="sm">
                      Deploy AI agents & share models with the community
                    </Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, sm: 6 }}>
                <motion.div 
                  initial="initial"
                  animate="float"
                  variants={floatVariants}
                  style={{ animationDelay: '0.2s' }}
                >
                  <Paper 
                    p="md" 
                    radius="md" 
                    className="feature-card-mint"
                    style={{ height: rem(180) }}
                  >
                    <Group mb="xs">
                      <Shield size={24} />
                      <Text fw={700} size="lg">Secure</Text>
                    </Group>
                    <Text size="sm">
                      Immutable, auditable blockchain verification
                    </Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, sm: 12 }}>
                <motion.div 
                  initial="initial"
                  animate="float"
                  variants={floatVariants}
                  style={{ animationDelay: '0.4s' }}
                >
                  <Paper 
                    p="md" 
                    radius="md" 
                    className="feature-card-yellow"
                    style={{ height: rem(180) }}
                  >
                    <Group mb="xs">
                      <Gift size={24} />
                      <Text fw={700} size="lg">Earn Rewards</Text>
                    </Group>
                    <Text size="sm">
                      Get paid for meaningful contributions to the network
                    </Text>
                  </Paper>
                </motion.div>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </motion.div>
    </Container>
  );
} 