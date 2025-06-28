"use client";
import { Container, Title, Text, SimpleGrid, Paper, Avatar, Group, Box, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Former AI researcher at OpenAI with expertise in decentralized systems and blockchain technology.',
    image: 'https://i.pravatar.cc/300?img=1',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'PhD in Computer Science specializing in distributed systems and machine learning algorithms.',
    image: 'https://i.pravatar.cc/300?img=5',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Michael Wong',
    role: 'Lead Developer',
    bio: 'Blockchain expert with 10+ years of experience in building decentralized applications.',
    image: 'https://i.pravatar.cc/300?img=3',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Emma Garcia',
    role: 'AI Research Lead',
    bio: 'Specializes in reinforcement learning and multi-agent systems for collaborative intelligence.',
    image: 'https://i.pravatar.cc/300?img=10',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function TeamSection() {
  return (
    <Container size="lg" py={rem(60)}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title 
          order={2} 
          ta="center" 
          mb={rem(50)}
          className="gradient-text"
        >
          Meet Our Team
        </Title>
        
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={rem(30)}>
          {teamMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Paper
                p="md"
                radius="md"
                className="card-float"
                style={{
                  backgroundColor: 'var(--color-cream)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  height: '100%'
                }}
              >
                <Group justify="space-between" mb="md">
                  <Group>
                    <Avatar 
                      src={member.image} 
                      size={80} 
                      radius={16}
                      style={{ border: '2px solid var(--color-coral)' }}
                    />
                    <div>
                      <Text fw={700} size="lg" className="gradient-text">{member.name}</Text>
                      <Text size="sm" c="dimmed">{member.role}</Text>
                    </div>
                  </Group>
                  
                  <Group gap={8}>
                    <Box
                      component="a"
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--color-coral)',
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'scale(1.2)' }
                      }}
                    >
                      <Twitter size={18} />
                    </Box>
                    <Box
                      component="a"
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--color-coral)',
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'scale(1.2)' }
                      }}
                    >
                      <Github size={18} />
                    </Box>
                    <Box
                      component="a"
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: 'var(--color-coral)',
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'scale(1.2)' }
                      }}
                    >
                      <Linkedin size={18} />
                    </Box>
                  </Group>
                </Group>
                
                <Text size="sm" lh={1.6}>{member.bio}</Text>
              </Paper>
            </motion.div>
          ))}
        </SimpleGrid>
      </motion.div>
    </Container>
  );
} 