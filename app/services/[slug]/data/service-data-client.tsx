'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { TestimonialCard } from '@/components/testimonial-card';
import { PricingCard } from '@/components/pricing-card';
import { Card } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, TrendingUp, Users, Zap, Shield, Clock, DollarSign } from 'lucide-react';
import Link from 'next/link';
import type { Service } from '@/content/services';
import type { Proof } from '@/content/proof';

interface ServiceDataClientProps {
  service: Service;
  serviceProofs: Proof[];
}

export default function ServiceDataClient({ service, serviceProofs }: ServiceDataClientProps) {
  const scrollToBook = () => {
    window.location.href = '/#book';
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Average ROI positive within 30 days of implementation',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated specialists with 10+ years in AI and automation',
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Go live in 2-4 weeks with zero disruption to operations',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II compliant with industry-leading data protection',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for all plans',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees, flexible plans that scale with your business',
    },
  ];

  const metrics = [
    { label: 'Average Time Savings', value: '15-25 hrs/week per employee' },
    { label: 'Error Reduction', value: '90-95%' },
    { label: 'ROI Timeline', value: '< 60 days' },
    { label: 'Client Satisfaction', value: '4.8/5 stars' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to services
          </Link>

          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
            {service.short}
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.name}</h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
            {service.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <VideoCard
              poster={service.vsl.poster}
              src={service.vsl.src}
              alt={service.name}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Key Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">What You Get</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 hover:glow-accent-sm transition-all">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/30">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-card/30 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/90 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              label="Starter"
              description="Perfect for any business size wanting a single AI automation."
              features={[
                'Basic AI agent or automation',
                'Standard analytics & reporting',
                'Up to 3 AI integrations',
                '12hr customer support with COO',
                '1 Developer'
              ]}
              popular={false}
            />
            <PricingCard
              label="Professional"
              description="Perfect for any business size wanting a multi-layer or complex AI system."
              features={[
                'Advance AI / automation',
                'Personalized dashboard with analytics & insights',
                'Up to 15 integrations',
                '24/7 customer support with CEO & COO',
                '2 Developers'
              ]}
              popular={true}
            />
            <PricingCard
              label="Enterprise"
              description="Perfect for enterprise organizations seeking AI ecosystems."
              features={[
                'Fully suite automation',
                'Enterprise-grade compliance',
                'Corprate level dashboard',
                'Unlimited Integrations',
                '24/7 VIP Support'
              ]}
              popular={false}
            />
          </div>
        </motion.div>

        {serviceProofs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceProofs.map((proof) => (
                <TestimonialCard
                  key={proof.slug}
                  slug={proof.slug}
                  client={proof.client}
                  logo={proof.logo}
                  quote={proof.quote}
                  metric={proof.metric}
                />
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card/30 backdrop-blur-sm border border-primary/30 rounded-lg p-12 text-center glow-accent-sm"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to get started with {service.name}?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
            Book a free strategy call. We'll analyze your specific needs and show you exactly how
            this solution can transform your business.
          </p>
          <GlowButton size="lg" onClick={scrollToBook}>
            Book a Call Now
          </GlowButton>
        </motion.div>
      </div>
    </div>
  );
}
