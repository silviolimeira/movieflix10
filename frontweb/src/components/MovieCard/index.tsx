import './styles.css';
import { Movie } from 'types/movie';
import { Link } from 'react-router-dom';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Link to={`/movies/${movie.id}`}>
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
    </Link>
  );
};

export default MovieCard;
