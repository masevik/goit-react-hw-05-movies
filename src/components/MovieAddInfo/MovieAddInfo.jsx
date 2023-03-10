import { Box } from 'components/Box';
import { useLocation } from 'react-router-dom';
import { AddInfoList, StyledLink } from './MovieAddInfo.styled';

export const MovieAddInfo = () => {
  const location = useLocation();

  return (
    <Box borderBottom="1px solid #3f51b5" marginBottom="10px">
      <p>Additional information</p>
      <AddInfoList>
        <li>
          <StyledLink to="cast" state={{ ...location.state }}>
            Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ ...location.state }}>
            Reviews
          </StyledLink>
        </li>
      </AddInfoList>
    </Box>
  );
};
