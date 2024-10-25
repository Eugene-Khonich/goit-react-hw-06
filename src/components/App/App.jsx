import './App.module.css';
import { useState, useEffect } from 'react';
import initialContacts from '../../contacts.json';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storageContacts = localStorage.getItem('contacts');
    if (storageContacts !== null) {
      return JSON.parse(storageContacts);
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredUsers = contacts.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase().trim())
  );

  const addContact = newContact => {
    setContacts(prevState => {
      return [...prevState, newContact];
    });
  };

  const deleteContacts = contactId => {
    setContacts(updateContacts => {
      return updateContacts.filter(contact => contact.id !== contactId);
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <div>
        <ContactForm addContact={addContact} />
        <SearchBox filter={filter} setFilter={setFilter} />
        <ContactList
          deleteContacts={deleteContacts}
          filteredUsers={filteredUsers}
        />
      </div>
    </div>
  );
};

export default App;
