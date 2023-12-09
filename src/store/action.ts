import { createAction } from '@reduxjs/toolkit';
import { MoreLike } from '../components/more-like-this/more-like-this';
import { PromoFilm } from '../pages/main/main';
import { AuthorizationStatus } from '../const';
import { Film } from '../mocks/films';

type UserData = {
  email: string;
  name: string;
  avatarUrl: string;
};

export type Comment = {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
};

export const changeGenre = createAction(
  'moviepage/changeGenre',
  (genre: string) => ({
    payload: genre,
  })
);

export const loadFilms = createAction(
  'moviepage/loadFilms',
  (films: MoreLike[]) => ({
    payload: films,
  })
);

export const loadPromoFilm = createAction(
  'moviepage/loadPromoFilm',
  (film: PromoFilm) => ({
    payload: film,
  })
);

export const loadFavFilms = createAction(
  'moviepage/loadFavFilms',
  (films: MoreLike[]) => ({
    payload: films,
  })
);

export const setAuthStatus = createAction(
  'user/setAuthStatus',
  (auth: AuthorizationStatus) => ({
    payload: auth,
  })
);

export const loadSelectedFilm = createAction(
  'moviepage/loadSelectedFilm',
  (film: Film) => ({
    payload: film,
  })
);

export const loadMoreLike = createAction(
  'moviepage/loadMoreLike',
  (films: MoreLike[]) => ({
    payload: films,
  })
);

export const loadComments = createAction(
  'moviepage/loadComments',
  (comments: Comment[]) => ({
    payload: comments,
  })
);

export const setUserData = createAction(
  'user/setuserData',
  (userData: UserData) => ({
    payload: userData,
  })
);
