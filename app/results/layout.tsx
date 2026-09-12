import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Results & Case Studies',
  description: "Real results from custom AI automations, AI agents, and outreach systems built for Michigan contractors, realtors, and growing businesses.",
  alternates: { canonical: '/results' },
};

export default function ResultsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
