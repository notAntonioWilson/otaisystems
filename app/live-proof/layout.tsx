import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Live Proof | OTAI Systems',
  description: "See a live AI demo built for your industry. Book a call and we'll show you exactly what we'd build — and build a v1 so you can see the power before committing.",
};
export default function LiveProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
