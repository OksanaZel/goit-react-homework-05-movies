import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, useParams, useRouteMatch, useHistory } from "react-router-dom";
import { fetchMovieInformation} from "../services/api-service";
import {Button }from "../components/App/App.styled";
import MovieInfo from "../components/MovieInfo";
import Spinner from "../components/Spinner";

const CastView = lazy(() => import("./CastView" /* webpackChunkName: "cast-view" */));
const ReviewsView = lazy(() => import("./ReviewsView" /* webpackChunkName: "reviews-view" */));

function MovieDetailsPage() {
    const { path } = useRouteMatch();
    const history = useHistory();

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        async function getMovieInformation() {
            const movie = await fetchMovieInformation(movieId);

            setMovie(movie);
        }
        getMovieInformation();
    }, [movieId])

    return (
        <>
            <Button type="button" onClick={() => history.goBack()}>Go back</Button>

            {movie && <MovieInfo
                title={movie.title}
                poster={movie.poster_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
                popularity={movie.popularity}
                vote={movie.vote_average}
                genres={movie.genres.map((genre) => genre.name).join(", ")}
            />}

            
            <Suspense fallback={<Spinner />}>
                <Route path={`${path}/cast`}>
                    <CastView />
                </Route>
                <Route path={`${path}/reviews`}>
                    <ReviewsView />
                </Route>
            </Suspense>
        </>
    )
}

export default MovieDetailsPage;
