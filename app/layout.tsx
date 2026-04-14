import './globals.css';
import type { Metadata } from 'next';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { CursorTrail } from '@/components/cursor-trail';

export const metadata: Metadata = {
  title: {
    default: 'AI Automation Agency | AI Agents & Lead Gen Systems',
    template: '%s | OTAI Systems'
  },
  description: 'We build AI agents, workflow automations, and lead generation systems for ambitious business owners. Scale faster. Book your strategy call today.',
  keywords: 'AI automation, sales automation, customer support AI, workflow automation, business automation, AI agents, lead generation',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'OTAI Systems — The Infrastructure Behind Business Growth.',
    description: 'We build AI agents, workflow automations, and lead generation systems for ambitious business owners. Scale faster. Book your strategy call today.',
    url: 'https://www.otaisystems.com',
    siteName: 'OTAI Systems',
    images: [
      {
        url: 'https://www.otaisystems.com/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OTAI Systems — AI Agents, Automations, Growth Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OTAI Systems — The Infrastructure Behind Business Growth.',
    description: 'AI agents, workflow automations, and lead generation systems built for ambitious business owners.',
    images: ['https://www.otaisystems.com/images/og-image.png'],
  },
  verification: {
    google: 'ych_NmdsvfuzAjUYoO__x5-BI-Hg1CGmX_KXCykOk_I',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://otaisystems.com/#business",
  "name": "OTAI Systems",
  "url": "https://otaisystems.com/",
  "description": "OTAI Systems builds AI agents, automation systems, and AI-powered lead generation systems for ambitious business owners looking to scale operations and revenue.",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "AI Agents",
    "Business Automation",
    "Lead Generation Systems",
    "Workflow Automation",
    "AI Sales Systems"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "availableLanguage": ["English"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to font CDN for faster font loading */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        {/* Preconnect to Cal.com for faster widget load when user scrolls */}
        <link rel="preconnect" href="https://app.cal.com" crossOrigin="anonymous" />
        {/* Non-render-blocking font load with preload + swap */}
        <link
          rel="preload"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          as="style"
        />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SPSSG0S37G"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SPSSG0S37G');
            `,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <CursorTrail />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
