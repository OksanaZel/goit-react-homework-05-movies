import React from "react";
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { List } from "./MovieCardList.styled";
import MovieCard from "../MovieCard"

function MovieCardList({movies}) {
    return (
        <List>
            {movies.map(({id, poster_path, title}) => (
                <MovieCard
                    key={id}
                    id={id}
                    poster={poster_path}
                    title={title}/>
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
