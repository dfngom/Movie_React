import * as axios from 'axios';
import { apiMovie } from './api.movie';

const apiFirebase = axios.create({
    baseURL: 'https://films-566b7.firebaseio.com/'
});

export default apiFirebase;