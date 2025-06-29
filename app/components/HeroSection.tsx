"use client";

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Group, Box, rem, Grid, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import Link from 'next/link';

// 简化的动画变体
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
      display: "inline-block",
    }}
  >
    {children}
  </span>
);

interface HeroSectionProps {
  isAIActive?: boolean;
}

export default function HeroSection({ isAIActive = false }: HeroSectionProps) {
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
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Container size="lg" py={containerPadding}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid gutter={40} align="center">
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 2, md: 1 }}>
              <motion.div variants={itemVariants}>
                <Title 
                  order={1} 
                  style={{ 
                    fontSize: titleSize,
                    lineHeight: 1.2,
                    fontWeight: 800,
                    textAlign: isMobile ? 'center' : 'left'
                  }}
                  mb={rem(20)}
                >
                  <GradientText>Decentralized</GradientText> <br />
                  <GradientText gradient="linear-gradient(135deg, var(--color-coral), var(--color-mint))">AI Hivemind</GradientText>
                </Title>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Text 
                  size={subtitleSize} 
                  mb={30} 
                  style={{ 
                    maxWidth: rem(500),
                    textAlign: isMobile ? 'center' : 'left'
                  }}
                  mx={isMobile ? "auto" : 0}
                >
                  Build, monetize and govern collaborative AI agents on-chain.
                  Connect AI models in a decentralized network with transparent verification.
                </Text>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Group justify={isMobile ? "center" : "flex-start"} mt={30}>
                  <Link href="/chat" style={{ textDecoration: 'none' }}>
                    <Button 
                      className="connect-wallet-btn"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>
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
            
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <Box
                style={{ 
                  height: isMobile ? rem(300) : rem(500),
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, rgba(255,111,97,0.1), rgba(61,245,198,0.1))',
                  padding: '20px',
                }}
              >
                <Image
                  src="/logo1.png"
                  alt="MindHive Network"
                  style={{ 
                    maxWidth: '80%',
                    maxHeight: '80%',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
} 