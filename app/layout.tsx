import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NavBar } from '@/components/nav-bar';
import { Footer } from '@/components/footer';
import { CursorTrail } from '@/components/cursor-trail';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'OTAI Systems - AI-Powered Business Automation',
  description: 'Close the deal before the call. VSLs + undeniable proof → prospects show up ready to buy. Transform your business with AI sales automation, customer support, and workflow optimization.',
  keywords: 'AI automation, sales automation, customer support AI, workflow automation, business automation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CursorTrail />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
