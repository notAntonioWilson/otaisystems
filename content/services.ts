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
    slug: 'automated-lead-generation',
    name: 'Automated Lead Generation',
    short: 'Turn every lead into a qualified prospect',
    description: 'Our AI-powered lead generation system qualifies, nurtures, and books meetings with your ideal customers 24/7. No more cold calling. No more manual follow-ups. Just consistent, predictable pipeline growth.',
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
    slug: 'backend-optimization',
    name: 'Backend Optimization',
    short: 'Scale operations without scaling headcount',
    description: 'Deploy AI-powered backend optimization that handles complex processes automatically, streamlines operations, and continuously improves efficiency. Your business scales seamlessly while your team focuses on strategic growth.',
    benefits: [
      'Optimize 80%+ of backend processes automatically',
      '24/7 system monitoring and adjustment',
      'Reduces operational costs by 60% on average',
      'Improves system efficiency by 35% on average',
      'Seamless integration with existing infrastructure',
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
    slug: 'ai-marketing',
    name: 'AI Marketing',
    short: 'Amplify your reach, maximize ROI',
    description: 'We analyze your market, identify opportunities, and deploy AI-powered marketing strategies that drive results. From content creation to campaign optimization to audience targeting, we automate what matters most for growth.',
    benefits: [
      'Generate high-converting content in minutes',
      'Reduce marketing costs by 60% on average',
      'Improve campaign performance by 10x or more',
      'ROI typically achieved within 60 days',
      'Scale marketing without adding headcount',
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
