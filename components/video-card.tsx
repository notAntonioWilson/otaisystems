'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX } from 'lucide-react';
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
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && video.paused) {
            video.play().catch(() => {
              setHasError(false);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
  };

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
          modalVideoRef.current.muted = false;
          modalVideoRef.current.play();
        }
        if (videoRef.current) {
          videoRef.current.pause();
        }
      }, 50);
    }
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalVideoRef.current && videoRef.current) {
      const currentTime = modalVideoRef.current.currentTime;
      videoRef.current.currentTime = currentTime;
      modalVideoRef.current.pause();
      videoRef.current.play();
    }
    setIsModalOpen(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (hasError) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative overflow-hidden rounded-lg ${className}`}
      >
        <div className="relative aspect-video w-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border-2 border-primary/30 rounded-lg">
          <div className="text-center p-6">
            <h3 className="text-2xl font-bold text-primary mb-2">Video Coming Soon</h3>
            <p className="text-muted-foreground text-sm">
              Add your video files to /public/videos/
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <motion.div
        ref={containerRef}
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
            muted
            playsInline
            preload="metadata"
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
          />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}

          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors z-10"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>

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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm pt-20"
            onClick={handleCloseModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="absolute top-24 right-6 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors shadow-lg z-[110]"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[85vw] h-[75vh] max-w-[1200px]"
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
