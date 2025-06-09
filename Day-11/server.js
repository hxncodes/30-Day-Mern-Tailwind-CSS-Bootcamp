import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import {protect} from './middlewares/authMiddleware.js'
import goalRoutes from './routes/goalRoutes.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

// Routes
app.use('/api/auth', authRoutes);

// Protected example route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});

app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/goals', goalRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));