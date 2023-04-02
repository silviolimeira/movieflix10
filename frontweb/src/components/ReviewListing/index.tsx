import './styles.css';
import { Review } from 'types/review';
import { ReactComponent as StarImage } from 'assets/images/star.svg';

type Props = {
  reviews: Review[];
};

const ReviewListing = ({ reviews }: Props) => {
  console.log('REVIEWS: ', reviews);
  return (
    <div className="container-fluid">
      <div className="review-card">
        {reviews?.map((review) => (
          <div className="review-card-item" key={review.id}>
            <h1>
              <StarImage className="star" /> {review.user.name}
            </h1>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewListing;
