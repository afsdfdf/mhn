"use client";
import { useState } from 'react';
import { 
  Container, 
  Title, 
  Text, 
  Paper, 
  Grid, 
  TextInput, 
  Textarea, 
  Button, 
  Group, 
  rem,
  Box,
  Card,
  ActionIcon,
  Notification,
  Divider
} from '@mantine/core';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Mail, MapPin, Phone, Send, Check, X } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

// Motion div for animations
const MotionDiv = motion.div;

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function ContactPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? rem(14) : rem(16);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      setTimeout(() => setFormError(false), 5000);
      return;
    }
    
    // Simulate form submission
    // In a real project, this would call an API to send form data
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Page Title */}
          <MotionDiv variants={fadeInVariants}>
            <Title order={1} c="coral.6" mb="xl" ta="center" fz={titleSize}>
              Contact Us
            </Title>
            
            <Text size="lg" mb={rem(40)} ta="center" maw={700} mx="auto">
              Whether you have questions, suggestions, or partnership inquiries, we'd love to hear from you. Please reach out to us using any of the methods below.
            </Text>
          </MotionDiv>
          
          {/* Contact Information and Form */}
          <MotionDiv variants={fadeInVariants}>
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
              <Grid>
                {/* Contact Information */}
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Title order={2} fz={subtitleSize} mb="xl">Contact Information</Title>
                  
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder
                    mb="md"
                    style={{
                      background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-coral-2))',
                    }}
                  >
                    <Group gap="md">
                      <ActionIcon variant="light" color="coral" radius="xl" size="lg">
                        <Mail size={rem(20)} />
                      </ActionIcon>
                      <Box>
                        <Text fw={700} mb={4}>Email</Text>
                        <Text size={textSize}>info@mindhive.network</Text>
                      </Box>
                    </Group>
                  </Card>
                  
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder
                    mb="md"
                    style={{
                      background: 'linear-gradient(135deg, var(--mantine-color-mint-1), var(--mantine-color-mint-2))',
                    }}
                  >
                    <Group gap="md">
                      <ActionIcon variant="light" color="mint" radius="xl" size="lg">
                        <Phone size={rem(20)} />
                      </ActionIcon>
                      <Box>
                        <Text fw={700} mb={4}>Phone</Text>
                        <Text size={textSize}>+1 (888) 123-4567</Text>
                      </Box>
                    </Group>
                  </Card>
                  
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder
                    mb="md"
                    style={{
                      background: 'linear-gradient(135deg, var(--mantine-color-ice-1), var(--mantine-color-ice-2))',
                    }}
                  >
                    <Group gap="md">
                      <ActionIcon variant="light" color="blue" radius="xl" size="lg">
                        <MapPin size={rem(20)} />
                      </ActionIcon>
                      <Box>
                        <Text fw={700} mb={4}>Address</Text>
                        <Text size={textSize}>123 Innovation Drive, San Francisco, CA 94107, USA</Text>
                      </Box>
                    </Group>
                  </Card>
                  
                  <Divider my="xl" />
                  
                  <Title order={3} fz={headingSize} mb="md">Business Hours</Title>
                  <Text size={textSize} mb="xs">Monday to Friday: 9:00 AM - 6:00 PM</Text>
                  <Text size={textSize} mb="xs">Saturday: 10:00 AM - 4:00 PM</Text>
                  <Text size={textSize} mb="xs">Sunday: Closed</Text>
                </Grid.Col>
                
                {/* Contact Form */}
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <Title order={2} fz={subtitleSize} mb="xl">Send Us a Message</Title>
                  
                  {formSubmitted && (
                    <Notification 
                      icon={<Check size={20} />}
                      color="green" 
                      title="Message Sent"
                      mb="md"
                      withCloseButton={false}
                    >
                      Thank you for your message! We'll get back to you soon.
                    </Notification>
                  )}
                  
                  {formError && (
                    <Notification 
                      icon={<X size={20} />}
                      color="red" 
                      title="Form Error"
                      mb="md"
                      withCloseButton={false}
                    >
                      Please fill in all required fields (name, email, and message).
                    </Notification>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <Grid>
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Name"
                          placeholder="Your name"
                          required
                          mb="md"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Grid.Col>
                      
                      <Grid.Col span={{ base: 12, sm: 6 }}>
                        <TextInput
                          label="Email"
                          placeholder="Your email"
                          required
                          mb="md"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Grid.Col>
                    </Grid>
                    
                    <TextInput
                      label="Subject"
                      placeholder="Message subject"
                      mb="md"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Please enter your message"
                      required
                      minRows={5}
                      mb="md"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                    
                    <Group justify="flex-end">
                      <Button 
                        type="submit" 
                        variant="gradient"
                        gradient={{ from: 'coral.6', to: 'mint.6', deg: 45 }}
                        radius="xl"
                        leftSection={<Send size={rem(16)} />}
                      >
                        Send Message
                      </Button>
                    </Group>
                  </form>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
          
          {/* FAQ Section */}
          <MotionDiv variants={fadeInVariants}>
            <Paper 
              radius="xl" 
              p={padding} 
              shadow="md" 
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Frequently Asked Questions</Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">How can I become a partner of MindHive Network?</Text>
                    <Text size={textSize}>
                      Please send your partnership inquiry through our contact form or directly email us at partnerships@mindhive.network, and our team will reach out to discuss details.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">Can I contribute to MindHive Network's development?</Text>
                    <Text size={textSize}>
                      Absolutely! MindHive Network is an open-source project, and we welcome developer contributions. Please visit our GitHub repository for more information.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">When will MindHive Network tokens be available?</Text>
                    <Text size={textSize}>
                      MHN tokens are scheduled for public sale in Q2 2026. Please follow our official announcements for the latest information.
                    </Text>
                  </Card>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">How do I report issues or vulnerabilities?</Text>
                    <Text size={textSize}>
                      Please email security@mindhive.network with a detailed description of the issue you've found. Our security team will address it promptly and get back to you.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">Does MindHive Network provide API access?</Text>
                    <Text size={textSize}>
                      Yes, we offer comprehensive API access. Please check our documentation page for detailed information on our APIs and how to use them.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">How can I join the MindHive Network community?</Text>
                    <Text size={textSize}>
                      You can join our community by joining our Discord server, Telegram group, or following our social media accounts. All links can be found in the footer of our website.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
        </MotionDiv>
      </Container>
      
      <Footer />
    </main>
  );
} 