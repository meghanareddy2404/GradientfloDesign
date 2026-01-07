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

### CapabilitySection

"How Gradientflo turns code into capability" section with 4-step process explanation.

**Location:** `components/CapabilitySection.tsx`

**Props:** None

**Features:**
- 4-step process grid layout
- Gradient step badges
- Visual illustrations for steps 1 and 4
- Fully responsive (stacks on mobile)
- Clean border-based design

**Sub-components:**
- `StepBadge` - Gradient badge showing step number

**Steps:**
1. **Your Code** - GitHub integration visualization
2. **Codebase Understanding** - Structure mapping
3. **Gap Detection** - Knowledge gap identification
4. **Team Growth** - Progress visualization

**Usage:**
```tsx
import { CapabilitySection } from '@/components/CapabilitySection';

<CapabilitySection />
```

---

### FeaturesSection

"Nine signal sources. Zero manual tagging." features showcase with learning signal detection.

**Location:** `components/FeaturesSection.tsx`

**Props:** None

**Features:**
- 9 signal source cards in 3x3 grid
- Circular Learning Signal card with metrics
- Icons for each signal type
- Hover effects on cards
- Fully responsive grid layout
- Mixed typography (Geist + Minecraft)

**Sub-components:**
- `FeatureCard` - Individual signal source card (256x160px)
- `LearningSignalCard` - Circular detection card (240x240px)
- `DetailRow` - Key-value row in learning signal

**Signal Sources:**
1. PR Merged
2. New Dependency
3. Complex Diff
4. Reviewer Comment
5. Repeated Query
6. Incident
7. Security Scan
8. Skill Decay
9. Doc Reactivation

**Learning Signal Metrics:**
- Concept name
- Understanding percentage
- Urgency level

**Usage:**
```tsx
import { FeaturesSection } from '@/components/FeaturesSection';

<FeaturesSection />
```

---

### LearningSystemSection

"Automation that runs your learning system" section with Neural DNA visualization.

**Location:** `components/LearningSystemSection.tsx`

**Props:** None

**Features:**
- Simple, clean section layout
- Large visualization image (Neural DNA: SLM Ontology Graph)
- Responsive image sizing
- Mixed typography (Geist + Minecraft for "your")
- Rounded corners on visualization

**Content:**
- Shows automated learning system architecture
- Neural DNA ontology graph visualization
- Model latent core with peripheral nodes
- Performance metrics for different components

**Usage:**
```tsx
import { LearningSystemSection } from '@/components/LearningSystemSection';

<LearningSystemSection />
```

---

### ImpactSection

"Learning lives inside the project" section with explanation text and performance metrics.

**Location:** `components/ImpactSection.tsx`

**Props:** None

**Features:**
- Mixed typography (Minecraft + Geist)
- Two-column layout (text + illustration)
- Bulleted list of key benefits
- 4 performance metrics in bottom row
- Responsive layout (stacks on mobile)
- Interactive card illustration

**Sub-components:**
- `MetricCard` - Individual metric display card

**Content:**
- **Main Message**: Learning embedded in codebase
- **Benefits**:
  - Learning triggered by PRs not courses
  - Context from actual repository
  - Knowledge stays current with code changes
- **Metrics**:
  - 2.4x Learning Velocity Index
  - 87% Application Rate
  - 94% Knowledge Graph Coverage
  - 91% Concept Retention Over Time

**Usage:**
```tsx
import { ImpactSection } from '@/components/ImpactSection';

<ImpactSection />
```

---

### MetricsSection

Hero-style metrics display showing Learning Velocity Index with cosmic background.

**Location:** `components/MetricsSection.tsx`

**Props:** None

**Features:**
- Large, prominent metric display (78%)
- Cosmic space background image
- 4 sub-metrics with icons
- Responsive grid layout
- Full-width hero design
- Layered content over background image

**Sub-components:**
- `SubMetric` - Individual sub-metric with icon, value, and label

**Main Metric:**
- **78%** Learning Velocity Index
- Descriptive subtitle explaining metric purpose

**Sub-Metrics:**
- 30% Concepts Mastered
- 40% Speed to Apply
- 20% Content Completed
- 10% Skill Refresh

**Usage:**
```tsx
import { MetricsSection } from '@/components/MetricsSection';

<MetricsSection />
```

---

### IntegrationsSection

Integration showcase displaying supported tools and platforms.

**Location:** `components/IntegrationsSection.tsx`

**Props:** None

**Features:**
- Clean, centered heading with mixed typography
- 4 integration cards in grid layout
- Circular logo containers with shadows
- Hover effects on cards
- Responsive grid (2x2 on mobile, 4 columns on desktop)
- Description text explaining integration benefits

**Sub-components:**
- `IntegrationCard` - Individual integration display with logo and name

**Integrations:**
1. **Notion** - White background with Notion logo
2. **GitHub** - Dark background with GitHub Octocat
3. **Linear** - Transparent background with Linear logo
4. **Slack** - White background with Slack logo

**Key Message:**
- "Fits into the tools your teams already use"
- No new process, no learning portal, no workflow disruption

**Usage:**
```tsx
import { IntegrationsSection } from '@/components/IntegrationsSection';

<IntegrationsSection />
```

---

### EnterpriseSection

Enterprise-focused features highlighting security, compliance, and support.

**Location:** `components/EnterpriseSection.tsx`

**Props:** None

**Features:**
- Clean, professional layout
- 4 enterprise feature columns
- Lightning bolt icons for each feature
- Responsive grid layout
- Hover effects on cards
- Security and compliance focus

**Sub-components:**
- `FeatureCard` - Individual enterprise feature card

**Enterprise Features:**
1. **SOC 2 Aligned** - Enterprise-grade security controls and audit trails
2. **SSO & RBAC** - Single sign-on with role-based access control
3. **Data Isolation** - Your data stays within your security perimeter
4. **White Glove** - Dedicated success team and learning design support

**Key Message:**
- "Why Gradientflo for Enterprise"
- Security, compliance, and scale for serious organizations

**Usage:**
```tsx
import { EnterpriseSection } from '@/components/EnterpriseSection';

<EnterpriseSection />
```

---

### Footer

Complete footer with logo, social links, navigation columns, and copyright.

**Location:** `components/Footer.tsx`

**Props:** None

**Features:**
- Logo and brand name
- Social media icons (YouTube, X, LinkedIn, Instagram)
- 5 navigation columns with links
- Copyright information
- Design credit
- Responsive layout
- Hover effects on links

**Sub-components:**
- `FooterColumn` - Individual navigation column with title and links

**Navigation Columns:**
1. **Product** - Developer, Features, Artifacts, Agent Log, Enterprise
2. **Resources** - Customers, Blog, Pricing, Why Gradientflo, Compare
3. **Company** - Careers, About
4. **Documentation** - Glossary, Components, Changelog
5. **Legal** - Privacy Policy, Responsible Disclosure, Terms, Security, DSR/DSAR

**Social Links:**
- YouTube
- X (Twitter)
- LinkedIn
- Instagram

**Bottom Section:**
- Copyright © Gradientflo 2025
- "Designed and built by The Super cool! People of Gradientflo 🩵"

**Usage:**
```tsx
import { Footer } from '@/components/Footer';

<Footer />
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

