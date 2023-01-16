import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchActorsById } from '../../services/API';
import { Box } from 'components/Box';
import { Loader } from '../../components/Loader';
import { errorMessage } from '../../services/ErrorMessage';
import placeholder from '../../images/coverPlaceholder.jpg';
import { ActorsListItem, Image, Name } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { moviesId } = useParams();

  useEffect(() => {
    const getActorsById = async id => {
      if (id === undefined) {
        return;
      }

      try {
        setIsLoading(true);
        const actors = await fetchActorsById(id);
        setActors(actors.cast);
      } catch {
        errorMessage();
      } finally {
        setIsLoading(false);
      }
    };

    getActorsById(moviesId);
  }, [moviesId]);

  if (actors === null) {
    return;
  }

  return (
    <Box paddingLeft="16px" paddingRight="16px" paddingTop="10px">
      {actors.length > 0 ? (
        <ul>
          {actors.map(actor => {
            const { profile_path, name, character, id } = actor;

            return (
              <ActorsListItem key={id}>
                {profile_path ? (
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
      ) : (
        'We don`t have information for this movie'
      )}

      {isLoading && <Loader />}
    </Box>
  );
};

export default Cast;
