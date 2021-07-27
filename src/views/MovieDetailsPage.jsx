import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import { fetchMovieInformation} from "../services/api-service";
// import CastView from "./CastView";
// import ReviewsView from "./ReviewsView";
import MovieInfo from "../components/MovieInfo";
import { Link } from "../components/Navigation/Navigation.styled";
import Spinner from "../components/Spinner";

const CastView = lazy(() => import("./CastView" /* webpackChunkName: "cast-view" */));
const ReviewsView = lazy(() => import("./ReviewsView" /* webpackChunkName: "reviews-view" */));

function MovieDetailsPage() {
    const { url, path } = useRouteMatch();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function getMovieInformation() {
            const movie = await fetchMovieInformation(movieId);

            setMovie(movie);
        }
        getMovieInformation();
    }, [movieId])

    return (
        <>
            <Link to={`${url}`}>Go back</Link>
            { movie && <MovieInfo movie={movie}/>}

            <Link to={`${url}/cast`}>Cast</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>

            <Suspense fallback={<Spinner/>}>
            <Route path={`${path}/cast`}>
                <CastView/>
            </Route>
            <Route path={`${path}/reviews`}>
                <ReviewsView />
            </Route>
            </Suspense>
        </>
    )
}

export default MovieDetailsPage;
