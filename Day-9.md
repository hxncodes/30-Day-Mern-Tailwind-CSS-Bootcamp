# 📅 Day 9: Authentication (JWT + bcrypt + Protected Routes)

**Goal:** Set up user authentication using JWT, bcrypt for password hashing, and middleware to protect routes.

---

## ✅ What You'll Learn

* How to create a secure user model with hashed passwords
* How to implement JWT-based authentication (Login & Register)
* How to create protected routes using middleware
* Best practices for security (tokens, validation)

---

## 📁 Project Structure (Backend Only)

```bash
backend/
├── controllers/
│   └── authController.js
├── middlewares/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── server.js
└── config/
    └── db.js
```

---

## 1️⃣ User Model (models/User.js)

```js
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model('User', userSchema);
```

---

## 2️⃣ Auth Controller (controllers/authController.js)

```js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'Email already registered' });

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    res.status(201).json({ user: { id: user._id, username, email }, token });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);
    res.json({ user: { id: user._id, username: user.username }, token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
```

---

## 3️⃣ Auth Middleware (middlewares/authMiddleware.js)

```js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
  }
};
```

---

## 4️⃣ Auth Routes (routes/authRoutes.js)

```js
import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
```

---

## 5️⃣ Integration in server.js

```js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import { protect } from './middlewares/authMiddleware.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected example route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

// Connect DB & start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => console.log('Server started')))
  .catch(err => console.error(err));
```

---

## 6️⃣ Environment Variables (.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mern-auth
JWT_SECRET=your_jwt_secret_key
```

---

## ✅ Testing in Postman

* **Register:** POST `/api/auth/register` with `{ username, email, password }`
* **Login:** POST `/api/auth/login` with `{ email, password }`
* **Access Protected Route:** GET `/api/protected` with `Bearer <token>` header

---

## 🧠 Summary

* Used `bcrypt` to hash and verify passwords
* Used `jsonwebtoken` to sign and verify tokens
* Protected API routes with middleware
* Modular, clean structure


