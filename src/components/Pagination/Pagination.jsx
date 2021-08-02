import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import {StyledPaginateContainer} from "./Pagination.styled"

function Pagination({ totalPages, onClick}) {
    return (
        <StyledPaginateContainer>
        <ReactPaginate
                pageCount={totalPages}
                onPageChange={onClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'container'}
                pageClassName={'item'}
                activeClassName={'activeItem'}
                pageLinkClassName={'link'}
                previousClassName={'previous'}
                previousLinkClassName={'previousLink'}
                previousLabel={<AiOutlineArrowLeft />}
                nextClassName={'next'}
                nextLinkClassName={"nextLink"}
                nextLabel={<AiOutlineArrowRight />}
                breakClassName={'break-me'}
                breakLabel={'...'}
                breakLinkClassName={'breakLink'}
            />
            </StyledPaginateContainer>
    )
}


Pagination.propTypes = {
    totalPages: PropTypes.number,
    initialPage: PropTypes.number,
    onClick: PropTypes.func,
}

export default Pagination;
