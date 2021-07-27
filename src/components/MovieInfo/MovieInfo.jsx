import React from "react";
import PropTypes from "prop-types";
import { Image, MovieInfoWrappet, MovieInfoContainer, MovieTitle, MovieOverview } from "./MovieInfo.styled";

function MovieInfo({ movie }) {
    const { poster_path, title, overview } = movie;
    return (
        <MovieInfoContainer>
            <Image src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={title} />
            <MovieInfoWrappet>
                <MovieTitle>{title}</MovieTitle>
                <MovieOverview>{overview}</MovieOverview>
            </MovieInfoWrappet>
            
        </MovieInfoContainer>
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
    }),
}

export default MovieInfo;