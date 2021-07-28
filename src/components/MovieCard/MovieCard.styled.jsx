import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";

export const MovieLink = styled(Link)`
text-decoration: none;
`;

export const Card = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 10px;
`;

export const CardTitle = styled.h2`
  font-style: normal;
  font-weight: 700;
  color: #2a363b;
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  
`;

export const CardInfo = styled.div`
display: flex;
justify-content:space-around;
`;

export const Date = styled.p`
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #2196f3;
margin-bottom: 10px;
`;

export const Star = styled.p`
font-style: normal;
font-weight: 700;
font-size: 14px;
color: #2196f3;
margin-bottom: 10px;
`;
