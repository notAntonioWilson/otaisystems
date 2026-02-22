"use client";

import { Play } from 'lucide-react';

interface AgentVideoPlaceholderProps {
  label: string;
}

export function AgentVideoPlaceholder({ label }: AgentVideoPlaceholderProps) {
  return (
    <div className="relative w-full aspect-video rounded-xl bg-black/40 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center group hover:border-purple-500/60 transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl" />
      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-purple-500/20 backdrop-blur-md border border-purple-500/40 flex items-center justify-center group-hover:bg-purple-500/30 group-hover:scale-110 transition-all duration-300">
          <Play className="w-10 h-10 text-purple-400 fill-purple-400" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl">
        <p className="text-sm text-gray-300 text-center font-medium">{label}</p>
      </div>
    </div>
  );
}
