import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import { Card, Image, CardTitle } from "./MovieCard.styled";
import defaultImage from "../images/default.jpg";

function MovieCard({ id, poster, title }) {
    // const location = useLocation();
    // console.log(location);

    return (
        <Card>
            <Link to={`/movies/${id}`}>
            <Image src={poster?`https://image.tmdb.org/t/p/original${poster}`:defaultImage} alt={title} />
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
