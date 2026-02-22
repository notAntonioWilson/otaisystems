"use client";

import { AgentSidebarNav } from '@/components/agent-sidebar-nav';
import { AgentCard } from '@/components/agent-card';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sections = [
  { id: 'b2b-b2c', label: 'B2B & B2C' },
  { id: 'b2b', label: 'B2B' },
  { id: 'b2c', label: 'B2C' }
];

export default function AutomationsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AgentSidebarNav sections={sections} />

      <div className="lg:ml-64">
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Stop Running Your Business. Let Your Business Run Itself.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We engineer custom automation systems powered by the most advanced AI available that eliminate manual work, protect your revenue, and compound your operational efficiency every single day — while you focus on what actually grows your business.
            </p>
          </div>
        </section>

        <section id="b2b-b2c" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">B2B & B2C</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                This automation works for every business. Whether you serve other businesses or direct consumers, this is the control center your operation has been missing.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-left"
                videoTag="If you run any business with multiple moving parts, active clients, and systems that need monitoring — and you are currently flying blind — this was built for you."
                videoLabel="[Video: Live AI Command Dashboard — real-time agent monitoring and business control center demo]"
                headline="Every Agent. Every Client. Every System. One Command Center That Shows You Everything and Alerts You the Moment Something Needs Attention."
                stats={[
                  "Business owners lose an average of 6 hours per week chasing status updates across disconnected tools.",
                  "This dashboard consolidates every automation, every active agent, every client account, and every performance metric into one real-time control center.",
                  "Color-coded warnings fire automatically when an agent goes down, a metric drops, or a client account needs action — before it becomes a problem."
                ]}
                outcomes={[
                  "Live view of every active AI agent — status, performance, and activity in real time",
                  "Automatic alerts when systems break, metrics drop, or client accounts trigger warning thresholds",
                  "Full client-facing dashboard so your clients can see exactly what their systems are doing"
                ]}
                bestFor={[
                  "AI & Automation Agencies",
                  "Marketing & Growth Agencies",
                  "Managed Service Providers",
                  "SaaS & Tech Companies",
                  "Multi-Client Service Businesses"
                ]}
                ctaText="If you are managing multiple systems and clients without a command center, you are operating blind. Fix it now."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section id="b2b" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">B2B</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                For the businesses that serve other businesses. These automations eliminate the back-office work that drains your time, kills your margins, and creates costly errors.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-right"
                videoTag="If you run a construction company, general contracting firm, or building operation and your documents, vendor insurance certificates, and client records are scattered across emails, folders, and sticky notes — this automation was built for you."
                videoLabel="[Video: Documentation Automation — live construction company processing demo]"
                headline="Every Document Processed, Every Vendor Verified, Every Record Filed — Automatically. No Human Touch Required."
                stats={[
                  "Construction companies spend an average of 14 hours per week on manual document processing and vendor management.",
                  "This system automatically ingests incoming documents, verifies vendor insurance against your requirements, routes files into the correct client and vendor folders, updates your client-facing dashboard, and syncs everything directly into QuickBooks Online.",
                  "One automation eliminates an entire administrative function."
                ]}
                outcomes={[
                  "Automatically processes incoming vendor documents and verifies insurance certificates against your requirements",
                  "Routes every file into the correct project folder, client record, and vendor profile without manual sorting",
                  "Syncs directly with QuickBooks Online and updates your client dashboard in real time"
                ]}
                bestFor={[
                  "General Contractors & Builders",
                  "Commercial Construction Firms",
                  "Specialty Trade Contractors",
                  "Real Estate Developers",
                  "Property Management Companies"
                ]}
                ctaText="Your admin work should not require a human. Let's automate it entirely."
                ctaButton="Book a Strategy Call"
              />

              <AgentCard
                layout="video-left"
                videoTag="If you manage a multi-family property, apartment complex, or residential community and your team is manually onboarding residents, handling requests, and trying to stay in touch with hundreds of tenants — this system replaces all of it."
                videoLabel="[Video: Customer Lifecycle Automation — live multi-family property management demo]"
                headline="From Move-In to Renewal — Every Resident Touchpoint Handled Automatically So Your Team Focuses on What Humans Actually Need to Do."
                stats={[
                  "Property management teams spend up to 60% of their time on repetitive resident communication and manual process execution.",
                  "This automation handles the full resident lifecycle — onboarding, welcome sequences, maintenance request routing, lease renewal outreach, satisfaction check-ins, and escalation triggers — without a single manual step.",
                  "Resident satisfaction scores increase when communication is consistent. This system makes consistency automatic."
                ]}
                outcomes={[
                  "Fully automated resident onboarding from signed lease to move-in day with zero manual steps",
                  "Handles maintenance requests, routes to the right team, and keeps the resident updated throughout",
                  "Triggers renewal outreach, satisfaction surveys, and escalation sequences automatically based on lease timeline"
                ]}
                bestFor={[
                  "Multi-Family Property Operators",
                  "Apartment Complex Management",
                  "Student Housing Providers",
                  "Short-Term Rental Operators",
                  "HOA & Residential Community Management"
                ]}
                ctaText="Stop managing people manually when automation can do it better. Let's build your system."
                ctaButton="Book a Strategy Call"
              />

              <AgentCard
                layout="video-right"
                videoTag="If you are a trim carpenter, finish contractor, or specialty trade operator and you are losing revenue to unpaid invoices, failed payments, and clients who go quiet — this automation was built specifically for you."
                videoLabel="[Video: Revenue Recovery Engine — live contractor invoicing and payment recovery demo]"
                headline="The Automation That Chases Your Money So You Never Have To — And Recovers Revenue You Didn't Even Know You Were Losing."
                stats={[
                  "Contractors lose an average of 13% of annual revenue to late payments, unpaid invoices, and failed collections.",
                  "This system automatically tracks every open invoice, monitors payment status, detects failed transactions and expiring cards, sends smart escalating reminders based on client behavior, updates your accounting system in real time, and flags high-risk accounts before revenue slips through the cracks.",
                  "Most clients recover the cost of this system within the first 30 days."
                ]}
                outcomes={[
                  "Tracks every open invoice and outstanding balance in real time with automatic status updates",
                  "Sends behavior-based escalating reminders — gentle nudges first, firm follow-up second, escalation third",
                  "Flags high-risk accounts before they become write-offs and syncs every update directly to your accounting system"
                ]}
                bestFor={[
                  "Trim & Finish Carpenters",
                  "Specialty Trade Contractors",
                  "General Contractors",
                  "Landscaping & Hardscape Companies",
                  "Home Renovation & Remodeling Firms"
                ]}
                ctaText="You earned that money. This system makes sure you collect it."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section id="b2c" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">B2C</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                For the businesses that serve consumers directly. This automation turns your inventory and supply chain from a constant headache into a system that runs itself.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-left"
                videoTag="If you run an e-commerce brand or retail business and you are manually tracking stock levels, reordering products, and constantly dealing with overstock or stockouts — this automation ends that problem permanently."
                videoLabel="[Video: Inventory Supply Intelligence — live e-commerce and retail automation demo]"
                headline="An AI System That Monitors Your Entire Inventory, Predicts What You Need Before You Run Out, and Automates Every Reorder Without You Looking at a Single Spreadsheet."
                stats={[
                  "Retail businesses lose an average of 4% of annual revenue to stockouts and another 3% to overstock and dead inventory.",
                  "This system monitors your inventory levels in real time, analyzes sales velocity and seasonal trends, triggers purchase orders automatically when thresholds are hit, coordinates with your suppliers, and updates your dashboard with full visibility at every step.",
                  "Businesses using AI inventory systems reduce carrying costs by up to 30% while increasing product availability."
                ]}
                outcomes={[
                  "Real-time inventory monitoring with automatic low-stock and overstock alerts before they become problems",
                  "Predictive reordering based on sales velocity, lead times, and seasonal demand patterns",
                  "Automated purchase order creation and supplier coordination with full dashboard visibility end to end"
                ]}
                bestFor={[
                  "E-Commerce Brands",
                  "Retail Stores & Boutiques",
                  "Health & Beauty Product Companies",
                  "Supplement & Nutrition Brands",
                  "Wholesale & Distribution Businesses"
                ]}
                ctaText="Your inventory should manage itself. Let's build the system that makes that happen."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Manual Operations Are a Choice. A Bad One.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Every hour your team spends on work that an automation could handle is an hour your business is falling behind. The businesses building these systems now are the ones that will be untouchable in 3 years.
            </p>
            <Link
              href="/coming-soon"
              className="inline-flex items-center gap-2 px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
            >
              See If You Qualify
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
