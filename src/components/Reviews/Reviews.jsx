import React from "react";
import PropTypes from "prop-types";
import { Container } from "../App/App.styled";
import { ReviewsList, ReviewsItem, AuthorName, AuthorContent } from "./Reviews.styled";

function Reviews({reviews}) {
    return (
        <Container>
            <ReviewsList>
                {reviews.map(({id, author, content}) => (
                    <ReviewsItem key={id}>
                        <AuthorName>{author}</AuthorName>
                        <AuthorContent>{content}</AuthorContent>
                    </ReviewsItem>
                ))}
            </ReviewsList>
        </Container>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        author: PropTypes.string,
        content: PropTypes.string,
    }),),
}

export default Reviews;
