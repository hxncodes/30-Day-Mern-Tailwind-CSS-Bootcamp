
---

````markdown
# 📅 Day 3: React State + Events

Today’s goal is to understand how to manage **state in React** and handle **user interactions** with events. We’ll also learn about the `useEffect` hook and controlled inputs (important for forms).

---

## 🧠 Topics Covered

- Event handling in React (`onClick`, `onChange`, etc.)
- `useState` recap
- Controlled components (form inputs)
- `useEffect` hook (side effects)
- Basic state-driven logic

---

## 🔹 Handling Events

React handles events similarly to vanilla JS, but with camelCase and using JSX.

```jsx
const Clicker = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
};
````

---

## 🔹 Controlled Components (Inputs)

A **controlled component** means the input value is managed by React state.

```jsx
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name}!</p>
    </div>
  );
};
```

---

## 🔹 `useEffect` Hook

`useEffect` lets you perform side effects like fetching data or setting timers.

```jsx
import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Run once on mount

  return <p>Time: {seconds}s</p>;
};
```

---

## 🔹 Toggle Logic

Using state to show/hide elements:

```jsx
const Toggle = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Message
      </button>
      {show && <p>This is a toggle message!</p>}
    </div>
  );
};
```

---

## 🧪 Practice Exercises

1. Create a `LoginForm` component with email and password inputs.
2. Create a `ToggleDetails` component to show/hide user profile details.
3. Build a `CountdownTimer` using `useEffect` and `useState`.

---

## ✅ Summary

Today, we learned how to manage component state with `useState`, respond to user actions with events, and perform side effects with `useEffect`. These skills form the core of dynamic React apps.

Tomorrow: we’ll move on to **React Router** and build multi-page navigation! 🚀

```

---
