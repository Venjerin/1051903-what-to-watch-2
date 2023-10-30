import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TFilm } from '../../mocks/films';
import { store } from '../../store';
import { changeGenre } from '../../store/action';
import CardsList from '../card-list/card-list';

type GenreListProps = {
  visibleFilms: number;
  genres: string[];
  selectFilmsByGenre: (genre: string, films: TFilm[]) => TFilm[];
  setVisibleFilms: any;
  films: TFilm[];
};

const GenreList = ({ genres, selectFilmsByGenre, visibleFilms, setVisibleFilms,}: GenreListProps) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state: any) => state.selectedGenre);
  const previewFilms = store.getState().previewFilms;
  const genreFilms = selectFilmsByGenre(selectedGenre, previewFilms);
  const genreFilmsToShow = genreFilms.slice(0,visibleFilms);

  useEffect(()=> {
    setVisibleFilms(8)
  }, [])
  return (
    <>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            className={cn('catalog__genres-item', {
              'catalog__genres-item--active': genre === selectedGenre,
            })}
          >
            <p
              className="catalog__genres-link"
              style={{ cursor: 'pointer' }}
              onClick={() => dispatch(changeGenre(genre))}
            >
              {genre}
            </p>
          </li>
        ))}
      </ul>

      <CardsList genreFilms={genreFilmsToShow} />
    </>
  );
};

export default GenreList;
