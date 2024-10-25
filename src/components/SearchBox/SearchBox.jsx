import css from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <label htmlFor="find" className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          name="find"
          value={filter}
          onChange={event => setFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
