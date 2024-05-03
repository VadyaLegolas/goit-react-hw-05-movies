import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: black;
  &:hover,
  &:focus {
    color: blue;
  }
`;

export const MovieItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const MovieImg = styled.img`
  margin-right: 10px;
`;
