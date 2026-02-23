import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professional AI Strategy Session | OTAI',
  description: 'Ready to scale? Book your Professional AI Strategy Session and design your automation roadmap.',
};

export default function ProfessionalScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
