import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/selectors';
import { filterContacts } from '../../redux/actions';
import s from '../Filter/Filter.module.css';

export const Filter = () => {
  const value = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Найти контакт по имени
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};
