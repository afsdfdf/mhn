"use client";
import { useState, useEffect } from 'react';
import { Container, Group, Burger, Paper, Transition, Text, Button, Box, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from './ColorSchemeToggle';
import { motion } from 'framer-motion';
import classes from './MainNavbar.module.css';
import { Stack, UnstyledButton } from '@mantine/core';

const HEADER_HEIGHT = rem(60);

export default function MainNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
  
  // 确保组件在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const links = [
    { link: '/', label: 'Home' },
    { 
      link: '#', 
      label: 'Resources',
      links: [
    { link: '/whitepaper', label: 'Whitepaper' },
        { link: '/docs', label: 'Documentation' },
      ],
    },
    { link: '/token', label: 'Token' },
    { link: '/about', label: 'About' },
    { link: '/contact', label: 'Contact' },
  ];
  
  // 桌面端导航项
  const desktopItems = links.map((link) => {
    const isActive = pathname === link.link;
    
    const menuItems = link.links?.map((item) => (
      <Link
        key={item.link}
        href={item.link}
        className={classes.link}
        onClick={() => setActiveLink(item.link)}
      >
        {item.label}
      </Link>
    ));

    if (menuItems) {
      return (
        <div className={classes.dropdown} key={link.label}>
          <UnstyledButton
            className={classes.link}
            onClick={() => setActiveLink(activeLink === link.link ? '' : link.link)}
          >
            <Group gap={5} className={classes.linkInner}>
              <span>{link.label}</span>
              <span 
                style={{ width: rem(16), height: rem(16) }}
                className={classes.chevron}
              >▼</span>
            </Group>
          </UnstyledButton>
          <div className={classes.dropdownMenu}>{menuItems}</div>
        </div>
      );
    }
    
    return (
      <Link
        key={link.link}
        href={link.link}
        className={classes.link}
        onClick={() => setActiveLink(link.link)}
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
            ? 'active-nav-link' 
            : 'hover:opacity-80'
        }`}
        style={{
          textDecoration: 'none',
          fontFamily: 'var(--font-playfair)',
          color: isActive ? 'var(--color-coral)' : '#3a3a3a',
          textShadow: isActive ? '0 0 1px rgba(255,122,92,0.3)' : 'none',
          borderLeft: isActive ? '2px solid var(--color-coral)' : 'none',
          paddingLeft: isActive ? '10px' : '12px',
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
              <Link href="/" className={classes.logoContainer}>
                <Image src="/logo1.png" alt="MindHive Network" height={40} className={classes.logo} />
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