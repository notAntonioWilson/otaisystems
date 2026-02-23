import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise AI Strategy & Deployment | OTAI',
  description: 'Enterprise-level AI agents and automation systems built for high-growth companies.',
};

export default function EnterpriseScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
