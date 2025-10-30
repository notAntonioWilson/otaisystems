'use client';

import { motion } from 'framer-motion';

interface VideoCardProps {
  poster: string;
  src: string;
  alt?: string;
  className?: string;
}

export function VideoCard({ poster, src, alt = 'Video', className = '' }: VideoCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      <div className="relative aspect-video w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border-2 border-primary/30">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">Coming Soon</h3>
          <p className="text-muted-foreground text-sm md:text-base">Video content will be available shortly</p>
        </div>
      </div>
    </motion.div>
  );
}
