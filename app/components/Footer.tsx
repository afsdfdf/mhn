"use client";

import { Container, Group, ActionIcon, Text, Title, SimpleGrid, Stack, Anchor, Box, rem, Divider, Accordion } from '@mantine/core';
import { Twitter, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useMediaQuery } from '@mantine/hooks';
import { useState } from 'react';

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
  
  // 桌面版页脚链接组
  const desktopGroups = links.map((group) => {
    const items = group.links.map((link) => (
      <Link key={link.label} href={link.link} style={{ textDecoration: 'none' }}>
        <Anchor
          component="span"
          c="dimmed"
          underline="never"
          style={{ 
            transition: 'color 0.2s ease',
            fontSize: rem(16),
          }}
          className="footer-link"
        >
          {link.label}
        </Anchor>
      </Link>
    ));

    return (
      <div key={group.title}>
        <Text fw={700} mb="xs" className="gradient-text" size="md">
          {group.title}
        </Text>
        <Stack gap="sm" mt={rem(16)}>
          {items}
        </Stack>
      </div>
    );
  });
  
  // 移动端页脚折叠菜单
  const mobileAccordion = (
    <Accordion 
      variant="separated" 
      radius="md" 
      styles={{
        item: {
          border: 'none',
          backgroundColor: 'transparent',
          marginBottom: 5,
        },
        control: {
          padding: '8px 0',
        },
        content: {
          padding: '0 0 8px 8px',
        },
        chevron: {
          width: rem(20),
          height: rem(20),
        }
      }}
    >
      {links.map((group) => (
        <Accordion.Item key={group.title} value={group.title}>
          <Accordion.Control>
            <Text fw={600} size="sm" className="gradient-text">
              {group.title}
            </Text>
          </Accordion.Control>
          <Accordion.Panel>
            <Stack gap={8}>
              {group.links.map((link) => (
                <Link key={link.label} href={link.link} style={{ textDecoration: 'none' }}>
                  <Text 
                    size="xs" 
                    c="dimmed"
                    style={{ transition: 'color 0.2s ease' }}
                    className="footer-link"
                  >
                    {link.label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );

  return (
    <Box 
      component="footer"
      style={{
        backgroundColor: 'var(--color-cream)',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(10px)',
        borderRadius: '24px 24px 0 0',
      }}
      mt={rem(40)}
    >
      <Container size="lg" py={isMobile ? 20 : 50}>
        {/* 移动端布局 */}
        {isMobile ? (
          <>
            <Group justify="center" mb={20}>
              <Box 
                style={{ 
                  width: '24px', 
                  height: '24px', 
                  backgroundColor: 'var(--color-mint)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text fw={700} c="white" size="xs">M</Text>
              </Box>
              <Title order={5} className="gradient-text">MindHive</Title>
            </Group>
            
            <Text size="xs" c="dimmed" ta="center" mb={20}>
              A collaborative network for decentralized AI.
            </Text>
            
            <Divider my={15} />
            
            {mobileAccordion}
            
            <Divider my={15} />
            
            <Group justify="center" mb={15}>
              <ActionIcon 
                size="md" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                className="social-icon"
                component="a"
                href="https://twitter.com/mindhivenetwork"
                target="_blank"
              >
                <Twitter size={16} />
              </ActionIcon>
              <ActionIcon 
                size="md" 
                variant="subtle" 
                color="gray" 
                radius="xl"
                className="social-icon"
                component="a"
                href="https://t.me/mindhivenetwork"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.25 6a2.25 2.25 0 0 0 4.153.4l2.01-4.03 4.42 2.21a2.25 2.25 0 0 0 3.236-1.363l3-13.5a2.25 2.25 0 0 0-1.573-2.71z"></path>
                </svg>
              </ActionIcon>
            </Group>
          </>
        ) : (
          // 桌面端布局
          <SimpleGrid 
            cols={{ base: 1, sm: 2, md: 4 }} 
            spacing={50}
            verticalSpacing={50}
          >
            <Stack gap="md">
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
              <Group mt="md" gap="md">
                <ActionIcon 
                  size="lg" 
                  variant="subtle" 
                  color="gray" 
                  radius="xl"
                  className="social-icon"
                  component="a"
                  href="https://twitter.com/mindhivenetwork"
                  target="_blank"
                >
                  <Twitter size={20} />
                </ActionIcon>
                <ActionIcon 
                  size="lg" 
                  variant="subtle" 
                  color="gray" 
                  radius="xl"
                  className="social-icon"
                  component="a"
                  href="https://t.me/mindhivenetwork"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.25 6a2.25 2.25 0 0 0 4.153.4l2.01-4.03 4.42 2.21a2.25 2.25 0 0 0 3.236-1.363l3-13.5a2.25 2.25 0 0 0-1.573-2.71z"></path>
                  </svg>
                </ActionIcon>
              </Group>
            </Stack>
            {desktopGroups}
          </SimpleGrid>
        )}
        
        <Text c="dimmed" size="xs" ta="center" mt={isMobile ? 15 : 50}>
          © {new Date().getFullYear()} MindHive Network. All rights reserved.
        </Text>
      </Container>
    </Box>
  );
} 