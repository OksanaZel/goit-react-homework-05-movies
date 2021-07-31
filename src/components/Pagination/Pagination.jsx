import React from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai"
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import {StyledPaginateContainer} from "./Pagination.styled"

function Pagination({ totalPages}) {
    return (
        <StyledPaginateContainer>
        <ReactPaginate
                previousLabel={<AiOutlineArrowLeft/>}
                
                previousClassName={'previous'}
          nextLabel={<AiOutlineArrowRight/>}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
        //   onPageChange={onClick}
          containerClassName={'container'}
                activeClassName={'active'}
                pageClassName={'item'}

            />
            </StyledPaginateContainer>
    )
}


Pagination.propTypes = {
    totalPages: PropTypes.number,
}

export default Pagination;
