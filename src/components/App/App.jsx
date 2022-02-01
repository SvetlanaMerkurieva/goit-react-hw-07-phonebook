import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import s from './App.module.css';

function App({
  contacts,
  filter,
  onAddContact,
  onDeleteContact,
  onChangeFilter,
}) {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <h2 className={s.title}>Телефонная книга</h2>
        <ContactForm onSubmit={onAddContact} contacts={contacts} />
        <h3 className={s.title}>Контакты</h3>
        <Filter value={filter} onChange={onChangeFilter} />
        <ContactList contacts={contacts} onDeleteContact={onDeleteContact} />
      </header>
    </div>
  );
}

const getVisibleContact = (contacts, filter) => {
  const normalValueFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalValueFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContact(items, filter);
  return {
    contacts: visibleContacts,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: ({ name, number }) =>
      dispatch(actions.addContact({ name, number })),
    onDeleteContact: id => dispatch(actions.deleteContact(id)),
    onChangeFilter: e => dispatch(actions.filterContacts(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
