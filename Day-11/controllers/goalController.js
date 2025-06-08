import Goal from '../models/Goal.js';

export const getGoals = async (req, res) => {
  const goals = await Goal.find();
  res.json(goals);
};

export const setGoal = async (req, res) => {
  const goal = await Goal.create({ text: req.body.text });
  res.status(201).json(goal);
};