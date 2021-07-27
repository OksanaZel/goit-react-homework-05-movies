import styled from "@emotion/styled/macro";

export const CastList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  margin-bottom: 50px;
`;

export const CastItem = styled.li`

`;

export const CastTitle = styled.p`
text-align:center;
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;