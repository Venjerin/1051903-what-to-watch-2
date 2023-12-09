import { Film } from '../../mocks/films';

type MoviePageDetailsProps = {
  selectedFilm: Film;
};

const MoviePageDetails = ({ selectedFilm }: MoviePageDetailsProps) => (
  <div className="film-card__text film-card__row">
    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Director</strong>
        <span className="film-card__details-value">
          {selectedFilm.director}
        </span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Starring</strong>
        <span className="film-card__details-value">
          Bill Murray, <br />
          Edward Norton, <br />
          Jude Law, <br />
          Willem Dafoe, <br />
          Saoirse Ronan, <br />
          Tony Revoloru, <br />
          Tilda Swinton, <br />
          Tom Wilkinson, <br />
          Owen Wilkinson, <br />
          Adrien Brody, <br />
          Ralph Fiennes, <br />
          Jeff Goldblum
        </span>
      </p>
    </div>

    <div className="film-card__text-col">
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Run Time</strong>
        <span className="film-card__details-value">
          {selectedFilm.runTime}m
        </span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Genre</strong>
        <span className="film-card__details-value">{selectedFilm.genre}</span>
      </p>
      <p className="film-card__details-item">
        <strong className="film-card__details-name">Released</strong>
        <span className="film-card__details-value">{selectedFilm.released}</span>
      </p>
    </div>
  </div>
);

export default MoviePageDetails;
