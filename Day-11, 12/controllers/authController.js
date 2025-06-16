import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists) { logger.warn(`Email already registered: ${email}`);
      return res.status(400).json({ message: 'Email already registered' });}

    const user = await User.create({ username, email, password });
    const token = generateToken(user._id);
    logger.success(`User registered: ${user.email}`);
    res.status(201).json({ user: { id: user._id, username, email }, token });
  } catch (err) {
    logger.error(`Register Error: ${err.message}`);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {logger.error(`User not found: ${email}`);
      return res.status(404).json({ message: 'User not found' });}

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);
    res.json({ user: { id: user._id, username: user.username }, token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
};
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};