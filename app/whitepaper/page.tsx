"use client";
import { Container, Title, Text, Paper, Grid, Tabs, Anchor, List, Code, rem, Table, Blockquote } from '@mantine/core';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';
import TechDemo from './TechDemo';

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

export default function WhitepaperPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const subheadingSize = isMobile ? rem(16) : rem(18);
  const textSize = isMobile ? 'sm' : 'md';
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
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
            <MotionDiv variants={fadeInVariants}>
              <Title order={1} c="coral.6" mb="xl" ta="center" fz={titleSize}>
                MindHive Network Whitepaper
              </Title>
              
              <Text size="lg" mb="xl" ta="center" fw={500}>
                A Decentralized Collaborative AI Network
              </Text>
              
              <Text size="sm" mb="xl" ta="center" c="dimmed">
                Version 1.0 | June 2025
              </Text>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">Abstract</Title>
              <Text size={textSize} mb="xl">
                MindHive Network is a decentralized protocol that enables collaborative development and deployment of artificial intelligence models. By leveraging blockchain technology, MindHive creates a trustless environment where AI developers, data providers, and computational resource providers can collaborate to create more robust and ethical AI systems. This whitepaper outlines the architecture, governance mechanisms, and economic model of the MindHive Network, as well as its potential applications and roadmap for development.
              </Text>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">1. Introduction</Title>
              <Text size={textSize} mb="md">
                Artificial intelligence has emerged as one of the most transformative technologies of the 21st century, with applications spanning across industries from healthcare to finance, transportation to entertainment. However, the development of AI systems has been largely centralized, with a few large corporations controlling the most advanced models and the vast amounts of data required to train them.
              </Text>
              <Text size={textSize} mb="md">
                This centralization poses several challenges:
              </Text>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Limited access to cutting-edge AI capabilities for smaller organizations and individuals</List.Item>
                <List.Item>Concentration of decision-making power regarding AI development and deployment</List.Item>
                <List.Item>Potential misalignment between corporate incentives and broader societal interests</List.Item>
                <List.Item>Lack of transparency in how AI systems are trained and operated</List.Item>
                <List.Item>Inadequate compensation for data contributors whose information trains these systems</List.Item>
              </List>
              <Text size={textSize} mb="xl">
                MindHive Network addresses these challenges by creating a decentralized infrastructure for collaborative AI development and deployment. By distributing ownership, governance, and rewards across a diverse network of participants, MindHive aims to democratize access to AI technology while ensuring its development aligns with broader human values and needs.
              </Text>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">2. System Architecture</Title>
              <Text size={textSize} mb="md">
                The MindHive Network consists of several interconnected components:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">2.1 Core Protocol Layer</Title>
              <Text size={textSize} mb="md">
                The foundation of the MindHive Network is a blockchain-based protocol that enables secure, verifiable transactions between network participants. This layer includes:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Smart contracts governing network interactions</List.Item>
                <List.Item>On-chain verification mechanisms for AI computations</List.Item>
                <List.Item>Token economics and incentive structures</List.Item>
                <List.Item>Governance mechanisms for protocol upgrades and parameter adjustments</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">2.2 AI Agent Network</Title>
              <Text size={textSize} mb="md">
                The AI Agent Network consists of specialized AI services that can be deployed, composed, and monetized on the network:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Standardized interfaces for AI agent deployment</List.Item>
                <List.Item>Service discovery and reputation systems</List.Item>
                <List.Item>Composition mechanisms for creating complex AI workflows</List.Item>
                <List.Item>Monitoring and quality assurance tools</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">2.3 DataDAO Framework</Title>
              <Text size={textSize} mb="md">
                The DataDAO Framework enables collective ownership and governance of datasets:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Data contribution and validation mechanisms</List.Item>
                <List.Item>Privacy-preserving data access controls</List.Item>
                <List.Item>Fair compensation models for data contributors</List.Item>
                <List.Item>Governance structures for dataset management</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">2.4 Compute Marketplace</Title>
              <Text size={textSize} mb="xl">
                The Compute Marketplace connects AI workloads with computational resources:
              </Text>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Resource discovery and matching algorithms</List.Item>
                <List.Item>Verifiable computation protocols</List.Item>
                <List.Item>Dynamic pricing mechanisms</List.Item>
                <List.Item>Quality of service guarantees</List.Item>
              </List>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">3. Token Economics</Title>
              <Text size={textSize} mb="md">
                The MindHive Network is powered by the MHN token, which serves multiple functions within the ecosystem:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">3.1 Utility Functions</Title>
              <List withPadding size={textSize} mb="md">
                <List.Item>Payment for AI services and computational resources</List.Item>
                <List.Item>Staking for network security and governance participation</List.Item>
                <List.Item>Incentives for data contribution and model training</List.Item>
                <List.Item>Fees for network operations and protocol usage</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">3.2 Token Distribution</Title>
              <Text size={textSize} mb="md">
                The initial token distribution is designed to ensure broad participation and long-term sustainability:
              </Text>
              <Table mb="md">
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
              
              <Title order={3} fz={headingSize} mb="sm">3.3 Token Mechanics</Title>
              <Text size={textSize} mb="xl">
                The MHN token incorporates several mechanisms to ensure long-term value accrual and network health:
              </Text>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Fee burn: A percentage of network fees are burned, creating deflationary pressure</List.Item>
                <List.Item>Staking rewards: Token holders can earn rewards by staking their tokens to secure the network</List.Item>
                <List.Item>Governance rights: Staked tokens grant voting power in protocol governance decisions</List.Item>
                <List.Item>Reputation multipliers: Long-term participants receive boosted rewards and influence</List.Item>
              </List>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">4. Governance</Title>
              <Text size={textSize} mb="md">
                MindHive Network employs a multi-layered governance system designed to balance efficiency with decentralization:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">4.1 Protocol Governance</Title>
              <Text size={textSize} mb="md">
                Protocol-level decisions are made through a combination of:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Token-weighted voting on improvement proposals</List.Item>
                <List.Item>Delegated expert committees for specialized domains</List.Item>
                <List.Item>Quadratic voting mechanisms to prevent plutocracy</List.Item>
                <List.Item>Time-locked execution of approved changes</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">4.2 DataDAO Governance</Title>
              <Text size={textSize} mb="md">
                Each DataDAO has its own governance structure, with:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Data contributor voting rights</List.Item>
                <List.Item>Usage policy determination</List.Item>
                <List.Item>Revenue distribution decisions</List.Item>
                <List.Item>Quality control mechanisms</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">4.3 Dispute Resolution</Title>
              <Text size={textSize} mb="xl">
                The network includes mechanisms for resolving disputes between participants:
              </Text>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Arbitration committees selected by random sortition</List.Item>
                <List.Item>Escalation paths for unresolved disputes</List.Item>
                <List.Item>Reputation-based incentives for fair judgments</List.Item>
                <List.Item>Transparent record of past decisions</List.Item>
              </List>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">5. Applications and Use Cases</Title>
              <Text size={textSize} mb="md">
                MindHive Network enables a wide range of applications across various domains:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">5.1 Collaborative Research</Title>
              <Text size={textSize} mb="md">
                Researchers can collaborate on complex AI problems without needing to share sensitive data or intellectual property directly. The network facilitates:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Federated learning across institutional boundaries</List.Item>
                <List.Item>Privacy-preserving model training on sensitive datasets</List.Item>
                <List.Item>Reproducible research with verifiable results</List.Item>
                <List.Item>Fair attribution and compensation for contributions</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">5.2 Decentralized AI Services</Title>
              <Text size={textSize} mb="md">
                Developers can deploy AI services that are:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Resistant to censorship and single points of failure</List.Item>
                <List.Item>Transparently priced and fairly compensated</List.Item>
                <List.Item>Composable with other services for complex workflows</List.Item>
                <List.Item>Governed by their users and stakeholders</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">5.3 Community-Owned Models</Title>
              <Text size={textSize} mb="md">
                Communities can collectively develop and own AI models that:
              </Text>
              <List withPadding size={textSize} mb="md">
                <List.Item>Serve specific community needs and values</List.Item>
                <List.Item>Generate revenue that flows back to community members</List.Item>
                <List.Item>Evolve according to community governance decisions</List.Item>
                <List.Item>Maintain alignment with community interests over time</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">5.4 Ethical AI Development</Title>
              <Text size={textSize} mb="xl">
                The network supports the development of AI systems that are:
              </Text>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Transparent in their training and operation</List.Item>
                <List.Item>Accountable to diverse stakeholders</List.Item>
                <List.Item>Designed with explicit ethical constraints</List.Item>
                <List.Item>Subject to ongoing monitoring and evaluation</List.Item>
              </List>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">6. Roadmap</Title>
              <Text size={textSize} mb="md">
                The development of MindHive Network will proceed in several phases:
              </Text>
              
              <Title order={3} fz={headingSize} mb="sm">Phase 1: Foundation (Q2-Q4 2025)</Title>
              <List withPadding size={textSize} mb="md">
                <List.Item>Core protocol development and testing</List.Item>
                <List.Item>Initial community building and developer outreach</List.Item>
                <List.Item>Testnet deployment and security audits</List.Item>
                <List.Item>Token generation event and initial distribution</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">Phase 2: Network Launch (Q1-Q2 2026)</Title>
              <List withPadding size={textSize} mb="md">
                <List.Item>Mainnet launch with basic functionality</List.Item>
                <List.Item>AI agent marketplace deployment</List.Item>
                <List.Item>Developer tools and SDK release</List.Item>
                <List.Item>First partner integrations</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">Phase 3: Ecosystem Growth (Q3-Q4 2026)</Title>
              <List withPadding size={textSize} mb="md">
                <List.Item>Cross-chain integration and interoperability</List.Item>
                <List.Item>Advanced governance mechanisms implementation</List.Item>
                <List.Item>AI model marketplace launch</List.Item>
                <List.Item>Expanded DataDAO framework</List.Item>
              </List>
              
              <Title order={3} fz={headingSize} mb="sm">Phase 4: Global Expansion (2027 and beyond)</Title>
              <List withPadding size={textSize} mb="xl">
                <List.Item>Enterprise adoption initiatives</List.Item>
                <List.Item>Advanced AI capabilities integration</List.Item>
                <List.Item>Regulatory compliance frameworks</List.Item>
                <List.Item>Global community expansion</List.Item>
              </List>
            </MotionDiv>
            
            <MotionDiv variants={fadeInVariants}>
              <Title order={2} fz={subtitleSize} mb="md">7. Conclusion</Title>
              <Text size={textSize} mb="md">
                MindHive Network represents a fundamental shift in how AI systems are developed, deployed, and governed. By creating a decentralized infrastructure for collaborative AI, we aim to democratize access to this transformative technology while ensuring it develops in alignment with human values and needs.
              </Text>
              <Text size={textSize} mb="md">
                The challenges ahead are significant, spanning technical, economic, and governance domains. However, we believe that a diverse community of participants, aligned through carefully designed incentives and governance mechanisms, can overcome these challenges and realize the full potential of decentralized collaborative AI.
              </Text>
              <Blockquote cite="– The MindHive Network Team" mb="xl">
                We invite developers, researchers, data scientists, and anyone interested in shaping the future of AI to join us in building the MindHive Network. Together, we can create a more open, accessible, and human-centered AI ecosystem.
              </Blockquote>
            </MotionDiv>
          </Paper>
          
          <MotionDiv variants={fadeInVariants}>
            <TechDemo />
          </MotionDiv>
        </MotionDiv>
      </Container>
      
      <Footer />
    </main>
  );
} 