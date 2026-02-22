'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
              <div className="w-7 h-7 relative">
                <Image
                  src="/images/logo.png"
                  alt="OTAI Systems Logo"
                  width={28}
                  height={28}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold text-primary">OTAI Systems</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/ai-agents"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                AI Agents
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Automations
              </Link>
              <Link
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Outreach & Lead Gen
              </Link>
              <Link
                href="/coming-soon"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Proof
              </Link>
              <motion.button
                onClick={() => scrollToSection('qualify')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors glow-accent-sm"
              >
                Work With Us
              </motion.button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-20 right-0 bottom-0 w-64 bg-card border-l border-border z-40 md:hidden overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-4">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Home
                </Link>
                <Link
                  href="/ai-agents"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  AI Agents
                </Link>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Automations
                </Link>
                <Link
                  href="#"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Outreach & Lead Gen
                </Link>
                <Link
                  href="/coming-soon"
                  onClick={handleLinkClick}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Proof
                </Link>
                <button
                  onClick={() => scrollToSection('qualify')}
                  className="mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-base text-center hover:bg-primary/90 transition-colors glow-accent-sm"
                >
                  Work With Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
