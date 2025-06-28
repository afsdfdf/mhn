"use client";
import { Box, Container, Title, Text, Button, Group, rem, Paper, Badge } from '@mantine/core';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Brain, Network, Bot, Lock } from 'lucide-react';
import React from 'react';

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

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// Gradient text component
interface GradientTextProps {
  children: React.ReactNode;
  from?: string;
  to?: string;
}

const GradientText = ({ children, from = '#FF6F61', to = '#3DF5C6' }: GradientTextProps) => (
  <span style={{ 
    background: `linear-gradient(135deg, ${from}, ${to})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline-block'
  }}>
    {children}
  </span>
);

export default function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');
  
  const titleSize = isMobile ? rem(40) : rem(64);
  const textSize = isMobile ? rem(16) : rem(18);
  const buttonSize = isMobile ? 'sm' : 'md';
  const containerPadding = isMobile ? rem(40) : rem(80);
  const maxWidth = isMobile ? '100%' : rem(550);
  
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
          <MotionDiv variants={fadeInVariants}>
            <Title 
              order={1} 
              fz={titleSize} 
              lh={1.1} 
            >
              <GradientText from="#FF6F61" to="#9FEFFF">
                Decentralized
              </GradientText>
              <br /> 
              <GradientText from="#3DF5C6" to="#6B76FF">
                AI Hivemind
              </GradientText>
            </Title>
          </MotionDiv>
          
          <MotionDiv variants={fadeInVariants}>
            <Text 
              fz={textSize} 
              mt="md" 
              maw={maxWidth}
              fw={500}
              className="typing-effect"
              style={{ marginBottom: '1rem' }}
            >
              Build, monetize, and govern collaborative AI agents on-chain through the power of decentralized intelligence.
            </Text>
            <Text
              fz={textSize}
              maw={maxWidth}
              c="dimmed"
            >
              Join thousands of developers and AI enthusiasts building the future of collective intelligence.
            </Text>
          </MotionDiv>
          
          {/* Feature badges */}
          <MotionDiv variants={fadeInVariants}>
            <Group mt="md" gap="xs" wrap="wrap">
              <Badge size="lg" color="coral" leftSection={<Brain size={12} />}>
                Collective Intelligence
              </Badge>
              <Badge size="lg" color="mint" leftSection={<Network size={12} />}>
                Decentralized Network
              </Badge>
              <Badge size="lg" color="ice" leftSection={<Bot size={12} />}>
                AI Agents
              </Badge>
              <Badge size="lg" color="blue" leftSection={<Lock size={12} />}>
                On-chain Verification
              </Badge>
            </Group>
          </MotionDiv>
          
          {/* Call to action buttons */}
          <MotionDiv variants={fadeInVariants}>
            <Group mt={40}>
              <Button 
                radius="xl" 
                size={buttonSize} 
                color="coral"
                gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
                variant="gradient"
                style={{ animation: 'float 3s infinite ease-in-out' }}
              >
                Get Started
              </Button>
              
              <Button 
                radius="xl" 
                size={buttonSize} 
                variant="outline"
                color="dark"
              >
                Learn More
              </Button>
            </Group>
          </MotionDiv>
          
          {/* Mobile visualization preview */}
          {isMobile && (
            <MotionDiv variants={slideInVariants}>
              <Paper 
                mt="xl" 
                radius="xl" 
                p="xs" 
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  height: rem(200),
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, rgba(255,111,97,0.3), rgba(61,245,198,0.3))',
                    zIndex: 1,
                  }}
                />
                <Text 
                  ta="center" 
                  c="white" 
                  fw={500} 
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                  }}
                >
                  AI Network Visualization
                </Text>
              </Paper>
            </MotionDiv>
          )}
        </MotionDiv>
      </Container>
    </Box>
  );
} 