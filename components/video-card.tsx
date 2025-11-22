'use client';

import { motion } from 'framer-motion';

interface VideoCardProps {
  poster: string;
  src: string;
  alt?: string;
  className?: string;
  isYouTube?: boolean;
}

export function VideoCard({ poster, src, alt = 'Video', className = '', isYouTube = false }: VideoCardProps) {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  if (isYouTube) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-lg ${className}`}
      >
        <div className="relative aspect-video w-full border-2 border-primary/30 rounded-lg overflow-hidden">
          <iframe
            src={getYouTubeEmbedUrl(src)}
            title={alt}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </motion.div>
    );
  }

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
