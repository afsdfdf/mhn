'use client';

import { Container, Title, Text, Button, rem } from '@mantine/core';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container size="md" style={{ 
      minHeight: 'calc(100vh - 100px)', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '60px 20px'
    }}>
      <Title 
        order={1} 
        c="coral.6" 
        ta="center" 
        fz={rem(48)} 
        fw={700}
        mb="md"
      >
        Something went wrong
      </Title>
      
      <Text ta="center" size="lg" maw={500} mx="auto" mb="xl">
        An unexpected error has occurred. Please try again.
      </Text>
      
      <Button 
        size="lg" 
        variant="gradient" 
        gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
        radius="xl"
        onClick={reset}
      >
        Try again
      </Button>
    </Container>
  );
} 