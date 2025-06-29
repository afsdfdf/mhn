import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

// 直接硬编码API密钥 - 由于网络问题无法访问Google API，仅作为参考保留
const GEMINI_API_KEY = 'AIzaSyCpP3psMF58kYjbqgYnfP6VWlKJnTXasKk';

// 创建GoogleGenerativeAI实例
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

// 添加一个UI测试按钮，用于测试API连接状态
export async function GET(request: NextRequest) {
  try {
    console.log('测试API连接状态...');
    
    // 检测网络连接状态
    try {
      // 尝试ping baidu.com作为基础网络连接测试
      const testResponse = await fetch('https://www.baidu.com', { 
        method: 'HEAD',
        cache: 'no-store',
        signal: AbortSignal.timeout(5000) // 5秒超时
      });
      
      if (testResponse.ok) {
        console.log('基础网络连接正常，尝试连接Google API');
        
        try {
          // 使用@google/generative-ai库测试连接
          const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
          
          // 设置超时控制
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000); // 10秒超时
          
          // 尝试一个简单的请求
          try {
            const result = await model.generateContent("Hello");
            
            // 清除超时
            clearTimeout(timeoutId);
            
            console.log('Google API连接成功');
            
            return NextResponse.json({ 
              status: 'success', 
              message: '成功连接到Google AI API', 
              models: ['gemini-2.0-flash', 'gemini-2.0-pro'],
              usingLibrary: '@google/generative-ai'
            });
          } catch (fetchError) {
            console.error('Google API请求失败:', fetchError);
            
            // 返回模拟的API状态
            return NextResponse.json({ 
              status: 'warning', 
              message: '无法连接到Google API，将使用模拟数据', 
              error: fetchError instanceof Error ? fetchError.message : String(fetchError),
              solution: '应用将使用模拟数据继续运行',
              networkInfo: {
                googleAccessible: false,
                baiduAccessible: true
              }
            });
          }
        } catch (apiError: any) {
          console.error('Google API连接失败:', apiError);
          
          // 返回模拟的API状态
          return NextResponse.json({ 
            status: 'warning', 
            message: '无法连接到Google API，将使用模拟数据', 
            error: apiError.message || String(apiError),
            solution: '应用将使用模拟数据继续运行',
            networkInfo: {
              googleAccessible: false,
              baiduAccessible: true
            }
          });
        }
      } else {
        console.log('基础网络连接测试失败');
        return NextResponse.json({ 
          status: 'error', 
          message: '基础网络连接测试失败', 
          error: '无法连接到Baidu',
          solution: '请检查您的网络连接',
          networkInfo: {
            googleAccessible: false,
            baiduAccessible: false
          }
        });
      }
    } catch (err) {
      console.log('网络连接测试失败:', err);
      return NextResponse.json({ 
        status: 'error', 
        message: '网络连接测试失败', 
        error: err instanceof Error ? err.message : String(err),
        solution: '请检查您的网络连接',
        networkInfo: {
          googleAccessible: false,
          baiduAccessible: false
        }
      });
    }
  } catch (error: any) {
    console.error('测试API连接失败:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: '测试连接时发生错误', 
      error: error.message || String(error),
      solution: '应用将使用模拟数据继续运行'
    });
  }
}

// POST端点，用于测试API并返回模拟数据
export async function POST(request: NextRequest) {
  try {
    const { useSimulation = true } = await request.json();

    // 返回模拟的API状态
    return NextResponse.json({ 
      status: 'success', 
      message: '测试API已成功响应',
      useSimulation,
      networkInfo: {
        googleAccessible: false,
        baiduAccessible: true,
        simulationEnabled: true
      }
    });
  } catch (error: any) {
    console.error('测试API错误:', error);
    return NextResponse.json({ 
      status: 'error', 
      message: '测试API发生错误', 
      error: error.message || String(error)
    });
  }
} 