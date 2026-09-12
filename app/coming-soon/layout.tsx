import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon',
  description: "This page is coming soon. OTAI Systems builds custom AI automations, AI agents, and outreach systems for Michigan businesses.",
  alternates: { canonical: '/coming-soon' },
  robots: { index: false, follow: true },
};

export default function ComingSoonLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
