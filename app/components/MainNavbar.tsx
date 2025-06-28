"use client";
import { useState } from 'react';
import { Container, Group, Burger, Paper, Transition, Text, Button, Box, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from './ColorSchemeToggle';
import { motion } from 'framer-motion';

const HEADER_HEIGHT = rem(60);

export default function MainNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname();
  
  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/docs', label: 'Docs' },
    { link: '/whitepaper', label: 'Whitepaper' },
    { link: '/token', label: 'Token' },
    { link: '/contact', label: 'Contact' },
  ];
  
  const items = links.map((link) => {
    const isActive = pathname === link.link;
    
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`py-2 px-3 rounded-md font-medium text-sm transition-colors ${
          isActive 
            ? 'text-coral-6 bg-coral-0' 
            : 'text-gray-700 hover:bg-gray-50'
        }`}
        onClick={close}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <Box pb={30}>
      <Paper 
        shadow="sm" 
        p="md"
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'var(--color-cream)',
          borderRadius: 'var(--border-radius-lg)',
          margin: '20px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Container style={{ height: '100%', maxWidth: '1200px' }}>
          <Group position="apart" style={{ height: '100%' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" style={{ textDecoration: 'none' }}>
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
                  <Text fw={700} size="lg" className="gradient-text">MindHive</Text>
                </Group>
              </Link>
            </motion.div>

            <Group 
              spacing={5} 
              className="hidden md:flex"
            >
              {items}
            </Group>

            <Group>
              <ColorSchemeToggle />
              <Button 
                className="connect-wallet-btn hidden md:block"
                radius="xl"
              >
                Connect Wallet
              </Button>
              <Burger
                opened={opened}
                onClick={toggle}
                className="md:hidden"
                size="sm"
              />
            </Group>
          </Group>
        </Container>
      </Paper>

      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper
            withBorder
            style={{
              ...styles,
              position: 'absolute',
              top: HEADER_HEIGHT,
              left: 0,
              right: 0,
              zIndex: 1,
              margin: '0 20px',
              backgroundColor: 'var(--color-cream)',
              borderRadius: 'var(--border-radius-md)',
            }}
          >
            <Container p="md">
              <div className="flex flex-col space-y-2">
                {items}
                <Button 
                  className="connect-wallet-btn mt-4"
                  radius="xl"
                  fullWidth
                >
                  Connect Wallet
                </Button>
              </div>
            </Container>
          </Paper>
        )}
      </Transition>
    </Box>
  );
} 