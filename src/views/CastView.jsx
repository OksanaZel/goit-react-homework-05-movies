import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import toast from 'react-hot-toast';
import { fetchCastInformation } from "../services/api-service"
import Cast from "../components/Cast/Cast"

function CastView() {
    const { movieId } = useParams();
    const [credits, setCredits] = useState(null);

    useEffect(() => {
        async function getCastInformation() {
            try {
                const cast = await fetchCastInformation(movieId);

                if (!cast.length) {
                    throw new Error("Cast not found");
                }

            setCredits(cast);
                
            } catch (error) {
                console.log(error)
                toast.error("Cast not found");
            }
            const cast = await fetchCastInformation(movieId);

            setCredits(cast);
        }
        getCastInformation();
    }, [movieId])

    return (
        <>
            {credits && <Cast credits={credits} />}
        </>
    )
}

export default CastView;
