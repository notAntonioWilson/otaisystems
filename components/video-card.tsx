'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import Image from 'next/image';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface VideoCardProps {
  poster: string;
  src: string;
  alt?: string;
  className?: string;
}

export function VideoCard({ poster, src, alt = 'Video', className = '' }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={poster}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center glow-accent-sm group-hover:glow-accent transition-all duration-300">
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-all duration-300" />
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-primary/30">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute -top-12 right-0 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative aspect-video w-full">
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={src}
              poster={poster}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
