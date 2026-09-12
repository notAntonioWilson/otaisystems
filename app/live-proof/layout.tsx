import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Live AI Demo Built for Your Industry',
  description: "See a live AI demo built for your industry. Book a call, we show you exactly what we would build, then build a v1 so you see it before committing.",
  alternates: { canonical: '/live-proof' },
};

export default function LiveProofLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
