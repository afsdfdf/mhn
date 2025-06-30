"use client";
import { useState } from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Paper, 
  TextInput, 
  Textarea, 
  Button, 
  Group, 
  rem,
  Card,
  ThemeIcon,
  Badge,
  Accordion,
  SimpleGrid
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Mail, MapPin, Phone, Check } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };
  
  const contactInfo = [
    { title: 'Email', description: 'hello@mindhive.network', icon: <Mail size={isMobile ? 18 : 24} /> },
    { title: 'Phone', description: '+1 (555) 123-4567', icon: <Phone size={isMobile ? 18 : 24} /> },
    { title: 'Office', description: 'San Francisco, CA', icon: <MapPin size={isMobile ? 18 : 24} /> },
  ];

  const faqItems = [
    {
      question: 'What is MindHive Network?',
      answer: 'MindHive Network is a decentralized platform that connects AI models and enables them to collaborate.'
    },
    {
      question: 'How can I participate in the network?',
      answer: 'You can participate as a user by accessing AI services, as a developer by building applications.'
    },
    {
      question: 'When will the MHN token be available?',
      answer: 'The MHN token is scheduled for launch in Q3 2025.'
    },
  ];

  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <Paper
          radius="xl" 
          p={padding} 
          shadow="md" 
          mb={rem(40)}
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(40)}>
            <div>
              <Title 
                order={1} 
                mb="md"
                style={{
                  fontSize: titleSize,
                  background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get in Touch
              </Title>
              
              <Text size="lg" mb="xl">
                Have questions about MindHive Network? Our team is here to help.
              </Text>
              
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mb="xl">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index}
                    p="md"
                    radius="md"
                    withBorder
                  >
                    <Group>
                      <ThemeIcon 
                        size={isMobile ? 36 : 48} 
                        radius="md"
                        color={index === 0 ? 'coral' : index === 1 ? 'mint' : 'ice'}
                      >
                        {item.icon}
                      </ThemeIcon>
                      <div>
                        <Text fw={500} size="sm">{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                    </Group>
                  </Card>
                ))}
              </SimpleGrid>
              
              <Title order={2} size="h3" mb="md">
                Frequently Asked Questions
              </Title>
              
              <Accordion variant="separated" mb="xl">
                {faqItems.map((item, index) => (
                  <Accordion.Item key={index} value={`item-${index}`}>
                    <Accordion.Control>{item.question}</Accordion.Control>
                    <Accordion.Panel>{item.answer}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
            
            <div>
              {submitted ? (
                <Paper
                  p="xl"
                  radius="md"
                  style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, var(--mantine-color-mint-1), var(--mantine-color-coral-1))',
                  }}
                >
                  <ThemeIcon size={80} radius={40} color="mint" variant="light" mb="md">
                    <Check size={40} />
                  </ThemeIcon>
                  <Title order={2} mb="md">Message Sent!</Title>
                  <Text size="lg" mb="xl">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </Text>
                  <Button 
                    variant="light" 
                    color="coral" 
                    size="md" 
                    radius="xl"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: '',
                      });
                    }}
                  >
                    Send Another Message
                  </Button>
                </Paper>
              ) : (
                <Paper 
                  p="xl" 
                  radius="md" 
                  withBorder
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <form onSubmit={handleSubmit}>
                    <Title order={3} mb="md">
                      Contact Form
                    </Title>
                    
                    <SimpleGrid cols={{ base: 1, sm: 2 }} mb="md">
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      
                      <TextInput
                        label="Email"
                        placeholder="your.email@example.com"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </SimpleGrid>
                    
                    <TextInput
                      label="Subject"
                      placeholder="How can we help you?"
                      required
                      mb="md"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Please provide details about your inquiry..."
                      required
                      minRows={5}
                      mb="md"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    
                    <Group justify="space-between" mb="md">
                      <Text size="sm" c="dimmed">All fields are required</Text>
                      <Badge color="mint" variant="light">Secure Form</Badge>
                    </Group>
                    
                    <Group justify="flex-end">
                      <Button 
                        type="submit" 
                        size="md" 
                        radius="xl"
                        color="coral"
                        loading={submitting}
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Group>
                  </form>
                </Paper>
              )}
            </div>
          </SimpleGrid>
        </Paper>
      </Container>
      
      <Footer />
    </main>
  );
} 