import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export type MoreLike = {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
};

type MoreLikeThisProps = {
  films: MoreLike[];
};

const MoreLikeThis = ({ films }: MoreLikeThisProps) => (
  <section className="catalog catalog--like-this">
    <h2 className="catalog__title">More like this</h2>
    <div className="catalog__films-list">
      {films.map((film) => (
        <Link
          key={film.id}
          to={AppRoute.Film.replace(':id', `${film.id}`)}
          style={{ width: '100%', color: '#dfcf77' }}
        >
          <article
            className="small-film-card catalog__films-card"
            key={film.name}
          >
            <div className="small-film-card__image">
              <img
                src={film.previewImage}
                alt={film.name}
                width="280"
                height="175"
                style={{ maxWidth: '100%' }}
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">
                {film.name}
              </a>
            </h3>
          </article>
        </Link>
      ))}
    </div>
  </section>
);

export default MoreLikeThis;
