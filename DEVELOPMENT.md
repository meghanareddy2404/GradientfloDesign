# Development Guide

This guide covers development practices, coding standards, and common tasks for the Gradientflo landing page.

## Table of Contents

- [Getting Started](#getting-started)
- [Code Standards](#code-standards)
- [Component Guidelines](#component-guidelines)
- [Styling Guidelines](#styling-guidelines)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Development Workflow

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Make changes** to components in `components/` or pages in `app/`

3. **Hot reload** automatically updates the browser

4. **Check for errors** in the terminal and browser console

5. **Run linter** before committing:
   ```bash
   npm run lint
   ```

### Directory Structure

```
src/
├── app/              # Next.js pages and layouts
├── components/       # React components
├── lib/             # Utility functions
├── types/           # TypeScript type definitions
└── public/          # Static assets
```

## Code Standards

### TypeScript

#### Always define interfaces for props

```typescript
// ✅ Good
interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

// ❌ Bad
function Button(props: any) { }
```

#### Use strict type checking

```typescript
// ✅ Good
const [email, setEmail] = useState<string>("");

// ❌ Bad
const [email, setEmail] = useState("");
```

### File Naming

- **Components**: PascalCase - `Button.tsx`, `NavLink.tsx`
- **Utilities**: camelCase - `utils.ts`, `helpers.ts`
- **Types**: camelCase - `index.ts` in `types/`
- **Styles**: kebab-case - `globals.css`

### Import Order

```typescript
// 1. React imports
import React, { useState } from "react";

// 2. Next.js imports
import Image from "next/image";
import Link from "next/link";

// 3. Third-party imports
import { clsx } from "clsx";

// 4. Local imports - components
import { Button } from "@/components/ui/Button";

// 5. Local imports - utilities
import { cn } from "@/lib/utils";

// 6. Local imports - types
import type { ButtonProps } from "@/types";

// 7. Styles (if needed)
import styles from "./Button.module.css";
```

## Component Guidelines

### Component Structure

```typescript
// 1. Imports
import React from "react";
import { cn } from "@/lib/utils";

// 2. Types/Interfaces
interface ComponentProps {
  className?: string;
  children: React.ReactNode;
}

// 3. Component
export const Component: React.FC<ComponentProps> = ({ 
  className, 
  children 
}) => {
  // 4. State
  const [state, setState] = useState("");

  // 5. Effects
  React.useEffect(() => {
    // ...
  }, []);

  // 6. Handlers
  const handleClick = () => {
    // ...
  };

  // 7. Render
  return (
    <div className={cn("base-classes", className)}>
      {children}
    </div>
  );
};
```

### Component Size

- **Maximum 500 lines** per component
- If larger, split into smaller components
- Extract logic into custom hooks

### Client vs Server Components

```typescript
// ✅ Use "use client" when needed
"use client";

import { useState } from "react";

export const InteractiveComponent = () => {
  const [state, setState] = useState("");
  // ...
};

// ✅ Server components by default
export const StaticComponent = () => {
  return <div>Static content</div>;
};
```

### Props Destructuring

```typescript
// ✅ Good - Destructure with defaults
export const Button: React.FC<ButtonProps> = ({ 
  variant = "primary",
  size = "md",
  className,
  ...props 
}) => {
  // ...
};

// ❌ Bad - Using props object
export const Button: React.FC<ButtonProps> = (props) => {
  return <button className={props.className}>
    {props.children}
  </button>;
};
```

## Styling Guidelines

### Tailwind CSS

#### Use semantic class ordering

```typescript
// ✅ Good - Logical grouping
<div className="
  flex items-center justify-center gap-2
  px-4 py-2
  bg-white text-black
  rounded-lg
  transition-all hover:bg-gray-100
">
```

#### Use the cn() utility

```typescript
import { cn } from "@/lib/utils";

// ✅ Good
<div className={cn(
  "base-classes",
  variant === "primary" && "primary-classes",
  className
)}>

// ❌ Bad
<div className={`base-classes ${variant === "primary" ? "primary-classes" : ""} ${className}`}>
```

#### Responsive design

```typescript
// ✅ Good - Mobile first
<div className="
  text-sm md:text-base lg:text-lg
  px-4 md:px-6 lg:px-8
">

// Order: base -> sm -> md -> lg -> xl -> 2xl
```

### Custom Styles

Only use custom CSS when Tailwind is insufficient:

```css
/* globals.css */
@layer components {
  .custom-component {
    /* Custom styles */
  }
}
```

## Common Tasks

### Adding a New Component

1. **Create the component file:**
   ```bash
   touch components/NewComponent.tsx
   ```

2. **Write the component:**
   ```typescript
   import React from "react";
   
   interface NewComponentProps {
     // Define props
   }
   
   export const NewComponent: React.FC<NewComponentProps> = (props) => {
     return <div>New Component</div>;
   };
   ```

3. **Export from index:**
   ```typescript
   // components/index.ts
   export { NewComponent } from "./NewComponent";
   ```

4. **Document in COMPONENTS.md**

### Adding a New Page

1. **Create page in app directory:**
   ```bash
   mkdir app/about
   touch app/about/page.tsx
   ```

2. **Create the page component:**
   ```typescript
   export default function About() {
     return <main>About Page</main>;
   }
   ```

### Adding New Icons

1. **Create icon component:**
   ```typescript
   // components/icons/NewIcon.tsx
   export const NewIcon: React.FC<{ className?: string }> = ({ 
     className = "size-4" 
   }) => {
     return (
       <svg className={className}>
         {/* SVG path */}
       </svg>
     );
   };
   ```

2. **Export from icons/index.ts:**
   ```typescript
   export { NewIcon } from "./NewIcon";
   ```

### Modifying Styles

1. **Update Tailwind config** for theme changes:
   ```typescript
   // tailwind.config.ts
   theme: {
     extend: {
       colors: {
         newColor: "#hexcode",
       },
     },
   }
   ```

2. **Use in components:**
   ```typescript
   <div className="bg-newColor">
   ```

### Adding Forms

```typescript
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ 
          ...formData, 
          email: e.target.value 
        })}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
```

## Troubleshooting

### TypeScript Errors

**Problem**: Type errors in components

**Solution**:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Tailwind Not Working

**Problem**: Classes not applying

**Solution**:
1. Check `tailwind.config.ts` content paths
2. Ensure `globals.css` is imported in `layout.tsx`
3. Restart dev server

### Import Errors

**Problem**: Cannot find module

**Solution**:
1. Check path alias in `tsconfig.json`
2. Verify file exists
3. Check file extension (`.ts` vs `.tsx`)

### Image Not Loading

**Problem**: Image not found

**Solution**:
1. Verify file is in `public/` directory
2. Check path is correct (starts with `/`)
3. Use Next.js `Image` component

### Hydration Errors

**Problem**: "Hydration failed" error

**Solution**:
1. Don't use `window` or browser APIs during render
2. Use `useEffect` for client-side only code
3. Ensure SSR HTML matches client HTML

## Testing

### Manual Testing Checklist

- [ ] Component renders correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] TypeScript compiles without errors
- [ ] Linter passes
- [ ] Accessibility (keyboard navigation, ARIA labels)

### Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Responsive Testing

Test at breakpoints:
- 375px (Mobile)
- 768px (Tablet)
- 1024px (Desktop)
- 1440px (Large desktop)

## Performance

### Optimization Tips

1. **Use Next.js Image component:**
   ```typescript
   import Image from "next/image";
   <Image src="/image.jpg" width={500} height={500} alt="" />
   ```

2. **Dynamic imports for large components:**
   ```typescript
   const HeavyComponent = dynamic(() => import("./HeavyComponent"), {
     loading: () => <Spinner />,
   });
   ```

3. **Memoization for expensive calculations:**
   ```typescript
   const memoizedValue = useMemo(() => 
     expensiveCalculation(a, b), 
     [a, b]
   );
   ```

## Git Workflow

1. **Create feature branch:**
   ```bash
   git checkout -b feature/new-component
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Add new component"
   ```

3. **Push and create PR:**
   ```bash
   git push origin feature/new-component
   ```

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Questions?** Check COMPONENTS.md and SETUP.md for more detailed information.

