import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Agents & AI Receptionists for Michigan',
  description: "Custom AI voice agents, AI receptionists, and chat agents that answer every call, qualify leads, and book appointments for Michigan contractors and realtors.",
  alternates: { canonical: '/ai-agents' },
};

export default function AiAgentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
