'use client';

import { Container, Title, Text, Button, rem } from '@mantine/core';
import { useRouter } from 'next/navigation';
import MainNavbar from './components/MainNavbar';
import Footer from './components/Footer';

export default function NotFound() {
  const router = useRouter();
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="md" style={{ 
        minHeight: 'calc(100vh - 200px)', 
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
          fz={rem(64)} 
          fw={700}
          mb="md"
        >
          404
        </Title>
        
        <Title 
          order={2} 
          ta="center" 
          mb="xl"
        >
          Page Not Found
        </Title>
        
        <Text ta="center" size="lg" maw={500} mx="auto" mb="xl">
          The page you are looking for doesn't exist or has been moved.
        </Text>
        
        <Button 
          size="lg" 
          variant="gradient" 
          gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
          radius="xl"
          onClick={() => router.push('/')}
        >
          Back to Home
        </Button>
      </Container>
      
      <Footer />
    </main>
  );
} 