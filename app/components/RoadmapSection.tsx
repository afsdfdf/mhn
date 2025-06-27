"use client";
import { Container, Title, Timeline, Text, Paper, rem, useMantineColorScheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';

const roadmapItems = [
  {
    title: 'Phase 1: Foundation',
    description: 'Core protocol development, community building, and initial token distribution',
    date: 'Q2 2023',
    active: true,
    completed: true,
  },
  {
    title: 'Phase 2: Network Launch',
    description: 'Mainnet launch, agent marketplace, and developer tools',
    date: 'Q4 2023',
    active: true,
    completed: false,
  },
  {
    title: 'Phase 3: Ecosystem Growth',
    description: 'Cross-chain integration, advanced governance, and AI model marketplace',
    date: 'Q2 2024',
    active: false,
    completed: false,
  },
  {
    title: 'Phase 4: Global Expansion',
    description: 'Enterprise partnerships, advanced AI capabilities, and global adoption',
    date: 'Q4 2024',
    active: false,
    completed: false,
  },
];

// Motion div for animations
const MotionDiv = motion.div;

export default function RoadmapSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');
  
  // Responsive settings
  const containerPadding = isMobile ? rem(40) : rem(80);
  const titleSize = isMobile ? 24 : 32;
  const titleMargin = isMobile ? rem(20) : rem(40);
  const padding = isMobile ? 'md' : 'xl';
  const bulletSize = isMobile ? 18 : 24;
  const lineWidth = isMobile ? 1 : 2;
  const textSize = isMobile ? 'xs' : 'sm';
  const titleTextSize = isMobile ? 'sm' : 'md';

  // 动画变体 - 只保留淡入效果
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  // 只保留淡入效果
  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const 
      } 
    }
  };

  return (
    <Container size="lg" py={containerPadding}>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MotionDiv variants={fadeInVariants}>
          <Title 
            order={2} 
            ta="center" 
            mb={titleMargin} 
            c="coral.6"
            fz={titleSize}
          >
            Project Roadmap
          </Title>
        </MotionDiv>
        
        <MotionDiv variants={fadeInVariants}>
          <Paper 
            radius="xl" 
            p={padding} 
            shadow="md" 
            style={{
              background: isDark ? 'rgba(36, 36, 36, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Timeline active={1} bulletSize={bulletSize} lineWidth={lineWidth} color="coral">
              {roadmapItems.map((item, index) => (
                <Timeline.Item 
                  key={index} 
                  title={
                    <Text fw={500} fz={titleTextSize}>
                      {item.title}
                    </Text>
                  }
                  color={item.completed ? 'coral' : item.active ? 'mint' : 'ice'}
                >
                  <Text c="dimmed" size={textSize}>{item.date}</Text>
                  <Text size={textSize} mt={4}>{item.description}</Text>
                </Timeline.Item>
              ))}
            </Timeline>
          </Paper>
        </MotionDiv>
      </MotionDiv>
    </Container>
  );
} 