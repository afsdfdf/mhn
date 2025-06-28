"use client";

import { Container, Group, ActionIcon, Text, Title, SimpleGrid, Stack, Anchor, Box } from '@mantine/core';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const links = [
  { title: 'Product', links: [
    { label: 'Features', link: '/#features' },
    { label: 'Roadmap', link: '/#roadmap' },
    { label: 'Token', link: '/token' },
    { label: 'Whitepaper', link: '/whitepaper' },
  ]},
  { title: 'Resources', links: [
    { label: 'Documentation', link: '/docs' },
    { label: 'API Reference', link: '/docs#api' },
    { label: 'SDK', link: '/docs#sdk' },
    { label: 'Examples', link: '/docs#examples' },
  ]},
  { title: 'Company', links: [
    { label: 'About', link: '/about' },
    { label: 'Team', link: '/about#team' },
    { label: 'Contact', link: '/contact' },
    { label: 'Blog', link: 'https://blog.mindhive.network' },
  ]},
];

export default function Footer() {
  const groups = links.map((group) => {
    const items = group.links.map((link) => (
      <Link key={link.label} href={link.link} passHref>
        <Anchor
          component="a"
          c="dimmed"
          style={{ 
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            '&:hover': {
              color: 'var(--color-coral)',
            },
          }}
        >
          {link.label}
        </Anchor>
      </Link>
    ));

    return (
      <div key={group.title}>
        <Text fw={700} mb="xs" className="gradient-text">{group.title}</Text>
        <Stack gap="xs" style={{ marginTop: '1rem' }}>
          {items}
        </Stack>
      </div>
    );
  });

  return (
    <Box 
      component="footer"
      style={{
        backgroundColor: 'var(--color-cream)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px 24px 0 0',
        marginTop: '4rem',
      }}
    >
      <Container size="lg" py={50}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
          <Stack>
            <Group>
              <Box 
                style={{ 
                  width: '30px', 
                  height: '30px', 
                  backgroundColor: 'var(--color-mint)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text fw={700} c="white">M</Text>
              </Box>
              <Title order={4} className="gradient-text">MindHive</Title>
            </Group>
            <Text size="sm" c="dimmed" mt="md">
              A collaborative network for decentralized artificial intelligence.
              Build, monetize and govern AI agents on-chain.
            </Text>
            <Group mt="md">
              <ActionIcon 
                size="lg" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                style={{
                  '&:hover': {
                    backgroundColor: 'var(--color-coral)',
                    color: 'white',
                  },
                }}
              >
                <Twitter size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                style={{
                  '&:hover': {
                    backgroundColor: 'var(--color-coral)',
                    color: 'white',
                  },
                }}
              >
                <Github size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                style={{
                  '&:hover': {
                    backgroundColor: 'var(--color-coral)',
                    color: 'white',
                  },
                }}
              >
                <Linkedin size={20} />
              </ActionIcon>
              <ActionIcon 
                size="lg" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                style={{
                  '&:hover': {
                    backgroundColor: 'var(--color-coral)',
                    color: 'white',
                  },
                }}
              >
                <Mail size={20} />
              </ActionIcon>
            </Group>
          </Stack>
          {groups}
        </SimpleGrid>
        
        <Text c="dimmed" size="sm" ta="center" mt={50}>
          © {new Date().getFullYear()} MindHive Network. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
} 