# Setup Guide

Complete guide to set up and run the Gradientflo landing page.

## Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

## Installation

1. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Create an optimized production build
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
GradientfloDesign/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and Tailwind imports
├── components/            # React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── Logo.tsx           # Logo component
│   ├── ui/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── NavLink.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   ├── icons/             # SVG icon components
│   │   ├── DiscordIcon.tsx
│   │   ├── ArrowRightIcon.tsx
│   │   └── index.ts
│   └── index.ts           # Components barrel export
├── lib/                   # Utility functions
│   └── utils.ts           # Helper utilities (cn function)
├── public/                # Static assets
│   └── assets/            # Images and SVGs from Figma
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── README.md              # Project overview
├── COMPONENTS.md          # Component documentation
└── SETUP.md               # This file
```

## Configuration Files

### tailwind.config.ts

Tailwind CSS configuration with custom theme extensions:
- Custom colors (background, foreground, primary)
- Custom fonts (Geist, Geist Mono, Minecraft)
- Extended backdrop blur utilities

### tsconfig.json

TypeScript configuration with:
- Path aliases (`@/*` maps to root)
- Strict mode enabled
- Next.js plugin integration

### next.config.ts

Next.js configuration (currently using defaults).

## Fonts

The project uses:
1. **Geist** - Primary sans-serif font (via Google Fonts)
2. **Geist Mono** - Monospace font (via Google Fonts)
3. **Mac's Extended Minecraft** - Custom pixel font (would need to be added manually)

To add the Minecraft font:
1. Download the font file
2. Place it in `public/fonts/minecraft.woff2`
3. The font-face is already configured in `globals.css`

## Environment Variables

Currently, no environment variables are required for development.

For production deployment, you may want to add:
- Analytics IDs
- API endpoints
- Feature flags

Create a `.env.local` file for local environment variables.

## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md/lg)
- Desktop: > 1024px (xl)

Key responsive behaviors:
- Navigation links hidden on mobile/tablet
- Hero text scales down on mobile
- Email form stacks vertically on mobile
- Platform preview scales proportionally

## Code Quality

### TypeScript

- Strict mode enabled
- All components have proper type definitions
- Props interfaces defined for all components

### ESLint

- Next.js recommended rules
- TypeScript ESLint rules
- Run `npm run lint` to check for issues

### Code Standards

- Components under 500 lines each
- Consistent naming conventions
- Proper file organization
- Documented props and usage

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure deployment

### Other Platforms

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run start
   ```

3. Configure your platform to run these commands

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## Performance Optimizations

- Next.js Image component for optimized images
- Font optimization with `next/font`
- Automatic code splitting
- Static generation where possible
- Tailwind CSS purging for minimal CSS

## Troubleshooting

### Port already in use

If port 3000 is taken, Next.js will automatically try 3001, 3002, etc.

To specify a different port:
```bash
npm run dev -- -p 3001
```

### TypeScript errors

Clear the Next.js cache:
```bash
rm -rf .next
npm run dev
```

### Style not applying

Make sure Tailwind is properly configured and globals.css is imported in layout.tsx.

## Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- See component documentation in COMPONENTS.md

## License

This project was created for Gradientflo.

