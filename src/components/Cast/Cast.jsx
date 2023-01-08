import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActorsById } from '../../components/API';
import { Box } from 'components/Box';
import { Loader } from '../../components/Loader';
import { errorMessage } from '../../components/ErrorMessage';
import placeholder from '../../images/coverPlaceholder.jpg';
import { ActorsListItem, Image, Name } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const getCastById = async id => {
      if (id === undefined) {
        return;
      }

      try {
        setIsLoading(true);
        const actors = await fetchActorsById(id);
        setActors(actors);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getCastById(moviesId);
  }, [moviesId]);

  if (actors === null) {
    return;
  }

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      <ul>
        {actors.cast.map(actor => {
          const { profile_path, name, character } = actor;

          return (
            <ActorsListItem key={actor.id}>
              {actor.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={`${name}`}
                ></Image>
              ) : (
                <Image src={placeholder} alt="placeholder"></Image>
              )}
              <div>
                <Name>{name}</Name>
                <p>Character: {character}</p>
              </div>
            </ActorsListItem>
          );
        })}
      </ul>

      {isLoading && <Loader />}
    </Box>
  );
};
