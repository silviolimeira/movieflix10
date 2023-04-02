import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Movie } from 'types/movie';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  movieId: string;
};

const MovieCard = ({ movieId }: Props) => {
  const [movie, setMovie] = useState<Movie>();

  const config: AxiosRequestConfig = {
    method: 'GET',
    url: `/movies/${movieId}`,
    withCredentials: true,
  };

  useEffect(() => {
    requestBackend(config).then((response) => {
      console.log('find Movie: ', response.data as Movie);
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="reviewpage-movie-card" key={movie?.id}>
      <div className="reviewpage-movie-card-img">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="reviewpage-movie-card-text">
        <div>
          <h1>{movie?.title}</h1>
        </div>
        <div>
          <h2>{movie?.year}</h2>
        </div>
        <div>
          <h3>{movie?.subTitle}</h3>
        </div>
        <div>
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
