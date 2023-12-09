import { useState } from 'react';
import MoviePageDetails from '../../pages/movie-page-details/movie-page-details';
import MoviePageOverview from '../../pages/movie-page-overview/movie-page-overview';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import { Film } from '../../mocks/films';

type TabsProps = {
  selectedFilm: Film;
};

const Tabs = ({ selectedFilm }: TabsProps) => {
  const [activeButton, setActiveButton] = useState('Overview');
  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li
            className={`film-nav__item ${
              activeButton === 'Overview' ? 'film-nav__item--active' : ''
            }`}
          >
            <p
              className="film-nav__link"
              onClick={() => setActiveButton('Overview')}
              style={{ cursor: 'pointer' }}
            >
              Overview
            </p>
          </li>
          <li
            className={`film-nav__item ${
              activeButton === 'Details' ? 'film-nav__item--active' : ''
            }`}
          >
            <p
              className="film-nav__link"
              onClick={() => setActiveButton('Details')}
              style={{ cursor: 'pointer' }}
            >
              Details
            </p>
          </li>
          <li
            className={`film-nav__item ${
              activeButton === 'Reviews' ? 'film-nav__item--active' : ''
            }`}
          >
            <p
              className="film-nav__link"
              onClick={() => setActiveButton('Reviews')}
              style={{ cursor: 'pointer' }}
            >
              Reviews
            </p>
          </li>
        </ul>
      </nav>
      {activeButton === 'Overview' && (
        <MoviePageOverview selectedFilm={selectedFilm} />
      )}
      {activeButton === 'Details' && (
        <MoviePageDetails selectedFilm={selectedFilm} />
      )}
      {activeButton === 'Reviews' && (
        <MoviePageReviews/>
      )}
    </div>
  );
};

export default Tabs;
