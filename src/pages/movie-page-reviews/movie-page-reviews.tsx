import { useSelector } from 'react-redux';
import { State } from '../../store/api-actions';

type Comment = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
};

const MoviePageReviews = () => {
  const comments: Comment[] = useSelector((state: State) => state.comments);
  const normalizeDate = (date: string) => {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString();
  };
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.map((comment) => (
          <div className="review" key={comment.id}>
            <blockquote className="review__quote">
              <p className="review__text">{comment.comment}</p>

              <footer className="review__details">
                <cite className="review__author">{comment.user}</cite>
                <time className="review__date" dateTime="2016-12-24">
                  {normalizeDate(comment.date)}
                </time>
              </footer>
            </blockquote>

            <div className="review__rating">{comment.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MoviePageReviews;
