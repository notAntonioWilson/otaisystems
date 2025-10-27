'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const dataPoints = [
  { x: 30, y: 110 },
  { x: 70, y: 95 },
  { x: 110, y: 70 },
  { x: 150, y: 50 },
  { x: 190, y: 30 },
  { x: 230, y: 20 },
];

const tabs = ['ROI', 'Time Earned Back', 'Efficiency', 'Accuracy'];

const miniMetrics = [
  { label: 'Efficiency Gain', value: '+127%', change: '+23%', trend: 'up' },
  { label: 'Time Saved/Day', value: '4.2 hrs', change: '+1.1 hrs', trend: 'up' },
  { label: 'Error Reduction', value: '94%', change: '+12%', trend: 'up' },
];

export function GrowthChart() {
  const [activeTab, setActiveTab] = useState(0);

  const pathData = dataPoints
    .map((point, i) => (i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`))
    .join(' ');

  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-white font-semibold tracking-wide">Performance Dashboard</div>
          <div className="flex gap-1">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-2 py-1 text-[9px] rounded-md border transition-all font-medium"
                animate={{
                  borderColor: activeTab === i ? '#9B5CF6' : '#333',
                  backgroundColor: activeTab === i ? 'rgba(155, 92, 246, 0.15)' : 'rgba(0, 0, 0, 0.3)',
                  color: activeTab === i ? '#9B5CF6' : '#666',
                }}
                whileHover={{
                  borderColor: '#9B5CF6',
                  boxShadow: '0 0 12px rgba(155, 92, 246, 0.3)',
                }}
                transition={{ duration: 0.2 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative bg-black/40 rounded-lg p-3 border border-white/5">
            <svg
              viewBox="0 0 260 130"
              className="w-full"
              style={{ height: '130px' }}
            >
              <defs>
                <linearGradient id="chartLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                </linearGradient>

                <linearGradient id="chartAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#9B5CF6" stopOpacity="0" />
                </linearGradient>

                <filter id="chartGlow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>

                <pattern id="dashboardGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1a1a1a" strokeWidth="0.5" />
                </pattern>
              </defs>

              <rect width="260" height="130" fill="url(#dashboardGrid)" opacity="0.6" />

              <motion.path
                d={`${pathData} L 230,130 L 30,130 Z`}
                fill="url(#chartAreaGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
              />

              <motion.path
                d={pathData}
                fill="none"
                stroke="url(#chartLineGradient)"
                strokeWidth="2.5"
                filter="url(#chartGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
              />

              {dataPoints.map((point, i) => (
                <g key={i}>
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="#9B5CF6"
                    filter="url(#chartGlow)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + (i * 0.2) }}
                  />
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill="none"
                    stroke="#9B5CF6"
                    strokeWidth="2"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.8, 0, 0.8]
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.3 + (i * 0.2),
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </g>
              ))}
            </svg>
          </div>

          <div className="flex flex-col gap-2">
            {miniMetrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="bg-black/40 rounded-lg px-3 py-2 border border-white/5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.15) }}
              >
                <div className="text-[9px] text-gray-500 mb-0.5">{metric.label}</div>
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-bold text-white">{metric.value}</span>
                  <motion.span
                    className="text-[9px] text-purple-400 font-medium"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {metric.change}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="absolute bottom-3 left-5 text-[9px] text-gray-600 font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Live optimization • Real-time data
        </motion.div>
      </div>
    </div>
  );
}
