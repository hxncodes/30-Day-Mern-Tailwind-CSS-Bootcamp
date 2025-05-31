# 📅 Day 5 – Responsive Layout with Theme Toggle (Tailwind CSS v4.1 + React + Vite)

---

## ✅ Goals

- Implement mobile-first responsive layout with multiple regions
- Enable theme toggling (light/dark mode)
- Use modern Tailwind v4.1 features (like `@theme`)
- Apply custom theme variables for scalable design
- Build an industry-grade layout: Top Navbar + Sidebar + Main + Sidebar + Footer

---

## 🧱 Tech Stack

| Feature           | Details                      |
|------------------|------------------------------|
| Framework        | React                         |
| Bundler          | Vite                          |
| CSS Framework    | Tailwind CSS v4.1 (no config) |
| Theming          | `@theme` inside `index.css`   |
| Dark Mode        | `.dark` class on `html`       |
| Layout Strategy  | Mobile-first, responsive grid |

---

## 🧩 1. `index.css` – Tailwind v4.1 Theming Setup

```css
@import "tailwindcss";

@theme {
  --color-bg: #ffffff;
  --color-text: #1f2937;
  --color-primary: #2563eb;
  --color-secondary: #f3f4f6;

  --color-bg-dark: #0f172a;
  --color-text-dark: #f8fafc;
  --color-primary-dark: #3b82f6;
}

@layer base {
  body {
    background-color: var(--color-bg);
    color: var(--color-text);
  }

  .dark body {
    background-color: var(--color-bg-dark);
    color: var(--color-text-dark);
  }
}
