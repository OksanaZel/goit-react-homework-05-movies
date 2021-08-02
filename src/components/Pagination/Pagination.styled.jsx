import styled from "@emotion/styled/macro";

export const StyledPaginateContainer = styled.div`
.container {
    display:flex;
    justify-content: center;
    margin-bottom: 25px;
}

  .item{
  width: 50px;
  height: 50px;
  margin-right:25px;
  }

  .activeItem {
    background-color: #2196f3;
    border-radius: 4px;
    color: #fff;
  }

  .previous{
    width: 50px;
    height: 50px;
  }

  .next{
    width: 50px;
    height: 50px;
  }

  .break-me {
    width: 50px;
    height: 50px;
  }

  .link{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    width: 100%;
    height: 100%;

    &:hover{
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
    }
  }

  .previousLink{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 100%;
    height: 100%;

    &:hover{
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
  }
}

  .nextLink{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 100%;
    height: 100%;

    &:hover{
      background-color: #2196f3;
      border-radius: 4px;
      color: #fff;
    }
  }

  .breakLink{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    width: 100%;
    height: 100%;
  }
`;