import { useState } from 'react';

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [text, setText] = useState('');

  const addGoal = () => {
    if (text.trim()) {
      setGoals([...goals, { id: Date.now(), text }]);
      setText('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Your Goals</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border px-2 py-1 flex-1 rounded dark:bg-slate-700"
          placeholder="Enter goal..."
        />
        <button onClick={addGoal} className="bg-[var(--color-primary)] text-white px-3 py-1 rounded">
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {goals.map((goal) => (
          <li key={goal.id} className="border p-2 rounded dark:bg-slate-800">
            {goal.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

