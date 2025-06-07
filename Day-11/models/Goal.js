import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Goal = mongoose.model('Goal', goalSchema);
export default Goal;