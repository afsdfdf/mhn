"use client";

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Group, Box, rem, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

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
          <Grid.Col span={{ base: 12, md: 8 }} mx="auto">
            <motion.div variants={itemVariants}>
              <Title 
                order={1} 
                style={{ 
                  fontSize: titleSize,
                  lineHeight: 1.2,
                  marginBottom: rem(20),
                  fontWeight: 800,
                  textAlign: 'center'
                }}
              >
                <GradientText>Decentralized</GradientText> <br />
                <GradientText>AI Hivemind</GradientText>
              </Title>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Text 
                size={subtitleSize} 
                mb={30} 
                style={{ 
                  maxWidth: rem(700),
                  margin: '0 auto',
                  textAlign: 'center' 
                }}
              >
                Build, monetize and govern collaborative AI agents on-chain.
              </Text>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Group justify="center" mt={30}>
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
        </Grid>
      </motion.div>
    </Container>
  );
} 