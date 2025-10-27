'use client';

import { motion } from 'framer-motion';

export function RadarSweep() {
  return (
    <div className="relative w-full h-64 flex items-center justify-center">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
        style={{ maxWidth: '300px', maxHeight: '300px' }}
      >
        <defs>
          <radialGradient id="sweepGradient" cx="50%" cy="50%">
            <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9B5CF6" stopOpacity="0" />
          </radialGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="150"
          cy="150"
          r="120"
          fill="none"
          stroke="#444"
          strokeWidth="1"
          opacity="0.5"
        />

        <circle
          cx="150"
          cy="150"
          r="90"
          fill="none"
          stroke="#555"
          strokeWidth="1"
          opacity="0.4"
        />

        <circle
          cx="150"
          cy="150"
          r="60"
          fill="none"
          stroke="#666"
          strokeWidth="1"
          opacity="0.3"
        />

        <circle
          cx="150"
          cy="150"
          r="30"
          fill="none"
          stroke="#777"
          strokeWidth="1"
          opacity="0.2"
        />

        <motion.g
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ transformOrigin: '150px 150px' }}
        >
          <line
            x1="150"
            y1="150"
            x2="150"
            y2="30"
            stroke="#9B5CF6"
            strokeWidth="2"
            filter="url(#glow)"
            opacity="0.9"
          />

          <path
            d="M 150 150 L 150 30 A 120 120 0 0 1 210 67 Z"
            fill="url(#sweepGradient)"
            opacity="0.3"
          />
        </motion.g>

        <circle
          cx="150"
          cy="150"
          r="4"
          fill="#9B5CF6"
          filter="url(#glow)"
        />
      </svg>
    </div>
  );
}
