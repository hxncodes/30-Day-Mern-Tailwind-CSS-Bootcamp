
---

````markdown
# 📅 Day 4: React Router + Project Setup

Today’s goal is to add **multi-page navigation** using React Router and set up our project with pages like Home, About, Login, and Signup. We’ll also learn **404 routing**, **nested routing**, and **dynamic routing**.

---

## 🧠 Topics Covered

- React Router v6+ installation
- Defining routes
- `Link` and `NavLink`
- 404 Not Found page
- Nested routes
- Dynamic routes (`:id`)
- Navbar rendering on all pages except login/signup

---

## ⚙️ Install React Router

```bash
npm install react-router-dom
````

---

## 🔹 Basic Routing Setup

```jsx
// main.jsx (Vite)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

```jsx
// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  const hiddenNavbarRoutes = ['/login', '/signup'];
  const currentPath = window.location.pathname;

  return (
    <>
      {!hiddenNavbarRoutes.includes(currentPath) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
```

---

## 🔹 Navbar Component

```jsx
// components/Navbar.jsx
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <NavLink to="/" className="mr-4">Home</NavLink>
      <NavLink to="/about" className="mr-4">About</NavLink>
    </nav>
  );
};

export default Navbar;
```

---

## 🔹 Create Pages

```jsx
// pages/Home.jsx
const Home = () => <h1>Home Page</h1>;
export default Home;
```

```jsx
// pages/Login.jsx
const Login = () => <h1>Login Page</h1>;
export default Login;
```

```jsx
// pages/NotFound.jsx
const NotFound = () => <h1>404 - Page Not Found</h1>;
export default NotFound;
```

Repeat for Signup, About, etc.

---

## 🔹 Nested Routing Example

Useful for dashboard or settings structure.

```jsx
// App.jsx
<Route path="/dashboard/*" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

```jsx
// Dashboard.jsx
import { Outlet, Link } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    <Outlet />
  </div>
);
```

---

## 🔹 Dynamic Routing Example

For things like `/product/:id`

```jsx
// App.jsx
<Route path="/product/:id" element={<Product />} />

// Product.jsx
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams();
  return <h1>Product ID: {id}</h1>;
};
```

---

## 🧪 Practice Exercise

1. Create Home, About, Login, Signup, and NotFound pages.
2. Build a Navbar visible on all pages **except** login and signup.
3. Create a dynamic route like `/user/:username`.
4. Add a nested route in `/dashboard` with `/dashboard/profile` and `/dashboard/settings`.

---

## ✅ Summary

We now know how to build multi-page applications in React using React Router, including advanced features like 404 pages, dynamic routing, and nested routes. 🎯

Next up: We’ll add **Tailwind CSS** to style components beautifully! 💅

