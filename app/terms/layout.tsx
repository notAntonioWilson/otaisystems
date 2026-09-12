import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "The terms and conditions governing the use of OTAI Systems services.",
  alternates: { canonical: '/terms' },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
