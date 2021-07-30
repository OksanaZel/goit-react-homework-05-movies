import React, { useState, useEffect } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchTrandingMovies } from "../services/api-service";
import MovieCardList from "../components/MovieCardList/MovieCardList";
// import Pagination from "../components/Pagination/Pagination";

function HomePage() {
  const [movies, setMovies] = useState([]);
  const { isExact } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    
    if (!isExact) {
      history.push("/");
      toast.error("Page not found", {duration: 3000});
    }
    
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
      <>
      <MovieCardList movies={movies} />
      {/* <Pagination totalPages={totalPages}/> */}
      </>
    )
}

export default HomePage;