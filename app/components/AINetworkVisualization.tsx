"use client";

import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import * as THREE from 'three';
import { Canvas, useFrame, useThree, ThreeElements } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { rem } from '@mantine/core';

// 定义节点类型接口
interface NodeType {
  color: string;
  size: number;
  label: string;
}

// 定义节点接口
interface Node {
  id: string;
  position: [number, number, number];
  type: string;
  color: string;
  size: number;
  connections: number[];
  active: boolean;
  pulseSpeed: number;
  label: string;
}

// Node types with different colors and properties
const NODE_TYPES: Record<string, NodeType> = {
  AI_AGENT: { color: '#FF6F61', size: 0.8, label: 'AI Agent' },
  DATA_NODE: { color: '#3DF5C6', size: 0.6, label: 'Data Node' },
  COMPUTE_NODE: { color: '#9FEFFF', size: 0.7, label: 'Compute Node' },
  VALIDATOR: { color: '#FFD166', size: 0.5, label: 'Validator' },
  GOVERNANCE: { color: '#6B76FF', size: 0.65, label: 'Governance' },
};

// Generate random nodes
const generateNodes = (count: number): Node[] => {
  const nodes: Node[] = [];
  const nodeTypes = Object.keys(NODE_TYPES);
  
  for (let i = 0; i < count; i++) {
    const type = nodeTypes[Math.floor(Math.random() * nodeTypes.length)];
    const nodeConfig = NODE_TYPES[type];
    
    nodes.push({
      id: `node-${i}`,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ],
      type,
      color: nodeConfig.color,
      size: nodeConfig.size * (0.8 + Math.random() * 0.4), // Add some size variation
      connections: [],
      active: Math.random() > 0.3, // Some nodes are inactive
      pulseSpeed: 0.5 + Math.random() * 1.5,
      label: nodeConfig.label,
    });
  }
  
  // Generate random connections between nodes
  for (let i = 0; i < nodes.length; i++) {
    const connectionCount = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < connectionCount; j++) {
      const targetIndex = Math.floor(Math.random() * nodes.length);
      if (targetIndex !== i && !nodes[i].connections.includes(targetIndex)) {
        nodes[i].connections.push(targetIndex);
      }
    }
  }
  
  return nodes;
};

interface NodeProps {
  node: Node;
  setHoveredNode: (node: Node | null) => void;
}

// Node component with hover effects
function Node({ node, setHoveredNode }: NodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);
  const [pulse, setPulse] = useState(0);
  
  // Pulse animation
  useFrame(() => {
    if (meshRef.current && node.active) {
      setPulse((prev) => prev + 0.01 * node.pulseSpeed);
      const pulseFactor = 1 + Math.sin(pulse) * 0.1;
      meshRef.current.scale.set(scale * pulseFactor, scale * pulseFactor, scale * pulseFactor);
    }
  });
  
  useEffect(() => {
    setScale(hovered ? 1.3 : 1);
  }, [hovered]);
  
  return (
    <mesh
      ref={meshRef}
      position={node.position}
      onPointerOver={() => {
        setHovered(true);
        setHoveredNode(node);
      }}
      onPointerOut={() => {
        setHovered(false);
        setHoveredNode(null);
      }}
    >
      <sphereGeometry args={[node.size, 32, 32]} />
      <meshStandardMaterial 
        color={node.color} 
        emissive={node.color}
        emissiveIntensity={hovered ? 0.8 : node.active ? 0.4 : 0.1}
        transparent
        opacity={node.active ? 0.9 : 0.5}
      />
      
      {hovered && (
        <Html distanceFactor={10}>
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            whiteSpace: 'nowrap',
          }}>
            {node.label} #{node.id.split('-')[1]}
          </div>
        </Html>
      )}
    </mesh>
  );
}

interface ConnectionProps {
  start: [number, number, number];
  end: [number, number, number];
  color: string;
}

// Connection component with animation
function Connection({ start, end, color }: ConnectionProps) {
  const ref = useRef<THREE.BufferGeometry>(null);
  const [progress, setProgress] = useState(0);
  
  useFrame(() => {
    if (ref.current) {
      setProgress((prev) => (prev + 0.005) % 1);
      
      // Update the line geometry
      const points = [];
      points.push(new THREE.Vector3(...start));
      points.push(new THREE.Vector3(...end));
      
      ref.current.setFromPoints(points);
    }
  });
  
  return (
    <>
      <group>
        <line>
          <bufferGeometry ref={ref} />
          <lineBasicMaterial color={color} transparent opacity={0.3} />
        </line>
      </group>
      
      {/* Animated particle moving along the connection */}
      <mesh
        position={[
          start[0] + (end[0] - start[0]) * progress,
          start[1] + (end[1] - start[1]) * progress,
          start[2] + (end[2] - start[2]) * progress,
        ]}
      >
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
    </>
  );
}

interface NetworkProps {
  nodeCount?: number;
}

// Network component that manages nodes and connections
function Network({ nodeCount = 30 }: NetworkProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const { camera } = useThree();
  
  // Generate nodes on component mount
  useEffect(() => {
    setNodes(generateNodes(nodeCount));
  }, [nodeCount]);
  
  // Slowly rotate the camera
  useFrame(({ clock }) => {
    camera.position.x = Math.sin(clock.getElapsedTime() * 0.1) * 15;
    camera.position.z = Math.cos(clock.getElapsedTime() * 0.1) * 15;
    camera.lookAt(0, 0, 0);
  });
  
  return (
    <>
      {/* Render nodes */}
      {nodes.map((node) => (
        <Node key={node.id} node={node} setHoveredNode={setHoveredNode} />
      ))}
      
      {/* Render connections */}
      {nodes.map((node) => 
        node.connections.map((targetIndex, i) => {
          if (targetIndex < nodes.length) {
            const target = nodes[targetIndex];
            return (
              <Connection
                key={`${node.id}-${target.id}-${i}`}
                start={node.position}
                end={target.position}
                color={node.color}
              />
            );
          }
          return null;
        })
      )}
      
      {/* Info text */}
      <Text
        position={[0, 8, 0]}
        color="white"
        fontSize={0.5}
        anchorX="center"
        anchorY="middle"
      >
        MindHive Network
      </Text>
      
      {/* Node info display */}
      {hoveredNode && (
        <Html position={[0, -8, 0]} center>
          <div style={{
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '10px 15px',
            borderRadius: '8px',
            fontSize: '14px',
            textAlign: 'center',
            width: '200px',
          }}>
            <div style={{ fontWeight: 'bold', marginBottom: '5px', color: hoveredNode.color }}>
              {hoveredNode.label} #{hoveredNode.id.split('-')[1]}
            </div>
            <div>Connections: {hoveredNode.connections.length}</div>
            <div>Status: {hoveredNode.active ? 'Active' : 'Inactive'}</div>
          </div>
        </Html>
      )}
    </>
  );
}

export default function AINetworkVisualization() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Update dimensions on resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        });
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        borderRadius: '16px',
      }}
    >
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <fog attach="fog" args={['#000', 5, 30]} />
        
        <Network nodeCount={isMobile ? 15 : 30} />
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          autoRotateSpeed={0.5}
          minDistance={8}
          maxDistance={20}
        />
      </Canvas>
      
      {/* Overlay text */}
      <div style={{
        position: 'absolute',
        bottom: rem(20),
        right: rem(20),
        background: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '4px',
        fontSize: '12px',
        pointerEvents: 'none',
      }}>
        Interactive AI Network Visualization
      </div>
    </div>
  );
} 