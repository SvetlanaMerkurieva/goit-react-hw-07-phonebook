import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import { getContacts } from '../../redux/selectors';
import s from './ContactForm.module.css';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleInputChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isContact = contacts.find(contact => contact.name === name);

    if (isContact) {
      return window.alert(`Контакт с именем ${name} уже существет`);
    } else {
      dispatch(addContact({ name, number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <section>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.text}>
          Имя
          <input
            className={s.input}
            type="text"
            placeholder="Введите имя"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может содержать только буквы, апостроф, тире и пробелы. Например Адриан, Якоб Мерсер, Шарль де Батц де Кастельмор д'Артаньян"
            required
            onChange={handleInputChange}
          />
        </label>
        <label className={s.text}>
          Номер
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            placeholder="Введите номер телефона"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, дефисы, круглые скобки и может начинаться с +."
            required
            onChange={handleInputChange}
          />
        </label>
        <button className={s.button} type="submit">
          Добавить контакт
        </button>
      </form>
    </section>
  );
};
