import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Wall of Proof: Real Client Results',
  description: "Real client conversations, live automation workflows, dashboards, and results from OTAI Systems. Nothing staged. See the proof before you book a call.",
  alternates: { canonical: '/proof' },
};

export default function ProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
