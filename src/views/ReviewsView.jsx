import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { fetchReviews } from "../services/api-service";
import Reviews from "../components/Reviews/Reviews";

function ReviewsView() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null)

    useEffect(() => {
        async function getReviews() {

            try {
            const reviews = await fetchReviews(movieId);
            
                if (!reviews.length) {
                    throw new Error("No reviews found");
                }

            setReviews(reviews);
                
            } catch (error) {
                toast.error("No reviews found");
                console.log(error);
            }
            const reviews = await fetchReviews(movieId);

            setReviews(reviews);
            window.scrollTo({ top: 650, behavior: "smooth" });
        }
        getReviews();
    }, [movieId])

    return (
    <>
            {reviews && <Reviews reviews={reviews} />}
     </>       
    )
}

export default ReviewsView;