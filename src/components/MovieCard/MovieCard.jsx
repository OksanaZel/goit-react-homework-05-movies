import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Card, Image, CardTitle} from "./MovieCard.styled"

function MovieCard({ id, poster, title }) {
    // const location = useLocation();
    // console.log(location);

    return (
        <Card>
            <Link to={`/movies/${id}`}>
            <Image src={`https://image.tmdb.org/t/p/original${poster}`} alt={title} />
            <CardTitle>{title}</CardTitle>
            </Link>
        </Card>
    )
}

MovieCard.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string,
    title: PropTypes.string.isRequired,
}

export default MovieCard;
