# Gradientflo Design Implementation

A modern, responsive landing page built with Next.js 15, TypeScript, and Tailwind CSS, based on the official Figma design.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🎯 Overview

This project is a pixel-perfect implementation of the Gradientflo landing page design, featuring:
- Agentic Learning Platform showcase
- Email capture form
- Modern dark theme UI
- Responsive design for all devices

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek black background with white accents
- 📱 **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ⚡ **Next.js 15** - Latest features with App Router
- 🔤 **Custom Typography** - Geist fonts with custom Minecraft font for unique branding
- 🎯 **Component-Based** - Clean, reusable components under 500 lines each
- 💅 **Tailwind CSS** - Utility-first CSS for rapid styling
- 🚀 **Optimized Images** - Next.js Image component for performance
- ♿ **Accessible** - ARIA labels and semantic HTML
- 📦 **Type-Safe** - Full TypeScript implementation

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.0 | React framework |
| React | 18.3.1 | UI library |
| TypeScript | 5.7.2 | Type safety |
| Tailwind CSS | 3.4.17 | Styling |
| Geist Font | - | Typography |
| clsx | 2.1.1 | Class management |
| tailwind-merge | 2.5.5 | Class merging |

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. **Clone or download the repository**

2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
GradientfloDesign/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with fonts & metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles & Tailwind
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section with CTA
│   ├── Logo.tsx           # Logo component
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx     # Button with variants
│   │   ├── NavLink.tsx    # Navigation links
│   │   ├── Input.tsx      # Form input
│   │   └── index.ts       # Barrel export
│   ├── icons/             # SVG icon components
│   │   ├── DiscordIcon.tsx
│   │   ├── ArrowRightIcon.tsx
│   │   └── index.ts
│   └── index.ts           # Components barrel export
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions (cn)
├── public/                # Static assets
│   └── assets/            # Images from Figma
├── COMPONENTS.md          # Component documentation
├── SETUP.md               # Detailed setup guide
└── README.md              # This file
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#111111` | Main background |
| Foreground | `#FFFFFF` | Text and borders |
| Primary | `#3552BF` | Platform preview border |

### Typography

- **Geist**: Primary sans-serif font for headings and body
- **Geist Mono**: Monospace font for navigation
- **Mac's Extended Minecraft**: Custom pixel font for "Infrastructure"

### Components

All components are documented in [COMPONENTS.md](./COMPONENTS.md) with:
- Props interface
- Usage examples
- Variants and options

## 📱 Responsive Design

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640px | Stacked layout, hidden nav links |
| Tablet | 640-1024px | Partial nav, scaled text |
| Desktop | > 1024px | Full layout, all features |

## 🏗️ Component Architecture

All components follow best practices:
- ✅ Under 500 lines each
- ✅ TypeScript interfaces for props
- ✅ Exported from index files
- ✅ Use `cn()` utility for conditional classes
- ✅ Client/server components properly marked

## 📚 Documentation

- [SETUP.md](./SETUP.md) - Detailed setup and configuration
- [COMPONENTS.md](./COMPONENTS.md) - Component API documentation

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Auto-deploys on push

### Manual Deployment

```bash
npm run build
npm run start
```

## 🔧 Configuration

Key configuration files:
- `tailwind.config.ts` - Tailwind theme & plugins
- `tsconfig.json` - TypeScript settings
- `next.config.ts` - Next.js configuration

## 🤝 Contributing

This is a design implementation project. To modify:
1. Keep components under 500 lines
2. Maintain TypeScript types
3. Follow existing patterns
4. Update documentation

## 📄 License

Created for Gradientflo based on official Figma designs.

## 🙏 Acknowledgments

- Design from Figma: Gradientflo Brand Assets
- Built with Next.js, React, and Tailwind CSS
- Fonts: Geist by Vercel

---

**Note**: This implementation closely follows the Figma design specifications while maintaining code quality, performance, and accessibility standards.

