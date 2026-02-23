import './globals.css';
import type { Metadata } from 'next';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { CursorTrail } from '@/components/cursor-trail';

export const metadata: Metadata = {
  title: 'OTAI Systems',
  description: 'We build custom intelligent automation systems for businesses that want to scale faster, cut costs, and work smarter. Our AI solutions operate 24/7 to help you grow efficiently and stay ahead.',
  keywords: 'AI automation, sales automation, customer support AI, workflow automation, business automation',
  icons: {
    icon: '/favicon.svg',
  },
  verification: {
    google: 'ych_NmdsvfuzAjUYoO__x5-BI-Hg1CGmX_KXCykOk_I',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        <CursorTrail />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
