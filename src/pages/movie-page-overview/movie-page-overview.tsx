import { Film } from '../../mocks/films';

type MoviePageOverviewProps = {
  selectedFilm: Film;
};

const MoviePageOverview = ({ selectedFilm }: MoviePageOverviewProps) => {
  const getRatingDescription = (rating: number) => {
    const ratingDescriptions: { [key: number]: string } = {
      0: 'Bad',
      1: 'Bad',
      2: 'Bad',
      3: 'Normal',
      4: 'Normal',
      5: 'Good',
      6: 'Good',
      7: 'Good',
      8: 'Very good',
      9: 'Very good',
      10: 'Awesome',
    };

    return ratingDescriptions[Math.floor(rating)] || 'Ещё не оценено';
  };
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">
          {selectedFilm.rating}
        </div>
        <p className="film-rating__meta">
          <span className="film-rating__level">
            {getRatingDescription(selectedFilm.rating)}
          </span>
          <span className="film-rating__count">
            {selectedFilm.scoresCount} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{selectedFilm.description}</p>

        <p className="film-card__director">
          <strong>Director: {selectedFilm.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {selectedFilm.starring}</strong>
        </p>
      </div>
    </>
  );
};

export default MoviePageOverview;
