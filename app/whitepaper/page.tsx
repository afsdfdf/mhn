"use client";
import { Container, Title, Text, Paper, Grid, Tabs, Anchor, List, Code, rem, Table, Blockquote, ThemeIcon, Group, Badge, Button, Divider, Box, SimpleGrid } from '@mantine/core';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';
import { FileText, BookOpen, Network, Database, Cpu, Users, Coins, Shield, ChevronRight, Download, ExternalLink, Bot, Github } from 'lucide-react';
import TechDemo from './TechDemo';
import Link from 'next/link';

// Motion components
const MotionDiv = motion.div;
const MotionTitle = motion.h1;
const MotionText = motion.p;

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

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

const floatVariants: Variants = {
  initial: { y: 0 },
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function WhitepaperPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const subheadingSize = isMobile ? rem(16) : rem(18);
  const textSize = isMobile ? 'sm' : 'md';
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  const sections = [
    { id: "introduction", title: "Introduction", icon: <BookOpen size={18} /> },
    { id: "architecture", title: "System Architecture", icon: <Network size={18} /> },
    { id: "token", title: "Token Economics", icon: <Coins size={18} /> },
    { id: "governance", title: "Governance", icon: <Users size={18} /> },
    { id: "security", title: "Security & Privacy", icon: <Shield size={18} /> },
    { id: "applications", title: "Applications", icon: <Database size={18} /> },
    { id: "roadmap", title: "Roadmap", icon: <Cpu size={18} /> }
  ];
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div id="introduction">
            <MotionDiv
              variants={fadeInVariants}
            >
              <Paper 
            radius="xl" 
            p={padding} 
            shadow="md" 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
            mb={rem(40)}
          >
            <MotionDiv 
              variants={floatVariants}
              initial="initial"
              animate="float"
              style={{ textAlign: 'center', marginBottom: rem(30) }}
            >
              <ThemeIcon size={80} radius={40} color="coral" variant="light" mb="md">
                <FileText size={40} />
              </ThemeIcon>
            </MotionDiv>
            
            <MotionTitle 
              style={{
                fontSize: titleSize,
                background: 'linear-gradient(135deg, var(--mantine-color-coral-6), var(--mantine-color-mint-6))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textAlign: 'center',
                fontWeight: 700,
                marginBottom: rem(24)
              }}
              variants={fadeInVariants}
            >
              MindHive Network Whitepaper
            </MotionTitle>
            
            <MotionText 
              style={{
                fontSize: '1.25rem',
                textAlign: 'center',
                fontWeight: 500,
                marginBottom: rem(24)
              }}
              variants={fadeInVariants}
            >
              A Decentralized Collaborative AI Network
            </MotionText>
            
            <Group justify="center" mb="xl">
              <Badge color="coral" size="lg" variant="light">Version 1.0</Badge>
              <Badge color="mint" size="lg" variant="light">June 2025</Badge>
            </Group>
            
            <Group justify="center" mb="xl">
              <Button 
                component="a" 
                href="/MindHive_Whitepaper.pdf" 
                download 
                leftSection={<Download size={16} />} 
                variant="light" 
                color="coral"
                radius="xl"
              >
                Download PDF
              </Button>
              <Button 
                component="a" 
                href="https://github.com/mindhive-network/whitepaper" 
                target="_blank"
                leftSection={<Github size={16} />} 
                variant="light" 
                color="mint"
                radius="xl"
              >
                View on GitHub
              </Button>
            </Group>
            
            <Divider mb="xl" />
            
            <Grid mb="xl">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <MotionDiv variants={fadeInVariants}>
                  <Title order={2} fz={subtitleSize} mb="md">Abstract</Title>
                  <Text size={textSize} mb="xl">
                    MindHive Network is a decentralized protocol that enables collaborative development and deployment of artificial intelligence models. By leveraging blockchain technology, MindHive creates a trustless environment where AI developers, data providers, and computational resource providers can collaborate to create more robust and ethical AI systems. This whitepaper outlines the architecture, governance mechanisms, and economic model of the MindHive Network, as well as its potential applications and roadmap for development.
                  </Text>
                </MotionDiv>
              </Grid.Col>
              
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Paper 
                  p="md" 
                  radius="lg" 
                  style={{
                    background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-mint-2))',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <Title order={4} fz={subheadingSize} mb="md">Table of Contents</Title>
                  <List spacing="xs" withPadding>
                    {sections.map((section, index) => (
                      <List.Item 
                        key={index} 
                        icon={
                          <ThemeIcon color={index % 2 === 0 ? 'coral' : 'mint'} size={22} radius="xl">
                            {section.icon}
                          </ThemeIcon>
                        }
                      >
                        <Anchor component="a" href={`#${section.id}`} size="sm">
                          {section.title}
                        </Anchor>
                      </List.Item>
                    ))}
                  </List>
                </Paper>
              </Grid.Col>
            </Grid>
                
            <MotionDiv variants={fadeInVariants}>
              <Group mb="md">
                <ThemeIcon size="xl" radius="md" color="coral">
                  <BookOpen size={24} />
                </ThemeIcon>
                <Title order={2} fz={subtitleSize}>1. Introduction</Title>
              </Group>
              
              <Text size={textSize} mb="md">
                Artificial intelligence has emerged as one of the most transformative technologies of the 21st century, with applications spanning across industries from healthcare to finance, transportation to entertainment. However, the development of AI systems has been largely centralized, with a few large corporations controlling the most advanced models and the vast amounts of data required to train them.
              </Text>
              
              <Text size={textSize} mb="md">
                This centralization poses several challenges:
              </Text>
              
              <List spacing="md" mb="xl">
                {[
                  "Limited access to cutting-edge AI capabilities for smaller organizations and individuals",
                  "Concentration of decision-making power regarding AI development and deployment",
                  "Potential misalignment between corporate incentives and broader societal interests",
                  "Lack of transparency in how AI systems are trained and operated",
                  "Inadequate compensation for data contributors whose information trains these systems"
                ].map((item, index) => (
                  <MotionDiv
                    key={index}
                    custom={index}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0, 
                        transition: { delay: index * 0.1, duration: 0.5 } 
                      }
                    }}
                  >
                    <List.Item 
                      icon={
                        <ThemeIcon color="coral" size={22} radius="xl">
                          <ChevronRight size={14} />
                        </ThemeIcon>
                      }
                    >
                      {item}
                    </List.Item>
                  </MotionDiv>
                ))}
              </List>
              
              <Text size={textSize} mb="xl">
                MindHive Network addresses these challenges by creating a decentralized infrastructure for collaborative AI development and deployment. By distributing ownership, governance, and rewards across a diverse network of participants, MindHive aims to democratize access to AI technology while ensuring its development aligns with broader human values and needs.
              </Text>
              
              <Blockquote
                color="mint"
                cite="- Dr. Elena Chen, MindHive Network Co-founder"
                mb="xl"
              >
                The future of AI should not be determined by a handful of corporations. It should be a collaborative endeavor that reflects the diversity of human knowledge, values, and needs.
              </Blockquote>
            </MotionDiv>
              </Paper>
            </MotionDiv>
          </div>
          
          <div id="architecture">
            <MotionDiv
              variants={fadeInVariants}
            >
              <Paper 
            radius="xl" 
            p={padding} 
            shadow="md" 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              marginBottom: rem(40),
            }}
          >
            <MotionDiv variants={fadeInVariants}>
              <Group mb="md">
                <ThemeIcon size="xl" radius="md" color="mint">
                  <Network size={24} />
                </ThemeIcon>
                <Title order={2} fz={subtitleSize}>2. System Architecture</Title>
              </Group>
              
              <Text size={textSize} mb="md">
                The MindHive Network consists of several interconnected components:
              </Text>
              
              <Grid gutter="xl" mb="xl">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder>
                    <Group mb="sm">
                      <ThemeIcon color="coral" size={30} radius="md">
                        <Network size={18} />
                      </ThemeIcon>
                      <Title order={3} fz={headingSize}>2.1 Core Protocol Layer</Title>
                    </Group>
                    
                    <Text size={textSize} mb="md">
                      The foundation of the MindHive Network is a blockchain-based protocol that enables secure, verifiable transactions between network participants. This layer includes:
                    </Text>
                    
                    <List spacing="xs" withPadding size={textSize}>
                      {[
                        "Smart contracts governing network interactions",
                        "On-chain verification mechanisms for AI computations",
                        "Token economics and incentive structures",
                        "Governance mechanisms for protocol upgrades and parameter adjustments"
                      ].map((item, index) => (
                        <MotionDiv
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                        >
                          <List.Item>{item}</List.Item>
                        </MotionDiv>
                      ))}
                    </List>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder>
                    <Group mb="sm">
                      <ThemeIcon color="mint" size={30} radius="md">
                        <Bot size={18} />
                      </ThemeIcon>
                      <Title order={3} fz={headingSize}>2.2 AI Agent Network</Title>
                    </Group>
                    
                    <Text size={textSize} mb="md">
                      The AI Agent Network consists of specialized AI services that can be deployed, composed, and monetized on the network:
                    </Text>
                    
                    <List spacing="xs" withPadding size={textSize}>
                      {[
                        "Standardized interfaces for AI agent deployment",
                        "Service discovery and reputation systems",
                        "Composition mechanisms for creating complex AI workflows",
                        "Monitoring and quality assurance tools"
                      ].map((item, index) => (
                        <MotionDiv
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                        >
                          <List.Item>{item}</List.Item>
                        </MotionDiv>
                      ))}
                    </List>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder>
                    <Group mb="sm">
                      <ThemeIcon color="blue" size={30} radius="md">
                        <Database size={18} />
                      </ThemeIcon>
                      <Title order={3} fz={headingSize}>2.3 DataDAO Framework</Title>
                    </Group>
                    
                    <Text size={textSize} mb="md">
                      The DataDAO Framework enables collective ownership and governance of datasets:
                    </Text>
                    
                    <List spacing="xs" withPadding size={textSize}>
                      {[
                        "Data contribution and validation mechanisms",
                        "Privacy-preserving data access controls",
                        "Fair compensation models for data contributors",
                        "Governance structures for dataset management"
                      ].map((item, index) => (
                        <MotionDiv
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                        >
                          <List.Item>{item}</List.Item>
                        </MotionDiv>
                      ))}
                    </List>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder>
                    <Group mb="sm">
                      <ThemeIcon color="ice" size={30} radius="md">
                        <Cpu size={18} />
                      </ThemeIcon>
                      <Title order={3} fz={headingSize}>2.4 Compute Marketplace</Title>
                    </Group>
                    
                    <Text size={textSize} mb="md">
                      The Compute Marketplace connects AI workloads with computational resources:
                    </Text>
                    
                    <List spacing="xs" withPadding size={textSize}>
                      {[
                        "Resource discovery and matching algorithms",
                        "Verifiable computation protocols",
                        "Dynamic pricing mechanisms",
                        "Quality of service guarantees"
                      ].map((item, index) => (
                        <MotionDiv
                          key={index}
                          custom={index}
                          variants={listItemVariants}
                        >
                          <List.Item>{item}</List.Item>
                        </MotionDiv>
                      ))}
                    </List>
                  </Paper>
                </Grid.Col>
              </Grid>
              
              <TechDemo />
            </MotionDiv>
              </Paper>
            </MotionDiv>
          </div>
          
          <div id="token">
            <MotionDiv
              variants={fadeInVariants}
            >
              <Paper 
            radius="xl" 
            p={padding} 
            shadow="md" 
            style={{
              background: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              marginBottom: rem(40),
            }}
          >
            <MotionDiv variants={fadeInVariants}>
              <Group mb="md">
                <ThemeIcon size="xl" radius="md" color="coral">
                  <Coins size={24} />
                </ThemeIcon>
                <Title order={2} fz={subtitleSize}>3. Token Economics</Title>
              </Group>
              
              <Text size={textSize} mb="md">
                The MindHive Network is powered by the MHN token, which serves multiple functions within the ecosystem:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">3.1 Utility Functions</Title>
              <List withPadding size={textSize} mb="xl">
                {[
                  "Payment for AI services and computational resources",
                  "Staking for network security and governance participation",
                  "Incentives for data contribution and model training",
                  "Fees for network operations and protocol usage"
                ].map((item, index) => (
                  <MotionDiv
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                  >
                    <List.Item 
                      icon={
                        <ThemeIcon color="coral" size={22} radius="xl">
                          <ChevronRight size={14} />
                        </ThemeIcon>
                      }
                    >
                      {item}
                    </List.Item>
                  </MotionDiv>
                ))}
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">3.2 Token Distribution</Title>
              <Text size={textSize} mb="md">
                The initial token distribution is designed to ensure broad participation and long-term sustainability:
              </Text>
              
              <Paper p="md" radius="md" withBorder mb="xl">
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Allocation</Table.Th>
                      <Table.Th>Percentage</Table.Th>
                      <Table.Th>Vesting Period</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    <Table.Tr>
                      <Table.Td>Community Development</Table.Td>
                      <Table.Td>40%</Table.Td>
                      <Table.Td>4 years with 1-year cliff</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Ecosystem Growth</Table.Td>
                      <Table.Td>25%</Table.Td>
                      <Table.Td>5 years linear vesting</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Core Team</Table.Td>
                      <Table.Td>15%</Table.Td>
                      <Table.Td>4 years with 1-year cliff</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Early Backers</Table.Td>
                      <Table.Td>10%</Table.Td>
                      <Table.Td>2 years with 6-month cliff</Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                      <Table.Td>Foundation Reserve</Table.Td>
                      <Table.Td>10%</Table.Td>
                      <Table.Td>5 years linear vesting</Table.Td>
                    </Table.Tr>
                  </Table.Tbody>
                </Table>
              </Paper>
              
              <Title order={3} fz={headingSize} mb="sm">3.3 Token Mechanics</Title>
              <Text size={textSize} mb="md">
                The MHN token incorporates several mechanisms to ensure long-term value accrual and network health:
              </Text>
              
              <List withPadding size={textSize} mb="xl">
                {[
                  "Fee burn: A percentage of network fees are burned, creating deflationary pressure",
                  "Staking rewards: Token holders can earn rewards by staking their tokens to secure the network",
                  "Governance rights: Staked tokens grant voting power in protocol governance decisions",
                  "Reputation multipliers: Long-term participants receive boosted rewards and influence"
                ].map((item, index) => (
                  <MotionDiv
                    key={index}
                    custom={index}
                    variants={listItemVariants}
                  >
                    <List.Item 
                      icon={
                        <ThemeIcon color="mint" size={22} radius="xl">
                          <ChevronRight size={14} />
                        </ThemeIcon>
                      }
                    >
                      {item}
                    </List.Item>
                  </MotionDiv>
                ))}
              </List>
            </MotionDiv>
              </Paper>
            </MotionDiv>
          </div>
          
          <MotionDiv
            variants={fadeInVariants}
          >
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
            <Group justify="center" mb="md">
              <Title order={2} fz={subtitleSize}>Join the MindHive Network</Title>
            </Group>
            
            <Text size={textSize} ta="center" mb="xl">
              Help build the future of decentralized collaborative AI. Join our community and contribute to the MindHive Network.
            </Text>
            
            <Group justify="center">
              <Button 
                component="a" 
                href="/contact" 
                variant="filled" 
                color="coral"
                radius="xl"
                size="lg"
              >
                Get Involved
              </Button>
              <Button 
                component="a" 
                href="/token" 
                variant="light" 
                color="mint"
                radius="xl"
                size="lg"
              >
                Learn About MHN Token
              </Button>
            </Group>
            </Paper>
          </MotionDiv>
        </MotionDiv>
      </Container>
      
      <Footer />
    </main>
  );
} 