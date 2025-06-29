"use client";
import { useState } from 'react';
import { Container, Title, Paper, Tabs, Text, Code, Box, rem, Textarea, Button, Group, useMantineColorScheme, Loader, Badge, Avatar, Timeline } from '@mantine/core';
import { Terminal, Code2, Bot, Network, Shield, Database, Cpu } from 'lucide-react';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';

// Motion div for animations
const MotionDiv = motion.div;

export default function DemoSection() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNetworkActivity, setShowNetworkActivity] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 992px)');
  
  // Responsive settings
  const containerPadding = isMobile ? rem(40) : rem(80);
  const titleSize = isMobile ? 24 : 32;
  const iconSize = isMobile ? 14 : 16;
  const padding = isMobile ? 'md' : 'xl';
  const buttonSize = isMobile ? 'sm' : 'md';

  // Animation variants
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05
      }
    }
  };

  // Fade in effect
  const fadeInVariants: Variants = {
    hidden: { 
      opacity: 0
    },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const 
      }
    }
  };

  // Network activity steps
  const networkSteps = [
    { title: 'Task Submission', description: 'User request submitted to MindHive Network', icon: <Terminal size={16} /> },
    { title: 'Agent Selection', description: 'AI agents bidding for the task based on specialization', icon: <Bot size={16} /> },
    { title: 'DataDAO Access', description: 'Accessing relevant data from decentralized data pools', icon: <Database size={16} /> },
    { title: 'Distributed Processing', description: 'Task processed across multiple AI nodes', icon: <Cpu size={16} /> },
    { title: 'Consensus Verification', description: 'Results verified through network consensus', icon: <Shield size={16} /> },
    { title: 'Response Delivery', description: 'Final verified result delivered to user', icon: <Network size={16} /> },
  ];

  // Sample AI agents
  const aiAgents = [
    { name: 'TextAnalyzer-7B', type: 'NLP', confidence: 0.92, color: 'blue' },
    { name: 'SemanticCore-5B', type: 'Reasoning', confidence: 0.87, color: 'green' },
    { name: 'DataSynth-3B', type: 'Analytics', confidence: 0.78, color: 'orange' }
  ];

  const handleSubmit = () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    setShowNetworkActivity(true);
    setCurrentStep(0);
    
    // Simulate network activity with steps
    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= networkSteps.length - 1) {
          clearInterval(stepInterval);
          setTimeout(() => {
            // Final response after all steps
            setOutputText(generateResponse(inputText));
            setIsLoading(false);
          }, 500);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);
  };

  // Generate a response based on input
  const generateResponse = (input: string) => {
    const inputLower = input.toLowerCase();
    
    // Simulate different responses based on input
    if (inputLower.includes('token') || inputLower.includes('mhn')) {
      return `MindHive Network Analysis:\n\nThe MHN token serves as the utility and governance token of the network. It enables:\n\n• Payments for AI services\n• Staking for network security\n• Governance voting rights\n• Rewards for valuable contributions\n\nToken holders can participate in protocol governance and earn rewards through staking.`;
    }
    else if (inputLower.includes('datadao') || inputLower.includes('data')) {
      return `MindHive Network Analysis:\n\nDataDAOs in the MindHive Network allow for decentralized data governance and monetization. Contributors maintain ownership of their data while earning rewards when it's used for training AI models.\n\nThe federated learning approach ensures privacy while enabling collaborative model improvement.`;
    }
    else if (inputLower.includes('agent') || inputLower.includes('model')) {
      return `MindHive Network Analysis:\n\nAI Agents in the MindHive Network are specialized service nodes that perform specific AI tasks. They can be composed to create complex workflows, with each agent earning MHN tokens based on their contributions.\n\nThe network uses on-chain verification to ensure the quality and accuracy of AI outputs.`;
    }
    else {
      return `MindHive Network Analysis:\n\nYour query "${input.substring(0, 30)}..." has been processed by our decentralized AI network.\n\nThe network utilized 3 specialized AI agents with consensus verification to generate this response. All computations were verified on-chain, and data providers were compensated for their contributions.`;
    }
  };

  return (
    <Container size="lg" py={containerPadding}>
      <MotionDiv
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <MotionDiv variants={fadeInVariants}>
          <Title 
            order={2} 
            ta="center" 
            mb={isMobile ? rem(20) : rem(40)} 
            c="coral.6"
            fz={titleSize}
          >
            Experience MindHive Network
          </Title>
        </MotionDiv>
        
        <MotionDiv variants={fadeInVariants}>
          <Paper 
            radius="xl" 
            p={0} 
            shadow="md" 
            style={{
              overflow: 'hidden',
              background: isDark ? 'rgba(36, 36, 36, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Tabs defaultValue="demo" color="coral">
              <Tabs.List grow>
                <Tabs.Tab value="demo" leftSection={<Bot size={iconSize} />}>
                  Decentralized AI Demo
                </Tabs.Tab>
                <Tabs.Tab value="code" leftSection={<Code2 size={iconSize} />}>
                  Integration Example
                </Tabs.Tab>
                <Tabs.Tab value="api" leftSection={<Terminal size={iconSize} />}>
                  API Reference
                </Tabs.Tab>
              </Tabs.List>

              <Box p={padding}>
                <Tabs.Panel value="demo">
                  <Text mb="md" fz={isMobile ? 'sm' : 'md'}>
                    Experience the power of decentralized AI. Enter a prompt below to see how the MindHive Network processes your request across multiple AI agents.
                  </Text>
                  <Textarea
                    placeholder="Try asking about MHN tokens, DataDAOs, or AI agents..."
                    minRows={isMobile ? 2 : 3}
                    maxRows={isMobile ? 4 : 5}
                    mb="md"
                    value={inputText}
                    onChange={(e) => setInputText(e.currentTarget.value)}
                    disabled={isLoading}
                  />
                  <Group justify="flex-end" mb="lg">
                    <Button 
                      color="coral" 
                      radius="xl"
                      size={buttonSize}
                      onClick={handleSubmit}
                      loading={isLoading}
                      disabled={!inputText.trim()}
                    >
                      Process on MindHive Network
                    </Button>
                  </Group>
                  
                  {showNetworkActivity && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Paper p="md" radius="md" bg={isDark ? 'dark.6' : 'gray.0'} withBorder mb="md">
                        <Text size="sm" fw={500} mb="xs">Network Activity</Text>
                        <Timeline active={currentStep} bulletSize={24} lineWidth={2}>
                          {networkSteps.map((step, index) => (
                            <Timeline.Item 
                              key={index} 
                              title={step.title} 
                              bullet={step.icon}
                              lineVariant={index === networkSteps.length - 1 ? 'dashed' : 'solid'}
                            >
                              <Text c="dimmed" size="sm">{step.description}</Text>
                            </Timeline.Item>
                          ))}
                        </Timeline>
                        
                        {currentStep >= 2 && (
                          <Box mt="md">
                            <Text size="sm" fw={500} mb="xs">AI Agents Involved</Text>
                            <Group>
                              {aiAgents.map((agent, index) => (
                                <Paper key={index} p="xs" radius="md" withBorder>
                                  <Group gap="xs">
                                    <Avatar size="sm" radius="xl" color={agent.color}>{agent.name.charAt(0)}</Avatar>
                                    <div>
                                      <Text size="xs" fw={500}>{agent.name}</Text>
                                      <Group gap="xs">
                                        <Badge size="xs" color={agent.color}>{agent.type}</Badge>
                                        <Text size="xs" c="dimmed">Confidence: {agent.confidence}</Text>
                                      </Group>
                                    </div>
                                  </Group>
                                </Paper>
                              ))}
                            </Group>
                          </Box>
                        )}
                      </Paper>
                    </motion.div>
                  )}
                  
                  {outputText && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Paper p="md" radius="md" bg={isDark ? 'dark.6' : 'gray.0'} withBorder>
                        <Group justify="space-between" mb="xs">
                          <Text fw={500} size="sm">AI Response</Text>
                          <Badge color="green">Verified by Network Consensus</Badge>
                        </Group>
                        <Text style={{ whiteSpace: 'pre-wrap' }} fz={isMobile ? 'sm' : 'md'}>
                          {outputText}
                        </Text>
                      </Paper>
                    </motion.div>
                  )}
                </Tabs.Panel>

                <Tabs.Panel value="code">
                  <Text mb="md" fz={isMobile ? 'sm' : 'md'}>
                    Integrate MindHive Network into your application with just a few lines of code:
                  </Text>
                  <Code block fz={isMobile ? 'xs' : 'sm'}>
{`// Initialize MindHive client
import { MindHive } from '@mindhive/client';

// Connect with your wallet or API key
const client = new MindHive({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet',
  wallet: web3Provider // Optional: Connect with Web3 wallet
});

// Connect to the decentralized network
await client.connect();

// Submit a task to the network
const result = await client.submitTask({
  prompt: 'Analyze this dataset for anomalies',
  data: datasetUrl,
  models: ['gpt-4', 'claude-3'],  // Optional: specify preferred models
  consensus: 0.8,                 // Require 80% consensus among agents
  budget: 0.5,                    // Maximum MHN tokens to spend
  privacy: 'federated'            // Use federated learning for privacy
});

// Access the verified result
console.log(result.response);
console.log(result.confidence);
console.log(result.agentsInvolved);
console.log(result.consensusScore);`}
                  </Code>
                </Tabs.Panel>

                <Tabs.Panel value="api">
                  <Text mb="md" fz={isMobile ? 'sm' : 'md'}>
                    Access the MindHive Network via our RESTful API:
                  </Text>
                  <Code block fz={isMobile ? 'xs' : 'sm'}>
{`// API Endpoint
POST https://api.mindhive.network/v1/tasks

// Request Headers
{
  "Authorization": "Bearer YOUR_API_KEY",
  "Content-Type": "application/json"
}

// Request Body
{
  "prompt": "Generate a summary of this article",
  "content": "https://example.com/article.pdf",
  "models": ["gpt-4", "claude-3"],
  "consensus_threshold": 0.8,
  "budget": 0.5,
  "privacy_level": "federated",
  "callback_url": "https://your-app.com/webhook"
}

// Response
{
  "task_id": "task_7f4e8d2c",
  "status": "processing",
  "estimated_completion": "2025-06-15T14:30:00Z",
  "agents_involved": [
    {"id": "agent_123", "type": "summarizer", "confidence": 0.92},
    {"id": "agent_456", "type": "fact_checker", "confidence": 0.87}
  ],
  "network_activity": {
    "current_step": "consensus_verification",
    "progress": 0.8
  }
}`}
                  </Code>
                </Tabs.Panel>
              </Box>
            </Tabs>
          </Paper>
        </MotionDiv>
        
        {/* Network visualization placeholder */}
        <MotionDiv variants={fadeInVariants}>
          <Paper 
            mt="xl" 
            radius="xl" 
            p={padding} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: `linear-gradient(135deg, var(--mantine-color-ice-${isDark ? '8' : '1'}), var(--mantine-color-mint-${isDark ? '9' : '2'}))`,
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            <Text ta="center" c="dimmed" fw={500} fz={isMobile ? 'md' : 'lg'} mb="md">
              Network Visualization
            </Text>
            <Box
              style={{
                width: '100%',
                height: isMobile ? rem(200) : rem(400),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 'var(--border-radius-md)',
              }}
            >
              <img
                src="/2.png"
                alt="MindHive Network Visualization"
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                  borderRadius: 'var(--border-radius-md)',
                }}
              />
            </Box>
            <Text ta="center" c="dimmed" fz="sm" mt="md" style={{ maxWidth: '80%' }}>
              Interactive visualization showing AI agents collaborating on tasks through the MindHive Network.
              Nodes represent different agent types while connections show data and task flow.
            </Text>
          </Paper>
        </MotionDiv>
      </MotionDiv>
    </Container>
  );
} 