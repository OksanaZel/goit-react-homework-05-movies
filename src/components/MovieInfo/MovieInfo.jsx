import React from "react";
import { useRouteMatch} from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "../Navigation/Navigation.styled";
import { Image, MovieInfoWrappet, MovieInfoContainer, MovieTitle, MovieSubTitle, MovieParams } from "./MovieInfo.styled";
import defaultImage from "../images/defaultMovie.png";

function MovieInfo({ poster, title, overview, releaseDate, popularity, vote, genres }) {
    const { url } = useRouteMatch();

    // const { poster, title, overview, releaseDate, popularity, vote } = movie;
    return (
        <MovieInfoContainer>
            <Image src={poster ?`https://image.tmdb.org/t/p/original${poster}`: defaultImage} alt={title} />
            <MovieInfoWrappet>
                <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
                <MovieSubTitle>Vote</MovieSubTitle>
                <MovieParams>{vote}</MovieParams>
                <MovieSubTitle>Popularity</MovieSubTitle>
                <MovieParams>{popularity}</MovieParams>
                <MovieSubTitle>Overview</MovieSubTitle>
                <MovieParams>{overview}</MovieParams>
                <MovieSubTitle>Genres</MovieSubTitle>
                <MovieParams>{genres}</MovieParams>

                <Link to={`${url}/cast`}>Cast</Link>
                <Link to={`${url}/reviews`}>Reviews</Link>
                
            </MovieInfoWrappet>
        </MovieInfoContainer>
        
    )
}

MovieInfo.propTypes = {
   
        title: PropTypes.string,
        poster: PropTypes.string,
        overview: PropTypes.string,
        releaseDate: PropTypes.string,
        popularity: PropTypes.number,
    vote: PropTypes.number,
        genres:PropTypes.array,
   
}

export default MovieInfo;
