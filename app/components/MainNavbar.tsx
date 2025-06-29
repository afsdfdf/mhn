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
      {/* 导航栏 */}
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
                className="connect-wallet-btn hidden md:block"
                radius="xl"
              >
                Connect Wallet
              </Button>
              
              {/* 移动端导航按钮 */}
              <Box className="md:hidden">
                <Accordion
                  variant="filled"
                  chevron={
                    opened ? 
                    <X size={18} /> : 
                    <Menu size={18} />
                  }
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
                      top: HEADER_HEIGHT,
                      right: 0,
                      width: '100vw',
                      backgroundColor: 'var(--color-cream)',
                      borderRadius: '0 0 16px 16px',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      padding: '0',
                      marginLeft: '-16px',
                      zIndex: 1000
                    }
                  }}
                >
                  <Accordion.Item value="menu">
                    <Accordion.Control onClick={toggle}></Accordion.Control>
                    <Accordion.Panel>
                      <Box p="md">
                        {/* 直接导航链接 */}
                        <Stack>
                          {links.map((link, index) => {
                            // 对于所有链接，无论是否有子链接，都创建一个简单的链接
                            if (link.links) {
                              // 对于有子链接的项，创建一个包含子链接的组
                              return (
                                <Box key={index} mb={8}>
                                  <Text 
                                    fw={600} 
                                    size="md" 
                                    mb="xs"
                                    style={{ 
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      color: '#3a3a3a'
                                    }}
                                  >
                                    <Box style={{ color: '#666' }}>
                                      {link.icon}
                                    </Box>
                                    {link.label}
                                  </Text>
                                  <Stack pl="md">
                                    {link.links.map((sublink, subIndex) => {
                                      const isSubActive = pathname === sublink.link;
                                      return (
                                        <Link
                                          key={subIndex}
                                          href={sublink.link}
                                          style={{
                                            textDecoration: 'none',
                                            padding: '8px 12px',
                                            borderRadius: '6px',
                                            color: isSubActive ? 'var(--color-coral)' : '#3a3a3a',
                                            fontWeight: isSubActive ? 600 : 500,
                                            display: 'block',
                                            backgroundColor: isSubActive ? 'rgba(255, 122, 92, 0.1)' : 'transparent',
                                            borderLeft: isSubActive ? '3px solid var(--color-coral)' : '3px solid transparent',
                                          }}
                                          onClick={close}
                                        >
                                          {sublink.label}
                                        </Link>
                                      );
                                    })}
                                  </Stack>
                                </Box>
                              );
                            }
                            
                            // 如果没有子链接，创建一个简单的链接
                            const isActive = pathname === link.link;
                            return (
                              <Link
                                key={index}
                                href={link.link}
                                style={{
                                  textDecoration: 'none',
                                  padding: '12px',
                                  borderRadius: '8px',
                                  backgroundColor: isActive ? 'rgba(255, 122, 92, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                                  color: isActive ? 'var(--color-coral)' : '#3a3a3a',
                                  fontWeight: isActive ? 600 : 500,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '12px',
                                  marginBottom: '8px'
                                }}
                                onClick={close}
                              >
                                <Box style={{ color: isActive ? 'var(--color-coral)' : '#666' }}>
                                  {link.icon}
                                </Box>
                                <Text size="md">{link.label}</Text>
                              </Link>
                            );
                          })}
                        </Stack>
                        
                        <Divider my="md" />
                        
                        <Button 
                          className="connect-wallet-btn"
                          radius="xl"
                          fullWidth
                          size="md"
                          style={{
                            boxShadow: '0 4px 12px rgba(255, 111, 97, 0.3)',
                            fontWeight: 600
                          }}
                        >
                          Connect Wallet
                        </Button>
                      </Box>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Box>
            </Group>
          </Group>
        </Container>
      </Paper>
    </Box>
  );
} 