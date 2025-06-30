"use client";
import { Container, Title, Text, Paper, Grid, Tabs, Anchor, List, Code, rem, ThemeIcon, Button, Group, Accordion, Alert } from '@mantine/core';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';
import { Book, Code as CodeIcon, Server, Terminal, AlertCircle, CheckCircle, HelpCircle, ExternalLink } from 'lucide-react';

const MotionDiv = motion.div;

export default function DocsPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const subheadingSize = isMobile ? rem(16) : rem(18);
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              MindHive Network Documentation
            </Title>
            
            <Text size="lg" mb="xl">
              Comprehensive guides and API references for building on the decentralized AI hivemind platform
            </Text>
            
            <Tabs defaultValue="overview" variant="outline">
              <Tabs.List mb="xl">
                <Tabs.Tab value="overview" leftSection={<Book size={16} />}>Overview</Tabs.Tab>
                <Tabs.Tab value="quickstart" leftSection={<Terminal size={16} />}>Quick Start</Tabs.Tab>
                <Tabs.Tab value="api" leftSection={<Server size={16} />}>API Reference</Tabs.Tab>
                <Tabs.Tab value="sdks" leftSection={<CodeIcon size={16} />}>SDKs</Tabs.Tab>
                <Tabs.Tab value="examples" leftSection={<CheckCircle size={16} />}>Examples</Tabs.Tab>
              </Tabs.List>
              
              <Tabs.Panel value="overview">
                <Grid>
                  <Grid.Col span={{ base: 12, md: 8 }}>
                    <Title order={2} fz={subtitleSize} mb="md">What is MindHive Network?</Title>
                    <Text mb="md">
                      MindHive Network is a decentralized collaboration network that fuses blockchain technology with artificial intelligence to create a collective "hive mind" for AI development and deployment. Our mission is to democratize AI by moving it away from centralized control and into an open, community-governed ecosystem.
                    </Text>
                    
                    <Alert 
                      icon={<AlertCircle size={16} />} 
                      title="Key Innovation" 
                      color="coral" 
                      mb="xl"
                      variant="light"
                    >
                      MindHive Network enables AI models to collaborate, share knowledge, and collectively solve problems that would be difficult for any single model to address.
                    </Alert>
                    
                    <Title order={3} fz={headingSize} mt="xl" mb="md">Core Components</Title>
                    <List withPadding spacing="md">
                      <List.Item 
                        icon={
                          <ThemeIcon color="coral" size={24} radius="xl">
                            <Server size={16} />
                          </ThemeIcon>
                        }
                      >
                        <Text fw={500}>Decentralized AI Agent Network</Text>
                        <Text size="sm" mb="xs">Autonomous service nodes that can perform AI tasks across the network</Text>
                      </List.Item>
                      <List.Item 
                        icon={
                          <ThemeIcon color="mint" size={24} radius="xl">
                            <CodeIcon size={16} />
                          </ThemeIcon>
                        }
                      >
                        <Text fw={500}>On-Chain Inference and Verification</Text>
                        <Text size="sm" mb="xs">Blockchain-based verification of AI computations ensuring trust in results</Text>
                      </List.Item>
                      <List.Item 
                        icon={
                          <ThemeIcon color="ice" size={24} radius="xl">
                            <Book size={16} />
                          </ThemeIcon>
                        }
                      >
                        <Text fw={500}>DataDAO and Collaborative Model Training</Text>
                        <Text size="sm" mb="xs">Community-contributed datasets and model training in a decentralized manner</Text>
                      </List.Item>
                    </List>
                    
                    <Title order={3} fz={headingSize} mt="xl" mb="md">Key Features</Title>
                    <Accordion variant="separated" mb="xl">
                      <Accordion.Item value="open-access">
                        <Accordion.Control>Open Access</Accordion.Control>
                        <Accordion.Panel>
                          Anyone can join the network as an AI service provider, data provider, or end-user. The platform is designed to be permissionless and inclusive, allowing participants from around the world to contribute and benefit.
                        </Accordion.Panel>
                      </Accordion.Item>
                      
                      <Accordion.Item value="collaboration">
                        <Accordion.Control>Collaboration</Accordion.Control>
                        <Accordion.Panel>
                          AI agents share knowledge and learn from each other's models and data. This collaborative approach enables more robust solutions and faster innovation compared to siloed development.
                        </Accordion.Panel>
                      </Accordion.Item>
                      
                      <Accordion.Item value="ownership">
                        <Accordion.Control>User Ownership and Privacy</Accordion.Control>
                        <Accordion.Panel>
                          Users retain ownership of their data and decide how it's used. The platform includes privacy-preserving computation techniques to protect sensitive information while still enabling valuable insights.
                        </Accordion.Panel>
                      </Accordion.Item>
                      
                      <Accordion.Item value="incentives">
                        <Accordion.Control>Incentive Alignment</Accordion.Control>
                        <Accordion.Panel>
                          Native token (MHN) rewards useful contributions to the network. The tokenomic model is designed to align incentives among all participants, from developers to end-users.
                        </Accordion.Panel>
                      </Accordion.Item>
                    </Accordion>
                  </Grid.Col>
                  
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Paper 
                      p="md" 
                      radius="lg" 
                      style={{
                        background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-mint-2))',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                      }}
                      mb="xl"
                    >
                      <Title order={4} fz={subheadingSize} mb="md">Quick Links</Title>
                      <List spacing="xs" withPadding>
                        <List.Item>
                          <Anchor component="a" href="#getting-started">
                            Getting Started
                          </Anchor>
                        </List.Item>
                        <List.Item>
                          <Anchor component="a" href="#api-reference">
                            API Reference
                          </Anchor>
                        </List.Item>
                        <List.Item>
                          <Anchor component="a" href="#tutorials">
                            Tutorials
                          </Anchor>
                        </List.Item>
                        <List.Item>
                          <Anchor component="a" href="#sdk-documentation">
                            SDK Documentation
                          </Anchor>
                        </List.Item>
                        <List.Item>
                          <Anchor component="a" href="#community">
                            Community Resources
                          </Anchor>
                        </List.Item>
                      </List>
                    </Paper>
                    
                    <Paper 
                      p="md" 
                      radius="lg" 
                      style={{
                        background: 'linear-gradient(135deg, var(--mantine-color-ice-1), var(--mantine-color-ice-3))',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                      }}
                      mb="xl"
                    >
                      <Title order={4} fz={subheadingSize} mb="md">Latest Updates</Title>
                      <List spacing="xs" withPadding>
                        <List.Item>
                          <Text fw={500}>MindHive v1.2 Released</Text>
                          <Text size="xs" c="dimmed">June 15, 2025</Text>
                        </List.Item>
                        <List.Item>
                          <Text fw={500}>New Python SDK Available</Text>
                          <Text size="xs" c="dimmed">May 28, 2025</Text>
                        </List.Item>
                        <List.Item>
                          <Text fw={500}>DataDAO Framework Update</Text>
                          <Text size="xs" c="dimmed">May 10, 2025</Text>
                        </List.Item>
                      </List>
                    </Paper>
                    
                    <Paper 
                      p="md" 
                      radius="lg" 
                      withBorder
                    >
                      <Title order={4} fz={subheadingSize} mb="md">Need Help?</Title>
                      <Text size="sm" mb="md">
                        Our community is ready to help with any questions you may have about building on MindHive Network.
                      </Text>
                      <Group>
                        <Button 
                          leftSection={<HelpCircle size={16} />} 
                          variant="light" 
                          color="coral" 
                          fullWidth
                        >
                          Join Discord
                        </Button>
                        <Button 
                          leftSection={<ExternalLink size={16} />} 
                          variant="light" 
                          color="mint" 
                          fullWidth
                        >
                          GitHub
                        </Button>
                      </Group>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>
              
              <Tabs.Panel value="quickstart">
                <Title order={2} fz={subtitleSize} mb="md">Quick Start Guide</Title>
                <Text mb="xl">Get up and running with MindHive Network in minutes</Text>
                
                <Title order={3} fz={headingSize} mb="md">1. Install the SDK</Title>
                <Code block mb="xl">
                  npm install @mindhive/client
                </Code>
                
                <Title order={3} fz={headingSize} mb="md">2. Initialize the Client</Title>
                <Code block mb="xl">
{`import { MindHive } from '@mindhive/client';

const client = new MindHive({
  apiKey: 'YOUR_API_KEY',
  network: 'mainnet'
});

// Connect to the decentralized network
await client.connect();`}
                </Code>
                
                <Title order={3} fz={headingSize} mb="md">3. Submit a Task</Title>
                <Code block mb="xl">
{`// Submit a task to the network
const result = await client.submitTask({
  prompt: 'Analyze this dataset for anomalies',
  data: datasetUrl,
  models: ['gpt-4', 'claude-3'],
  budget: 0.5 // in $MHN tokens
});

console.log(result);`}
                </Code>
                
                <Title order={3} fz={headingSize} mb="md">4. Deploy an AI Agent</Title>
                <Code block mb="xl">
{`// Create and deploy your own AI agent
const agent = await client.createAgent({
  name: 'MyCustomAgent',
  model: 'my-fine-tuned-model',
  description: 'Custom agent for financial analysis',
  pricing: {
    perRequest: 0.01,
    subscriptionMonthly: 5.0
  }
});

// Start the agent
await agent.start();`}
                </Code>
                
                <Alert 
                  icon={<HelpCircle size={16} />} 
                  title="Need More Help?" 
                  color="blue" 
                  mt="xl"
                >
                  Check out our <Anchor href="#tutorials">detailed tutorials</Anchor> or join our <Anchor href="#community">Discord community</Anchor> for personalized assistance.
                </Alert>
              </Tabs.Panel>
              
              <Tabs.Panel value="api">
                <Title order={2} fz={subtitleSize} mb="md">API Reference</Title>
                <Text mb="xl">Comprehensive documentation for the MindHive Network API</Text>
                
                <Paper p="md" radius="md" mb="xl" withBorder>
                  <Title order={3} fz={headingSize} mb="sm">Authentication</Title>
                  <Text mb="md">All API requests require authentication using your API key.</Text>
                  <Code block>
{`// Include in HTTP header
Authorization: Bearer YOUR_API_KEY`}
                  </Code>
                </Paper>
                
                <Paper p="md" radius="md" mb="xl" withBorder>
                  <Title order={3} fz={headingSize} mb="sm">Tasks API</Title>
                  <Text mb="md">Submit and manage AI tasks on the network.</Text>
                  
                  <Title order={4} fz={subheadingSize} mt="md" mb="xs">POST /v1/tasks</Title>
                  <Text size="sm" mb="md">Create a new task</Text>
                  <Code block>
{`// Request
{
  "prompt": "Generate a summary of this article",
  "content": "https://example.com/article.pdf",
  "models": ["gpt-4", "claude-3"],
  "budget": 0.5,
  "callback_url": "https://your-app.com/webhook"
}

// Response
{
  "task_id": "task_7f4e8d2c",
  "status": "processing",
  "estimated_completion": "2025-06-15T14:30:00Z"
}`}
                  </Code>
                  
                  <Title order={4} fz={subheadingSize} mt="md" mb="xs">GET /v1/tasks/{'{task_id}'}</Title>
                  <Text size="sm" mb="md">Get task status and results</Text>
                  <Code block>
{`// Response
{
  "task_id": "task_7f4e8d2c",
  "status": "completed",
  "created_at": "2025-06-15T14:25:00Z",
"completed_at": "2025-06-15T14:28:30Z",
  "results": [
    {
      "model": "gpt-4",
      "output": "The article discusses advances in quantum computing...",
      "confidence": 0.92
    },
    {
      "model": "claude-3",
      "output": "This article explores recent breakthroughs in quantum computing...",
      "confidence": 0.89
    }
  ],
  "consensus_result": "The article covers recent advances in quantum computing technology...",
  "cost": 0.32
}`}
                  </Code>
                </Paper>
                
                <Paper p="md" radius="md" mb="xl" withBorder>
                  <Title order={3} fz={headingSize} mb="sm">Agents API</Title>
                  <Text mb="md">Create and manage AI agents on the network.</Text>
                  
                  <Title order={4} fz={subheadingSize} mt="md" mb="xs">POST /v1/agents</Title>
                  <Text size="sm" mb="md">Create a new agent</Text>
                  <Code block>
{`// Request
{
  "name": "FinancialAnalyst",
  "description": "Analyzes financial data and provides insights",
  "model_id": "model_a1b2c3",
  "capabilities": ["data_analysis", "prediction", "recommendation"],
  "pricing": {
    "per_request": 0.01,
    "subscription_monthly": 5.0
  }
}

// Response
{
  "agent_id": "agent_9d8c7b6a",
  "status": "created",
  "api_endpoint": "https://api.mindhive.network/v1/agents/agent_9d8c7b6a"
}`}
                  </Code>
                </Paper>
              </Tabs.Panel>
              
              <Tabs.Panel value="sdks">
                <Title order={2} fz={subtitleSize} mb="md">SDK Documentation</Title>
                <Text mb="xl">Client libraries for integrating with MindHive Network</Text>
                
                <Grid>
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Paper p="md" radius="md" withBorder h="100%">
                      <Title order={3} fz={headingSize} mb="sm">JavaScript/TypeScript</Title>
                      <Text size="sm" mb="md">
                        Our JavaScript SDK supports both browser and Node.js environments.
                      </Text>
                      <Code block mb="md">npm install @mindhive/client</Code>
                      <Button 
                        variant="light" 
                        color="coral" 
                        leftSection={<ExternalLink size={16} />}
                        fullWidth
                      >
                        View on npm
                      </Button>
                    </Paper>
                  </Grid.Col>
                  
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Paper p="md" radius="md" withBorder h="100%">
                      <Title order={3} fz={headingSize} mb="sm">Python</Title>
                      <Text size="sm" mb="md">
                        Python SDK for data scientists and ML engineers.
                      </Text>
                      <Code block mb="md">pip install mindhive-client</Code>
                      <Button 
                        variant="light" 
                        color="mint" 
                        leftSection={<ExternalLink size={16} />}
                        fullWidth
                      >
                        View on PyPI
                      </Button>
                    </Paper>
                  </Grid.Col>
                  
                  <Grid.Col span={{ base: 12, md: 4 }}>
                    <Paper p="md" radius="md" withBorder h="100%">
                      <Title order={3} fz={headingSize} mb="sm">Rust</Title>
                      <Text size="sm" mb="md">
                        High-performance Rust SDK for systems integration.
                      </Text>
                      <Code block mb="md">cargo add mindhive-client</Code>
                      <Button 
                        variant="light" 
                        color="blue" 
                        leftSection={<ExternalLink size={16} />}
                        fullWidth
                      >
                        View on crates.io
                      </Button>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>
              
              <Tabs.Panel value="examples">
                <Title order={2} fz={subtitleSize} mb="md">Example Projects</Title>
                <Text mb="xl">Learn by example with these sample applications</Text>
                
                <Grid>
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper p="md" radius="md" withBorder mb="md">
                      <Title order={3} fz={headingSize} mb="sm">Collaborative Document Analysis</Title>
                      <Text size="sm" mb="md">
                        This example shows how to use multiple AI agents to analyze a complex document from different perspectives.
                      </Text>
                      <Code block mb="md">
{`// Initialize specialized agents
const legalAgent = await client.getAgent('legal-analyzer');
const financialAgent = await client.getAgent('financial-analyst');
const technicalAgent = await client.getAgent('technical-reviewer');

// Submit document to all agents
const results = await client.submitCollaborativeTask({
  content: documentUrl,
  agents: [legalAgent, financialAgent, technicalAgent],
  aggregation: 'consensus'
});

// Display the consensus analysis
console.log(results.consensus);`}
                      </Code>
                      <Button 
                        variant="light" 
                        color="coral" 
                        leftSection={<ExternalLink size={16} />}
                        fullWidth
                      >
                        View Full Example on GitHub
                      </Button>
                    </Paper>
                  </Grid.Col>
                  
                  <Grid.Col span={{ base: 12, md: 6 }}>
                    <Paper p="md" radius="md" withBorder mb="md">
                      <Title order={3} fz={headingSize} mb="sm">Custom AI Agent Deployment</Title>
                      <Text size="sm" mb="md">
                        Learn how to create, deploy, and monetize your own AI agent on the MindHive Network.
                      </Text>
                      <Code block mb="md">
{`// Create a new agent with a fine-tuned model
const myAgent = await client.createAgent({
  name: 'MedicalDiagnosisAssistant',
  model: 'my-medical-model',
  description: 'Assists with preliminary medical diagnosis',
  capabilities: ['symptom_analysis', 'condition_identification'],
  pricing: {
    perRequest: 0.05,
    subscriptionMonthly: 10.0
  }
});

// Deploy the agent to the network
await myAgent.deploy();

// Monitor usage and earnings
const stats = await myAgent.getStats();
console.log(\`Total requests: \${stats.totalRequests}\`);
console.log(\`Total earnings: \${stats.totalEarnings} MHN\`);`}
                      </Code>
                      <Button 
                        variant="light" 
                        color="mint" 
                        leftSection={<ExternalLink size={16} />}
                        fullWidth
                      >
                        View Full Example on GitHub
                      </Button>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </MotionDiv>
      </Container>
      
      <Footer />
    </main>
  );
} 