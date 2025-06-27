"use client";
import { Paper, Text, Title, rem } from '@mantine/core';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HexagonInfoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color?: string;
  delay?: number;
}

export default function HexagonInfoCard({
  title,
  description,
  icon,
  color = '#FF6F61',
  delay = 0,
}: HexagonInfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay * 0.2,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '115%', // 维持六边形比例
      }}
    >
      {/* 六边形背景 */}
      <Paper
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, ${color}20, ${color}40)`,
          borderRadius: '16px',
          overflow: 'hidden',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: rem(24),
          border: `1px solid ${color}30`,
          transition: 'all 0.3s ease',
        }}
      >
        {/* 装饰性六边形边框 */}
        <div
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            right: '5%',
            bottom: '5%',
            border: `2px dashed ${color}40`,
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            opacity: 0.6,
          }}
        />
        
        {/* 内容 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            zIndex: 2,
            textAlign: 'center',
          }}
        >
          {/* 图标 */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: delay * 0.2 + 0.3,
              ease: "easeOut",
            }}
            style={{
              color: color,
              fontSize: rem(48),
              marginBottom: rem(16),
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {icon}
          </motion.div>
          
          {/* 标题 */}
          <Title
            order={3}
            fz={rem(20)}
            fw={600}
            mb={rem(8)}
            style={{
              color: '#333',
            }}
          >
            {title}
          </Title>
          
          {/* 描述 */}
          <Text
            size="sm"
            c="dimmed"
            style={{
              maxWidth: '90%',
            }}
          >
            {description}
          </Text>
        </div>
        
        {/* 发光效果 */}
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: `radial-gradient(circle, ${color}30 0%, transparent 70%)`,
            opacity: 0.5,
            zIndex: 1,
          }}
        />
      </Paper>
    </motion.div>
  );
} 