# OTAI Systems - AI-Powered Business Automation

A production-ready marketing website designed to convert visitors before the first call. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Dark Theme Design**: Modern dark aesthetic with blue-violet accent color (#8A2BE2)
- **Smooth Animations**: Framer Motion for scroll reveals, hover effects, and micro-interactions
- **Video Sales Letters**: Integrated VSL components with modal playback
- **Service Showcase**: Three core services with detailed breakdowns
- **Social Proof**: Testimonials and success stories throughout
- **Transparent Pricing**: Clear pricing tiers with CTAs
- **Process Timeline**: Visual 3-step process explanation
- **Responsive Design**: Mobile-first approach with full accessibility
- **SEO Optimized**: Proper metadata and semantic HTML

## Site Structure

### Pages

- `/` - Landing page with hero, services, process, pricing, and booking
- `/proof` - Filterable testimonials and success stories
- `/proof/[slug]` - Individual testimonial detail pages
- `/services/[slug]/data` - In-depth service data pages
- `/terms` - Terms of Service
- `/privacy` - Privacy Policy

### Navigation

All anchors work via smooth scroll:
- Services → `#services`
- Process → `#process`
- Pricing → `#pricing`
- Contact/Book → `#book`
- Proof → `/proof` (separate page)

## Key Components

- `NavBar` - Sticky navigation with blur effect
- `Footer` - Three-column layout with social links
- `GlowButton` - Accent glow on hover
- `VideoCard` - VSL player with modal
- `TestimonialCard` - Compact proof cards
- `PricingCard` - Pricing tier display

## Content Structure

Content is managed through TypeScript files in `/content`:
- `services.ts` - Service definitions with pricing
- `proof.ts` - Client testimonials and case studies

## Theme

- Background: `#0A0A0B` / `#0E0E10`
- Text: `#E6E6EA`
- Accent: `#8A2BE2` (blue-violet)
- Glow effects on interactive elements
- Grid pattern background overlay

## Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
```

## Calendly Integration

To add Calendly booking, set the `CALENDLY_URL` environment variable to your Calendly embed URL. The placeholder is currently displayed in the booking section.

## Customization

1. Update content in `/content/services.ts` and `/content/proof.ts`
2. Replace video sources with actual VSL files
3. Configure Calendly embed URL
4. Update social media links in Footer component
5. Add real client logos to `/public` directory

## Performance

- Lighthouse score target: 90+ across all metrics
- Static generation for all pages
- Optimized images with Next/Image
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## Accessibility

- AA contrast ratios maintained
- Keyboard navigation support
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus indicators with accent color

---

Built with Next.js 13, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.
