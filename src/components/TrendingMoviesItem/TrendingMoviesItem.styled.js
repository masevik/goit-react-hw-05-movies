import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingMoviesStyledItem = styled.li`
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 30px;
  margin-right: 10px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;
