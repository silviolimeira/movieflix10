import { useParams } from 'react-router-dom';

import './styles.css';
import { useEffect, useState } from 'react';
import { Review } from 'types/review';
import { requestBackend } from 'util/requests';
import { AxiosRequestConfig } from 'axios';
import { hasAnyRoles } from 'util/auth';
import ReviewForm from 'components/ReviewForm';
import ReviewListing from 'components/ReviewListing';
import MovieCard from './MovieCard';

type UrlParams = {
  movieId: string;
};

const ReviewPage = () => {
  const { movieId } = useParams<UrlParams>();

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setReviews(response.data);
    });
  }, [movieId]);

  const handleInsertReview = (review: Review) => {
    const clone = [...reviews];
    clone.push(review);
    setReviews(clone);
  };

  return (
    <div className="reviews-container">
      <MovieCard movieId={movieId} />
      <div className="row reviews-data-container">
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <ReviewForm movieId={movieId} onInsertReview={handleInsertReview} />
        )}
        <ReviewListing reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewPage;
