You are a senior front-end engineer.  
Task: generate production-ready code for a single-page marketing site.
Stack:
  • Next.js 14 (app dir, TypeScript, “pnpm create next-app@latest --ts --app”).
  • UI lib: Mantine v7 (@mantine/core @mantine/hooks @mantine/next).
  • CSS-in-JS only via Mantine’s sx / Styles API (no Tailwind).  
Design language:
  • Pastel-mesh vapor + claymorphism (soft shadows, 40 px radii).  
  • Cream base “#F6F3EB”; Accents: Coral “#FF6F61”, Mint “#3DF5C6”, IceBlue “#9FEFFF”.  
  • 8 pt spacing grid; fluid typography scale 1.25 (Clamp).  
Accessibility: WCAG AA contrast for interactive text; keyboard focus ring.  
Return **all code** inside one response block.
Create these files:

/app/layout.tsx         // MantineProvider theme, fonts preload
/app/page.tsx           // full landing page assembly
/app/components/
      MainNavbar.tsx
      HeroSection.tsx
      FeatureCards.tsx
      NewsletterBar.tsx
/app/styles/global.css  // optional keyframes & body bg

Each component must be exported default. 
Use server components where no state; 'use client' where hooks (e.g. navbar button).
Inside MantineProvider theme:

fonts:
  headings: "Playfair Display, serif"
  body    : "Inter, sans-serif"

colors:
  coral : ['#FFE5E0','#FFCFC4','#FFB3A5','#FF9786','#FF7D6B','#FF6F61','#FF5A4E','#FF4238','#F5352A','#E62A21']
  mint  : ['#E5FFFA','#C7FFF1','#9DFFE6','#70FFDB','#3DF5C6','#15D9AC','#00B48A','#009D7A','#00896B','#00755C']
  ice   : ['#E9FBFF','#CFF6FF','#B2F1FF','#95EBFF','#77E4FF','#62D9F7','#4AC9EA','#30B4D8','#1DA3CA','#0C93BC']

radius      : { xl: 40, lg: 32, md: 24, sm: 16, xs: 8 }
primaryColor: 'coral'
defaultGradient: { from: 'coral.5', to: 'mint.4', deg: 135 }

spacing: { xs:4, sm:8, md:16, lg:24, xl:32 }
"use client";
import { Header, Container, Group, Button, ActionIcon, rem } from '@mantine/core';
import { Hexagon } from 'lucide-react';

• sticky Header height 64 px; backdrop-filter blur(8px) + rgba(246,243,235,.7).
• Left: Logo icon (Hexagon mint) + project name (fw 700).
• Center (>=sm): Nav links Group gap lg -> "Features" "Docs" "Roadmap".
• Right: Coral gradient pill Button: “Connect Wallet” (no functionality yet).

Focus ring: outline 2px dashed coral. Add aria-label to Button.
"use client";
import { Box, Container, Title, Text, Button, Group } from '@mantine/core';

• Wrapper Box h={rem(600)} pos="relative" bg="#F6F3EB".
• Place 3 blurred mesh blobs: absolute div w/h 480 px, border-radius 60%, filter blur(120px).
  blob 1 top:-15% left:-10% bg:"radial-gradient(circle,#FF6F61 0%,transparent 70%)"
  blob 2 top:25% right:-15% bg:"radial-gradient(circle,#3DF5C6 0%,transparent 70%)"
  blob 3 bottom:-15% left:45% bg:"radial-gradient(circle,#9FEFFF 0%,transparent 70%)"
• Inside <Container size="lg" h="100%" display flex direction column justify center>
  - <Title order={1} fz={{ base:48, md:72 }} c="coral.6" lh={1}>
        Decentralized <br/> AI Hivemind
    </Title>
  - <Text fz="lg" mt="md" maw={500}>
        Build, monetise and govern collaborative AI agents on-chain.
    </Text>
  - <Group mt={40}>
        <Button radius="xl" size="md" color="coral">Get Started</Button>
    </Group>
"use client";
import { Card, SimpleGrid, Text, ThemeIcon, rem } from '@mantine/core';
import { Brain, ShieldCheck, Gift } from 'lucide-react';

features = [
 { icon: Brain,   title:'Collaborate', desc:'Deploy AI agents & share models',  grad:'coral' , rotate:'-4deg'},
 { icon: ShieldCheck, title:'Secure',   desc:'Immutable & auditable',          grad:'mint'  , rotate:'2deg' },
 { icon: Gift,    title:'Earn Rewards', desc:'Get paid for contributions',     grad:'ice'   , rotate:'-3deg'},
];

return <SimpleGrid cols={{ base:1, sm:3 }} spacing="xl" mt="xl">
  features.map(f =>
    <Card key={f.title}
          radius="xl" p="xl" shadow="lg"
          style={{ transform:`rotate(${f.rotate})`, background:`var(--mantine-color-${f.grad}-5)`}}
          className="hover:translate-y-[-6px] transition-transform">
       <ThemeIcon variant="light" color="white" size={rem(60)} radius="xl">
         <f.icon size={32}/>
       </ThemeIcon>
       <Text fw={600} fz="lg" mt="md">{f.title}</Text>
       <Text fz="sm" mt={6}>{f.desc}</Text>
    </Card>
  )
</SimpleGrid>
/app/styles/global.css:

@keyframes ken-burns {
  0%  { transform: scale(1) translate(0,0); }
  100%{ transform: scale(1.1) translate(-3%, -3%); }
}
body { background:#F6F3EB; animation: ken-burns 20s ease-in-out infinite alternate; }

.card-float:hover { transform: translateY(-6px) scale(1.03); }
| Mantine API             | NextUI v2 等价                                                                           |
| ----------------------- | -------------------------------------------------------------------------------------- |
| `<Card radius="xl">`    | `<Card className="rounded-3xl shadow-lg">`                                             |
| ThemeProvider in layout | `NextUIProvider theme={{colors:{primary:'#FF6F61'}}}>`                                 |
| `ThemeIcon`+Lucide      | `Icon` inside `<CardHeader className="bg-gradient-to-br from-coral-500 to-coral-400">` |
| `SimpleGrid cols={{}}`  | `<Grid.Container gap={4}> …`                                                           |
| `TextInput radius="xl"` | `<Input radius="full" size="lg" />`                                                    |
| `Button color="coral"`  | `<Button color="primary" radius="full">`（先扩展主题色）                                       |
