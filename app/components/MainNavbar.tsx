"use client";
import { useEffect, useState } from 'react';
import { Container, Group, rem, Button, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

// 导航链接数据
const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/docs', label: 'Docs' },
  { link: '/whitepaper', label: 'Whitepaper' },
  { link: '/token', label: 'Token' },
  { link: '/contact', label: 'Contact' },
];

export default function MainNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 监听滚动事件和窗口大小变化
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // 导航链接项
  const navItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      onClick={close}
      style={{ 
        textDecoration: 'none', 
        color: 'inherit',
        fontWeight: 500,
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'all 0.2s ease',
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container size="lg" style={{ height: rem(60), display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span style={{ 
            fontWeight: 700, 
            fontSize: rem(24),
            background: 'linear-gradient(45deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            MindHive Network
          </span>
        </Link>

        {/* 桌面导航链接 */}
        {!isMobile ? (
          <Group gap={10}>
            {navItems}
            <Button 
              component="a"
              href="https://github.com/mindhive-network" 
              target="_blank"
              variant="gradient"
              gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
              radius="xl"
              size="sm"
              style={{ marginLeft: '8px' }}
            >
              GitHub
            </Button>
          </Group>
        ) : (
          <Burger opened={opened} onClick={toggle} size="sm" />
        )}
      </Container>

      {/* 移动端抽屉菜单 */}
      {isMobile && (
        <Drawer
          opened={opened}
          onClose={close}
          size="100%"
          padding="md"
          title="Menu"
          zIndex={1000}
        >
          <Stack>
            {navItems}
            <Button 
              component="a"
              href="https://github.com/mindhive-network" 
              target="_blank"
              variant="gradient"
              gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
              radius="xl"
              fullWidth
            >
              GitHub
            </Button>
          </Stack>
        </Drawer>
      )}
    </header>
  );
} 