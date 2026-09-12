import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Antonio Wilson, Founder & CEO',
  description: "Antonio Wilson founded OTAI Systems to build custom AI automations, AI agents, and outreach systems for contractors, realtors, and businesses across Michigan.",
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
