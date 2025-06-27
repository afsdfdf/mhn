"use client";
import { useState } from 'react';
import { Paper, TextInput, Button, Group, Container, Text, rem } from '@mantine/core';
import { Search } from 'lucide-react';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <Paper 
      radius="xl" 
      p="xl" 
      style={{
        background: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
        marginTop: rem(80),
        marginBottom: rem(40),
      }}
    >
      <Container size="lg">
        <Group justify="space-between" gap="xl" wrap="nowrap">
          <div>
            <Text fw={700} fz="lg" c="#333">
              Stay Updated
            </Text>
            <Text c="#666" opacity={0.8} size="sm">
              Subscribe to our newsletter for the latest updates and announcements
            </Text>
          </div>
          <form onSubmit={handleSubmit} style={{ flexGrow: 1, maxWidth: rem(400) }}>
            <Group gap="xs" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'relative',
                width: '100%',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '40px',
                padding: '6px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)',
                display: 'flex',
                alignItems: 'center'
              }}>
                <Search 
                  size={18} 
                  style={{ 
                    position: 'absolute', 
                    left: '16px',
                    color: '#999'
                  }} 
                />
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  placeholder="Your email" 
                  required
                  style={{
                    border: 'none',
                    background: 'transparent',
                    padding: '12px 12px 12px 44px',
                    width: '100%',
                    outline: 'none',
                    fontSize: '16px',
                    color: '#333'
                  }}
                />
                <Button 
                  type="submit" 
                  radius="xl"
                  style={{
                    background: 'linear-gradient(135deg, #FF6F61, #FF5A4E)',
                    border: 'none',
                    marginRight: '6px'
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Group>
          </form>
        </Group>
      </Container>
    </Paper>
  );
} 