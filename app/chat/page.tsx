"use client";

import { useState, useRef, useEffect } from 'react';
import { Container, Title, Paper, TextInput, Button, Text, ScrollArea, Loader, Avatar, Group, Box, Stack, Divider, Alert } from '@mantine/core';
import { Send, RefreshCw, Brain, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';
import { sendAIRequest } from '../services/aiService';

// 消息类型
type MessageType = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

// 网络活动类型
type NetworkActivity = {
  steps: {
    title: string;
    description: string;
    completed: boolean;
  }[];
  agents: {
    name: string;
    type: string;
    confidence: number;
    color: string;
  }[];
};

// 客户端时间组件，避免水合不匹配
function MessageTime({ timestamp }: { timestamp: Date }) {
  const [formattedTime, setFormattedTime] = useState<string>('');
  
  useEffect(() => {
    setFormattedTime(new Date(timestamp).toLocaleTimeString());
  }, [timestamp]);
  
  return <>{formattedTime}</>;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<MessageType[]>([
    {
      id: '1',
      content: 'Hello! I\'m MindHive AI, your decentralized AI assistant. How can I help you today?',
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [networkActivity, setNetworkActivity] = useState<NetworkActivity | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiStatus, setApiStatus] = useState<{status: string, message: string} | null>(null);
  const [isTestingApi, setIsTestingApi] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // 处理消息提交
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: MessageType = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);
    
    try {
      // 发送请求到AI服务
      const response = await sendAIRequest(input);
      
      // 添加助手回复
      const assistantMessage: MessageType = {
        id: (Date.now() + 1).toString(),
        content: response.response,
        role: 'assistant',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setNetworkActivity(response.networkActivity);
    } catch (err: any) {
      console.error('Error sending message:', err);
      setError(err.message || 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  };

  // 清空聊天
  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: 'Hello! I\'m MindHive AI, your decentralized AI assistant. How can I help you today?',
        role: 'assistant',
        timestamp: new Date()
      }
    ]);
    setNetworkActivity(null);
  };

  // 测试API连接
  const testApiConnection = async () => {
    setIsTestingApi(true);
    setApiStatus(null);
    
    try {
      const response = await fetch('/api/ai', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      const data = await response.json();
      
      if (data.status === 'success') {
        setApiStatus({
          status: 'success',
          message: data.message || 'API Connection Successful'
        });
      } else {
        setApiStatus({
          status: 'warning',
          message: `${data.message || 'Connection Limited'} - ${data.solution || 'Using Simulated Data'}`
        });
      }
    } catch (err: any) {
      setApiStatus({
        status: 'error',
        message: `Connection Error: ${err.message || 'Unknown Error'} - Continuing with simulated data`
      });
    } finally {
      setIsTestingApi(false);
    }
  };

  return (
    <main>
      <MainNavbar />
      
      <Container size="lg" py={40}>
        <Paper
          radius="lg"
          p={0}
          style={{
            height: 'calc(100vh - 200px)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
          }}
        >
          <Box 
            p="md" 
            style={{ 
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <Group justify="space-between">
              <Group>
                <Avatar 
                  size="md" 
                  radius="xl" 
                  color="coral" 
                  style={{ border: '2px solid var(--color-coral)' }}
                >
                  <Brain size={24} />
                </Avatar>
                <div>
                  <Text fw={700} size="lg" className="gradient-text">MindHive AI</Text>
                  <Text size="xs" c="dimmed">Decentralized AI Assistant</Text>
                </div>
              </Group>
              <Group>
                <Button 
                  variant="outline" 
                  color={isTestingApi ? "gray" : apiStatus?.status === 'success' ? "green" : apiStatus?.status === 'warning' ? "yellow" : "blue"}
                  size="xs"
                  onClick={testApiConnection}
                  loading={isTestingApi}
                  leftSection={apiStatus?.status === 'success' ? null : <AlertCircle size={14} />}
                >
                  {isTestingApi ? "Testing..." : apiStatus?.status === 'success' ? "API Connected" : apiStatus?.status === 'warning' ? "Using Simulated Data" : "Test API Connection"}
                </Button>
                <Button 
                  variant="subtle" 
                  color="gray" 
                  leftSection={<RefreshCw size={16} />}
                  onClick={clearChat}
                >
                  New Chat
                </Button>
              </Group>
            </Group>
            
            {apiStatus && (
              <Alert 
                color={apiStatus.status === 'success' ? 'green' : apiStatus.status === 'warning' ? 'yellow' : 'red'} 
                title={apiStatus.status === 'success' ? 'Connection Success' : apiStatus.status === 'warning' ? 'Using Simulated Data' : 'Connection Failed'} 
                withCloseButton 
                onClose={() => setApiStatus(null)}
                mt="xs"
              >
                {apiStatus.message}
              </Alert>
            )}
          </Box>
          
          <ScrollArea 
            style={{ flex: 1 }} 
            p="md" 
            offsetScrollbars 
            viewportRef={scrollAreaRef}
          >
            <Stack gap="lg" p="md">
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    display: 'flex',
                    justifyContent: message.role === 'assistant' ? 'flex-start' : 'flex-end',
                    width: '100%'
                  }}
                >
                  <Paper
                    p="md"
                    radius="md"
                    style={{
                      background: message.role === 'assistant' 
                        ? 'rgba(255, 255, 255, 0.1)' 
                        : 'rgba(var(--color-coral-rgb), 0.1)',
                      maxWidth: '85%',
                    }}
                  >
                    <Group mb="xs" align="center">
                      {message.role === 'assistant' ? (
                        <Avatar 
                          size="sm" 
                          radius="xl" 
                          color="coral" 
                          style={{ border: '1px solid var(--color-coral)' }}
                        >
                          <Brain size={14} />
                        </Avatar>
                      ) : (
                        <Avatar size="sm" radius="xl" color="blue">U</Avatar>
                      )}
                      <Text size="sm" fw={500}>
                        {message.role === 'assistant' ? 'MindHive AI' : 'You'}
                      </Text>
                      <Text size="xs" c="dimmed">
                        <MessageTime timestamp={message.timestamp} />
                      </Text>
                    </Group>
                    
                    <Text style={{ whiteSpace: 'pre-wrap' }}>
                      {message.content}
                    </Text>
                  </Paper>
                </div>
              ))}
              
              {messages.length === 1 && !isLoading && (
                <Box ta="center" mt="xl">
                  <Text size="sm" c="dimmed">
                    Try asking about MindHive Network, decentralized AI, or how the platform works.
                  </Text>
                  <Group gap="xs" justify="center" mt="md">
                    {["What is MindHive Network?", "How does DataDAO work?", "Tell me about MHN token"].map((suggestion) => (
                      <Button 
                        key={suggestion} 
                        variant="light" 
                        size="xs" 
                        onClick={() => {
                          setInput(suggestion);
                          setTimeout(() => handleSubmit(), 100);
                        }}
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </Group>
                </Box>
              )}
              
              {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                  <Paper
                    p="md"
                    radius="md"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      maxWidth: '85%',
                    }}
                  >
                    <Group>
                      <Avatar 
                        size="sm" 
                        radius="xl" 
                        color="coral" 
                        style={{ border: '1px solid var(--color-coral)' }}
                      >
                        <Brain size={14} />
                      </Avatar>
                      <Loader size="sm" color="coral" />
                      <Text size="sm">Processing through MindHive Network...</Text>
                    </Group>
                  </Paper>
                </div>
              )}
              
              {error && (
                <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                  <Paper
                    p="md"
                    radius="md"
                    style={{
                      background: 'rgba(255, 0, 0, 0.1)',
                      maxWidth: '85%',
                    }}
                  >
                    <Text c="red">{error}</Text>
                    <Button 
                      variant="subtle" 
                      color="red" 
                      size="xs" 
                      mt="xs"
                      onClick={() => setError(null)}
                    >
                      Dismiss
                    </Button>
                  </Paper>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </Stack>
          </ScrollArea>
          
          {networkActivity && (
            <Box 
              p="md" 
              style={{ 
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                background: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              <Text size="xs" fw={500} mb="xs">Network Activity</Text>
              <Group gap="xs" wrap="nowrap" style={{ overflowX: 'auto' }}>
                {networkActivity.steps.map((step, index) => (
                  <Paper
                    key={index}
                    p="xs"
                    radius="sm"
                    style={{
                      background: step.completed ? 'rgba(var(--color-mint-rgb), 0.1)' : 'rgba(255, 255, 255, 0.05)',
                      borderLeft: step.completed ? '2px solid var(--color-mint)' : '2px solid transparent',
                      minWidth: '120px',
                    }}
                  >
                    <Text size="xs" fw={500}>{step.title}</Text>
                    <Text size="xs" c="dimmed" lineClamp={1}>{step.description}</Text>
                  </Paper>
                ))}
              </Group>
            </Box>
          )}
          
          <Box 
            p="md" 
            style={{ 
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Group>
                <TextInput
                  placeholder="Ask MindHive AI anything..."
                  value={input}
                  onChange={(e) => setInput(e.currentTarget.value)}
                  style={{ flex: 1 }}
                  radius="xl"
                  size="md"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <Button 
                  type="submit" 
                  radius="xl"
                  size="md"
                  disabled={isLoading || !input.trim()}
                  className="connect-wallet-btn"
                >
                  <Send size={18} />
                </Button>
              </Group>
            </form>
          </Box>
        </Paper>
      </Container>
      
      <Footer />
    </main>
  );
} 