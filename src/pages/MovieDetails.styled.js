import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BackLink = styled(Link)`
  margin-bottom: 10px;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  padding: 0 10px 2px 10px;
  color: black;
  background-color: aqua;
  font-weight: 700;
  &:hover,
  &:focus {
    background-color: orange;
  }
`;
