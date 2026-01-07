# Quick Start Guide

Get up and running with the Gradientflo landing page in 5 minutes.

## 🚀 Installation (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Key Files to Know

| File | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page |
| `app/layout.tsx` | Root layout, metadata, fonts |
| `components/Navbar.tsx` | Navigation bar |
| `components/Hero.tsx` | Hero section |
| `tailwind.config.ts` | Theme customization |

## 🎨 Making Changes

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  background: "#111111",  // Change this
  foreground: "#ffffff",  // And this
  primary: "#3552bf",     // And this
}
```

### Change Text Content

Edit `components/Hero.tsx`:

```typescript
// Line ~40
<h1>
  Your Custom Heading Here
</h1>

// Line ~55
<p>
  Your custom description here.
</p>
```

### Change Navigation Links

Edit `components/Navbar.tsx`:

```typescript
// Line ~8
const navItems = [
  { label: "Your Link", href: "#your-link" },
  // Add more...
];
```

### Add a New Component

1. Create file: `components/NewSection.tsx`
2. Write component:
   ```typescript
   export const NewSection = () => {
     return <section>New Content</section>;
   };
   ```
3. Import in `app/page.tsx`:
   ```typescript
   import { NewSection } from "@/components/NewSection";
   ```
4. Add to page:
   ```typescript
   <NewSection />
   ```

## 🎯 Common Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check for errors
```

## 📱 Preview on Mobile

1. Start dev server: `npm run dev`
2. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. On mobile, visit: `http://YOUR-IP:3000`

Example: `http://192.168.1.100:3000`

## 🔧 Quick Fixes

### Port 3000 in use?

```bash
npm run dev -- -p 3001
```

### Styles not updating?

```bash
# Stop server (Ctrl+C)
rm -rf .next
npm run dev
```

### TypeScript errors?

```bash
rm -rf .next node_modules
npm install
npm run dev
```

## 📚 Next Steps

- Read [COMPONENTS.md](./COMPONENTS.md) for component API
- Read [DEVELOPMENT.md](./DEVELOPMENT.md) for best practices
- Read [SETUP.md](./SETUP.md) for detailed setup info

## 🎨 Customization Checklist

- [ ] Update colors in `tailwind.config.ts`
- [ ] Change hero text in `components/Hero.tsx`
- [ ] Update navigation in `components/Navbar.tsx`
- [ ] Replace logo in `public/assets/`
- [ ] Update metadata in `app/layout.tsx`
- [ ] Change platform preview image

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live.

## ⚡ Performance Tips

- ✅ Already using Next.js Image optimization
- ✅ Already using font optimization
- ✅ Already minimizing CSS with Tailwind
- ✅ Already code-splitting with Next.js

## 🐛 Issues?

1. Check terminal for errors
2. Check browser console for errors
3. Read error messages carefully
4. See [DEVELOPMENT.md](./DEVELOPMENT.md) troubleshooting

## 💡 Tips

- Use `console.log()` to debug
- Use React DevTools browser extension
- Use Tailwind CSS IntelliSense VSCode extension
- Hot reload updates instantly - no need to refresh

## 🎓 Learning Resources

- [Next.js Learn](https://nextjs.org/learn) - Interactive tutorial
- [React Docs](https://react.dev) - React fundamentals
- [Tailwind Docs](https://tailwindcss.com/docs) - CSS classes

---

**Ready to build?** Start editing `components/Hero.tsx` and see changes instantly! 🎉

