# 🚀 Day 10: API Testing with Postman + Professional Console Logging with Chalk

In this session, we will:

* Test your API endpoints using **Postman**.
* Improve developer experience by using **chalk** to log messages with clear color coding.
* Clean up console logs to look more professional and meaningful.

---

## 📦 Folder Structure (Backend Preview)

```txt
server/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── utils/
│   └── logger.js  <-- NEW
├── .env
├── server.js
└── package.json
```

---

## 🔧 1. Install `chalk`

```bash
npm install chalk
```

---

## 🧠 2. Create a Logger Utility (`utils/logger.js`)

```js
// utils/logger.js
import chalk from 'chalk';

const logger = {
  info: (msg) => console.log(chalk.blueBright.bold('[INFO]'), chalk.blue(msg)),
  success: (msg) => console.log(chalk.green.bold('[SUCCESS]'), chalk.greenBright(msg)),
  error: (msg) => console.log(chalk.red.bold('[ERROR]'), chalk.redBright(msg)),
  warn: (msg) => console.log(chalk.yellow.bold('[WARNING]'), chalk.yellowBright(msg)),
  db: (msg) => console.log(chalk.magenta.bold('[DB]'), chalk.magentaBright(msg)),
  server: (msg) => console.log(chalk.cyan.bold('[SERVER]'), chalk.cyanBright(msg)),
};

export default logger;
```

---

## 🌐 3. Update `server.js` to Use Logger

```js
// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import logger from './utils/logger.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => logger.db('MongoDB connected successfully'))
  .catch((err) => logger.error(`MongoDB connection error: ${err.message}`));

app.listen(PORT, () => {
  logger.server(`Server running on http://localhost:${PORT}`);
});
```

---

## 🔍 4. Test API Using Postman

### 🟢 POST `/api/auth/register`

* **Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

* Expected: `{ token: "JWT_TOKEN" }`

### 🔵 POST `/api/auth/login`

* **Body (JSON):**

```json
{
  "email": "john@example.com",
  "password": "123456"
}
```

* Expected: `{ token: "JWT_TOKEN" }`

### 🔒 GET `/api/auth/profile` (Protected)

* Add `Authorization: Bearer <your-token>` in Headers
* Expected: User info in response

---

## ✅ Bonus: Add Logs in `authController.js`

```js
// controllers/authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      logger.warn(`Registration attempt for existing email: ${email}`);
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    logger.success(`User registered: ${user.email}`);
    res.status(201).json({ token });
  } catch (err) {
    logger.error(`Register Error: ${err.message}`);
    res.status(500).json({ message: 'Server error' });
  }
};
```

---

## 📝 Summary

| Feature                             | Done |
| ----------------------------------- | ---- |
| Setup chalk                         | ✅    |
| Color-coded logs                    | ✅    |
| Logger utility                      | ✅    |
| Tested all auth routes with Postman | ✅    |
| Clean & pro-level developer console | ✅    |

---

Next: Day 11 → Frontend Integration using Axios + Context Hook.