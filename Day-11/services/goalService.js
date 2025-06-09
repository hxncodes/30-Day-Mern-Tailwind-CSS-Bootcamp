import Goal from '../models/Goal.js';

const getGoals = async () => await Goal.find();
const createGoal = async (text) => await Goal.create({ text });
const deleteGoal = async (id) => await Goal.findByIdAndDelete(id);

export default {
  getGoals,
  createGoal,
  deleteGoal,
};