export type Proof = {
  slug: string;
  serviceSlug: string;
  client: string;
  logo?: string;
  headline: string;
  quote: string;
  metric?: string;
  body: string;
  media?: { poster?: string; src?: string };
};

export const proofs: Proof[] = [
  {
    slug: 'tech-startup-3x',
    serviceSlug: 'automated-lead-generation',
    client: 'TechFlow Solutions',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: '3x Pipeline Growth in 90 Days',
    quote: 'We went from 15 qualified meetings per month to 47. The AI handles everything our SDRs used to do, but better and 24/7.',
    metric: '3x Pipeline Growth',
    body: 'TechFlow Solutions was struggling with inconsistent lead qualification and limited SDR capacity. After implementing our AI Sales Automation, they saw immediate improvements. The AI qualified 2,300+ leads in the first 90 days, booked 47 qualified meetings per month (up from 15), and achieved a 38% demo-to-close rate. The system paid for itself in the first 28 days.',
    media: {
      poster: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      src: '/videos/techflow-testimonial.mp4',
    },
  },
  {
    slug: 'saas-company-42',
    serviceSlug: 'automated-lead-generation',
    client: 'CloudMetrics',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: '42% Demo-to-Close Rate',
    quote: 'The quality of leads coming through is incredible. Our sales team now spends time closing deals, not chasing unqualified prospects.',
    metric: '42% Close Rate',
    body: 'CloudMetrics needed better lead quality and more efficient sales processes. Our AI Sales Automation system transformed their pipeline. Within 60 days, they achieved a 42% demo-to-close rate (up from 18%), reduced time-to-meeting by 73%, and increased ACV by 26% due to better-qualified prospects. Their sales team went from 60% admin work to 90% selling time.',
    media: {
      poster: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  },
  {
    slug: 'consulting-firm-roi',
    serviceSlug: 'automated-lead-generation',
    client: 'Apex Advisory',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: 'ROI Positive in 22 Days',
    quote: 'I was skeptical about AI handling our high-ticket sales process. The results proved me wrong. Best investment we made this year.',
    metric: 'ROI in 22 Days',
    body: 'Apex Advisory, a boutique consulting firm, needed to scale their $50K+ engagements without hiring more partners. Our AI Sales Automation qualified enterprise leads, nurtured relationships, and booked discovery calls. Results: 18 qualified meetings in the first month (vs. 5 previously), $420K in closed revenue within 90 days, and 89% time savings on lead qualification.',
  },
  {
    slug: 'ecommerce-80-automated',
    serviceSlug: 'backend-optimization',
    client: 'StyleHub Commerce',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: '82% of Support Tickets Automated',
    quote: 'Our support costs dropped 61% while our customer satisfaction scores went up. The AI understands context better than some of our human agents did.',
    metric: '82% Automated',
    body: 'StyleHub Commerce was drowning in support tickets as they scaled. With 12,000+ monthly inquiries, they needed a solution that could scale without ballooning costs. Our AI Customer Support system now handles 82% of all tickets autonomously, responds in under 30 seconds on average, and improved CSAT from 3.2 to 4.6 stars. Support costs decreased by 61% while handling 40% more volume.',
    media: {
      poster: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=1200',
      src: '/videos/stylehub-testimonial.mp4',
    },
  },
  {
    slug: 'fintech-csat-increase',
    serviceSlug: 'backend-optimization',
    client: 'PayFlow Financial',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: 'CSAT Increased from 3.1 to 4.7 Stars',
    quote: 'Customers love the instant responses. Our AI handles complex financial inquiries with impressive accuracy, and compliance is never an issue.',
    metric: 'CSAT +51%',
    body: 'PayFlow Financial needed compliant, accurate support for sensitive financial inquiries. Our AI Customer Support system was trained on their knowledge base, compliance requirements, and historical tickets. Results: CSAT increased from 3.1 to 4.7 stars, average response time dropped from 4 hours to 38 seconds, escalation rate under 18%, and zero compliance violations in 6 months.',
  },
  {
    slug: 'healthcare-24-7',
    serviceSlug: 'backend-optimization',
    client: 'MedConnect Portal',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: 'True 24/7 Support Without Night Shift',
    quote: 'Patients get answers at 2 AM without us staffing overnight. The AI handles HIPAA-compliant inquiries flawlessly.',
    metric: '24/7 Coverage',
    body: 'MedConnect Portal wanted to offer 24/7 support without the cost of round-the-clock staffing. Our HIPAA-compliant AI Customer Support provides instant responses to patient inquiries, appointment scheduling, and basic medical questions. Results: 24/7 availability with zero additional labor costs, 76% of after-hours inquiries resolved without human intervention, patient satisfaction up 44%.',
  },
  {
    slug: 'manufacturing-20hrs',
    serviceSlug: 'ai-marketing',
    client: 'Precision Parts Co',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: '20 Hours Saved Per Employee Per Week',
    quote: 'Our team went from drowning in paperwork to focusing on production. We eliminated 80+ hours of manual data entry every week.',
    metric: '20 hrs/week saved',
    body: 'Precision Parts Co was losing productivity to manual order processing, inventory tracking, and reporting. We built custom workflow automations that eliminated repetitive tasks. Results: 20 hours saved per employee per week, order processing time reduced from 45 minutes to 3 minutes, inventory accuracy improved from 89% to 99.7%, and operational errors down 94%.',
    media: {
      poster: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  },
  {
    slug: 'real-estate-10x',
    serviceSlug: 'ai-marketing',
    client: 'Premier Realty Group',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: 'Document Processing 10x Faster',
    quote: 'What used to take our team 6 hours now happens in 35 minutes. We close deals faster and our agents are happier.',
    metric: '10x Speed',
    body: 'Premier Realty Group struggled with slow document processing, contract generation, and compliance checks. Our workflow automation system extracts data from documents, auto-fills contracts, and runs compliance checks. Results: document processing 10x faster, contract generation reduced from 4 hours to 22 minutes, 98% fewer errors, and agents can handle 3x more transactions.',
  },
  {
    slug: 'legal-firm-95',
    serviceSlug: 'ai-marketing',
    client: 'Morrison & Associates Law',
    logo: 'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=200',
    headline: '95% Reduction in Document Errors',
    quote: 'Our paralegals focus on substantive legal work now. The AI handles document review, citation checks, and filing prep flawlessly.',
    metric: '95% Error Reduction',
    body: 'Morrison & Associates spent countless hours on document review, citation checking, and filing preparation. Our workflow automation extracts relevant case law, validates citations, and prepares filings. Results: 95% reduction in document errors, 18 hours saved per case on average, faster filing turnarounds, and happier clients. The firm now handles 60% more cases with the same team.',
  },
];
