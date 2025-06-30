'use client';

import { Center, Loader, Text, Stack } from '@mantine/core';

export default function Loading() {
  return (
    <Center style={{ height: '100vh', width: '100%' }}>
      <Stack align="center" gap="md">
        <Loader size="xl" color="coral" type="dots" />
        <Text size="lg" fw={500} c="coral.6">Loading MindHive Network...</Text>
      </Stack>
    </Center>
  );
} 