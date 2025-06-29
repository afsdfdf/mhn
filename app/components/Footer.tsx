"use client";

import { Container, Group, ActionIcon, Text, Title, SimpleGrid, Stack, Anchor, Box, rem } from '@mantine/core';
import { Twitter } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';

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
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const groups = links.map((group) => {
    const items = group.links.map((link) => (
      <Link key={link.label} href={link.link} style={{ textDecoration: 'none' }}>
        <Anchor
          component="span"
          c="dimmed"
          underline="never"
          style={{ 
            transition: 'color 0.2s ease',
            fontSize: isMobile ? rem(14) : rem(16),
          }}
          className="footer-link"
        >
          {link.label}
        </Anchor>
      </Link>
    ));

    return (
      <div key={group.title}>
        <Text fw={700} mb={isMobile ? "0" : "xs"} className="gradient-text" size={isMobile ? "sm" : "md"}>
          {group.title}
        </Text>
        <Stack gap={isMobile ? "xs" : "sm"} mt={isMobile ? rem(8) : rem(16)}>
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
      }}
      mt={rem(64)}
    >
      <Container size="lg" py={isMobile ? 30 : 50}>
        <SimpleGrid 
          cols={{ base: 2, sm: 2, md: 4 }} 
          spacing={isMobile ? 20 : 50}
          verticalSpacing={isMobile ? 30 : 50}
        >
          <Stack gap={isMobile ? "xs" : "md"} style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
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
            <Text size={isMobile ? "xs" : "sm"} c="dimmed" mt={isMobile ? "xs" : "md"}>
              A collaborative network for decentralized artificial intelligence.
              {!isMobile && " Build, monetize and govern AI agents on-chain."}
            </Text>
            <Group mt={isMobile ? "xs" : "md"} gap={isMobile ? "xs" : "md"}>
              <ActionIcon 
                size={isMobile ? "md" : "lg"} 
                variant="subtle" 
                color="gray" 
                radius="xl"
                className="social-icon"
                component="a"
                href="https://twitter.com/mindhivenetwork"
                target="_blank"
              >
                <Twitter size={isMobile ? 16 : 20} />
              </ActionIcon>
              <ActionIcon 
                size={isMobile ? "md" : "lg"} 
                variant="subtle" 
                color="gray" 
                radius="xl"
                className="social-icon"
                component="a"
                href="https://t.me/mindhivenetwork"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? 16 : 20} height={isMobile ? 16 : 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.25 6a2.25 2.25 0 0 0 4.153.4l2.01-4.03 4.42 2.21a2.25 2.25 0 0 0 3.236-1.363l3-13.5a2.25 2.25 0 0 0-1.573-2.71z"></path>
                </svg>
              </ActionIcon>
            </Group>
          </Stack>
          {groups}
        </SimpleGrid>
        
        <Text c="dimmed" size={isMobile ? "xs" : "sm"} ta="center" mt={isMobile ? 30 : 50}>
          © {new Date().getFullYear()} MindHive Network. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
} 