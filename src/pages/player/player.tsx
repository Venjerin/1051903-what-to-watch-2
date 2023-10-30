import { Link, useParams } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Film } from '../../mocks/films';
import { useSelector } from 'react-redux';
import { State } from '../../store/api-actions';

const Player = () => {
  const id = useParams().id as string;
  const selectedFilm:Film = useSelector((state: State) => state.selectedFilm)

  function formatTime(minutes: number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const seconds = 0;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedTime;
  }

  return (
    <div className="player">
      <video
        src="#"
        className="player__video"
        poster="img/player-poster.jpg"
      ></video>
      <Link to={AppRoute.Film.replace(':id', `${id}`)}>
        <button type="button" className="player__exit">
          Exit
        </button>
      </Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress
              className="player__progress"
              value="30"
              max="100"
            ></progress>
            <div className="player__toggler" style={{ left: '30%' }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{formatTime(selectedFilm.runTime)}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">Transpotting</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
