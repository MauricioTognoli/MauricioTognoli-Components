# SocialGrid

A responsive bento-style social links grid component. Built with TailwindCSS and Framer Motion. Dark-first, fully accessible, copy/paste ready.

---

## Preview

Desktop: 4-column bento grid with a large profile card, platform cards with hover animations.  
Mobile: Stacked column layout with tap animations.

---

## Requirements

```bash
npm install framer-motion lucide-react
# or
pnpm add framer-motion lucide-react
```

TailwindCSS must be configured in your project.

---

## Usage

### Within the monorepo

```tsx
import { SocialGrid } from "@repo/ui";

<SocialGrid
  profile={{
    name: "Your Name",
    role: "Frontend Developer",
    bio: "Building intuitive interfaces for the future.",
    avatarUrl: "https://github.com/yourusername.png",
  }}
  links={{
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername",
    email: "hello@example.com",
  }}
/>
```

### Copy/paste standalone

Copy the following files into your project:

```
your-project/components/social-grid/
├── types.ts
├── social-grid.tsx
├── social-grid-desktop.tsx
└── social-grid-mobile.tsx
```

Then import locally:

```tsx
import { SocialGrid } from "@/components/social-grid/social-grid";
```

---

## Props

### `SocialGridProps`

| Prop        | Type          | Required | Description                                 |
|-------------|---------------|----------|---------------------------------------------|
| `profile`   | `ProfileData` | Yes      | User profile information                    |
| `links`     | `SocialLinks` | Yes      | Social platform URLs                        |
| `className` | `string`      | No       | Additional CSS classes for the root element |

### `ProfileData`

| Field       | Type     | Required | Description                         |
|-------------|----------|----------|-------------------------------------|
| `name`      | `string` | Yes      | Full display name                   |
| `role`      | `string` | Yes      | Job title or role shown below name  |
| `bio`       | `string` | Yes      | Short bio text                      |
| `avatarUrl` | `string` | Yes      | URL to profile image                |
| `avatarAlt` | `string` | No       | Alt text for image (defaults to name) |

### `SocialLinks`

| Field       | Type     | Required | Description                                           |
|-------------|----------|----------|-------------------------------------------------------|
| `github`    | `string` | No       | GitHub profile URL                                    |
| `linkedin`  | `string` | No       | LinkedIn profile URL                                  |
| `twitter`   | `string` | No       | Twitter / X profile URL                               |
| `instagram` | `string` | No       | Instagram profile URL                                 |
| `email`     | `string` | No       | Email address (rendered as `mailto:` link)            |

All links are optional. If omitted, the card renders with `href="#"` and no `target="_blank"`.

---

## Available Exports

```ts
// Components
import { SocialGrid }         from "@repo/ui"; // Responsive (auto desktop/mobile)
import { SocialGridDesktop }  from "@repo/ui"; // Desktop bento only
import { SocialGridMobile }   from "@repo/ui"; // Mobile stack only
import { SocialGridDemo }     from "@repo/ui"; // Pre-configured demo with mock data

// Types
import type { SocialGridProps, ProfileData, SocialLinks } from "@repo/ui";
```

---

## Next.js integration

The component uses native `<img>` and `<a>` tags for framework independence.

If you want Next.js Image optimization, replace `<img>` in `social-grid-desktop.tsx` and `social-grid-mobile.tsx`:

```tsx
// Before
<img src={profile.avatarUrl} alt={profile.avatarAlt ?? profile.name} ... />

// After
import Image from "next/image";
<Image src={profile.avatarUrl} alt={profile.avatarAlt ?? profile.name} fill />
```

---

## Customization

### Accent color

The violet accent (`text-violet-400`, `border-violet-500/50`, `bg-violet-500/20`) can be globally replaced:

```bash
# Find and replace in your editor
text-violet-400  →  text-your-color
```

### Grid layout

The bento grid is defined in `social-grid-desktop.tsx` using Tailwind's `grid-cols-4 grid-rows-3`. Card positions use `col-span-*` and `row-span-*` utilities and can be rearranged freely.

### Animations

All animations are Framer Motion `whileHover` / `whileTap` variants on `<motion.div>`. Remove the `motion` wrapper and replace with a plain `<div>` to eliminate animations entirely.

---

## File structure

```
SocialGrid/
├── types.ts                 # TypeScript interfaces
├── social-grid.tsx          # Responsive wrapper (default export to use)
├── social-grid-desktop.tsx  # Desktop bento layout
├── social-grid-mobile.tsx   # Mobile stacked layout
├── demo.tsx                 # Self-contained demo with mock data
└── index.ts                 # Public exports
```
