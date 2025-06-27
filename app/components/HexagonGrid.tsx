"use client";
import React, { useEffect, useRef } from 'react';
import { Box } from '@mantine/core';
import { motion } from 'framer-motion';

interface HexagonGridProps {
  rows?: number;
  cols?: number;
  size?: number;
  spacing?: number;
  primaryColor?: string;
  secondaryColor?: string;
  pulseSpeed?: number;
}

export default function HexagonGrid({
  rows = 10,
  cols = 12,
  size = 40,
  spacing = 4,
  primaryColor = '#FF6F61',
  secondaryColor = '#3DF5C6',
  pulseSpeed = 5,
}: HexagonGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // 计算六边形的点
  const calculateHexPoints = (x: number, y: number, size: number) => {
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      points.push({
        x: x + size * Math.cos(angle),
        y: y + size * Math.sin(angle),
      });
    }
    return points;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置canvas尺寸
    const width = (cols * size * 1.5) + (cols * spacing);
    const height = (rows * size * Math.sqrt(3)) + (rows * spacing);
    canvas.width = width;
    canvas.height = height;

    // 绘制函数
    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // 遍历绘制六边形网格
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // 计算六边形中心位置
          const x = col * (size * 1.5 + spacing) + size;
          const y = row * (size * Math.sqrt(3) + spacing) + size * Math.sqrt(3) / 2;
          
          // 偶数行偏移
          const offsetX = row % 2 === 0 ? 0 : size * 0.75 + spacing / 2;
          
          // 生成脉动效果的值
          const pulse = Math.sin((time / 1000) * pulseSpeed + (row * col) * 0.1) * 0.5 + 0.5;
          
          // 根据位置和时间创建渐变色
          const hue1 = parseInt(primaryColor.slice(1), 16);
          const hue2 = parseInt(secondaryColor.slice(1), 16);
          
          // 混合颜色
          const r1 = (hue1 >> 16) & 255;
          const g1 = (hue1 >> 8) & 255;
          const b1 = hue1 & 255;
          
          const r2 = (hue2 >> 16) & 255;
          const g2 = (hue2 >> 8) & 255;
          const b2 = hue2 & 255;
          
          const r = Math.floor(r1 + (r2 - r1) * pulse);
          const g = Math.floor(g1 + (g2 - g1) * pulse);
          const b = Math.floor(b1 + (b2 - b1) * pulse);
          
          const color = `rgba(${r}, ${g}, ${b}, ${0.2 + pulse * 0.3})`;
          
          // 绘制六边形
          const points = calculateHexPoints(x + offsetX, y, size - 2);
          
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          for (let i = 1; i < 6; i++) {
            ctx.lineTo(points[i].x, points[i].y);
          }
          ctx.closePath();
          
          // 填充
          ctx.fillStyle = color;
          ctx.fill();
          
          // 边框
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 + pulse * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      
      requestAnimationFrame(draw);
    };
    
    const animationId = requestAnimationFrame(draw);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [cols, rows, size, spacing, primaryColor, secondaryColor, pulseSpeed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      style={{
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        />
      </Box>
    </motion.div>
  );
} 