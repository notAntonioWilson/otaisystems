export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  benefits: string[];
  pricing: { label: string; price: string; features: string[] }[];
  vsl: { poster: string; src: string };
  proofSlugs: string[];
};

export const services: Service[] = [
  {
    slug: 'ai-sales-automation',
    name: 'AI Sales Automation',
    short: 'Turn every lead into a qualified prospect',
    description: 'Our AI-powered sales automation system qualifies, nurtures, and books meetings with your ideal customers 24/7. No more cold calling. No more manual follow-ups. Just consistent, predictable pipeline growth.',
    benefits: [
      'Qualify leads instantly with AI-powered conversations',
      'Automated follow-up sequences that feel human',
      'Smart scheduling that adapts to prospect behavior',
      '42% average demo-to-close rate',
      'ROI positive within 30 days on average',
    ],
    pricing: [
      {
        label: 'Starter',
        price: '$2,997/mo',
        features: [
          'Up to 500 conversations/month',
          'Basic lead qualification',
          'Email & SMS automation',
          'Calendar integration',
          'Weekly performance reports',
        ],
      },
      {
        label: 'Growth',
        price: '$5,997/mo',
        features: [
          'Up to 2,000 conversations/month',
          'Advanced lead scoring',
          'Multi-channel automation',
          'CRM integration',
          'Real-time analytics dashboard',
          'Dedicated success manager',
        ],
      },
      {
        label: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited conversations',
          'Custom AI training',
          'White-label solution',
          'API access',
          'Priority support',
          'Custom integrations',
        ],
      },
    ],
    vsl: {
      poster: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200',
      src: '/videos/sales-automation-vsl.mp4',
    },
    proofSlugs: ['tech-startup-3x', 'saas-company-42', 'consulting-firm-roi'],
  },
  {
    slug: 'ai-customer-support',
    name: 'AI Customer Support',
    short: 'Scale support without scaling headcount',
    description: 'Deploy an AI support agent that handles 80% of customer inquiries instantly, escalates complex issues intelligently, and continuously learns from every interaction. Your customers get 24/7 support, your team focuses on high-value problems.',
    benefits: [
      'Resolve 80%+ of inquiries without human intervention',
      '24/7 instant response across all channels',
      'Reduces support costs by 60% on average',
      'Improves CSAT scores by 35% on average',
      'Seamless handoff to human agents when needed',
    ],
    pricing: [
      {
        label: 'Essential',
        price: '$1,997/mo',
        features: [
          'Up to 1,000 tickets/month',
          'Email & chat support',
          'Knowledge base integration',
          'Basic analytics',
          'Standard response times',
        ],
      },
      {
        label: 'Professional',
        price: '$4,497/mo',
        features: [
          'Up to 5,000 tickets/month',
          'Omnichannel support',
          'Advanced NLP & sentiment analysis',
          'Custom workflows',
          'Priority routing',
          'Dedicated implementation',
        ],
      },
      {
        label: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited tickets',
          'Custom AI personality',
          'Multi-language support',
          'Advanced integrations',
          'SLA guarantees',
          'White-glove onboarding',
        ],
      },
    ],
    vsl: {
      poster: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1200',
      src: '/videos/customer-support-vsl.mp4',
    },
    proofSlugs: ['ecommerce-80-automated', 'fintech-csat-increase', 'healthcare-24-7'],
  },
  {
    slug: 'workflow-automation',
    name: 'Workflow Automation',
    short: 'Eliminate repetitive work, amplify your team',
    description: 'We analyze your operations, identify bottlenecks, and build custom AI workflows that eliminate hours of manual work. From data entry to document processing to cross-platform integrations, we automate what matters most.',
    benefits: [
      'Save 15-25 hours per employee per week',
      'Reduce operational errors by 95%',
      'Improve process speed by 10x or more',
      'ROI typically achieved within 60 days',
      'Scale operations without adding headcount',
    ],
    pricing: [
      {
        label: 'Foundation',
        price: '$3,497/mo',
        features: [
          '3 automated workflows',
          'Standard integrations',
          'Monthly optimization',
          'Email support',
          'Basic reporting',
        ],
      },
      {
        label: 'Business',
        price: '$7,997/mo',
        features: [
          '10 automated workflows',
          'Advanced integrations',
          'Bi-weekly optimization',
          'Priority support',
          'Custom dashboards',
          'Quarterly strategy sessions',
        ],
      },
      {
        label: 'Enterprise',
        price: 'Custom',
        features: [
          'Unlimited workflows',
          'Custom AI models',
          'Real-time optimization',
          'Dedicated automation team',
          'SLA guarantees',
          'Executive reporting',
        ],
      },
    ],
    vsl: {
      poster: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
      src: '/videos/workflow-automation-vsl.mp4',
    },
    proofSlugs: ['manufacturing-20hrs', 'real-estate-10x', 'legal-firm-95'],
  },
];
