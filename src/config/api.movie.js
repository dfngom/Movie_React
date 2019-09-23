import * as axios from 'axios';


const apiMovie = axios.create({
    // baseURL: 'https://api.themoviedb.org/4'
});

apiMovie.interceptors.request.use(req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA1ZGI1YzUwOTI4ZmE5OTU2YzkzOGUwZmFlODEyNSIsInN1YiI6IjVkNzdmNGRkNmJkZWMzMDAxMDU0MzBkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l3B1TffQB_zOTHwKZQdmzusPyKUDBBA48IIPeYLjXVc';

    return req;
});

export const apiMovie;



export const apiMovieMap = (m) => ({
    img: 'https://image.tmdb.org/t/p/w500' + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
});


export default {
    searchMovies: (filter) => {
        const query = '?' + Object.keys(values).map(k => `${k}=${values[k]}&`).join('');
        return apiMovie.get('/search/movie' + query)
            .then(response => response.data.results)
            .then(moviesApi => moviesApi.map(apiMovieMap))
    }
}

