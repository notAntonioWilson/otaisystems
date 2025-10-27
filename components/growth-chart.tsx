'use client';

import { motion } from 'framer-motion';

const dataPoints = [
  { x: 40, y: 140, value: '23%' },
  { x: 85, y: 120, value: '41%' },
  { x: 130, y: 90, value: '68%' },
  { x: 175, y: 65, value: '89%' },
  { x: 220, y: 40, value: '127%' },
];

const metrics = [
  { label: 'Efficiency', icon: '⚡' },
  { label: 'Speed', icon: '🚀' },
  { label: 'Accuracy', icon: '🎯' },
];

export function GrowthChart() {
  const pathData = dataPoints
    .map((point, i) => (i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`))
    .join(' ');

  return (
    <div className="relative w-full h-64 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-black/90 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl pointer-events-none" />

        <div className="flex items-center justify-between mb-4">
          <div className="text-xs text-gray-400 font-mono">Performance Analytics</div>
          <div className="flex gap-3">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="text-[10px] text-gray-500 flex items-center gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <span>{metric.icon}</span>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <svg
            viewBox="0 0 260 160"
            className="w-full"
            style={{ height: '160px' }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9B5CF6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9B5CF6" stopOpacity="0" />
              </linearGradient>

              <filter id="nodeGlow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <path
                  d="M 20 0 L 0 0 0 20"
                  fill="none"
                  stroke="#222"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>

            <rect width="260" height="160" fill="url(#gridPattern)" opacity="0.5" />

            <motion.path
              d={`${pathData} L 220,160 L 40,160 Z`}
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            <motion.path
              d={pathData}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              filter="url(#nodeGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                ease: "easeInOut"
              }}
            />

            {dataPoints.map((point, i) => (
              <g key={i}>
                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="#9B5CF6"
                  filter="url(#nodeGlow)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.5 + (i * 0.4)
                  }}
                />

                <motion.circle
                  cx={point.x}
                  cy={point.y}
                  r="5"
                  fill="none"
                  stroke="#9B5CF6"
                  strokeWidth="2"
                  initial={{ scale: 1, opacity: 0 }}
                  animate={{
                    scale: [1, 2.5, 1],
                    opacity: [0.8, 0, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    delay: 0.5 + (i * 0.4),
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />

                <motion.text
                  x={point.x}
                  y={point.y - 15}
                  textAnchor="middle"
                  fill="#9B5CF6"
                  fontSize="10"
                  fontWeight="600"
                  fontFamily="monospace"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + (i * 0.4)
                  }}
                >
                  {point.value}
                </motion.text>
              </g>
            ))}
          </svg>
        </div>

        <div className="absolute bottom-3 left-6 text-[10px] text-gray-600 font-mono">
          Continuous optimization active
        </div>
      </div>
    </div>
  );
}
