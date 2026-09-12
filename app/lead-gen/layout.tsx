import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automated Outreach & AI Lead Generation',
  description: "Automated cold email outreach and AI lead follow up systems for contractors, realtors, and Michigan businesses. Qualified leads delivered on autopilot.",
  alternates: { canonical: '/lead-gen' },
};

export default function LeadGenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
