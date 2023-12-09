type ShowMoreProps = {
    addMoreFilms: () => void;
}

const ShowMore = ({ addMoreFilms }: ShowMoreProps) => (
  <div className="catalog__more">
    <button className="catalog__button" type="button" onClick={addMoreFilms}>
      Show more
    </button>
  </div>
);

export default ShowMore;
