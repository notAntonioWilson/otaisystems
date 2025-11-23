'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface VideoCardProps {
  poster?: string;
  src: string;
  alt?: string;
  className?: string;
  isYouTube?: boolean;
  videoId?: string;
}

const activeVideos = new Map<string, HTMLVideoElement>();

export function VideoCard({ poster, src, alt = 'Video', className = '', videoId = '' }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && videoId) {
      activeVideos.set(videoId, videoRef.current);
      return () => {
        activeVideos.delete(videoId);
      };
    }
  }, [videoId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  const handlePlayClick = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;

      activeVideos.forEach((video, id) => {
        if (id !== videoId) {
          video.pause();
        }
      });

      setIsModalOpen(true);

      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.currentTime = currentTime;
          modalVideoRef.current.play();
        }
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 50);
    }
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current && videoRef.current) {
      const currentTime = modalVideoRef.current.currentTime;
      videoRef.current.currentTime = currentTime;
      modalVideoRef.current.pause();
      videoRef.current.play();
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-lg ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video w-full border-2 border-primary/30 rounded-lg overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted={false}
            playsInline
            preload="metadata"
          />

          <AnimatePresence>
            {isHovered && !isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer"
                onClick={handlePlayClick}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors shadow-lg"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors shadow-lg z-10"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] h-[90vh] max-w-[1400px]"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={modalVideoRef}
                src={src}
                className="w-full h-full object-contain rounded-lg"
                controls
                playsInline
                preload="metadata"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
