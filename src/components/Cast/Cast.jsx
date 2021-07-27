import React from "react";
import PropTypes from "prop-types";
import { Container } from "../App/App.styled";
import { CastList, CastItem, CastTitle, Image } from "./Cast.styled";
import defaultImage from "../images/default.png";

function Cast({credits}) {
    return (
        <Container>
            <CastList>
                {credits.map(({id, name, profile_path}) => (
                    <CastItem key={id}>
                        <Image src={profile_path ? `https://image.tmdb.org/t/p/original${profile_path}`
                            : defaultImage} alt={name} />
                        <CastTitle>{name}</CastTitle>
                    </CastItem>
                ))}
            </CastList>
        </Container>
    )
}

Cast.propTypes = {
    credits: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        profile_path: PropTypes.string.isRequired,
    }),),
}

export default Cast;
