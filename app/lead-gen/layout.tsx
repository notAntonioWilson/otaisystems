import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Lead Generation Systems | OTAI Systems',
  description: 'Install AI-powered lead generation systems that consistently bring qualified prospects into your pipeline.',
};

export default function LeadGenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
