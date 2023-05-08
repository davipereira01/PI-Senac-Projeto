import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export class UsersService {

    static getUsers() {
        /* chama o axios, oferecendo como parametro o whitBaseUrl*/
        /* chama o withBaseUrl, oferecendo como parametro o tipo de filme */
        
        return axios(withBaseUrl('/users.json'))
    }

}

export default UsersService;

