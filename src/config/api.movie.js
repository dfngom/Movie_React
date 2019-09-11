import * as axios from 'axios';


const apiMovie = axios.create({
    // baseURL: 'https://api.themoviedb.org/4'
})

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA1ZGI1YzUwOTI4ZmE5OTU2YzkzOGUwZmFlODEyNSIsInN1YiI6IjVkNzdmNGRkNmJkZWMzMDAxMDU0MzBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l3B1TffQB_zOTHwKZQdmzusPyKUDBBA48IIPeYLjXVc';

    return req;
})

export default apiMovie;