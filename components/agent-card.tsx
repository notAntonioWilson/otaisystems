"use client";

import { AgentVideoPlaceholder } from './agent-video-placeholder';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AgentCardProps {
  videoLabel: string;
  videoTag: string;
  headline: string;
  stats: string[];
  outcomes: string[];
  bestFor: string[];
  ctaText: string;
  ctaButton: string;
  layout: 'video-left' | 'video-right';
}

export function AgentCard({
  videoLabel,
  videoTag,
  headline,
  stats,
  outcomes,
  bestFor,
  ctaText,
  ctaButton,
  layout
}: AgentCardProps) {
  const videoSection = (
    <div className="w-full lg:w-1/2 space-y-4">
      <p className="text-purple-400 font-bold text-lg leading-relaxed">
        {videoTag}
      </p>
      <AgentVideoPlaceholder label={videoLabel} />
    </div>
  );

  const contentSection = (
    <div className="w-full lg:w-1/2 space-y-8">
      <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
        {headline}
      </h3>

      <div className="space-y-6">
        {stats.map((stat, index) => (
          <p key={index} className="text-lg text-gray-300 leading-relaxed font-medium">
            {stat}
          </p>
        ))}
      </div>

      <div className="space-y-4">
        {outcomes.map((outcome, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
            <p className="text-gray-300 leading-relaxed">{outcome}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
          Best For
        </p>
        <div className="flex flex-wrap gap-2">
          {bestFor.map((industry, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm whitespace-nowrap"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <p className="text-white font-semibold text-lg">
          {ctaText}
        </p>
        <Link
          href="/schedule/professional"
          className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
        >
          {ctaButton}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8 lg:p-12">
      <div className={`flex flex-col ${layout === 'video-left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
        {layout === 'video-left' ? (
          <>
            {videoSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {videoSection}
          </>
        )}
      </div>
    </div>
  );
}
