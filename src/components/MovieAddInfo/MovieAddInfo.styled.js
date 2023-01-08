import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AddInfoList = styled.ul`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &::before {
    content: '👉';
    margin-inline-end: 5px;
  }
`;
