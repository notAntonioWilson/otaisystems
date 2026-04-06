import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Antonio Wilson | OTAI Systems',
  description: 'Founder and CEO of OTAI Systems. 3 years in marketing, 1+ year building AI systems. Building the biggest AI company in the world.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
