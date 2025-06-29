"use client";
import { useState, useEffect } from 'react';
import { Container, Group, Burger, Paper, Transition, Text, Button, Box, rem, Image, Accordion, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from './ColorSchemeToggle';
import classes from './MainNavbar.module.css';
import { Stack, UnstyledButton } from '@mantine/core';
import { ChevronDown, Home, BookOpen, Coins, Info, Mail, Menu, X } from 'lucide-react';

const HEADER_HEIGHT = rem(60);
const MOBILE_MENU_HEIGHT = rem(50);

export default function MainNavbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState('');
  
  // 确保组件在客户端渲染
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // 添加图标到导航项
  const links = [
    { link: '/', label: 'Home', icon: <Home size={18} /> },
    { 
      link: '#', 
      label: 'Resources',
      icon: <BookOpen size={18} />,
      links: [
        { link: '/whitepaper', label: 'Whitepaper' },
        { link: '/docs', label: 'Documentation' },
      ],
    },
    { link: '/token', label: 'Token', icon: <Coins size={18} /> },
    { link: '/about', label: 'About', icon: <Info size={18} /> },
    { link: '/contact', label: 'Contact', icon: <Mail size={18} /> },
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
  
  // 如果尚未挂载，返回null以避免水合错误
  if (!mounted) return null;

  return (
    <Box style={{ position: 'relative', zIndex: 1000 }}>
      {/* 移动端导航菜单 - 顶部 */}
      <Box
        className="md:hidden"
        style={{
          backgroundColor: 'var(--color-cream)',
          height: MOBILE_MENU_HEIGHT,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
          position: 'relative'
        }}
      >
        <Group spacing={8} style={{ width: '100%', padding: '0 16px' }}>
          {links.map((link, index) => {
            const isActive = pathname === link.link || 
              (link.links && link.links.some(sublink => pathname === sublink.link));
            
            if (link.links && link.label === 'Resources') {
              return (
                <Accordion
                  key={index}
                  variant="filled"
                  styles={{
                    control: {
                      padding: '0',
                      border: 'none',
                      backgroundColor: 'transparent',
                      '&:hover': { backgroundColor: 'transparent' }
                    },
                    item: { border: 'none' },
                    chevron: { margin: 0 },
                    panel: {
                      position: 'absolute',
                      top: MOBILE_MENU_HEIGHT,
                      left: 0,
                      width: '100%',
                      backgroundColor: 'var(--color-cream)',
                      zIndex: 1000,
                      padding: '8px 16px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                >
                  <Accordion.Item value="resources">
                    <Accordion.Control>
                      <Text 
                        size="sm" 
                        fw={isActive ? 600 : 500}
                        style={{ 
                          color: isActive ? 'var(--color-coral)' : '#3a3a3a',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {link.icon}
                        <span style={{ fontSize: '14px' }}>{link.label}</span>
                      </Text>
                    </Accordion.Control>
                    <Accordion.Panel>
                      <Stack>
                        {link.links.map((sublink, subIndex) => {
                          const isSubActive = pathname === sublink.link;
                          return (
                            <Link
                              key={subIndex}
                              href={sublink.link}
                              style={{
                                textDecoration: 'none',
                                padding: '8px',
                                borderRadius: '4px',
                                color: isSubActive ? 'var(--color-coral)' : '#3a3a3a',
                                fontWeight: isSubActive ? 600 : 500,
                                display: 'block',
                                fontSize: '14px',
                                backgroundColor: isSubActive ? 'rgba(255, 122, 92, 0.1)' : 'transparent',
                              }}
                            >
                              {sublink.label}
                            </Link>
                          );
                        })}
                      </Stack>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              );
            }
            
            return (
              <Link
                key={index}
                href={link.link}
                style={{
                  textDecoration: 'none',
                  color: isActive ? 'var(--color-coral)' : '#3a3a3a',
                  fontWeight: isActive ? 600 : 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '14px'
                }}
              >
                {link.icon}
                <span style={{ fontSize: '14px' }}>{link.label}</span>
              </Link>
            );
          })}
        </Group>
      </Box>

      {/* 主导航栏 */}
      <Paper 
        shadow="sm" 
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'var(--color-cream)',
          borderRadius: '0',
          margin: '0',
          padding: '0 16px',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <Container style={{ height: '100%', maxWidth: '1200px' }}>
          <Group justify="space-between" style={{ height: '100%' }}>
            <Link href="/" className={classes.logoContainer}>
              <Image src="/logo1.png" alt="MindHive Network" height={40} className={classes.logo} />
            </Link>

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
                className="connect-wallet-btn"
                radius="xl"
              >
                Connect Wallet
              </Button>
            </Group>
          </Group>
        </Container>
      </Paper>
    </Box>
  );
} 