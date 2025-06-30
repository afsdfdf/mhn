import './globals.css';
import '@mantine/core/styles.css';
import './styles/global.css';
import { MantineProvider, createTheme } from '@mantine/core';
import { Inter, Playfair_Display } from 'next/font/google';
import Analytics from './components/Analytics';
import { Suspense } from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const theme = createTheme({
  fontFamily: 'var(--font-inter)',
  headings: {
    fontFamily: 'var(--font-playfair)',
  },
  colors: {
    coral: ['#FFE5E0','#FFCFC4','#FFB3A5','#FF9786','#FF7D6B','#FF6F61','#FF5A4E','#FF4238','#F5352A','#E62A21'],
    mint: ['#E5FFFA','#C7FFF1','#9DFFE6','#70FFDB','#3DF5C6','#15D9AC','#00B48A','#009D7A','#00896B','#00755C'],
    ice: ['#E9FBFF','#CFF6FF','#B2F1FF','#95EBFF','#77E4FF','#62D9F7','#4AC9EA','#30B4D8','#1DA3CA','#0C93BC'],
  },
  radius: { 
    xl: '40px', 
    lg: '32px', 
    md: '24px', 
    sm: '16px', 
    xs: '8px' 
  },
  primaryColor: 'coral',
  defaultGradient: { 
    from: 'coral.5', 
    to: 'mint.4', 
    deg: 135 
  },
  spacing: { 
    xs: '4px', 
    sm: '8px', 
    md: '16px', 
    lg: '24px', 
    xl: '32px' 
  },
  focusRing: 'auto',
  components: {
    Button: {
      styles: {
        root: {
          '&:focus': {
            outline: '2px dashed var(--mantine-color-coral-5)',
          },
        },
      },
    },
  },
});

// 确保 URL 是有效的
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mindhive.network';
const baseUrl = siteUrl.startsWith('http') ? siteUrl : `https://${siteUrl}`;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'MindHive Network',
  description: 'Decentralized AI Hivemind - Build, monetize and govern collaborative AI agents on-chain',
  keywords: ['AI', 'blockchain', 'decentralized', 'artificial intelligence', 'web3', 'collaborative AI'],
  authors: [{ name: 'MindHive Network Team' }],
  openGraph: {
    title: 'MindHive Network',
    description: 'Decentralized AI Hivemind - Build, monetize and govern collaborative AI agents on-chain',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://mindhive.network',
    siteName: 'MindHive Network',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MindHive Network - Decentralized Collaborative AI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MindHive Network',
    description: 'Decentralized AI Hivemind - Build, monetize and govern collaborative AI agents on-chain',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/icons/icon-512.png' }
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#FF6F61',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head />
      <body>
        <MantineProvider theme={theme} defaultColorScheme="light">
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
