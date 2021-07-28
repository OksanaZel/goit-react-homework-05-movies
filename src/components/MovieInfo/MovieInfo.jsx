import React from "react";
import { useRouteMatch} from "react-router-dom";
import PropTypes from "prop-types";
import { Link } from "../Navigation/Navigation.styled";
import { Image, MovieInfoWrappet, MovieInfoContainer, MovieTitle, MovieOverview } from "./MovieInfo.styled";
import defaultImage from "../images/default.png";

function MovieInfo({ movie }) {
    const { url } = useRouteMatch();

    const { poster_path, title, overview, release_date, popularity, vote_average } = movie;
    return (
        <MovieInfoContainer>
            <Image src={poster_path ?`https://image.tmdb.org/t/p/original${poster_path}`: defaultImage} alt={title} />
            <MovieInfoWrappet>
                <MovieTitle>{title}</MovieTitle>
                
                <p>{popularity}</p>
                <p>{vote_average}</p>
                <p>{release_date}</p>
                <MovieOverview>{overview}</MovieOverview>

                <Link to={`${url}/cast`}>Cast</Link>
                <Link to={`${url}/reviews`}>Reviews</Link>
                
            </MovieInfoWrappet>
        </MovieInfoContainer>
        
    )
}

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        poster_path: PropTypes.string,
        overview: PropTypes.string,
        release_date: PropTypes.string,
        popularity: PropTypes.number,
        vote_average: PropTypes.number,
    }),
}

export default MovieInfo;
