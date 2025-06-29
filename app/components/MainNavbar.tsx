"use client";
import { useState, useEffect } from 'react';
import { Container, Group, Burger, Paper, Transition, Text, Button, Box, rem, Image, Accordion, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorSchemeToggle from './ColorSchemeToggle';
import { motion } from 'framer-motion';
import classes from './MainNavbar.module.css';
import { Stack, UnstyledButton } from '@mantine/core';
import { ChevronDown, Home, BookOpen, Coins, Info, Mail, Menu } from 'lucide-react';

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

      {/* 移动端风琴式导航菜单 - 优化版 */}
      <Transition 
        transition={{
          in: { opacity: 1, transform: 'translateY(0)' },
          out: { opacity: 0, transform: 'translateY(-20px)' },
          transitionProperty: 'transform, opacity',
        }} 
        duration={300} 
        mounted={opened}
      >
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
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              maxHeight: 'calc(100vh - 120px)',
              overflowY: 'auto'
            }}
          >
            <Box p="md">
              {/* 移动导航标题 */}
              <Group mb="md" justify="apart">
                <Text fw={600} size="lg" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Menu
                </Text>
                <Menu size={20} />
              </Group>
              
              <Divider mb="md" />
              
              {/* 优化的风琴式菜单 */}
              <Accordion 
                variant="filled" 
                radius="md"
                styles={{
                  item: {
                    border: 'none',
                    marginBottom: '8px',
                    overflow: 'hidden',
                    backgroundColor: 'transparent',
                  },
                  control: {
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    },
                  },
                  panel: {
                    padding: '0',
                    paddingTop: '8px',
                  },
                  chevron: {
                    transition: 'transform 300ms ease',
                  },
                }}
              >
                {links.map((link, index) => {
                  const isActive = pathname === link.link;
                  
                  // 如果有子链接，创建一个手风琴项
                  if (link.links) {
                    const hasActiveChild = link.links.some(sublink => pathname === sublink.link);
                    
                    return (
                      <Accordion.Item 
                        key={index} 
                        value={link.label}
                      >
                        <Accordion.Control
                          icon={
                            <Box style={{ 
                              color: hasActiveChild ? 'var(--color-coral)' : '#666',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              {link.icon}
                            </Box>
                          }
                          style={{
                            fontFamily: 'var(--font-playfair)',
                            color: hasActiveChild ? 'var(--color-coral)' : '#3a3a3a',
                            fontWeight: 500,
                          }}
                        >
                          {link.label}
                        </Accordion.Control>
                        <Accordion.Panel>
                          <Box pl="md">
                            {link.links.map((sublink, subIndex) => {
                              const isSubActive = pathname === sublink.link;
                              
                              return (
                                <Link
                                  key={subIndex}
                                  href={sublink.link}
                                  style={{
                                    textDecoration: 'none',
                                    padding: '12px 16px',
                                    borderRadius: '8px',
                                    color: isSubActive ? 'var(--color-coral)' : '#3a3a3a',
                                    fontWeight: isSubActive ? 600 : 500,
                                    display: 'block',
                                    marginBottom: '6px',
                                    backgroundColor: isSubActive ? 'rgba(255, 122, 92, 0.1)' : 'transparent',
                                    borderLeft: isSubActive ? '3px solid var(--color-coral)' : '3px solid transparent',
                                    transition: 'all 0.2s ease',
                                  }}
                                  onClick={close}
                                >
                                  {sublink.label}
                                </Link>
                              );
                            })}
                          </Box>
                        </Accordion.Panel>
                      </Accordion.Item>
                    );
                  }
                  
                  // 如果没有子链接，创建一个普通链接
                  return (
                    <Link
                      key={index}
                      href={link.link}
                      style={{
                        textDecoration: 'none',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        backgroundColor: isActive ? 'rgba(255, 122, 92, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                        color: isActive ? 'var(--color-coral)' : '#3a3a3a',
                        fontFamily: 'var(--font-playfair)',
                        fontWeight: isActive ? 600 : 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '8px',
                        borderLeft: isActive ? '3px solid var(--color-coral)' : '3px solid transparent',
                        transition: 'all 0.2s ease',
                      }}
                      onClick={close}
                    >
                      <Box style={{ 
                        color: isActive ? 'var(--color-coral)' : '#666',
                        display: 'flex'
                      }}>
                        {link.icon}
                      </Box>
                      {link.label}
                    </Link>
                  );
                })}
              </Accordion>
              
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
          </Paper>
        )}
      </Transition>
    </Box>
  );
} 