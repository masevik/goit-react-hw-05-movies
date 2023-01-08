import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  color: #3f51b5;
`;

export const Overview = styled.h3`
  margin-top: 10px;
`;

export const Genres = styled.h4`
  margin-top: 10px;
`;

export const Image = styled.img`
  margin-bottom: 10px;
`;

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
