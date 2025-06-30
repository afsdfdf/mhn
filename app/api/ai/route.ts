import { NextRequest, NextResponse } from 'next/server';

// 使用硬编码的API密钥（仅用于演示）
// 注意：在生产环境中应该使用环境变量而不是硬编码密钥
const GEMINI_API_KEY = 'AIzaSyCpP3psMF58kYjbqgYnfP6VWlKJnTXasKk';

// 添加测试接口，用于前端测试API连接状态
export async function GET(request: NextRequest) {
  try {
    console.log('Testing API connection status...');
    
    // 检测网络连接状态
    try {
      // 尝试ping baidu.com作为基础网络连接测试
      const testResponse = await fetch('https://www.baidu.com', { 
        method: 'HEAD',
        cache: 'no-store',
        signal: AbortSignal.timeout(5000) // 5秒超时
      });
      
      if (testResponse.ok) {
        console.log('Basic network connection normal, trying to connect to Google API');
        
        try {
          // 使用REST API测试连接
          const testGeminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
          const testPayload = {
            contents: [
              {
                parts: [
                  {
                    text: "Hello"
                  }
                ]
              }
            ]
          };
          
          // 设置超时控制
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
          
          // 尝试一个简单的请求
          try {
            const response = await fetch(testGeminiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(testPayload),
              signal: controller.signal
            });
            
            // 清除超时
            clearTimeout(timeoutId);
            
            if (response.ok) {
              const result = await response.json();
              console.log('Google API connection successful');
              
              return NextResponse.json({ 
                status: 'success', 
                message: 'Successfully connected to Google AI API', 
                models: ['gemini-1.5-flash', 'gemini-1.5-pro'],
                usingLibrary: 'REST API',
                simulated: false
              });
            } else {
              const error = await response.json();
              throw new Error(error.error?.message || 'API returned error');
            }
          } catch (fetchError) {
            console.error('Google API request failed:', fetchError);
            
            // 返回模拟的API状态
            return NextResponse.json({ 
              status: 'warning', 
              message: 'Unable to connect to Google API, will use simulated data', 
              error: fetchError instanceof Error ? fetchError.message : String(fetchError),
              solution: 'The application will continue to run using simulated data',
              networkInfo: {
                googleAccessible: false,
                baiduAccessible: true
              }
            });
          }
        } catch (apiError: any) {
          console.error('Google API connection failed:', apiError);
          
          // 返回模拟的API状态
          return NextResponse.json({ 
            status: 'warning', 
            message: 'Unable to connect to Google API, will use simulated data', 
            error: apiError.message || String(apiError),
            solution: 'The application will continue to run using simulated data',
            networkInfo: {
              googleAccessible: false,
              baiduAccessible: true
            }
          });
        }
      } else {
        console.log('Basic network connection test failed');
        return NextResponse.json({ 
          status: 'error', 
          message: 'Basic network connection test failed', 
          error: 'Unable to connect to Baidu',
          solution: 'Please check your network connection',
          networkInfo: {
            googleAccessible: false,
            baiduAccessible: false
          }
        });
      }
    } catch (err) {
      console.log('Network connection test failed:', err);
      return NextResponse.json({ 
        status: 'error', 
        message: 'Network connection test failed', 
        error: err instanceof Error ? err.message : String(err),
        solution: 'Please check your network connection',
        networkInfo: {
          googleAccessible: false,
          baiduAccessible: false
        }
      });
    }
    
    // 如果网络测试失败或Google API不可访问，返回错误
    return NextResponse.json({ 
      status: 'error', 
      message: 'Unable to connect to Google API (network restriction)', 
      error: 'Due to network restrictions, Google API services cannot be accessed',
      solution: 'The application will continue to run using simulated data',
      networkInfo: {
        googleAccessible: false,
        baiduAccessible: true
      }
    }); // 返回200而不是500，因为我们会使用模拟数据
  } catch (error: any) {
    console.error('API connection test failed:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: 'Error while testing connection', 
      error: error.message || String(error),
      solution: 'The application will continue to run using simulated data'
    });
  }
}

