"use client";
import { Container, Title, Text, Paper, Grid, List, rem, Table, Tabs, Progress, Group, Card } from '@mantine/core';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { useMediaQuery } from '@mantine/hooks';
import { motion, Variants } from 'framer-motion';

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

// Token distribution data
const tokenDistributionData = [
  { name: 'Community Development', value: 40, color: '#FF6F61' },
  { name: 'Ecosystem Growth', value: 25, color: '#3DF5C6' },
  { name: 'Core Team', value: 15, color: '#9FEFFF' },
  { name: 'Early Backers', value: 10, color: '#FFD166' },
  { name: 'Foundation Reserve', value: 10, color: '#6B76FF' },
];

// Token utility data
const tokenUtilityData = [
  { name: 'Governance', value: 35 },
  { name: 'Staking Rewards', value: 25 },
  { name: 'Network Fees', value: 20 },
  { name: 'Data Contribution', value: 15 },
  { name: 'Model Training', value: 5 },
];

export default function TokenPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? 'sm' : 'md';
  const padding = isMobile ? rem(16) : rem(24);
  const containerPadding = isMobile ? rem(40) : rem(60);
  const chartHeight = isMobile ? 200 : 300;
  
  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={containerPadding}>
        <MotionDiv
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Token Overview Section */}
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
              <Title order={1} c="coral.6" mb="xl" ta="center" fz={titleSize}>
                MHN Token
              </Title>
              
              <Text size="lg" mb="xl" ta="center">
                The native utility token powering the MindHive Network ecosystem
              </Text>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Title order={2} fz={subtitleSize} mb="md">Token Overview</Title>
                  <Text size={textSize} mb="md">
                    The MHN token is the backbone of the MindHive Network ecosystem, designed to align incentives among all participants and enable decentralized governance of the platform. It serves multiple functions within the network, from facilitating transactions to empowering community decision-making.
                  </Text>
                  
                  <Title order={3} fz={headingSize} mt="xl" mb="md">Key Details</Title>
                  <Table mb="xl">
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td fw={700}>Token Name</Table.Td>
                        <Table.Td>MindHive Network Token</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td fw={700}>Token Symbol</Table.Td>
                        <Table.Td>MHN</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td fw={700}>Total Supply</Table.Td>
                        <Table.Td>1,000,000,000 MHN</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="xl" ta="center">Token Distribution</Title>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {tokenDistributionData.map((item, index) => (
                        <div key={index}>
                          <Group justify="space-between" mb={4}>
                            <Text size={textSize}>{item.name}</Text>
                            <Text size={textSize} fw={500}>{item.value}%</Text>
                          </Group>
                          <Progress 
                            value={item.value} 
                            color={item.color} 
                            size="md" 
                            radius="xl" 
                          />
                        </div>
                      ))}
                    </div>
                  </Card>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
          
          {/* Token Utility Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Token Utility</Title>
              
              <Tabs defaultValue="overview">
                <Tabs.List mb="xl">
                  <Tabs.Tab value="overview">Overview</Tabs.Tab>
                  <Tabs.Tab value="governance">Governance</Tabs.Tab>
                  <Tabs.Tab value="staking">Staking</Tabs.Tab>
                  <Tabs.Tab value="fees">Network Fees</Tabs.Tab>
                </Tabs.List>
                
                <Tabs.Panel value="overview">
                  <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Title order={3} fz={headingSize} mb="md">Utility Breakdown</Title>
                      <Text size={textSize} mb="xl">
                        The MHN token is designed with multiple utilities to create a robust and sustainable ecosystem. From governance to staking, each utility serves a specific purpose in aligning incentives and enabling the network's core functions.
                      </Text>
                      
                      <Group mb="md">
                        <Text fw={700} size={textSize}>Governance: 35%</Text>
                        <Progress value={35} color="coral" size="md" radius="xl" w="100%" />
                      </Group>
                      
                      <Group mb="md">
                        <Text fw={700} size={textSize}>Staking Rewards: 25%</Text>
                        <Progress value={25} color="mint" size="md" radius="xl" w="100%" />
                      </Group>
                      
                      <Group mb="md">
                        <Text fw={700} size={textSize}>Network Fees: 20%</Text>
                        <Progress value={20} color="ice" size="md" radius="xl" w="100%" />
                      </Group>
                      
                      <Group mb="md">
                        <Text fw={700} size={textSize}>Data Contribution: 15%</Text>
                        <Progress value={15} color="yellow" size="md" radius="xl" w="100%" />
                      </Group>
                      
                      <Group mb="xl">
                        <Text fw={700} size={textSize}>Model Training: 5%</Text>
                        <Progress value={5} color="blue" size="md" radius="xl" w="100%" />
                      </Group>
                    </Grid.Col>
                    
                    <Grid.Col span={{ base: 12, md: 6 }}>
                      <Card 
                        p={padding} 
                        radius="lg" 
                        withBorder
                        style={{
                          height: '100%',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}
                      >
                        <Title order={3} fz={headingSize} mb="xl" ta="center">Token Utility Visualization</Title>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                          {tokenUtilityData.map((item, index) => (
                            <div key={index}>
                              <Group justify="space-between" mb={4}>
                                <Text size={textSize}>{item.name}</Text>
                                <Text size={textSize} fw={500}>{item.value}%</Text>
                              </Group>
                              <Progress 
                                value={item.value} 
                                color="coral" 
                                size="md" 
                                radius="xl" 
                              />
                            </div>
                          ))}
                        </div>
                      </Card>
                    </Grid.Col>
                  </Grid>
                </Tabs.Panel>
                
                <Tabs.Panel value="governance">
                  <Title order={3} fz={headingSize} mb="md">Governance</Title>
                  <Text size={textSize} mb="md">
                    MHN token holders have the power to participate in the governance of the MindHive Network. By staking their tokens, users gain voting rights proportional to their stake, allowing them to influence key decisions about the platform's development and operation.
                  </Text>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Governance Rights</Title>
                  <List withPadding size={textSize} mb="xl">
                    <List.Item>Voting on protocol upgrades and parameter changes</List.Item>
                    <List.Item>Proposing new features and improvements</List.Item>
                    <List.Item>Participating in funding allocation decisions</List.Item>
                    <List.Item>Voting on dispute resolutions within the network</List.Item>
                    <List.Item>Electing specialized committees for technical decisions</List.Item>
                  </List>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Governance Process</Title>
                  <Text size={textSize} mb="md">
                    The governance process follows a structured approach to ensure fair and transparent decision-making:
                  </Text>
                  <List withPadding size={textSize} mb="xl" type="ordered">
                    <List.Item>Proposal Submission: Any token holder can submit a proposal with a minimum stake</List.Item>
                    <List.Item>Discussion Period: Community discusses and refines the proposal</List.Item>
                    <List.Item>Voting Period: Token holders cast their votes based on their staked tokens</List.Item>
                    <List.Item>Implementation: Approved proposals are implemented by the development team</List.Item>
                  </List>
                </Tabs.Panel>
                
                <Tabs.Panel value="staking">
                  <Title order={3} fz={headingSize} mb="md">Staking</Title>
                  <Text size={textSize} mb="md">
                    Staking is a core mechanism in the MindHive Network that allows token holders to lock up their MHN tokens in return for rewards and governance rights. By staking tokens, users contribute to the security and stability of the network.
                  </Text>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Staking Benefits</Title>
                  <List withPadding size={textSize} mb="xl">
                    <List.Item>Earning passive income through staking rewards</List.Item>
                    <List.Item>Gaining governance voting rights proportional to stake</List.Item>
                    <List.Item>Receiving priority access to new features and services</List.Item>
                    <List.Item>Unlocking tier-based benefits based on staking amount</List.Item>
                    <List.Item>Contributing to network security and decentralization</List.Item>
                  </List>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Staking Tiers</Title>
                  <Table mb="xl">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Tier</Table.Th>
                        <Table.Th>Minimum Stake</Table.Th>
                        <Table.Th>APY</Table.Th>
                        <Table.Th>Benefits</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>Bronze</Table.Td>
                        <Table.Td>1,000 MHN</Table.Td>
                        <Table.Td>5%</Table.Td>
                        <Table.Td>Basic voting rights</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Silver</Table.Td>
                        <Table.Td>10,000 MHN</Table.Td>
                        <Table.Td>7.5%</Table.Td>
                        <Table.Td>Enhanced voting rights, fee discounts</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Gold</Table.Td>
                        <Table.Td>50,000 MHN</Table.Td>
                        <Table.Td>10%</Table.Td>
                        <Table.Td>Premium voting rights, significant fee discounts, proposal rights</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Platinum</Table.Td>
                        <Table.Td>100,000 MHN</Table.Td>
                        <Table.Td>12.5%</Table.Td>
                        <Table.Td>Maximum voting power, zero fees, proposal priority, committee eligibility</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </Tabs.Panel>
                
                <Tabs.Panel value="fees">
                  <Title order={3} fz={headingSize} mb="md">Network Fees</Title>
                  <Text size={textSize} mb="md">
                    MHN tokens are used to pay for various services and transactions within the MindHive Network ecosystem. These fees help maintain the network and compensate service providers while creating demand for the token.
                  </Text>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Fee Structure</Title>
                  <Table mb="xl">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Service</Table.Th>
                        <Table.Th>Fee Range</Table.Th>
                        <Table.Th>Description</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>AI Task Submission</Table.Td>
                        <Table.Td>0.1 - 10 MHN</Table.Td>
                        <Table.Td>Fee for submitting tasks to the network, varies by complexity</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Agent Deployment</Table.Td>
                        <Table.Td>5 - 50 MHN</Table.Td>
                        <Table.Td>One-time fee for deploying an AI agent to the network</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Data Contribution</Table.Td>
                        <Table.Td>0 MHN</Table.Td>
                        <Table.Td>No fee for contributing data, contributors earn rewards instead</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Governance Proposal</Table.Td>
                        <Table.Td>100 MHN</Table.Td>
                        <Table.Td>Fee to submit a governance proposal (refundable if approved)</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>DataDAO Creation</Table.Td>
                        <Table.Td>500 MHN</Table.Td>
                        <Table.Td>One-time fee to establish a new DataDAO on the network</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                  
                  <Title order={4} fz={rem(16)} mb="sm">Fee Distribution</Title>
                  <Text size={textSize} mb="md">
                    Network fees are distributed according to the following model:
                  </Text>
                  <List withPadding size={textSize} mb="xl">
                    <List.Item>70% to service providers (AI agents, compute providers, etc.)</List.Item>
                    <List.Item>20% to stakers as additional rewards</List.Item>
                    <List.Item>10% burned to create deflationary pressure on token supply</List.Item>
                  </List>
                </Tabs.Panel>
              </Tabs>
            </Paper>
          </MotionDiv>
          
          {/* Token Economics Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Token Economics</Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Title order={3} fz={headingSize} mb="md">Distribution Schedule</Title>
                  <Text size={textSize} mb="md">
                    The MHN token distribution is designed to ensure long-term sustainability and fair allocation across different stakeholders in the ecosystem.
                  </Text>
                  
                  <Table mb="xl">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Allocation</Table.Th>
                        <Table.Th>Percentage</Table.Th>
                        <Table.Th>Tokens</Table.Th>
                        <Table.Th>Vesting Period</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>Community Development</Table.Td>
                        <Table.Td>40%</Table.Td>
                        <Table.Td>400,000,000 MHN</Table.Td>
                        <Table.Td>4 years with 1-year cliff</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Ecosystem Growth</Table.Td>
                        <Table.Td>25%</Table.Td>
                        <Table.Td>250,000,000 MHN</Table.Td>
                        <Table.Td>5 years linear vesting</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Core Team</Table.Td>
                        <Table.Td>15%</Table.Td>
                        <Table.Td>150,000,000 MHN</Table.Td>
                        <Table.Td>4 years with 1-year cliff</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Early Backers</Table.Td>
                        <Table.Td>10%</Table.Td>
                        <Table.Td>100,000,000 MHN</Table.Td>
                        <Table.Td>2 years with 6-month cliff</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>Foundation Reserve</Table.Td>
                        <Table.Td>10%</Table.Td>
                        <Table.Td>100,000,000 MHN</Table.Td>
                        <Table.Td>5 years linear vesting</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Title order={3} fz={headingSize} mb="md">Token Mechanics</Title>
                  <Text size={textSize} mb="md">
                    The MHN token incorporates several mechanisms to ensure long-term value accrual and network health:
                  </Text>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">Fee Burn</Text>
                    <Text size={textSize}>
                      10% of all network fees are permanently burned, reducing the total supply over time and creating deflationary pressure on the token.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">Staking Rewards</Text>
                    <Text size={textSize}>
                      Token holders can earn rewards by staking their tokens to secure the network, with APY ranging from 5% to 12.5% based on staking tier.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="md" withBorder>
                    <Text fw={700} mb="xs">Governance Rights</Text>
                    <Text size={textSize}>
                      Staked tokens grant voting power in protocol governance decisions, with voting weight proportional to the amount staked.
                    </Text>
                  </Card>
                  
                  <Card p="md" radius="md" mb="xl" withBorder>
                    <Text fw={700} mb="xs">Reputation Multipliers</Text>
                    <Text size={textSize}>
                      Long-term participants receive boosted rewards and influence through a reputation system that rewards consistent contribution.
                    </Text>
                  </Card>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
          
          {/* How to Get MHN Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">How to Get MHN</Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-coral-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Exchanges</Title>
                    <Text size={textSize} ta="center" mb="xl">
                      MHN tokens will be available on major cryptocurrency exchanges after the token generation event. Stay tuned for announcements about exchange listings.
                    </Text>
                    
                    <Text fw={700} ta="center" mb="xs">Coming Soon to:</Text>
                    <List withPadding size={textSize} ta="center" center>
                      <List.Item>Binance</List.Item>
                      <List.Item>Coinbase</List.Item>
                      <List.Item>Uniswap</List.Item>
                      <List.Item>KuCoin</List.Item>
                      <List.Item>Gate.io</List.Item>
                    </List>
                  </Card>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-mint-1), var(--mantine-color-mint-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Network Participation</Title>
                    <Text size={textSize} ta="center" mb="xl">
                      Earn MHN tokens by actively participating in the MindHive Network ecosystem through various contribution mechanisms.
                    </Text>
                    
                    <Text fw={700} ta="center" mb="xs">Earn by:</Text>
                    <List withPadding size={textSize} ta="center" center>
                      <List.Item>Contributing data to DataDAOs</List.Item>
                      <List.Item>Providing computational resources</List.Item>
                      <List.Item>Developing and deploying AI agents</List.Item>
                      <List.Item>Participating in governance</List.Item>
                      <List.Item>Contributing to code and documentation</List.Item>
                    </List>
                  </Card>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Card 
                    p={padding} 
                    radius="lg" 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-ice-1), var(--mantine-color-ice-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Token Sale</Title>
                    <Text size={textSize} ta="center" mb="xl">
                      Participate in the upcoming token sale events to acquire MHN tokens directly from the project.
                    </Text>
                    
                    <Text fw={700} ta="center" mb="xs">Upcoming Events:</Text>
                    <List withPadding size={textSize} ta="center" center>
                      <List.Item>Private Sale: Q2 2025</List.Item>
                      <List.Item>Strategic Round: Q3 2025</List.Item>
                      <List.Item>Public Sale: Q4 2025</List.Item>
                      <List.Item>Initial DEX Offering: Q1 2026</List.Item>
                      <List.Item>Exchange Listings: Q1 2026</List.Item>
                    </List>
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