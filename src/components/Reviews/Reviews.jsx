import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviewsById } from '../../components/API';
import { Box } from 'components/Box';
import { Loader } from '../../components/Loader';
import { errorMessage } from '../../components/ErrorMessage';
import { ReviewsListItem, Name } from './Reviews.styled';

export const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const getReviewsById = async id => {
      if (id === undefined) {
        return;
      }

      try {
        setIsLoading(true);
        const reviews = await fetchReviewsById(id);
        setReviews(reviews.results);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getReviewsById(moviesId);
  }, [moviesId]);

  if (reviews === null) {
    return;
  }

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;

            return (
              <ReviewsListItem key={id}>
                <Name>Author: {author}</Name>
                <p>{content}</p>
              </ReviewsListItem>
            );
          })}
        </ul>
      ) : (
        'We don`t have any reviews for this movie'
      )}
      {isLoading && <Loader />}
    </Box>
  );
};
