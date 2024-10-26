import css from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.filters.filters);
  return (
    <div>
      <label htmlFor="find" className={css.label}>
        <span>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          name="find"
          value={filters}
          onChange={evt => {
            const action = changeFilter(evt.target.value);
            dispatch(action);
          }}
        />
      </label>
    </div>
  );
};

export default SearchBox;
