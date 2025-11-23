# Profile Photo Usage Report

## Summary
The file `profile-photo.jpg` is used in **2 files** in the repository (excluding any assets.ts file):

## Files Using profile-photo.jpg

### 1. HeroSection.tsx
**Location:** `./client/src/components/HeroSection.tsx`  
**Line:** 246  
**Usage Context:**
```tsx
<img
  src="/assets/images/profile-photo.jpg"
  alt="Pathan Mo. Faizan Khan"
  className="w-full h-full object-cover rounded-full"
/>
```

**Purpose:** Displays the main profile photo in the hero/landing section of the portfolio. The image is:
- Rendered in a circular frame (rounded-full)
- Size: 80x80 (w-80 h-80) or 96x96 (lg:w-96 lg:h-96) on larger screens
- Has a gradient glow background effect
- Has hover animations (scale-105 on hover)
- Decorated with floating icon elements (Code and Brain icons)

---

### 2. AboutSection.tsx
**Location:** `./client/src/components/AboutSection.tsx`  
**Line:** 274  
**Usage Context:**
```tsx
<img
  src="/assets/images/profile-photo.jpg"
  alt="Pathan Mo. Faizan Khan"
  className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
/>
```

**Purpose:** Displays the profile photo in the About section. The image is:
- Rendered in a rounded rectangle (rounded-xl)
- Full width with auto height
- Has a glass-card container with padding
- Has hover animations (scale-105 on hover)
- Has a floating Code icon badge overlay
- Has an "Available for opportunities" status indicator

---

## Additional Notes

- **No assets.ts file exists** in the repository
- Both usages reference the same image path: `/assets/images/profile-photo.jpg`
- The image is served from the public assets directory
- Both components are React/TypeScript files using Framer Motion for animations
- Both usages include accessibility alt text: "Pathan Mo. Faizan Khan"

## Search Command Used
```bash
grep -r "profile-photo.jpg" --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" --include="*.json" --include="*.html" --include="*.css" --include="*.scss" .
```
