"use client";

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Text, Paper, Badge } from '@mantine/core';

// 节点类型
type Node = {
  id: number;
  position: [number, number, number];
  connections: number[];
  type: 'model' | 'agent' | 'data';
  size: number;
  color: string;
  speed: number;
};

// 节点组件
const AINode = ({ node, nodes, hoveredNode, setHoveredNode }: { 
  node: Node; 
  nodes: Node[];
  hoveredNode: number | null;
  setHoveredNode: (id: number | null) => void;
}) => {
  const isHovered = hoveredNode === node.id;
  const meshRef = useRef<THREE.Mesh>(null);
  
  // 添加轻微的浮动动画
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * node.speed) * 0.001;
    }
  });
  
  // 根据节点类型设置材质
  const getMaterial = () => {
    const isHighlighted = isHovered || (hoveredNode !== null && node.connections.includes(hoveredNode));
    
    if (node.type === 'model') {
      return <meshStandardMaterial 
        color={isHighlighted ? '#FF6F61' : node.color} 
        emissive={isHighlighted ? '#FF6F61' : node.color}
        emissiveIntensity={isHighlighted ? 0.5 : 0.2}
        roughness={0.3} 
        metalness={0.8} 
      />;
    } else if (node.type === 'agent') {
      return <meshStandardMaterial 
        color={isHighlighted ? '#3DF5C6' : node.color}
        emissive={isHighlighted ? '#3DF5C6' : node.color}
        emissiveIntensity={isHighlighted ? 0.5 : 0.2}
        roughness={0.2} 
        metalness={0.9}
      />;
    } else {
      return <meshStandardMaterial 
        color={isHighlighted ? '#9FEFFF' : node.color}
        emissive={isHighlighted ? '#9FEFFF' : node.color}
        emissiveIntensity={isHighlighted ? 0.5 : 0.2}
        roughness={0.4} 
        metalness={0.6}
      />;
    }
  };

  return (
    <Sphere 
      ref={meshRef}
      args={[node.size, 32, 32]} 
      position={node.position}
      onPointerOver={() => setHoveredNode(node.id)}
      onPointerOut={() => setHoveredNode(null)}
    >
      {getMaterial()}
    </Sphere>
  );
};

// 连接线组件
const Connection = ({ start, end, isHighlighted }: { 
  start: [number, number, number]; 
  end: [number, number, number];
  isHighlighted: boolean;
}) => {
  return (
    <Line 
      points={[start, end]} 
      color={isHighlighted ? "#ffffff" : "#aaaaaa"} 
      lineWidth={isHighlighted ? 2 : 0.5}
      transparent
      opacity={isHighlighted ? 0.8 : 0.3}
    />
  );
};

// 网络组件
const Network = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // 创建网络节点
  useEffect(() => {
    const newNodes: Node[] = [];
    
    // 创建AI模型节点 (中心)
    newNodes.push({
      id: 0,
      position: [0, 0, 0],
      connections: [1, 2, 3, 4, 5],
      type: 'model',
      size: 0.5,
      color: '#FF6F61',
      speed: 0.8,
    });
    
    // 创建AI代理节点 (第一层)
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2;
      const radius = 2;
      newNodes.push({
        id: i + 1,
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 0.5,
          Math.sin(angle) * radius
        ],
        connections: [0, ...[6, 7, 8, 9, 10].filter(() => Math.random() > 0.5)],
        type: 'agent',
        size: 0.3,
        color: '#3DF5C6',
        speed: 0.5 + Math.random() * 0.5,
      });
    }
    
    // 创建数据节点 (第二层)
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const radius = 3.5;
      newNodes.push({
        id: i + 6,
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 1,
          Math.sin(angle) * radius
        ],
        connections: [1 + Math.floor(Math.random() * 5)],
        type: 'data',
        size: 0.15,
        color: '#9FEFFF',
        speed: 0.3 + Math.random() * 0.7,
      });
    }
    
    setNodes(newNodes);
  }, []);
  
  // 添加轻微的旋转动画
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* 渲染节点 */}
      {nodes.map((node) => (
        <AINode 
          key={node.id} 
          node={node} 
          nodes={nodes}
          hoveredNode={hoveredNode}
          setHoveredNode={setHoveredNode}
        />
      ))}
      
      {/* 渲染连接线 */}
      {nodes.map((node) => 
        node.connections.map((targetId) => {
          const targetNode = nodes.find(n => n.id === targetId);
          if (targetNode) {
            const isHighlighted = 
              hoveredNode === node.id || 
              hoveredNode === targetId;
            
            return (
              <Connection 
                key={`${node.id}-${targetId}`}
                start={node.position}
                end={targetNode.position}
                isHighlighted={isHighlighted}
              />
            );
          }
          return null;
        })
      )}
    </group>
  );
};

// 主组件
export default function AINetworkVisualization() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '24px'
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#3DF5C6" intensity={0.5} />
        <Network />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={false}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
} 