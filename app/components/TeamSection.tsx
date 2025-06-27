"use client";
import { Container, Title, SimpleGrid, Paper, Text, Group, rem, useMantineColorScheme } from '@mantine/core';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';

const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former AI researcher at DeepMind with 10+ years experience in machine learning and distributed systems.',
    image: '/team/alex.jpg',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Sophia Rodriguez',
    role: 'CTO',
    bio: 'Blockchain architect and AI specialist with background from Ethereum Foundation and Google Brain.',
    image: '/team/sophia.jpg',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Marcus Kim',
    role: 'Head of Research',
    bio: 'PhD in Distributed Systems from MIT, focused on consensus algorithms and multi-agent systems.',
    image: '/team/marcus.jpg',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
  {
    name: 'Aisha Patel',
    role: 'Product Lead',
    bio: 'Former product manager at OpenAI with expertise in AI product development and user experience.',
    image: '/team/aisha.jpg',
    social: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      github: 'https://github.com/',
    },
  },
];

// Motion div for animations
const MotionDiv = motion.div;

export default function TeamSection() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');
  
  // Responsive settings
  const containerPadding = isMobile ? rem(40) : rem(80);
  const titleSize = isMobile ? 24 : 32;
  const titleMargin = isMobile ? rem(20) : rem(40);
  const padding = isMobile ? 'md' : 'xl';
  const imageHeight = isMobile ? rem(150) : rem(200);
  const nameSize = isMobile ? 'md' : 'lg';
  const roleSize = isMobile ? 'xs' : 'sm';
  const bioSize = isMobile ? 'xs' : 'sm';
  const iconSize = isMobile ? 16 : 18;
  const lineClamp = isMobile ? 2 : 3;

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
            Our Team
          </Title>
        </MotionDiv>
        
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {teamMembers.map((member) => (
            <MotionDiv
              key={member.name}
              variants={fadeInVariants}
            >
              <Paper
                radius="xl"
                p={padding}
                shadow="md"
                style={{
                  background: isDark ? 'rgba(36, 36, 36, 0.7)' : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Image placeholder */}
                <div
                  style={{
                    width: '100%',
                    height: imageHeight,
                    borderRadius: rem(16),
                    background: `linear-gradient(135deg, var(--mantine-color-coral-${isDark ? '8' : '1'}), var(--mantine-color-mint-${isDark ? '9' : '2'}))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: rem(16),
                  }}
                >
                  <Text ta="center" c="dimmed" fz={roleSize}>
                    [Team Photo]<br />
                    {member.name}
                  </Text>
                </div>

                <Text fw={700} fz={nameSize}>{member.name}</Text>
                <Text c="dimmed" fz={roleSize} mb="xs">{member.role}</Text>
                <Text size={bioSize} mb="md" lineClamp={lineClamp}>{member.bio}</Text>
                
                <Group gap="sm">
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <Twitter size={iconSize} />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <Linkedin size={iconSize} />
                  </a>
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                    <Github size={iconSize} />
                  </a>
                </Group>
              </Paper>
            </MotionDiv>
          ))}
        </SimpleGrid>
      </MotionDiv>
    </Container>
  );
} 