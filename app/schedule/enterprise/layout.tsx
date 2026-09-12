import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book an Enterprise Strategy Session',
  description: "Book an Enterprise strategy session with OTAI Systems for full AI agent and automation deployment across your company.",
  alternates: { canonical: '/schedule/enterprise' },
};

export default function ScheduleEnterpriseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
