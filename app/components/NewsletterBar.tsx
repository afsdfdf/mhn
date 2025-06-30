"use client";
import { useState } from 'react';
import { Container, TextInput, Button, Group, Box, Text, rem, Stack } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function NewsletterBar() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // 这里可以添加实际的订阅逻辑
      console.log('Subscribing email:', email);
      setIsSubmitted(true);
      setEmail('');
      
      // 5秒后重置状态
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <Box 
      py={rem(40)}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 122, 92, 0.1), rgba(92, 219, 195, 0.1))',
        borderRadius: 'var(--border-radius-lg)',
        margin: '2rem 0',
      }}
    >
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Text 
            ta="center" 
            fw={700} 
            size="xl"
            mb={rem(10)}
            className="gradient-text"
          >
            Stay up to date
          </Text>
          
          <Text 
            ta="center" 
            c="dimmed" 
            mb={rem(20)}
            size="sm"
          >
            Subscribe to our newsletter for the latest updates on product releases and community news
          </Text>
          
          <form onSubmit={handleSubmit}>
            {isMobile ? (
              <Stack gap="xs">
                <TextInput
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  style={{ width: '100%' }}
                  leftSection={<Mail size={16} />}
                  error={isSubmitted ? false : undefined}
                  disabled={isSubmitted}
                  radius="xl"
                />
                
                <Button 
                  type="submit"
                  className="connect-wallet-btn"
                  disabled={isSubmitted}
                  radius="xl"
                  fullWidth
                >
                  {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </Stack>
            ) : (
              <Group 
                justify="center" 
                gap="md"
              >
                <TextInput
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  style={{ 
                    flexGrow: 1,
                    maxWidth: rem(400),
                  }}
                  leftSection={<Mail size={16} />}
                  error={isSubmitted ? false : undefined}
                  disabled={isSubmitted}
                  radius="xl"
                />
                
                <Button 
                  type="submit"
                  className="connect-wallet-btn"
                  disabled={isSubmitted}
                  radius="xl"
                >
                  {isSubmitted ? 'Subscribed!' : 'Subscribe'}
                </Button>
              </Group>
            )}
          </form>
        </motion.div>
      </Container>
    </Box>
  );
} 