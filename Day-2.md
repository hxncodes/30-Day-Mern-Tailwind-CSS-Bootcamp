
# 📅 Day 2: React Basics

Today we’ll learn the **fundamentals of React**, the core library for building user interfaces. This includes components, props, state, JSX syntax, and how React renders to the DOM.

---

## 🧠 Topics Covered

- What is React?
- Setting up a React app (`create-react-app` or `Vite`)
- JSX syntax
- Functional components
- Props (properties passed to components)
- `useState` hook for local state management
- Conditional rendering

---

## ⚙️ Setup React App (Vite preferred)

```bash
npm create vite@latest react-basics --template react
cd react-basics
npm install
npm run dev
```

---

## 🔹 JSX Syntax

JSX lets you write HTML in JavaScript.

```jsx
const Greeting = () => {
  const name = "Alice";
  return <h1>Hello, {name}!</h1>;
};
```

> JSX requires one root element (use a fragment `<> </>` if needed).

---

## 🔹 Functional Components

```jsx
function Welcome() {
  return <h2>Welcome to React!</h2>;
}

// OR arrow function
const Welcome = () => <h2>Welcome!</h2>;
```

Use in `App.js`:

```jsx
import Welcome from "./components/Welcome";

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

---

## 🔹 Props (Reusable Components)

```jsx
const User = ({ name }) => <p>Hello, {name}</p>;

<User name="Alice" />
<User name="Bob" />
```

---

## 🔹 useState Hook

```jsx
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

---

## 🔹 Conditional Rendering

```jsx
const LoggedInMessage = ({ isLoggedIn }) => {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
};
```

---

## 🧪 Practice Exercise

1. Create a `Greeting` component that accepts a `name` prop and displays "Hello, [name]".
2. Create a `Counter` component that increments/decrements count using buttons.
3. Create a `UserCard` component that takes `name`, `age`, and `email` as props and displays them.

---

## ✅ Summary

Today we learned how to create components in React, pass props, and manage state with `useState`. These are the building blocks of every React app. Tomorrow, we’ll dive deeper into **state and event handling**! 💡
