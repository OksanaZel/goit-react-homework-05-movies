import React from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { Card, Image, CardTitle, MovieLink, CardInfo, MovieCardInfo } from "./MovieCard.styled";
import defaultImage from "../images/defaultMovie.png";

function MovieCard({ id, poster, title, date, rating, genres}) {

    return (
        <Card>
            <MovieLink to={`/movies/${id}`}>
                <Image src={poster ? `https://image.tmdb.org/t/p/original${poster}` : defaultImage} alt={title} />
                </MovieLink>
            <CardTitle>{title}</CardTitle>
            <CardInfo>
                
                <MovieCardInfo>{`${genres} | ${date.substring(0, 4)}`}</MovieCardInfo>
                <MovieCardInfo><AiFillStar/> {rating}</MovieCardInfo>
            </CardInfo>
            
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    rating: PropTypes.number,
    genres: PropTypes.array,
}

export default MovieCard;
