import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book AI Starter Strategy Call | OTAI',
  description: 'Schedule your AI Starter consultation and discover how automation can scale your business.',
};

export default function StarterScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
