import React from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { Card, Image, CardTitle, MovieLink, CardInfo, Date, Star } from "./MovieCard.styled";
import defaultImage from "../images/default.jpg";

function MovieCard({ id, poster, title, date, rating}) {
    // const location = useLocation();
    // console.log(location);

    return (
        <Card>
            <MovieLink to={`/movies/${id}`}>
                <Image src={poster ? `https://image.tmdb.org/t/p/original${poster}` : defaultImage} alt={title} />
                </MovieLink>
            <CardTitle>{title}</CardTitle>
            <CardInfo>
                
                <Date>{date.substring(0, 4)}</Date>
                
                <Star><AiFillStar/> {rating}</Star>
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
}

export default MovieCard;
