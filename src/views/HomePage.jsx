import React, { useState, useEffect } from "react";
import { fetchTrandingMovies } from "../services/api-service";
import MovieCardList from "../components/MovieCardList/MovieCardList";

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getFetchMovies() {
    try {
        const movies = await fetchTrandingMovies();
        setMovies(movies);
        
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
    },[])

    return (
        <MovieCardList movies={movies}/>
    )
}

export default HomePage;