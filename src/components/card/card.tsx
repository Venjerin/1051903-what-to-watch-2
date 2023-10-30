import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';

type CardProps = {
  film: any;
};

const Card = ({ film }: CardProps) => {
  const [, setActiveFilm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout: any = useRef(null);

  const handleMouseEnter = () => {
    setActiveFilm(true);
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setActiveFilm(false);
    setIsHovered(false);
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={AppRoute.Film.replace(':id', `${film.id}`)}
        style={{ textDecoration: 'none', color: '#c9b37e' }}
      >
        {isHovered ? (
          <VideoPlayer film={film} />
        ) : (
          <>
            <div className="small-film-card__image">
              <img
                src={film.previewImage}
                alt={film.name}
                width="280"
                height="175"
              />
            </div>
            <h3 className="small-film-card__title">
              <a className="small-film-card__link" href="film-page.html">
                {film.name}
              </a>
            </h3>
          </>
        )}
      </Link>
    </article>
  );
};

export default Card;
