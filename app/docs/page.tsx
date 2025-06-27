"use client";
import { Container, Title, Text, Paper, Grid, Tabs, Anchor, List, Code, rem } from '@mantine/core';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mantine/hooks';
import { motion } from 'framer-motion';

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
          <Title order={1} c="coral.6" mb="md" fz={titleSize}>MindHive Network Documentation</Title>
          <Text size="lg" mb="xl">
            Comprehensive guides and API references for building on the decentralized AI hivemind platform
          </Text>
          
          <Tabs defaultValue="overview">
            <Tabs.List mb="md">
              <Tabs.Tab value="overview">Overview</Tabs.Tab>
              <Tabs.Tab value="quickstart">Quick Start</Tabs.Tab>
              <Tabs.Tab value="api">API Reference</Tabs.Tab>
              <Tabs.Tab value="sdks">SDKs</Tabs.Tab>
              <Tabs.Tab value="examples">Examples</Tabs.Tab>
            </Tabs.List>
            
            <Tabs.Panel value="overview">
              <Grid>
                <Grid.Col span={{ base: 12, md: 8 }}>
                  <Title order={2} fz={subtitleSize} mb="md">What is MindHive Network?</Title>
                  <Text mb="md">
                    MindHive Network is a decentralized collaboration network that fuses blockchain technology with artificial intelligence to create a collective "hive mind" for AI development and deployment. Our mission is to democratize AI by moving it away from centralized control and into an open, community-governed ecosystem.
                  </Text>
                  
                  <Title order={3} fz={headingSize} mt="xl" mb="md">Core Components</Title>
                  <List withPadding>
                    <List.Item>
                      <Text fw={500}>Decentralized AI Agent Network</Text>
                      <Text size="sm" mb="xs">Autonomous service nodes that can perform AI tasks across the network</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>On-Chain Inference and Verification</Text>
                      <Text size="sm" mb="xs">Blockchain-based verification of AI computations ensuring trust in results</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>DataDAO and Collaborative Model Training</Text>
                      <Text size="sm" mb="xs">Community-contributed datasets and model training in a decentralized manner</Text>
                    </List.Item>
                  </List>
                  
                  <Title order={3} fz={headingSize} mt="xl" mb="md">Key Features</Title>
                  <List withPadding>
                    <List.Item>
                      <Text fw={500}>Open Access</Text>
                      <Text size="sm" mb="xs">Anyone can join the network as an AI service provider, data provider, or end-user</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Collaboration</Text>
                      <Text size="sm" mb="xs">AI agents share knowledge and learn from each other's models and data</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>User Ownership and Privacy</Text>
                      <Text size="sm" mb="xs">Users retain ownership of their data and decide how it's used</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Incentive Alignment</Text>
                      <Text size="sm" mb="xs">Native token (MHN) rewards useful contributions to the network</Text>
                    </List.Item>
                  </List>
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
                    mt="xl"
                    style={{
                      background: 'linear-gradient(135deg, var(--mantine-color-ice-1), var(--mantine-color-ice-3))',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    <Title order={4} fz={subheadingSize} mb="md">Latest Updates</Title>
                    <List spacing="xs" withPadding>
                      <List.Item>
                        <Text fw={500}>MindHive v1.2 Released</Text>
                        <Text size="xs" c="dimmed">June 15, 2023</Text>
                      </List.Item>
                      <List.Item>
                        <Text fw={500}>New Python SDK Available</Text>
                        <Text size="xs" c="dimmed">May 28, 2023</Text>
                      </List.Item>
                      <List.Item>
                        <Text fw={500}>DataDAO Framework Update</Text>
                        <Text size="xs" c="dimmed">May 10, 2023</Text>
                      </List.Item>
                    </List>
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
  budget: 0.5 // in $HIVE tokens
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
  "estimated_completion": "2023-06-15T14:30:00Z"
}`}
                </Code>
                
                <Title order={4} fz={subheadingSize} mt="md" mb="xs">GET /v1/tasks/:taskId</Title>
                <Text size="sm" mb="md">Get task status and results</Text>
                <Code block>
{`// Response
{
  "task_id": "task_7f4e8d2c",
  "status": "completed",
  "result": {
    "summary": "This article discusses the impact of...",
    "confidence": 0.92,
    "models_used": ["gpt-4", "claude-3"],
    "cost": 0.42
  }
}`}
                </Code>
              </Paper>
              
              <Paper p="md" radius="md" mb="xl" withBorder>
                <Title order={3} fz={headingSize} mb="sm">Agents API</Title>
                <Text mb="md">Create and manage AI agents on the network.</Text>
                
                <Title order={4} fz={subheadingSize} mt="md" mb="xs">POST /v1/agents</Title>
                <Text size="sm" mb="md">Deploy a new agent</Text>
                <Code block>
{`// Request
{
  "name": "FinancialAnalysisAgent",
  "model_id": "my-fine-tuned-model",
  "description": "Analyzes financial data and provides insights",
  "pricing": {
    "per_request": 0.01,
    "subscription_monthly": 5.0
  },
  "capabilities": ["financial_analysis", "trend_detection"]
}

// Response
{
  "agent_id": "agent_9d2c4b1a",
  "status": "deploying",
  "endpoint": "https://api.mindhive.network/v1/agents/agent_9d2c4b1a"
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
                    <Title order={3} fz={headingSize} mb="md">JavaScript/TypeScript</Title>
                    <Text mb="md">Official JavaScript SDK for Node.js and browser applications</Text>
                    <Code block mb="md">npm install @mindhive/client</Code>
                    <Anchor href="#javascript-docs">View Documentation</Anchor>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper p="md" radius="md" withBorder h="100%">
                    <Title order={3} fz={headingSize} mb="md">Python</Title>
                    <Text mb="md">Official Python SDK for data science and ML applications</Text>
                    <Code block mb="md">pip install mindhive-client</Code>
                    <Anchor href="#python-docs">View Documentation</Anchor>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper p="md" radius="md" withBorder h="100%">
                    <Title order={3} fz={headingSize} mb="md">Rust</Title>
                    <Text mb="md">High-performance Rust SDK for systems programming</Text>
                    <Code block mb="md">cargo add mindhive-client</Code>
                    <Anchor href="#rust-docs">View Documentation</Anchor>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
            
            <Tabs.Panel value="examples">
              <Title order={2} fz={subtitleSize} mb="md">Example Projects</Title>
              <Text mb="xl">Real-world examples of applications built with MindHive Network</Text>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder mb="md">
                    <Title order={3} fz={headingSize} mb="sm">Collaborative Document Analysis</Title>
                    <Text mb="md">
                      A document analysis system that uses multiple AI agents to extract insights from legal documents.
                    </Text>
                    <Anchor href="#document-analysis-example">View Example</Anchor>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder mb="md">
                    <Title order={3} fz={headingSize} mb="sm">Decentralized Content Moderation</Title>
                    <Text mb="md">
                      A content moderation system that uses consensus among multiple AI agents for fair and transparent decisions.
                    </Text>
                    <Anchor href="#moderation-example">View Example</Anchor>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder mb="md">
                    <Title order={3} fz={headingSize} mb="sm">Medical Image Analysis DAO</Title>
                    <Text mb="md">
                      A DataDAO for collaborative training of medical image analysis models with privacy-preserving techniques.
                    </Text>
                    <Anchor href="#medical-dao-example">View Example</Anchor>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper p="md" radius="md" withBorder mb="md">
                    <Title order={3} fz={headingSize} mb="sm">Multi-Agent Trading System</Title>
                    <Text mb="md">
                      A financial trading system that uses multiple specialized AI agents to analyze markets and make decisions.
                    </Text>
                    <Anchor href="#trading-example">View Example</Anchor>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Tabs.Panel>
          </Tabs>
        </Paper>
      </Container>
      
      <Footer />
    </main>
  );
} 