import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export class StoresService {

    static getStores() {
        /* chama o axios, oferecendo como parametro o whitBaseUrl*/
        
        return axios(withBaseUrl('/stores.json'))
    }

}

export default StoresService;

