import styled from "@emotion/styled/macro";

export const StyledPaginateContainer = styled.div`
.container {
    display:flex;
    justify-content: center;
    margin-bottom: 25px;
}

  .pagination {
    color: #0366d6;
  }

  .break-me {
    cursor: default;
    margin-right: 15px;
  }

  .active {
    border-color: transparent;
    background-color: #2196f3;
    color: white;
  }

  .item{
      margin-right:15px;
  }

  .previous{
      margin-right: 15px;
  }

`;