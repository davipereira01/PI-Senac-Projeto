import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`;

export const getFriends = () => {
  return axios.get(withBaseUrl('/friends.json'));
};
