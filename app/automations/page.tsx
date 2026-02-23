'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { VideoCard } from '@/components/video-card';
import { Badge } from '@/components/ui/badge';
import { DripButton } from '@/components/drip-button';
import { LayoutDashboard, Briefcase, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function AutomationsPage() {
  const [activeSection, setActiveSection] = useState('b2b-b2c');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const sections = [
    { id: 'b2b-b2c', label: 'B2B & B2C', icon: LayoutDashboard },
    { id: 'b2b', label: 'B2B', icon: Briefcase },
    { id: 'b2c', label: 'B2C', icon: ShoppingCart },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-12 px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              If you are looking for an automation that gives you a real-time command center over every system, agent, and client in your business, hit{' '}
              <span style={{ color: '#a855f7' }}>B2B & B2C</span>. If you are looking for automations that eliminate the back-office work draining your time and margins as a business that serves other businesses, hit{' '}
              <span style={{ color: '#a855f7' }}>B2B</span>. If you are looking for automations built specifically for businesses that serve consumers directly, hit{' '}
              <span style={{ color: '#a855f7' }}>B2C</span>. This is only some of our most powerful automations, we couldn't show you all so find the automation closest to what your company needs, understand our ability and book a meeting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sidebar Navigation */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`p-3 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-primary'
                }`}
                title={section.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>

      {/* B2B & B2C Section - Dashboard */}
      <section id="b2b-b2c" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            The Dashboard is a Necessity if you are a Serious Business Owner. It Holds every Agent, Every Client, Every System, everything you want in One Command Center That Shows You Everything and Alerts You the Moment Something Needs Attention.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Dashboard Demo"
                videoId="dashboard-video"
                isYouTube={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Data That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Business owners lose an average of 6 hours per week chasing status updates across disconnected tools</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses operating without a centralized dashboard miss critical issues until they become expensive problems</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Companies with real-time operational visibility respond to problems 5x faster than those without</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Client retention increases significantly when clients have direct visibility into what their systems are doing</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['AI & Automation Agencies', 'Marketing & Growth Agencies', 'Managed Service Providers', 'SaaS & Tech Companies', 'Multi-Client Service Businesses'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you are ready to white label your business and make it a serious force in your industry set a meeting with our CEO:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* B2B Section - Document Processing */}
      <section id="b2b" className="py-14 px-6 lg:px-8 scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            If You Want Every Document Processed, Every Vendor Verified, Every Record Filed Automatically. No Human Touch Required. This is the Automation You Need.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses spend an average of 14+ hours per week on manual document processing and vendor management</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Human error in document handling costs businesses thousands annually in compliance issues and delays</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Automating document processing reduces administrative overhead by up to 80%</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using automated document systems report near-zero compliance filing errors</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Document Processing Demo"
                videoId="document-processing-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['General Contractors & Builders', 'Commercial Construction Firms', 'Specialty Trade Contractors', 'Real Estate Developers', 'Property Management Companies'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you are looking to completely stop touching documentation this automation will allow that, book a call with our CEO and begin the build:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* B2B Section - Customer Lifecycle */}
      <section className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            From First Contact to Long-Term Retention, Every Customer Touchpoint Handled Automatically So Your Team Focuses on What Humans Actually Need to Do.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Customer Lifecycle Demo"
                videoId="customer-lifecycle-video"
                isYouTube={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses spend up to 60% of operational time on repetitive customer communication that could be automated</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Consistent communication increases customer retention rates by up to 25%</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Automated onboarding sequences reduce early churn by up to 30% compared to manual processes</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses that follow up consistently generate 47% more revenue than those that don't</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Multi-Family Property Operators', 'Apartment Complex Management', 'Student Housing Providers', 'Short-Term Rental Operators', 'HOA & Residential Community Management'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you have a high-volume of low value tasks and don't want to spend 200k a year this is the automation you need. Book a call with our CEO and begin building:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* B2B Section - Payment Recovery */}
      <section className="py-14 px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            The Automation That Chases Your Money So You Never Have To, And Recovers Revenue You Didn't Even Know You Were Losing.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses lose an average of 13% of annual revenue to late payments, unpaid invoices, and failed collections</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>The average business writes off recoverable revenue simply because follow-up was inconsistent</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Automated payment recovery systems collect 30-40% more outstanding balances than manual follow-up</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Most clients recover the full cost of this system within the first 30 days of deployment</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Payment Recovery Demo"
                videoId="payment-recovery-video"
                isYouTube={false}
              />
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['Trim & Finish Carpenters', 'Specialty Trade Contractors', 'General Contractors', 'Landscaping & Hardscape Companies', 'Home Renovation & Remodeling Firms'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you are tired of expecting a payment and it keeps coming late this will stop that. Book a call with our CEO and begin the build:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* B2C Section - Inventory Management */}
      <section id="b2c" className="py-14 px-6 lg:px-8 bg-card/30 backdrop-blur-sm scroll-mt-20">
        <div className="container mx-auto max-w-7xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-white leading-[1.3]"
          >
            An AI System That Monitors Your Entire Inventory, Predicts What You Need Before You Run Out, and Automates Every Reorder Without You Looking at a Single Spreadsheet.
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VideoCard
                poster=""
                src="placeholder"
                alt="Inventory Management Demo"
                videoId="inventory-management-video"
                isYouTube={false}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Industry Stats That Matter</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Retail and e-commerce businesses lose an average of 4% of annual revenue to stockouts</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Overstock and dead inventory costs businesses an additional 3% of annual revenue on average</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Businesses using AI inventory systems reduce carrying costs by up to 30%</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-primary mt-1">+</span>
                  <span>Automated reordering eliminates the single biggest cause of lost sales in product-based businesses</span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mb-8">
            <h4 className="text-base font-semibold mb-3 text-gray-200">Top 5 Industries:</h4>
            <div className="flex flex-wrap gap-2">
              {['E-Commerce Brands', 'Retail Stores & Boutiques', 'Health & Beauty Product Companies', 'Supplement & Nutrition Brands', 'Wholesale & Distribution Businesses'].map((industry) => (
                <Badge key={industry} className="bg-primary/10 text-primary border-primary/30 px-4 py-2">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-base text-gray-400 mb-6">
              If you are looking to scale your business this system is required, book a call with our CEO and begin the build:
            </p>
            <Link href="/#book">
              <DripButton>Book a Meeting</DripButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
