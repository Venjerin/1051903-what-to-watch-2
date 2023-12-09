import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MoreLikeThis from '../../components/more-like-this/more-like-this';
import Spinner from '../../components/spinner/spinner';
import Tabs from '../../components/tabs/tabs';
import { APIRoute, AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../mocks/films';
import { store } from '../../store';
import {
  State,
  fetchCommentsAction,
  fetchMoreLikeFilmsAction,
  fetchSelectedFilmAction,
  logoutAction,
} from '../../store/api-actions';
import PageNotFound from '../404-not-found/404-not-found';
import Logo from '../../components/logo/logo';
import { FavoriteFilm } from '../main/main';

export type Films = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
};

type User = {
  email: string;
  name: string;
  avatarUrl: string;
};

const MoviePage: React.FC = React.memo(() => {
  const id = (useParams().id || '') as string;
  const films: Films[] = useSelector((state: State) => state.previewFilms);

  const [isLoading, setIsLoading] = useState(true);
  const film: Film = useSelector((state: State) => state.selectedFilm);
  const moreLikeFilms: Films[] = useSelector((state: State) => state.moreLike);
  const authStatus = useSelector((state: State) => state.authorizationStatus);
  const user: User = useSelector((state: State) => state.user);
  const favoriteFilms: FavoriteFilm[] = useSelector((state: State) => state.favoriteFilms);

  const navigate = useNavigate();

  if (id !== undefined || films.find((item) => item.id === id)) {

    const handleSignOut = () => {
      store.dispatch(logoutAction());
      navigate(AppRoute.Main);
    };

    useEffect(() => {
      store.dispatch(fetchSelectedFilmAction(id)).then(() => {
        store.dispatch(fetchMoreLikeFilmsAction(id)).then(() => {
          store.dispatch(fetchCommentsAction(id)).then(() => setIsLoading(false));
        });
      });
      return setIsLoading(true);
    }, [id]);

    if (isLoading) {
      return <Spinner />;
    }

    const changeFavoriteFilms = () => {
      if (authStatus !== AuthorizationStatus.Auth){
        navigate(APIRoute.SignIn);
      } else {
        //code for list changing
      }
    };

    return (
      <>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={film.backgroundImage} alt={film.name} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header film-card__head">
              <Logo />
              {authStatus === AuthorizationStatus.Auth ? (
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
              ) : (
                <Link
                  to={AppRoute.SignIn}
                  style={{ textDecoration: 'none', marginLeft: 'auto' }}
                >
                  <ul className="user-block">
                    <li className="user-block__item">
                      <a className="user-block__link">Sign In</a>
                    </li>
                  </ul>
                </Link>
              )}
            </header>

            <div className="film-card__wrap">
              <div className="film-card__desc">
                <h2 className="film-card__title">{film.name}</h2>
                <p className="film-card__meta">
                  <span className="film-card__genre">{film.genre}</span>
                  <span className="film-card__year">{film.released}</span>
                </p>

                <div className="film-card__buttons">
                  <button
                    className="btn btn--play film-card__button"
                    type="button"
                  >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <Link
                      to={AppRoute.Player.replace(':id', `${film.id}`)}
                      style={{ textDecoration: 'none', color: '#eee5b5' }}
                    >
                      <span>Play</span>
                    </Link>
                  </button>
                  <button
                    className="btn btn--list film-card__button"
                    type="button"
                    onClick={changeFavoriteFilms}
                  >
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                    <span className="film-card__count">{favoriteFilms.length}</span>
                  </button>
                  {authStatus === AuthorizationStatus.Auth ? (
                    <Link
                      to={AppRoute.AddReview.replace(':id', `${film.id}`)}
                      className="btn film-card__button"
                    >
                      Add review
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img
                  src={film.posterImage}
                  alt={film.name}
                  width="218"
                  height="327"
                />
              </div>

              <Tabs selectedFilm={film} />
            </div>
          </div>
        </section>

        <div className="page-content">
          <MoreLikeThis films={moreLikeFilms} />

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </>
    );
  } else {
    return <PageNotFound />;
  }
});

export default MoviePage;
