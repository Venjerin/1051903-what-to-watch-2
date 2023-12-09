import { useNavigate, useParams } from 'react-router-dom';
import PageNotFound from '../404-not-found/404-not-found';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { State, logoutAction, sendReviewTextAction } from '../../store/api-actions';
import { Film } from '../../mocks/films';
import Logo from '../../components/logo/logo';
import { store } from '../../store';
import { AppRoute } from '../../const';

type User = {
  email: string;
  name: string;
  avatarUrl: string;
};

const AddReview = () => {
  const selectedFilm: Film = useSelector((state:State) => state.selectedFilm);
  const user: User = useSelector((state: State) => state.user);
  const [selectedRating, setSelectedRating] = useState(1);
  const navigate = useNavigate();

  const [reviewText, setReviewText] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReviewText(e.target.value);
  };
  const { id } = useParams();
  if (id === undefined) {
    return <PageNotFound />;
  } else {
    const ratings = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

    const handleSignOut = () => {
      store.dispatch(logoutAction());
      navigate(AppRoute.Main);
    };

    const sendReview = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      store.dispatch(sendReviewTextAction({comment: reviewText, rating: selectedRating, id: id}));
    };

    return (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={selectedFilm.backgroundImage} alt={selectedFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <a href="film-page.html" className="breadcrumbs__link">
                    {selectedFilm.name}
                  </a>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <div className="user-name" style={{ marginRight: '20px' }}>
                {user.name}
              </div>
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img
                    src={user.avatarUrl}
                    alt="User avatar"
                    width="63"
                    height="63"
                  />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link" onClick={handleSignOut}>
                  Sign out
                </a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={selectedFilm.posterImage}
              alt={selectedFilm.name}
              width="218"
              height="327"
            />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form" onSubmit={sendReview}>
            <div className="rating">
              <div className="rating__stars">
                {ratings.map((rating) => (
                  <>
                    <input
                      className="rating__input"
                      id={`star-${rating}`}
                      type="radio"
                      name="rating"
                      value={rating}
                      checked={selectedRating === rating}
                      onChange={() => setSelectedRating(rating)}
                    />
                    <label className="rating__label" htmlFor={`star-${rating}`}>
                      Rating {rating}
                    </label>
                  </>
                ))}
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={handleChange}
              >
              </textarea>
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
};

export default AddReview;
