# Day 7 – Goal Tracker Layout (Frontend)

## 📌 Project Objective

Design a professional, mobile-first responsive layout using React, Tailwind CSS v4.1.8, and Context API for dark/light mode toggle. The layout is ready for future integration with a Node.js backend API to manage goals or other user data.

---

## 🚀 Tech Stack

* React (with Vite)
* Tailwind CSS v4.1.8
* Context API (for theme toggle)
* React Router DOM (for routing)

---

## 📁 Project Structure

```
src/
├── assets/
├── components/
│   ├── Navbar.jsx
│   ├── Sidebar.jsx
│   └── GoalCard.jsx
├── context/
│   └── ThemeContext.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── Goals.jsx
│   └── NotFound.jsx
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🌗 Dark/Light Theme Handling

We use Tailwind v4.1.8's built-in `@theme` feature with CSS variables in `index.css`:

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

## 🧠 Theme Context Logic

We use Context API to toggle dark/light mode via a `ThemeContext.jsx` file:

```jsx
const [isDark, setIsDark] = useState(false);
useEffect(() => {
  document.documentElement.classList.toggle("dark", isDark);
}, [isDark]);
```

Use `<button>` to toggle:

```jsx
<button onClick={() => setIsDark(!isDark)}>
  {isDark ? "🌙 Dark" : "☀️ Light"}
</button>
```

---

## 🧱 Layout Breakdown

**Mobile First Design** with responsive utilities:

* Top navbar for mobile & desktop
* Sidebar only on `md:` and up
* Main content with scroll and padding

```jsx
<div className="min-h-screen flex flex-col md:flex-row">
  <Sidebar />
  <div className="flex-1 p-4 md:p-6">
    <Navbar />
    <Outlet />
  </div>
</div>
```

---

## 📲 Responsive Strategy

* Mobile-first Tailwind classes (`p-4`, `text-sm`, `block`, etc.)
* Adjust with `md:`, `lg:`, `xl:` breakpoints
* Use `grid`, `flex`, and `gap-*` for layout spacing

---

## 🔌 Future Integration Ready

This layout is structured so you can later:

* Add JWT authentication (login/register pages exist)
* Fetch goals from Express/MongoDB backend
* Add user dashboards, CRUD forms, etc.

---

## ✅ Completed

* [x] Mobile-first responsive layout
* [x] Dark/light theme toggle
* [x] Context API for state
* [x] Modular components & layouts
* [x] Clean structure for full-stack extension

---
