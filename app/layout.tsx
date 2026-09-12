import './globals.css';
import type { Metadata } from 'next';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { CursorTrail } from '@/components/cursor-trail';
import { DeferredScripts } from '@/components/deferred-scripts';

const SITE_URL = 'https://www.otaisystems.com';
const SITE_TITLE = 'Custom AI Automation Agency in Michigan | OTAI Systems';
const SITE_DESC = 'OTAI Systems builds custom AI automations, AI agents, automated outreach, and AI powered websites for contractors, realtors, and businesses across Michigan.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s | OTAI Systems'
  },
  description: SITE_DESC,
  keywords: [
    'AI', 'automation', 'automations', 'automate', 'agent', 'agents', 'systems', 'workflow', 'workflows', 'backend',
    'integration', 'integrations', 'custom', 'consulting', 'n8n',
    'outreach', 'leads', 'lead', 'prospecting', 'reactivation', 'followup', 'chatbot', 'voicebot', 'receptionist', 'voice',
    'scheduling', 'booking', 'CRM', 'software', 'app', 'apps', 'website', 'websites', 'SEO', 'development',
    'contractors', 'contractor', 'realtors', 'realtor', 'builders', 'remodeling', 'roofing', 'HVAC', 'plumbing', 'landscaping', 'painting', 'carpentry',
    'Michigan', 'OTAI', 'otaisystems'
  ],
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: 'OTAI Systems',
    images: [
      {
        url: `${SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'OTAI Systems: AI Agents, Automations, Growth Systems',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [`${SITE_URL}/images/og-image.png`],
  },
  verification: {
    google: 'ych_NmdsvfuzAjUYoO__x5-BI-Hg1CGmX_KXCykOk_I',
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": `${SITE_URL}/#business`,
  "name": "OTAI Systems",
  "alternateName": "OTAI",
  "url": `${SITE_URL}/`,
  "logo": `${SITE_URL}/images/logo.png`,
  "image": `${SITE_URL}/images/og-image.png`,
  "telephone": "+1-586-419-7309",
  "description": "OTAI Systems builds custom AI automations, AI agents, AI receptionists, automated outreach, and AI powered websites for contractors, realtors, and businesses across Michigan.",
  "founder": {
    "@type": "Person",
    "name": "Antonio Wilson",
    "jobTitle": "Founder & CEO",
    "url": `${SITE_URL}/about`
  },
  "areaServed": [
    { "@type": "State", "name": "Michigan" },
    { "@type": "Country", "name": "United States" }
  ],
  "knowsAbout": [
    "AI automation", "AI agents", "AI receptionists", "workflow automation", "backend systems", "automated outreach",
    "cold email automation", "lead reactivation", "CRM automation", "AI web development", "n8n",
    "contractors", "home services", "real estate"
  ],
  "serviceType": [
    "Backend Systems",
    "AI Agents",
    "Automated Outreach",
    "AI Built Applications",
    "Multi-Service AI Automation"
  ],
  "priceRange": "$$$",
  "sameAs": [
    "https://www.linkedin.com/company/otaisystems/",
    "https://www.instagram.com/otai.systems",
    "https://www.facebook.com/operationtransention",
    "https://x.com/antoniowilsonx",
    "https://www.youtube.com/@antoniowilson_yt"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "telephone": "+1-586-419-7309",
    "areaServed": "US",
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
        <DeferredScripts />
      </body>
    </html>
  );
}
