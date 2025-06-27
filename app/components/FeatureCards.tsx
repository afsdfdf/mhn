"use client";
import { SimpleGrid, Card, Text, ThemeIcon, rem } from '@mantine/core';
import { Brain, ShieldCheck, Gift } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';

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

// Feature data
const features = [
  {
    icon: Brain,
    title: 'Collaborate',
    description: 'Deploy AI agents & share models',
    gradient: 'coral',
    rotate: '-4deg',
  },
  {
    icon: ShieldCheck,
    title: 'Secure',
    description: 'Immutable, auditable',
    gradient: 'mint',
    rotate: '2deg',
  },
  {
    icon: Gift,
    title: 'Earn Rewards',
    description: 'Get paid for contributions',
    gradient: 'ice',
    rotate: '-3deg',
  },
];

export default function FeatureCards() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const iconSize = isMobile ? rem(40) : rem(60);
  const iconInnerSize = isMobile ? rem(24) : rem(32);
  const titleSize = isMobile ? rem(18) : rem(20);
  const descSize = isMobile ? rem(14) : rem(16);
  const cardPadding = isMobile ? rem(16) : rem(24);
  
  return (
    <MotionDiv
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="xl">
        {features.map((feature, index) => (
          <MotionDiv
            key={feature.title}
            variants={fadeInVariants}
          >
            <Card
              radius="xl"
              p={cardPadding}
              shadow="lg"
              style={{
                transform: `rotate(${feature.rotate})`,
                backgroundColor: `var(--mantine-color-${feature.gradient}-5)`,
                transition: 'transform 0.3s ease',
              }}
              className="card-float"
            >
              <ThemeIcon 
                variant="light" 
                color="white" 
                size={iconSize} 
                radius="xl"
              >
                <feature.icon size={iconInnerSize} />
              </ThemeIcon>
              <Text fw={600} fz={titleSize} mt="md" c="white">
                {feature.title}
              </Text>
              <Text fz={descSize} mt={6} c="white" opacity={0.9}>
                {feature.description}
              </Text>
            </Card>
          </MotionDiv>
        ))}
      </SimpleGrid>
    </MotionDiv>
  );
} 