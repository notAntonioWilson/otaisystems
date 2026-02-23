import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Process Automation Services | OTAI',
  description: 'We design automation systems that remove repetitive tasks, reduce costs, and increase execution speed. Automate intelligently.',
};

export default function AutomationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
