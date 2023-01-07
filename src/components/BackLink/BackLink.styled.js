import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: #3f51b5;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: #efb343;
  }
`;
