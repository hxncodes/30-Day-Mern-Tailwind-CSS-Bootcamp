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
  .get(getGoals)
  .post(createGoal);
router.route('/:id')
  .put(updateGoal)
  .delete(deleteGoal);



export default router;