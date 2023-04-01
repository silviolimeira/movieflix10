import './styles.css';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="movie-card-img">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="movie-card-body">
        <div>
          <h1>{movie.title}</h1>
        </div>
        <div>
          <h2>{movie.year}</h2>
        </div>
        <div>
          <p>{movie.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
