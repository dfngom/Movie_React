import * as axios from 'axios';
import { apiMovie } from './api.movie';

const apiFirebase = axios.create({
    baseURL: 'https://films-566b7.firebaseio.com/'
});

export const apiFirebase;

export default {
    fetchFavoris: () => apiFirebase.get('favoris.json').then(
        response => response.data ? response.data : []
    ),
    saveFavoris = favoris => () => apiFirebase.put('favoris.json', favoris)
}