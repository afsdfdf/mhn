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
  Divider,
  SimpleGrid,
  ThemeIcon,
  Badge,
  Accordion,
  Tooltip
} from '@mantine/core';
import { motion, Variants } from 'framer-motion';
import { useMediaQuery } from '@mantine/hooks';
import { Mail, MapPin, Phone, Send, Check, X, MessageCircle, ExternalLink, BrainCircuit, Users, Lightbulb, Rocket } from 'lucide-react';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useForm } from '@mantine/form';

// Motion div for animations
const MotionDiv = motion.div;
const MotionPaper = motion(Paper);
const MotionContainer = motion(Container);
const MotionCard = motion(Card);
const MotionTitle = motion(Title);
const MotionGroup = motion(Group);

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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const cardHoverVariants: Variants = {
  initial: {},
  hover: { 
    scale: 1.03,
    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
    transition: { duration: 0.3 }
  }
};

const pulseVariants: Variants = {
  initial: { scale: 1 },
  pulse: {
    scale: [1, 1.05, 1],
    transition: { 
      duration: 1.5, 
      repeat: Infinity,
      repeatType: "reverse" 
    }
  }
};

export default function ContactPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: 'general',
  });
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? rem(14) : rem(16);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      reason: 'general',
    },
    validate: {
      name: (value) => value.trim().length < 2 ? 'Name must have at least 2 characters' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      subject: (value) => value.trim().length < 5 ? 'Subject must have at least 5 characters' : null,
      message: (value) => value.trim().length < 10 ? 'Message must have at least 10 characters' : null,
    },
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (values: typeof form.values) => {
    setSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(values);
    setSubmitted(true);
    setSubmitting(false);
  };
  
  const contactInfo = [
    { title: 'Email', description: 'hello@mindhive.network', icon: <Mail size={isMobile ? 18 : 24} /> },
    { title: 'Phone', description: '+1 (555) 123-4567', icon: <Phone size={isMobile ? 18 : 24} /> },
    { title: 'Office', description: 'San Francisco, CA', icon: <MapPin size={isMobile ? 18 : 24} /> },
  ];

  const faqItems = [
    {
      question: 'What is MindHive Network?',
      answer: 'MindHive Network is a decentralized platform that connects AI models and enables them to collaborate, share knowledge, and collectively solve problems that would be difficult for any single model to address.'
    },
    {
      question: 'How can I participate in the network?',
      answer: 'You can participate as a user by accessing AI services, as a developer by building applications on top of the network, or as a node operator by providing computational resources.'
    },
    {
      question: 'When will the MHN token be available?',
      answer: 'The MHN token is scheduled for launch in Q3 2025. Join our newsletter to stay updated on the token launch and early participation opportunities.'
    },
    {
      question: 'Is MindHive Network open source?',
      answer: 'Yes, core components of the MindHive Network are open source. You can find our repositories on GitHub and contribute to the development of the platform.'
    },
  ];

  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Get help with integration, API usage, and troubleshooting technical issues with the MindHive Network.',
      icon: <BrainCircuit size={24} />,
      color: 'coral',
      link: '#technical-support'
    },
    {
      title: 'Partnership Inquiries',
      description: 'Explore collaboration opportunities, integrations, and strategic partnerships with the MindHive Network.',
      icon: <Users size={24} />,
      color: 'mint',
      link: '#partnerships'
    },
    {
      title: 'Research Collaboration',
      description: 'Join our research initiatives, contribute to open problems, and help advance the field of decentralized AI.',
      icon: <Lightbulb size={24} />,
      color: 'ice',
      link: '#research'
    }
  ];

  return (
    <main>
      <MainNavbar />
      
      <MotionContainer 
        size="lg" 
        py={containerPadding}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MotionPaper
          radius="xl" 
          p={padding} 
          shadow="md" 
          mb={rem(40)}
          variants={fadeInVariants}
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={rem(40)}>
            <div>
              <MotionTitle 
                order={1} 
                mb="md"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  fontSize: titleSize,
                  background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get in Touch
              </MotionTitle>
              
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Text size="lg" mb="xl">
                  Have questions about MindHive Network? Our team is here to help. Fill out the form and we'll get back to you as soon as possible.
                </Text>
              </MotionDiv>
              
              <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="md" mb="xl">
                {contactInfo.map((item, index) => (
                  <MotionCard 
                    key={index}
                    p="md"
                    radius="md"
                    withBorder
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    custom={index}
                    transition={{ delay: 0.1 * index }}
                    style={{ 
                      cursor: 'pointer',
                      background: activeIndex === index 
                        ? `linear-gradient(135deg, var(--mantine-color-${index === 0 ? 'coral' : index === 1 ? 'mint' : 'ice'}-1), var(--mantine-color-${index === 0 ? 'coral' : index === 1 ? 'mint' : 'ice'}-2))` 
                        : undefined 
                    }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(null)}
                  >
                    <Group>
                      <ThemeIcon 
                        size={isMobile ? 36 : 48} 
                        radius="md"
                        variant={activeIndex === index ? "filled" : "light"}
                        color={index === 0 ? 'coral' : index === 1 ? 'mint' : 'ice'}
                      >
                        {item.icon}
                      </ThemeIcon>
                      <div>
                        <Text fw={500} size="sm">{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                    </Group>
                  </MotionCard>
                ))}
              </SimpleGrid>
              
              <MotionTitle 
                order={2} 
                fz={subtitleSize} 
                mb="md"
                variants={fadeInVariants}
              >
                Frequently Asked Questions
              </MotionTitle>
              
              <MotionDiv variants={fadeInVariants}>
                <Accordion variant="separated" mb="xl">
                  {faqItems.map((item, index) => (
                    <Accordion.Item key={index} value={`item-${index}`}>
                      <Accordion.Control>{item.question}</Accordion.Control>
                      <Accordion.Panel>{item.answer}</Accordion.Panel>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </MotionDiv>
              
              <MotionTitle 
                order={2} 
                fz={subtitleSize} 
                mb="md"
                variants={fadeInVariants}
              >
                Connect With Us
              </MotionTitle>
              
              <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
                <MotionCard 
                  p="sm" 
                  radius="md" 
                  withBorder 
                  style={{ cursor: 'pointer' }}
                  component="a"
                  href="https://twitter.com/mindhivenetwork"
                  target="_blank"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Group justify="center" gap="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    <Text size="sm">Twitter</Text>
                  </Group>
                </MotionCard>
                
                <MotionCard 
                  p="sm" 
                  radius="md" 
                  withBorder 
                  style={{ cursor: 'pointer' }}
                  component="a"
                  href="https://discord.gg/mindhivenetwork"
                  target="_blank"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Group justify="center" gap="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 9v-3a3 3 0 0 1 6 0v3"></path>
                      <path d="M6.331 10h11.339a2 2 0 0 1 1.977 2.304l-1.255 8.152a3 3 0 0 1-2.966 2.544h-6.852a3 3 0 0 1-2.965-2.544l-1.255-8.152a2 2 0 0 1 1.977-2.304z"></path>
                    </svg>
                    <Text size="sm">Discord</Text>
                  </Group>
                </MotionCard>
                
                <MotionCard 
                  p="sm" 
                  radius="md" 
                  withBorder 
                  style={{ cursor: 'pointer' }}
                  component="a"
                  href="https://github.com/mindhivenetwork"
                  target="_blank"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Group justify="center" gap="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <Text size="sm">GitHub</Text>
                  </Group>
                </MotionCard>
                
                <MotionCard 
                  p="sm" 
                  radius="md" 
                  withBorder 
                  style={{ cursor: 'pointer' }}
                  component="a"
                  href="https://t.me/mindhivenetwork"
                  target="_blank"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  <Group justify="center" gap="xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.5 7.5a2.25 2.25 0 0 0 .126 4.073l3.9 1.205 2.25 6a2.25 2.25 0 0 0 4.153.4l2.01-4.03 4.42 2.21a2.25 2.25 0 0 0 3.236-1.363l3-13.5a2.25 2.25 0 0 0-1.573-2.71z"></path>
                    </svg>
                    <Text size="sm">Telegram</Text>
                  </Group>
                </MotionCard>
              </SimpleGrid>
            </div>
            
            <div>
              {submitted ? (
                <MotionPaper
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <MotionDiv
                    initial="initial"
                    animate="pulse"
                    variants={pulseVariants}
                  >
                    <ThemeIcon size={80} radius={40} color="mint" variant="light" mb="md">
                      <Check size={40} />
                    </ThemeIcon>
                  </MotionDiv>
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
                      form.reset();
                    }}
                  >
                    Send Another Message
                  </Button>
                </MotionPaper>
              ) : (
                <MotionPaper 
                  p="xl" 
                  radius="md" 
                  withBorder
                  variants={fadeInVariants}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <form onSubmit={form.onSubmit(handleSubmit)}>
                    <MotionTitle 
                      order={3} 
                      mb="md"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Contact Form
                    </MotionTitle>
                    
                    <SimpleGrid cols={{ base: 1, sm: 2 }} mb="md">
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        required
                        {...form.getInputProps('name')}
                      />
                      
                      <TextInput
                        label="Email"
                        placeholder="your.email@example.com"
                        required
                        {...form.getInputProps('email')}
                      />
                    </SimpleGrid>
                    
                    <TextInput
                      label="Subject"
                      placeholder="How can we help you?"
                      required
                      mb="md"
                      {...form.getInputProps('subject')}
                    />
                    
                    <Textarea
                      label="Message"
                      placeholder="Please provide details about your inquiry..."
                      required
                      minRows={5}
                      mb="md"
                      {...form.getInputProps('message')}
                    />
                    
                    <Group justify="space-between" mb="md">
                      <Text size="sm" c="dimmed">All fields are required</Text>
                      <Badge color="mint" variant="light">Secure Form</Badge>
                    </Group>
                    
                    <Group justify="flex-end">
                      <MotionButton 
                        component={motion.button}
                        type="submit" 
                        size="md" 
                        radius="xl"
                        color="coral"
                        leftSection={<MessageCircle size={18} />}
                        loading={submitting}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                      </MotionButton>
                    </Group>
                  </form>
                </MotionPaper>
              )}
            </div>
          </SimpleGrid>
        </MotionPaper>
        
        <MotionPaper
          radius="xl" 
          p={padding} 
          shadow="md"
          variants={fadeInVariants}
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <MotionTitle 
            order={2} 
            fz={subtitleSize} 
            mb="xl" 
            ta="center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            How We Can Help
          </MotionTitle>
          
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {supportOptions.map((option, index) => (
              <MotionCard 
                key={index}
                p="lg" 
                radius="md" 
                withBorder
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { 
                      duration: 0.5,
                      delay: index * 0.2 
                    }
                  },
                  hover: { 
                    scale: 1.03,
                    boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.12)",
                    transition: { duration: 0.3 }
                  }
                }}
              >
                <ThemeIcon size={48} radius="md" color={option.color} variant="light" mb="md">
                  {option.icon}
                </ThemeIcon>
                <Title order={3} fz={rem(18)} mb="sm">{option.title}</Title>
                <Text size="sm" mb="md">
                  {option.description}
                </Text>
                <Tooltip label="Learn more about this service">
                  <Button 
                    component={motion.button}
                    variant="light" 
                    color={option.color} 
                    radius="xl" 
                    compact
                    rightSection={<ExternalLink size={14} />}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </Button>
                </Tooltip>
              </MotionCard>
            ))}
          </SimpleGrid>
        </MotionPaper>
      </MotionContainer>
      
      <Footer />
    </main>
  );
} 