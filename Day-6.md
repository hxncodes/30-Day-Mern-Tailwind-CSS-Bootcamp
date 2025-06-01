
---

# 📅 Day 6 – Reusable Components & Responsive Layouts with Theme Toggle (Tailwind CSS v4.1)

## 🎯 Goals

* Build responsive UI components using Tailwind CSS v4.1
* Use a custom React hook to toggle between light and dark mode
* Apply your custom `@theme` variables via `index.css`
* Follow mobile-first, accessible, industry-grade layout practices

---

## 🌗 Custom Theme Setup (Tailwind v4.1)

inside `index.css`:

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
```

---

## 🧩 Theme Toggle Hook

**📁 `hooks/useTheme.js`**

```jsx
import { useEffect, useState } from "react";

export default function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
}
```

---

## 🧭 Updated Navbar With Theme Toggle

**📁 `components/Navbar.jsx`**

```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import useTheme from "../hooks/useTheme";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="bg-[--color-bg] text-[--color-text] dark:bg-[--color-bg-dark] dark:text-[--color-text-dark] shadow">
      <div className="flex justify-between items-center p-4 md:px-8">
        <div className="text-xl font-semibold">hxnCodes</div>

        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="Toggle Theme">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>

        <nav className="hidden md:flex gap-6">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} className="hover:text-[--color-primary]">{label}</Link>
          ))}
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 px-6 py-8 bg-[--color-secondary] dark:bg-slate-900">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <X />
          </button>
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setIsOpen(false)} className="hover:text-[--color-primary]">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
```

---

## 🧱 Responsive Grid & Card Component

**📁 `components/Card.jsx`**

```jsx
function Card({ title, description }) {
  return (
    <div className="bg-[--color-secondary] dark:bg-slate-800 p-6 rounded-xl shadow hover:shadow-lg transition-all">
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  );
}

export default Card;
```

**📁 `components/CardGrid.jsx`**

```jsx
import Card from "./Card";

function CardGrid() {
  const data = [
    { title: "Blog Post", description: "Responsive layout demo" },
    { title: "Dark Mode", description: "Custom theme variables" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {data.map((item, i) => (
        <Card key={i} {...item} />
      ))}
    </div>
  );
}

export default CardGrid;
```

---

## 🧪 Sample Layout Structure

```jsx
<div className="container mx-auto px-4 py-6">
  <h1 className="text-2xl font-bold">My Dashboard</h1>
  <CardGrid />
</div>
```

---

## ✅ Summary Tasks

| Task                                          | Status |
| --------------------------------------------- | ------ |
| Theme variables integrated with Tailwind v4.1 | ✅      |
| React hook to toggle dark/light mode          | ✅      |
| Responsive layout built using grid/flex       | ✅      |
| Mobile-first design applied                   | ✅      |
| Components reusable and theme-ready           | ✅      |

---
