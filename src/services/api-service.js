import axios from 'axios';
import { BASE_URL, API_KEY } from "../services/constants";

axios.defaults.baseURL = BASE_URL;
        
export async function fetchTrandingMovies() {
    const url = `/trending/movie/week?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
   
    return data.results;    
}

export async function fetchSearchMovies(seacrhQuery) {
    const url = `/search/movie?api_key=${API_KEY}&query=${seacrhQuery}&language=en-US&page=1&include_adult=false`;
    const { data } = await axios.get(url);
    return data.results; 
}

export async function fetchMovieInformation(movieId) {
    const url = `/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(url);
    return data; 
}

export async function fetchCastInformation(movieId) {
    const url = `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;
    const { data } = await axios.get(url);
    return data.cast;

}

export async function fetchReviews(movieId) {
    const url = `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    const { data } = await axios.get(url);
    return data.results;

}
    