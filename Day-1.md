
# 📅 Day 1: Modern JavaScript Refresher (ES6+)

Today’s goal is to refresh understanding of **modern JavaScript (ES6+)**, the foundation of React and Node.js. We'll go over syntax enhancements, new features, and functional programming patterns.

---

## 🧠 Topics Covered

- `let`, `const` vs `var`
- Arrow functions `()=>{}`
- Template literals `` `${}` ``
- Destructuring (objects and arrays)
- Spread and Rest operators
- Array methods (`map`, `filter`, `reduce`, `find`)
- Async/Await & Promises

---

## 🔹 let / const vs var

```js
var x = 10; // function scoped
let y = 20; // block scoped
const z = 30; // block scoped, cannot be reassigned
```

---

## 🔹 Arrow Functions

```js
const greet = name => `Hello, ${name}`;
```

---

## 🔹 Template Literals

```js
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
```

---

## 🔹 Destructuring

```js
const user = { name: "Alice", age: 25 };
const { name, age } = user;

const nums = [1, 2, 3];
const [first, second] = nums;
```

---

## 🔹 Spread and Rest

```js
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const combined = { ...obj1, ...obj2 };

function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
```

---

## 🔹 Array Methods

```js
const nums = [1, 2, 3, 4, 5];

// map
const doubled = nums.map(n => n * 2);

// filter
const evens = nums.filter(n => n % 2 === 0);

// reduce
const total = nums.reduce((acc, n) => acc + n, 0);

// find
const found = nums.find(n => n > 3);
```

---

## 🔹 Async / Await

```js
const getData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

getData();
```

---

## 🧪 Practice Exercise

- Write a function that takes an array and returns an object with even and odd numbers separated.
- Use `map`, `filter`, `reduce` in a meaningful example.
- Make an API call with `fetch` and display a specific post.

---

## ✅ Summary

Now we have a strong grasp of ES6+ JavaScript features essential for building with React and Node.js. Tomorrow, we dive into **React Basics**! 🚀
