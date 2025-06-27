"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  connections: number[];
  speed: number;
  direction: number;
  pulseSpeed: number;
  label?: string;
}

interface DataPacket {
  id: number;
  fromNode: number;
  toNode: number;
  x: number;
  y: number;
  progress: number;
  speed: number;
  color: string;
}

interface HiveNetworkVisualizationProps {
  width?: number;
  height?: number;
  nodeCount?: number;
  dataPacketCount?: number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  showLabels?: boolean;
}

export default function HiveNetworkVisualization({
  width = 800,
  height = 500,
  nodeCount = 15,
  dataPacketCount = 25,
  primaryColor = '#FF6F61',
  secondaryColor = '#3DF5C6',
  backgroundColor = 'rgba(0, 0, 0, 0.03)',
  showLabels = true,
}: HiveNetworkVisualizationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const animationRef = useRef<number>(0);
  
  // 初始化节点和数据包
  useEffect(() => {
    // 创建节点
    const newNodes: Node[] = [];
    const nodeLabels = ['AI Agent', 'Data Node', 'Validator', 'User', 'Compute', 'Storage'];
    
    for (let i = 0; i < nodeCount; i++) {
      // 使用六边形网格布局
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = Math.min(width, height) * 0.35 * (0.7 + Math.random() * 0.3);
      
      newNodes.push({
        id: i,
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        size: 10 + Math.random() * 15,
        color: Math.random() > 0.5 ? primaryColor : secondaryColor,
        connections: [],
        speed: 0.2 + Math.random() * 0.8,
        direction: Math.random() > 0.5 ? 1 : -1,
        pulseSpeed: 1 + Math.random() * 3,
        label: nodeLabels[i % nodeLabels.length]
      });
    }
    
    // 创建节点连接
    for (let i = 0; i < nodeCount; i++) {
      const connectionCount = 2 + Math.floor(Math.random() * 3); // 每个节点2-4个连接
      const possibleConnections = Array.from({ length: nodeCount }, (_, idx) => idx).filter(idx => idx !== i);
      
      for (let j = 0; j < connectionCount; j++) {
        if (possibleConnections.length > 0) {
          const randomIndex = Math.floor(Math.random() * possibleConnections.length);
          const targetNode = possibleConnections[randomIndex];
          newNodes[i].connections.push(targetNode);
          possibleConnections.splice(randomIndex, 1);
        }
      }
    }
    
    setNodes(newNodes);
    
    // 创建数据包
    const newDataPackets: DataPacket[] = [];
    for (let i = 0; i < dataPacketCount; i++) {
      const fromNode = Math.floor(Math.random() * nodeCount);
      const possibleTargets = newNodes[fromNode].connections;
      
      if (possibleTargets.length > 0) {
        const toNode = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
        
        newDataPackets.push({
          id: i,
          fromNode,
          toNode,
          x: newNodes[fromNode].x,
          y: newNodes[fromNode].y,
          progress: Math.random(), // 随机初始进度
          speed: 0.002 + Math.random() * 0.006,
          color: Math.random() > 0.3 ? primaryColor : secondaryColor,
        });
      }
    }
    
    setDataPackets(newDataPackets);
  }, [width, height, nodeCount, dataPacketCount, primaryColor, secondaryColor]);
  
  // 动画和渲染
  useEffect(() => {
    if (!nodes.length || !dataPackets.length) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置canvas尺寸
    canvas.width = width;
    canvas.height = height;
    
    const animate = (time: number) => {
      // 清除画布
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, width, height);
      
      // 绘制连接线
      ctx.lineWidth = 1;
      nodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = nodes[targetId];
          
          // 绘制渐变连接线
          const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
          gradient.addColorStop(0, `${node.color}40`); // 40 = 25% 透明度
          gradient.addColorStop(1, `${target.color}40`);
          
          ctx.beginPath();
          ctx.strokeStyle = gradient;
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
        });
      });
      
      // 更新和绘制数据包
      setDataPackets(prevPackets => 
        prevPackets.map(packet => {
          const fromNode = nodes[packet.fromNode];
          const toNode = nodes[packet.toNode];
          
          // 更新进度
          let progress = packet.progress + packet.speed;
          if (progress >= 1) {
            // 数据包到达目的地，选择新的目的地
            const newFromNode = packet.toNode;
            const possibleTargets = nodes[newFromNode].connections;
            
            if (possibleTargets.length > 0) {
              const newToNode = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
              return {
                ...packet,
                fromNode: newFromNode,
                toNode: newToNode,
                progress: 0,
                speed: 0.002 + Math.random() * 0.006,
              };
            } else {
              // 如果没有连接，重置到随机节点
              const randomNodeIndex = Math.floor(Math.random() * nodes.length);
              const possibleTargets = nodes[randomNodeIndex].connections;
              if (possibleTargets.length > 0) {
                const newToNode = possibleTargets[Math.floor(Math.random() * possibleTargets.length)];
                return {
                  ...packet,
                  fromNode: randomNodeIndex,
                  toNode: newToNode,
                  progress: 0,
                  speed: 0.002 + Math.random() * 0.006,
                };
              }
            }
          }
          
          // 计算数据包位置
          const x = fromNode.x + (toNode.x - fromNode.x) * progress;
          const y = fromNode.y + (toNode.y - fromNode.y) * progress;
          
          // 绘制数据包
          ctx.beginPath();
          ctx.fillStyle = packet.color;
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
          
          // 绘制尾迹
          const tailLength = 5;
          for (let i = 1; i <= tailLength; i++) {
            const tailProgress = progress - (i * 0.01);
            if (tailProgress > 0) {
              const tailX = fromNode.x + (toNode.x - fromNode.x) * tailProgress;
              const tailY = fromNode.y + (toNode.y - fromNode.y) * tailProgress;
              
              ctx.beginPath();
              ctx.fillStyle = `${packet.color}${Math.floor(50 - i * 10).toString(16)}`;
              ctx.arc(tailX, tailY, 2 - (i * 0.3), 0, Math.PI * 2);
              ctx.fill();
            }
          }
          
          return { ...packet, progress, x, y };
        })
      );
      
      // 绘制节点
      nodes.forEach((node, index) => {
        // 脉动效果
        const pulse = Math.sin((time / 1000) * node.pulseSpeed) * 0.2 + 0.8;
        const nodeSize = node.size * pulse;
        
        // 绘制光晕
        const gradient = ctx.createRadialGradient(
          node.x, node.y, nodeSize * 0.5,
          node.x, node.y, nodeSize * 2
        );
        gradient.addColorStop(0, `${node.color}50`);
        gradient.addColorStop(1, `${node.color}00`);
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, nodeSize * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 绘制节点
        ctx.beginPath();
        ctx.fillStyle = node.color;
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.fill();
        
        // 绘制节点边框
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff80';
        ctx.lineWidth = 2;
        ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
        ctx.stroke();
        
        // 绘制六边形装饰
        const hexSize = nodeSize * 1.3;
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i;
          const hx = node.x + hexSize * Math.cos(angle);
          const hy = node.y + hexSize * Math.sin(angle);
          
          if (i === 0) {
            ctx.moveTo(hx, hy);
          } else {
            ctx.lineTo(hx, hy);
          }
        }
        ctx.closePath();
        ctx.strokeStyle = `${node.color}60`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // 绘制标签
        if (showLabels && node.label) {
          ctx.font = '12px Arial';
          ctx.fillStyle = '#555';
          ctx.textAlign = 'center';
          ctx.fillText(node.label, node.x, node.y + nodeSize + 16);
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [nodes, dataPackets, width, height, backgroundColor, primaryColor, secondaryColor, showLabels]);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: `${width}px`,
          height: `${height}px`,
          borderRadius: '16px',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </motion.div>
  );
} 