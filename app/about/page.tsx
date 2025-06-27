"use client";
import { Container, Title, Text, Paper, Grid, Timeline, Image, rem, List } from '@mantine/core';
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

export default function AboutPage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  const titleSize = isMobile ? rem(28) : rem(36);
  const subtitleSize = isMobile ? rem(22) : rem(28);
  const headingSize = isMobile ? rem(18) : rem(22);
  const textSize = isMobile ? rem(14) : rem(16);
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
          {/* Vision and Mission Section */}
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
              <Title order={1} c="coral.6" mb="xl" fz={titleSize} ta="center">
                About MindHive Network
              </Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Title order={2} fz={subtitleSize} mb="md">Our Vision</Title>
                  <Text size={textSize} mb="xl">
                    MindHive Network envisions a future where artificial intelligence is democratized, 
                    decentralized, and accessible to everyone. We believe in a world where AI development 
                    is not controlled by a handful of corporations, but rather distributed across a global 
                    network of collaborators who collectively advance the technology while ensuring it 
                    remains aligned with human values and needs.
                  </Text>
                  
                  <Title order={2} fz={subtitleSize} mb="md">Our Mission</Title>
                  <Text size={textSize}>
                    Our mission is to build the world's first truly decentralized AI collaboration network 
                    that enables developers, researchers, and users to contribute to, benefit from, and govern 
                    a shared ecosystem of AI models and services. By combining blockchain technology with 
                    artificial intelligence, we're creating an infrastructure that ensures transparency, 
                    fair compensation, and collective ownership of the AI revolution.
                  </Text>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Paper 
                    radius="xl" 
                    p={0} 
                    h={rem(400)} 
                    style={{
                      background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-mint-2))',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <Text ta="center" c="dimmed">
                      [Vision Image Placeholder]
                    </Text>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
          
          {/* Core Values Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Our Core Values</Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-coral-1), var(--mantine-color-coral-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Decentralization</Title>
                    <Text size={textSize} ta="center">
                      We believe in distributing power and control across a network of participants rather 
                      than centralizing it in the hands of a few. Our platform is designed to resist 
                      censorship, single points of failure, and monopolistic control.
                    </Text>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-mint-1), var(--mantine-color-mint-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Collaboration</Title>
                    <Text size={textSize} ta="center">
                      We foster an environment where individuals and organizations can work together, 
                      sharing knowledge, resources, and rewards. We believe that collaborative intelligence 
                      surpasses individual efforts in solving complex problems.
                    </Text>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      height: '100%',
                      background: 'linear-gradient(135deg, var(--mantine-color-ice-1), var(--mantine-color-ice-2))',
                    }}
                  >
                    <Title order={3} fz={headingSize} mb="md" ta="center">Transparency</Title>
                    <Text size={textSize} ta="center">
                      We commit to open processes, clear communication, and verifiable operations. 
                      Our code is open-source, our governance is participatory, and our economic model 
                      is designed to fairly distribute value to all contributors.
                    </Text>
                  </Paper>
                </Grid.Col>
              </Grid>
            </Paper>
          </MotionDiv>
          
          {/* Our Story Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Our Story</Title>
              
              <Timeline active={3} bulletSize={24} lineWidth={2} color="coral">
                <Timeline.Item title="The Idea" lineVariant="dashed">
                  <Text size={textSize} mb="xs">Q1 2022</Text>
                  <Text size={textSize}>
                    MindHive began as a research project exploring the intersection of blockchain technology 
                    and artificial intelligence. Our founders, a group of AI researchers and blockchain 
                    developers, recognized the need for a more open and collaborative approach to AI development.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Foundation Formation">
                  <Text size={textSize} mb="xs">Q3 2022</Text>
                  <Text size={textSize}>
                    The MindHive Foundation was established as a non-profit organization dedicated to 
                    developing the core protocol and governance framework for a decentralized AI network.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Protocol Development">
                  <Text size={textSize} mb="xs">Q1 2023</Text>
                  <Text size={textSize}>
                    Our team developed the initial version of the MindHive protocol, focusing on secure 
                    on-chain verification of AI computations and a token-based incentive system for network 
                    participants.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Network Launch">
                  <Text size={textSize} mb="xs">Q4 2023</Text>
                  <Text size={textSize}>
                    The MindHive Network launched its mainnet, enabling developers to deploy AI agents, 
                    contribute to collaborative model training, and participate in network governance.
                  </Text>
                </Timeline.Item>
              </Timeline>
            </Paper>
          </MotionDiv>
          
          {/* Team Section */}
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
              <Title order={2} fz={subtitleSize} mb="xl" ta="center">Leadership Team</Title>
              
              <Grid>
                <Grid.Col span={{ base: 12, md: 3 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: rem(120),
                        height: rem(120),
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--mantine-color-coral-2), var(--mantine-color-coral-4))',
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text c="white">[Photo]</Text>
                    </div>
                    <Title order={3} fz={headingSize} mb="xs" ta="center">Dr. Sarah Chen</Title>
                    <Text size="sm" c="dimmed" mb="md" ta="center">Co-Founder & CEO</Text>
                    <Text size="sm" ta="center">
                      Former AI research lead at DeepMind with a Ph.D. in Computer Science from Stanford University.
                    </Text>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 3 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: rem(120),
                        height: rem(120),
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--mantine-color-mint-2), var(--mantine-color-mint-4))',
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text c="white">[Photo]</Text>
                    </div>
                    <Title order={3} fz={headingSize} mb="xs" ta="center">Marcus Johnson</Title>
                    <Text size="sm" c="dimmed" mb="md" ta="center">Co-Founder & CTO</Text>
                    <Text size="sm" ta="center">
                      Blockchain architect with experience at Ethereum Foundation and a background in distributed systems.
                    </Text>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 3 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: rem(120),
                        height: rem(120),
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--mantine-color-ice-2), var(--mantine-color-ice-4))',
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text c="white">[Photo]</Text>
                    </div>
                    <Title order={3} fz={headingSize} mb="xs" ta="center">Dr. Aisha Patel</Title>
                    <Text size="sm" c="dimmed" mb="md" ta="center">Chief Research Officer</Text>
                    <Text size="sm" ta="center">
                      Leading expert in federated learning and privacy-preserving AI with 15+ years of research experience.
                    </Text>
                  </Paper>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 3 }}>
                  <Paper 
                    radius="lg" 
                    p={padding} 
                    withBorder 
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: rem(120),
                        height: rem(120),
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--mantine-color-coral-3), var(--mantine-color-mint-3))',
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text c="white">[Photo]</Text>
                    </div>
                    <Title order={3} fz={headingSize} mb="xs" ta="center">Miguel Rodriguez</Title>
                    <Text size="sm" c="dimmed" mb="md" ta="center">Chief Strategy Officer</Text>
                    <Text size="sm" ta="center">
                      Former strategy consultant with expertise in tokenomics and DAO governance structures.
                    </Text>
                  </Paper>
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