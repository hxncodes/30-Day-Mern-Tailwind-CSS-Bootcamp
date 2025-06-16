import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getGoals, createGoal, deleteGoal } from '../services/goalService';

function Goals() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');
  const { token } = useContext(AuthContext);

  useEffect(() => {
    if (token) {
      getGoals(token).then(setGoals);
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newGoal = await createGoal(text, token);
    setGoals([newGoal, ...goals]);
    setText('');
  };

  const handleDelete = async (id) => {
    await deleteGoal(id, token);
    setGoals(goals.filter((goal) => goal._id !== id));
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Goals</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter goal"
          className="border p-2 w-full rounded mb-2"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Goal
        </button>
      </form>

      <ul className="space-y-2">
        {goals.map((goal) => (
          <li
            key={goal._id}
            className="flex justify-between items-center p-2 border rounded"
          >
            <span>{goal.text}</span>
            <button
              onClick={() => handleDelete(goal._id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;