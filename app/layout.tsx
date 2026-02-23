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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
