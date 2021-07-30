import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchGenresList } from "../../services/api-service";
import { List } from "./MovieCardList.styled";
import MovieCard from "../MovieCard";

function MovieCardList({ movies }) {
    const [genres, setGenres] = useState(null);

    useEffect(() => {
        async function getFetchGenresList() {
    try {
        const genres = await fetchGenresList();
        setGenres(genres);
        
      } catch (error) {
        console.log(error);
      }
    }
    getFetchGenresList();
    }, [])
    
    return (
        <List>
            {genres && movies.map(({id, poster_path, title, release_date, vote_average, genre_ids}) => (
                <MovieCard
                    key={id}
                    id={id}
                    poster={poster_path}
                    title={title}
                    date={release_date}
                    rating={vote_average}
                    genres={genres.filter((genre) => genre_ids.includes(genre.id)).slice(0,3).map((genre) => genre.name)}/>
            ))}
            </List>
    )
}

MovieCardList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
}

export default MovieCardList;
