'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Target, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';
import { VideoCard } from '@/components/video-card';
import { GlowButton } from '@/components/glow-button';
import { DripButton } from '@/components/drip-button';
import { TestimonialCard } from '@/components/testimonial-card';
import { PricingCard } from '@/components/pricing-card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { services } from '@/content/services';
import { proofs } from '@/content/proof';
import Link from 'next/link';
import { InlineWidget } from 'react-calendly';

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const heroMetrics: any[] = [];

  const processSteps = [
    {
      step: 'One',
      title: 'Workflow Analysis',
      description: 'We consult your systems, uncover inefficiencies, and pinpoint high-ROI opportunities for AI automation.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 'Two',
      title: 'Create AI System',
      description: 'We architect and train your custom AI solutions to optimize your workflows and drive measurable growth.',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 'Three',
      title: 'Deploy Power',
      description: 'We embed the automation into your company, integrate or fully replace your systems, forcing advancement within your organization.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      step: 'Four',
      title: 'Evolve Relentlessly',
      description: 'We monitor, refine, and evolve your automations, analyzing performance data to ensure long-term efficiency and compound growth.',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const faqs = [
    {
      question: 'How long does implementation take?',
      answer:
        'Most implementations are complete within 2-4 weeks. We handle all technical setup, integrations, and team training to ensure a smooth launch with minimal disruption to your operations.',
    },
    {
      question: 'What if the AI does not work for my business?',
      answer:
        'We offer a 30-day money-back guarantee. If you are not satisfied with the results, we will refund your investment. Additionally, you can opt-out at any time with 30 days notice.',
    },
    {
      question: 'Do I need technical expertise to use your solutions?',
      answer:
        'Not at all. Our solutions are designed to be user-friendly with intuitive interfaces. We provide comprehensive training and ongoing support to ensure your team feels confident using the system.',
    },
    {
      question: 'How do you handle data security and privacy?',
      answer:
        'Security is our top priority. All data is encrypted in transit and at rest. We are SOC 2 Type II compliant and follow industry best practices for data protection. We can also sign BAAs for healthcare clients and custom DPAs.',
    },
    {
      question: 'Can the AI integrate with our existing tools?',
      answer:
        'Yes! We integrate with 100+ popular business tools including CRMs (Salesforce, HubSpot), support platforms (Zendesk, Intercom), and workflow tools (Slack, Microsoft Teams). Custom integrations are available for Enterprise plans.',
    },
    {
      question: 'What kind of ongoing support do you provide?',
      answer:
        'All plans include email support and access to our knowledge base. Growth and Enterprise plans include dedicated success managers, priority support, and regular optimization sessions to maximize your ROI.',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/30">
                Leverage the Power of AI
              </Badge>
              <h1 className="font-bold mb-6 leading-tight">
                <div className="text-4xl md:text-5xl lg:text-6xl mb-2 text-primary">Custom AI Solutions</div>
                <div className="text-3xl md:text-4xl lg:text-5xl text-white">For Ambitious Businesses</div>
              </h1>
              <p className="text-xl text-white mb-8 leading-relaxed">
                Reality check: AI is no longer the future of business it's a necessity now! If you don't adapt you will fall behind.
              </p>

              <DripButton onClick={() => scrollToSection('book')}>
                Book a Consult
              </DripButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VideoCard
                poster="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
                src="/videos/hero-vsl.mp4"
                alt="OTAI Systems Introduction"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-primary leading-tight">
                  What we do:
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                  Custom AI Solutions
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Unlike other AI agencies, consultants, or software companies, we understand one simple truth... no two businesses are the same.
                  </p>
                  <p>
                    Commonly, you're given a tool or a template that helps for a month, then needs an upgrade.
                  </p>
                  <p>
                    At OTAI, we analyze your business, identify your goals, then build custom AI automations that not only drive growth and efficiency but continue to evolve as your company grows.
                  </p>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <VideoCard
                  poster={services[0].vsl.poster}
                  src={services[0].vsl.src}
                  alt={services[0].name}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
          >
            <Link href="/services/ai-customer-support/data">
              <button className="px-8 py-4 bg-card border border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-all hover:border-primary/50 text-base whitespace-nowrap min-w-[200px]">
                In-Depth Data
              </button>
            </Link>
            <button
              onClick={() => scrollToSection('book')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all text-base whitespace-nowrap min-w-[200px] glow-accent-sm"
            >
              Book a Consult
            </button>
            <Link href="/proof">
              <button className="px-8 py-4 bg-card border border-primary/30 rounded-lg font-semibold hover:bg-primary/10 transition-all hover:border-primary/50 text-base whitespace-nowrap min-w-[200px]">
                Testimonials & Proof
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Our Intelligent, Impact-Driven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We consult, engineer, and optimize AI solutions that integrate seamlessly, built to perform, adapt, and scale without limits.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-8 hover:border-primary/40 transition-all hover:glow-accent-sm"
              >
                <div className="mb-6">
                  <div className="text-sm font-semibold text-primary mb-3">
                    Step {index + 1}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{step.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-primary/10">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[220px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your business. Scale as you grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {services[0].pricing.map((tier, index) => (
              <PricingCard
                key={index}
                label={tier.label}
                price={tier.price}
                features={tier.features}
                popular={index === 1}
                onBookCall={() => scrollToSection('book')}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-primary">
              Frequently Asked Questions
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card/50 backdrop-blur-sm"
                >
                  <AccordionTrigger className="text-left hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      <section id="book" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                Ready to transform your business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Book a free strategy call. We'll analyze your workflow, identify
                opportunities, and show you exactly how AI can scale your operations.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">30-Day Money-Back Guarantee</div>
                    <div className="text-sm text-muted-foreground">
                      Not satisfied? Get a full refund, no questions asked.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">2-4 Week Turnaround</div>
                    <div className="text-sm text-muted-foreground">
                      From kickoff to go-live in under a month.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold mb-1">What Happens on the Call</div>
                    <div className="text-sm text-muted-foreground">
                      45-minute discovery session. We'll map your process, identify quick wins,
                      and design a custom solution.
                    </div>
                  </div>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-primary/30 rounded-lg p-8 glow-accent-sm">
                <h3 className="text-2xl font-bold mb-4">Schedule Your Call</h3>
                <p className="text-muted-foreground mb-6">
                  Choose a time that works for you. All times shown in your local timezone.
                </p>
                <div className="rounded-lg overflow-hidden">
                  <InlineWidget
                    url="https://calendly.com/otai_systems/consultation-with-owner-of-otai-systems"
                    styles={{
                      height: '700px',
                      minWidth: '100%'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
