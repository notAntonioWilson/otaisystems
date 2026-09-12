import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Professional Strategy Session',
  description: "Book a Professional strategy session with OTAI Systems and map the AI automation roadmap for your business.",
  alternates: { canonical: '/schedule/professional' },
};

export default function ScheduleProfessionalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
