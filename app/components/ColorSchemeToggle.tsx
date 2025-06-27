"use client";
import { ActionIcon, rem } from '@mantine/core';
import { Sun } from 'lucide-react';

export default function ColorSchemeToggle() {
  return (
    <ActionIcon
      variant="subtle"
      size="lg"
      aria-label="Light mode"
      color="coral"
    >
      <Sun size={rem(20)} />
    </ActionIcon>
  );
} 