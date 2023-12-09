import Card from '../card/card';
import { MoreLike } from '../more-like-this/more-like-this';

type CardListProps = {
  genreFilms: MoreLike[];
};

const CardsList = ({ genreFilms }: CardListProps) => (
  <div className="catalog__films-list">
    {genreFilms.map((film) => (
      <Card film={film} key={film.name} />
    ))}
  </div>
);

export default CardsList;
