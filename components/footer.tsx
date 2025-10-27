'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
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
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 relative">
                <Image
                  src="/images/logo.png"
                  alt="OTAI Systems Logo"
                  width={48}
                  height={48}
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-2xl font-black gradient-text">OTAI SYSTEMS</span>
            </Link>
            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
              Empowering businesses with cutting-edge AI automation solutions. Stay connected and see what's next.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  className="w-11 h-11 rounded-xl glass-card flex items-center justify-center hover:neon-border transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-purple-400" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase-wide mb-8 text-white tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Process
                </button>
              </li>
              <li>
                <Link
                  href="/proof"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Testimonial & Proof
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('book')}
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase-wide mb-8 text-white tracking-widest">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-purple-500/20">
          <p className="text-sm text-gray-500 text-center font-medium">
            © OTAI Systems 2025. All Rights Reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
    </footer>
  );
}
