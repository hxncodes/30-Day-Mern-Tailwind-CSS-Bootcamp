import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';

const router = express.Router();


router.route('/')
  .get(protect, getGoals)
  .post(protect, createGoal);
router.route('/:id')
  .put(protect, updateGoal)
  .delete(protect, deleteGoal);



export default router;