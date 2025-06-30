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
    
    // 添加滚动锁定，防止菜单打开时页面滚动
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [opened]);
  
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
              <ChevronDown size={14} className={classes.chevron} />
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
      <Paper 
        shadow="sm" 
        p="md"
        style={{
          height: HEADER_HEIGHT,
          backgroundColor: 'var(--color-cream)',
          borderRadius: 'var(--border-radius-lg)',
          margin: '10px',
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
              className={classes.desktopNav}
            >
              {desktopItems}
            </Group>

            <Group>
              <ColorSchemeToggle />
              <Button 
                className={`${classes.connectWalletBtn} ${classes.desktopOnly}`}
                radius="xl"
              >
                Connect Wallet
              </Button>
              <Burger
                opened={opened}
                onClick={toggle}
                className={classes.mobileOnly}
                size="sm"
                aria-label="Toggle navigation"
              />
            </Group>
          </Group>
        </Container>
      </Paper>

      {/* 移动端导航菜单 - 优化版 */}
      <Transition 
        transition={{
          in: { opacity: 1, transform: 'translateY(0)' },
          out: { opacity: 0, transform: 'translateY(-10px)' },
          transitionProperty: 'transform, opacity',
        }} 
        duration={200} 
        mounted={opened}
      >
        {(styles) => (
          <Paper
            withBorder
            className={classes.mobileMenu}
            style={{
              ...styles,
              position: 'fixed',
              top: `calc(${HEADER_HEIGHT} + 10px)`,
              left: '10px',
              right: '10px',
              zIndex: 1000,
              backgroundColor: 'var(--color-cream)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
              overflow: 'hidden',
              maxHeight: 'calc(100vh - 90px)',
              overflowY: 'auto'
            }}
          >
            <Box p="md">
              {/* 移动导航标题 */}
              <Group mb="md" justify="apart">
                <Text fw={600} size="lg" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Menu
                </Text>
                <Box 
                  style={{ cursor: 'pointer' }} 
                  onClick={close}
                  className={classes.closeButton}
                >
                  <X size={20} />
                </Box>
              </Group>
              
              <Divider mb="md" />
              
              {/* 优化的导航菜单 */}
              <Stack gap={8}>
                {links.map((link, index) => {
                  const isActive = pathname === link.link;
                  
                  // 如果有子链接，创建一个简单的下拉菜单
                  if (link.links) {
                    const hasActiveChild = link.links.some(sublink => pathname === sublink.link);
                    
                    return (
                      <Box key={index}>
                        <Accordion
                          variant="filled"
                          defaultValue={hasActiveChild ? link.label : undefined}
                          classNames={{
                            item: classes.accordionItem,
                            control: classes.accordionControl,
                            panel: classes.accordionPanel,
                            content: classes.accordionContent
                          }}
                        >
                          <Accordion.Item value={link.label}>
                            <Accordion.Control
                              icon={
                                <Box style={{ 
                                  color: hasActiveChild ? 'var(--color-coral)' : '#666',
                                  display: 'flex',
                                  alignItems: 'center'
                                }}>
                                  {link.icon}
                                </Box>
                              }
                            >
                              <Text 
                                size="md" 
                                fw={500}
                                style={{ 
                                  color: hasActiveChild ? 'var(--color-coral)' : 'inherit'
                                }}
                              >
                                {link.label}
                              </Text>
                            </Accordion.Control>
                            <Accordion.Panel>
                              <Stack gap={8} pl="sm">
                                {link.links.map((sublink, subIndex) => {
                                  const isSubActive = pathname === sublink.link;
                                  
                                  return (
                                    <Link
                                      key={subIndex}
                                      href={sublink.link}
                                      className={classes.mobileSublink}
                                      style={{
                                        color: isSubActive ? 'var(--color-coral)' : '#3a3a3a',
                                        fontWeight: isSubActive ? 600 : 500,
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
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                      </Box>
                    );
                  }
                  
                  // 如果没有子链接，创建一个简单的链接
                  return (
                    <Link
                      key={index}
                      href={link.link}
                      className={classes.mobileLink}
                      style={{
                        backgroundColor: isActive ? 'rgba(255, 122, 92, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                        color: isActive ? 'var(--color-coral)' : '#3a3a3a',
                        fontWeight: isActive ? 600 : 500,
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
          </Paper>
        )}
      </Transition>
    </Box>
  );
} 