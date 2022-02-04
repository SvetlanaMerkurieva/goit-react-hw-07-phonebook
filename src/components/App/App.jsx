import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h2 className={s.title}>Телефонная книга</h2>
        <ContactForm />
        <h3 className={s.title}>Контакты</h3>
        <Filter />
        <ContactList />
      </header>
    </div>
  );
}

export default App;
