import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Starter Strategy Call',
  description: "Book a Starter strategy call with OTAI Systems. One focused AI system, one problem solved, built for your business.",
  alternates: { canonical: '/schedule/starter' },
};

export default function ScheduleStarterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
