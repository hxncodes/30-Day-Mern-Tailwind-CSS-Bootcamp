import asyncHandler from '../middlewares/asyncHandler.js';
import goalService from '../services/goalService.js';
import logger from '../utils/logger.js';
import Goal from '../models/Goal.js';

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

export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  logger.info(`Attempting to update goal with ID: ${req.params.id}`);

  if (!goal) {
    logger.error(`❌ Goal not found with ID: ${req.params.id}`);
    res.status(404);
    throw new Error('Goal not found');
  }

  // Ensure user is owner
  // if (goal.user.toString() !== req.user.id) {
  //   logger.warn(`⚠️ Unauthorized update attempt by user: ${req.user.id}`);
  //   res.status(401);
  //   throw new Error('User not authorized');
  // }

  const updatedGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  );

  logger.success(`✅ Goal updated by user: req.user.id | Goal ID: ${req.params.id}`);
  res.status(200).json(updatedGoal);
});


export const deleteGoal = asyncHandler(async (req, res) => {
  const result = await goalService.deleteGoal(req.params.id);
  logger.info(`Attempting to delete goal with ID: ${req.params.id}`);
  if (!result) throw new Error('Goal not found');
  logger.warn(`Goal with ID ${req.params.id} deleted`);
  res.json({ message: 'Goal deleted' });
});