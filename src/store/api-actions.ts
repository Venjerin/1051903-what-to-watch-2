import { createAsyncThunk } from '@reduxjs/toolkit';
import { APIRoute, AuthorizationStatus } from '../const';
import { loadComments, loadFilms, loadMoreLike, loadSelectedFilm, setAuthStatus, setUserData } from './action';
import { store } from '.';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../components/services/token';


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export const fetchSelectedFilmAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (filmId, { dispatch, extra: api }) => {
  try {
    const response = await api.get(APIRoute.SelectFilm.replace(':filmId', `${filmId}`));
    dispatch(loadSelectedFilm(response.data));
  } catch (error) {
    console.log(error)
  }
});

export const fetchMoreLikeFilmsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/moreLikeFilm', async (filmId, { dispatch, extra: api }) => {
try {
  const response = await api.get(APIRoute.MoreLike.replace(':filmId', `${filmId}`));
  dispatch(loadMoreLike(response.data));
} catch (error) {
  console.log(error)
}
});

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}
>('data/moreLikeFilm', async (filmId, { dispatch, extra: api }) => {
try {
  const response = await api.get(APIRoute.FilmComments.replace(':filmId', `${filmId}`));
  dispatch(loadComments(response.data));
} catch (error) {
  console.log(error)
}
});

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const response = await api.get(APIRoute.Films);
  dispatch(loadFilms(response.data));
});

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    await api.get(APIRoute.SignIn);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
  } catch (error) {
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
    console.error(error)  
  }
});

export const loginActon = createAsyncThunk<void, any, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const response = (await api.post(APIRoute.SignIn, { email, password }));
    saveToken(response.data.token);
    dispatch(setAuthStatus(AuthorizationStatus.Auth));
    dispatch(
      setUserData({
        email: response.data.email,
        name: response.data.name,
        avatarUrl: response.data.avatarUrl,
      })
    );
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.SignOut);
    dropToken();
    dispatch(setAuthStatus(AuthorizationStatus.NoAuth));
  }
);

 