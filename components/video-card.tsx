'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Volume2, VolumeX, Maximize2 } from 'lucide-react';
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

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export function VideoCard({ poster, src, alt = 'Video', className = '', isYouTube = false, videoId = '' }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [ytPlayer, setYtPlayer] = useState<any>(null);
  const [apiReady, setApiReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const modalIframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeIdRef = useRef(`youtube-player-${Math.random().toString(36).substr(2, 9)}`);

  const youtubeId = extractYouTubeId(src);
  const isYouTubeVideo = isYouTube || youtubeId !== null;
  const embedId = youtubeId || src;

  useEffect(() => {
    if (videoRef.current && videoId && !isYouTubeVideo) {
      activeVideos.set(videoId, videoRef.current);
      return () => {
        activeVideos.delete(videoId);
      };
    }
  }, [videoId, isYouTubeVideo]);

  useEffect(() => {
    if (isYouTubeVideo) {
      setIsLoading(false);
      setHasError(false);

      if (!(window as any).YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

        (window as any).onYouTubeIframeAPIReady = () => {
          setApiReady(true);
        };
      } else if ((window as any).YT.Player) {
        setApiReady(true);
      }

      return;
    }

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
  }, [isYouTubeVideo]);

  useEffect(() => {
    if (isYouTubeVideo && apiReady && !ytPlayer) {
      const initPlayer = () => {
        try {
          const player = new (window as any).YT.Player(iframeIdRef.current, {
            events: {
              onReady: (event: any) => {
                setYtPlayer(event.target);
                event.target.mute();
              },
            },
          });
        } catch (error) {
          console.error('Error initializing YouTube player:', error);
        }
      };

      const timer = setTimeout(initPlayer, 1000);
      return () => clearTimeout(timer);
    }
  }, [isYouTubeVideo, apiReady, ytPlayer]);

  const handleVideoLoaded = () => {
    setIsLoading(false);
  };

  const handleVideoError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handlePlayClick = () => {
    if (isYouTubeVideo) {
      setIsModalOpen(true);
    } else if (videoRef.current) {
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
    if (!isYouTubeVideo && modalVideoRef.current && videoRef.current) {
      const currentTime = modalVideoRef.current.currentTime;
      videoRef.current.currentTime = currentTime;
      modalVideoRef.current.pause();
      videoRef.current.play();
    }
    setIsModalOpen(false);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isYouTubeVideo && ytPlayer && ytPlayer.unMute) {
      try {
        if (isMuted) {
          ytPlayer.unMute();
          ytPlayer.setVolume(100);
        } else {
          ytPlayer.mute();
        }
        setIsMuted(!isMuted);
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
    } else if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  if (hasError && !isYouTubeVideo) {
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
          {isYouTubeVideo ? (
            <>
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  id={iframeIdRef.current}
                  ref={iframeRef}
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&loop=1&playlist=${embedId}&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&enablejsapi=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ border: 'none' }}
                  allow="autoplay; encrypted-media; fullscreen"
                  title={alt}
                />
              </div>
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0) 85%, rgba(0,0,0,0.95) 100%)',
                  mixBlendMode: 'normal'
                }}
              />
            </>
          ) : (
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
          )}

          {isLoading && !isYouTubeVideo && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          )}

          <AnimatePresence>
            {isHovered && !isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer z-10"
                onClick={handlePlayClick}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors shadow-lg"
                >
                  {isYouTubeVideo ? (
                    <Maximize2 className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            onClick={toggleMute}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-purple-600/90 hover:bg-purple-700 flex items-center justify-center transition-colors z-30 cursor-pointer shadow-lg"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6 pt-28 pb-12"
            onClick={handleCloseModal}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={handleCloseModal}
              className="absolute top-28 right-8 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center transition-colors shadow-lg z-[110]"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[1200px]" style={{ aspectRatio: '16/9' }}
              onClick={(e) => e.stopPropagation()}
            >
              {isYouTubeVideo ? (
                <iframe
                  ref={modalIframeRef}
                  src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3`}
                  className="w-full h-full rounded-lg"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title={alt}
                />
              ) : (
                <video
                  ref={modalVideoRef}
                  src={src}
                  className="w-full h-full object-contain rounded-lg"
                  controls
                  playsInline
                  preload="metadata"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
