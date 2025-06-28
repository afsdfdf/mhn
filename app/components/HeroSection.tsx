"use client";
import { useState, useEffect } from 'react';
import { Box, Container, Title, Text, Button, Group, rem, Paper, Badge, Grid } from '@mantine/core';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Brain, Network, Bot, Lock, Shield, Gift } from 'lucide-react';
import React from 'react';
import dynamic from 'next/dynamic';

// 动态导入TypeAnimation组件
const TypeAnimation = dynamic(() => import('react-type-animation'), { ssr: false });

// Motion div for animations
const MotionDiv = motion.div;

// Animation variants
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const floatVariants = {
  initial: { y: 0 },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  }
};

// Gradient text component
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
  const isTablet = useMediaQuery('(max-width: 992px)');
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const titleSize = isMobile ? rem(36) : rem(60);
  const subtitleSize = isMobile ? rem(16) : rem(20);
  const containerPadding = isMobile ? rem(40) : rem(80);
  const maxWidth = isMobile ? '100%' : rem(550);
  
  if (!mounted) return null;
  
  return (
    <Box
      pos="relative"
      style={{
        overflow: 'hidden',
        minHeight: isMobile ? rem(500) : rem(600),
      }}
    >
      {/* Background blobs with enhanced glow */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          left: '-10%',
          width: rem(480),
          height: rem(480),
          borderRadius: '60%',
          background: 'radial-gradient(circle, rgba(255,111,97,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: -1,
          animation: 'pulse 8s infinite alternate',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '25%',
          right: '-15%',
          width: rem(480),
          height: rem(480),
          borderRadius: '60%',
          background: 'radial-gradient(circle, rgba(61,245,198,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: -1,
          animation: 'pulse 12s infinite alternate-reverse',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '45%',
          width: rem(480),
          height: rem(480),
          borderRadius: '60%',
          background: 'radial-gradient(circle, rgba(159,239,255,0.7) 0%, transparent 70%)',
          filter: 'blur(120px)',
          zIndex: -1,
          animation: 'pulse 10s infinite alternate',
        }}
      />

      {/* Add pulsing animation styles */}
      <style jsx global>{`
        @keyframes pulse {
          0% {
            opacity: 0.5;
            transform: scale(0.95);
          }
          100% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        
        .typing-effect {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end);
        }
      `}</style>

      <Container 
        size="lg" 
        h="100%" 
        py={containerPadding}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Grid gutter={40}>
            <Grid.Col span={{ base: 12, md: 7 }}>
              <MotionDiv variants={itemVariants}>
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
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
                <Text size={subtitleSize} mb={30} style={{ maxWidth: rem(600) }}>
                  {mounted && (
                    <TypeAnimation
                      sequence={[
                        'Build, monetize and govern collaborative AI agents on-chain.',
                        2000,
                        'Deploy your AI models and earn rewards from the community.',
                        2000,
                        'Join the decentralized future of artificial intelligence.',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  )}
                </Text>
              </MotionDiv>
              
              <MotionDiv variants={itemVariants}>
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
              </MotionDiv>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <MotionDiv 
                    variants={floatVariants}
                    initial="initial"
                    animate="float"
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
                  </MotionDiv>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <MotionDiv 
                    variants={floatVariants}
                    initial="initial"
                    animate="float"
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
                  </MotionDiv>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, sm: 12 }}>
                  <MotionDiv 
                    variants={floatVariants}
                    initial="initial"
                    animate="float"
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
                  </MotionDiv>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </MotionDiv>
      </Container>
    </Box>
  );
} 