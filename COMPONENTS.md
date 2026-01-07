# Components Documentation

This document provides an overview of all components in the Gradientflo landing page.

## Component Structure

```
components/
├── Navbar.tsx           # Main navigation bar
├── Hero.tsx             # Hero section with CTA
├── Logo.tsx             # Gradientflo logo component
├── ui/                  # Reusable UI components
│   ├── Button.tsx       # Button component with variants
│   ├── NavLink.tsx      # Navigation link component
│   ├── Input.tsx        # Input field component
│   └── index.ts         # UI components barrel export
└── icons/               # SVG icon components
    ├── DiscordIcon.tsx  # Discord icon
    ├── ArrowRightIcon.tsx # Arrow right icon
    └── index.ts         # Icons barrel export
```

## Core Components

### Navbar

Navigation bar component with logo, navigation links, and CTA buttons.

**Location:** `components/Navbar.tsx`

**Props:** None

**Features:**
- Responsive design (navigation links hidden on mobile)
- Discord and Beta Access CTAs
- Centered navigation layout

**Usage:**
```tsx
import { Navbar } from '@/components/Navbar';

<Navbar />
```

---

### Hero

Hero section with main heading, description, and email signup form.

**Location:** `components/Hero.tsx`

**Props:** None

**Features:**
- "NEW" feature badge
- Large, prominent heading with mixed typography
- Email capture form
- Responsive layout

**Usage:**
```tsx
import { Hero } from '@/components/Hero';

<Hero />
```

---

### Logo

Gradientflo logo component using Next.js Image optimization.

**Location:** `components/Logo.tsx`

**Props:**
- `className?: string` - Optional CSS classes for sizing

**Usage:**
```tsx
import { Logo } from '@/components/Logo';

<Logo className="h-4" />
```

---

### CodeIndexingSection

Code Indexing section showcasing automated knowledge distillation features with a neural network visualization.

**Location:** `components/CodeIndexingSection.tsx`

**Props:** None

**Features:**
- Feature grid with 5 key features
- Connection diagram visualization
- Context Synthesis Engine neural visualization
- Fully responsive layout
- Hover effects on feature cards

**Sub-components:**
- `FeatureCard` - Individual feature card with icon and title

**Usage:**
```tsx
import { CodeIndexingSection } from '@/components/CodeIndexingSection';

<CodeIndexingSection />
```

---

## UI Components

### Button

Versatile button component with multiple variants and sizes.

**Location:** `components/ui/Button.tsx`

**Props:**
- `variant?: "primary" | "secondary" | "ghost"` - Button style variant
- `size?: "sm" | "md" | "lg"` - Button size
- `children: React.ReactNode` - Button content
- Extends all standard HTML button attributes

**Variants:**
- **primary**: White background, dark text
- **secondary**: Semi-transparent white with backdrop blur
- **ghost**: Transparent with hover effect

**Usage:**
```tsx
import { Button } from '@/components/ui/Button';

<Button variant="primary" size="md">
  Click Me
</Button>
```

---

### NavLink

Navigation link component styled for the navbar.

**Location:** `components/ui/NavLink.tsx`

**Props:**
- `href: string` - Link destination
- `children: React.ReactNode` - Link text
- `className?: string` - Optional CSS classes

**Usage:**
```tsx
import { NavLink } from '@/components/ui/NavLink';

<NavLink href="#features">Features</NavLink>
```

---

### Input

Styled input field component for forms.

**Location:** `components/ui/Input.tsx`

**Props:**
- `wrapperClassName?: string` - CSS classes for wrapper div
- Extends all standard HTML input attributes

**Usage:**
```tsx
import { Input } from '@/components/ui/Input';

<Input
  type="email"
  placeholder="Email address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

---

## Icon Components

### DiscordIcon

Discord logo SVG icon.

**Location:** `components/icons/DiscordIcon.tsx`

**Props:**
- `className?: string` - Optional CSS classes (default: "size-4")

**Usage:**
```tsx
import { DiscordIcon } from '@/components/icons';

<DiscordIcon className="size-4 text-white" />
```

---

### ArrowRightIcon

Right arrow SVG icon.

**Location:** `components/icons/ArrowRightIcon.tsx`

**Props:**
- `className?: string` - Optional CSS classes (default: "size-4")

**Usage:**
```tsx
import { ArrowRightIcon } from '@/components/icons';

<ArrowRightIcon className="size-4 text-white" />
```

---

## Styling

All components use Tailwind CSS for styling with the following design tokens:

### Colors
- Background: `#111111`
- Foreground: `#ffffff`
- Primary: `#3552bf`

### Fonts
- **Geist**: Primary sans-serif font
- **Geist Mono**: Monospace font for navigation
- **Mac's Extended Minecraft**: Custom pixel font for "Infrastructure" text

### Responsive Breakpoints
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

---

## Best Practices

1. **Component Size**: Keep components under 500 lines
2. **Props**: Always define TypeScript interfaces for props
3. **Accessibility**: Include ARIA labels for icon-only buttons
4. **Responsiveness**: Use Tailwind's responsive modifiers
5. **Performance**: Use Next.js Image component for all images

---

## Adding New Components

When creating new components:

1. Create the component file in the appropriate directory
2. Export from the directory's `index.ts` file
3. Add TypeScript interfaces for all props
4. Use the `cn()` utility for conditional classes
5. Keep components under 500 lines
6. Add documentation to this file

