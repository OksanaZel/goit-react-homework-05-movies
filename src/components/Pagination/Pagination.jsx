import React from "react";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {StyledPaginateContainer} from "./Pagination.styled"

function Pagination({ totalPages, onClick }) {
    return (
        <StyledPaginateContainer>
        <ReactPaginate
                previousLabel={'previous'}
                
                previousClassName={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onClick}
          containerClassName={'container'}
                activeClassName={'active'}
                pageClassName={'item'}

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
