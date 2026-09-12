import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation & Backend Systems, Michigan',
  description: "Custom workflow automation and backend systems for Michigan businesses. Lead reactivation, CRM automation, and follow up systems that run without you.",
  alternates: { canonical: '/automations' },
};

export default function AutomationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
