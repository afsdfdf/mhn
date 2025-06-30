/**
 * AI服务层 - 封装与后端API的交互
 */

// 网络活动步骤类型
export type NetworkStep = {
  title: string;
  description: string;
  completed: boolean;
};

// AI代理类型
export type AIAgent = {
  name: string;
  type: string;
  confidence: number;
  color: string;
};

// 网络活动类型
export type NetworkActivity = {
  steps: NetworkStep[];
  agents: AIAgent[];
};

// AI响应元数据
export type AIResponseMetadata = {
  model: string;
  processTime: number;
  tokensUsed: number;
  verificationScore: number;
};

// AI响应类型
export type AIResponse = {
  response: string;
  networkActivity: NetworkActivity;
  metadata: AIResponseMetadata;
};

/**
 * 发送AI请求到后端API
 * @param prompt 用户提示词
 * @returns AI响应
 */
export async function sendAIRequest(prompt: string): Promise<AIResponse> {
  try {
    const response = await fetch('/api/ai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to process AI request');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Error in AI service:', error);
    
    // 出错时返回模拟数据
    console.log('使用模拟数据响应');
    return simulateAIRequest(prompt);
  }
}

/**
 * 模拟AI请求（用于开发和测试）
 * @param prompt 用户提示词
 * @returns 模拟的AI响应
 */
export async function simulateAIRequest(prompt: string): Promise<AIResponse> {
  // 等待模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // 基于提示词生成模拟响应
  let response = '';
  if (prompt.toLowerCase().includes('token') || prompt.toLowerCase().includes('mhn')) {
    response = `MindHive Network Analysis:\n\nThe MHN token serves as the utility and governance token of the network. It enables:\n\n• Payments for AI services\n• Staking for network security\n• Governance voting rights\n• Rewards for valuable contributions\n\nToken holders can participate in protocol governance and earn rewards through staking.`;
  } else if (prompt.toLowerCase().includes('datadao') || prompt.toLowerCase().includes('data')) {
    response = `MindHive Network Analysis:\n\nDataDAOs in the MindHive Network allow for decentralized data governance and monetization. Contributors maintain ownership of their data while earning rewards when it's used for training AI models.\n\nThe federated learning approach ensures privacy while enabling collaborative model improvement.`;
  } else if (prompt.toLowerCase().includes('agent') || prompt.toLowerCase().includes('model')) {
    response = `MindHive Network Analysis:\n\nAI Agents in the MindHive Network are specialized service nodes that perform specific AI tasks. They can be composed to create complex workflows, with each agent earning MHN tokens based on their contributions.\n\nThe network uses on-chain verification to ensure the quality and accuracy of AI outputs.`;
  } else {
    response = `MindHive Network Analysis:\n\nYour query "${prompt.substring(0, 30)}..." has been processed by our decentralized AI network.\n\nThe network utilized 3 specialized AI agents with consensus verification to generate this response. All computations were verified on-chain, and data providers were compensated for their contributions.`;
  }
  
  return {
    response,
    networkActivity: generateNetworkActivity(),
    metadata: {
      model: "simulation-model",
      processTime: Math.floor(Math.random() * 500) + 800,
      tokensUsed: response.length / 4,
      verificationScore: 0.94
    }
  };
}

/**
 * 生成模拟的网络活动数据
 * @returns 模拟的网络活动
 */
function generateNetworkActivity(): NetworkActivity {
  return {
    steps: [
      { title: 'Task Submission', description: 'User request submitted to MindHive Network', completed: true },
      { title: 'Agent Selection', description: 'AI agents bidding for the task based on specialization', completed: true },
      { title: 'DataDAO Access', description: 'Accessing relevant data from decentralized data pools', completed: true },
      { title: 'Distributed Processing', description: 'Task processed across multiple AI nodes', completed: true },
      { title: 'Consensus Verification', description: 'Results verified through network consensus', completed: true },
      { title: 'Response Delivery', description: 'Final verified result delivered to user', completed: true },
    ],
    agents: [
      { name: 'TextAnalyzer-7B', type: 'NLP', confidence: 0.92, color: 'blue' },
      { name: 'SemanticCore-5B', type: 'Reasoning', confidence: 0.87, color: 'green' },
      { name: 'DataSynth-3B', type: 'Analytics', confidence: 0.78, color: 'orange' }
    ]
  };
} 