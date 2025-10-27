'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const codeLines = [
  { text: 'if (data.threshold > max):', color: '#9B5CF6' },
  { text: '    workflow.trigger()', color: '#ddd' },
  { text: '    return status.active', color: '#ddd' },
  { text: 'else:', color: '#9B5CF6' },
  { text: '    return null', color: '#ddd' },
  { text: 'def process_input(self):', color: '#60a5fa' },
  { text: '    return f"{self.data}"', color: '#ddd' },
];

export function CodeEditorAnimation() {
  const [visibleLines, setVisibleLines] = useState<number[]>([0, 1, 2]);
  const [cursorLine, setCursorLine] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        const startIndex = (prev[0] + 1) % codeLines.length;
        return [
          startIndex,
          (startIndex + 1) % codeLines.length,
          (startIndex + 2) % codeLines.length,
          (startIndex + 3) % codeLines.length,
          (startIndex + 4) % codeLines.length,
        ].slice(0, 5);
      });
      setCursorLine((prev) => (prev + 1) % 5);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="text-xs text-gray-500 ml-2">workflow.py</div>
        </div>

        <div className="p-4 font-mono text-sm space-y-2 h-48 relative">
          <AnimatePresence mode="wait">
            {visibleLines.map((lineIndex, displayIndex) => (
              <motion.div
                key={`${lineIndex}-${displayIndex}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="flex items-center"
              >
                <span className="text-gray-600 mr-4 select-none w-6 text-right">
                  {displayIndex + 1}
                </span>
                <span style={{ color: codeLines[lineIndex].color }}>
                  {codeLines[lineIndex].text}
                </span>
                {displayIndex === cursorLine && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="ml-1 inline-block w-2 h-4 bg-white"
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
