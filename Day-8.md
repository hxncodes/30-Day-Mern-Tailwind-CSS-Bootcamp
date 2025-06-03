# Day 8 - Backend Setup (Node.js, Express, MongoDB)

## Goal:

Set up a scalable, modular backend using **Node.js**, **Express**, and **MongoDB** with Mongoose. Prepare REST APIs that the frontend can consume later.

---

## ✅ Tasks for Day 8

### 1. **Project Initialization**

```bash
mkdir backend && cd backend
npm init -y
```

### 2. **Install Required Packages**

```bash
npm install express mongoose dotenv cors
npm install --save-dev nodemon
```

### 3. **Folder Structure**

```
backend/
│
├── controllers/
├── models/
├── routes/
├── config/
├── .env
├── server.js
└── package.json
```

### 4. **server.js (Entry Point)**

```js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### 5. **Connect to MongoDB (config/db.js)**

```js
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
```

### 6. **.env File**

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 7. **Sample Model (models/Goal.js)**

```js
import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Goal = mongoose.model('Goal', goalSchema);
export default Goal;
```

### 8. **Sample Controller (controllers/goalController.js)**

```js
import Goal from '../models/Goal.js';

export const getGoals = async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
};

export const setGoal = async (req, res) => {
  const goal = await Goal.create({ text: req.body.text });
  res.status(201).json(goal);
};
```

### 9. **Sample Routes (routes/goalRoutes.js)**

```js
import express from 'express';
import { getGoals, setGoal } from '../controllers/goalController.js';

const router = express.Router();

router.route('/').get(getGoals).post(setGoal);

export default router;
```

### 10. **Use Routes in server.js**

```js
import goalRoutes from './routes/goalRoutes.js';
...
app.use('/api/goals', goalRoutes);
```

---

## 🧪 Test API using Postman

* GET `http://localhost:5000/api/goals`
* POST `http://localhost:5000/api/goals`

  ```json
  {
    "text": "Learn Full-Stack Development"
  }
  ```

---

## ✅ What’s Next?

In **Day 9**, we’ll add:

* Authentication (JWT + bcrypt)
* Protect routes using middleware
* Link backend to our React frontend from Day 7
