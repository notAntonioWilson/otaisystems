import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom AI Agents for Business',
  description: 'Deploy custom AI agents that handle sales, support, follow-ups, and operations automatically. Built for growing companies ready to scale.',
};

export default function AIAgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
