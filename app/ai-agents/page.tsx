"use client";

import { AgentSidebarNav } from '@/components/agent-sidebar-nav';
import { AgentCard } from '@/components/agent-card';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const sections = [
  { id: 'voice-agents', label: 'Voice Agents' },
  { id: 'ceo-agents', label: 'CEO Agents' },
  { id: 'website-agents', label: 'Website Agents' },
  { id: 'social-agents', label: 'Social Media Agents' }
];

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AgentSidebarNav sections={sections} />

      <div className="lg:ml-64">
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Your Business Needs Agents That Never Sleep, Never Quit, and Never Miss a Sale.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We deploy near-AGI level AI agents powered by Claude 4.6 and GPT-4o Codex — built specifically for your business — that sell, book, support, and operate around the clock without you.
            </p>
          </div>
        </section>

        <section id="voice-agents" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">Voice Agents</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                AI that picks up the phone, qualifies the lead, books the appointment, and hands off to your team — all without a single human involved until it matters.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-left"
                videoTag="If you run a gym, med spa, dental office, chiropractic clinic, or wellness center and you're missing calls and losing bookings — this was built for you."
                videoLabel="Video: AI Voice Agent live call — gym booking demo"
                headline="The Agent That Fills Your Calendar While You Train Your Clients"
                stats={[
                  "82% of callers who reach voicemail never call back. This agent answers every call, every time.",
                  "Gyms using AI booking agents report 3x more appointments booked in the first 30 days.",
                  "Zero missed calls. Zero lost revenue. 24/7 availability."
                ]}
                outcomes={[
                  "Answers inbound calls instantly and qualifies the lead in real time",
                  "Books directly into your calendar system without human involvement",
                  "Handles objections, pricing questions, and follow-up automatically"
                ]}
                bestFor={[
                  "Gyms & Fitness Studios",
                  "Med Spas & Wellness Centers",
                  "Dental & Orthodontic Offices",
                  "Chiropractic Clinics",
                  "IV Therapy & Alt Med Locations"
                ]}
                ctaText="If you are serious about never missing another booking, take action now."
                ctaButton="Book a Strategy Call"
              />

              <AgentCard
                layout="video-right"
                videoTag="If you run a law firm, financial advisory, insurance agency, real estate brokerage, or medical practice and compliance is non-negotiable — this is your agent."
                videoLabel="Video: Compliant AI Phone Agent — live handoff demonstration"
                headline="An AI Agent That Operates Within Your Compliance Requirements and Transfers to a Human the Moment It Matters"
                stats={[
                  "Law firms lose an estimated $50,000+ per year in missed initial consultations alone.",
                  "This agent handles intake, qualifies prospects against your criteria, and live-transfers hot leads directly to your team in real time.",
                  "Fully configurable compliance guardrails built in from day one."
                ]}
                outcomes={[
                  "Handles inbound intake calls with your exact scripting and compliance requirements",
                  "Qualifies callers against your criteria before any human time is spent",
                  "Detects escalation moments and transfers live to the right person instantly"
                ]}
                bestFor={[
                  "Law Firms",
                  "Financial Advisory Firms",
                  "Insurance Agencies",
                  "Real Estate Brokerages",
                  "Medical & Mental Health Practices"
                ]}
                ctaText="Stop losing high-value leads to voicemail. Make the move now."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section id="ceo-agents" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">CEO Agents</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                Not a chatbot. Not a template. A strategic AI partner that knows your business, thinks at the level of a world-class operator, and grows more valuable the longer you use it.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-left"
                videoTag="If you are an ambitious business owner, founder, or startup operator who needs a brilliant strategic mind available at any moment — this agent was built for you."
                videoLabel="Video: CEO Agent — live strategy session demonstration"
                headline="A Billionaire-Level Business Mind Inside Your Operations. Available 24/7. Knows Your Business Better Every Day."
                stats={[
                  "Founders who have access to high-level strategic advisory grow 2.3x faster than those operating alone.",
                  "This agent is trained on elite business strategy, studies your company data over time, and gives you the kind of insight that used to cost $50,000 a month to access.",
                  "It doesn't just answer questions. It tells you what questions you should be asking."
                ]}
                outcomes={[
                  "Deep strategic advisory on growth, operations, hiring, positioning, and next moves",
                  "Learns your business model, your numbers, and your goals — gets sharper with every conversation",
                  "Available the moment you need it — no scheduling, no retainer, no waiting"
                ]}
                bestFor={[
                  "Startups & Early-Stage Founders",
                  "E-Commerce Business Owners",
                  "Agency Owners & Consultants",
                  "Real Estate Investors & Developers",
                  "Service Business Operators Scaling Past $1M"
                ]}
                ctaText="If you are serious about making smarter decisions faster, let's build yours."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section id="website-agents" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">Website Agents</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                Your website is your hardest working salesperson — or it should be. These agents turn passive visitors into active conversations and active conversations into booked clients.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-right"
                videoTag="If you run a marketing agency, branding firm, creative studio, PR company, or consulting practice and your website isn't actively booking calls — this is what's missing."
                videoLabel="Video: Website Sales Agent — live agency booking demo"
                headline="The Agent That Turns Your Website From a Brochure Into a Booking Machine"
                stats={[
                  "96% of website visitors leave without taking action. This agent engages them before they go.",
                  "Agencies deploying conversational booking agents report 40-70% increases in qualified discovery calls booked.",
                  "Built with high-quality branded conversation design — it sounds like your agency, not a robot."
                ]}
                outcomes={[
                  "Engages visitors proactively based on behavior and time on page",
                  "Qualifies leads against your ideal client profile before booking the call",
                  "Books directly into your calendar and sends confirmation and reminder sequences automatically"
                ]}
                bestFor={[
                  "Marketing & Growth Agencies",
                  "Branding & Creative Studios",
                  "PR & Communications Firms",
                  "Business Consulting Practices",
                  "Web Design & Development Agencies"
                ]}
                ctaText="Your website should be closing for you right now. Let's fix that."
                ctaButton="Book a Strategy Call"
              />

              <AgentCard
                layout="video-left"
                videoTag="If you run a SaaS platform, software company, tech product, or any business with a complex system your customers need help navigating — this agent eliminates your support bottleneck."
                videoLabel="Video: Support Agent with Human Handoff — live platform demo"
                headline="An AI Support Agent That Knows Your Product Inside Out and Escalates to a Human the Second It Needs To"
                stats={[
                  "Businesses using AI support agents resolve 70% of tickets without any human involvement.",
                  "Average response time drops from hours to under 3 seconds.",
                  "Support costs cut by up to 60% while customer satisfaction scores increase."
                ]}
                outcomes={[
                  "Trained on your full product documentation, FAQs, and support history",
                  "Resolves the majority of tickets instantly — at any hour, on any volume",
                  "Detects frustration and complexity triggers and routes to a live human agent immediately"
                ]}
                bestFor={[
                  "SaaS & Software Platforms",
                  "Tech Products & Apps",
                  "Online Course & Membership Platforms",
                  "E-Commerce Brands with Complex Products",
                  "Managed Service Providers"
                ]}
                ctaText="Stop making your customers wait. Deploy this and never look back."
                ctaButton="Book a Strategy Call"
              />
            </div>
          </div>
        </section>

        <section id="social-agents" className="py-16 px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-purple-400">Social Media Agents</h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
                Your DMs are a pipeline. Your content is a sales tool. These agents work both — so you don't have to.
              </p>
            </div>

            <div className="space-y-8">
              <AgentCard
                layout="video-right"
                videoTag="If you are a health coach, fitness coach, life coach, or online coach and you are manually responding to every DM trying to convert followers into clients — this agent does it for you."
                videoLabel="Video: DM Sales Agent — live Instagram DM conversion demo"
                headline="An Agent That Lives in Your DMs, Responds Like You, and Converts Followers Into Paying Clients"
                stats={[
                  "The average online coach takes 4+ hours responding to DMs weekly — this agent handles it in zero.",
                  "Coaches using AI DM agents report 2-4x increases in consultation bookings from organic traffic.",
                  "It sends voice notes, images, links, and personalized responses — indistinguishable from you."
                ]}
                outcomes={[
                  "Responds instantly to every DM the moment someone reaches out",
                  "Qualifies interest, handles objections, and drives toward a booking or sale",
                  "Sends visuals, links, and resources mid-conversation to increase conversions"
                ]}
                bestFor={[
                  "Health & Fitness Coaches",
                  "Life & Mindset Coaches",
                  "Nutrition & Wellness Coaches",
                  "Online Course Creators",
                  "Personal Brand Businesses"
                ]}
                ctaText="Your followers are ready to buy. This agent closes them."
                ctaButton="Book a Strategy Call"
              />

              <AgentCard
                layout="video-left"
                videoTag="If you are a contractor, roofer, landscaper, home service operator, or trade business owner and you have no idea what to post or why nothing goes viral — this agent is your marketing department."
                videoLabel="Video: Marketing Intelligence Agent — live contractor content strategy demo"
                headline="A Master Marketing Strategist in Your Pocket — Available on Slack or Telegram — That Knows Your Industry and Tells You Exactly What to Create"
                stats={[
                  "Contractors who post consistent social content generate 3x more inbound leads than those who don't.",
                  "This agent analyzes what is trending in your niche, tells you what to create, writes your captions, and plans your content calendar.",
                  "Access it directly from Slack or Telegram — no new tools, no learning curve."
                ]}
                outcomes={[
                  "Analyzes viral content in your specific trade niche in real time",
                  "Tells you exactly what to film, what to write, and when to post it",
                  "Acts as a senior marketing strategist who understands your business, your audience, and your goals"
                ]}
                bestFor={[
                  "Roofing & Exterior Contractors",
                  "Landscaping & Hardscape Companies",
                  "General Contractors & Builders",
                  "HVAC, Plumbing & Electrical",
                  "Interior Design & Renovation Firms"
                ]}
                ctaText="Stop guessing what to post. Let the agent tell you."
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
              The Businesses Deploying AI Agents Right Now Are Building an Unfair Advantage.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Every day without one is a day your competition gets further ahead. Find out which agent fits your business in 60 seconds.
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
