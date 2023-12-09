import cn from 'classnames';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeGenre } from '../../store/action';
import CardsList from '../card-list/card-list';
import { State } from '../../store/api-actions';
import { MoreLike } from '../more-like-this/more-like-this';

type GenreListProps = {
  visibleFilms: number;
  genres: string[];
  selectFilmsByGenre: (genre: string, films: MoreLike[]) => MoreLike[];
  setVisibleFilms: (number: number) => void;
};

const GenreList: React.FC<GenreListProps> = React.memo(({genres, selectFilmsByGenre, visibleFilms, setVisibleFilms }: GenreListProps) => {
  const dispatch = useDispatch();
  const selectedGenre = useSelector((state: State) => state.selectedGenre);
  const previewFilms: MoreLike[] = useSelector((state: State) => state.previewFilms);
  const genreFilms = selectFilmsByGenre(selectedGenre, previewFilms);
  const genreFilmsToShow = genreFilms.slice(0, visibleFilms);

  useEffect(() => {
    setVisibleFilms(8);
  }, []);
  return (
    <>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li key={genre}
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
});

export default GenreList;
