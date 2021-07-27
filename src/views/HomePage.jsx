import React, { useState, useEffect } from "react";
// import { Link, useRouteMatch } from "react-router-dom";
import { fetchTrandingMovies } from "../services/api-service";
import MovieCardList from "../components/MovieCardList/MovieCardList";

function HomePage() {
    // const params = useRouteMatch();
    // console.log(params);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getFetchMovies() {
    try {
        const movies = await fetchTrandingMovies();
        // console.log(movies)
        
        setMovies(movies);
        
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMovies();
    },[])

    return (
        <MovieCardList movies={movies}/>
        // <ul>
        //     {movies.map(({id,title}) => (
        //         <li key={id}>
        //             <Link to={`/movies/${id}`}>{title}</Link></li>
        //     ))}
        // </ul>
    )
}

export default HomePage;