import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export class UsersService {

    static getUsers() {
        /* chama o axios, oferecendo como parametro o whitBaseUrl*/
        
        return axios(withBaseUrl('/users.json'))
    }
    static async getUserById(userId) {
      const response = await axios(withBaseUrl(`/users/${userId}.json`));
      return response.data;
    }

}

export default UsersService;
