'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Zap, Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/otaisystems/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/otai.systems?igsh=bDRiaDQxdzdtcDR0&utm_source=qr', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/1Bi6GWYdqe/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/antoniowilsonx?s=21', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/@antoniowilson_yt?si=I0VGC0371w6PBgJF', label: 'YouTube' },
  ];

  return (
    <footer className="relative border-t border-primary/10 bg-card/30 backdrop-blur-sm overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#32005C]/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12 mb-12">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-7 h-7 relative">
                <Image
                  src="/images/logo.png"
                  alt="OTAI Systems Logo"
                  width={28}
                  height={28}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold gradient-text">OTAI Systems</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering businesses with AI automation solutions. Stay connected and see what's
              next, follow us on Social Media.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 hover:glow-accent-sm transition-all duration-300 border border-primary/20"
                >
                  <Icon className="w-5 h-5 text-primary" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
              <button
                onClick={() => scrollToSection('services')}
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection('book')}
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4 text-left"
              >
                Contact
              </button>
              <Link
                href="/results"
                className="text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
              >
                Testimonial & Proof
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © OTAI Systems 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
