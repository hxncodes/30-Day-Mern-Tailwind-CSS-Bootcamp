import asyncHandler from 'express-async-handler';
import Goal from '../models/Goal.js';
import logger from '../utils/logger.js'; // uses Chalk for styled logging

// @desc    Get all goals for logged-in user
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  logger.info(`📥 Goals fetched for user ${req.user.id}`);
  res.status(200).json(goals);
});

// @desc    Create a new goal
// @route   POST /api/goals
// @access  Private
export const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    logger.warn('⚠️ Text field is required');
    res.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  logger.success(`✅ Goal created by user ${req.user.id}`);
  res.status(201).json(goal);
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    logger.error('❌ Goal not found for update');
    res.status(404);
    throw new Error('Goal not found');
  }

  // Check ownership
  if (goal.user.toString() !== req.user.id) {
    logger.warn(`🚫 Unauthorized update attempt by ${req.user.id}`);
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { text: req.body.text },
    { new: true }
  );

  logger.success(`✏️ Goal updated: ${updatedGoal.text}`);
  res.status(200).json(updatedGoal);
});

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    logger.error('❌ Goal not found for deletion');
    res.status(404);
    throw new Error('Goal not found');
  }

  if (goal.user.toString() !== req.user.id) {
    logger.warn(`🚫 Unauthorized delete attempt by ${req.user.id}`);
    res.status(401);
    throw new Error('User not authorized');
  }

  await goal.deleteOne();

  logger.success(`🗑️ Goal deleted: ${goal._id}`);
  res.status(200).json({ id: req.params.id });
});
