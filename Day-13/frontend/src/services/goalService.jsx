import axios from 'axios';

const API_URL = 'http://localhost:5000/api/goals';

export const getGoals = async (token) => {
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const createGoal = async (text, token) => {
  const res = await axios.post(
    API_URL,
    { text },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};

export const deleteGoal = async (id, token) => {
  const res = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};