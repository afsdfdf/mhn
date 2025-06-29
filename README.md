# MindHive Network

A decentralized collaborative AI platform built with Next.js 14.

## Features

- **Decentralized AI Network**: Connect AI models and agents in a collaborative network
- **DataDAO Framework**: Collective ownership and governance of datasets
- **On-chain Verification**: Transparent and verifiable AI computations
- **Interactive 3D Visualization**: Visual representation of the AI network
- **Responsive Design**: Optimized for all devices
- **Modern UI**: Built with Mantine UI components
- **Animations**: Smooth transitions and effects with Framer Motion
- **SEO Optimized**: Complete with metadata, sitemap, and robots.txt

## Technical Features

- **Next.js 14**: Utilizing the App Router for improved performance and developer experience
- **React 19**: Latest React features and improvements
- **Server Components**: Optimized rendering strategy with selective Client Components
- **TypeScript**: Type-safe development
- **Three.js/React Three Fiber**: 3D visualizations and animations
- **Mantine UI**: Modern component library
- **Framer Motion**: Animation library
- **SEO Optimization**: Metadata, sitemap, robots.txt
- **Performance Optimization**: Image optimization, code splitting, and more
- **Vercel Deployment Ready**: Configured for optimal deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or pnpm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd mindhive-network
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```
# Google AI API Keys
GEMINI_API_KEY=your_gemini_api_key_here

# Other environment variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

### Deploying to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your project to Vercel
3. Vercel will automatically detect that you're using Next.js and configure the build settings
4. Your application will be deployed and available at a Vercel URL

### Manual Deployment

To manually deploy the application:

1. Build the application:

```bash
npm run build
# or
pnpm build
# or
yarn build
```

2. Start the production server:

```bash
npm run start
# or
pnpm start
# or
yarn start
```

## Project Structure

```
mindhive-network/
├── app/                    # Next.js App Router
│   ├── about/              # About page
│   ├── components/         # Shared components
│   ├── contact/            # Contact page
│   ├── docs/               # Documentation pages
│   ├── token/              # Token information page
│   ├── whitepaper/         # Whitepaper page
│   ├── error.tsx           # Error handling
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Loading state
│   ├── manifest.ts         # Web manifest
│   ├── not-found.tsx       # 404 page
│   ├── page.tsx            # Home page
│   ├── robots.ts           # Robots configuration
│   └── sitemap.ts          # Sitemap generation
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── next.config.js          # Next.js configuration
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel configuration
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Mantine UI](https://mantine.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [Framer Motion](https://www.framer.com/motion/)
