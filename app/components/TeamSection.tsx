"use client";
import { Container, Title, Text, SimpleGrid, Paper, Avatar, Group, Box, rem, Image } from '@mantine/core';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

// Team members data
const teamMembers = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Co-Founder & CEO',
    bio: 'Former AI research lead at DeepMind with a Ph.D. in Computer Science from Stanford University.',
    image: '/images/team/sarah.jpg',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Marcus Johnson',
    role: 'Co-Founder & CTO',
    bio: 'Blockchain architect with experience at Ethereum Foundation and a background in distributed systems.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Dr. Aisha Patel',
    role: 'Chief Research Officer',
    bio: 'Leading expert in federated learning and privacy-preserving AI with 15+ years of research experience.',
    image: '/images/team/aisha.jpg',
    social: {
      twitter: 'https://twitter.com',
      github: 'https://github.com',
      linkedin: 'https://linkedin.com'
    }
  },
  {
    name: 'Miguel Rodriguez',
    role: 'Chief Strategy Officer',
    bio: 'Former strategy consultant with expertise in tokenomics and DAO governance structures.',
    image: '/images/team/miguel.jpg',
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
        <Group justify="center" mb={rem(20)}>
          <Image 
            src="/images/leadership/team_logo.png" 
            alt="MindHive Team" 
            width={80} 
            height={80}
            style={{ borderRadius: '50%' }}
          />
        </Group>
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
                    <div style={{ position: 'relative' }}>
                      <Avatar 
                        src={member.image} 
                        size={80} 
                        radius={16}
                        style={{ border: '2px solid var(--color-coral)' }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: -5, 
                        right: -5, 
                        width: 24, 
                        height: 24, 
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '1px solid white'
                      }}>
                        <Image 
                          src="/images/leadership/team_logo.png" 
                          alt="MindHive" 
                          width={24} 
                          height={24}
                        />
                      </div>
                    </div>
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