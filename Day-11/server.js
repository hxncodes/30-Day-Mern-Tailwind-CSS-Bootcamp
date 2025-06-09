import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger.js';
import connectDB from './config/db.js';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import {protect} from './middlewares/authMiddleware.js'
import goalRoutes from './routes/goalRoutes.js'

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/auth', authRoutes);

// Protected example route
app.get('/api/protected', protect, (req, res) => {
  res.json({ message: 'Protected route accessed', user: req.user });
});


app.use('/api/goals', goalRoutes);

app.listen(PORT, () => {
  logger.server(`Server running on http://localhost:${PORT}`);
});