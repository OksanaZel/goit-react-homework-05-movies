import React, { useState, useEffect } from "react";
import { useHistory, useLocation} from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchSearchMovies } from "../services/api-service";
import SearchBar from "../components/SearchBar/SearchBar";
import MovieCardList from "../components/MovieCardList/MovieCardList";
import Pagination from "../components/Pagination/Pagination";

function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(null)
  
  const searchQuery = new URLSearchParams(location.search).get("query");
  const currentPage = Number(new URLSearchParams(location.search).get("page"));
  console.log(currentPage);
  useEffect(() => {
      
    if (!searchQuery) {
      return;
    }

    async function getFetchMovies() {
      try {
        const data = await fetchSearchMovies(searchQuery, currentPage);
        const { results, total_pages } = data;

        if (!results.length) {
          throw new Error("No results found");
        }
        
        setMovies(results);
        setTotalPages(total_pages);
        
      } catch (error) {
        console.log(error);
        toast.error("No results found", {duration: 3000})
      }
    }
    getFetchMovies();

    }, [searchQuery, currentPage]);
    
    const handleFormSubmit = query => {
    if (searchQuery === query) {
      return;
      }
      
      setMovies([]);
    
      history.push({
            ...location,
            search: `query=${query}&page=1`
        })
  };

  const handlePageClick = ({ selected }) => {
    history.push({
      ...location,
      search: `query=${searchQuery}&page=${selected + 1}`,
    })
  }

  return (
    <>
      <SearchBar onSubmit={handleFormSubmit}></SearchBar>
        {movies && 
        <>
          <MovieCardList movies={movies} />
          <Pagination totalPages={totalPages} onClick={handlePageClick} />
        </>}
  </>  
    )
}

export default MoviesPage;

