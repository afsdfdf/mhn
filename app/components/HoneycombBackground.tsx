"use client";
import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Box } from '@mantine/core';

interface HoneycombBackgroundProps {
  opacity?: number;
  primaryColor?: string;
  secondaryColor?: string;
  density?: number;
  scrollSpeed?: number;
}

export default function HoneycombBackground({
  opacity = 0.15,
  primaryColor = '#FF6F61',
  secondaryColor = '#3DF5C6',
  density = 20,
  scrollSpeed = 0.5,
}: HoneycombBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  
  // 使用滚动位置来创建视差效果
  const yOffset = useTransform(scrollY, [0, 1000], [0, 100 * scrollSpeed]);
  
  // 绘制六边形
  const drawHexagon = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string,
    strokeColor: string,
    rotation: number = 0
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = size * Math.cos(angle);
      const hy = size * Math.sin(angle);
      
      if (i === 0) {
        ctx.moveTo(hx, hy);
      } else {
        ctx.lineTo(hx, hy);
      }
    }
    ctx.closePath();
    
    // 填充
    ctx.fillStyle = color;
    ctx.fill();
    
    // 描边
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.restore();
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // 设置canvas尺寸为窗口大小
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // 创建六边形网格
    const hexSize = Math.max(window.innerWidth, window.innerHeight) / density;
    const hexHeight = hexSize * Math.sqrt(3);
    const hexWidth = hexSize * 2;
    
    const cols = Math.ceil(window.innerWidth / (hexWidth * 0.75)) + 2;
    const rows = Math.ceil(window.innerHeight / hexHeight) + 2;
    
    // 创建六边形数据
    const hexagons: {
      x: number;
      y: number;
      size: number;
      color: string;
      strokeColor: string;
      rotation: number;
      pulseSpeed: number;
      pulsePhase: number;
    }[] = [];
    
    for (let row = -1; row < rows; row++) {
      for (let col = -1; col < cols; col++) {
        const x = col * hexWidth * 0.75;
        const y = row * hexHeight + (col % 2 === 0 ? 0 : hexHeight / 2);
        
        // 随机选择颜色
        const useSecondary = Math.random() > 0.7;
        const color = useSecondary ? secondaryColor : primaryColor;
        const alpha = (Math.random() * 0.2 + 0.05).toFixed(2);
        const strokeAlpha = (Math.random() * 0.1 + 0.05).toFixed(2);
        
        hexagons.push({
          x,
          y,
          size: hexSize * (0.7 + Math.random() * 0.3),
          color: `${color}${Math.floor(parseFloat(alpha) * 255).toString(16).padStart(2, '0')}`,
          strokeColor: `${color}${Math.floor(parseFloat(strokeAlpha) * 255).toString(16).padStart(2, '0')}`,
          rotation: Math.random() * Math.PI * 2,
          pulseSpeed: 1 + Math.random() * 3,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }
    
    // 动画循环
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // 获取当前滚动位置
      const scrollOffset = yOffset.get();
      
      // 绘制所有六边形
      hexagons.forEach(hex => {
        // 应用视差效果
        const y = hex.y + scrollOffset * (0.5 + Math.random() * 0.5);
        
        // 脉动效果
        const pulse = Math.sin(time / 1000 * hex.pulseSpeed + hex.pulsePhase) * 0.2 + 0.8;
        const size = hex.size * pulse;
        
        drawHexagon(
          ctx,
          hex.x,
          y % (canvas.height + hexHeight * 2) - hexHeight,
          size,
          hex.color,
          hex.strokeColor,
          hex.rotation
        );
      });
      
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [primaryColor, secondaryColor, density, yOffset]);
  
  return (
    <Box
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity,
        pointerEvents: 'none',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
        }}
      />
    </Box>
  );
} 