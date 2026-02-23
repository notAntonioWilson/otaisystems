import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Case Studies | OTAI Systems',
  description: 'See how our AI agents and automation systems increase revenue, reduce workload, and create scalable growth.',
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
