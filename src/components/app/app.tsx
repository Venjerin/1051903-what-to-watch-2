import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';
import Main from '../../pages/main/main';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import PageNotFound from '../../pages/404-not-found/404-not-found';
import PrivateRoute from '../private-root/private-root';
import { TFilm } from '../../mocks/films';
import { checkAuthAction, fetchFilmsAction, getPromoFilmAction } from '../../store/api-actions';
import { store } from '../../store';
import { MoreLike } from '../more-like-this/more-like-this';

type AppProps = {
  films: TFilm[];
  genres: string[];
  selectFilmsByGenre: (genre: string, films: MoreLike[]) => MoreLike[];
};

const App = ({ films, genres, selectFilmsByGenre}: AppProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    checkAuthAction();
    store.dispatch(getPromoFilmAction());
    store.dispatch(fetchFilmsAction()).then(() => {
      setIsLoading(false);
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              films={films}
              genres={genres}
              selectFilmsByGenre={selectFilmsByGenre}
              isLoading = {isLoading}
            />
          }
        >
        </Route>
        <Route path={AppRoute.SignIn} element={<SignIn />}></Route>
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        >
        </Route>
        <Route
          path={AppRoute.Film}
          element={<MoviePage/>}
        >
        </Route>
        <Route
          path={AppRoute.AddReview}
          element={<AddReview />}
        >
        </Route>
        <Route
          path={AppRoute.Player}
          element={<Player/>}
        >
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
