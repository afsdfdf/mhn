"use client";
import { useState } from 'react';
import { Container, TextInput, Button, Group, Text, rem, Paper, Title, Notification } from '@mantine/core';
import { motion } from 'framer-motion';
import { Check, X, Send } from 'lucide-react';

const MotionPaper = motion(Paper);

export default function NewsletterBar() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <Container size="lg" my={rem(60)}>
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        shadow="md"
        radius="xl"
        p={rem(40)}
        style={{
          background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-mint-2))',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-5%',
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
            zIndex: 0,
          }}
        />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Title order={2} ta="center" mb={rem(10)} style={{ color: 'var(--mantine-color-dark-9)' }}>
            Stay Updated
          </Title>
          
          <Text ta="center" mb={rem(30)} size="lg" fw={500}>
            Subscribe to our newsletter for the latest updates on MindHive Network
          </Text>
          
          {submitted ? (
            <Notification
              icon={<Check size={20} />}
              color="green"
              title="Success!"
              withCloseButton={false}
            >
              Thank you for subscribing! You'll receive our next newsletter soon.
            </Notification>
          ) : error ? (
            <Notification
              icon={<X size={20} />}
              color="red"
              title="Error"
              withCloseButton={false}
            >
              Please enter a valid email address.
            </Notification>
          ) : (
            <form onSubmit={handleSubmit}>
              <Group gap={rem(10)} align="flex-start" wrap="nowrap">
                <TextInput
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  style={{ flexGrow: 1 }}
                  radius="xl"
                  size="md"
                  rightSection={
                    <Button 
                      type="submit"
                      radius="xl"
                      size="xs"
                      variant="subtle"
                      loading={loading}
                      loaderProps={{ size: 'xs' }}
                      style={{ 
                        width: rem(30), 
                        height: rem(30),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {!loading && <Send size={16} />}
                    </Button>
                  }
                />
                
                <Button
                  type="submit"
                  radius="xl"
                  size="md"
                  loading={loading}
                  color="dark"
                >
                  Subscribe
                </Button>
              </Group>
            </form>
          )}
          
          <Text size="xs" ta="center" mt={rem(20)} c="dimmed">
            We respect your privacy. Unsubscribe at any time.
          </Text>
        </div>
      </MotionPaper>
    </Container>
  );
} 