// 接口处理函数
export async function POST(request: NextRequest) {
  try {
    const { prompt, model = 'gemini-1.5-flash', useSimulation = false } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: '缺少必要的prompt参数' }, { status: 400 });
    }

    // 如果请求指定使用模拟数据，直接返回模拟响应
    if (useSimulation) {
      console.log('根据请求使用模拟数据');
      return simulateResponse(prompt);
    }

    // 构建项目特定的系统提示词
    const systemPrompt = `You are an AI assistant for the MindHive Network, a decentralized collaborative AI platform.
    
    # About MindHive Network
    MindHive Network is a revolutionary decentralized AI platform that connects AI models and agents in a collaborative network.
    
    # Key Features
    - Decentralized AI Network: Connect and compose AI models in a collaborative network
    - DataDAO Framework: Collective ownership and governance of datasets with fair compensation
    - On-chain Verification: Transparent and verifiable AI computations with proof mechanisms
    - MHN Token: The utility and governance token powering the ecosystem
    - Agent Marketplace: Deploy, monetize, and discover specialized AI agents
    
    # Technical Architecture
    - Federated Learning: Privacy-preserving collaborative model training
    - Smart Contracts: Manage ownership, rewards, and governance
    - Consensus Mechanism: Verify AI computations and outputs
    - Tokenomics: Incentivize quality contributions and participation
    
    When responding to users, emphasize how MindHive Network's decentralized approach differs from traditional centralized AI platforms. 
    Highlight the benefits of transparency, collective ownership, and fair compensation for data and model contributions.
    
    Always maintain a helpful, informative, and slightly technical tone that reflects the innovative nature of the project.`;

    try {
      console.log('使用REST API调用Google Gemini...');
      
      // 构建API请求URL和负载
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
      const payload = {
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser query: ${prompt}`
              }
            ]
          }
        ]
      };
      
      // 设置超时控制
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15秒超时
      
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal
        });
        
        // 清除超时
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const result = await response.json();
          
          // 从响应中提取文本
          const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text || '';
          
          // 构建网络活动数据
          const networkActivity = generateNetworkActivity();

          return NextResponse.json({
            response: responseText,
            networkActivity,
            metadata: {
              model: model,
              processTime: Math.floor(Math.random() * 500) + 800,
              tokensUsed: responseText.length / 4,
              verificationScore: 0.94,
              usingLibrary: 'REST API',
              simulated: false
            }
          });
        } else {
          console.error('API返回错误状态码:', response.status);
          const errorData = await response.json();
          console.error('API错误详情:', errorData);
          throw new Error(errorData.error?.message || `API返回错误状态码: ${response.status}`);
        }
      } catch (fetchError) {
        console.error('API请求失败:', fetchError);
        console.log('使用模拟数据响应');
        return simulateResponse(prompt);
      }
    } catch (apiError) {
      // 捕获API调用错误，包括超时、网络问题等
      console.error('API调用失败:', apiError);
      console.log('使用模拟数据响应');
      return simulateResponse(prompt);
    }
  } catch (error: any) {
    console.error('AI API错误:', error);
    // 返回模拟数据，不暴露具体错误
    return simulateResponse('');
  }
}

// 模拟响应函数
function simulateResponse(prompt: string) {
  // 基于提示词生成模拟响应
  let response = '';
  if (prompt.toLowerCase().includes('token') || prompt.toLowerCase().includes('mhn')) {
    response = `The MHN token is the core utility and governance token of the MindHive Network ecosystem. It serves multiple critical functions:

1. **Utility Functions:**
   - Payment for AI services and computational resources
   - Staking to secure the network and validate computations
   - Access to premium features and specialized AI agents
   - Data contribution incentives and rewards

2. **Governance Rights:**
   - Voting on protocol upgrades and parameter changes
   - Proposing new features or improvements
   - Participating in DataDAO governance decisions
   - Influencing resource allocation across the network

3. **Economic Model:**
   - Fixed supply of 1 billion MHN tokens
   - 40% allocated to community development
   - 25% for ecosystem growth initiatives
   - 15% reserved for the core team (vested over 4 years)
   - 10% for early backers and investors
   - 10% for foundation reserve

The token's value is derived from its utility within the ecosystem, the growing demand for decentralized AI services, and the governance rights it confers. As the network grows, token holders benefit from both the appreciation of their holdings and the ability to shape the future of the platform.

Would you like to know more about specific aspects of the MHN tokenomics or how to acquire tokens?`;
  } else if (prompt.toLowerCase().includes('datadao') || prompt.toLowerCase().includes('data')) {
    response = `DataDAOs are a revolutionary component of the MindHive Network that transform how data is governed, shared, and monetized in AI systems.

In traditional AI development, data contributors rarely maintain ownership or receive fair compensation for their contributions. MindHive's DataDAO framework changes this by:

1. **Collective Ownership:** Data contributors retain ownership rights while allowing their data to be used for training AI models.

2. **Democratic Governance:** Contributors vote on how their data is used, what models can access it, and under what terms.

3. **Fair Compensation:** Smart contracts ensure automatic, transparent compensation when data is used for training or inference.

4. **Privacy Preservation:** Our federated learning approach means data can stay local while still contributing to model improvement.

5. **Quality Verification:** On-chain mechanisms verify data quality and relevance, ensuring high standards.

The technical implementation uses a combination of:
- Cryptographic techniques to verify data provenance
- Zero-knowledge proofs for privacy-preserving verification
- Smart contracts for automated compensation
- Reputation systems to incentivize quality contributions

This approach creates a more equitable AI ecosystem where value flows to data contributors rather than being concentrated in centralized entities that control large datasets.

Would you like me to elaborate on any specific aspect of DataDAOs in the MindHive Network?`;
  } else if (prompt.toLowerCase().includes('agent') || prompt.toLowerCase().includes('model')) {
    response = `AI Agents in the MindHive Network are specialized service nodes that perform specific AI tasks within our decentralized ecosystem. Unlike traditional AI models that operate in isolation, MindHive Agents are designed to collaborate, compose, and create complex workflows.

**Key characteristics of MindHive AI Agents:**

1. **Specialization:** Each agent focuses on specific capabilities such as:
   - Natural language processing
   - Image recognition
   - Logical reasoning
   - Data analysis
   - Creative generation

2. **Composability:** Agents can be combined to solve complex problems that require multiple capabilities.

3. **On-chain Verification:** All agent computations are verified through our consensus mechanism, ensuring accuracy and reliability.

4. **Token Economics:** Agents earn MHN tokens based on:
   - Usage frequency
   - Computation complexity
   - Quality of outputs
   - Unique capabilities

5. **Continuous Improvement:** Agents learn and improve through:
   - Federated learning from distributed data sources
   - Reputation-based feedback mechanisms
   - Collaborative training with other agents

The Agent Marketplace allows developers to deploy their specialized AI agents, monetize their capabilities, and contribute to the growing ecosystem of decentralized AI services.

Would you like to know more about how to develop, deploy, or utilize agents in the MindHive Network?`;
  } else if (prompt.toLowerCase().includes('network') || prompt.toLowerCase().includes('architecture')) {
    response = `The MindHive Network architecture is designed for decentralization, scalability, and collaborative intelligence. Our technical infrastructure consists of several interconnected layers:

1. **Protocol Layer:**
   - Consensus mechanisms for verifying AI computations
   - Smart contracts for governing data usage and token distribution
   - On-chain identity and reputation systems

2. **Compute Layer:**
   - Distributed inference nodes
   - Federated learning infrastructure
   - Resource allocation mechanisms based on stake and reputation

3. **Data Layer:**
   - DataDAO frameworks for collective data governance
   - Privacy-preserving data sharing protocols
   - Quality verification mechanisms

4. **Application Layer:**
   - Agent Marketplace for deploying specialized AI services
   - Developer tools and SDKs
   - User interfaces for accessing network resources

The network employs a hybrid consensus mechanism that combines Proof of Stake for security with Proof of Computation for verifying AI workloads. This ensures both the integrity of the network and the accuracy of AI outputs.

Our architecture prioritizes:
- **Scalability:** Through sharding and parallel computation
- **Interoperability:** With existing AI frameworks and blockchain networks
- **Privacy:** Using zero-knowledge proofs and secure multi-party computation
- **Efficiency:** Optimizing resource utilization across the network

This decentralized approach differs fundamentally from traditional centralized AI platforms by distributing ownership, governance, and economic benefits across all network participants.

Would you like me to elaborate on any specific component of the MindHive Network architecture?`;
  } else {
    response = `Thank you for your interest in the MindHive Network! We're building a revolutionary decentralized collaborative AI platform that connects AI models and agents in a transparent, fair ecosystem.

The MindHive Network solves several critical problems in today's AI landscape:

1. **Centralization of AI Power:** Traditional AI development concentrates power in a few large companies. MindHive distributes ownership and governance across all participants.

2. **Data Ownership and Compensation:** In current systems, data contributors rarely maintain ownership or receive fair compensation. Our DataDAO framework ensures contributors retain rights and receive automated compensation.

3. **Lack of Transparency:** Many AI systems operate as black boxes. MindHive provides on-chain verification of AI computations and outputs.

4. **Limited Collaboration:** Today's AI models often work in isolation. Our network enables seamless collaboration between specialized agents to solve complex problems.

5. **Misaligned Incentives:** Current AI ecosystems often prioritize platform profits over user value. MindHive's tokenomics align incentives across all stakeholders.

Our approach combines the latest advancements in AI with blockchain technology to create a more equitable, transparent, and collaborative ecosystem for artificial intelligence.

How can I help you learn more about specific aspects of the MindHive Network?`;
  }

  // 构建网络活动数据
  const networkActivity = generateNetworkActivity();

  return NextResponse.json({
    response,
    networkActivity,
    metadata: {
      model: 'simulated-model',
      processTime: Math.floor(Math.random() * 500) + 300, // 模拟处理时间
      tokensUsed: response.length / 4, // 粗略估计token数量
      verificationScore: 0.92,
      simulated: true // 标记这是模拟响应
    }
  });
}

// 生成模拟的网络活动数据
function generateNetworkActivity() {
  const nodes = ['Node-A', 'Node-B', 'Node-C', 'Node-D', 'Node-E', 'Node-F'];
  const activities = [];
  
  // 生成随机节点活动
  for (let i = 0; i < 5; i++) {
    const sourceIndex = Math.floor(Math.random() * nodes.length);
    let targetIndex = Math.floor(Math.random() * nodes.length);
    while (targetIndex === sourceIndex) {
      targetIndex = Math.floor(Math.random() * nodes.length);
    }
    
    activities.push({
      source: nodes[sourceIndex],
      target: nodes[targetIndex],
      type: Math.random() > 0.5 ? 'data' : 'computation',
      strength: Math.floor(Math.random() * 100) / 100,
      timestamp: new Date().toISOString()
    });
  }
  
  return {
    nodes: nodes.map(node => ({
      id: node,
      type: Math.random() > 0.7 ? 'agent' : 'data',
      status: Math.random() > 0.2 ? 'active' : 'standby',
      load: Math.floor(Math.random() * 100) / 100
    })),
    activities,
    networkHealth: Math.floor(Math.random() * 40) / 100 + 0.6, // 0.6 - 1.0
    timestamp: new Date().toISOString()
  };
} 