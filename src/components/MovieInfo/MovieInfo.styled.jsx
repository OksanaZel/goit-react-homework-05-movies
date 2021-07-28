import styled from "@emotion/styled/macro";

export const MovieInfoContainer = styled.div`
display: flex;
max-width: 1170px;
padding: 12px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 25px;
box-shadow: 0px 4px 10px #2196f3;
`;

export const Image = styled.img`
  display: block;
  max-width: 320px;
  height: auto;
  object-fit: cover;
  margin-right: 45px;
`;

export const MovieInfoWrappet = styled.div`

`;

export const MovieTitle = styled.h1`
text-align: center;
margin-bottom: 25px;
`;

export const MovieSubTitle = styled.h2`
font-weight: 500;
  color: #2a363b;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const MovieParams = styled.p`
margin-bottom: 15px;
`;
