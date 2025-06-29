"use client";
import { useState, useEffect } from 'react';
import { Container, Group, Burger, Paper, Transition, Text, Button, Box, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from './ColorSchemeToggle';
import { motion } from 'framer-motion';

const HEADER_HEIGHT = rem(60);

export default function MainNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  // 确保组件在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const links = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/docs', label: 'Docs' },
    { link: '/whitepaper', label: 'Whitepaper' },
    { link: '/token', label: 'Token' },
    { link: '/contact', label: 'Contact' },
  ];
  
  // 桌面端导航项
  const desktopItems = links.map((link) => {
    const isActive = pathname === link.link;
    
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`py-2 px-5 rounded-md font-medium text-lg transition-colors ${
          isActive 
            ? 'text-[var(--color-coral)] bg-[rgba(255,122,92,0.1)] font-bold' 
            : 'text-gray-800 hover:bg-gray-50 hover:text-[var(--color-coral)]'
        }`}
        style={{
          letterSpacing: '0.02em',
          textDecoration: 'none',
        }}
        onClick={close}
      >
        {link.label}
      </Link>
    );
  });
  
  // 移动端导航项
  const mobileItems = links.map((link) => {
    const isActive = pathname === link.link;
    
    return (
      <Link
        key={link.label}
        href={link.link}
        className={`block w-full py-3 px-4 text-base font-medium transition-colors ${
          isActive 
            ? 'text-[var(--color-coral)] bg-[rgba(255,122,92,0.1)] font-bold rounded-md' 
            : 'text-gray-800 hover:bg-gray-50 hover:text-[var(--color-coral)]'
        }`}
        style={{
          textDecoration: 'none',
        }}
        onClick={close}
      >
        {link.label}
      </Link>
    );
  });

  // 如果尚未挂载，返回null以避免水合错误
  if (!mounted) return null;

  return (
    <Box pb={30} style={{ position: 'relative' }}>
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
          <Group justify="space-between" style={{ height: '100%' }}>
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

            {/* 桌面端导航 */}
            <Group 
              gap={16} 
              className="hidden md:flex"
            >
              {desktopItems}
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
                className="block md:hidden"
                size="sm"
              />
            </Group>
          </Group>
        </Container>
      </Paper>

      {/* 移动端下拉菜单 */}
      <Transition transition="pop-top-right" duration={200} mounted={opened}>
        {(styles) => (
          <Paper
            withBorder
            style={{
              ...styles,
              position: 'absolute',
              top: `calc(${HEADER_HEIGHT} + 20px)`,
              left: '20px',
              right: '20px',
              zIndex: 100,
              backgroundColor: 'var(--color-cream)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}
          >
            <Container p="md">
              <div className="flex flex-col space-y-2">
                {mobileItems}
                <div className="my-2 border-t border-gray-200"></div>
                <Button 
                  className="connect-wallet-btn mt-3"
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