import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`;

export const getUsers = async () => {
  const response = await axios(withBaseUrl('/users.json'));
  return response.data;
};

export const getUserById = async (userId) => {
  const response = await axios(withBaseUrl(`/users/${userId}.json`));
  return response.data;
};

export const findUserByEmailAndPassword = async (email, password) => {
  const users = await getUsers();

  for (const userId in users) {
    const user = users[userId];

    if (user.email === email && user.senha === password) {
      return {
        id: userId,
        ...user
      };
    }
  }

  return null;
};

