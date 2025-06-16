Here's your complete **Day-11.md** file, continuing from Day 10 and incorporating analysis from your use of the Chalk library for professional logging.

---

# 📘 Day-11: **RESTful API - Controllers, Services & Error Handling (Professional Structure)**

> **Goal:** Structure your backend API with **controllers**, **services**, **centralized error handling**, and clean logging using **Chalk** for professional-level Node.js applications.

---

## ✅ What You'll Learn

* API controller-service structure
* Creating reusable services
* Middleware-based error handling
* Advanced Chalk usage for logging
* Professional project file organization

---

## 🗂 Updated Project Structure

```bash
backend/
├── controllers/
│   └── goalController.js
├── services/
│   └── goalService.js
├── middleware/
│   ├── errorMiddleware.js
│   └── asyncHandler.js
├── routes/
│   └── goalRoutes.js
├── config/
│   └── db.js
├── utils/
│   └── logger.js
├── models/
│   └── Goal.js
├── server.js
├── .env
└── package.json
```

---

## 🧱 Step-by-Step Code

### 1. `utils/logger.js` — Custom Logging Utility with Chalk

```js
import chalk from 'chalk';

const logger = {
  info: (msg) => console.log(chalk.blue.bold('[INFO]'), msg),
  db: (msg) => console.log(chalk.magenta.bold('[DB]'), msg),
  success: (msg) => console.log(chalk.green.bold('[SUCCESS]'), msg),
  warn: (msg) => console.log(chalk.yellow.bold('[WARN]'), msg),
  error: (msg) => console.error(chalk.red.bold('[ERROR]'), msg),
};

export default logger;
```

---

### 2. `middleware/asyncHandler.js` — Async Error Wrapper

```js
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
```

---

### 3. `middleware/errorMiddleware.js` — Centralized Error Handler

```js
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

export default errorHandler;
```

---

### 4. `services/goalService.js` — Business Logic

```js
import Goal from '../models/Goal.js';

const getGoals = async () => await Goal.find();
const createGoal = async (text) => await Goal.create({ text });
const deleteGoal = async (id) => await Goal.findByIdAndDelete(id);

export default {
  getGoals,
  createGoal,
  deleteGoal,
};
```

---

### 5. `controllers/goalController.js`

```js
import asyncHandler from '../middleware/asyncHandler.js';
import goalService from '../services/goalService.js';
import logger from '../utils/logger.js';

export const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalService.getGoals();
  logger.success('Fetched goals');
  res.json(goals);
});

export const createGoal = asyncHandler(async (req, res) => {
  const goal = await goalService.createGoal(req.body.text);
  logger.success('Goal created');
  res.status(201).json(goal);
});

export const deleteGoal = asyncHandler(async (req, res) => {
  const result = await goalService.deleteGoal(req.params.id);
  if (!result) throw new Error('Goal not found');
  logger.warn(`Goal with ID ${req.params.id} deleted`);
  res.json({ message: 'Goal deleted' });
});
```

---

### 6. `routes/goalRoutes.js`

```js
import express from 'express';
import {
  getGoals,
  createGoal,
  deleteGoal,
} from '../controllers/goalController.js';

const router = express.Router();

router.route('/').get(getGoals).post(createGoal);
router.route('/:id').delete(deleteGoal);

export default router;
```

---

### 7. `server.js`

```js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import goalRoutes from './routes/goalRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import logger from './utils/logger.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
```

---

## 🧪 Testing with Postman

1. **GET** `/api/goals`
2. **POST** `/api/goals` → `{ "text": "Finish MERN Project" }`
3. **DELETE** `/api/goals/:id`

---

## 💡 Key Concepts Recap

| Concept           | Purpose                       |
| ----------------- | ----------------------------- |
| `controllers/`    | Handle HTTP logic             |
| `services/`       | Business logic layer          |
| `middleware/`     | Reusable error/async handling |
| `utils/logger.js` | Pretty logs using Chalk       |

---

## ✅ Task for Day-11

* Refactor your project to follow this structure
* Add at least one more controller-service pair (e.g., users)
* Make sure your logs show in different colors

---

## 📌 Coming Up Next (Day-12)

* JWT-based Auth Middleware
* Protected Routes
* Login & Register Controllers
* Secure Routes & Tokens

---