"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AgentSidebarNavProps {
  sections: { id: string; label: string }[];
}

export function AgentSidebarNav({ sections }: AgentSidebarNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="bg-black/40 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 space-y-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "block text-left px-4 py-3 rounded-lg transition-all duration-300 whitespace-nowrap",
                activeSection === section.id
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                  : "text-gray-400 hover:text-purple-300 hover:bg-purple-500/10"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>

      <div className="lg:hidden sticky top-20 z-40 bg-black/95 backdrop-blur-md border-b border-purple-500/20 px-4 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "px-4 py-2 rounded-lg whitespace-nowrap text-sm transition-all duration-300",
                activeSection === section.id
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/40"
                  : "text-gray-400 hover:text-purple-300 hover:bg-purple-500/10"
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
