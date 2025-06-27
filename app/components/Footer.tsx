"use client";
import { Container, Group, Text, rem } from '@mantine/core';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{
      marginTop: rem(120),
      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(10px)',
    }}>
      <Container size="lg" py={rem(30)}>
        <Group justify="space-between" wrap="wrap">
          <Group gap={rem(30)}>
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text fw={700} size="lg" style={{
                background: 'linear-gradient(45deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                MindHive Network
              </Text>
            </Link>
          </Group>

          <Group gap={rem(30)} wrap="wrap">
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">Home</Text>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">About</Text>
            </Link>
            <Link href="/docs" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">Docs</Text>
            </Link>
            <Link href="/whitepaper" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">Whitepaper</Text>
            </Link>
            <Link href="/token" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">Token</Text>
            </Link>
            <Link href="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Text size="sm">Contact</Text>
            </Link>
          </Group>
        </Group>

        <Group justify="space-between" mt={rem(30)} wrap="wrap">
          <Text size="xs" c="dimmed">
            © 2023 MindHive Network. All rights reserved.
          </Text>

          <Group gap={rem(20)} wrap="wrap">
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="xs" c="dimmed">Terms of Service</Text>
            </Link>
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="xs" c="dimmed">Privacy Policy</Text>
            </Link>
            <Link href="#" style={{ textDecoration: 'none' }}>
              <Text size="xs" c="dimmed">Cookie Policy</Text>
            </Link>
          </Group>
        </Group>
      </Container>
    </footer>
  );
} 