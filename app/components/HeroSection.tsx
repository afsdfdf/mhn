"use client";

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Group, Box, rem, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';
import AINetworkVisualization from './AINetworkVisualization';
import Link from 'next/link';

// 定义动画变体
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const floatVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const pulseVariants: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const shimmerVariants: Variants = {
  initial: { 
    backgroundPosition: '0% 0%',
  },
  animate: {
    backgroundPosition: '100% 0%',
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

const glowVariants: Variants = {
  initial: { 
    boxShadow: '0 0 10px rgba(255,122,92,0.3)' 
  },
  animate: { 
    boxShadow: ['0 0 10px rgba(255,122,92,0.3)', '0 0 30px rgba(255,122,92,0.6)', '0 0 10px rgba(255,122,92,0.3)'],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

// 定义GradientText组件
interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
}

const GradientText = ({ children, gradient = "linear-gradient(135deg, var(--color-coral), #FF9F7D)" }: GradientTextProps) => (
  <motion.span
    initial="initial"
    animate="animate"
    variants={shimmerVariants}
    className="shimmer-text"
    style={{
      background: gradient,
      backgroundSize: '200% 100%',
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      display: "inline-block",
    }}
  >
    {children}
  </motion.span>
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
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: '0 5px 20px rgba(255,122,92,0.4)' }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href="/chat" style={{ textDecoration: 'none' }}>
                      <Button 
                        className="connect-wallet-btn"
                        size="lg"
                      >
                        Get Started
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} 
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="light" 
                      size="lg"
                      radius="xl"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </Group>
              </motion.div>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 6 }} order={{ base: 1, md: 2 }}>
              <motion.div
                initial="initial"
                animate="animate"
                variants={floatVariants}
                className="float-animation"
              >
                <Box
                  className="hero-visualization"
                  style={{ 
                    height: isMobile ? rem(300) : rem(500),
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <motion.div
                    variants={pulseVariants}
                    initial="initial"
                    animate="animate"
                    style={{ 
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    {!isMobile && <AINetworkVisualization />}
                    {isMobile && (
                      <div className="hero-visualization-mobile" style={{
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        background: 'linear-gradient(135deg, rgba(255,111,97,0.1), rgba(61,245,198,0.1))',
                        backdropFilter: 'blur(5px)',
                      }}>
                        <motion.div 
                          className="ai-icon ai-icon-pulse"
                          variants={glowVariants}
                          initial="initial"
                          animate="animate"
                        >
                          <Text size="xl" fw={700} c="white">AI</Text>
                        </motion.div>
                        <Text fw={500} ta="center">
                          Interactive AI Network Visualization
                          <br />
                          <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                            View on desktop for full experience
                          </span>
                        </Text>
                      </div>
                    )}
                  </motion.div>
                </Box>
              </motion.div>
            </Grid.Col>
          </Grid>
        </motion.div>
      </Container>
    </div>
  );
} 