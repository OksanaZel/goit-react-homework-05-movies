import React, { useState, useEffect } from "react";
import { useHistory, useLocation} from "react-router";
import toast from 'react-hot-toast';
import { fetchSearchMovies } from "../services/api-service";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieCardList from "../components/MovieCardList/MovieCardList"

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
 
  const [movies, setMovies] = useState([]);
  
  const searchQuery = new URLSearchParams(location.search).get("query")

    useEffect(() => {
    if (!searchQuery) {
      return
    }

    async function getFetchMovies() {

      try {
        const movies = await fetchSearchMovies(searchQuery);

        if (!movies.length) {
          throw new Error("No results found");
        }
        
        setMovies(movies);
        
      } catch (error) {
        console.log(error);
        toast.error("No results found")
      }
    }
    getFetchMovies();

    }, [searchQuery]);
    
    const handleFormSubmit = query => {
    if (searchQuery === query) {
      return
      }
      
      setMovies([]);
    
      history.push({
            ...location,
            search: `query=${query}`
        })
  };

    return (
        <>
        <SearchBar onSubmit={handleFormSubmit}></SearchBar>
        <MovieCardList movies={movies}/>
        {/* <ul>
            {movies.map(({id,title}) => (
                <li key={id}>
                    <Link to={`${url}/${id}`}>{title}</Link></li>
            ))}
            </ul> */}
            </>
    )
}

export default MoviesPage;

