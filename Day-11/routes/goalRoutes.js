import express from 'express';
import { getGoals, setGoal } from '../controllers/goalController.js';

const router = express.Router();

router.route('/').get(getGoals).post(setGoal);

export default router;