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
                    style={{
                      overflow: 'hidden',
                      height: rem(400),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <video 
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    >
                      <source src="/3712c921919_3.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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
          
          {/* Video Showcase Section */}
          <MotionDiv variants={fadeInVariants}>
            <Paper 
              radius="xl" 
              p={0} 
              mb={rem(40)}
              style={{
                overflow: 'hidden',
                height: rem(500),
                position: 'relative',
              }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              >
                <source src="/3712c921919_3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
              
              <Timeline active={0} bulletSize={24} lineWidth={2} color="coral">
                <Timeline.Item title="MindHive 2.0 Launch">
                  <Text size={textSize} mb="xs" fw={700}>Q2 2025</Text>
                  <Text size={textSize}>
                    Launch of MindHive 2.0, featuring enhanced scalability, improved governance mechanisms, 
                    and new tools for collaborative AI model development. This major upgrade will support the next 
                    phase of growth for the network.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Enterprise Partnership Program">
                  <Text size={textSize} mb="xs" fw={700}>Q3 2025</Text>
                  <Text size={textSize}>
                    Introduction of our Enterprise Partnership Program, designed to accelerate adoption of 
                    MindHive technology in key industries including healthcare, finance, and manufacturing. 
                    The program will provide specialized integration support and compliance frameworks.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Decentralized AGI Research Initiative">
                  <Text size={textSize} mb="xs" fw={700}>Q4 2025</Text>
                  <Text size={textSize}>
                    Launch of the Decentralized AGI Research initiative, bringing together researchers from 
                    around the world to collaboratively advance artificial general intelligence in an open, 
                    transparent, and safety-focused manner.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Global Developer Conference">
                  <Text size={textSize} mb="xs" fw={700}>Q1 2026</Text>
                  <Text size={textSize}>
                    The first annual MindHive Global Developer Conference, bringing together thousands of 
                    developers, researchers, and industry partners to showcase innovations, share knowledge, 
                    and shape the future of decentralized AI development.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Cross-Chain Integration">
                  <Text size={textSize} mb="xs" fw={700}>Q1 2026</Text>
                  <Text size={textSize}>
                    Implementation of comprehensive cross-chain integration, allowing MindHive to operate 
                    seamlessly across multiple blockchain ecosystems. This will expand our reach and enable 
                    new forms of collaboration with other decentralized networks.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Specialized Industry Solutions">
                  <Text size={textSize} mb="xs" fw={700}>Q2 2026</Text>
                  <Text size={textSize}>
                    Release of specialized AI solution packages for key industries, including healthcare 
                    diagnostic tools, financial risk assessment systems, and manufacturing optimization 
                    frameworks, all built on the MindHive decentralized infrastructure.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Regulatory Framework Initiative">
                  <Text size={textSize} mb="xs" fw={700}>Q3 2026</Text>
                  <Text size={textSize}>
                    Launch of the MindHive Regulatory Framework Initiative, working with policymakers 
                    globally to develop appropriate governance standards for decentralized AI systems. 
                    This initiative aims to ensure responsible innovation while protecting user rights.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="MindHive 3.0 Development">
                  <Text size={textSize} mb="xs" fw={700}>Q4 2026</Text>
                  <Text size={textSize}>
                    Beginning of development for MindHive 3.0, which will introduce revolutionary 
                    advancements in decentralized computing, privacy-preserving AI training, and 
                    autonomous agent coordination. Community feedback sessions will guide the design process.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Global AI Commons">
                  <Text size={textSize} mb="xs" fw={700}>Q1 2027</Text>
                  <Text size={textSize}>
                    Establishment of the Global AI Commons, a shared repository of open-source AI models, 
                    datasets, and tools governed by the MindHive community. This resource will accelerate 
                    innovation while ensuring equitable access to advanced AI capabilities.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="Quantum Computing Integration">
                  <Text size={textSize} mb="xs" fw={700}>Q2 2027</Text>
                  <Text size={textSize}>
                    Integration of quantum computing capabilities into the MindHive network, enabling 
                    unprecedented computational power for solving complex AI problems. Early access will be 
                    provided to research partners working on critical global challenges.
                  </Text>
                </Timeline.Item>
                
                <Timeline.Item title="MindHive 3.0 Launch">
                  <Text size={textSize} mb="xs" fw={700}>Q4 2027</Text>
                  <Text size={textSize}>
                    Official launch of MindHive 3.0, representing the culmination of our vision for a fully 
                    decentralized, democratically governed AI ecosystem. This version will feature breakthrough 
                    capabilities in autonomous agent coordination and collective intelligence.
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
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image 
                        src="/images/team/sarah.jpg"
                        alt="Dr. Sarah Chen"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: rem(30), 
                        height: rem(30), 
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid white'
                      }}>
                        <Image 
                          src="/images/leadership/team_logo.png" 
                          alt="MindHive" 
                          width={rem(30)} 
                          height={rem(30)}
                        />
                      </div>
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
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
                        alt="Marcus Johnson"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: rem(30), 
                        height: rem(30), 
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid white'
                      }}>
                        <Image 
                          src="/images/leadership/team_logo.png" 
                          alt="MindHive" 
                          width={rem(30)} 
                          height={rem(30)}
                        />
                      </div>
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
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image 
                        src="/images/team/aisha.jpg"
                        alt="Dr. Aisha Patel"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: rem(30), 
                        height: rem(30), 
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid white'
                      }}>
                        <Image 
                          src="/images/leadership/team_logo.png" 
                          alt="MindHive" 
                          width={rem(30)} 
                          height={rem(30)}
                        />
                      </div>
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
                        marginBottom: rem(16),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Image 
                        src="/images/team/miguel.jpg"
                        alt="Miguel Rodriguez"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                      />
                      <div style={{ 
                        position: 'absolute', 
                        bottom: 0, 
                        right: 0, 
                        width: rem(30), 
                        height: rem(30), 
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid white'
                      }}>
                        <Image 
                          src="/images/leadership/team_logo.png" 
                          alt="MindHive" 
                          width={rem(30)} 
                          height={rem(30)}
                        />
                      </div>
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