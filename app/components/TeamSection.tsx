"use client";
import { Container, Title, Text, SimpleGrid, Card, Avatar, Group, rem, ActionIcon } from '@mantine/core';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Github, Linkedin, Twitter } from 'lucide-react';

const MotionCard = motion(Card);

// Team members data
const team = [
  {
    name: 'Dr. Alex Chen',
    role: 'Founder & CEO',
    bio: 'AI researcher with 15+ years experience at leading tech companies. PhD in Computer Science from Stanford.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    bio: 'Blockchain architect and former lead engineer at Ethereum Foundation. Expert in distributed systems and cryptography.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Michael Wong',
    role: 'Chief AI Scientist',
    bio: 'Former research scientist at DeepMind. Specializes in reinforcement learning and multi-agent systems.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Priya Patel',
    role: 'Head of Product',
    bio: 'Product leader with experience at Google and Meta. MBA from Harvard Business School.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'David Kim',
    role: 'Lead Blockchain Engineer',
    bio: 'Smart contract developer and security expert. Previously built DeFi protocols with $1B+ TVL.',
    avatar: 'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Emma Wilson',
    role: 'Head of Community',
    bio: 'Community builder with experience growing Web3 DAOs. Passionate about decentralized governance.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Senior ML Engineer',
    bio: 'Machine learning expert specialized in NLP and large language models. Previously at OpenAI.',
    avatar: 'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    name: 'Aisha Nakamura',
    role: 'UX/UI Designer',
    bio: 'Award-winning designer focused on creating intuitive interfaces for complex technologies.',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    links: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  }
];

export default function TeamSection() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const cols = isMobile ? 1 : 4;
  
  return (
    <Container size="lg" py={rem(60)}>
      <Title 
        order={2} 
        ta="center" 
        mb={rem(10)} 
        style={{
          fontSize: isMobile ? rem(28) : rem(36),
          background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Our Team
      </Title>
      
      <Text ta="center" mb={rem(50)} size="lg" maw={700} mx="auto">
        Meet the passionate experts behind MindHive Network, bringing together decades of experience in AI, blockchain, and distributed systems.
      </Text>
      
      <SimpleGrid cols={cols} spacing={isMobile ? "md" : "lg"}>
        {team.map((member, index) => (
          <MotionCard
            key={index}
            padding="lg"
            radius="md"
            withBorder
            shadow="sm"
            style={{ height: '100%' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            }}
          >
            <Card.Section p="md">
              <Group position="center">
                <Avatar 
                  src={member.avatar} 
                  size={120} 
                  radius={120} 
                  mx="auto"
                  style={{ 
                    border: '4px solid white',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)'
                  }}
                />
              </Group>
            </Card.Section>
            
            <Title order={4} ta="center" mt="sm">
              {member.name}
            </Title>
            
            <Text ta="center" c="dimmed" size="sm" mb="md">
              {member.role}
            </Text>
            
            <Text size="sm" lh={1.6} mb="md" style={{ flexGrow: 1 }}>
              {member.bio}
            </Text>
            
            <Group position="center" spacing="xs">
              <ActionIcon size="md" variant="subtle" color="gray" component="a" href={member.links.twitter} target="_blank">
                <Twitter size={18} />
              </ActionIcon>
              <ActionIcon size="md" variant="subtle" color="gray" component="a" href={member.links.linkedin} target="_blank">
                <Linkedin size={18} />
              </ActionIcon>
              <ActionIcon size="md" variant="subtle" color="gray" component="a" href={member.links.github} target="_blank">
                <Github size={18} />
              </ActionIcon>
            </Group>
          </MotionCard>
        ))}
      </SimpleGrid>
      
      <Text ta="center" mt={rem(60)} size="sm" c="dimmed">
        We're always looking for talented individuals to join our team. 
        <br />
        <Text component="a" href="/contact" fw={500} c="coral">
          See our open positions
        </Text>
      </Text>
    </Container>
  );
} 