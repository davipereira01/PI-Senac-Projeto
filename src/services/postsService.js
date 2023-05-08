import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export class PostsService {

    static getPosts() {

       
        return axios(withBaseUrl('/posts.json'))
    }

}

export default PostsService;