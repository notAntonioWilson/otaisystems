import { ScheduleClient } from './schedule-client';

export function generateStaticParams() {
  return [
    { tier: 'starter' },
    { tier: 'professional' },
    { tier: 'enterprise' },
  ];
}

export default function SchedulePage() {
  return <ScheduleClient />;
}
